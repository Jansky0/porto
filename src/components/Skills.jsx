import React from 'react';
import { Sparkles } from 'lucide-react';

/* ──────────────────────────────────────────
   SKILLS — Infinite Scrolling Marquee 
   Super premium agency style (Apple / Vercel vibe)
   ────────────────────────────────────────── */

const topTrackSkills = [
  "REACT 18", "NEXT.JS", "TAILWIND CSS V4", "UX DESIGN", "ELECTRON", "FIGMA", "RESPONSIVE UI", "TYPESCRIPT"
];

const bottomTrackSkills = [
  "AI RESEARCH", "LOCAL RAG", "PYTHON 3.12", "CHROMADB", "GEMINI API", "STREAMLIT", "OFFLINE-FIRST", "DOCKER"
];

// Helper to duplicate array for seamless infinite marquee loop
const duplicateForLoop = (arr) => [...arr, ...arr];

const SkillItem = ({ label, isOutline }) => (
  <div className="flex items-center gap-8 mx-4 group cursor-default">
    <div className="w-4 h-4 rounded-full bg-[var(--color-royal-100)] group-hover:bg-[var(--color-royal)] transition-colors duration-300" />
    <span 
      className={`font-display text-5xl sm:text-7xl md:text-8xl whitespace-nowrap transition-all duration-300 ${
        isOutline 
          ? 'text-transparent stroke-text group-hover:text-[var(--color-text-primary)]' 
          : 'text-[var(--color-text-primary)] group-hover:text-[var(--color-royal)]'
      }`}
    >
      {label}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative overflow-hidden flex flex-col justify-center"
      style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border-light)' }}
    >
      {/* Container Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--color-surface-alt)] to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full mb-16">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-royal-50)] text-[var(--color-royal)] font-body text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-4 h-4" /> The Arsenal
          </span>
          <p className="mt-4 font-body text-[var(--color-text-secondary)] max-w-xl mx-auto text-lg sm:text-xl">
            Dari pondasi desain hingga integrasi sistem kecerdasan buatan, inilah ekosistem teknologi utama saya.
          </p>
        </div>
      </div>

      {/* ── Top Marquee (Scrolls Left) ── */}
      <div className="relative w-full overflow-hidden flex mb-8 sm:mb-12" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        {/* We use marquee-track from index.css */}
        <div className="marquee-track hover:pause items-center">
          {duplicateForLoop(topTrackSkills).map((skill, idx) => (
            <SkillItem 
              key={`top-${idx}`} 
              label={skill} 
              isOutline={idx % 2 === 1} // Alternate solid and outline
            />
          ))}
        </div>
      </div>

      {/* ── Bottom Marquee (Scrolls Right) ── */}
      <div className="relative w-full overflow-hidden flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        {/* We use marquee-track-reverse from index.css */}
        <div className="marquee-track-reverse hover:pause items-center">
          {duplicateForLoop(bottomTrackSkills).map((skill, idx) => (
            <SkillItem 
              key={`bottom-${idx}`} 
              label={skill} 
              isOutline={idx % 2 === 0} 
            />
          ))}
        </div>
      </div>

      {/* Inject custom CSS specifically for the outline stroke */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px var(--color-border);
        }
        .group:hover .stroke-text {
          -webkit-text-stroke: 2px transparent;
        }
        /* Pause the marquee on hover to let users read it */
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;
