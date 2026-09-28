import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { Nav, Footer } from "@/components/home-page";
import cover from "@/assets/work-fingertipflow.jpg";
import { TextEffect } from "@/components/text-effect";

const TITLE = "FingertipFlow — Minimalist Typing Trainer Web App | TheDevFlo";
const DESC = "How TheDevFlo shipped fingertipflow.com — a distraction-free typing trainer with words, quotes, code and zen modes plus live stats.";

export const Route = createFileRoute("/projects/fingertipflow")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "typing trainer, typing test, wpm test, code typing practice, minimalist typing app, fingertipflow, thedevflo case study" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://thedevflo.com/projects/fingertipflow" },
      { property: "og:image", content: cover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: cover },
    ],
    links: [{ rel: "canonical", href: "https://thedevflo.com/projects/fingertipflow" }],
  }),
  component: FingertipFlowPage,
});

function FingertipFlowPage() {
  const stats = [
    { k: "6", v: "Practice modes" },
    { k: "<1s", v: "Time to first keystroke" },
    { k: "100%", v: "Client-side · offline-ready" },
    { k: "0 ads", v: "Distraction-free" },
  ];
  const stack = ["React", "TypeScript", "Vite", "Tailwind CSS", "LocalStorage", "PWA"];
  const modes = ["Words", "Quotes", "Code", "Custom", "Zen", "Lesson"];
  const features = [
    "Six typing modes — words, quotes, code, custom, zen and lesson",
    "Configurable duration (15s / 30s / 60s / 120s) with punctuation & numbers toggles",
    "Live WPM, accuracy and consistency stats persisted per session",
    "Notes tab for saving custom passages and code snippets to practice",
    "Cinematic minimalist UI with a warm, low-glare colour system",
    "Spotify & mute controls for focused flow sessions",
    "Fully client-side & offline-friendly — no login, no tracking",
    "Keyboard-first UX: press Tab to instantly restart a test",
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
              <span className="size-1.5 rounded-full bg-primary" /> Case study · Web app
            </div>
            <TextEffect as="h1" className="text-display mt-5 text-5xl font-bold sm:text-6xl md:text-7xl">
              FingertipFlow — a typing trainer that stays out of your <span className="text-primary">way.</span>
            </TextEffect>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              FingertipFlow is a minimalist, distraction-free typing trainer built for developers,
              writers and speed-typing enthusiasts. TheDevFlo designed the interface, engineered
              the app end-to-end, and shipped it as a fast, offline-friendly web experience.
            </p>
            <a href="https://fingertipflow.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-90">
              Visit fingertipflow.com <ExternalLink className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mt-12 px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border">
          <img src={cover} alt="FingertipFlow minimalist typing trainer hero" className="w-full object-cover" loading="eager" />
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
              Every typing site on the internet is loud — ads, popups, gamified noise. The brief
              was the opposite: build a calm, keyboard-first typing trainer that developers actually
              want to open every morning. Fast to load, respectful of focus, and rich enough to
              cover words, quotes, code and custom passages.
            </p>

            <h2 className="text-display mt-12 text-3xl sm:text-4xl">Practice modes</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {modes.map((s) => (
                <span key={s} className="rounded-full border border-border bg-surface-elevated/40 px-3 py-1.5 text-xs text-muted-foreground">{s}</span>
              ))}
            </div>

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
              <div className="text-display mt-1 text-2xl">FingertipFlow</div>
              <div className="mt-1 text-sm text-muted-foreground">Product by TheDevFlo · fingertipflow.com</div>
            </div>
            <div className="rounded-3xl border border-border bg-surface-elevated/30 p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Services</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Product design · Web engineering · Interaction design · Performance · SEO
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface-elevated/30 p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Stack</div>
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

      <section className="mt-20 px-4">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-surface-elevated/30 p-10 text-center">
          <p className="text-display text-2xl sm:text-3xl">
            "TheDevFlo turned a rough idea into a shipped product in weeks — FingertipFlow feels effortless to use."
          </p>
          <div className="mt-5 text-sm text-muted-foreground">Product team · FingertipFlow</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
