// Writes static HTML for every route after `vite build` + the SSR build.
// Each page gets its own <head> (title, description, canonical, OG), the CSS and
// chunks of its year, and its rendered markup inside #root, which main.tsx then
// hydrates. Also writes sitemap.xml. The page list comes from the year registry
// (src/years.ts), so new years and pages are picked up automatically.
import { existsSync } from 'node:fs'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(root, 'dist')
const serverDir = resolve(root, 'dist-server')

const { render, routePages, SITE_URL } = await import(pathToFileURL(resolve(serverDir, 'entry-server.js')).href)

// '/' → index.html, '/2025/projects' → 2025/projects/index.html, '/404' → 404.html
// (Vercel serves 404.html, with a 404 status, for any unmatched URL)
const outputFile = (path) =>
	path === '/' ? 'index.html' : path === '/404' ? '404.html' : `${path.slice(1)}/index.html`

const manifestPath = resolve(distDir, '.vite/manifest.json')
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))

// <link> tags for the route's lazy chunks and their CSS (each year's stylesheet
// is imported by its Layout), so the page is styled immediately and hydrates
// without a request waterfall
function preloadTags(entries, template) {
	const js = new Set()
	const css = new Set()
	const visit = (key) => {
		const chunk = manifest[key]
		if (!chunk || js.has(chunk.file)) return
		js.add(chunk.file)
		chunk.css?.forEach((f) => css.add(f))
		chunk.imports?.forEach(visit)
	}
	for (const entry of entries) {
		if (!manifest[entry]) throw new Error(`prerender: ${entry} is not in the Vite manifest`)
		visit(entry)
	}
	// Skip files the template already loads
	const missing = (f) => !template.includes(`/${f}"`)
	return [
		...[...css].filter(missing).map((f) => `<link rel="stylesheet" crossorigin href="/${f}">`),
		...[...js].filter(missing).map((f) => `<link rel="modulepreload" crossorigin href="/${f}">`),
	].join('\n    ')
}

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function replaceOnce(html, pattern, replacement) {
	if (!pattern.test(html)) throw new Error(`prerender: pattern not found in template: ${pattern}`)
	return html.replace(pattern, replacement)
}

function applyHead(html, { title, description, path, noindex, ogImage }) {
	const url = `${SITE_URL}${path}`
	const t = escape(title)
	const d = escape(description)
	if (ogImage) {
		if (!existsSync(resolve(distDir, `.${ogImage}`))) {
			throw new Error(`prerender: ogImage ${ogImage} (${path}) is not in public/`)
		}
		const image = escape(`${SITE_URL}${ogImage}`)
		html = replaceOnce(html, /(<meta property="og:image" content=")[^"]*/, `$1${image}`)
		html = replaceOnce(html, /(<meta name="twitter:image" content=")[^"]*/, `$1${image}`)
	}
	html = replaceOnce(html, /<title>.*?<\/title>/, `<title>${t}</title>`)
	html = replaceOnce(html, /(<meta name="description" content=")[^"]*/, `$1${d}`)
	html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*/, `$1${url}`)
	html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*/, `$1${url}`)
	html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*/, `$1${t}`)
	html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*/, `$1${d}`)
	html = replaceOnce(html, /(<meta name="twitter:title" content=")[^"]*/, `$1${t}`)
	html = replaceOnce(html, /(<meta name="twitter:description" content=")[^"]*/, `$1${d}`)
	if (noindex) {
		html = replaceOnce(html, /<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex" />')
	}
	return html
}

const template = await readFile(resolve(distDir, 'index.html'), 'utf8')

const pages = routePages()

for (const { meta, modules } of pages) {
	const appHtml = await render(meta.path)
	let html = applyHead(template, meta)
	const tags = preloadTags(modules, template)
	if (tags) html = replaceOnce(html, /<\/head>/, `  ${tags}\n  </head>`)
	html = replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`)
	const file = outputFile(meta.path)
	const out = resolve(distDir, file)
	await mkdir(dirname(out), { recursive: true })
	await writeFile(out, html)
	console.log(`prerendered ${meta.path.padEnd(16)} → dist/${file} (${(html.length / 1024).toFixed(1)} kB)`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.filter(({ meta }) => !meta.noindex)
	.map(({ meta }) => `  <url><loc>${SITE_URL}${meta.path === '/' ? '/' : meta.path}</loc></url>`)
	.join('\n')}
</urlset>
`
await writeFile(resolve(distDir, 'sitemap.xml'), sitemap)
console.log(`wrote sitemap.xml (${pages.filter(({ meta }) => !meta.noindex).length} URLs)`)

await rm(serverDir, { recursive: true, force: true })
await rm(resolve(distDir, '.vite'), { recursive: true, force: true })
