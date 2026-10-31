import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, siteConfig } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
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
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`mx-auto max-w-7xl rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-[#12151C]/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
            : 'bg-[#12151C]/60 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 font-display tracking-tight text-white hover:text-accent transition-colors"
          aria-label="Tejas Gupta - Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 border border-accent/40 font-mono text-xs font-bold text-accent group-hover:bg-accent group-hover:text-bg transition-all">
            TG
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base leading-none text-white">Tejas Gupta</span>
            <span className="font-mono text-[10px] text-text-dim leading-none mt-1">Full-Stack &amp; GenAI</span>
          </div>
        </a>

        {/* Center: Availability & Live Time (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 rounded-full bg-black/40 border border-white/5 px-4 py-1.5 font-mono text-[11px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-white/90">Available for work</span>
          <span className="text-white/20">&bull;</span>
          <span className="text-accent">{time || '10:55 PM'} IST</span>
        </div>

        {/* Desktop Nav Items & Resume Button */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-xs font-medium text-white/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-display text-xs font-bold text-bg hover:shadow-[0_0_20px_rgba(0,229,160,0.4)] transition-all"
          >
            <span>Resume</span>
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">&nearr;</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 h-9 w-9 rounded-full bg-white/5 border border-white/10 text-white"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-4 bg-white transition-transform"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-4 bg-white transition-opacity"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-4 bg-white transition-transform"
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 mx-auto max-w-7xl rounded-3xl bg-[#12151C]/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                <span className="inline-flex items-center gap-2 text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Available for work
                </span>
                <span className="text-white/60">{time} IST</span>
              </div>

              <ul className="flex flex-col gap-3 py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-display text-lg font-medium text-white/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-display text-sm font-bold text-bg shadow-lg hover:shadow-accent/30 transition-all mt-2"
              >
                <span>Download Resume (PDF)</span>
                <span>&nearr;</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
