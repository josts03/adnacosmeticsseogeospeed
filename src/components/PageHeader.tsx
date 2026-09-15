interface PageHeaderProps {
  title: string;
  subtitle: string;
  /**
   * Na podstraneh storitev je glavni naslov <h1> (ključna beseda), podnaslov pa <p>.
   * Na ostalih straneh ostaja obstoječi vzorec: velik naslov je <p>, <h1> je opisni podnaslov.
   */
  titleIsH1?: boolean;
  width?: 'max-w-7xl' | 'max-w-4xl';
  /** Podnaslov omeji na max-w-2xl (privzeto), kot na večini strani. */
  constrainSubtitle?: boolean;
}

export function PageHeader({
  title,
  subtitle,
  titleIsH1 = false,
  width = 'max-w-7xl',
  constrainSubtitle = true,
}: PageHeaderProps) {
  const titleClass = 'text-5xl md:text-6xl font-serif text-brand-dark mb-6';
  const subtitleClass = `font-sans font-normal ${constrainSubtitle ? 'max-w-2xl mx-auto ' : ''}text-brand-dark/70 text-lg`;

  return (
    <div className="pt-24 pb-16 bg-brand-light">
      <div className={`${width} mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
        {titleIsH1 ? (
          <>
            <h1 className={titleClass}>{title}</h1>
            <p className={subtitleClass}>{subtitle}</p>
          </>
        ) : (
          <>
            <p className={titleClass}>{title}</p>
            <h1 className={subtitleClass}>{subtitle}</h1>
          </>
        )}
      </div>
    </div>
  );
}
