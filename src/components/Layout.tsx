import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface LayoutProps {
  children: ReactNode;
}

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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-brand-dark text-brand-light py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Vrhnika</span>
          </div>
          <div className="flex items-center space-x-4">
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-brand-taupe ${
                  location.pathname === link.path ? 'font-semibold text-brand-taupe border-b border-brand-taupe' : 'text-brand-dark/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
            className="fixed inset-0 z-40 bg-brand-light pt-32 px-6 flex flex-col md:hidden pb-10"
          >
            <div className="flex flex-col space-y-6 text-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-serif ${
                    location.pathname === link.path ? 'text-brand-taupe italic' : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
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
        <AnimatePresence mode="wait">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-center sm:text-left [&>div]:min-w-0">
          <div className="flex flex-col space-y-4 items-center sm:items-start">
            <Link to="/" className="text-brand-light hover:text-brand-nude transition-colors mb-2">
              <Logo src="/logo_white.webp" className="h-20 md:h-24 w-auto" loading="lazy" />
            </Link>
            <p className="text-brand-nude opacity-80 max-w-sm mx-auto sm:mx-0">
              Adna Cosmetics, kjer lepota sreča strokovnost in poudarja tvojo unikatnost.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <p className="font-serif text-xl mb-2">Kontakt</p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-4 h-4 text-brand-nude" /> Vrhnika
            </p>
            <a href="mailto:adnaacosmetics@gmail.com" className="flex items-center justify-center sm:justify-start gap-2 hover:text-brand-light transition-colors min-w-0">
              <Mail className="w-4 h-4 text-brand-nude shrink-0" /> <span className="break-all">adnaacosmetics@gmail.com</span>
            </a>
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
