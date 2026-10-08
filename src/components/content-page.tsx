import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Nav, Footer } from "@/components/home-page";
import type { ReactNode } from "react";
import { TextEffect } from "@/components/text-effect";

export interface ContentPageProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  sections: { heading: string; body: ReactNode }[];
  bullets?: string[];
  cta?: { label: string; href: string };
  backHref?: string;
  backLabel?: string;
}

export function ContentPage({
  eyebrow,
  title,
  intro,
  sections,
  bullets,
  cta = { label: "Start a project", href: "mailto:hello@thedevflo.com" },
  backHref = "/",
  backLabel = "Back home",
}: ContentPageProps) {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <section className="px-4 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl">
          <Link to={backHref} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-3.5" /> {backLabel}
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" /> {eyebrow}
          </div>
          <TextEffect as="h1" className="text-display mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            {title}
          </TextEffect>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{intro}</p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="mt-16 px-4">
        <div className="mx-auto grid max-w-4xl gap-10">
          {sections.map((s) => (
            <article key={s.heading} className="rounded-3xl border border-border bg-surface-elevated/30 p-7 sm:p-10">
              <TextEffect as="h2" className="text-display text-2xl sm:text-3xl">{s.heading}</TextEffect>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">{s.body}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 mb-24 px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 rounded-3xl border border-primary/20 bg-primary/[0.04] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-display text-2xl">Ready to build?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Share your goals with hello@thedevflo.com to discuss scope and next steps.</p>
          </div>
          <a href={cta.href} className="inline-flex items-center gap-2 rounded-full bg-button px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-button-hover">
            {cta.label} <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
