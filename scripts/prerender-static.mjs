// Generates crawlable static HTML shells for every SPA route into public_html/.
// Run after `vite build --config vite.static.config.ts`.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = "public_html";
const SITE = "https://thedevflo.com";

// Mirror managed portraits at their pointer paths for non-Lovable static hosting.
for (const name of ["aman-sharma", "aditya-pratap-singh"]) {
  const asset = JSON.parse(readFileSync(`src/assets/${name}.webp.asset.json`, "utf8"));
  const response = await fetch(`https://id-preview--27415876-2568-4c96-9245-4fde4691efbe.lovable.app${asset.url}`);
  if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
    throw new Error(`Could not export ${name} portrait: ${response.status}`);
  }
  const file = join(OUT, asset.url.replace(/^\//, ""));
  mkdirSync(join(file, ".."), { recursive: true });
  writeFileSync(file, new Uint8Array(await response.arrayBuffer()));
}

const root = readFileSync(join(OUT, "index.html"), "utf8");
const js = root.match(/src="(\/assets\/[^"]+\.js)"/)?.[1];
const css = root.match(/href="(\/assets\/[^"]+\.css)"/)?.[1];
if (!js || !css) throw new Error("Could not read asset URLs from public_html/index.html");

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://thedevflo.com/about",
      "url": "https://thedevflo.com/about",
      "name": "About Happy Maurya — TheDevFlo",
      "inLanguage": "en",
      "mainEntity": { "@id": "https://thedevflo.com/#founder" },
    },
    {
      "@type": "Organization",
      "@id": "https://thedevflo.com/#organization",
      "name": "TheDevFlo",
      "url": "https://thedevflo.com/",
      "email": "hello@thedevflo.com",
      "logo": "https://thedevflo.com/favicon.svg",
    },
    {
      "@type": "Person",
      "@id": "https://thedevflo.com/#founder",
      "name": "Happy Maurya",
      "jobTitle": "Full Stack & Mobile App Developer",
      "description": "Founder of TheDevFlo. Builds WordPress, MERN stack and Flutter websites and mobile apps that help businesses attract customers, streamline operations and grow faster.",
      "image": "https://thedevflo.com/images/happy-maurya.png",
      "email": "hello@thedevflo.com",
      "worksFor": { "@id": "https://thedevflo.com/#organization" },
      "foundingDate": "2024",
      "url": "https://thedevflo.com/about",
      "sameAs": [
        "https://www.linkedin.com/company/109282455/",
        "https://www.instagram.com/thedevflo/",
        "https://x.com/thedevflo",
      ],
    },
  ],
};

const routes = [
  {"path": "/about", "title": "Happy Maurya & the TheDevFlo Team | About Us", "desc": "Meet Happy Maurya, Aman Sharma and Aditya Pratap Singh: TheDevFlo’s team for full-stack development, mobile apps, Python, AI, UI/UX and video.", "h1": "Happy Maurya", "body": "Happy Maurya — Founder & Full Stack / Mobile App Developer. I build modern digital products that help businesses grow, from WordPress websites and MERN Stack applications to Flutter mobile apps and AI-powered solutions. As the founder of TheDevFlo, I focus on creating reliable, scalable, and user-friendly digital experiences. Building digital solutions since 2024. Meet the Team: Happy Maurya — Founder & MERN Stack / App Developer. Specializes in full-stack web development, WordPress, MERN Stack, and Flutter mobile applications, turning business ideas into scalable digital products. Aman Sharma — Python, Flask & AI Developer. Focuses on Python, Flask backend development, API integration, and AI-powered solutions to build intelligent and efficient applications. Aditya Pratap Singh — UI/UX Designer & Video Editor. Creates engaging user interfaces, intuitive digital experiences, and polished video content that strengthen product branding and visual storytelling."},
  {"path": "/contact", "title": "Start a Project & Request an Estimate | TheDevFlo", "desc": "Share your website, mobile app, SaaS or AI project requirements with TheDevFlo. Prepare a project brief and request a detailed proposal by email.", "h1": "Start your project", "body": "Share your website, mobile app, SaaS or AI project requirements with TheDevFlo. Prepare a project brief and request a detailed proposal by email."},
  {"path": "/services/ai-automation", "title": "AI Development & Workflow Automation | TheDevFlo", "desc": "AI chatbots, agents, RAG knowledge bases, voice AI and workflow automation. Discuss secure OpenAI, Gemini and Claude integrations with TheDevFlo.", "h1": "AI development & automation", "body": "AI chatbots, agents, RAG knowledge bases, voice AI and workflow automation. Discuss secure OpenAI, Gemini and Claude integrations with TheDevFlo."},
  {"path": "/services/saas-development", "title": "SaaS & MVP Development Services | TheDevFlo", "desc": "Plan and build SaaS MVPs with TheDevFlo: product discovery, UX design, subscription workflows, secure access, testing and launch preparation.", "h1": "SaaS & MVP development", "body": "Plan and build SaaS MVPs with TheDevFlo: product discovery, UX design, subscription workflows, secure access, testing and launch preparation."},
  {"path": "/privacy", "title": "Website Privacy Information | TheDevFlo", "desc": "How the static TheDevFlo project brief handles your details, email enquiries and external links. Contact TheDevFlo with privacy questions.", "h1": "Privacy information", "body": "How the static TheDevFlo project brief handles your details, email enquiries and external links. Contact TheDevFlo with privacy questions."},
  {"path": "/cookies", "title": "Cookie & Browser Storage Information | TheDevFlo", "desc": "Browser storage information for the TheDevFlo project enquiry form, external services and hosting-related settings.", "h1": "Cookie information", "body": "Browser storage information for the TheDevFlo project enquiry form, external services and hosting-related settings."},
  {"path": "/terms", "title": "Project Terms, NDA & IP Information | TheDevFlo", "desc": "Discuss scope, pricing, project ownership, NDA, licensing and support before engaging TheDevFlo. Signed project agreements define your terms.", "h1": "Project terms information", "body": "Discuss scope, pricing, project ownership, NDA, licensing and support before engaging TheDevFlo. Signed project agreements define your terms."},
  {"path": "/refunds", "title": "Refund & Cancellation Information | TheDevFlo", "desc": "Confirm refund, cancellation and project pause terms in your signed TheDevFlo agreement. Contact the studio to discuss an existing project.", "h1": "Refund information", "body": "Confirm refund, cancellation and project pause terms in your signed TheDevFlo agreement. Contact the studio to discuss an existing project."},

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
      ["/services/ai-automation", "AI development & automation"],
      ["/services/saas-development", "SaaS & MVP development"],
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

routes.find((r) => r.path === "/about").jsonLd = aboutJsonLd;

// Optional page photo shown inside each route's crawlable shell.
const pageImages = {
  "/about": { src: "/images/happy-maurya.png", alt: "Happy Maurya, Full Stack and Mobile App Developer and founder of TheDevFlo", width: 820, height: 1330 },
};

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
  const photo = pageImages[r.path];
  const image = photo
    ? `<img src="${photo.src}" alt="${esc(photo.alt)}" width="${photo.width}" height="${photo.height}" />`
    : "";
  const schema = r.jsonLd
    ? `\n    <script type="application/ld+json">${JSON.stringify(r.jsonLd)}</script>`
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
    <meta name="twitter:card" content="summary_large_image" />${img}${schema}
    <script type="module" crossorigin src="${js}"></script>
    <link rel="stylesheet" crossorigin href="${css}" />
  </head>
  <body><div id="root"></div><main id="seo-prerender" aria-hidden="true" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;"><h1>${esc(r.h1)}</h1>${image}<p>${esc(r.body)}</p>${list}</main></body>
</html>
`;
  const dir = join(OUT, r.path.replace(/^\//, ""));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log("prerendered", r.path);
}
