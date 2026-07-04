import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { servicePageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/seo")({
  head: servicePageHead({
    path: "/services/seo",
    title: "SEO Agency in India — Technical SEO, Content & Growth | TheDevFlo",
    description: "SEO agency in India offering technical SEO, on-page optimisation, content strategy and high-converting landing pages. Delhi NCR based, ranking startups and SaaS across India and globally.",
    keywords: "SEO agency India, technical SEO Delhi, on page SEO services, content strategy India, high converting landing page design services, SaaS SEO agency",
    serviceName: "SEO & Growth",
    serviceType: "Search Engine Optimisation",
  }),
  component: () => (
    <ContentPage
      eyebrow="SEO & Growth"
      title={<>SEO that moves <span className="text-primary">signups, not just rankings.</span></>}
      intro="Technical SEO, structured data, content strategy and landing-page CRO — built by engineers who understand crawlers and by writers who understand your buyers."
      bullets={[
        "Technical SEO audits",
        "Schema.org structured data",
        "Core Web Vitals optimisation",
        "Keyword research & clustering",
        "Programmatic & long-tail pages",
        "Landing page CRO",
      ]}
      sections={[
        {
          heading: "Technical SEO",
          body: <p>Crawlability, indexability, canonical hygiene, sitemap and robots correctness, JSON-LD (Organization, LocalBusiness, FAQ, Breadcrumb, Article), hreflang, and Core Web Vitals in the green — every audit ships with a prioritised fix list.</p>,
        },
        {
          heading: "Content that ranks and converts",
          body: <p>We build keyword clusters around your product, write buyer-intent long-tail pages, and structure content so it's answerable — earning both traditional rankings and AI-search citations (Perplexity, ChatGPT, Google AI Overviews).</p>,
        },
        {
          heading: "Local + national SEO for India",
          body: <p>Google Business Profile setup for Delhi NCR (and any other city), local schema, India-specific directories, and long-tail city + service pages — the fastest path to page one for a new agency or SaaS.</p>,
        },
      ]}
    />
  ),
});
