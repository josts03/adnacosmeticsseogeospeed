import { createElement, lazy } from 'react';
import type { ComponentType, LazyExoticComponent } from 'react';
import { Home } from './pages/Home';
import { services } from './data/services';

const ServicePage = lazy(() => import('./pages/ServicePage').then((m) => ({ default: m.ServicePage })));

export type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface SitemapMeta {
  /** ISO datum zadnje vsebinske spremembe strani – ročno posodobi, ko se vsebina spremeni. */
  lastmod: string;
  changefreq: ChangeFreq;
  priority: number;
}

export interface AppRoute {
  path: string;
  Component: ComponentType | LazyExoticComponent<ComponentType>;
  /** Če manjka, stran ni v sitemap.xml (npr. noindex strani). */
  sitemap?: SitemapMeta;
}

/**
 * Ena resnica za rute.
 * - App.tsx iz tega seznama zgradi <Routes>,
 * - scripts/prerender.mjs iz njega prerenderira vsako stran v dist/<pot>/index.html
 *   in zgenerira sitemap.xml.
 * Nova stran = nov vnos tukaj (ruta, prerender in sitemap so s tem pokriti).
 */
export const routes: AppRoute[] = [
  {
    path: '/',
    Component: Home,
    sitemap: { lastmod: '2026-09-16', changefreq: 'weekly', priority: 1.0 },
  },
  {
    path: '/o-meni',
    Component: lazy(() => import('./pages/About').then((m) => ({ default: m.About }))),
    sitemap: { lastmod: '2026-09-15', changefreq: 'monthly', priority: 0.8 },
  },
  {
    path: '/storitve',
    Component: lazy(() => import('./pages/Services').then((m) => ({ default: m.Services }))),
    sitemap: { lastmod: '2026-09-16', changefreq: 'weekly', priority: 0.9 },
  },
  // Podstrani storitev – ena ruta na vnos v src/data/services (isti template);
  // lastmod je `modified` iz podatkov storitve (isti datum gre v WebPage schemo).
  ...services.map<AppRoute>((service) => ({
    path: service.path,
    Component: () => createElement(ServicePage, { service }),
    sitemap: { lastmod: service.modified, changefreq: 'monthly', priority: 0.9 },
  })),
  {
    path: '/cenik',
    Component: lazy(() => import('./pages/Pricelist').then((m) => ({ default: m.Pricelist }))),
    sitemap: { lastmod: '2026-09-15', changefreq: 'weekly', priority: 0.8 },
  },
  {
    path: '/kontakt',
    Component: lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact }))),
    sitemap: { lastmod: '2026-09-15', changefreq: 'monthly', priority: 0.7 },
  },
  {
    path: '/pogoji-poslovanja',
    Component: lazy(() => import('./pages/TermsOfBusiness').then((m) => ({ default: m.TermsOfBusiness }))),
    sitemap: { lastmod: '2026-09-14', changefreq: 'yearly', priority: 0.4 },
  },
  {
    path: '/politika-zasebnosti',
    Component: lazy(() => import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy }))),
    sitemap: { lastmod: '2026-09-14', changefreq: 'yearly', priority: 0.3 },
  },
];

/** Stran 404 – ruta "*" v App.tsx; prerender jo zapiše v dist/404.html. */
export const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));
