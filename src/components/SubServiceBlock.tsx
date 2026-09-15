import { Minus, Plus } from 'lucide-react';
import type { SubService } from '../data/services';
import { srcSetFor } from '../lib/images';

interface SubServiceBlockProps {
  sub: SubService;
  /** Slika na levi (lihi bloki), sicer na desni. */
  reverse?: boolean;
  /** Prvi blok: slika se naloži takoj (LCP). */
  priority?: boolean;
}

/**
 * Blok podstoritve: naslov, kratek opis, "Preberi več" (nativni <details>, vsebina je
 * v HTML-ju tudi zaprta) in slika ob strani. Bloke loči tanka črta (divide-y v staršu).
 */
export function SubServiceBlock({ sub, reverse = false, priority = false }: SubServiceBlockProps) {
  const hasMore = sub.details.length > 0 || (sub.extraImages?.length ?? 0) > 0;

  return (
    <article
      id={sub.id}
      className="py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28 md:scroll-mt-36"
    >
      <div className={reverse ? 'lg:order-2' : ''}>
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-5">{sub.title}</h2>
        <p className="text-brand-dark/70 leading-relaxed">{sub.summary}</p>

        {hasMore && (
          <details className="mt-5">
            <summary className="inline-flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-xs font-semibold uppercase tracking-[0.2em] text-brand-taupe hover:text-brand-dark transition-colors">
              <Plus className="when-closed w-4 h-4" aria-hidden="true" />
              <Minus className="when-open w-4 h-4" aria-hidden="true" />
              <span className="when-closed">Preberi več</span>
              <span className="when-open">Skrij</span>
            </summary>
            <div className="mt-5 space-y-4">
              {sub.details.map((paragraph, i) => (
                <p key={i} className="text-brand-dark/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {sub.extraImages && sub.extraImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {sub.extraImages.map((image, i) => (
                    <div key={i} className="aspect-[4/3] bg-brand-nude/30 overflow-hidden">
                      <img
                        src={image.src}
                        srcSet={srcSetFor(image.src, image.width)}
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover ${image.position ?? 'object-center'}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </details>
        )}
      </div>

      {sub.image && (
        <div className={reverse ? 'lg:order-1' : ''}>
          <div className="aspect-[4/3] bg-brand-nude/30 overflow-hidden group">
            <img
              src={sub.image.src}
              srcSet={srcSetFor(sub.image.src, sub.image.width)}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt={sub.image.alt}
              width={sub.image.width}
              height={sub.image.height}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'auto'}
              decoding="async"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${sub.image.position ?? 'object-center'}`}
            />
          </div>
        </div>
      )}
    </article>
  );
}
