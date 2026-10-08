export const agencyFaqs = [
  { question: "What can TheDevFlo build?", answer: "Websites, custom web applications, mobile apps, SaaS products, UI/UX design systems, AI integrations, workflow automation and cloud infrastructure. Start with your business problem; the proposal defines the deliverables." },
  { question: "How much will my project cost?", answer: "Cost depends on features, integrations, design, security and ongoing support. Send a project brief for a scoped proposal. A published guide or calculator is planning information, not a binding TheDevFlo quotation." },
  { question: "How long does development take?", answer: "The schedule depends on scope, approvals and integrations. Discovery establishes milestones for design, development, testing and launch; the agreed proposal contains your actual timeline." },
  { question: "Can you improve an existing product?", answer: "Yes. Share the existing website or application and the problems you want to solve. Improvements can cover user experience, performance, accessibility, search visibility and infrastructure." },
  { question: "What AI solutions can I discuss?", answer: "Customer-support chatbots, task-oriented agents, retrieval-augmented knowledge bases, voice interfaces, AI SaaS features and business workflow automation. Privacy, human oversight and usage costs should be defined before implementation." },
  { question: "Who owns the source code and intellectual property?", answer: "Ownership, licensing, handover, NDA requirements and third-party dependencies must be agreed in the signed project contract. Ask for these terms before work starts." },
  { question: "Is support included after launch?", answer: "Discuss maintenance, monitoring, bug fixes and future iterations in your proposal. Support coverage, duration and response expectations are project-specific." },
  { question: "How do I start a project?", answer: "Complete the project brief or email hello@thedevflo.com with your goals, expected features, preferred budget and target launch date. Do not send passwords or sensitive customer data." },
];

export function pageHead(path: string, title: string, description: string) {
  return () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: `https://thedevflo.com${path}` }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: `https://thedevflo.com${path}` }],
  });
}