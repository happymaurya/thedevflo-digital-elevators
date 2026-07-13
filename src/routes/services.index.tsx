import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav, Footer } from "@/components/home-page";

const SITE = "https://thedevflo.com";
const TITLE = "Software Development Services India | TheDevFlo";
const OG_TITLE = "Software Services in India | TheDevFlo";
const DESC = "Web, mobile, UI/UX, SEO and cloud engineering services delivered across India and worldwide by TheDevFlo.";

const services = [
  { slug: "web-development", title: "Web Application Development", desc: "MERN stack, Next.js and Node.js engineering for SaaS and enterprise." },
  { slug: "mobile-apps", title: "Mobile App Development", desc: "Custom React Native and Flutter apps for iOS and Android." },
  { slug: "ui-ux-design", title: "UI/UX Design", desc: "Figma design systems, interactive prototypes, and conversion-first UI." },
  { slug: "seo", title: "SEO & Growth", desc: "Technical SEO, content strategy, and high-converting landing pages." },
  { slug: "cloud", title: "Cloud & DevOps", desc: "Scalable AWS/GCP architecture, CI/CD, and observability for startups." },
] as const;

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "software development services India, web development agency Delhi, mobile app developers India, UI UX design studio, SEO agency India, cloud consulting Delhi NCR" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/services` },
      { property: "og:image", content: `${SITE}/og/services.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/og/services.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/services` }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <section className="px-4 pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-3.5" /> Back home
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" /> Services
          </div>
          <h1 className="text-display mt-5 text-5xl font-bold sm:text-6xl md:text-7xl">
            Software services built <span className="text-primary">across India.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A Delhi NCR based software studio serving startups and businesses nationwide — from MVP builds to production platforms.
          </p>
        </div>
      </section>

      <section className="mt-16 mb-24 px-4">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}` as "/services/web-development"}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-primary/30"
            >
              <h2 className="text-display text-2xl sm:text-3xl">{s.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                Explore {s.title} details <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
