import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { Nav, Footer } from "@/components/home-page";
import workGoCart from "@/assets/work-gocart.jpg";

const TITLE = "GoCart — E-commerce Platform Case Study | TheDevFlo";
const DESC = "How TheDevFlo designed and engineered GoCart, a high-conversion e-commerce platform with a modern checkout, real-time inventory and a delightful storefront.";

export const Route = createFileRoute("/projects/gocart")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:image", content: workGoCart },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: workGoCart },
    ],
    links: [{ rel: "canonical", href: "/projects/gocart" }],
  }),
  component: GoCartPage,
});

function GoCartPage() {
  const stats = [
    { k: "100k+", v: "Active shoppers" },
    { k: "+38%", v: "Conversion lift" },
    { k: "1.2s", v: "Avg. page load" },
    { k: "4.9★", v: "App store rating" },
  ];
  const stack = ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Edge functions"];
  const features = [
    "Lightning-fast PDP & PLP with edge caching",
    "Headless checkout with Stripe + Apple/Google Pay",
    "Real-time inventory and order webhooks",
    "Personalised recommendations engine",
    "Admin dashboard with role-based access",
    "SEO-optimised storefront, 95+ Lighthouse",
  ];

  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="px-4 pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-3.5" /> Back home
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" /> Case study · E-commerce
            </div>
            <h1 className="text-display mt-5 text-5xl font-bold sm:text-6xl md:text-7xl">
              GoCart — a storefront <span className="text-primary">built to convert.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              GoCart is a modern e-commerce platform we designed and built end-to-end — from
              brand and UX through to a blazing fast headless storefront, checkout and admin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mt-12 px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10">
          <img src={workGoCart} alt="GoCart e-commerce platform dashboard" className="w-full object-cover" />
        </div>
      </section>

      <section className="mt-16 px-4">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-display text-4xl text-primary">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-display text-3xl sm:text-4xl">The challenge</h2>
            <p className="mt-4 text-muted-foreground">
              GoCart's legacy storefront was slow, hard to manage and leaking revenue at checkout.
              The team needed a foundation that could scale to 100k+ shoppers, ship new merch
              campaigns in hours instead of weeks, and feel premium on every device.
            </p>
            <h2 className="text-display mt-12 text-3xl sm:text-4xl">What we built</h2>
            <ul className="mt-5 grid gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 grid size-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Client</div>
              <div className="text-display mt-1 text-2xl">GoCart</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Services</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Product strategy · UI/UX · Web development · Cloud · SEO
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Tech stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
            <a href="mailto:hello@thedevflo.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Start a similar project <ExternalLink className="size-4" />
            </a>
          </aside>
        </div>
      </section>

      <section className="mt-20 px-4">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="text-display text-2xl sm:text-3xl">
            "TheDevFlo turned our scrappy MVP into a polished product that scaled to 100k users."
          </p>
          <div className="mt-5 text-sm text-muted-foreground">Aarav Mehta · Founder, GoCart</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
