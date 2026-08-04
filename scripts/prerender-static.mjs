// Generates crawlable static HTML shells for every SPA route into public_html/.
// Run after `vite build --config vite.static.config.ts`.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = "public_html";
const SITE = "https://thedevflo.com";

const root = readFileSync(join(OUT, "index.html"), "utf8");
const js = root.match(/src="(\/assets\/[^"]+\.js)"/)?.[1];
const css = root.match(/href="(\/assets\/[^"]+\.css)"/)?.[1];
if (!js || !css) throw new Error("Could not read asset URLs from public_html/index.html");

const routes = [
  {
    path: "/services",
    title: "Software Development Services India | TheDevFlo",
    desc: "Web, mobile, UI/UX, SEO and cloud engineering services delivered across India and worldwide by TheDevFlo.",
    ogTitle: "Software Services in India | TheDevFlo",
    ogImage: `${SITE}/og/services.jpg`,
    h1: "Software development services in India",
    body: "Web application development, mobile apps, UI/UX design, SEO and cloud engineering from TheDevFlo — Delhi NCR based, serving clients across India and worldwide.",
    links: [
      ["/services/web-development", "Web application development"],
      ["/services/mobile-apps", "Mobile app development"],
      ["/services/ui-ux-design", "UI/UX design"],
      ["/services/seo", "SEO & growth"],
      ["/services/cloud", "Cloud & DevOps"],
    ],
  },
  {
    path: "/services/web-development",
    title: "MERN & Next.js Web Development in India | TheDevFlo",
    desc: "Custom web application development in India using MERN stack, Next.js and Node.js — production-grade SaaS, portals and dashboards for startups and enterprise.",
    ogImage: `${SITE}/og/services.jpg`,
    h1: "MERN & Next.js web development in India",
    body: "Production-grade web applications on the MERN stack and Next.js for Indian startups and enterprise teams.",
  },
  {
    path: "/services/mobile-apps",
    title: "Mobile App Development Company in India | TheDevFlo",
    desc: "Custom React Native and Flutter mobile app development for iOS and Android from a Delhi NCR team, building cross-platform apps for startups across India.",
    ogImage: `${SITE}/og/services.jpg`,
    h1: "Mobile app development company in India",
    body: "React Native and Flutter apps for iOS and Android from one codebase, built for startups and consumer brands.",
  },
  {
    path: "/services/ui-ux-design",
    title: "UI/UX Design Studio in India — Figma Design Systems | TheDevFlo",
    desc: "UI/UX design studio in India building Figma design systems, interactive prototypes and conversion-first product interfaces for SaaS and consumer apps.",
    ogImage: `${SITE}/og/services.jpg`,
    h1: "UI/UX design studio in India",
    body: "Figma design systems, prototypes and conversion-first interfaces for SaaS and consumer products.",
  },
  {
    path: "/services/seo",
    title: "SEO Agency in India — Technical SEO & Growth | TheDevFlo",
    desc: "SEO agency in India offering technical SEO, on-page optimisation, content strategy and high-converting landing pages for startups and SaaS.",
    ogImage: `${SITE}/og/services.jpg`,
    h1: "SEO agency in India",
    body: "Technical SEO, on-page optimisation, content strategy and landing pages that rank and convert.",
  },
  {
    path: "/services/cloud",
    title: "Cloud & DevOps Consulting in India — AWS, GCP | TheDevFlo",
    desc: "Cloud and DevOps consulting in India — scalable AWS and GCP architecture, CI/CD, observability and cost optimisation for startups and SaaS.",
    ogImage: `${SITE}/og/services.jpg`,
    h1: "Cloud & DevOps consulting in India",
    body: "AWS and GCP architecture, CI/CD pipelines, observability and cost optimisation designed to scale.",
  },
  {
    path: "/blog",
    title: "TheDevFlo Blog — Web Dev, UI/UX, SEO & Growth",
    desc: "Web development, UI/UX, SEO, cloud and startup growth guides from TheDevFlo, a Delhi NCR software agency serving clients across India.",
    type: "website",
    h1: "TheDevFlo Blog",
    body: "Guides on web development, UI/UX, SEO, cloud and startup growth for software teams across India.",
    links: [
      ["/blog/saas-mvp-cost-guide", "How much does it cost to build a SaaS MVP in 2026?"],
      ["/blog/next-js-saas-mvp", "Why Next.js is the best choice for your SaaS MVP in 2026"],
      ["/blog/mern-vs-nextjs-2026", "MERN stack vs Next.js in 2026"],
      ["/blog/hire-software-agency-india", "How to hire a software development agency in India"],
    ],
  },
  {
    path: "/blog/saas-mvp-cost-guide",
    title: "How Much Does It Cost to Build a SaaS MVP in 2026?",
    desc: "A founder's guide to SaaS MVP development costs in 2026: engineering, design and infrastructure budgets for Indian vs US/EU teams — with a live calculator.",
    type: "article",
    ogImage: `${SITE}/og/article.jpg`,
    h1: "How much does it cost to build a SaaS MVP in 2026?",
    body: "Engineering, design and infrastructure budgets for a real SaaS MVP, compared across Indian and US/EU teams.",
  },
  {
    path: "/blog/next-js-saas-mvp",
    title: "Why Next.js Is the Best Choice for Your SaaS MVP in 2026",
    desc: "Building a SaaS MVP in 2026? Learn why Next.js is a strong choice for fast, SEO-friendly, revenue-ready SaaS products.",
    type: "article",
    ogImage: `${SITE}/og/article.jpg`,
    h1: "Why Next.js is the best choice for your SaaS MVP in 2026",
    body: "Next.js helps SaaS founders ship SEO-friendly landing pages, authenticated apps and scalable products quickly.",
  },
  {
    path: "/blog/mern-vs-nextjs-2026",
    title: "MERN Stack vs Next.js in 2026 — Which One to Pick",
    desc: "MERN vs Next.js in 2026: a practical decision framework for startups choosing a modern web application stack.",
    type: "article",
    ogImage: `${SITE}/og/article.jpg`,
    h1: "MERN stack vs Next.js in 2026",
    body: "A founder-focused framework for choosing between MERN and Next.js for your startup web app.",
  },
  {
    path: "/blog/hire-software-agency-india",
    title: "How to Hire a Software Development Agency in India (2026)",
    desc: "A founder's guide to hiring a software development agency in India: evaluate velocity, UX quality, technical depth, communication and delivery process.",
    type: "article",
    ogImage: `${SITE}/og/article.jpg`,
    h1: "How to hire a software development agency in India",
    body: "How founders and product teams evaluate Indian software studios on velocity, quality and process.",
  },
  {
    path: "/projects/fingertipflow",
    title: "FingertipFlow — Minimalist Typing Trainer Web App | TheDevFlo",
    desc: "How TheDevFlo shipped fingertipflow.com — a distraction-free typing trainer with words, quotes, code and zen modes plus live stats.",
    type: "article",
    h1: "FingertipFlow — minimalist typing trainer",
    body: "A distraction-free typing trainer with words, quotes, code and zen modes, built and shipped by TheDevFlo.",
  },
  {
    path: "/projects/rolling-panda",
    title: "The Rolling Panda — Film Studio Site | TheDevFlo",
    desc: "How TheDevFlo designed and engineered therollingpanda.in — a cinematic, immersive website for a Kanpur-based film production house.",
    type: "article",
    h1: "The Rolling Panda — film production studio website",
    body: "A cinematic, immersive website for a Kanpur-based film production house, designed and engineered by TheDevFlo.",
  },
  {
    path: "/projects/candid-clicks",
    title: "Candid Clicks — Wedding Photography Studio Website | TheDevFlo",
    desc: "How TheDevFlo built candidclicks.in — a cinematic website for one of Gorakhpur's leading wedding photography studios, capturing bookings across UP.",
    type: "article",
    h1: "Candid Clicks — wedding photography studio website",
    body: "A cinematic booking-focused website for one of Gorakhpur's leading wedding photography studios.",
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

for (const r of routes) {
  const type = r.type ?? "website";
  const url = `${SITE}${r.path}`;
  const img = r.ogImage
    ? `\n    <meta property="og:image" content="${r.ogImage}" />\n    <meta name="twitter:image" content="${r.ogImage}" />`
    : "";
  const list = r.links
    ? `<ul>${r.links.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join("")}</ul>`
    : "";
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>${esc(r.title)}</title>
    <meta name="description" content="${esc(r.desc)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(r.ogTitle ?? r.title)}" />
    <meta property="og:description" content="${esc(r.desc)}" />
    <meta name="twitter:card" content="summary_large_image" />${img}
    <script type="module" crossorigin src="${js}"></script>
    <link rel="stylesheet" crossorigin href="${css}" />
  </head>
  <body><div id="root"></div><main id="seo-prerender" aria-hidden="true" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;"><h1>${esc(r.h1)}</h1><p>${esc(r.body)}</p>${list}</main></body>
</html>
`;
  const dir = join(OUT, r.path.replace(/^\//, ""));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log("prerendered", r.path);
}
