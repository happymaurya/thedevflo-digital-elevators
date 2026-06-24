import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Code2, Smartphone, Palette, Search, Cloud, ArrowUpRight,
  Linkedin, Instagram, Facebook, Twitter, MessageCircle, Mail,
  Zap, Star, ArrowRight, Calendar, User,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import tdfLogo from "@/assets/tdf-logo.asset.json";
import workGoCart from "@/assets/work-gocart.jpg";
import workAdventure from "@/assets/work-adventure.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};

// ────────────────────────────────────────────────────────────
// Social links (used in footer + community)
// ────────────────────────────────────────────────────────────
export const socialLinks = [
  { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/109282455/admin/dashboard/" },
  { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/thedevflo/" },
  { name: "Facebook", Icon: Facebook, href: "https://www.facebook.com/share/1Byp6KJSkR/" },
  { name: "X (Twitter)", Icon: Twitter, href: "https://x.com/thedevflo?s=11" },
  { name: "WhatsApp Community", Icon: MessageCircle, href: "https://chat.whatsapp.com/GbalzxobDs2DPPpa08PYEe" },
];

// ────────────────────────────────────────────────────────────
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground">
      <span className="size-1.5 rounded-full bg-primary" /> {children}
    </div>
  );
}

function PillButton({
  children, variant = "primary", href, to,
}: { children: React.ReactNode; variant?: "primary" | "ghost" | "white" | "violet"; href?: string; to?: string }) {
  const base = "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:scale-[1.03]",
    white: "bg-white text-black hover:scale-[1.03]",
    ghost: "border border-white/15 bg-white/[0.03] text-foreground hover:bg-white/10",
    violet: "text-white hover:scale-[1.03]",
  }[variant];
  const style = variant === "violet" ? { background: "var(--violet)" } : undefined;
  const inner = (
    <>
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  if (to) return <Link to={to} className={`${base} ${styles}`} style={style}>{inner}</Link>;
  return <a href={href ?? "#"} className={`${base} ${styles}`} style={style}>{inner}</a>;
}

// ────────────────────────────────────────────────────────────
// Floating background TDF logos (NewForm-style)
// ────────────────────────────────────────────────────────────
function FloatingLogos() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 50, damping: 20 });
  const y = useSpring(my, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const on = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set(((e.clientX - cx) / cx) * 20);
      my.set(((e.clientY - cy) / cy) * 20);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [mx, my]);

  const logos = [
    { top: "8%", left: "6%", size: 90, delay: 0, dur: 9, blur: 6 },
    { top: "22%", left: "78%", size: 130, delay: 1.2, dur: 11, blur: 8 },
    { top: "55%", left: "3%", size: 110, delay: 0.6, dur: 10, blur: 7 },
    { top: "72%", left: "85%", size: 80, delay: 1.8, dur: 8, blur: 5 },
    { top: "40%", left: "50%", size: 160, delay: 0.3, dur: 13, blur: 10 },
  ];

  return (
    <motion.div style={{ x, y }} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {logos.map((l, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.08]"
          style={{ top: l.top, left: l.left, filter: `blur(${l.blur}px) drop-shadow(0 0 40px var(--primary))` }}
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={tdfLogo.url} alt="" width={l.size} height={l.size} className="select-none" style={{ width: l.size, height: l.size }} />
        </motion.div>
      ))}
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────
// Premium background — aurora gradient + grid + spotlight
// ────────────────────────────────────────────────────────────
function PremiumBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  useEffect(() => {
    const on = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [mx, my]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-background">
      {/* Aurora */}
      <div className="absolute -top-40 left-1/2 size-[800px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 60%)" }} />
      <div className="absolute top-1/3 -right-40 size-[600px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 -left-40 size-[600px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 60%)" }} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Mouse spotlight */}
      <motion.div
        className="absolute size-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)", x: useTransform(mx, v => v - 250), y: useTransform(my, v => v - 250) }}
      />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Floating hero background text (marquee bands)
// ────────────────────────────────────────────────────────────
function FloatingText() {
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
    { label: "Home", to: "/" as const },
    { label: "Marketplace", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#work" },
    { label: "Blog", to: "/blog" as const },
    { label: "About", href: "/#why" },
    { label: "Contact", href: "#cta" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 px-4 py-2.5 transition-all duration-500 sm:px-6 ${scrolled ? "bg-black/70 backdrop-blur-xl" : "bg-black/30 backdrop-blur-md"}`}>
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-lg bg-white">
            <img src={tdfLogo.url} alt="TheDevFlo" className="size-7 object-contain" />
          </div>
          <span className="text-display text-base font-bold tracking-tight">TDF</span>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) =>
            l.to ? (
              <Link key={l.label} to={l.to} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">{l.label}</Link>
            ) : (
              <a key={l.label} href={l.href} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">{l.label}</a>
            )
          )}
        </nav>
        <a href="#cta"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex">
          Launch Store →
        </a>
      </div>
    </motion.header>
  );
}

// ────────────────────────────────────────────────────────────
// Hero 3D "TDF" — parallax, float, glow, glassmorphism
// ────────────────────────────────────────────────────────────
function Hero3DLetters() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [18, -18]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-22, 22]), { stiffness: 80, damping: 18 });

  useEffect(() => {
    const on = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set((e.clientX - cx) / cx);
      my.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [mx, my]);

  const letters = ["T", "D", "F"];
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center [perspective:1400px]">
      <motion.div
        className="flex items-center justify-center gap-2 sm:gap-6 [transform-style:preserve-3d]"
        style={{ rotateX: rx, rotateY: ry }}
      >
        {letters.map((ch, i) => (
          <motion.span
            key={ch}
            className="text-display select-none font-black leading-none"
            style={{
              fontSize: "clamp(8rem, 26vw, 22rem)",
              letterSpacing: "-0.06em",
              background: "linear-gradient(135deg, oklch(0.85 0.18 290) 0%, oklch(0.92 0.18 160) 50%, oklch(0.7 0.22 250) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 20px 60px rgba(140,90,255,0.45)) drop-shadow(0 0 80px rgba(100,255,200,0.25))",
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: [0, -18, 0, 12, 0],
              rotateZ: [0, 2, -2, 1, 0],
              translateZ: [0, 30, 0],
            }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            {ch}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

// Slow horizontal scrolling DEVFLOHUB.COM band behind letters
function HeroBackdropWordmark() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">
      <motion.div
        className="flex w-max whitespace-nowrap text-display font-black"
        style={{
          opacity: 0.05,
          fontSize: "clamp(6rem, 16vw, 18rem)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="px-12">DEVFLOHUB.COM</span>
        ))}
      </motion.div>
    </div>
  );
}

// Animated particles
function HeroParticles() {
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    i,
    left: `${(i * 53) % 100}%`,
    top: `${(i * 37) % 100}%`,
    dur: 6 + (i % 8),
    delay: (i % 10) * 0.3,
    size: 1 + (i % 3),
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <motion.span
          key={p.i}
          className="absolute rounded-full bg-white"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, boxShadow: "0 0 8px rgba(255,255,255,0.8)" }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden px-4 pt-32">
      {/* Layered background */}
      <HeroBackdropWordmark />
      <HeroParticles />
      <Hero3DLetters />

      {/* Noise/grain overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")" }} />

      {/* Foreground content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex max-w-5xl flex-col items-center pt-24 pb-32 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTag>India's modern marketplace — DevFloHub</SectionTag>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          className="text-display mt-6 text-[3.2rem] font-black leading-[0.92] tracking-tighter sm:text-7xl md:text-[6rem]"
        >
          Build. Launch. <span style={{ background: "linear-gradient(120deg, var(--violet), var(--primary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          India's modern marketplace for digital products, web development, mobile apps, SaaS solutions and AI-powered business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#work" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]">
            Explore Marketplace
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              <ArrowRight className="size-4" />
            </motion.span>
          </a>
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-white/10">
            Start Selling
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}>
              <ArrowRight className="size-4" />
            </motion.span>
          </a>
        </motion.div>

        {/* Glass stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          {[
            { k: "120+", v: "Products shipped" },
            { k: "40+", v: "Sellers onboard" },
            { k: "99.9%", v: "Platform uptime" },
          ].map((s) => (
            <div key={s.v} className="bg-black/40 px-4 py-5">
              <div className="text-display text-2xl font-bold sm:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
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
          <h2 className="text-display text-5xl sm:text-6xl md:text-7xl">Who<br />we are</h2>
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
                <span key={i} className="text-display whitespace-nowrap text-3xl font-bold text-white/60 sm:text-4xl">{b}</span>
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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 max-w-3xl">
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
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted-foreground">{t}</span>
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
  { name: "GoCart", tag: "E-commerce Platform", image: workGoCart },
  { name: "AdventureExplorer", tag: "Travel Booking", image: workAdventure },
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
              className="group relative block overflow-hidden rounded-3xl border border-white/10"
            >
              <img src={p.image} alt={p.name} loading="lazy" width={1600} height={900} className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 sm:p-7">
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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 max-w-3xl">
          <SectionTag>How we work</SectionTag>
          <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
            A process built for <span className="text-primary">velocity.</span>
          </h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 max-w-2xl">
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
const reviews = [
  { name: "Aarav Mehta", co: "GoCart", quote: "TheDevFlo turned our scrappy MVP into a polished product that scaled to 100k users." },
  { name: "Sofia Reyes", co: "FameX", quote: "Their attention to detail is rare. Shipped on time, with taste." },
  { name: "James Carter", co: "Vendly", quote: "A true extension of our team. Engineering quality is genuinely top-tier." },
  { name: "Priya Shah", co: "AdventureExplorer", quote: "The redesign moved our conversion by 38% in the first month." },
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
                  <div className="grid size-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{r.name[0]}</div>
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
const tech = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Flutter", "React Native", "AWS", "Vercel", "Docker", "Firebase"];

function Tech() {
  return (
    <section className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12 max-w-2xl">
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
// Blog teaser
// ────────────────────────────────────────────────────────────
export const blogPosts = [
  { slug: "web-development-trends-2026", title: "Top 10 Web Development Trends in 2026", date: "June 2026", author: "TheDevFlo Team", tag: "Trends", excerpt: "AI-native UIs, edge runtimes, and the rise of typed full-stack frameworks — what to bet on in 2026." },
  { slug: "why-business-needs-website-2026", title: "Why Your Business Needs a Website in 2026", date: "June 2026", author: "TheDevFlo Team", tag: "Business", excerpt: "Even with social-first growth, a fast, owned website is still the highest-leverage asset for any business." },
  { slug: "mern-vs-nextjs", title: "MERN Stack vs Next.js: Which One Should You Choose?", date: "May 2026", author: "TheDevFlo Team", tag: "Engineering", excerpt: "A no-nonsense comparison of MERN and Next.js across speed, SEO, hosting, and team scalability." },
];

function BlogTeaser() {
  return (
    <section id="blog" className="mt-24 px-4">
      <div className="section-frame mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>Latest tech news</SectionTag>
            <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
              From the <span className="text-primary">blog.</span>
            </h2>
          </div>
          <PillButton to="/blog" variant="ghost">View all posts</PillButton>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((p, i) => (
            <motion.a
              key={p.slug} href={`/blog#${p.slug}`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-primary/30"
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
      <div className="section-frame mx-auto max-w-6xl overflow-hidden px-6 py-14 sm:px-10 sm:py-20"
        style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--violet) 25%, var(--surface)), var(--surface))" }}>
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr] sm:items-center">
          <div>
            <SectionTag>Community</SectionTag>
            <h2 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl">
              Join <span className="text-primary">TheDevFlo</span> community.
            </h2>
            <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
              Connect with developers, founders, designers, and tech enthusiasts building the next wave of products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="https://chat.whatsapp.com/GbalzxobDs2DPPpa08PYEe">Join WhatsApp community</PillButton>
              <PillButton href="https://www.linkedin.com/company/109282455/admin/dashboard/" variant="ghost">Follow on LinkedIn</PillButton>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {socialLinks.map(({ name, Icon, href }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer"
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center transition-all hover:border-primary/40 hover:bg-white/[0.06]">
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
        <h2 className="text-display mx-auto max-w-3xl text-5xl text-primary-foreground sm:text-7xl">
          Ready to build something amazing?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
          Whether you're a startup, business, or creator — TheDevFlo helps turn ideas into scalable digital products.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PillButton href="mailto:hello@thedevflo.com" variant="white">Start project</PillButton>
          <a href="mailto:hello@thedevflo.com"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-black/10">
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
    { title: "Company", links: [{ label: "About", href: "/#why" }, { label: "Services", href: "/#services" }, { label: "Projects", href: "/#work" }] },
    { title: "Resources", links: [{ label: "Blog", href: "/blog" }, { label: "Community", href: "/#community" }, { label: "Contact", href: "mailto:hello@thedevflo.com" }] },
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
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map(({ name, Icon, href }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:text-primary">
                  <Icon className="size-4" />
                </a>
              ))}
              <a href="mailto:hello@thedevflo.com" aria-label="Email"
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:text-primary">
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
export { Nav, Footer };

export default function HomePage() {
  return (
    <main className="relative">
      <PremiumBackground />
      <FloatingLogos />
      <Nav />
      <Hero />
      <WhoWeAre />
      <Services />
      <Work />
      <Process />
      <Why />
      <Testimonials />
      <Tech />
      <BlogTeaser />
      <Community />
      <CTA />
      <Footer />
    </main>
  );
}
