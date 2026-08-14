import React, { useRef, useState } from 'react';
import { GraduationCap, Briefcase, FlaskConical, Lightbulb } from 'lucide-react';

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
              I'm Andika Ramadhan Yusuf Akbar, a passionate tech enthusiast who loves building things 
              that are not only functional but also beautifully designed. I thrive at the intersection 
              of AI research, web development, and user experience design.
            </p>
            <p className="font-body text-sm sm:text-base leading-relaxed mb-8 text-white/80">
              I'm always experimenting with new technologies and looking for ways to push creative 
              boundaries. Let's collaborate and create something remarkable together.
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
                  2024 - Now
                </p>
                <p className="font-body text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                  Telkom University
                </p>
                <p className="font-body text-sm text-white/80">
                  Informatics / Computer Science
                </p>
              </div>
            </div>

            {/* Experience / Projects */}
            <h3
              className="font-body text-xl sm:text-2xl font-bold mb-4 text-white"
            >
              Experience
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Experience Card 1 */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white text-[var(--color-royal)] font-bold shadow-lg"
                >
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-body text-xs font-medium text-[var(--color-royal-100)]">
                    2025 - Now
                  </p>
                  <p className="font-body text-sm font-bold text-white">
                    AI Research Lab
                  </p>
                  <p className="font-body text-xs uppercase tracking-wide font-semibold text-white/80">
                    AI & TECH RESEARCHER
                  </p>
                  <p className="font-body text-xs mt-1 text-white/60">
                    Exploring and documenting emerging AI tools, conversational models, and practical implementations.
                  </p>
                </div>
              </div>

              {/* Experience Card 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white text-[var(--color-royal)] font-bold shadow-lg"
                >
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-body text-xs font-medium text-[var(--color-royal-100)]">
                    2025 - Now
                  </p>
                  <p className="font-body text-sm font-bold text-white">
                    Google Student Ambassador
                  </p>
                  <p className="font-body text-xs uppercase tracking-wide font-semibold text-white/80">
                    TECH COMMUNITY LEADER
                  </p>
                  <p className="font-body text-xs mt-1 text-white/60">
                    Contributing to the university tech community via discussions, workshops, and knowledge sharing.
                  </p>
                </div>
              </div>

              {/* Experience Card 3 */}
              <div className="flex items-start gap-4 sm:col-span-2 lg:col-span-1">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white text-[var(--color-royal)] font-bold shadow-lg"
                >
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-body text-xs font-medium text-[var(--color-royal-100)]">
                    2025
                  </p>
                  <p className="font-body text-sm font-bold text-white">
                    JalanSafe
                  </p>
                  <p className="font-body text-xs uppercase tracking-wide font-semibold text-white/80">
                    WEB DEVELOPER & UX DESIGNER
                  </p>
                  <p className="font-body text-xs mt-1 text-white/60">
                    Built a road damage reporting web app to improve citizen-authority communication.
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
