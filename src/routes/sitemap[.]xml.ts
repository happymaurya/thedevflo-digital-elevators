import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://thedevflo.com";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/services/ai-automation", changefreq: "monthly", priority: "0.9" },
          { path: "/services/saas-development", changefreq: "monthly", priority: "0.9" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/cookies", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/refunds", changefreq: "yearly", priority: "0.3" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/services/web-development", changefreq: "monthly", priority: "0.9" },
          { path: "/services/mobile-apps", changefreq: "monthly", priority: "0.9" },
          { path: "/services/ui-ux-design", changefreq: "monthly", priority: "0.9" },
          { path: "/services/seo", changefreq: "monthly", priority: "0.9" },
          { path: "/services/cloud", changefreq: "monthly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/blog/saas-mvp-cost-guide", changefreq: "monthly", priority: "0.8" },
          { path: "/blog/next-js-saas-mvp", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/mern-vs-nextjs-2026", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/hire-software-agency-india", changefreq: "monthly", priority: "0.7" },
          { path: "/projects/fingertipflow", changefreq: "monthly", priority: "0.6" },
          { path: "/projects/rolling-panda", changefreq: "monthly", priority: "0.6" },
          { path: "/projects/candid-clicks", changefreq: "monthly", priority: "0.6" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
