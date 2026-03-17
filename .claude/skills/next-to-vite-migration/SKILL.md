---
name: next-to-vite
description: Convert Next.js components to Vite-compatible React components. Handles Image, Link, Head, and API routes.
---

# Next.js to Vite Migration

Convert Next.js specific code to Vite/React standards.

## Transformations

### Image Component
- Replace `next/image` with standard `img` tags
- For optimized images, create a reusable `Image` component in `src/components/ui/Image.tsx`
- Move images from `public/` to `public/images/`

### Link Component
- Replace `next/link` with `react-router-dom`'s `Link`
- Update imports: `import { Link } from 'react-router-dom'`
- Remove `passHref` prop (not needed)

### Head/Metadata
- Move `<Head>` content from pages to `index.html` for global meta
- For page-specific meta, use `react-helmet-async` if needed

### API Routes
- Convert `app/api/**/route.ts` or `pages/api/**/*.ts` to:
  - Static JSON files in `src/data/` for data
  - Or utility functions if logic is needed
  - Remove server-side logic (Vite is static)

### File Structure
- Move `app/**/page.tsx` or `pages/**/*.tsx` to `src/pages/`
- Rename `page.tsx` to `index.tsx` or keep as component name
- Update import paths (remove `@/` aliases or configure in Vite)

### Environment Variables
- Replace `process.env.NEXT_PUBLIC_*` with `import.meta.env.VITE_*`
- Update `.env` files accordingly

## Example Conversions

**Next.js Image:**
```tsx
// Before
import Image from 'next/image'
<Image src="/photo.jpg" width={500} height={300} alt="Photo" />

// After
<img src="/images/photo.jpg" alt="Photo" className="w-full h-auto" />