import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/home-page";

const SITE = "https://thedevflo.com";
const TITLE = "TheDevFlo — Web & Mobile App Development, UI/UX, SEO & Cloud Studio";
const DESC = "TheDevFlo is a premium software studio building scalable web apps, mobile apps, UI/UX, SEO and cloud solutions for startups and businesses worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "web development agency, mobile app development company, UI UX design studio, SEO agency, cloud consulting, React developers, Next.js agency, MERN stack, hire software agency, TheDevFlo" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}/favicon.svg` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/favicon.svg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE}/#organization`,
              name: "TheDevFlo",
              alternateName: ["Dev Flo", "The Dev Flo"],
              url: `${SITE}/`,
              logo: `${SITE}/favicon.svg`,
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
              "@id": `${SITE}/#website`,
              url: `${SITE}/`,
              name: "TheDevFlo",
              publisher: { "@id": `${SITE}/#organization` },
              inLanguage: "en",
            },
            {
              "@type": "ProfessionalService",
              name: "TheDevFlo",
              url: `${SITE}/`,
              email: "hello@thedevflo.com",
              priceRange: "$$",
              areaServed: "Worldwide",
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Growth" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps" } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});
