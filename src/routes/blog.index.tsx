import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, ArrowUpRight, ArrowLeft } from "lucide-react";
import { Nav, Footer, blogPosts } from "@/components/home-page";
import { TextEffect } from "@/components/text-effect";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "TheDevFlo Blog — Web Dev, UI/UX, SEO & Tech Insights" },
      { name: "description", content: "Insights, tutorials and tech news on web development, startup growth, UI/UX, SEO and cloud — from the TheDevFlo team." },
      { property: "og:title", content: "TheDevFlo Blog — Insights, Tutorials & Tech News" },
      { property: "og:description", content: "Web dev trends, startup insights, UI/UX strategies, SEO tips, and tech news." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thedevflo.com/blog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TheDevFlo Blog" },
      { name: "twitter:description", content: "Web dev, UI/UX, SEO and startup insights from TheDevFlo." },
    ],
    links: [{ rel: "canonical", href: "https://thedevflo.com/blog" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "TheDevFlo Blog",
        url: "https://thedevflo.com/blog",
        publisher: { "@type": "Organization", name: "TheDevFlo", url: "https://thedevflo.com/" },
      }),
    }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <main className="relative min-h-screen">
      <Nav />
      <section className="px-4 pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-3.5" /> Back home
          </Link>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" /> TheDevFlo Blog
            </div>
            <TextEffect as="h1" className="text-display mt-5 text-5xl font-bold sm:text-6xl md:text-7xl">
              Insights, tutorials & <span className="text-primary">tech news.</span>
            </TextEffect>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Stay updated with the latest web development trends, startup insights, UI/UX strategies, SEO tips, and technology news from TheDevFlo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="mt-16 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.a
            id={featured.slug} href={`/blog/${featured.slug}`}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="group block overflow-hidden rounded-[2rem] border border-border bg-surface-elevated/30 p-8 sm:p-12"
          >
            <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:items-end">
              <div>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Featured</span>
                <h2 className="text-display mt-5 text-4xl sm:text-5xl md:text-6xl">{featured.title}</h2>
                <p className="mt-5 max-w-2xl text-base text-muted-foreground">{featured.excerpt}</p>
              </div>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:items-end">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><User className="size-3.5" />{featured.author}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary">Read the full article on {featured.title} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Other posts */}
      <section className="mt-12 px-4">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {rest.map((p, i) => (
            <motion.a
              key={p.slug} id={p.slug} href={`/blog/${p.slug}`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col rounded-3xl border border-border bg-surface-elevated/30 p-7 transition-colors hover:border-primary/30"
            >
              <span className="self-start rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">{p.tag}</span>
              <h3 className="text-display mt-5 text-2xl sm:text-3xl">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Calendar className="size-3" />{p.date}</span>
                  <span className="flex items-center gap-1"><User className="size-3" />{p.author}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-primary">Read the full article on {p.title} <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
