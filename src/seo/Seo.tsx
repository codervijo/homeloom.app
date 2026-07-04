import { Head } from "vite-react-ssg";
import { absUrl } from "./site";
import type { JsonLdNode } from "./schema";

// Per-route head: unique title/description, self-referencing apex canonical,
// OG tags, and an optional JSON-LD @graph. Rendered via vite-react-ssg's Head
// so everything lands in the raw prerendered <head>. Static OG defaults
// (og:image, og:type, twitter:*) stay in index.html.
type Props = {
  title: string;
  description: string;
  path: string;
  graph?: JsonLdNode[];
};

export default function Seo({ title, description, path, graph }: Props) {
  const canonical = absUrl(path);
  return (
    <>
      {/* Head meta via helmet (title/description/canonical/OG). */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
      </Head>
      {/* JSON-LD is rendered directly (not via helmet, which drops <script>
          children). It is valid anywhere in the document and this guarantees it
          lands in the raw prerendered HTML. */}
      {graph && graph.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
          }}
        />
      )}
    </>
  );
}
