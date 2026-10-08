import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { pageHead } from "@/lib/agency-content";

export const Route = createFileRoute("/about")({
  head: pageHead("/about", "About TheDevFlo & Happy Maurya | Software Studio", "Meet Happy Maurya and TheDevFlo: product design, web and mobile engineering, AI automation and cloud development for businesses."),
  component: () => <ContentPage eyebrow="About TheDevFlo" title={<>TheDevFlo — design meets <span className="text-primary">engineering.</span></>} intro="A software studio focused on making digital products useful, clear and ready for real-world users." cta={{ label: "Discuss your project", href: "/contact" }} sections={[
    { heading: "Happy Maurya", body: <p>The person behind TheDevFlo and a point of contact for discussing your product goals, requirements and priorities.</p> },
    { heading: "What we focus on", body: <p>Web applications, mobile experiences, SaaS products, UI/UX design systems, search visibility, AI integrations and cloud infrastructure. Projects start with the problem and the people using the product — not with a predetermined technology.</p> },
    { heading: "Our purpose", body: <p>Turn business ideas into practical digital experiences through clear product thinking, thoughtful design and maintainable engineering. Our goal is to make technology a useful foundation for your next stage of growth.</p> },
    { heading: "Working together", body: <p>We define scope, priorities and milestones before development. Design reviews, testing and handover form part of the project conversation. Delivery dates, pricing, ownership and support are documented in your agreed proposal.</p> },
    { heading: "Where we work", body: <p>TheDevFlo serves businesses across India and works remotely with international teams. Email hello@thedevflo.com to discuss your location, timezone and collaboration requirements.</p> },
  ]} />,
});