import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/home-page";

const TITLE = "TheDevFlo — Web Development, Mobile Apps, UI/UX & Cloud Studio";
const DESC = "TheDevFlo is a software studio helping startups and businesses build scalable web apps, mobile apps, UI/UX experiences, SEO strategies, and cloud solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "web development, mobile app development, UI UX design, SEO, cloud, software agency, MERN, Next.js, React, TheDevFlo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "#org",
              name: "TheDevFlo",
              url: "/",
              email: "hello@thedevflo.com",
              description: DESC,
              sameAs: [
                "https://www.linkedin.com/company/109282455/",
                "https://www.instagram.com/thedevflo/",
                "https://www.facebook.com/share/1Byp6KJSkR/",
                "https://x.com/thedevflo",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "#site",
              name: "TheDevFlo",
              url: "/",
              publisher: { "@id": "#org" },
            },
            {
              "@type": "LocalBusiness",
              name: "TheDevFlo",
              email: "hello@thedevflo.com",
              url: "/",
              priceRange: "$$",
              description: DESC,
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});
