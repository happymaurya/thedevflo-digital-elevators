import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/home-page";

const SITE = "https://thedevflo.com";
const TITLE = "TheDevFlo — Web, Mobile App Development & UI/UX Studio in Kanpur, India";
const DESC = "TheDevFlo is a software development studio in Kanpur, India building MERN, Next.js, React Native and Flutter apps, UI/UX design systems, SEO and cloud solutions for startups and businesses worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "software development agency in Kanpur, web development agency India, MERN stack web application development, Next.js and Node.js developers, React Native and Flutter app developers, UI UX design studio India, MVP development for SaaS startups, Figma design systems, scalable cloud architecture, hire web developers Kanpur, TheDevFlo" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-UP" },
      { name: "geo.placename", content: "Kanpur" },
      { name: "geo.position", content: "26.4499;80.3319" },
      { name: "ICBM", content: "26.4499, 80.3319" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}/favicon.svg` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/favicon.svg` },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/` },
      { rel: "alternate", hreflang: "en", href: `${SITE}/` },
      { rel: "alternate", hreflang: "x-default", href: `${SITE}/` },
    ],
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
              "@type": "LocalBusiness",
              "@id": `${SITE}/#business`,
              name: "TheDevFlo",
              url: `${SITE}/`,
              image: `${SITE}/favicon.svg`,
              email: "hello@thedevflo.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kanpur",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 26.4499, longitude: 80.3319 },
              areaServed: ["IN", "Worldwide"],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development (MERN, Next.js)" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development (React Native, Flutter)" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design & Figma Design Systems" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Growth" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps" } },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What services does TheDevFlo offer?", acceptedAnswer: { "@type": "Answer", text: "TheDevFlo builds web applications (MERN, Next.js), mobile apps (React Native, Flutter), UI/UX design systems in Figma, SEO and cloud/DevOps solutions for startups and businesses." } },
                { "@type": "Question", name: "Where is TheDevFlo based?", acceptedAnswer: { "@type": "Answer", text: "TheDevFlo is a software development studio based in Kanpur, Uttar Pradesh, India, working with clients across India and worldwide." } },
                { "@type": "Question", name: "Does TheDevFlo build MVPs for SaaS startups?", acceptedAnswer: { "@type": "Answer", text: "Yes. We specialise in MVP development for SaaS startups using Next.js, Node.js and modern cloud infrastructure." } },
                { "@type": "Question", name: "How can I hire TheDevFlo?", acceptedAnswer: { "@type": "Answer", text: "Email hello@thedevflo.com with a short brief. We reply within one business day with a scoping call and proposal." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});
