import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const TITLE = "ADNA COSMETICS";
const isFirstVisit = !sessionStorage.getItem("adna_visited");
sessionStorage.setItem("adna_visited", "1");

export default function Preloader() {
  const [show, setShow] = useState(isFirstVisit);

  useEffect(() => {
    if (!show) return;
    document.documentElement.style.overflow = "hidden";

    const ANIM_DONE = 1200;                   // napis + črta se (hitro) izpišeta (~1,2 s)
    const PAUSE = 0;                           // brez premora – zavesa se dvigne takoj po izpisu napisa
    const MIN_HOLD = ANIM_DONE + PAUSE;       // zajamčen prikaz: napis se vedno izpiše
    const TARGET = MIN_HOLD + 300;            // ciljni čas od navigacije (~1,5 s, enako na vseh napravah)
    const FONT_WAIT_CAP = 600;               // največ toliko čakamo na pisavo

    let timer: ReturnType<typeof setTimeout>;
    let capTimer: ReturnType<typeof setTimeout>;
    let started = false;
    let cancelled = false;

    const startCountdown = () => {
      if (cancelled || started) return;
      started = true;
      clearTimeout(capTimer);
      // Čas razkritja vežemo na performance.now() (≈ začetek nalaganja strani),
      // da je skupni čas konsistenten ne glede na hitrost nalaganja bundla.
      const remaining = Math.max(MIN_HOLD, TARGET - performance.now());
      timer = setTimeout(() => {
        setShow(false);
        document.documentElement.style.overflow = "";
      }, remaining);
    };

    // Počakamo na pisavo (da se napis ne "prestavi"), a največ FONT_WAIT_CAP ms,
    // da omrežno nalaganje pisave nikoli ne podaljša zavese.
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(startCountdown);
    }
    capTimer = setTimeout(startCountdown, FONT_WAIT_CAP);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      clearTimeout(capTimer);
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            key="curtain-nude"
            className="fixed inset-0 z-[99] bg-brand-nude"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.12 }}
          />
          <motion.div
            key="curtain-dark"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="overflow-hidden px-4 whitespace-nowrap">
              {TITLE.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.08 + i * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block font-serif text-[22px] tracking-[0.18em] text-brand-light sm:text-3xl sm:tracking-[0.25em] md:text-5xl"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 h-px w-32 origin-left bg-brand-taupe sm:mt-6 sm:w-40 md:w-56"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-4 px-4 text-center text-[10px] tracking-[0.28em] uppercase text-brand-light/60 sm:mt-5 sm:text-[11px] sm:tracking-[0.35em]"
            >
              Kozmetični salon · Vrhnika
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
