import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { services } from '../data/services';
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/site';

interface LayoutProps {
  children: ReactNode;
}

const navLinkClass = (active: boolean) =>
  `text-sm uppercase tracking-widest transition-colors hover:text-brand-taupe ${
    active ? 'font-semibold text-brand-taupe border-b border-brand-taupe' : 'text-brand-dark/80'
  }`;

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    // ob navigaciji s sidrom (#storitev) scroll prevzame ciljna stran
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: 'Domov', path: '/' },
    { name: 'O meni', path: '/o-meni' },
    { name: 'Storitve', path: '/storitve' },
    { name: 'Cenik', path: '/cenik' },
  ];

  const isServicePage = services.some((s) => s.path === location.pathname);
  const isActive = (path: string) =>
    location.pathname === path || (path === '/storitve' && isServicePage);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-brand-dark text-brand-light py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Vrhnika</span>
          </div>
          {/* gap namesto space-x: -m-2 na povezavah v Tailwind v4 prepiše space-x razmik */}
          <div className="flex items-center gap-8">
            <a href="mailto:adnaacosmetics@gmail.com" className="flex items-center space-x-1 hover:text-brand-nude transition-colors p-2 -m-2" aria-label="Pošlji email na adnaacosmetics@gmail.com">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">adnaacosmetics@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/adnaa_cosmetics/" target="_blank" rel="noopener noreferrer" className="inline-flex hover:text-brand-nude transition-colors p-2 -m-2" aria-label="Instagram — Adna Cosmetics">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-sm py-1 md:py-0' : 'bg-brand-light py-3 md:py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-brand-dark hover:text-brand-taupe transition-colors">
            <Logo className="h-[76px] md:h-24 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) =>
              link.path === '/storitve' ? (
                // Storitve: povezava na hub + spustni meni s podstranmi (hover ali fokus s tipkovnico)
                <div key={link.name} className="relative group">
                  <Link to={link.path} className={`inline-flex items-center gap-1 ${navLinkClass(isActive(link.path))}`}>
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 invisible opacity-0 translate-y-1 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
                    <ul className="min-w-[250px] bg-brand-light border border-brand-nude shadow-xl py-2">
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={service.path}
                            className={`block px-5 py-2.5 text-sm uppercase tracking-widest transition-colors hover:bg-brand-nude/40 hover:text-brand-taupe ${
                              location.pathname === service.path ? 'font-semibold text-brand-taupe' : 'text-brand-dark/80'
                            }`}
                          >
                            {service.navLabel}
                          </Link>
                        </li>
                      ))}
                      <li className="border-t border-brand-nude mt-2 pt-2">
                        <Link to="/storitve" className="block px-5 py-2.5 text-sm uppercase tracking-widest text-brand-dark/60 transition-colors hover:bg-brand-nude/40 hover:text-brand-taupe">
                          Vse storitve
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link key={link.name} to={link.path} className={navLinkClass(isActive(link.path))}>
                  {link.name}
                </Link>
              ),
            )}
            <Link
              to="/kontakt"
              className="px-6 py-2 bg-brand-dark text-brand-light text-sm uppercase tracking-widest hover:bg-brand-taupe transition-colors"
            >
              Naroči se
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-dark p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zapri meni' : 'Odpri meni'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-light pt-32 px-6 flex flex-col md:hidden pb-10 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-center h-full">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col items-center">
                  <Link
                    to={link.path}
                    className={`text-2xl font-serif ${
                      isActive(link.path) ? 'text-brand-taupe italic' : 'text-brand-dark'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.path === '/storitve' && (
                    <div className="flex flex-col gap-2 mt-3">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          className={`text-sm uppercase tracking-widest ${
                            location.pathname === service.path ? 'text-brand-taupe font-semibold' : 'text-brand-dark/70'
                          }`}
                        >
                          {service.navLabel}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/kontakt"
                className={`text-2xl font-serif ${
                  location.pathname === '/kontakt' ? 'text-brand-taupe italic' : 'text-brand-dark'
                }`}
              >
                Naroči se
              </Link>
              <div className="mt-auto items-center flex flex-col gap-6 pt-10 border-t border-brand-nude">
                  <a href="mailto:adnaacosmetics@gmail.com" className="flex items-center gap-2">
                      <Mail className="w-5 h-5"/> adnaacosmetics@gmail.com
                  </a>
                  <a href="https://www.instagram.com/adnaa_cosmetics/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Instagram className="w-5 h-5" /> @adnaa_cosmetics
                  </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {/* initial={false}: prva stran se ne animira – prerenderan HTML tako nima opacity:0
            do hidracije (boljši LCP); animira se šele prehod med stranmi. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-light py-16">
        {/* Stolpci niso enako široki: kontakt dobi več prostora, da e-pošta ostane v eni
            vrstici tudi pri ~1024 px, "Sledi mi" pa potrebuje le širino ikone. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.45fr_1.1fr_0.55fr] gap-x-8 gap-y-12 text-center sm:text-left [&>div]:min-w-0">
          <div className="flex flex-col space-y-4 items-center sm:items-start">
            <Link to="/" className="text-brand-light hover:text-brand-nude transition-colors mb-2">
              <Logo src="/logo_white.webp" className="h-20 md:h-24 w-auto" loading="lazy" />
            </Link>
            <p className="text-brand-nude opacity-80 max-w-sm mx-auto sm:mx-0">
              Adna Cosmetics, kjer lepota sreča strokovnost in poudarja tvojo unikatnost.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-serif text-xl mb-2">Storitve</p>
            <ul className="text-sm space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="hover:text-brand-nude transition-colors">
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/cenik" className="hover:text-brand-nude transition-colors">
                  Cenik
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-4">
            <p className="font-serif text-xl mb-2">Kontakt</p>
            {/* text-sm in space-y-2 kot pri storitvah in delovnem času; e-pošta in
                Instagram sta whitespace-nowrap, da nikoli ne prelomita v dve vrstici. */}
            <div className="text-sm space-y-2">
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-4 h-4 text-brand-nude shrink-0" /> Vrhnika
              </p>
              <p className="flex justify-center sm:justify-start">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 hover:text-brand-nude transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-nude shrink-0" />
                  <span className="whitespace-nowrap">{EMAIL}</span>
                </a>
              </p>
              <p className="flex justify-center sm:justify-start">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-nude transition-colors"
                >
                  <Instagram className="w-4 h-4 text-brand-nude shrink-0" />
                  <span className="whitespace-nowrap">{INSTAGRAM_HANDLE}</span>
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-serif text-xl mb-2">Delovni čas</p>
            <div className="text-sm space-y-2">
              <p className="flex justify-center sm:justify-start gap-2">
                <span>Pon - Pet:</span> <span className="text-brand-nude">Po dogovoru</span>
              </p>
              <p className="flex justify-center sm:justify-start gap-2">
                <span>Sob, Ned, prazniki:</span> <span className="text-brand-nude">Zaprto</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-serif text-xl mb-2">Sledi mi</p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="https://www.instagram.com/adnaa_cosmetics/" target="_blank" rel="noopener noreferrer" className="p-3 border border-brand-nude/30 rounded-full hover:bg-brand-nude/10 hover:border-brand-nude transition-all" aria-label="Instagram — Adna Cosmetics">
                <Instagram className="w-5 h-5 text-brand-nude" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-brand-nude/20 text-center text-sm text-brand-nude/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Adna Cosmetics. Vse pravice pridržane.</span>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <Link to="/pogoji-poslovanja" className="hover:text-brand-nude transition-colors py-2">Pogoji poslovanja</Link>
            <Link to="/politika-zasebnosti" className="hover:text-brand-nude transition-colors py-2">Politika zasebnosti</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
