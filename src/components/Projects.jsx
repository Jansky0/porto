import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Code, X, ArrowUpRight, Layers, Wrench, FileText, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import imgJalanSafe from '../assets/images/jalansafe.png';
import imgJalanSafePublic from '../assets/images/jalansafe_public.png';
import imgJalanSafeLapor from '../assets/images/jalansafe_report.png';
import imgJalanSafeAdmin from '../assets/images/jalansafe_admin.png';
import imgCalmClass from '../assets/images/calmclass.png';
import imgCalmClassFocus from '../assets/images/calmclass_focus.png';
import imgCalmClassTeacher from '../assets/images/calmclass_teacher.png';

/* ──────────────────────────────────────────
   PROJECTS — Pokémon Booster Pack Style
   Interactive "tear open" pack revealing 3D Cards
   ────────────────────────────────────────── */

const projectsList = [
  {
    category: 'Web Development',
    title: 'JalanSafe',
    subtitle: 'Road Damage Reporting Platform',
    image: imgJalanSafe,
    description:
      'A specialized web application designed for reporting road damage, streamlining communication between citizens and authorities to help improve public safety and infrastructure maintenance.',
    brief:
      'Built a full-stack road damage reporting platform that enables citizens to submit geolocated reports with photo evidence. The system categorizes damage severity and routes reports to the appropriate municipal departments for faster resolution.',
    features: [
      'Geolocated damage reports',
      'Severity categorization',
      'Municipal routing',
    ],
    gallery: [
      imgJalanSafePublic,
      imgJalanSafeLapor,
      imgJalanSafeAdmin
    ],
    tools: ['PHP', 'Tailwind', 'UX Design', 'Figma'],
    demoLink: '#',
    githubLink: '#',
    colors: {
      primary: '#3A4F9F',
      gradient: 'linear-gradient(135deg, #3A4F9F 0%, #5A72BF 50%, #7B93D4 100%)',
      accent50: '#EAEDFA',
    },
    rotation: -8,
  },
  {
    category: 'Full-Stack Web Dev',
    title: 'CalmClass',
    subtitle: 'Special Needs Learning Tracker',
    image: imgCalmClass,
    description:
      'A specialized learning media application designed for teachers of students with specific learning syndromes. It enables educators to track student progress, monitor emotional states in real-time, and facilitate focused, distraction-free study sessions.',
    brief:
      'Developed CalmClass as a digital learning media platform to help teachers monitor, guide, and analyze the focus and mental well-being of special needs students.',
    features: [
      'Teacher Dashboard for Student Tracking & Analytics',
      'Real-Time Student Mood & Well-being Tracking',
      'Distraction-Free Focus Mode with Pomodoro Timer',
      'Interactive Quizzing & SQLite Database Integration',
    ],
    gallery: [
      imgCalmClass,
      imgCalmClassFocus,
      imgCalmClassTeacher,
    ],
    tools: ['PHP', 'SQLite', 'JavaScript', 'Tailwind CSS', 'REST API'],
    demoLink: 'http://localhost/calmclass/',
    githubLink: '#',
    colors: {
      primary: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
      accent50: '#ECFDF5',
    },
    rotation: 8,
  },
];

const getTranslateX = (index, total, isMobile) => {
  const offset = index - (total - 1) / 2;
  if (isMobile) {
    return `${offset * (total <= 2 ? 40 : 30)}%`;
  }
  return `${offset * (total <= 2 ? 100 : 90)}%`;
};

const getTranslateY = (index, total, isMobile) => {
  if (total <= 2) {
    return '0px';
  }
  const isMiddle = index > 0 && index < total - 1;
  if (isMobile) {
    return isMiddle ? '-40px' : '50px';
  }
  return isMiddle ? '-20px' : '20px';
};

// Reusable 3D Tilt Card Component
const PokeCard = ({ project, isOpened, index, onClick, isMobile }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!isOpened || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
    setGlare({ ...glare, opacity: 0 });
  };

  const handleMouseEnter = () => {
    if (isOpened) setIsHovering(true);
  };

  return (
    <div
      ref={cardRef}
      role="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] aspect-[2.5/3.5] rounded-2xl cursor-pointer transition-all duration-700 ease-out preserve-3d`}
      style={{
        zIndex: isHovering ? 50 : 10 + index,
        // When not opened, all cards are stacked and scaled down. 
        // Once opened, they fan out.
        transform: isOpened 
          ? (isMobile
              ? `translate(-50%, -50%) rotateZ(${project.rotation}deg) translateX(${getTranslateX(index, projectsList.length, true)}) translateY(${getTranslateY(index, projectsList.length, true)}) scale(0.75) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
              : `translate(-50%, -50%) rotateZ(${project.rotation}deg) translateX(${getTranslateX(index, projectsList.length, false)}) translateY(${getTranslateY(index, projectsList.length, false)}) scale(1) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            )
          : `translate(-50%, -10%) scale(0.6) translateY(150px) rotateZ(0deg)`,
        opacity: isOpened ? 1 : 0,
        boxShadow: isHovering ? `0 30px 60px ${project.colors.primary}50` : `0 20px 40px rgba(0,0,0,0.2)`,
      }}
    >
      <div 
        className="w-full h-full rounded-2xl border-8 border-white bg-white relative flex flex-col"
        style={{ transform: 'translateZ(1px)' }}
      >
        {/* Holographic Glare Effect */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
            opacity: glare.opacity,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Foil effect overlay */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-color-dodge transition-opacity duration-300"
          style={{
            backgroundImage: `linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%)`,
            backgroundPosition: `${glare.x}% ${glare.y}%`,
            backgroundSize: '200% 200%',
            opacity: isHovering ? 0.6 : 0
          }}
        />

        {/* Card Content Top Gradient */}
        <div className="h-[45%] relative p-5 flex flex-col rounded-t-lg overflow-hidden" style={{ background: project.colors.gradient }}>
          <div className="flex items-start justify-between relative z-10 mb-4">
            <span className="font-body text-[10px] font-bold tracking-widest text-white uppercase bg-black/20 px-2.5 py-1 rounded-md">
              {project.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          <h3 className="font-display text-3xl text-white tracking-wide relative z-10 leading-none pr-4">
            {project.title}
          </h3>
          
          {/* Card Image Floating Overlay - Removed overflow-hidden from parent to allow pop-out */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[94%] aspect-video z-20 group-hover:scale-110 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover rounded-xl border-[2px] border-white/50"
            />
          </div>
        </div>

        {/* Card Content Bottom White */}
        <div className="h-[55%] bg-white px-5 pb-5 pt-20 flex flex-col justify-between relative z-10 rounded-b-lg">
          <p className="font-body text-xs text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tools.slice(0, 3).map((tool, i) => (
              <span key={i} className="font-body text-[9px] font-bold px-2 py-1 rounded bg-[var(--color-surface-muted)] text-[var(--color-text-primary)]">
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="font-body text-[10px] font-bold text-gray-400">#00{index + 1}/00{projectsList.length}</span>
            <span className="font-body text-xs font-bold text-[var(--color-royal)] flex items-center gap-1">
              Tap to Expand <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Detail Modal Component to handle Gallery State
const DetailModal = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const c = project.colors;
  const images = project.gallery || [project.image];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ animation: 'projFadeIn 0.3s ease forwards' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[2rem] flex flex-col"
        style={{
          background: '#FFFFFF',
          boxShadow: `0 40px 100px rgba(0,0,0,0.4)`,
          animation: 'projSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Top Hero Section (Image & Basic Info) */}
        <div
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center overflow-hidden shrink-0 group"
          style={{ background: c.gradient }}
        >
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-overlay pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle at 20% 30%, white 0%, transparent 70%)` }} />
          
          {/* The Mockup - FULL WIDTH */}
          <div className="relative z-10 w-full h-full p-4 sm:p-12 flex justify-center items-center">
             <div className="w-full max-w-4xl h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900/40 backdrop-blur-sm border border-white/20 relative group/mockup">
               <img 
                 src={images[currentImg]} 
                 alt={project.title} 
                 className="w-full h-full object-contain transition-opacity duration-300 bg-gray-900" 
               />
               
               {/* Gallery Controls */}
               {images.length > 1 && (
                 <>
                   <button 
                     onClick={(e) => { e.stopPropagation(); setCurrentImg((prev) => (prev > 0 ? prev - 1 : images.length - 1)); }}
                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover/mockup:opacity-100 transition-opacity"
                   >
                     <ChevronLeft className="w-6 h-6" />
                   </button>
                   <button 
                     onClick={(e) => { e.stopPropagation(); setCurrentImg((prev) => (prev < images.length - 1 ? prev + 1 : 0)); }}
                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover/mockup:opacity-100 transition-opacity"
                   >
                     <ChevronRight className="w-6 h-6" />
                   </button>
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                     {images.map((_, i) => (
                       <button 
                         key={i} 
                         onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
                         className={`w-2 h-2 rounded-full transition-all shadow-md ${i === currentImg ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                       />
                     ))}
                   </div>
                 </>
               )}
             </div>
          </div>

          {/* Floating Title Overlay (Bottom Left) */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-20" />
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-30">
            <span className="inline-block font-body text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white mb-4 border border-white/20">
              {project.category}
            </span>
            <h3 className="font-display text-4xl sm:text-6xl md:text-7xl text-white tracking-wider leading-none">
              {project.title}
            </h3>
            <p className="font-body text-sm sm:text-lg text-white/70 mt-4 max-w-xl">{project.subtitle}</p>
          </div>

          {/* Close Button Inside Hero */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full z-[100] flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 cursor-pointer text-white bg-black/20 backdrop-blur-md border border-white/30"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Content Section */}
        <div className="p-8 sm:p-12 md:p-16 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20">
            
            {/* Left Column: Description & Process */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-6 rounded-full" style={{ background: c.primary }} />
                  <h4 className="font-body text-xl font-bold text-[var(--color-text-primary)]">
                    Abstract & Process
                  </h4>
                </div>
                <p className="font-body text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)] mb-6">
                  {project.description}
                </p>
                <div className="p-8 rounded-3xl border border-gray-100" style={{ background: `${c.accent50}40` }}>
                  <p className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] italic">
                    "{project.brief}"
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-body text-xl font-bold text-[var(--color-text-primary)] mb-8">
                  Core Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg" style={{ background: c.primary }}>
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-body text-sm font-bold text-[var(--color-text-secondary)]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Stack & Actions */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              {/* Tech Stack */}
              <div>
                <h4 className="font-body text-xl font-bold text-[var(--color-text-primary)] mb-8 flex items-center gap-2">
                  <Wrench className="w-5 h-5" style={{ color: c.primary }} />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="font-body text-sm font-bold px-5 py-3 rounded-2xl border border-gray-200 text-[var(--color-text-secondary)] hover:border-[var(--color-royal)] hover:text-[var(--color-royal)] transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="mt-auto pt-10 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={project.demoLink}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 font-body text-sm font-bold px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
                    style={{ background: c.gradient, color: '#fff', boxShadow: `0 15px 30px ${c.primary}40` }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Launch Project
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 font-body text-sm font-bold px-8 py-5 rounded-2xl border-2 transition-all duration-300 hover:bg-gray-50"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)' }}
                  >
                    <Code className="w-5 h-5" />
                    View Source
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  const [packState, setPackState] = useState('sealed'); // sealed, opening, opened
  const [detailProject, setDetailProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // trigger on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenPack = () => {
    if (packState !== 'sealed') return;
    setPackState('opening');
    // Sequence the opening animation
    setTimeout(() => {
      setPackState('opened');
    }, 1200); // 1.2s total animation time before fully opened
  };

  return (
    <>
      <section
        id="projects"
        className="section-fade py-20 sm:py-32 overflow-hidden relative flex flex-col items-center"
        style={{ background: 'var(--color-royal)', minHeight: '100vh' }}
      >
        {/* Header Texts */}
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-16 relative z-50 pointer-events-none mb-16 text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-white">
            PROJECT SHOWCASE
          </h2>
          <p className="mt-4 font-body text-white/80 max-w-xl mx-auto">
            {packState === 'sealed' 
              ? "Tarik atau klik Booster Pack di bawah ini untuk melihat portofolio saya."
              : "Pilih salah satu kartu proyek untuk melihat detail lengkapnya."}
          </p>
        </div>

        {/* The 3D Scene Container */}
        <div className="relative w-full max-w-[1200px] mx-auto h-[600px] sm:h-[700px] perspective-1000 flex items-center justify-center mt-8 sm:mt-12">

          {/* Cards (rendered behind the pack when sealed, but pop out when opening) */}
          <div className="absolute inset-0">
            {projectsList.map((project, idx) => (
              <PokeCard 
                key={idx} 
                project={project} 
                index={idx} 
                isOpened={packState === 'opened' || packState === 'opening'}
                isMobile={isMobile}
                onClick={() => {
                  if (packState === 'opened') setDetailProject(idx);
                }}
              />
            ))}
          </div>

          {/* The Booster Pack */}
          {packState !== 'opened' && (
            <div 
              role="button"
              onClick={handleOpenPack}
              className={`relative z-40 w-[300px] sm:w-[340px] aspect-[2/3.2] cursor-pointer transition-all ${packState === 'opening' ? 'pointer-events-none' : 'hover:scale-105 hover:-translate-y-2'}`}
              style={{
                animation: packState === 'opening' ? 'packShake 0.4s ease-in-out forwards' : 'float 6s ease-in-out infinite'
              }}
            >
              {/* Booster Pack Shadow & Glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl rounded-[100%]" />
              <div className="absolute inset-0 bg-[var(--color-royal-light)] blur-[80px] rounded-[30px] opacity-20 -z-10" />

              {/* Top Flap (tears off) */}
              <div 
                className="absolute top-0 left-0 w-full h-[25%] bg-[var(--color-royal-dark)] rounded-t-xl overflow-hidden shadow-inner flex flex-col justify-end border-t border-l border-r border-white/10"
                style={{
                  transformOrigin: 'bottom',
                  transform: packState === 'opening' ? 'translateY(-100px) rotateX(20deg)' : 'none',
                  opacity: packState === 'opening' ? 0 : 1,
                  transition: 'all 0.6s cubic-bezier(0.8, 0, 0.2, 1) 0.3s', // delayed tear
                }}
              >
                {/* Flap ridges */}
                <div className="absolute top-0 left-0 w-full flex justify-between px-2 py-1">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="w-1.5 h-4 bg-white/20 rounded-full" />
                  ))}
                </div>
                <div className="p-4 text-center pb-2">
                  <div className="w-16 h-1 mx-auto bg-white/30 rounded-full mb-2" />
                  <span className="font-display text-white/50 text-xs tracking-widest">TEAR HERE</span>
                </div>
              </div>

              {/* Main Pack Body */}
              <div 
                className="absolute bottom-0 left-0 w-full h-[75%] rounded-b-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-8 text-center border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, var(--color-royal-dark) 0%, #1a2552 100%)',
                  transform: packState === 'opening' ? 'translateY(100px) scale(0.95)' : 'none',
                  opacity: packState === 'opening' ? 0 : 1,
                  transition: 'all 0.8s cubic-bezier(0.8, 0, 0.2, 1) 0.4s',
                }}
              >
                {/* Shiny Foil Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -rotate-45 translate-x-[-100%] animate-[glare_4s_infinite]" />
                
                <Sparkles className="w-12 h-12 text-white/90 mb-4" />
                <h3 className="font-display text-3xl text-white tracking-widest leading-none mb-2">
                  PORTFOLIO 
                  <br/> 
                  <span className="text-[var(--color-royal-100)]">EDITION</span>
                </h3>
                <p className="font-body text-[10px] text-white/60 tracking-widest uppercase mt-4 border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  Click to Open
                </p>
                <div className="absolute bottom-4 font-body text-[9px] text-white/40 tracking-widest">
                  CONTAINS {projectsList.length} RARE PROJECTS
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ═══════ Detail Modal (Existing Design) ═══════ */}
      {detailProject !== null && (
        <DetailModal 
          project={projectsList[detailProject]} 
          onClose={() => setDetailProject(null)} 
        />
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes glare {
          0% { transform: translateX(-100%) rotate(-45deg); opacity: 0; }
          20% { transform: translateX(200%) rotate(-45deg); opacity: 0.5; }
          100% { transform: translateX(200%) rotate(-45deg); opacity: 0; }
        }
        @keyframes packShake {
          0%, 100% { transform: translateX(0) scale(1); }
          25% { transform: translateX(-10px) scale(0.98); }
          50% { transform: translateX(10px) scale(1.02); }
          75% { transform: translateX(-10px) scale(0.98); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes projFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes projSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
};

export default Projects;
