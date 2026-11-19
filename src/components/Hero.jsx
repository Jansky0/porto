import React from 'react';

/* ──────────────────────────────────────────
   HERO — Massive "My PORTFOLIO" Typography
   Matches Reference Image 1 & 5
   ────────────────────────────────────────── */

const SKILLS_MARQUEE = [
  'AI RESEARCH',
  'LOCAL RAG',
  'NEXT.JS',
  'REACT',
  'TAILWIND CSS',
  'UX DESIGN',
  'ELECTRON',
  'FULL-STACK DEV',
  'SYSTEM DESIGN',
  'PROTOTYPING',
];

const MarqueeStrip = ({ items, reverse = false, opacity = 1 }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap py-2" style={{ opacity }}>
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider mx-4 sm:mx-6 select-none"
            style={{ color: 'var(--color-royal-100)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-12">
        {/* "My" rotated badge */}
        <div className="reveal-up reveal-up-d1 relative inline-block mb-[-30px] sm:mb-[-40px] ml-4 sm:ml-8 z-20">
          <div
            className="inline-block rounded-xl sm:rounded-2xl px-5 py-3 sm:px-8 sm:py-5 transform -rotate-6"
            style={{ background: 'var(--color-royal)' }}
          >
            <span className="font-display text-3xl sm:text-4xl md:text-5xl text-white italic tracking-wide">
              My
            </span>
          </div>
        </div>

        {/* "PORTFOLIO" massive block */}
        <div className="reveal-up reveal-up-d2">
          <div
            className="inline-block rounded-xl sm:rounded-2xl px-6 py-3 sm:px-10 sm:py-5"
            style={{ background: 'var(--color-royal)' }}
          >
            <h1
              className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-white tracking-wider leading-none"
              style={{ letterSpacing: '0.05em' }}
            >
              PORTFOLIO
            </h1>
          </div>
        </div>

        {/* Name and Year line */}
        <div className="reveal-up reveal-up-d3 flex items-center gap-4 mt-4 sm:mt-6 px-2">
          <span
            className="font-display text-lg sm:text-xl md:text-2xl tracking-[0.15em]"
            style={{ color: 'var(--color-text-primary)' }}
          >
            ANDIKA RAMADHAN
          </span>
          <div
            className="flex-1 h-[3px] rounded-full"
            style={{ background: 'var(--color-royal)' }}
          />
          <span
            className="font-display text-lg sm:text-xl md:text-2xl tracking-wider"
            style={{ color: 'var(--color-text-primary)' }}
          >
            2026
          </span>
        </div>
      </div>

      {/* Scrolling Skill Strips (angled) */}
      <div className="relative z-0 mt-4 sm:mt-8 overflow-hidden">
        <div className="transform -rotate-2 scale-105">
          <MarqueeStrip items={SKILLS_MARQUEE} opacity={0.6} />
        </div>
        <div className="transform rotate-1 scale-105 -mt-2">
          <MarqueeStrip items={[...SKILLS_MARQUEE].reverse()} reverse opacity={0.35} />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 reveal-up reveal-up-d5">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--color-text-muted)' }}>
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5" style={{ borderColor: 'var(--color-royal-light)' }}>
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: 'var(--color-royal)',
              animation: 'reveal-up 1.5s ease-in-out infinite alternate',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
