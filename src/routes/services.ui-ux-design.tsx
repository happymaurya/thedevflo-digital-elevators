import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { servicePageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/ui-ux-design")({
  head: servicePageHead({
    path: "/services/ui-ux-design",
    title: "UI/UX Design Studio in India — Figma Design Systems | TheDevFlo",
    description: "UI/UX design studio in India building Figma design systems, product interfaces and conversion-first landing pages for SaaS, startups and enterprise teams. Delhi NCR based, delivering nationwide.",
    keywords: "UI UX design studio India, Figma design systems for enterprise, product design agency Delhi, SaaS UI design India, interactive web design GSAP Tailwind, high converting landing page design",
    serviceName: "UI/UX Design",
    serviceType: "Product & Interface Design",
  }),
  component: () => (
    <ContentPage
      eyebrow="UI/UX Design"
      title={<>Design systems that ship, <span className="text-primary">not deck art.</span></>}
      intro="Product-focused UI/UX for SaaS, dashboards, marketing sites and mobile apps. Figma design systems that engineers can implement without guessing, and interactive experiences with GSAP and Tailwind."
      bullets={[
        "End-to-end product design",
        "Figma design systems & tokens",
        "Interactive prototypes",
        "Design-to-code handoff",
        "Landing pages built to convert",
        "Motion & micro-interactions with GSAP",
      ]}
      sections={[
        {
          heading: "What we design",
          body: <p>SaaS product interfaces, admin dashboards, onboarding flows, marketing sites, and cinematic brand experiences. Everything ships as a component-based Figma library so your engineers stop rebuilding buttons.</p>,
        },
        {
          heading: "Design systems for enterprise",
          body: <p>Tokens (colour, spacing, typography, motion), documented components, accessibility baked in (WCAG AA), theming (light/dark, per-brand), and a Storybook-ready structure — so your product scales without visual drift.</p>,
        },
        {
          heading: "Conversion-first landing pages",
          body: <p>We treat landing pages as growth infrastructure: message hierarchy, above-the-fold trust signals, form friction reduction, A/B-ready structure, and Core Web Vitals in the green.</p>,
        },
      ]}
    />
  ),
});
