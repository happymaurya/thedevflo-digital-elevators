import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Code2, Smartphone, Palette, Search, Cloud, ArrowUpRight,
  Github, Linkedin, Instagram, Mail, Sparkles, Zap, Star,
} from "lucide-react";
import tdfLogo from "@/assets/tdf-logo.asset.json";

const EASE = [0.22, 1, 0.36, 1] as const;

// ────────────────────────────────────────────────────────────
// Reusable bits
// ────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE as any } },
};

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      <Sparkles className="size-3" /> {children}
    </div>
  );
}

function MagneticButton({
  children, variant = "primary", href,
}: { children: React.ReactNode; variant?: "primary" | "ghost"; href?: string }) {
  const base = "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] hover:shadow-[0_0_60px_-4px_var(--primary)] hover:scale-[1.03]"
      : "glass text-foreground hover:bg-white/10";
  return (
    <a href={href ?? "#"} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

// ────────────────────────────────────────────────────────────
// Navigation
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
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-full bg-white">
            <img src={tdfLogo.url} alt="TheDevFlo" className="size-7 object-contain" />
          </div>
          <span className="text-display text-lg tracking-tight">TheDevFlo</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#cta"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--primary)] sm:inline-flex">
          Start project
        </a>
      </div>
    </motion.header>
  );
}

// ────────────────────────────────────────────────────────────
// Hero
// ────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: (e.clientX - r.left - r.width / 2) / r.width, y: (e.clientY - r.top - r.height / 2) / r.height });
      }}
      className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden px-4 pt-32 sm:pt-24"
    >
      {/* Glow orb */}
      <motion.div
        style={{ y, opacity, x: mouse.x * 40, translateY: mouse.y * 30 }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[80vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow animate-pulse-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-20 size-[40vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[120px]"
      />
      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.span key={i}
          className="pointer-events-none absolute size-1 rounded-full bg-primary/60"
          initial={{ x: `${(i * 47) % 100}%`, y: `${(i * 31) % 100}%`, opacity: 0 }}
          animate={{ y: [`${(i * 31) % 100}%`, `${((i * 31) % 100) - 10}%`], opacity: [0, 0.8, 0] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <SectionTag>Software studio · Est. 2024</SectionTag>
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}
          className="text-display mt-6 text-5xl sm:text-7xl md:text-[8rem]"
        >
          Build Digital Products<br />
          <span className="italic text-primary">That Scale</span> Businesses
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.25 }}
          className="mx-auto mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          Web development, mobile apps, UI/UX design, SEO & cloud solutions —
          engineered for ambitious teams shipping at the edge of taste and performance.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="#cta">Start project</MagneticButton>
          <MagneticButton href="#work" variant="ghost">View work</MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Trust marquee
// ────────────────────────────────────────────────────────────
function Trust() {
  const brands = ["Startups", "SaaS", "E-commerce", "Agencies", "Fintech", "D2C", "EdTech", "HealthTech"];
  const row = [...brands, ...brands];
  return (
    <section className="relative border-y border-border/50 py-8">
      <div className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Trusted by teams building the next wave
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {row.map((b, i) => (
            <span key={i} className="text-display whitespace-nowrap text-3xl text-muted-foreground/60 sm:text-4xl">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Services bento
// ────────────────────────────────────────────────────────────
const services = [
  { icon: Code2, title: "Web Development", desc: "MERN stack, Next.js, Node.js — production-grade apps with edge-native performance.", tags: ["Next.js", "Node", "React"], span: "lg:col-span-2 lg:row-span-2" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Flutter & React Native — one codebase, native feel.", tags: ["Flutter", "RN"], span: "" },
  { icon: Palette, title: "UI / UX Design", desc: "Figma, research, design systems.", tags: ["Figma"], span: "" },
  { icon: Search, title: "SEO Optimization", desc: "Technical SEO, local SEO, content strategy that ranks.", tags: ["GSC", "Schema"], span: "lg:col-span-2" },
  { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Vercel, Docker — scalable infra from day one.", tags: ["AWS", "Vercel", "Docker"], span: "" },
];

function Services() {
  return (
    <section id="services" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp} className="mb-16 text-center"
        >
          <SectionTag>What we do</SectionTag>
          <h2 className="text-display mt-5 text-4xl sm:text-6xl">
            A full-stack studio,<br /><span className="italic text-primary">end to end.</span>
          </h2>
        </motion.div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-glow-sm ${s.span}`}
              >
                <div aria-hidden className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="grid size-11 place-items-center rounded-xl border border-border bg-background/60">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-display text-2xl sm:text-3xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
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
  { name: "GoCart", tag: "E-commerce Platform", gradient: "from-orange-500 via-rose-500 to-pink-500" },
  { name: "AdventureXplorer", tag: "Travel Booking", gradient: "from-amber-400 via-orange-500 to-red-500" },
  { name: "FameX", tag: "Social Media App", gradient: "from-fuchsia-500 via-orange-500 to-yellow-400" },
  { name: "Vendly", tag: "Marketplace", gradient: "from-orange-400 via-red-500 to-rose-600" },
];

function Work() {
  return (
    <section id="work" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>Featured work</SectionTag>
            <h2 className="text-display mt-5 text-4xl sm:text-6xl">
              Selected <span className="italic text-primary">projects.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A handful of products we've shipped — from zero-to-launch and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.name} href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-border"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-80 transition-transform duration-700 group-hover:scale-110`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                  <h3 className="text-display mt-1 text-3xl sm:text-4xl">{p.name}</h3>
                </div>
                <div className="grid size-12 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
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
    <section id="process" className="relative px-4 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-16 text-center">
          <SectionTag>How we work</SectionTag>
          <h2 className="text-display mt-5 text-4xl sm:text-6xl">
            A process built for <span className="italic text-primary">velocity.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div aria-hidden className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
              className={`relative mb-10 grid grid-cols-[3rem_1fr] gap-6 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`md:text-right ${i % 2 === 1 ? "md:text-left" : ""}`}>
                <div className="absolute left-6 grid size-3 -translate-x-1/2 place-items-center rounded-full bg-primary shadow-glow-sm md:left-1/2" />
                <span className="text-display text-5xl text-primary/80">{s.n}</span>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Why us — stats counters
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
    <section id="why" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-16 max-w-2xl">
          <SectionTag>Why TheDevFlo</SectionTag>
          <h2 className="text-display mt-5 text-4xl sm:text-6xl">
            Built different.<br /><span className="italic text-primary">Shipped faster.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6">
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
    <section className="relative py-32">
      <div className="mx-auto mb-16 max-w-6xl px-4">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionTag>Testimonials</SectionTag>
          <h2 className="text-display mt-5 text-4xl sm:text-6xl">
            Words from <span className="italic text-primary">founders.</span>
          </h2>
        </motion.div>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 px-6" style={{ animationDuration: "60s" }}>
          {row.map((r, i) => (
            <div key={i} className="glass w-[340px] shrink-0 rounded-2xl p-6 sm:w-[400px]">
              <div className="flex gap-0.5 text-primary">
                {[...Array(5)].map((_, k) => <Star key={k} className="size-3.5 fill-current" />)}
              </div>
              <p className="mt-4 text-sm text-foreground/90">"{r.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-sm font-semibold text-primary-foreground">
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
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Tech stack
// ────────────────────────────────────────────────────────────
const tech = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Flutter", "React Native", "AWS", "Vercel", "Docker", "Firebase"];

function Tech() {
  return (
    <section className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 text-center">
          <SectionTag>Tech stack</SectionTag>
          <h2 className="text-display mt-5 text-4xl sm:text-6xl">
            Tools we <span className="italic text-primary">love.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {tech.map((t, i) => (
            <motion.div key={t}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ y: -4, borderColor: "var(--primary)" }}
              className="glass grid aspect-square place-items-center rounded-2xl p-4 text-center text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm">
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
    <section id="cta" className="relative px-4 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
          className="relative isolate overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-to-br from-primary/20 via-background to-background p-10 text-center sm:p-20"
        >
          <div aria-hidden className="absolute -inset-20 -z-10 bg-radial-glow animate-pulse-glow" />
          <SectionTag>Let's build</SectionTag>
          <h2 className="text-display mx-auto mt-6 max-w-3xl text-4xl sm:text-7xl">
            Ready to build something <span className="italic text-primary">amazing?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">
            Book a free 30-minute consultation. We'll map out scope, timeline, and budget.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <MagneticButton href="mailto:hello@thedevflo.com">Book free consultation</MagneticButton>
            <MagneticButton href="#work" variant="ghost">See more work</MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// Footer
// ────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: "Company", links: ["About", "Services", "Projects"] },
    { title: "Resources", links: ["Blog", "Careers", "Contact"] },
  ];
  return (
    <footer className="relative border-t border-border px-4 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid size-9 place-items-center rounded-full bg-white">
                <img src={tdfLogo.url} alt="TheDevFlo" className="size-7 object-contain" />
              </div>
              <span className="text-display text-lg">TheDevFlo</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A software studio building scalable web, mobile, and cloud products for ambitious teams.
            </p>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Instagram, Github, Mail].map((I, i) => (
                <a key={i} href="#" className="glass grid size-10 place-items-center rounded-full transition-colors hover:text-primary">
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
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
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
      <Trust />
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
