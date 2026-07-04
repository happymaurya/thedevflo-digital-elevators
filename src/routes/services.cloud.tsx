import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { servicePageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/cloud")({
  head: servicePageHead({
    path: "/services/cloud",
    title: "Cloud & DevOps Consulting in India — AWS, GCP, CI/CD | TheDevFlo",
    description: "Cloud and DevOps consulting in India — scalable AWS and GCP architecture, CI/CD, observability and cost optimisation for startups and SaaS. Delhi NCR based, working nationwide.",
    keywords: "cloud consulting India, DevOps agency Delhi, scalable cloud architecture for startups, AWS consulting India, GCP consulting, CI CD pipeline setup, SRE for startups",
    serviceName: "Cloud & DevOps",
    serviceType: "Cloud Architecture & DevOps",
  }),
  component: () => (
    <ContentPage
      eyebrow="Cloud & DevOps"
      title={<>Scalable cloud architecture <span className="text-primary">for startups.</span></>}
      intro="AWS and GCP infrastructure, CI/CD pipelines, container orchestration, observability and cost optimisation — designed so your product scales from launch to Series B without a re-platform."
      bullets={[
        "AWS, GCP and Cloudflare",
        "Terraform / IaC",
        "Containerisation (Docker, ECS, Fargate)",
        "CI/CD with GitHub Actions",
        "Observability (logs, metrics, traces)",
        "Cost audits & optimisation",
      ]}
      sections={[
        {
          heading: "Architecture for the stage you're at",
          body: <p>Pre-revenue MVP: a serverless-first setup that costs pennies. Series A SaaS: multi-tenant DB isolation, read replicas, caching, background jobs. We match the architecture to the traction — not to a template.</p>,
        },
        {
          heading: "CI/CD and DevEx",
          body: <p>Push-to-deploy pipelines, preview environments per PR, automated tests and security scans in CI, blue/green or canary deploys — so shipping stays boring and safe as your team grows.</p>,
        },
        {
          heading: "Observability and on-call",
          body: <p>Structured logs, RED/USE metrics, distributed tracing, and alerting that pages a human only when something's actually wrong. We can also run a fractional SRE retainer post-launch.</p>,
        },
      ]}
    />
  ),
});
