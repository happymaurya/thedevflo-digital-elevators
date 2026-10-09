import { IntroShatter } from "@/components/intro-shatter";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Code2, Smartphone, Palette, Search, Cloud, ArrowUpRight,
  Linkedin, Instagram, Facebook, Twitter, MessageCircle, Mail,
  Zap, Bot, ArrowRight, Calendar, User,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useIsMobile } from "@/hooks/use-mobile";
import { TextEffect } from "@/components/text-effect";
import { AboutSection, AiSection, FaqSection } from "@/components/agency-sections";
import { ProjectBrief } from "@/components/project-brief";
import { ClientSuccess } from "@/components/client-success";
import tdfLogo from "@/assets/tdf-logo.png";
import workRollingPanda from "@/assets/work-rollingpanda.jpg";
import workCandidClicks from "@/assets/work-candidclicks.jpg";
import workFingertipFlow from "@/assets/work-fingertipflow.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};

// ────────────────────────────────────────────────────────────
// Social links (used in footer + community)
// ────────────────────────────────────────────────────────────
export const socialLinks = [
  { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/109282455/" },
  { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/thedevflo/" },
  { name: "Facebook", Icon: Facebook, href: "https://www.facebook.com/share/1Byp6KJSkR/" },
  { name: "X (Twitter)", Icon: Twitter, href: "https://x.com/thedevflo?s=11" },
  { name: "WhatsApp", Icon: MessageCircle, href: "https://wa.me/919305558338" },
];

// ────────────────────────────────────────────────────────────
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/40 px-3 py-1 text-xs font-medium text-muted-foreground">
      <span className="size-1.5 rounded-full bg-primary" /> {children}
    </div>
  );
}

function PillButton({
  children, variant = "primary", href, to,
}: { children: React.ReactNode; variant?: "primary" | "ghost" | "white" | "violet"; href?: string; to?: string }) {
  const base = "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles = {
    primary: "bg-button text-primary-foreground hover:bg-button-hover hover:scale-[1.03]",
    white: "bg-inverse text-inverse-foreground hover:scale-[1.03]",
    ghost: "border border-border bg-surface-elevated/40 text-foreground hover:bg-surface-elevated",
    violet: "bg-accent-end text-foreground hover:scale-[1.03]",
  }[variant];
  const inner = (
    <>
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  if (to) return <Link to={to} className={`${base} ${styles}`}>{inner}</Link>;
  return <a href={href ?? "#"} className={`${base} ${styles}`}>{inner}</a>;
}

// ────────────────────────────────────────────────────────────
// Floating background TDF logos (NewForm-style)
// ────────────────────────────────────────────────────────────
function FloatingLogos() {
  const isMobile = useIsMobile();
  if (isMobile) return null;

  const logos = [
    { top: "8%", left: "6%", size: 90, delay: 0, dur: 9 },
    { top: "22%", left: "78%", size: 130, delay: 1.2, dur: 11 },
    { top: "55%", left: "3%", size: 110, delay: 0.6, dur: 10 },
    { top: "72%", left: "85%", size: 80, delay: 1.8, dur: 8 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {logos.map((l, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.07]"
          style={{ top: l.top, left: l.left, willChange: "transform" }}
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={tdfLogo} alt="" width={l.size} height={l.size} loading="lazy" decoding="async" className="select-none" style={{ width: l.size, height: l.size }} />
        </motion.div>
      ))}
    </div>
  );
}


// ────────────────────────────────────────────────────────────
// Premium background — aurora gradient + grid + spotlight
// ────────────────────────────────────────────────────────────
function PremiumBackground() {
  const isMobile = useIsMobile();
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-background">
      {!isMobile && (
        <>
          <div className="bg-aurora-accent absolute -top-40 left-1/2 size-[700px] -translate-x-1/2 rounded-full opacity-30 blur-[90px]" />
          <div className="bg-aurora-primary absolute top-1/3 -right-40 size-[500px] rounded-full opacity-20 blur-[90px]" />
        </>
      )}
      {isMobile && (
        <div className="bg-aurora-mobile absolute inset-0 opacity-60" />
      )}
      <div className="bg-site-grid absolute inset-0 opacity-[0.04]" />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Cursor spotlight — rAF-throttled, desktop only, respects reduced-motion
// ────────────────────────────────────────────────────────────
function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (isMobile) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf = 0;
    let pending = false;
    const apply = () => {
      pending = false;
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
    };
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (!pending) { pending = true; raf = requestAnimationFrame(apply); }
    };
    el.style.opacity = "1";
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);
  return (
    <div
      ref={ref}
      aria-hidden
      className="bg-spotlight pointer-events-none fixed left-0 top-0 -z-10 size-[600px] rounded-full opacity-0 blur-[40px] transition-opacity duration-500 will-change-transform"
    />
  );
}



// ────────────────────────────────────────────────────────────
// Floating hero background text (marquee bands)
// ────────────────────────────────────────────────────────────
function FloatingText() {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  const bands = [
    { words: ["TDF", "THEDEVFLO", "WEB DEVELOPMENT", "APP DEVELOPMENT"], top: "12%", dur: 60, dir: 1 },
    { words: ["UI/UX DESIGN", "SEO", "CLOUD", "MERN", "NEXT.JS"], top: "55%", dur: 80, dir: -1 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {bands.map((b, i) => {
        const row = [...b.words, ...b.words, ...b.words];
        return (
          <div key={i} className="absolute inset-x-0 overflow-hidden" style={{ top: b.top }}>
            <div
              className="flex w-max gap-16 whitespace-nowrap"
              style={{
                animation: `marquee ${b.dur}s linear infinite`,
                animationDirection: b.dir === -1 ? "reverse" : "normal",
                opacity: 0.05,
                fontWeight: 800,
                fontSize: "clamp(4rem, 10vw, 12rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {row.map((w, k) => <span key={k}>{w}</span>)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "Blog", to: "/blog" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border px-4 py-2.5 transition-all duration-500 sm:px-6 ${scrolled ? "bg-background/70 backdrop-blur-xl" : "bg-background/30 backdrop-blur-md"}`}>
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-lg bg-inverse">
            <img src={tdfLogo} alt="TheDevFlo brand mark" className="size-7 object-contain" />
          </div>
          <span className="text-display text-base font-bold tracking-tight">TheDevFlo</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) =>
            l.to ? (
              <Link key={l.label} to={l.to} className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground">{l.label}</Link>
            ) : (
              <a key={l.label} href={l.href} className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground">{l.label}</a>
            )
          )}
        </nav>
        <a href="/contact"
          className="hidden rounded-full bg-button px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-button-hover hover:scale-[1.03] sm:inline-flex">
          Start project →
        </a>
      </div>
    </motion.header>
  );
}

// ────────────────────────────────────────────────────────────
function Hero() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y = isMobile ? 0 : yRaw;

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 pt-32 sm:pt-28">
      <FloatingText />

      <motion.div style={isMobile ? undefined : { y }} className="mx-auto mb-12 grid max-w-3xl grid-cols-3 gap-3 sm:gap-5">
        {[
          { letter: "T", className: "bg-violet-gradient text-foreground" },
          { letter: "D", className: "bg-primary-gradient text-primary-foreground" },
          { letter: "F", className: "bg-surface-gradient text-primary" },
        ].map((c, i) => (
          <motion.div
            key={c.letter}
            initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
            className={`relative grid aspect-square place-items-center overflow-hidden rounded-2xl border border-border sm:rounded-[1.75rem] ${c.className}`}
          >
            <span
              className="text-display text-shadow-soft select-none"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {c.letter}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-8 pb-24 sm:grid-cols-[1.4fr_1fr] sm:gap-12">
        <TextEffect
          as="h1"
          className="text-display text-[2.6rem] font-bold leading-[1] tracking-tighter sm:text-7xl md:text-[5.5rem]"
        >
          Engineering <span className="text-primary">Velocity.</span><br />
          Designing <span className="text-primary">Excellence.</span>
        </TextEffect>


        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col justify-end gap-6"
        >
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            We build production-grade web apps, mobile applications, and cloud architecture for ambitious startups and enterprise teams. From blueprint to launch, we ship with absolute taste.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PillButton href="/contact">Start a Project</PillButton>
            <PillButton href="#work" variant="ghost">Explore Our Work</PillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
function WhoWeAre() {
  const brands = ["Startups", "SaaS", "E-commerce", "Agencies", "Fintech", "D2C", "EdTech", "HealthTech"];
  const row = [...brands, ...brands];
  return (
    <section className="px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <TextEffect as="h2" className="text-display text-5xl sm:text-6xl md:text-7xl">Who<br />we are</TextEffect>
          <div className="flex flex-col justify-end gap-6">
            <p className="max-w-xl text-lg text-foreground/90 sm:text-xl">
              We help ambitious teams grow their products, get to market, and connect with users — through engineering, design, and SEO that compound.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">Engineering</span>
              <span className="rounded-full bg-accent-end px-4 py-1.5 text-sm font-medium text-foreground">Design</span>
              <span className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground">Cloud</span>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-6 text-sm text-muted-foreground">Digital products for:</p>
          <div className="mask-fade-wide relative overflow-hidden">
            <div className="flex w-max animate-marquee gap-14">
              {row.map((b, i) => (
                <span key={i} className="text-display whitespace-nowrap text-3xl font-bold text-foreground/60 sm:text-4xl">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
const services = [
  { n: "01", icon: Code2, title: "Web Engineering", href: "/services/web-development", desc: "Fast, SEO-optimized, edge-native web applications built with Next.js, React, and robust Node.js backends.", tags: ["Next.js", "Node", "React"] },
  { n: "02", icon: Smartphone, title: "Mobile Development", href: "/services/mobile-apps", desc: "High-performance, native-feeling iOS and Android apps engineered from a single, fast-to-ship codebase using Flutter and React Native.", tags: ["Flutter", "React Native"] },
  { n: "03", icon: Palette, title: "UI/UX Design Systems", href: "/services/ui-ux-design", desc: "Immersive, high-converting interfaces and scalable Figma design systems crafted with interactive precision and modern motion.", tags: ["Figma", "Design systems"] },
  { n: "04", icon: Search, title: "SEO Optimization", href: "/services/seo", desc: "Technical SEO, local SEO, and content strategy — built to rank and convert from day one.", tags: ["Technical SEO", "Schema"] },
  { n: "05", icon: Cloud, title: "Cloud & Infrastructure", href: "/services/cloud", desc: "Secure, auto-scaling, resilient infrastructure on AWS and Vercel with Docker containerization.", tags: ["AWS", "Vercel", "Docker"] },
  { n: "06", icon: Bot, title: "AI & Automation", href: "/services/ai-automation", desc: "Task-oriented agents, knowledge bases, voice interfaces and automation designed around real business workflows.", tags: ["AI agents", "RAG", "Automation"] },
  { n: "07", icon: Code2, title: "SaaS Development", href: "/services/saas-development", desc: "Focused MVPs, subscription workflows and secure product foundations.", tags: ["MVP", "SaaS"] },
];

function Services() {
  return (
    <section id="services" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 max-w-3xl">
          <SectionTag>What we do</SectionTag>
          <TextEffect as="h2" className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            TheDevFlo gets you <span className="text-primary">access to</span>
          </TextEffect>
        </motion.div>

        <div className="divide-y divide-border border-y border-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.title} href={s.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 transition-colors hover:bg-surface-elevated/30 sm:py-10"
              >
                <span className="text-display text-2xl text-primary sm:text-3xl">{s.n}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-primary" />
                    <h3 className="text-display text-2xl sm:text-3xl md:text-4xl">{s.title}</h3>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{s.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-surface-elevated/40 px-2.5 py-0.5 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="size-6 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
const projects = [
  { name: "FingertipFlow", tag: "Minimalist Typing Trainer", image: workFingertipFlow, href: "/projects/fingertipflow" },
  { name: "The Rolling Panda", tag: "Film Production House", image: workRollingPanda, href: "/projects/rolling-panda" },
  { name: "Candid Clicks", tag: "Wedding Photography Studio", image: workCandidClicks, href: "/projects/candid-clicks" },
];

function Work() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="work" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>Featured work</SectionTag>
            <TextEffect as="h2" className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
              Selected <span className="text-primary">projects.</span>
            </TextEffect>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A handful of products we've shipped — from zero-to-launch and beyond.
          </p>
        </motion.div>

        <div ref={carouselRef} className="project-carousel overflow-hidden" data-visible={isVisible}>
          <div className="project-carousel-track flex w-max">
          {[0, 1].map((copy) => <div key={copy} className="project-carousel-group flex shrink-0 gap-5 pr-5" aria-hidden={copy === 1 ? true : undefined}>
          {projects.map((p) => (
              <Link
                key={p.name}
                to={p.href}
                tabIndex={copy === 1 ? -1 : undefined}
                className="project-carousel-card group block w-[280px] shrink-0 overflow-hidden rounded-lg border border-border bg-content-panel outline-none transition-colors hover:border-primary focus-visible:ring-2 focus-visible:ring-ring sm:w-[400px]"
              >
                <img src={p.image} alt={`${p.name} ${p.tag.toLowerCase()} project preview`} loading="lazy" width={1600} height={900} className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="flex min-h-28 items-center justify-between gap-3 p-5 sm:p-6">
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{p.tag}</div>
                    <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">{p.name}</h3>
                  </div>
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-inverse text-inverse-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
              </Link>
          ))}
          </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
const steps = [
  { n: "01", title: "Discovery & Blueprinting", desc: "Deep-dive alignment workshops to map technical scope, architecture constraints, and user journeys." },
  { n: "02", title: "Iterative Design", desc: "Interactive prototypes and premium dark/light interfaces that establish instant brand authority." },
  { n: "03", title: "Agile Engineering", desc: "Rapid cycles with weekly live demos, transparent feedback loops, and strict, typed, clean codebases." },
  { n: "04", title: "Deployment & Scale", desc: "Zero-downtime launches, CI pipelines, and proactive post-launch optimization." },
  { n: "05", title: "Ongoing Partnership", desc: "We stick around — measuring, iterating, and scaling the product with you." },
];

function Process() {
  return (
    <section id="process" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 max-w-3xl">
          <SectionTag>How we work</SectionTag>
          <TextEffect as="h2" className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            A process built for <span className="text-primary">velocity.</span>
          </TextEffect>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface-elevated/30 p-6">
              <div className="text-display text-3xl text-primary">{s.n}</div>
              <h3 className="text-display mt-6 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────
const tech = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Flutter", "React Native", "AWS", "Vercel", "Docker", "Firebase", "OpenAI", "Gemini", "Claude"];

function Tech() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const element = trackRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12 max-w-2xl">
          <SectionTag>Tech stack</SectionTag>
          <TextEffect as="h2" className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            Tools we <span className="text-primary">love.</span>
          </TextEffect>
        </motion.div>
        <div ref={trackRef} className="project-carousel overflow-hidden" data-visible={isVisible}>
          <div className="project-carousel-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="project-carousel-group tech-group flex shrink-0 gap-3 pr-3" aria-hidden={copy === 1 ? true : undefined}>
                {tech.map((t) => (
                  <div key={t}
                    className="tech-card group flex w-[130px] shrink-0 flex-col items-center gap-2 rounded-2xl border border-border bg-surface-elevated/30 px-4 py-6 text-center text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:w-[150px] sm:text-sm">
                    <Zap className="size-4 text-primary" />
                    {t}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Blog teaser
// ────────────────────────────────────────────────────────────
export const blogPosts = [
  { slug: "saas-mvp-cost-guide", title: "How Much Does It Cost to Build a SaaS MVP in 2026?", date: "July 2026", author: "TheDevFlo Team", tag: "SaaS", excerpt: "India vs global cost breakdown for engineering, design and infra — with a live MVP cost calculator." },
  { slug: "next-js-saas-mvp", title: "Why Next.js Is Best for Your SaaS MVP in 2026", date: "June 2026", author: "TheDevFlo Team", tag: "SaaS", excerpt: "A practical founder guide to choosing Next.js for a fast, SEO-friendly, revenue-ready SaaS MVP." },
  { slug: "mern-vs-nextjs-2026", title: "MERN vs Next.js in 2026: Which Stack Should You Choose?", date: "June 2026", author: "TheDevFlo Team", tag: "Engineering", excerpt: "A no-nonsense decision framework for startups choosing between MERN and Next.js." },
  { slug: "hire-software-agency-india", title: "How to Hire a Software Development Agency in India", date: "June 2026", author: "TheDevFlo Team", tag: "Founders", excerpt: "A checklist for evaluating velocity, design quality, communication and technical ownership before hiring an agency." },
];

function BlogTeaser() {
  return (
    <section id="blog" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>Latest tech news</SectionTag>
            <TextEffect as="h2" className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
              From the <span className="text-primary">blog.</span>
            </TextEffect>
          </div>
          <PillButton to="/blog" variant="ghost">View all posts</PillButton>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((p, i) => (
            <motion.a
              key={p.slug} href={`/blog/${p.slug}`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col rounded-3xl border border-border bg-surface-elevated/30 p-6 transition-colors hover:border-primary/30"
            >
              <span className="self-start rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">{p.tag}</span>
              <h3 className="text-display mt-5 text-2xl">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Calendar className="size-3" />{p.date}</span>
                  <span className="flex items-center gap-1"><User className="size-3" />{p.author}</span>
                </span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Community
// ────────────────────────────────────────────────────────────
function Community() {
  return (
    <section id="community" className="mt-24 px-4">
      <div className="section-frame bg-community-gradient mx-auto max-w-6xl overflow-hidden px-6 py-14 sm:px-10 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr] sm:items-center">
          <div>
            <SectionTag>Community</SectionTag>
            <TextEffect as="h2" className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
              Join <span className="text-primary">TheDevFlo</span> community.
            </TextEffect>
            <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
              Connect with developers, founders, designers, and tech enthusiasts building the next wave of products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="https://wa.me/919305558338">Message TheDevFlo on WhatsApp</PillButton>
              <PillButton href="https://www.linkedin.com/company/109282455/" variant="ghost">Follow on LinkedIn</PillButton>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {socialLinks.map(({ name, Icon, href }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer"
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface-elevated/40 p-3 text-center transition-all hover:border-primary/40 hover:bg-surface-elevated">
                <Icon className="size-6 text-primary transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-medium text-muted-foreground">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section id="cta" className="mt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl rounded-[2rem] bg-primary p-10 text-center sm:p-20"
      >
        <TextEffect as="h2" className="text-display mx-auto max-w-3xl text-5xl text-primary-foreground sm:text-7xl">
          Ready to build something amazing?
        </TextEffect>
        <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
          Whether you're a startup, business, or creator — TheDevFlo helps turn ideas into scalable digital products.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PillButton href="/contact" variant="white">Start project</PillButton>
          <a href="mailto:hello@thedevflo.com"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10">
            Book free consultation
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: "Company", links: [{ label: "Services", href: "/#services" }, { label: "Projects", href: "/#work" }, { label: "About", href: "/about" }] },
    { title: "Resources", links: [{ label: "Blog", href: "/blog" }, { label: "Community", href: "/#community" }, { label: "Contact", href: "/contact" }, { label: "Privacy", href: "/privacy" }, { label: "Cookies", href: "/cookies" }, { label: "Project terms", href: "/terms" }, { label: "Refunds", href: "/refunds" }] },
  ];
  return (
    <footer className="mt-24 border-t border-border px-4 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid size-9 place-items-center rounded-lg bg-inverse">
                <img src={tdfLogo} alt="TheDevFlo brand mark" className="size-7 object-contain" />
              </div>
              <span className="text-display text-base font-bold">TheDevFlo</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A software studio building scalable web, mobile, and cloud products for ambitious teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map(({ name, Icon, href }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}
                  className="grid size-10 place-items-center rounded-full border border-border bg-surface-elevated/40 transition-colors hover:text-primary">
                  <Icon className="size-4" />
                </a>
              ))}
              <a href="mailto:hello@thedevflo.com" aria-label="Email"
                 className="grid size-10 place-items-center rounded-full border border-border bg-surface-elevated/40 transition-colors hover:text-primary">
                <Mail className="size-4" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.href} className="hover:text-primary">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} TheDevFlo. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@thedevflo.com" className="hover:text-primary">hello@thedevflo.com</a>
            <a href="https://thedevflo.com" className="hover:text-primary">thedevflo.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────────────────
export { Nav, Footer };

export default function HomePage() {
  return (
    <main className="relative">
      <IntroShatter />
      <PremiumBackground />
      <CursorSpotlight />
      <FloatingLogos />
      <Nav />
      <Hero />
      <WhoWeAre />
      <Services />
      <Work />
      <ClientSuccess />
      <Process />
      <AiSection />
      <AboutSection />
      <Tech />
      <BlogTeaser />
      <Community />
      <FaqSection />
      <ProjectBrief />
      <CTA />
      <Footer />
    </main>
  );
}
