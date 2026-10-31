import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timeline, hero } from '../data/content';

function TimelineItem({ item, index, isLast, onVisible }) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    onChange: (inView) => {
      if (inView) onVisible(item.year || 2027 - index);
    },
  });

  const stepNumbers = ['/ 05', '/ 04', '/ 03', '/ 02', '/ 01'];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.1, duration: 0.6 }}
      className="relative flex gap-6 sm:gap-8"
    >
      {/* Timeline line & icon node */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#12151C] shadow-xl text-xl text-accent">
          {item.icon}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-accent/50 via-white/10 to-transparent my-2" />
        )}
      </div>

      {/* Content Card */}
      <div className="pb-12 flex-1">
        <div className="rounded-[28px] border border-white/10 bg-[#12151C]/90 backdrop-blur-xl p-7 hover:border-accent/40 transition-all duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 font-mono text-xs text-accent font-bold">
              {item.period}
            </span>
            <span className="font-mono text-xs text-white/40 tracking-wider">
              {stepNumbers[index] || `/ 0${5 - index}`}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-1 tracking-tight">
            {item.title}
          </h3>

          <p className="font-mono text-xs text-accent/90 mb-3 font-semibold">
            {item.subtitle}
          </p>

          <p className="text-sm text-white/70 leading-relaxed font-light mb-4">
            {item.detail}
          </p>

          {/* Tags */}
          {item.skills && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white/60"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [activeYear, setActiveYear] = useState(2027);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} id="story" className="py-32 px-6 bg-black/25 relative overflow-hidden">
      {/* Background dot matrix weave */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Section Header with 96px circular portrait (Exact Rishi Thakor signature layout) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-6">
              {/* Exactly 96px x 96px circular portrait */}
              <div className="relative h-24 w-24 rounded-full border-2 border-accent overflow-hidden flex-shrink-0 shadow-[0_0_30px_rgba(0,229,160,0.35)] bg-[#0F1115]">
                <img
                  src={hero.photo.src}
                  alt={hero.photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-2 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>My Story</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Let&apos;s go back in time.
                </h2>
              </div>
            </div>

            {/* Year Odometer Badge */}
            <div className="flex items-center gap-2 rounded-2xl bg-black/50 border border-white/10 px-4 py-2 self-start sm:self-center">
              <span className="font-mono text-xs text-white/40">Year</span>
              <span className="font-display font-extrabold text-2xl text-accent tabular-nums">
                {activeYear}
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl font-light">
            A chronological timeline of my computer science degree at Chitkara University, enterprise ServiceNow certifications, competitive algorithmic programming, and production systems.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="mt-10">
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={i}
              isLast={i === timeline.length - 1}
              onVisible={setActiveYear}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
