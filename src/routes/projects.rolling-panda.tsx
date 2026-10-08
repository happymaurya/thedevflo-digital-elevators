import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { Nav, Footer } from "@/components/home-page";
import cover from "@/assets/work-rollingpanda.jpg";
import { TextEffect } from "@/components/text-effect";

const TITLE = "The Rolling Panda — Film Studio Site | TheDevFlo";
const DESC = "How TheDevFlo designed and engineered therollingpanda.in — a cinematic, immersive website for a Kanpur-based film production house.";

export const Route = createFileRoute("/projects/rolling-panda")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://thedevflo.com/projects/rolling-panda" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://thedevflo.com/projects/rolling-panda" }],
  }),
  component: RollingPandaPage,
});

function RollingPandaPage() {
  const stats = [{"k": "Film & media", "v": "Industry"}, {"k": "Showreel", "v": "Primary experience"}, {"k": "Studio enquiries", "v": "User journey"}, {"k": "Live website", "v": "Deliverable"}];
  const stack = ["React", "TypeScript", "Framer Motion", "GSAP", "Lenis", "Tailwind CSS"];
  const features = [
    "Cinematic hero with full-bleed video treatment",
    "Story-first case-study reels with scroll choreography",
    "Client roster marquee (NRJ Music Factory, The Yoga Plus, Rism Productions & more)",
    "Immersive Studio / Services / Contact chapters",
    "Optimised media pipeline for large-format stills & video",
    "SEO-ready structure for Kanpur / India creative searches",
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
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" /> Case study · Film & Media
            </div>
            <TextEffect as="h1" className="text-display mt-5 text-5xl font-bold sm:text-6xl md:text-7xl">
              The Rolling Panda — a website as bold as their <span className="text-primary">films.</span>
            </TextEffect>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              The Rolling Panda Productions is a Kanpur-based film house building stories with
              purpose, personality and impact. We designed and built their new digital home —
              cinematic, story-first and unmistakably them.
            </p>
            <a href="https://therollingpanda.in" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-90">
              Visit therollingpanda.in <ExternalLink className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mt-12 px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border">
          <img src={cover} alt="The Rolling Panda Productions website hero" className="w-full object-cover" />
        </div>
      </section>

      <section className="mt-16 px-4">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="rounded-3xl border border-border bg-surface-elevated/30 p-6">
              <div className="text-display text-4xl text-primary">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-display text-3xl sm:text-4xl">The brief</h2>
            <p className="mt-4 text-muted-foreground">
              A production house with a stacked reel needed a site that could actually carry the
              weight of their work — bold typography, cinematic pacing, and a story-first
              structure that treats every scroll like a new scene.
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
            <div className="rounded-3xl border border-border bg-surface-elevated/30 p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Client</div>
              <div className="text-display mt-1 text-2xl">The Rolling Panda Productions</div>
              <div className="mt-1 text-sm text-muted-foreground">Kanpur · India </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface-elevated/30 p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Services</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Brand · UI/UX · Web development · Motion · SEO
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface-elevated/30 p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Tech stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-surface-elevated/40 px-2.5 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
            <a href="mailto:hello@thedevflo.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Start a similar project <ExternalLink className="size-4" />
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-2">
          <div><h2 className="text-display text-3xl">The challenge</h2><p className="mt-4 leading-relaxed text-muted-foreground">Give a film production portfolio enough visual space while keeping studio information and contact paths easy to find. Rich media needs deliberate loading and a usable experience on smaller screens.</p></div>
          <div><h2 className="text-display text-3xl">Our approach</h2><p className="mt-4 leading-relaxed text-muted-foreground">A cinematic visual direction makes the work the focal point. Studio, service and contact information support the portfolio rather than competing with it. Explore the live website to see the current experience.</p></div>
          <div><h2 className="text-display text-3xl">Delivery & outcome</h2><p className="mt-4 leading-relaxed text-muted-foreground">A live digital experience, with the project screenshot and website linked above. Delivery dates and measured business results are not published without verified project records.</p></div>
          <div><h2 className="text-display text-3xl">Plan a similar project</h2><p className="mt-4 leading-relaxed text-muted-foreground">Share your audience, content, key workflows and launch goals. We can use this project as a reference when discussing your own scope.</p><a href="/contact" className="mt-5 inline-block text-primary">Request a project proposal →</a></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
