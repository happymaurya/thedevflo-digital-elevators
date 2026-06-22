import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TheDevFlo | Web Development, Mobile Apps & UI/UX Design" },
      { name: "description", content: "TheDevFlo helps startups and businesses build scalable web applications, mobile apps, UI/UX experiences, SEO strategies, and cloud solutions." },
      { property: "og:title", content: "TheDevFlo | Software Studio" },
      { property: "og:description", content: "Web, mobile, UI/UX, SEO, and cloud — engineered for ambitious teams." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "TheDevFlo",
        url: "https://thedevflo.com",
        email: "hello@thedevflo.com",
        sameAs: ["https://www.linkedin.com/", "https://www.instagram.com/", "https://github.com/"],
      }),
    }],
  }),
  component: HomePage,
});
