import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteConfig } from '../data/content';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '', honeypot: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot spam protection
    if (form.honeypot) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section ref={ref} id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header (Exact Rishi Thakor phrasing customized for Tejas) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Start A Project // Contact</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Have an internship or project in mind? <br />
            <span className="text-accent">Let&apos;s work together.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
            I am currently open to software engineering and full-stack developer internships. Available for remote-first roles worldwide and on-site opportunities.
          </p>
        </motion.div>

        {/* Bento Grid: Contact Channels + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels, copy email, social & resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Card with One-Click Copy */}
            <div className="rounded-[28px] border border-white/10 bg-[#12151C]/90 backdrop-blur-2xl p-8 hover:border-accent/40 transition-colors">
              <span className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">Direct Inquiries</span>
              <p className="font-display text-lg sm:text-2xl font-bold text-white break-all mb-5">
                {siteConfig.email}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-5 py-2.5 font-mono text-xs text-accent font-semibold hover:border-accent hover:bg-accent hover:text-bg transition-all active:scale-95"
                >
                  {copied ? (
                    <span>✓ Copied to clipboard</span>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy email address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs text-white/70 hover:text-accent hover:border-accent transition-all"
                >
                  <span>Open client &rarr;</span>
                </a>
              </div>
            </div>

            {/* Social & Resume Links Card */}
            <div className="rounded-[28px] border border-white/10 bg-[#12151C]/90 backdrop-blur-2xl p-8 space-y-4">
              <span className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">Connect &amp; Verification</span>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 hover:border-accent/40 transition-all group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div>
                    <span className="block font-display text-sm font-semibold text-white group-hover:text-accent transition-colors">GitHub</span>
                    <span className="block font-mono text-[10px] text-white/40">@Tejasgupta74</span>
                  </div>
                </a>

                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 hover:border-accent/40 transition-all group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div>
                    <span className="block font-display text-sm font-semibold text-white group-hover:text-accent transition-colors">LinkedIn</span>
                    <span className="block font-mono text-[10px] text-white/40">Tejas Gupta</span>
                  </div>
                </a>
              </div>

              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2.5 w-full rounded-full border border-accent/50 bg-accent/15 p-4 font-display text-sm font-bold text-accent hover:bg-accent hover:text-bg transition-all duration-300 mt-2 shadow-lg"
              >
                <span>Download Resume (PDF)</span>
                <span>&nearr;</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-conversion message form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[32px] border border-white/10 bg-[#12151C]/90 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-14 text-center"
                >
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-accent/15 border border-accent text-2xl text-accent mb-4">
                    ✉️
                  </div>
                  <h3 className="font-display text-2xl font-bold text-accent mb-2">Message Dispatched</h3>
                  <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                    Your mail client has been opened with your prefilled details. You can also reach out directly to{' '}
                    <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline font-mono">
                      {siteConfig.email}
                    </a>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field */}
                  <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                    <label htmlFor="hp_field_check">Leave empty</label>
                    <input
                      type="text"
                      id="hp_field_check"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-3.5 text-white placeholder-white/20 font-body text-sm focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-3.5 text-white placeholder-white/20 font-body text-sm focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                      Project or Role Overview
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-3.5 text-white placeholder-white/20 font-body text-sm resize-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="Hi Tejas, we'd like to interview you for our software engineering internship..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 font-display font-bold text-bg text-sm shadow-[0_0_25px_rgba(0,229,160,0.35)] hover:shadow-[0_0_40px_rgba(0,229,160,0.55)] transition-all duration-300"
                  >
                    <span>Send message</span>
                    <span>&rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
