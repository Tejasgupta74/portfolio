import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, siteConfig } from '../data/content';

export default function Footer() {
  const [time, setTime] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date())
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollProgress((currentScroll / totalScroll) * 100);
        setShowFloatingTop(currentScroll > 400);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="border-t border-white/10 bg-[#0B0D12] py-20 px-6 relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Top Footer Statement (Rishi Thakor signature format) */}
          <div className="pb-14 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-2 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Available for new work</span>
              </div>
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Got a project? <br />
                <span className="text-accent">Let&apos;s build it together.</span>
              </h3>
              <p className="font-mono text-xs text-white/50 mt-3 max-w-xl font-light">
                Based in Punjab, India &bull; Open for remote-first full-stack and GenAI engineering internships worldwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-3.5 font-display font-bold text-[#0A0B0E] text-sm shadow-[0_0_30px_rgba(0,229,160,0.35)] hover:shadow-[0_0_45px_rgba(0,229,160,0.55)] transition-all"
              >
                <span>Start a project</span>
                <span>&rarr;</span>
              </a>

              <a
                href="#hero"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-display font-semibold text-white text-sm hover:border-accent hover:text-accent transition-all"
              >
                <span>Back to hero</span>
              </a>
            </div>
          </div>

          {/* Middle Footer Navigation & Status */}
          <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Nav links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center md:justify-start gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-mono text-xs uppercase tracking-wider text-white/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Status & Live Time */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 font-mono text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-white/80">{siteConfig.status}</span>
              </div>

              <div className="font-mono text-xs text-white/60 rounded-full border border-white/10 bg-black/40 px-4 py-1.5">
                Local Time: <span className="text-accent font-semibold">{time} IST</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-white/40 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Tejas Gupta. Designed and built with the exact control-room aesthetic.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-mono text-xs text-white/50 hover:text-accent transition-colors py-1 px-2 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <span className="text-accent font-bold">&uarr;</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Back-To-Top Circular Progress Button (Exact therishithakor.com signature feature) */}
      <AnimatePresence>
        {showFloatingTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#12151C]/90 border border-white/15 text-white shadow-2xl backdrop-blur-md hover:border-accent hover:text-accent transition-colors group cursor-pointer"
          >
            {/* Circular Progress Ring */}
            <svg className="absolute inset-0 h-full w-full -rotate-90 p-1" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-accent transition-all duration-150"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeWidth="2.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>

            <span className="text-xs group-hover:-translate-y-0.5 transition-transform font-bold font-mono">
              &uarr;
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
