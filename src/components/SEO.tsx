import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../data/site';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /** Dodaten JSON-LD (npr. FAQPage, Service) za to stran. */
  schema?: object | object[];
  /** Slika za deljenje (og:image); pot v public/ ali absolutni URL. Privzeto hero ozadje. */
  image?: string;
}

export function SEO({ title, description, path, noindex = false, schema, image = '/backgroundimage.webp' }: SEOProps) {
  const siteUrl = SITE_URL;
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="sl_SI" />
      <meta property="og:site_name" content="Adna Cosmetics" />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
