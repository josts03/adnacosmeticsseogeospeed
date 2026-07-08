interface SEOProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /** Dodaten JSON-LD (npr. FAQPage, Service) za to stran. */
  schema?: object | object[];
}

/**
 * React 19 native document metadata: <title>, <meta> in <link> se samodejno
 * hoistajo v <head> (na klientu in pri SSR/prerenderingu jih skripta
 * scripts/prerender.mjs prestavi v <head> statičnega HTML-ja).
 */
export function SEO({ title, description, path, noindex = false, schema }: SEOProps) {
  const siteUrl = "https://www.adnacosmetics.si";
  const url = `${siteUrl}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="sl" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="sl_SI" />
      <meta property="og:site_name" content="Adna Cosmetics" />
      <meta property="og:image" content={`${siteUrl}/backgroundimage.webp`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/backgroundimage.webp`} />

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
