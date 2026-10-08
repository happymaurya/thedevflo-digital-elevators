import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { pageHead } from "@/lib/agency-content";

export const Route = createFileRoute("/services/saas-development")({
  head: pageHead("/services/saas-development", "SaaS & MVP Development Services | TheDevFlo", "Plan and build SaaS MVPs with TheDevFlo: product discovery, UX design, subscription workflows, secure access, testing and launch preparation."),
  component: () => <ContentPage eyebrow="SaaS & MVP development" title={<>A focused MVP. A stronger <span className="text-primary">product foundation.</span></>} intro="Turn an early idea into a scoped product that lets you test the core workflow before investing in every possible feature." cta={{ label: "Scope your SaaS product", href: "/contact" }} bullets={["Product discovery & prioritisation", "User journeys & design systems", "Authentication & permissions", "Subscription integrations", "Data architecture & APIs", "Testing, deployment & handover"]} sections={[
    { heading: "Build the essential workflow first", body: <p>Identify the target users, the problem worth solving and what needs to be measured. Prioritise a coherent first release, with later features in a separate backlog.</p> },
    { heading: "Secure foundations", body: <p>Plan user roles, organisation boundaries, data access and subscription states early. Choose a stack that fits the product requirements, not a fashionable architecture.</p> },
    { heading: "Launch and learn", body: <p>Test critical journeys, prepare deployment and document ownership and support. Use user feedback to guide the next iteration. Timelines and budgets are agreed after discovery.</p> },
  ]} />,
});