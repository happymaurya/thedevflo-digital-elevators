import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { pageHead } from "@/lib/agency-content";
export const Route = createFileRoute("/cookies")({
  head: pageHead("/cookies", "Cookie & Browser Storage Information | TheDevFlo", "Browser storage information for the TheDevFlo project enquiry form, external services and hosting-related settings."),
  component: () => <ContentPage eyebrow="Cookie information" title="Cookies & browser storage." intro="The project brief does not set cookies or save your form responses in browser storage." sections={[
    { heading: "This project form", body: <p>Form entries are held on the current page to prepare an email. Closing or refreshing the page clears them. No advertising or analytics cookie is required by the form.</p> },
    { heading: "Hosting and external links", body: <p>The hosting provider may use security-related cookies. External websites, WhatsApp, social networks and your email provider control their own cookies. Hosted settings have not been verified here; ask hello@thedevflo.com for the current setup.</p> },
    { heading: "Your browser settings", body: <p>You can inspect and clear site cookies and storage through your browser settings. Any future analytics, advertising or chat integration requires a fresh privacy and consent review.</p> },
  ]} />,
});