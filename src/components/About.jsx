import React, { useRef, useState } from 'react';
import { GraduationCap, Code2, Layers } from 'lucide-react';

/* ──────────────────────────────────────────
   ABOUT — Split layout matching Reference 2
   Portrait left | Bio + Education + Experience right
   Interactive Parallax Image
   ────────────────────────────────────────── */

const About = () => {
  const imageRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Menghitung rotasi berdasarkan offset kursor (maks 15 derajat)
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="section-fade py-16 sm:py-24" style={{ background: 'var(--color-royal)' }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* ── Left: Interactive Parallax Portrait ── */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
            {/* Wrapper luar untuk perspective kamera 3D */}
            <div 
              className="w-full max-w-[400px]"
              style={{ perspective: '1000px' }}
            >
              {/* Container foto yang bisa berotasi */}
              <div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-3xl overflow-hidden aspect-[3/4] w-full cursor-none shadow-2xl transition-all"
                style={{ 
                  background: 'var(--color-surface-alt)',
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.05 : 1})`,
                  transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  boxShadow: isHovering 
                    ? `0 30px 60px rgba(58, 79, 159, 0.2), inset 0 0 0 1px rgba(255,255,255,0.2)` 
                    : `0 20px 40px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.1)`
                }}
              >
                {/* Efek Lighting / Glare Hologram */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
                    opacity: isHovering ? 1 : 0,
                    transform: `translateZ(10px)`
                  }}
                />
                
                <img
                  src="/profile.png"
                  alt="Andika Ramadhan"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: `scale(${isHovering ? 1.05 : 1})`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Right: Bio + Education + Experience ── */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Greeting */}
            <h2
              className="font-body text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Hi! I'm <span className="text-[var(--color-royal-100)]">Andika</span>
            </h2>

            {/* Bio */}
            <p className="font-body text-sm sm:text-base leading-relaxed mb-2 text-white/80">
              I'm Andika Ramadhan Yusuf Akbar, a tech enthusiast and student of D4 Sistem Informasi Kota Cerdas 
              at Telkom University. I love building practical digital solutions across full-stack web development, 
              hybrid desktop systems, and emerging AI technologies.
            </p>
            <p className="font-body text-sm sm:text-base leading-relaxed mb-8 text-white/80">
              I thrive on turning real-world civic and educational challenges into clean, accessible, and high-impact digital experiences. 
              Let's connect and create something remarkable together.
            </p>

            {/* Education */}
            <h3
              className="font-body text-xl sm:text-2xl font-bold mb-4 text-white"
            >
              Education
            </h3>
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/10 text-white"
              >
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-body text-xs font-medium text-[var(--color-royal-100)]">
                  2024 - Sekarang
                </p>
                <p className="font-body text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                  Telkom University Bandung
                </p>
                <p className="font-body text-sm font-semibold text-white/90">
                  D4 Sistem Informasi Kota Cerdas (Smart City Information System)
                </p>
                <p className="font-body text-xs text-white/60">
                  Fakultas Ilmu Terapan
                </p>
              </div>
            </div>

            {/* Experience / Focus */}
            <h3
              className="font-body text-xl sm:text-2xl font-bold mb-4 text-white"
            >
              Experience & Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Independent Software Developer */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white text-[var(--color-royal)] font-bold shadow-lg"
                >
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-body text-xs font-medium text-[var(--color-royal-100)]">
                    2024 - Sekarang
                  </p>
                  <p className="font-body text-sm font-bold text-white">
                    Independent Software Developer
                  </p>
                  <p className="font-body text-xs uppercase tracking-wide font-semibold text-white/80">
                    FULL-STACK & APPLIED AI
                  </p>
                  <p className="font-body text-xs mt-1 text-white/70">
                    Mengeksplorasi dan membangun modern web (React 18, Vite, Next.js), PWA, sistem desktop hybrid (Electron), dan solusi Local-First RAG.
                  </p>
                </div>
              </div>

              {/* Card 2: Applied Systems & Academic Projects */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white text-[var(--color-royal)] font-bold shadow-lg"
                >
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-body text-xs font-medium text-[var(--color-royal-100)]">
                    2024 - Sekarang
                  </p>
                  <p className="font-body text-sm font-bold text-white">
                    Applied Academic Projects
                  </p>
                  <p className="font-body text-xs uppercase tracking-wide font-semibold text-white/80">
                    SMART CITY & CIVIC SOLUTIONS
                  </p>
                  <p className="font-body text-xs mt-1 text-white/70">
                    Merancang solusi praktis terapan seperti sistem antrean layanan kesehatan, arsitektur basis data terstruktur, dan pemodelan proses bisnis kota cerdas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
