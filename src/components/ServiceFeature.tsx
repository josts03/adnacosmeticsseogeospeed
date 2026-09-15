import type { ReactNode } from 'react';
import type { Service } from '../data/services';
import { srcSetFor } from '../lib/images';

interface ServiceFeatureProps {
  service: Service;
  /** Naslov sekcije (H2). */
  heading: string;
  /** Zaporedna številka – lihe vrstice imajo sliko na desni. */
  index: number;
  /** Dodatna vsebina pod opisom (npr. gumb na podstran). */
  children?: ReactNode;
}

/** Izmenična vrstica slika/tekst – stil sekcij s strani Storitve. */
export function ServiceFeature({ service, heading, index, children }: ServiceFeatureProps) {
  const { image } = service.hero;

  return (
    <div
      id={service.id}
      className={`flex flex-col-reverse lg:flex-row gap-12 items-center scroll-mt-28 md:scroll-mt-36 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="w-full lg:w-1/2 aspect-[4/3] bg-brand-nude/30 relative group overflow-hidden">
        <img
          src={image.src}
          srcSet={srcSetFor(image.src, image.width)}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${image.position || 'object-center'}`}
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-serif mb-4 text-brand-dark">{heading}</h2>
        <div className="w-12 h-0.5 bg-brand-taupe mb-6"></div>
        {service.overview.map((paragraph, i) => (
          <p key={i} className="text-brand-dark/70 text-lg leading-relaxed mb-8">
            {paragraph}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
}
