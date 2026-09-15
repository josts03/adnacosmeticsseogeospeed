import type { ImageAsset } from '../data/services';
import { srcSetFor } from '../lib/images';

interface GalleryProps {
  images: ImageAsset[];
  sizes?: string;
}

/**
 * Mreža slik s fiksnim razmerjem (brez premikov postavitve), lazy nalaganjem
 * in srcSet variantami (-800 / -1200 / polna).
 */
export function Gallery({ images, sizes = '(min-width: 1024px) 33vw, 50vw' }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, i) => (
        <figure key={i} className="m-0 aspect-[4/5] bg-brand-nude/30 overflow-hidden group">
          <img
            src={image.src}
            srcSet={srcSetFor(image.src, image.width)}
            sizes={sizes}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${image.position ?? 'object-center'}`}
          />
        </figure>
      ))}
    </div>
  );
}
