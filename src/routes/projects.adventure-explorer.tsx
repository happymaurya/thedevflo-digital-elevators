import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { Nav, Footer } from "@/components/home-page";
import workAdventure from "@/assets/work-adventure.jpg";

const TITLE = "AdventureExplorer — Travel Booking Case Study | TheDevFlo";
const DESC = "How TheDevFlo built AdventureExplorer, an immersive travel booking experience with rich discovery, fast search and a frictionless checkout.";

export const Route = createFileRoute("/projects/adventure-explorer")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:image", content: workAdventure },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: workAdventure },
    ],
    links: [{ rel: "canonical", href: "/projects/adventure-explorer" }],
  }),
  component: AdventurePage,
});

function AdventurePage() {
  const features = [
    "Map-first trip discovery with curated collections",
    "Realtime availability and instant booking",
    "Multi-currency payments and trip wallet",
    "Personalised itineraries powered by AI",
    "Operator dashboard with bookings & payouts",
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
              <span className="size-1.5 rounded-full bg-primary" /> Case study · Travel
            </div>
            <h1 className="text-display mt-5 text-5xl font-bold sm:text-6xl md:text-7xl">
              AdventureExplorer — booking <span className="text-primary">made beautiful.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A modern travel booking platform with rich discovery, immersive imagery and a
              checkout that converts. Built end-to-end with TheDevFlo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mt-12 px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10">
          <img src={workAdventure} alt="AdventureExplorer travel booking dashboard" className="w-full object-cover" />
        </div>
      </section>

      <section className="mt-16 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-display text-3xl sm:text-4xl">What we built</h2>
          <ul className="mt-6 grid gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1 grid size-5 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <a href="mailto:hello@thedevflo.com" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Start a similar project <ExternalLink className="size-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
