import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { pageHead } from "@/lib/agency-content";
export const Route = createFileRoute("/refunds")({
  head: pageHead("/refunds", "Refund & Cancellation Information | TheDevFlo", "Confirm refund, cancellation and project pause terms in your signed TheDevFlo agreement. Contact the studio to discuss an existing project."),
  component: () => <ContentPage eyebrow="Refund & cancellation information" title="Clear terms for your project." intro="Refund and cancellation eligibility are defined in your signed project agreement. No universal refund percentage or cancellation period is published here." sections={[
    { heading: "Before work begins", body: <p>Ask for written terms covering deposits, completed work, cancellations, project pauses and non-refundable third-party costs before paying.</p> },
    { heading: "An existing project", body: <p>Email hello@thedevflo.com with your project reference and the change you are requesting. The signed agreement and work completed determine the applicable process. Do not send payment credentials.</p> },
  ]} />,
});