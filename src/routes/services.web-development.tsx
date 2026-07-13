import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { servicePageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/web-development")({
  head: servicePageHead({
    path: "/services/web-development",
    title: "MERN & Next.js Web Development in India | TheDevFlo",
    description: "Custom web application development in India using MERN stack, Next.js and Node.js. Delhi NCR based engineering team building scalable web platforms for startups and enterprise.",
    keywords: "MERN stack web application development, Next.js and Node.js developers India, custom web development Delhi, performance-optimized Next.js developers, scalable web apps India, hire web developers India",
    serviceName: "Web Application Development",
    serviceType: "Custom Web Development",
  }),
  component: () => (
    <ContentPage
      eyebrow="Web Development"
      title={<>MERN & Next.js web development for <span className="text-primary">Indian startups and enterprise.</span></>}
      intro="We design and engineer production-grade web applications on the MERN stack, Next.js and Node.js. From SaaS MVPs to enterprise portals, our Delhi NCR team ships fast, scales cleanly, and stays maintainable."
      bullets={[
        "Next.js 15 + Node.js APIs",
        "MERN stack (MongoDB, Express, React, Node)",
        "PostgreSQL, Supabase, Drizzle ORM",
        "Interactive UI with GSAP + Tailwind",
        "SEO-friendly SSR & edge rendering",
        "TypeScript end-to-end, tested and typed",
      ]}
      sections={[
        {
          heading: "What we build",
          body: (
            <>
              <p>SaaS platforms, admin dashboards, marketplaces, B2B portals, high-traffic marketing sites and internal tools. Every project ships with authentication, RBAC, observability and CI/CD out of the box.</p>
              <p>We're stack-agnostic within JavaScript — we pick MERN, Next.js, Remix or TanStack Start based on your product's SEO, real-time and data-access needs, not fashion.</p>
            </>
          ),
        },
        {
          heading: "How we work",
          body: (
            <>
              <p><strong className="text-foreground">Discovery (week 1):</strong> product scoping, information architecture, tech stack selection, milestone plan.</p>
              <p><strong className="text-foreground">Design + engineering (weeks 2–8):</strong> weekly demos on a staging URL, code in your GitHub, Linear/Notion for tickets.</p>
              <p><strong className="text-foreground">Launch + care:</strong> production deploy, monitoring, performance tuning, and a monthly retainer for iteration.</p>
            </>
          ),
        },
        {
          heading: "Who we work with",
          body: <p>Early-stage SaaS founders needing an MVP in 6–8 weeks, growth-stage teams rebuilding legacy stacks, and enterprises modernising internal tooling. We work with clients across Delhi, Noida, Gurugram, Mumbai, Bengaluru and internationally.</p>,
        },
      ]}
    />
  ),
});
