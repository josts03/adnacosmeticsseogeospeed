import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Ob navigaciji z #sidrom (tudi z druge strani) se pomakne na element z istim id-jem. */
export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return;
    // počakaj, da se page transition animacija umiri, nato se pomakni na element
    const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    return () => clearTimeout(t);
  }, [location.hash]);
}
