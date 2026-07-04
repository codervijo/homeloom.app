// JSON-LD node builders. All @id/url fields use the apex host. Pages pass the
// returned nodes to <Seo graph={[...]} /> which wraps them in a single
// schema.org @graph and prerenders them into the raw <head>.
import { SITE_URL, SITE_NAME, ORG_ID, absUrl } from "./site";

export type JsonLdNode = Record<string, unknown>;
export type Faq = { q: string; a: string };
export type Crumb = { name: string; path: string };

// Sitewide publisher/author reference. The full Organization node lives in
// index.html so it appears on every prerendered page; content nodes reference
// it by @id rather than repeating it.
export const orgRef = { "@id": ORG_ID };

export function articleNode(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}): JsonLdNode {
  const url = absUrl(opts.path);
  return {
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: orgRef,
    publisher: orgRef,
  };
}

export function faqNode(faqs: Faq[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbNode(crumbs: Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

// ItemList for index/collection pages (state list, guides list).
export function itemListNode(items: { name: string; path: string }[]): JsonLdNode {
  return {
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absUrl(it.path),
    })),
  };
}

// Homepage app node (moved out of index.html so it only appears on "/").
export function webApplicationNode(): JsonLdNode {
  return {
    "@type": "WebApplication",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    applicationCategory: "EducationApplication",
    operatingSystem: "Web",
    description:
      "Homeloom helps homeschool families file compliance, plan daily school, and generate transcripts — all in one calm system.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: orgRef,
  };
}
