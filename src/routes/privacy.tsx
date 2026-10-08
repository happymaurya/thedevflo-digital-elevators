import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { pageHead } from "@/lib/agency-content";
export const Route = createFileRoute("/privacy")({
  head: pageHead("/privacy", "Website Privacy Information | TheDevFlo", "How the static TheDevFlo project brief handles your details, email enquiries and external links. Contact TheDevFlo with privacy questions."),
  component: () => <ContentPage eyebrow="Privacy information" title="Your project details." intro="This page describes the project brief on this website. It is not a substitute for a complete, owner-approved privacy policy covering every business activity." sections={[
    { heading: "Project enquiries", body: <p>The project form prepares an email in your browser. It does not submit your details to a website service or save them in browser storage. The brief reaches TheDevFlo only when you send the email using your email provider.</p> },
    { heading: "Information you choose to share", body: <p>Your email may include your name, company, contact details, project description, budget and timeline. Keep passwords, payment credentials and confidential customer information out of enquiries. Contact hello@thedevflo.com with questions about information you have shared.</p> },
    { heading: "External services", body: <p>Email, WhatsApp, social networks and linked project websites are independent services with their own privacy terms. Hosting services may process request logs; specific retention arrangements must be confirmed with the website owner.</p> },
  ]} />,
});