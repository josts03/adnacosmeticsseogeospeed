/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CookieBanner } from './components/CookieBanner';
import Preloader from './components/Preloader';

const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Pricelist = lazy(() => import('./pages/Pricelist').then(m => ({ default: m.Pricelist })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfBusiness = lazy(() => import('./pages/TermsOfBusiness').then(m => ({ default: m.TermsOfBusiness })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));
const ServicePage = lazy(() => import('./pages/ServicePage').then(m => ({ default: m.ServicePage })));

/**
 * AppShell brez routerja — na klientu ga ovije BrowserRouter (main.tsx),
 * pri prerenderingu pa StaticRouter (entry-server.tsx).
 */
export default function App() {
  return (
    <>
      <Preloader />
      <Layout>
        <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-meni" element={<About />} />
            <Route path="/storitve" element={<Services />} />
            <Route path="/cenik" element={<Pricelist />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/manikura-vrhnika" element={<ServicePage serviceId="manikura" />} />
            <Route path="/pedikura-vrhnika" element={<ServicePage serviceId="pedikura" />} />
            <Route path="/lash-lift-laminacija-obrvi-vrhnika" element={<ServicePage serviceId="lash-lift" />} />
            <Route path="/depilacija-vrhnika" element={<ServicePage serviceId="depilacija" />} />
            <Route path="/masaza-vrhnika" element={<ServicePage serviceId="masaza" />} />
            <Route path="/politika-zasebnosti" element={<PrivacyPolicy />} />
            <Route path="/pogoji-poslovanja" element={<TermsOfBusiness />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <CookieBanner />
    </>
  );
}
