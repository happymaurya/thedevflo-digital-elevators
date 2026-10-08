import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { pageHead } from "@/lib/agency-content";
export const Route = createFileRoute("/terms")({
  head: pageHead("/terms", "Project Terms, NDA & IP Information | TheDevFlo", "Discuss scope, pricing, project ownership, NDA, licensing and support before engaging TheDevFlo. Signed project agreements define your terms."),
  component: () => <ContentPage eyebrow="Project terms information" title="Agree the details before we build." intro="Website content and planning estimates are informational. Your signed proposal or contract defines the actual project terms." sections={[
    { heading: "Scope, price and delivery", body: <p>Confirm deliverables, milestones, approval responsibilities, payment schedule and change requests in writing. Sending an enquiry does not create a project agreement.</p> },
    { heading: "NDA, source code and intellectual property", body: <p>Discuss confidentiality before sharing sensitive materials. Ownership transfers, source-code handover, design files and third-party licensing must be explicitly agreed in the contract; no automatic ownership promise is made on this website.</p> },
    { heading: "Support and responsibilities", body: <p>Agree acceptance criteria, support coverage, access responsibilities and third-party service costs. Contact hello@thedevflo.com for project-specific terms. A final legal policy requires owner approval.</p> },
  ]} />,
});