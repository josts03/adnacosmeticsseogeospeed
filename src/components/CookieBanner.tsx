import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      // Show banner after a slight delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-dark text-brand-light z-50 p-4 shadow-xl border-t border-brand-nude/20 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center sm:text-left opacity-90">
          Ta stran ne uporablja analitičnih ali oglaševalskih piškotkov – za delovanje uporabljam le nujno potrebno lokalno shrambo (local/session storage). Podatke, ki jih vnesete v obrazec, uporabim izključno za potrditev termina.
          <Link to="/politika-zasebnosti" className="underline hover:text-brand-nude ml-1 transition-colors">
            Politika zasebnosti
          </Link>
          <span className="mx-1">·</span>
          <Link to="/pogoji-poslovanja" className="underline hover:text-brand-nude transition-colors">
            Pogoji poslovanja
          </Link>
        </div>
        <button
          onClick={handleAccept}
          className="shrink-0 px-6 py-2 bg-brand-nude text-brand-dark uppercase tracking-wide text-xs hover:bg-brand-light transition-colors"
        >
          Razumem
        </button>
      </div>
    </div>
  );
}
