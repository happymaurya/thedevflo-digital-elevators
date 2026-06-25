# Deploy TheDevFlo to Hostinger Business (Shared Hosting)

This project ships with a **separate static-SPA build** that produces a single
`public_html/` folder you can drop into Hostinger. Your Lovable preview keeps
using the normal TanStack Start build — nothing else changes.

## 1. Build the static site (run locally — needs Node 20+)

```bash
npm install
npx vite build --config vite.static.config.ts
```

Output goes to `./public_html/` with this exact structure:

```
public_html/
├── index.html
├── .htaccess           (SPA routing + gzip + cache headers)
├── robots.txt
├── sitemap.xml
├── manifest.json
├── favicon.svg
└── assets/
    ├── index.js        (minified, ES module)
    ├── index.css       (minified Tailwind)
    ├── chunks/
    ├── images/
    └── fonts/
```

All assets are hashed, minified, lazy-loaded where possible, and reference
relative `/assets/...` paths — no `localhost`, no `/src/`, no dev URLs.

## 2. Upload to Hostinger

1. Open hPanel → **File Manager** → `public_html/`
2. Delete any existing default files
3. Upload **everything inside** your local `public_html/` folder (not the folder itself)
4. Make sure `.htaccess` came across (toggle "Show hidden files" in File Manager)

Done. Visit your domain — `/`, `/blog`, and any deep link will refresh
correctly thanks to the `.htaccess` SPA fallback.

## What's been removed for static hosting

- No Node.js, Express, Vercel, Next.js, or Edge functions are required
- The TanStack server route `src/routes/sitemap[.]xml.ts` is ignored at
  build time; a static `public/sitemap.xml` is served instead
- No API routes, middleware, or SSR — everything renders client-side

## Notes

- Update `public/sitemap.xml` whenever you add new routes
- After your custom domain is live, replace `/` URLs in `og:url` and
  `canonical` inside `static/index.html` with the full domain
