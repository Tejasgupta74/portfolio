import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { hero } from '../data/content';

/* ---------- Flip Calendar (Exact desk-calendar flip from therishithakor.com) ---------- */
function FlipCalendar() {
  const roles = [
    { title: 'Full-Stack Developer', no: '01' },
    { title: 'GenAI Engineer', no: '02' },
    { title: 'Backend Architect', no: '03' },
    { title: 'Cloud & DevOps', no: '04' },
    { title: 'Enterprise Builder', no: '05' },
  ];

  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFlipping(false);
      }, 600);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const currentRole = roles[index];
  const nextRole = roles[(index + 1) % roles.length];

  return (
    <span className="inline-block relative align-baseline mx-1.5 select-none perspective-[800px]">
      <span className="relative inline-flex items-center px-4 py-1.5 rounded-xl bg-gradient-to-b from-[#222733] to-[#12151D] border border-white/15 shadow-[0_8px_20px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Desk calendar binder rings */}
        <span className="absolute -top-1 left-4 flex gap-1">
          <span className="w-1.5 h-3 rounded-full bg-white/40 shadow-inner" />
          <span className="w-1.5 h-3 rounded-full bg-white/40 shadow-inner" />
        </span>
        <span className="absolute -top-1 right-4 flex gap-1">
          <span className="w-1.5 h-3 rounded-full bg-white/40 shadow-inner" />
          <span className="w-1.5 h-3 rounded-full bg-white/40 shadow-inner" />
        </span>

        {/* Calendar role text */}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentRole.title}
            initial={{ opacity: 0, y: 15, rotateX: -60 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -15, rotateX: 60 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-accent text-2xl sm:text-4xl lg:text-5xl tracking-tight"
          >
            {currentRole.title}
          </motion.span>
        </AnimatePresence>

        {/* Small role counter in corner */}
        <span className="ml-3 font-mono text-[10px] text-white/40 tabular-nums">
          {currentRole.no}/05
        </span>
      </span>
    </span>
  );
}

/* ---------- 3D Holographic Ability Card (With Tilt & 3D Flip) ---------- */
function AbilityCard() {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 180, damping: 20 });
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-[390px] sm:max-w-[430px] mx-auto perspective-[1200px]">
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-accent/25 via-emerald-500/10 to-transparent blur-3xl opacity-75 pointer-events-none" />

      {/* Card Micro-instruction pill */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="font-mono text-[11px] text-white/50 tracking-wider">
          Tilt or drag &bull; <button onClick={toggleFlip} className="text-accent underline underline-offset-2 hover:text-white transition-colors cursor-pointer">tap to flip</button>
        </span>
      </div>

      {/* 3D Tilting Frame */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={toggleFlip}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative cursor-pointer transition-shadow duration-300 rounded-[30px]"
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full rounded-[30px] border border-white/15 bg-[#12151C]/95 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] overflow-hidden"
        >
          {/* ================= CARD FRONT ================= */}
          <div
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            className="p-6 sm:p-7"
          >
            {/* Holographic Glare */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(0,229,160,0.7) 0%, transparent 65%)`,
              }}
            />

            {/* Card Header: Ability Card identifier & verified chip */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                  My Ability Card
                </span>
              </div>
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-0.5 font-mono text-[10px] text-accent font-semibold tracking-wider">
                {hero.abilityCard.id}
              </span>
            </div>

            {/* Photo Asset with Center 30% Object Position, Border & Mask Gradient */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl border border-accent overflow-hidden mb-5 bg-[#0F1115]">
              <img
                src={hero.photo.src}
                alt={hero.photo.alt}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: 'center 30%' }}
              />

              {/* Bottom gradient fade (mask-image) into card background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                  background: 'linear-gradient(to top, #12151C 0%, transparent 55%)',
                }}
              />

              {/* Floating badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/50 bg-[#12151C]/95 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] text-accent font-medium shadow-xl">
                {hero.photo.badge}
              </div>
            </div>

            {/* Developer Metadata */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  {hero.name}
                </h3>
                <span className="rounded-full bg-accent/15 border border-accent/40 px-2.5 py-0.5 font-mono text-xs text-accent font-bold">
                  CGPA 8.39
                </span>
              </div>
              <p className="font-body text-xs text-white/70 mt-1">B.E. Computer Science and Engineering</p>
              <p className="font-mono text-[11px] text-accent/80 mt-0.5">Chitkara University, Punjab (2023 &ndash; 2027)</p>
            </div>

            {/* Bento Stats Grid */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
              {hero.abilityCard.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/5 bg-black/40 p-2.5">
                  <span className="block font-mono text-[10px] text-white/50 uppercase tracking-wider">{stat.label}</span>
                  <span className="block font-display text-sm font-bold text-accent mt-0.5">{stat.value}</span>
                  <span className="block font-mono text-[9px] text-white/40">{stat.detail}</span>
                </div>
              ))}
            </div>

            {/* Flip prompt */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-white/40 font-mono text-[10px]">
              <span>Flip for skill matrix</span>
              <span className="text-accent font-bold">&rarr;</span>
            </div>
          </div>

          {/* ================= CARD BACK (Ability Matrix) ================= */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-b from-[#141822] via-[#10131A] to-[#0A0B0E]"
          >
            {/* Holographic Header */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                    Ability Matrix
                  </span>
                </div>
                <span className="font-mono text-[10px] text-accent">TG-2027-CSE</span>
              </div>

              {/* Core Skill Bars */}
              <div className="space-y-3.5 mb-5">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/80">Full-Stack Web (React, Node, Mongo)</span>
                    <span className="text-accent font-bold">95%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/80">Backend &amp; RBAC Architecture</span>
                    <span className="text-accent font-bold">92%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/80">GenAI &amp; LLM (Gemini, Grok)</span>
                    <span className="text-accent font-bold">88%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-white/80">Cloud &amp; DevOps (Docker, AWS)</span>
                    <span className="text-accent font-bold">85%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>

              {/* Verified Credentials */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 mb-4">
                <span className="block font-mono text-[10px] uppercase text-accent font-semibold mb-2">
                  Verified Certifications &amp; DSA
                </span>
                <ul className="space-y-1 font-mono text-[11px] text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">&bull;</span>
                    ServiceNow Certified System Administrator (CSA)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">&bull;</span>
                    ServiceNow Certified Application Developer (CAD)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">&bull;</span>
                    LeetCode: 102+ Algorithmic Problems Solved
                  </li>
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1">
                {['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Python', 'Docker', 'AWS', 'Tailwind', 'JWT'].map((t) => (
                  <span key={t} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Back bottom footer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-white/40 font-mono text-[10px]">
              <span>Tap to return to photo</span>
              <span className="text-accent font-bold">&larr;</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto flex max-w-7xl flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 w-full relative z-10">
        {/* Left Column - Intro, Headline, Bio & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center md:text-left max-w-2xl"
        >
          {/* Availability Status Indicator (Rishi Thakor signature format) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>Available for work &mdash; Remote-first, worldwide</span>
          </motion.div>

          {/* Main Headline with Desk Flip Calendar */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
          >
            Hi, I&apos;m Tejas.<br />
            <span className="text-white/90 text-2xl sm:text-4xl lg:text-5xl font-bold block mt-3 leading-snug">
              I am a <FlipCalendar />
            </span>
          </motion.h1>

          {/* Bio statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 font-light"
          >
            Final-year Computer Science undergraduate at Chitkara University, Punjab (CGPA 8.39). Building enterprise web systems with granular RBAC, atomic race-free transactions, and production GenAI pipelines. Seeking software engineering and full-stack internships.
          </motion.p>

          {/* Action CTAs (Rishi Thakor style pill buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-bold text-[#0A0B0E] shadow-[0_0_30px_rgba(0,229,160,0.35)] hover:shadow-[0_0_45px_rgba(0,229,160,0.55)] transition-all duration-300"
            >
              <span>Start a project</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-display text-sm font-semibold text-white hover:border-accent hover:text-accent transition-all duration-300"
            >
              <span>See my work</span>
            </a>

            <a
              href="#skills"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white/50 hover:text-accent transition-colors px-3 py-2"
            >
              <span>Explore skill doors &darr;</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - The Interactive Ability Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 w-full md:w-auto"
        >
          <AbilityCard />
        </motion.div>
      </div>

      {/* Scroll to explore indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[11px] tracking-wider text-white/50">
          Scroll to explore &darr;
        </span>
      </motion.div>
    </section>
  );
}
