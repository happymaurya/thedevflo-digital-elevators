import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/home-page";

const SITE = "https://thedevflo.com";
const TITLE = "TheDevFlo — Software Development Agency in India";
const DESC = "Delhi NCR software agency building web apps, mobile apps, UI/UX, SEO and cloud systems for startups across India and worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "software development agency India, web development agency Delhi, top web design studio Delhi Noida, hire B2B web developers in India, custom app developers India, MERN stack web application development, Next.js and Node.js developers, React Native and Flutter app developers, UI UX design studio India, MVP development for SaaS startups, Figma design systems, scalable cloud architecture, TheDevFlo" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Delhi" },
      { name: "geo.position", content: "28.6139;77.2090" },
      { name: "ICBM", content: "28.6139, 77.2090" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/` },
      { rel: "alternate", hreflang: "en", href: `${SITE}/` },
      { rel: "alternate", hreflang: "en-IN", href: `${SITE}/` },
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
              "@type": "ProfessionalService",
              "@id": `${SITE}/#business`,
              name: "TheDevFlo",
              url: `${SITE}/`,
              image: `${SITE}/favicon.svg`,
              email: "hello@thedevflo.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 28.6139, longitude: 77.2090 },
              areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "City", name: "Delhi" },
                { "@type": "City", name: "Noida" },
                { "@type": "City", name: "Gurugram" },
                { "@type": "City", name: "Mumbai" },
                { "@type": "City", name: "Bengaluru" },
                { "@type": "City", name: "Hyderabad" },
                "Worldwide",
              ],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development (MERN, Next.js)", url: `${SITE}/services/web-development` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development (React Native, Flutter)", url: `${SITE}/services/mobile-apps` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design & Figma Design Systems", url: `${SITE}/services/ui-ux-design` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Growth", url: `${SITE}/services/seo` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps", url: `${SITE}/services/cloud` } },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What services does TheDevFlo offer?", acceptedAnswer: { "@type": "Answer", text: "TheDevFlo builds web applications (MERN, Next.js), mobile apps (React Native, Flutter), UI/UX design systems in Figma, SEO and cloud/DevOps solutions for startups and businesses." } },
                { "@type": "Question", name: "Where is TheDevFlo based?", acceptedAnswer: { "@type": "Answer", text: "TheDevFlo is a software development studio based in India (Delhi NCR), working with clients across Delhi, Noida, Gurugram, Mumbai, Bengaluru and internationally." } },
                { "@type": "Question", name: "Does TheDevFlo build MVPs for SaaS startups?", acceptedAnswer: { "@type": "Answer", text: "Yes. We specialise in MVP development for SaaS startups using Next.js, Node.js and modern cloud infrastructure so founders can validate and scale quickly." } },
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
