import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { doors } from '../data/content';

function SkillDoor({ door, index, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex-shrink-0 w-[320px] sm:w-[380px] select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 3D Doorway Frame */}
      <div className="relative rounded-[28px] border border-white/15 bg-[#12151C]/90 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-accent/50 hover:shadow-[0_25px_60px_rgba(0,229,160,0.15)] flex flex-col justify-between h-[520px]">
        
        {/* Top: Door Number & Category Badge */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 border border-accent/40 font-mono text-xs font-bold text-accent">
                {door.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 font-semibold">
                Door {door.number}
              </span>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 font-mono text-[10px] text-accent font-medium">
              {door.badge}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
            {door.title}
          </h3>
          <p className="text-xs text-white/70 leading-relaxed mb-5 font-light line-clamp-2">
            {door.summary}
          </p>
        </div>

        {/* The Architectural 3D Door Portal */}
        <div className="relative w-full h-52 rounded-2xl bg-[#08090D] border border-white/10 overflow-hidden perspective-[1000px] flex items-center justify-center my-auto cursor-pointer"
             onClick={() => onOpen(door)}>
          
          {/* Inner Room Glow (Warm Light that spills out when door cracks open) */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: hovered ? 1 : 0.25,
              background: `radial-gradient(ellipse at 30% 50%, ${door.color}60 0%, #1a1410 70%, #050505 100%)`,
            }}
          />

          {/* Light Spill Beams */}
          <div
            className="absolute inset-y-0 left-0 w-32 pointer-events-none transition-all duration-500 origin-left"
            style={{
              opacity: hovered ? 0.75 : 0,
              background: `linear-gradient(90deg, ${door.color}40 0%, transparent 100%)`,
              transform: hovered ? 'scaleX(1.4)' : 'scaleX(0.2)',
            }}
          />

          {/* The Door Leaf on Left 3D Hinge */}
          <motion.div
            className="absolute inset-2 origin-left rounded-xl border border-white/20 flex flex-col justify-between p-4 shadow-2xl transition-all duration-500"
            style={{
              backgroundColor: door.color,
              transformStyle: 'preserve-3d',
              rotateY: hovered ? -36 : 0,
            }}
          >
            {/* Door Top Panel Inset */}
            <div className="w-full h-14 rounded-lg border border-white/20 bg-black/20 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-white/90 tracking-widest uppercase">
                {door.number} // {door.badge}
              </span>
            </div>

            {/* Door Center Handle */}
            <div className="flex items-center justify-end pr-2">
              <div className="w-3 h-8 rounded-full bg-gradient-to-r from-amber-200 to-amber-500 shadow-lg border border-white/40" />
            </div>

            {/* Door Bottom Panel Inset */}
            <div className="w-full h-14 rounded-lg border border-white/20 bg-black/20 flex items-center justify-center">
              <span className="font-mono text-[10px] text-white/60">
                Click to step inside &rarr;
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Behind the door preview & action */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1 max-w-[210px]">
            {door.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white/70"
              >
                {skill}
              </span>
            ))}
            {door.skills.length > 3 && (
              <span className="rounded-md border border-white/10 bg-black/40 px-1.5 py-0.5 font-mono text-[10px] text-accent">
                +{door.skills.length - 3}
              </span>
            )}
          </div>

          <button
            onClick={() => onOpen(door)}
            className="rounded-full bg-accent/15 border border-accent/40 px-3 py-1 font-mono text-[11px] font-bold text-accent hover:bg-accent hover:text-[#0A0B0E] transition-all cursor-pointer"
          >
            Behind the door &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ConsoleWall() {
  const scrollRef = useRef(null);
  const [activeDoor, setActiveDoor] = useState(null);
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 overflow-hidden bg-black/30">
      {/* Background plaster texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header: Exact Rishi Thakor signature phrasing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Skill Doors // Disciplines</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              My work, one door per skill.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl font-light">
              Magic happens behind the doors. Swipe along the wall.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="font-mono text-xs text-white/40 hidden sm:inline-block">Swipe along the wall</span>
            <button
              onClick={() => scroll('left')}
              className="flex h-11 w-11 items-center justify-center rounded-full
                         bg-[#12151C] border border-white/10 text-white hover:border-accent hover:text-accent
                         transition-all duration-200 shadow-xl active:scale-95 cursor-pointer"
              aria-label="Scroll doors left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-11 w-11 items-center justify-center rounded-full
                         bg-[#12151C] border border-white/10 text-white hover:border-accent hover:text-accent
                         transition-all duration-200 shadow-xl active:scale-95 cursor-pointer"
              aria-label="Scroll doors right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Virtual Wall of Doors */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="list"
          aria-label="Skill doors"
        >
          {/* Left spacer for alignment */}
          <div className="hidden 2xl:block flex-shrink-0 w-[calc((100vw-80rem)/2)]" />

          {doors.map((door, i) => (
            <div key={door.title} className="snap-start flex-shrink-0">
              <SkillDoor door={door} index={i} onOpen={setActiveDoor} />
            </div>
          ))}

          {/* Right end spacer */}
          <div className="flex-shrink-0 w-8" />
        </div>

        {/* Gradient edge fades for seamless wall effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0F1115] to-transparent hidden md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0F1115] to-transparent hidden md:block" />
      </div>

      {/* Behind The Door Modal Deep-Dive */}
      <AnimatePresence>
        {activeDoor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Scrim backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDoor(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-[32px] border border-white/15 bg-[#12151C] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDoor(null)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/20 border border-accent/40 font-mono text-xs font-bold text-accent">
                  {activeDoor.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  Behind The Door // {activeDoor.badge}
                </span>
              </div>

              <h3 className="font-display text-3xl font-extrabold text-white mb-3">
                {activeDoor.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                {activeDoor.summary}
              </p>

              {/* 4-Step Process Breakdown */}
              <div className="space-y-3 mb-6">
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  Engineering Workflow &amp; Process
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDoor.steps.map((s) => (
                    <div key={s.step} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-xs text-accent font-bold">{s.step}.</span>
                        <h4 className="font-display text-sm font-semibold text-white">{s.title}</h4>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <p className="font-mono text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                  Technologies &amp; Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeDoor.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-white/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Jump to projects */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-white/50">Ready to see production implementations?</span>
                <a
                  href="#projects"
                  onClick={() => setActiveDoor(null)}
                  className="rounded-full bg-accent px-5 py-2 font-display text-xs font-bold text-[#0A0B0E] hover:shadow-[0_0_20px_rgba(0,229,160,0.4)] transition-all"
                >
                  View Case Studies &rarr;
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
