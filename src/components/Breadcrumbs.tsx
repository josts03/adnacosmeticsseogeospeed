import { Link } from 'react-router-dom';

export interface Crumb {
  name: string;
  /** Brez href = trenutna stran. */
  href?: string;
}

/** Vidne drobtinice (Domov › Storitve › Manikura); BreadcrumbList schemo doda stran. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Drobtinice" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.2em] text-brand-dark/60">
        {items.map((crumb, i) => (
          <li key={i} className="flex items-center gap-x-2">
            {i > 0 && <span aria-hidden="true">›</span>}
            {crumb.href ? (
              <Link to={crumb.href} className="hover:text-brand-taupe transition-colors">
                {crumb.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-brand-dark font-semibold">
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
