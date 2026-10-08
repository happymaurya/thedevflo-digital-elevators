import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { pageHead } from "@/lib/agency-content";

export const Route = createFileRoute("/services/ai-automation")({
  head: pageHead("/services/ai-automation", "AI Development & Workflow Automation | TheDevFlo", "AI chatbots, agents, RAG knowledge bases, voice AI and workflow automation. Discuss secure OpenAI, Gemini and Claude integrations with TheDevFlo."),
  component: () => <ContentPage eyebrow="AI development & automation" title={<>AI built for <span className="text-primary">real workflows.</span></>} intro="Integrate AI into a specific business task with clear success criteria, controlled data access and a plan for human oversight." cta={{ label: "Discuss an AI project", href: "/contact" }} bullets={["AI chatbots & customer support", "Tool-using AI agents", "RAG & knowledge bases", "Voice AI interfaces", "Workflow automation", "AI SaaS & model integrations"]} sections={[
    { heading: "Chatbots and task-oriented agents", body: <p>Build assistants that answer product questions, guide users and execute approved actions through existing tools. Define escalation paths, permitted actions and safeguards before the agent reaches customers.</p> },
    { heading: "Knowledge grounded in your documents", body: <p>Retrieval-augmented generation connects approved knowledge to the conversation. Source references, access permissions, document freshness and evaluation sets help distinguish reliable answers from unsupported output.</p> },
    { heading: "Automation and voice", body: <p>Connect support, internal operations and reporting workflows. Voice interfaces can combine transcription, task execution and spoken replies; consent, latency and accessibility should be designed alongside the experience.</p> },
    { heading: "OpenAI, Gemini and Claude integrations", body: <p>Choose models based on the task, quality, latency, data requirements and operating cost. API credentials stay private, conversations retain their context and integrations are tested against representative examples.</p> },
    { heading: "From pilot to product", body: <p>Define a narrow use case, prototype against real examples, evaluate output and review privacy risks before rollout. Your proposal documents the scope, usage costs, monitoring and ongoing support rather than promising perfect AI accuracy.</p> },
  ]} />,
});