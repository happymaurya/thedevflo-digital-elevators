import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/home-page";
import { FounderTeam } from "@/components/founder-team";
import { TextEffect } from "@/components/text-effect";
import { pageHead } from "@/lib/agency-content";

export const Route = createFileRoute("/about")({
  head: pageHead("/about", "Happy Maurya & the TheDevFlo Team | About Us", "Meet Happy Maurya, Aman Sharma and Aditya Pratap Singh: TheDevFlo’s team for full-stack development, mobile apps, Python, AI, UI/UX and video."),
  component: AboutPage,
});

function AboutPage() {
  const sections = [
    { heading: "What we focus on", body: <p>Web applications, mobile experiences, SaaS products, UI/UX design systems, search visibility, AI integrations and cloud infrastructure. Projects start with the problem and the people using the product — not with a predetermined technology.</p> },
    { heading: "Our purpose", body: <p>Turn business ideas into practical digital experiences through clear product thinking, thoughtful design and maintainable engineering. Our goal is to make technology a useful foundation for your next stage of growth.</p> },
    { heading: "Working together", body: <p>We define scope, priorities and milestones before development. Design reviews, testing and handover form part of the project conversation. Delivery dates, pricing, ownership and support are documented in your agreed proposal.</p> },
    { heading: "Where we work", body: <p>TheDevFlo serves businesses across India and works remotely with international teams. Email hello@thedevflo.com to discuss your location, timezone and collaboration requirements.</p> },
  ];
  return <main className="relative min-h-screen">
    <Nav />
    <section id="founder" className="mx-auto max-w-6xl px-6 pt-32 sm:px-10 sm:pt-40"><FounderTeam page /></section>
    <section className="mx-auto my-20 grid max-w-6xl gap-8 px-6 sm:px-10 md:grid-cols-2">
      {sections.map(section => <article key={section.heading} className="content-panel p-7 sm:p-9"><TextEffect as="h2" className="text-display text-2xl !leading-tight !tracking-normal">{section.heading}</TextEffect><div className="mt-5 text-base leading-7 text-muted-foreground">{section.body}</div></article>)}
    </section>
    <Footer />
  </main>;
}