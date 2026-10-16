import { useEffect } from 'react'
import { SITE_URL, type PageMeta } from '@/lib/seo'

function setAttr(selector: string, attr: string, value: string) {
	document.head.querySelector(selector)?.setAttribute(attr, value)
}

// Keeps the <head> in sync on client-side navigation. The initial HTML for each
// route already has these tags written by scripts/prerender.mjs.
export function usePageMeta({ title, description, path }: PageMeta) {
	useEffect(() => {
		const url = `${SITE_URL}${path}`
		document.title = title
		setAttr('meta[name="description"]', 'content', description)
		setAttr('link[rel="canonical"]', 'href', url)
		setAttr('meta[property="og:url"]', 'content', url)
		setAttr('meta[property="og:title"]', 'content', title)
		setAttr('meta[property="og:description"]', 'content', description)
		setAttr('meta[name="twitter:title"]', 'content', title)
		setAttr('meta[name="twitter:description"]', 'content', description)
	}, [title, description, path])
}
