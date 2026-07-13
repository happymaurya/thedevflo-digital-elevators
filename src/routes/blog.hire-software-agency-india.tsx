import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { articleHead } from "@/lib/seo-head";

export const Route = createFileRoute("/blog/hire-software-agency-india")({
  head: articleHead({
    path: "/blog/hire-software-agency-india",
    title: "How to Hire a Software Development Agency in India (2026 Guide)",
    description: "A founder's guide to hiring a software development agency in India: evaluate velocity, UX quality, technical depth, communication and delivery process.",
    keywords: "hire software development agency India, hire web developers India, hire software agency, MVP development agency India, Delhi NCR software agencies, how to hire dev agency",
    datePublished: "2026-06-28",
  }),
  component: () => (
    <ContentPage
      eyebrow="Article · 8 min read"
      backHref="/blog"
      backLabel="Back to blog"
      title={<>How to hire a software agency in <span className="text-primary">India</span> in 2026.</>}
      intro="Hiring a dev agency is a five-figure decision — sometimes six. Here's how founders and product teams actually evaluate Indian software studios in 2026, without falling for demo-ware."
      sections={[
        {
          heading: "1. Shortlist by proof, not pitch decks",
          body: (
            <>
              <p>Any agency can put "AI-powered", "world-class" and a stock hero image on their site. Ignore that. Look for three concrete signals:</p>
              <p><strong className="text-foreground">Live case studies.</strong> Real URLs you can click, not screenshots. Bonus if they explain the trade-offs, not just the wins.</p>
              <p><strong className="text-foreground">Open-source or public code.</strong> A GitHub org with real contributions tells you more than any deck.</p>
              <p><strong className="text-foreground">Named team, LinkedIn-visible.</strong> If the "team" section is stock photos, walk away.</p>
            </>
          ),
        },
        {
          heading: "2. The four questions to ask on the first call",
          body: (
            <>
              <p><strong className="text-foreground">"Who owns the code?"</strong> Answer must be: you, from day one, in your GitHub org.</p>
              <p><strong className="text-foreground">"Which team members are actually on my project?"</strong> Not "our senior engineers" — names, GitHub handles, and % allocation.</p>
              <p><strong className="text-foreground">"How do we handle scope changes?"</strong> A clear change-request process signals a mature studio. "We'll figure it out" is a red flag.</p>
              <p><strong className="text-foreground">"What happens if we part ways in month 3?"</strong> Every deliverable, every credential, every doc — in your possession.</p>
            </>
          ),
        },
        {
          heading: "3. How pricing actually works",
          body: (
            <>
              <p><strong className="text-foreground">Fixed-scope projects</strong> (MVPs, landing pages, defined migrations) — ₹4L–₹25L in India for a serious build. Anything below ₹2L for a real MVP is either a template or someone learning on your dime.</p>
              <p><strong className="text-foreground">Monthly retainers</strong> for ongoing product work — ₹2L–₹8L per month per team pod (usually 2 engineers + a designer).</p>
              <p><strong className="text-foreground">Time & materials</strong> — ₹1,500–₹5,000 per hour depending on seniority and stack. Only pick T&M if scope is genuinely unknown; otherwise it's a blank cheque.</p>
            </>
          ),
        },
        {
          heading: "4. Red flags to walk away from",
          body: (
            <>
              <p>No writing test / no design test / no discovery call before quoting.</p>
              <p>NDAs before anything else (real agencies sign yours, not theirs).</p>
              <p>Promising 4-week timelines for anything with real auth + payments + admin.</p>
              <p>"We'll add AI to it" as the primary differentiator with no product context.</p>
            </>
          ),
        },
        {
          heading: "5. Delhi NCR, Bengaluru, Mumbai — does location matter?",
          body: <p>In 2026, no. Every serious Indian agency runs remote-first with async standups and a monthly on-site when needed. Optimise for the team, the case studies, and the process — not the pin code.</p>,
        },
      ]}
      cta={{ label: "See how TheDevFlo works", href: "/services" }}
    />
  ),
});
