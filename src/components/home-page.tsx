import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Code2, Smartphone, Palette, Search, Cloud, ArrowUpRight,
  Github, Linkedin, Instagram, Mail, Sparkles, Zap, Star, ArrowRight,
} from "lucide-react";
import tdfLogo from "@/assets/tdf-logo.asset.json";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};

// ────────────────────────────────────────────────────────────
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground">
      <span className="size-1.5 rounded-full bg-primary" /> {children}
    </div>
  );
}

function PillButton({
  children, variant = "primary", href,
}: { children: React.ReactNode; variant?: "primary" | "ghost" | "white"; href?: string }) {
  const base = "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:scale-[1.03]",
    white: "bg-white text-black hover:scale-[1.03]",
    ghost: "border border-white/15 bg-white/[0.03] text-foreground hover:bg-white/10",
  }[variant];
  return (
    <a href={href ?? "#"} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
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
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#why" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 px-4 py-2.5 transition-all duration-500 sm:px-6 ${scrolled ? "bg-black/70 backdrop-blur-xl" : "bg-black/30 backdrop-blur-md"}`}>
        <a href="#" className="flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-lg bg-white">
            <img src={tdfLogo.url} alt="TheDevFlo" className="size-7 object-contain" />
          </div>
          <span className="text-display text-base font-bold tracking-tight">TheDevFlo</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#cta"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex">
          Start project →
        </a>
      </div>
    </motion.header>
  );
}

// ────────────────────────────────────────────────────────────
// Hero — Newform style: big chunky headline, abstract shapes on top
// ────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 pt-32 sm:pt-28">
      {/* Top abstract shapes row */}
      <motion.div style={{ y }} className="mx-auto mb-12 grid max-w-6xl grid-cols-3 gap-4 sm:gap-6">
        {/* Violet block 1 */}
        <motion.div
          initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          className="aspect-square rounded-2xl bg-gradient-to-br from-violet to-violet/60 sm:aspect-[3/4] sm:rounded-[2rem]"
          style={{ background: "linear-gradient(135deg, var(--violet), color-mix(in oklab, var(--violet) 60%, black))" }}
        />
        {/* Violet block 2 with little device feel */}
        <motion.div
          initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] as any }}
          className="relative aspect-square overflow-hidden rounded-2xl sm:aspect-[3/4] sm:rounded-[2rem]"
          style={{ background: "linear-gradient(160deg, color-mix(in oklab, var(--violet) 90%, white 5%), color-mix(in oklab, var(--violet) 60%, black))" }}
        >
          <div className="absolute inset-x-6 top-8 h-8 rounded-md bg-white/15" />
          <div className="absolute inset-x-6 top-20 h-3 w-2/3 rounded-md bg-white/15" />
          <div className="absolute inset-x-6 bottom-10 h-16 rounded-xl bg-white/20" />
        </motion.div>
        {/* Outline wireframe block */}
        <motion.div
          initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
          className="relative aspect-square rounded-2xl border border-white/15 sm:aspect-[3/4] sm:rounded-[2rem]"
        >
          <svg className="absolute inset-0 size-full text-white/20" viewBox="0 0 200 200" fill="none" preserveAspectRatio="none">
            <path d="M0 60 H140 Q160 60 160 80 V200" stroke="currentColor" strokeWidth="1" />
            <path d="M40 0 V100 Q40 120 60 120 H200" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Headline grid */}
      <div className="mx-auto grid max-w-6xl gap-8 pb-24 sm:grid-cols-[1.4fr_1fr] sm:gap-12">
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as any }}
          className="text-display text-[3.2rem] font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-[5.5rem]"
        >
          Be Part Of <span className="text-primary">TheDevFlo.</span><br />
          Build. Ship. <span className="text-primary">Scale.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col justify-end gap-6"
        >
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            We help startups and businesses build scalable web apps, mobile apps, and digital products through engineering, design, and cloud expertise.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PillButton href="#cta">Start a project</PillButton>
            <PillButton href="#work" variant="ghost">View work</PillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Who we are — framed section with marquee logos
// ────────────────────────────────────────────────────────────
function WhoWeAre() {
  const brands = ["Startups", "SaaS", "E-commerce", "Agencies", "Fintech", "D2C", "EdTech", "HealthTech"];
  const row = [...brands, ...brands];
  return (
    <section className="px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <h2 className="text-display text-5xl sm:text-6xl md:text-7xl">
            Who<br />we are
          </h2>
          <div className="flex flex-col justify-end gap-6">
            <p className="max-w-xl text-lg text-foreground/90 sm:text-xl">
              We help ambitious teams grow their products, get to market, and connect with users — through engineering, design, and SEO that compound.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">Engineering</span>
              <span className="rounded-full px-4 py-1.5 text-sm font-medium text-white" style={{ background: "var(--violet)" }}>Design</span>
              <span className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-foreground">Cloud</span>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-6 text-sm text-muted-foreground">Trusted by teams building for:</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-14">
              {row.map((b, i) => (
                <span key={i} className="text-display whitespace-nowrap text-3xl font-bold text-white/60 sm:text-4xl">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Services — numbered list with mint accents
// ────────────────────────────────────────────────────────────
const services = [
  { n: "01", icon: Code2, title: "Web Development", desc: "MERN stack, Next.js, Node.js — production-grade apps with edge-native performance.", tags: ["Next.js", "Node", "React"] },
  { n: "02", icon: Smartphone, title: "Mobile App Development", desc: "Flutter & React Native — one codebase, native feel, fast to ship.", tags: ["Flutter", "React Native"] },
  { n: "03", icon: Palette, title: "UI / UX Design", desc: "Figma, user research, design systems that scale with your product.", tags: ["Figma", "Design systems"] },
  { n: "04", icon: Search, title: "SEO Optimization", desc: "Technical SEO, local SEO, content strategy — built to rank and convert.", tags: ["Technical SEO", "Schema"] },
  { n: "05", icon: Cloud, title: "Cloud Solutions", desc: "AWS, Vercel, Docker — scalable infrastructure from day one.", tags: ["AWS", "Vercel", "Docker"] },
];

function Services() {
  return (
    <section id="services" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="mb-16 max-w-3xl"
        >
          <SectionTag>What we do</SectionTag>
          <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            TheDevFlo gets you <span className="text-primary">access to</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.title} href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 transition-colors hover:bg-white/[0.02] sm:py-10"
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
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted-foreground">
                        {t}
                      </span>
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
// Featured work
// ────────────────────────────────────────────────────────────
const projects = [
  { name: "GoCart", tag: "E-commerce Platform", gradient: "linear-gradient(135deg, var(--violet), oklch(0.5 0.25 290))" },
  { name: "AdventureXplorer", tag: "Travel Booking", gradient: "linear-gradient(135deg, var(--primary), oklch(0.7 0.2 180))" },
  { name: "FameX", tag: "Social Media App", gradient: "linear-gradient(135deg, oklch(0.65 0.25 330), var(--violet))" },
  { name: "Vendly", tag: "Marketplace", gradient: "linear-gradient(135deg, oklch(0.75 0.2 200), var(--primary))" },
];

function Work() {
  return (
    <section id="work" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>Featured work</SectionTag>
            <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
              Selected <span className="text-primary">projects.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A handful of products we've shipped — from zero-to-launch and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.name} href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-x-6 top-8 h-10 rounded-lg bg-white/20" />
              <div className="absolute inset-x-6 top-24 h-3 w-1/2 rounded bg-white/20" />
              <div className="absolute inset-x-6 bottom-20 h-20 rounded-xl bg-white/25" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-7">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70">{p.tag}</div>
                  <h3 className="text-display mt-1 text-3xl text-white sm:text-4xl">{p.name}</h3>
                </div>
                <div className="grid size-11 place-items-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Process
// ────────────────────────────────────────────────────────────
const steps = [
  { n: "01", title: "Discovery", desc: "Workshops to align on goals, users, and constraints." },
  { n: "02", title: "Strategy", desc: "Roadmap, scope, and architecture blueprint." },
  { n: "03", title: "Design", desc: "Brand-aligned UI, design systems, prototypes." },
  { n: "04", title: "Development", desc: "Engineering with weekly demos and tight feedback loops." },
  { n: "05", title: "Launch", desc: "Ship, measure, iterate. We stick around post-launch." },
];

function Process() {
  return (
    <section id="process" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14 max-w-3xl">
          <SectionTag>How we work</SectionTag>
          <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            A process built for <span className="text-primary">velocity.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
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
// Why us
// ────────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Why() {
  const stats = [
    { value: 50, suffix: "+", label: "Projects delivered" },
    { value: 20, suffix: "+", label: "Happy clients" },
    { value: 99, suffix: "%", label: "Satisfaction rate" },
    { value: 100, suffix: "%", label: "On-time delivery" },
  ];
  return (
    <section id="why" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14 max-w-2xl">
          <SectionTag>Why TheDevFlo</SectionTag>
          <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            Built different.<br /><span className="text-primary">Shipped faster.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-display text-4xl text-primary sm:text-5xl md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Testimonials
// ────────────────────────────────────────────────────────────
const reviews = [
  { name: "Aarav Mehta", co: "GoCart", quote: "TheDevFlo turned our scrappy MVP into a polished product that scaled to 100k users." },
  { name: "Sofia Reyes", co: "FameX", quote: "Their attention to detail is rare. Shipped on time, with taste." },
  { name: "James Carter", co: "Vendly", quote: "A true extension of our team. Engineering quality is genuinely top-tier." },
  { name: "Priya Shah", co: "AdventureXplorer", quote: "The redesign moved our conversion by 38% in the first month." },
  { name: "Liam Novak", co: "Stellar SaaS", quote: "Best agency we've worked with. Period." },
];

function Testimonials() {
  const row = [...reviews, ...reviews];
  return (
    <section className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl overflow-hidden px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            Words from <span className="text-primary">founders.</span>
          </h2>
        </motion.div>
        <div className="relative -mx-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:-mx-10">
          <div className="flex w-max animate-marquee gap-5 px-6" style={{ animationDuration: "60s" }}>
            {row.map((r, i) => (
              <div key={i} className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:w-[400px]">
                <div className="flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, k) => <Star key={k} className="size-3.5 fill-current" />)}
                </div>
                <p className="mt-4 text-sm text-foreground/90">"{r.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.co}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Tech stack
// ────────────────────────────────────────────────────────────
const tech = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Flutter", "React Native", "AWS", "Vercel", "Docker", "Firebase"];

function Tech() {
  return (
    <section className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 max-w-2xl">
          <SectionTag>Tech stack</SectionTag>
          <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            Tools we <span className="text-primary">love.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {tech.map((t, i) => (
            <motion.div key={t}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group grid aspect-square place-items-center rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:text-sm">
              <div className="flex flex-col items-center gap-2">
                <Zap className="size-4 text-primary" />
                {t}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// CTA
// ────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section id="cta" className="mt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl rounded-[2rem] bg-primary p-10 text-center sm:p-20"
      >
        <h2 className="text-display mx-auto max-w-3xl text-5xl text-primary-foreground sm:text-7xl">
          Ready to build something amazing?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-primary-foreground/80">
          Book a free 30-minute consultation. We'll map out scope, timeline, and budget.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PillButton href="mailto:hello@thedevflo.com" variant="white">Book free consultation</PillButton>
        </div>
      </motion.div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: "Company", links: ["About", "Services", "Projects"] },
    { title: "Resources", links: ["Blog", "Careers", "Contact"] },
  ];
  return (
    <footer className="mt-24 border-t border-white/10 px-4 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid size-9 place-items-center rounded-lg bg-white">
                <img src={tdfLogo.url} alt="TheDevFlo" className="size-7 object-contain" />
              </div>
              <span className="text-display text-base font-bold">TheDevFlo</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A software studio building scalable web, mobile, and cloud products for ambitious teams.
            </p>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Instagram, Github, Mail].map((I, i) => (
                <a key={i} href="#" className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:text-primary">
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} TheDevFlo. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@thedevflo.com" className="hover:text-primary">hello@thedevflo.com</a>
            <a href="#" className="hover:text-primary">thedevflo.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <WhoWeAre />
      <Services />
      <Work />
      <Process />
      <Why />
      <Testimonials />
      <Tech />
      <CTA />
      <Footer />
    </main>
  );
}
