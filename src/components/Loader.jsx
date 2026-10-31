import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [exiting, setExiting] = useState(false);

  const pills = [
    { text: 'Tejas Gupta', c: '#1F1C1C', t: '#E8E4E0', dir: 1 },
    { text: 'Full-Stack Web', c: '#22304a', t: '#E8E4E0', dir: -1 },
    { text: 'AI Integrations', c: '#134e4a', t: '#E8E4E0', dir: 1 },
    { text: 'Backend & Security', c: '#312e81', t: '#F3EEEC', dir: -1 },
    { text: 'Cloud & DevOps', c: '#334155', t: '#F3EEEC', dir: 1 },
    { text: 'Enterprise Platforms', c: '#00E5A0', t: '#0A0B0E', dir: -1 },
  ];

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1800;

    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setReady(true);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onComplete, 900);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden font-display select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Radial Ambient Backdrop */}
          <div
            className="absolute inset-0 bg-[#0D0C0C]"
            style={{
              backgroundImage: `
                radial-gradient(38% 55% at 0% 72%, rgba(0, 229, 160, 0.15), transparent 70%),
                radial-gradient(40% 58% at 100% 70%, rgba(34, 48, 74, 0.4), transparent 72%),
                radial-gradient(70% 60% at 50% 0%, rgba(49, 46, 129, 0.35), transparent 70%)
              `,
            }}
          />

          {/* Top HUD */}
          <div className="absolute top-0 inset-x-0 p-6 sm:p-10 flex justify-between items-center text-xs font-mono text-white/70 z-10">
            <div>
              <b className="text-white font-semibold tracking-wide">Tejas Gupta</b> &middot; Portfolio
            </div>
            <div className="hidden sm:block text-white/50 tracking-wider">
              Full-Stack &middot; GenAI &middot; Cloud &amp; DevOps
            </div>
          </div>

          {/* Central Stacking 3D Pills (therishithakor.com signature loader stack) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(82vw,28rem)]">
            <div className="relative h-[220px] sm:h-[260px]">
              {pills.map((pill, i) => {
                const step = 42;
                const isPillOn = progress >= ((i + 1) / pills.length) * 85;

                return (
                  <motion.div
                    key={pill.text}
                    className="absolute inset-x-0 h-14 sm:h-16 rounded-full flex items-center px-8 text-sm sm:text-base font-semibold tracking-wide shadow-2xl transition-all duration-700"
                    style={{
                      top: `${i * step}px`,
                      zIndex: i,
                      backgroundColor: pill.c,
                      color: pill.t,
                      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.18)',
                    }}
                    initial={{ opacity: 0, y: -25, scale: 0.94 }}
                    animate={
                      isPillOn
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: -25, scale: 0.94 }
                    }
                    exit={{
                      x: pill.dir * 1200,
                      rotate: pill.dir * 6,
                      opacity: 0,
                      transition: { duration: 0.7, delay: i * 0.04, ease: [0.7, 0, 0.25, 1] },
                    }}
                  >
                    <span>{pill.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom HUD with Tabular Numerals & Enter Action */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex justify-between items-end gap-6 z-10">
            <div>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50 mb-2">
                Opening up the work
              </p>
              <div className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white tabular-nums leading-none">
                {String(progress).padStart(3, '0')}
              </div>
            </div>

            {/* Progress line & Enter Button */}
            <div className="flex flex-col items-end gap-3">
              <div className="w-28 sm:w-44 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {ready && (
                <motion.button
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnter}
                  className="flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-display text-xs sm:text-sm font-bold text-[#0A0B0E] shadow-[0_0_25px_rgba(0,229,160,0.45)] cursor-pointer"
                >
                  <span>Click to enter</span>
                  <span className="font-mono">&rarr;</span>
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
