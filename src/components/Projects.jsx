import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/content';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.65 }}
      className="group relative rounded-[32px] border border-white/10 bg-[#12151C]/90 backdrop-blur-2xl overflow-hidden
                 hover:border-accent/60 transition-all duration-300
                 hover:shadow-[0_25px_70px_rgba(0,229,160,0.12)] p-8 sm:p-12"
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
        <div className="flex-1">
          {/* Card Meta & Project Number */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
              PROJECT // 0{index + 1}
            </span>
            <span className="text-white/20">/</span>
            <span className="font-mono text-xs text-white/50 uppercase tracking-wider">
              {index === 0 ? 'Enterprise Platform & Multi-Tenant' : index === 1 ? 'GenAI & ATS Engine' : 'Computer Vision & Health Diagnosis'}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white group-hover:text-accent transition-colors duration-200 mb-3 tracking-tight">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm sm:text-base text-white/70 mb-8 font-light leading-relaxed max-w-2xl">
            {project.tagline}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5
                           font-mono text-xs text-accent font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Technical Impact Points */}
          <ul className="space-y-4 mb-6">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-white/80 leading-relaxed font-light">
                <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent font-mono text-[10px] font-bold">
                  ✓
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action CTAs: Live Platform, GitHub & API */}
        <div className="flex flex-row lg:flex-col gap-3 flex-shrink-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-xs font-bold text-bg shadow-[0_0_20px_rgba(0,229,160,0.3)] hover:shadow-[0_0_35px_rgba(0,229,160,0.5)] transition-all"
            >
              <span>Live Platform</span>
              <span>&nearr;</span>
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-display text-xs font-semibold text-white hover:border-accent hover:text-accent transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub Repo</span>
            </a>
          )}

          {project.links.api && (
            <a
              href={project.links.api}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 font-mono text-xs text-white/60 hover:text-accent hover:border-accent transition-colors"
            >
              <span>API Endpoint</span>
              <span>&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Featured work &amp; platforms.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl font-light">
            Real production applications solving complex enterprise problems &mdash; granular access control, atomic race-free fee pipelines, and low-latency GenAI services.
          </p>
        </motion.div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
