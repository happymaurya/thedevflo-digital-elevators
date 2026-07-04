import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { Nav, Footer } from "@/components/home-page";
import cover from "@/assets/work-candidclicks.jpg";

const TITLE = "Candid Clicks — Wedding Photography Studio Website | TheDevFlo";
const DESC = "How TheDevFlo built candidclicks.in — a cinematic website for one of Gorakhpur's leading wedding photography studios, capturing bookings across UP.";

export const Route = createFileRoute("/projects/candid-clicks")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://thedevflo.com/projects/candid-clicks" },
      { property: "og:image", content: cover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: cover },
    ],
    links: [{ rel: "canonical", href: "https://thedevflo.com/projects/candid-clicks" }],
  }),
  component: CandidClicksPage,
});

function CandidClicksPage() {
  const stats = [
    { k: "10+", v: "Years since 2014" },
    { k: "500+", v: "Weddings captured" },
    { k: "4×", v: "Cities served" },
    { k: "5★", v: "Client rating" },
  ];
  const stack = ["WordPress", "Elementor", "PHP", "MySQL", "Tailwind ideas", "Cloud CDN"];
  const services = [
    "Wedding photography",
    "Pre-wedding shoots",
    "Engagement ceremony",
    "Haldi ceremony",
    "Baby shower photography",
    "Cinematic wedding films",
  ];
  const features = [
    "High-impact bridal hero with cinematic lighting",
    "Service pages for wedding, pre-wedding, haldi, engagement & baby shower",
    "Location-optimised SEO for Gorakhpur, Lucknow & Kanpur",
    "Click-to-call & WhatsApp bridges for instant enquiries",
    "Gallery layouts tuned for large wedding portfolios",
    "Blog/CMS so the studio can publish shoots themselves",
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
              <span className="size-1.5 rounded-full bg-primary" /> Case study · Photography
            </div>
            <h1 className="text-display mt-5 text-5xl font-bold sm:text-6xl md:text-7xl">
              Candid Clicks — a studio site as beautiful as their <span className="text-primary">frames.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Candid Clicks is one of Gorakhpur's most trusted wedding photography studios,
              serving Lucknow, Kanpur and beyond since 2014. TheDevFlo shaped a website that
              matches the emotion in their photographs and turns visitors into bookings.
            </p>
            <a href="https://candidclicks.in" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-90">
              Visit candidclicks.in <ExternalLink className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mt-12 px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10">
          <img src={cover} alt="Candid Clicks wedding photography hero" className="w-full object-cover" />
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
            <h2 className="text-display text-3xl sm:text-4xl">The brief</h2>
            <p className="mt-4 text-muted-foreground">
              A decade-old wedding photography studio needed a digital presence that felt as
              cinematic as their work — timeless imagery, local SEO for UP's biggest wedding
              cities, and a booking flow that converts scrolls into calls.
            </p>

            <h2 className="text-display mt-12 text-3xl sm:text-4xl">Specialities</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground">{s}</span>
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Client</div>
              <div className="text-display mt-1 text-2xl">Candid Clicks</div>
              <div className="mt-1 text-sm text-muted-foreground">Saurabh Raj Verma · Gorakhpur, UP · Est. 2014</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Services</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Web design · Development · Local SEO · CMS setup · Performance
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Stack</div>
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
            "TheDevFlo rebuilt our studio site into a cinematic showcase — bookings from Gorakhpur & Lucknow doubled in weeks."
          </p>
          <div className="mt-5 text-sm text-muted-foreground">Saurabh Verma · Founder, Candid Clicks</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
