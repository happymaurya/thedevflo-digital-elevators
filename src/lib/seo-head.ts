const SITE = "https://thedevflo.com";

export function servicePageHead(opts: {
  path: string;
  title: string;
  description: string;
  keywords: string;
  serviceName: string;
  serviceType: string;
}) {
  return () => ({
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "keywords", content: opts.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}${opts.path}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}${opts.path}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: opts.serviceName,
              serviceType: opts.serviceType,
              provider: { "@type": "Organization", name: "TheDevFlo", url: `${SITE}/` },
              areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "City", name: "Delhi" },
                { "@type": "City", name: "Noida" },
                { "@type": "City", name: "Gurugram" },
                { "@type": "City", name: "Mumbai" },
                { "@type": "City", name: "Bengaluru" },
                "Worldwide",
              ],
              url: `${SITE}${opts.path}`,
              description: opts.description,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
                { "@type": "ListItem", position: 3, name: opts.serviceName, item: `${SITE}${opts.path}` },
              ],
            },
          ],
        }),
      },
    ],
  });
}

export function articleHead(opts: {
  path: string;
  title: string;
  description: string;
  keywords: string;
  datePublished: string;
}) {
  return () => ({
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "keywords", content: opts.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE}${opts.path}` },
      { property: "article:published_time", content: opts.datePublished },
      { property: "article:author", content: "TheDevFlo" },
    ],
    links: [{ rel: "canonical", href: `${SITE}${opts.path}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: opts.title,
          description: opts.description,
          datePublished: opts.datePublished,
          author: { "@type": "Organization", name: "TheDevFlo", url: `${SITE}/` },
          publisher: { "@type": "Organization", name: "TheDevFlo", url: `${SITE}/`, logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` } },
          mainEntityOfPage: `${SITE}${opts.path}`,
        }),
      },
    ],
  });
}
