import React, { useState, useRef, useEffect } from 'react';
import { 
  ExternalLink, 
  Code, 
  X, 
  ArrowUpRight, 
  Layers, 
  Wrench, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  Disc3 
} from 'lucide-react';

// JalanSafe Images
import imgJalanSafe from '../assets/images/jalansafe.png';
import imgJalanSafePublic from '../assets/images/jalansafe_public.png';
import imgJalanSafeLapor from '../assets/images/jalansafe_report.png';
import imgJalanSafeAdmin from '../assets/images/jalansafe_admin.png';

// CalmClass Images
import imgCalmClass from '../assets/images/calmclass.png';
import imgCalmClassFocus from '../assets/images/calmclass_focus.png';
import imgCalmClassTeacher from '../assets/images/calmclass_teacher.png';

// Pilah.in Images
import imgPilahinHero from '../assets/images/pilahin_hero.png';
import imgPilahinSnapSort from '../assets/images/pilahin_snapsort.png';
import imgPilahinSetor from '../assets/images/pilahin_setor.png';
import imgPilahinToko from '../assets/images/pilahin_toko.png';

// Puskesmas Images
import imgPuskesmasIndex from '../assets/images/puskesmas_index.png';
import imgPuskesmasTv from '../assets/images/puskesmas_tv.png';
import imgPuskesmasLoket from '../assets/images/puskesmas_loket.png';
import imgPuskesmasPetugas from '../assets/images/puskesmas_petugas.png';

// DocuMind Images
import imgDocuMindHero from '../assets/images/documind_hero.png';

// NusaChain Images
import imgNusaChainHero from '../assets/images/nusachain_hero.png';
import imgNusaChainDesktop from '../assets/images/nusachain_desktop.png';
import imgNusaChainLoop from '../assets/images/nusachain_loop.png';
import imgNusaChainSpatial from '../assets/images/nusachain_spatial.png';
import imgNusaChainWarga from '../assets/images/nusachain_warga.png';

/* ──────────────────────────────────────────
   PROJECTS — Pokémon Booster Pack Experience
   Interactive "tear open" pack revealing 3D Cards
   with Deck Carousel & Grid View modes
   ────────────────────────────────────────── */

const projectsList = [
  {
    category: 'Web & PWA',
    title: 'Pilah.in',
    subtitle: 'Smart Waste Management & Circular Economy PWA',
    image: imgPilahinHero,
    description:
      'A modern progressive web app connecting citizens and local recycling partners in a circular economy. Features AI waste classification, scheduled drop-off/pickup tickets, and direct e-wallet payouts.',
    brief:
      'Architected Pilah.in with a Fresh Eco-Tech design system, integrating SnapSort AI for instant waste identification, ticket-based field verification, circular store checkout, and SUS/NPS-validated user journeys.',
    features: [
      'SnapSort AI Waste Recognition & Classifier',
      'Digital Drop-off & Pickup Tickets (PLH-XXXX)',
      'Circular Market Store & E-Wallet Withdrawal (GoPay/DANA)',
      'Mitra Field Verification & Real-Time Weighing Logs',
      'High-Grade Usability Benchmarks (SUS & NPS Tested)'
    ],
    gallery: [
      imgPilahinHero,
      imgPilahinSnapSort,
      imgPilahinSetor,
      imgPilahinToko
    ],
    tools: ['React 18', 'Tailwind CSS v4', 'Vite', 'PWA', 'UX Research', 'Figma'],
    demoLink: '#',
    githubLink: '#',
    colors: {
      primary: '#059669',
      gradient: 'linear-gradient(135deg, #047857 0%, #10B981 50%, #34D399 100%)',
      accent50: '#ECFDF5',
    },
    rotation: -10,
  },
  {
    category: 'Desktop & Next.js',
    title: 'Antrean Puskesmas',
    subtitle: 'Integrated Hybrid Healthcare Queue & TV Voice Calling System',
    image: imgPuskesmasIndex,
    description:
      'A cross-platform hybrid queue management solution built for primary healthcare centers (Puskesmas Prambontergayang) integrating multi-counter kiosks, caller dashboards, and dual-monitor TV waiting displays with automated Indonesian voice announcements.',
    brief:
      'Engineered an offline-first healthcare queuing ecosystem combining Next.js with an Electron desktop application. Supports automated multi-screen TV extension, synchronized calling counters across general, dental, and geriatric clinics, and thermal slip ticket generation.',
    features: [
      'Self-Service Kiosk & Multi-Poli Ticket Dispatch',
      'Automated Dual-Display TV Room Screen (Auto-Extend)',
      'Real-time Indonesian TTS Audio Voice Announcements',
      'Doctor & Counter Operator Calling Dashboard',
      'Resilient Offline-First Hybrid Electron Architecture'
    ],
    gallery: [
      imgPuskesmasIndex,
      imgPuskesmasTv,
      imgPuskesmasLoket,
      imgPuskesmasPetugas
    ],
    tools: ['Next.js', 'Electron', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'Node.js'],
    demoLink: '#',
    githubLink: '#',
    colors: {
      primary: '#0D9488',
      gradient: 'linear-gradient(135deg, #0F766E 0%, #0D9488 50%, #14B8A6 100%)',
      accent50: '#F0FDFA',
    },
    rotation: -6,
  },
  {
    category: 'AI & Local RAG',
    title: 'DocuMind',
    subtitle: 'Local-First RAG & Document Knowledge Engine',
    image: imgDocuMindHero,
    description:
      'An enterprise-grade, local-first Retrieval-Augmented Generation (RAG) platform delivering grounded question-answering over complex documents with verifiable source citations and strict anti-hallucination guardrails.',
    brief:
      'Architected an end-to-end local knowledge retrieval pipeline integrating ChromaDB vector storage with Google Gemini streaming inference. Employs recursive smart chunking with semantic overlap, similarity distance scoring, and page-level source references.',
    features: [
      'Multi-Format Document Ingestion (.PDF, .MD, .TXT)',
      'Recursive Smart Chunking with Dynamic Overlap',
      'Local Persistent ChromaDB Vector Store',
      'Real-Time Streaming LLM Responses (Google Gemini)',
      'Anti-Hallucination Guardrails & Grounded Citations'
    ],
    gallery: [
      imgDocuMindHero
    ],
    tools: ['Python 3.12', 'ChromaDB', 'Google Gemini API', 'Streamlit', 'Docker', 'uv'],
    demoLink: '#',
    githubLink: '#',
    colors: {
      primary: '#7C3AED',
      gradient: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 50%, #8B5CF6 100%)',
      accent50: '#F5F3FF',
    },
    rotation: -2,
  },
  {
    category: 'Product & UX Architecture',
    title: 'NusaChain 2.0',
    subtitle: 'Maritime Logistics Intelligence & Early Warning System',
    image: imgNusaChainHero,
    description:
      'A maritime supply chain intelligence and commodity price transparency platform designed for remote 3T archipelago regions (tested for Pulau Alor, NTT), combining real-time AIS vessel tracking with offline-resilient citizen tools.',
    brief:
      'Conducted in-depth field problem analysis and formulated a production-ready UX blueprint connecting Pelindo AIS ship tracking, BMKG marine weather safety alerts, Bulog buffer stock thresholds, and an offline PWA & WhatsApp inquiry bot to prevent price speculation.',
    features: [
      'Real-Time AIS Maritime Vessel & Tol Laut Tracking',
      'Predictive Buffer Stock Shortage Early Warning',
      'Offline-First PWA & WhatsApp Price Transparency Bot',
      'BMKG Marine Weather & Sea Wave Safety Sync',
      'Comprehensive User Persona & Empathy-Driven UX Blueprint'
    ],
    gallery: [
      imgNusaChainHero,
      imgNusaChainDesktop,
      imgNusaChainLoop,
      imgNusaChainSpatial,
      imgNusaChainWarga
    ],
    tools: ['Product Strategy', 'UX Blueprint', 'PWA Architecture', 'AIS Logistics', 'Figma'],
    demoLink: '#',
    githubLink: '#',
    colors: {
      primary: '#0284C7',
      gradient: 'linear-gradient(135deg, #0369A1 0%, #0284C7 50%, #38BDF8 100%)',
      accent50: '#F0F9FF',
    },
    rotation: 2,
  },
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
      'Interactive public and admin dashboards'
    ],
    gallery: [
      imgJalanSafe,
      imgJalanSafePublic,
      imgJalanSafeLapor,
      imgJalanSafeAdmin
    ],
    tools: ['PHP', 'Tailwind CSS', 'UX Design', 'Figma', 'MySQL'],
    demoLink: '#',
    githubLink: '#',
    colors: {
      primary: '#3A4F9F',
      gradient: 'linear-gradient(135deg, #3A4F9F 0%, #5A72BF 50%, #7B93D4 100%)',
      accent50: '#EAEDFA',
    },
    rotation: 6,
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
      'Interactive Quizzing & SQLite Database Integration'
    ],
    gallery: [
      imgCalmClass,
      imgCalmClassFocus,
      imgCalmClassTeacher,
    ],
    tools: ['PHP', 'SQLite', 'JavaScript', 'Tailwind CSS', 'REST API'],
    demoLink: '#',
    githubLink: '#',
    colors: {
      primary: '#D97706',
      gradient: 'linear-gradient(135deg, #B45309 0%, #D97706 50%, #F59E0B 100%)',
      accent50: '#FEF3C7',
    },
    rotation: 10,
  },
];

// Reusable 3D Tilt Card Component
const PokeCard = ({ project, isOpened, index, activeIndex, onClick, isMobile, viewMode }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!isOpened || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

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

  // If in Grid view mode:
  if (viewMode === 'grid') {
    return (
      <div
        ref={cardRef}
        role="button"
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="w-full max-w-[340px] aspect-[2.5/3.6] rounded-2xl cursor-pointer transition-all duration-300 preserve-3d group relative hover:-translate-y-2"
        style={{
          boxShadow: isHovering ? `0 25px 50px ${project.colors.primary}40` : `0 15px 35px rgba(0,0,0,0.2)`,
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <CardInner 
          project={project} 
          glare={glare} 
          isHovering={isHovering} 
          index={index} 
          total={projectsList.length} 
        />
      </div>
    );
  }

  // Carousel / Deck Fan calculations relative to activeIndex
  const diff = index - activeIndex;
  const isCenter = diff === 0;

  // Deck transform geometry
  let translateX = 0;
  let translateY = 0;
  let rotateZ = 0;
  let scale = 1;
  let zIndex = 30 - Math.abs(diff) * 5;
  let opacity = 1;

  if (isCenter) {
    translateX = 0;
    translateY = 0;
    rotateZ = 0;
    scale = isMobile ? 0.95 : 1.05;
    zIndex = 50;
  } else {
    // Fan out symmetrically
    const spacing = isMobile ? 65 : 180;
    translateX = diff * spacing;
    translateY = Math.abs(diff) * (isMobile ? 12 : 24);
    rotateZ = diff * (isMobile ? 4 : 7);
    scale = Math.max(0.7, 1 - Math.abs(diff) * (isMobile ? 0.12 : 0.08));
    if (Math.abs(diff) > 2) {
      opacity = 0.2;
    }
  }

  return (
    <div
      ref={cardRef}
      role="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] sm:w-[330px] aspect-[2.5/3.6] rounded-2xl cursor-pointer transition-all duration-700 ease-out preserve-3d"
      style={{
        zIndex: isHovering ? 60 : zIndex,
        transform: isOpened 
          ? `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) rotateZ(${rotateZ}deg) scale(${scale}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          : `translate(-50%, -10%) scale(0.6) translateY(150px) rotateZ(0deg)`,
        opacity: isOpened ? opacity : 0,
        pointerEvents: Math.abs(diff) > 2 ? 'none' : 'auto',
        boxShadow: isHovering 
          ? `0 30px 60px ${project.colors.primary}60` 
          : isCenter 
            ? `0 25px 50px rgba(0,0,0,0.35)` 
            : `0 15px 30px rgba(0,0,0,0.2)`,
      }}
    >
      <CardInner 
        project={project} 
        glare={glare} 
        isHovering={isHovering} 
        index={index} 
        total={projectsList.length} 
      />
    </div>
  );
};

// Sub-component for Card Visual Content
const CardInner = ({ project, glare, isHovering, index, total }) => {
  return (
    <div 
      className="w-full h-full rounded-2xl border-[6px] sm:border-8 border-white bg-white relative flex flex-col overflow-hidden"
      style={{ transform: 'translateZ(1px)' }}
    >
      {/* Holographic Glare Effect */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%)`,
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
          opacity: isHovering ? 0.65 : 0
        }}
      />

      {/* Card Content Top Gradient */}
      <div className="h-[46%] relative p-4 sm:p-5 flex flex-col rounded-t-lg overflow-hidden shrink-0" style={{ background: project.colors.gradient }}>
        <div className="flex items-start justify-between relative z-10 mb-2">
          <span className="font-body text-[10px] font-bold tracking-widest text-white uppercase bg-black/25 px-2.5 py-1 rounded-md backdrop-blur-sm">
            {project.category}
          </span>
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide relative z-10 leading-tight pr-2">
          {project.title}
        </h3>
        
        {/* Card Image Floating Overlay */}
        <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 -translate-x-1/2 w-[92%] aspect-video z-20 transition-transform duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.45)] group-hover:scale-105">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-xl border-[2px] border-white/60 bg-gray-900"
          />
        </div>
      </div>

      {/* Card Content Bottom White */}
      <div className="h-[54%] bg-white px-4 sm:px-5 pb-4 pt-16 sm:pt-20 flex flex-col justify-between relative z-10 rounded-b-lg">
        <p className="font-body text-xs text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tools.slice(0, 3).map((tool, i) => (
            <span key={i} className="font-body text-[9px] font-bold px-2 py-0.5 rounded bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] border border-gray-100">
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="font-body text-[9px] font-bold px-1.5 py-0.5 rounded text-gray-400">
              +{project.tools.length - 3}
            </span>
          )}
        </div>

        <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
          <span className="font-body text-[10px] font-bold text-gray-400">#00{index + 1}/00{total}</span>
          <span className="font-body text-xs font-bold text-[var(--color-royal)] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Tap to Open <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
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

  // Esc key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentImg((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setCurrentImg((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ animation: 'projFadeIn 0.3s ease forwards' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(5, 10, 30, 0.75)', backdropFilter: 'blur(10px)' }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[2rem] flex flex-col z-10"
        style={{
          background: '#FFFFFF',
          boxShadow: `0 40px 100px rgba(0,0,0,0.5)`,
          animation: 'projSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Top Hero Section (Image & Basic Info) */}
        <div
          className="relative w-full aspect-[16/10] sm:aspect-[21/9] flex items-center justify-center overflow-hidden shrink-0 group"
          style={{ background: c.gradient }}
        >
          {/* Background Decor */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-25 mix-blend-overlay pointer-events-none" 
            style={{ backgroundImage: `radial-gradient(circle at 20% 30%, white 0%, transparent 70%)` }} 
          />
          
          {/* The Mockup / Screenshot Showcase */}
          <div className="relative z-10 w-full h-full p-4 sm:p-8 md:p-12 flex justify-center items-center">
            <div className="w-full max-w-4xl h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-950/60 backdrop-blur-md border border-white/20 relative group/mockup flex items-center justify-center">
              <img 
                src={images[currentImg]} 
                alt={project.title} 
                className="w-full h-full object-contain transition-opacity duration-300" 
              />
              
              {/* Gallery Controls */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setCurrentImg((prev) => (prev > 0 ? prev - 1 : images.length - 1)); }}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2.5 rounded-full opacity-80 sm:opacity-0 group-hover/mockup:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setCurrentImg((prev) => (prev < images.length - 1 ? prev + 1 : 0)); }}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2.5 rounded-full opacity-80 sm:opacity-0 group-hover/mockup:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
                    {images.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === currentImg ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Floating Title Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none z-20" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-30 pr-16">
            <span className="inline-block font-body text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white mb-2 sm:mb-3 border border-white/20">
              {project.category}
            </span>
            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl text-white tracking-wider leading-none">
              {project.title}
            </h3>
            <p className="font-body text-xs sm:text-base text-white/80 mt-2 max-w-xl line-clamp-2 sm:line-clamp-none">
              {project.subtitle}
            </p>
          </div>

          {/* Close Button Inside Hero */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full z-[100] flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 cursor-pointer text-white bg-black/40 backdrop-blur-md border border-white/30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Content Section */}
        <div className="p-6 sm:p-10 md:p-14 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14">
            
            {/* Left Column: Description & Process */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-6 rounded-full" style={{ background: c.primary }} />
                  <h4 className="font-body text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                    Abstract & Process
                  </h4>
                </div>
                <p className="font-body text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)] mb-6">
                  {project.description}
                </p>
                <div className="p-6 rounded-2xl border border-gray-100" style={{ background: `${c.accent50}60` }}>
                  <p className="font-body text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)] italic">
                    "{project.brief}"
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-body text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5" style={{ color: c.primary }} />
                  Core Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.features.map((feat, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3.5 p-4 rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ background: c.primary }}>
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-body text-xs sm:text-sm font-semibold text-[var(--color-text-primary)]">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Stack & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-10">
              {/* Tech Stack */}
              <div>
                <h4 className="font-body text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
                  <Wrench className="w-5 h-5" style={{ color: c.primary }} />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="font-body text-xs sm:text-sm font-bold px-4 py-2 rounded-xl border border-gray-200 text-[var(--color-text-secondary)] hover:border-[var(--color-royal)] hover:text-[var(--color-royal)] transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="pt-8 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row items-center gap-3.5">
                  <a
                    href={project.demoLink}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 font-body text-sm font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    style={{ background: c.gradient, color: '#fff', boxShadow: `0 12px 24px ${c.primary}35` }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Launch Project
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 font-body text-sm font-bold px-6 py-4 rounded-xl border-2 transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)' }}
                  >
                    <Code className="w-4 h-4" />
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('deck'); // 'deck' or 'grid'
  const [detailProject, setDetailProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation for card deck
  useEffect(() => {
    if (packState !== 'opened' || detailProject !== null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : projectsList.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev < projectsList.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [packState, detailProject]);

  const handleOpenPack = () => {
    if (packState !== 'sealed') return;
    setPackState('opening');
    setTimeout(() => {
      setPackState('opened');
    }, 1100);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projectsList.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < projectsList.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <section
        id="projects"
        className="section-fade py-20 sm:py-32 overflow-hidden relative flex flex-col items-center"
        style={{ background: 'var(--color-royal)', minHeight: '100vh' }}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Header Texts */}
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-16 relative z-30 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[var(--color-royal-100)] font-body text-xs font-bold tracking-widest uppercase mb-4 border border-white/15 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" /> Curated Works
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-white">
            PROJECT SHOWCASE
          </h2>
          <p className="mt-4 font-body text-white/80 max-w-xl mx-auto text-sm sm:text-base">
            {packState === 'sealed' 
              ? "Klik Booster Pack di bawah ini untuk membuka koleksi 6 proyek pilihan saya."
              : "Jelajahi kartu 3D di bawah ini atau ganti mode tampilan untuk melihat seluruh proyek."}
          </p>

          {/* View Mode Switcher (Visible after opening) */}
          {packState === 'opened' && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="bg-black/25 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 flex items-center gap-1">
                <button
                  onClick={() => setViewMode('deck')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-body text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'deck' 
                      ? 'bg-white text-[var(--color-royal)] shadow-lg' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Disc3 className="w-3.5 h-3.5" />
                  3D Deck Fan
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-body text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'grid' 
                      ? 'bg-white text-[var(--color-royal)] shadow-lg' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  Grid View ({projectsList.length})
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── MODE 1: Booster Pack / 3D Deck Fan Scene ── */}
        {viewMode === 'deck' && (
          <div className="relative w-full max-w-[1300px] mx-auto h-[620px] sm:h-[720px] perspective-1000 flex items-center justify-center mt-2 sm:mt-6">
            
            {/* The 3D Cards */}
            <div className="absolute inset-0">
              {projectsList.map((project, idx) => (
                <PokeCard 
                  key={idx} 
                  project={project} 
                  index={idx} 
                  activeIndex={activeIndex}
                  isOpened={packState === 'opened' || packState === 'opening'}
                  isMobile={isMobile}
                  viewMode="deck"
                  onClick={() => {
                    if (packState !== 'opened') return;
                    if (idx === activeIndex) {
                      setDetailProject(idx);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                />
              ))}
            </div>

            {/* Left & Right Deck Navigation Controls (When Opened) */}
            {packState === 'opened' && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Project"
                  className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-[var(--color-royal)] backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Project"
                  className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-[var(--color-royal)] backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Deck Card Indicators at the bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                  {projectsList.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Jump to ${p.title}`}
                      className={`transition-all duration-300 cursor-pointer rounded-full ${
                        idx === activeIndex
                          ? 'w-8 h-2.5 bg-white shadow-md'
                          : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* The Booster Pack (When Sealed or Opening) */}
            {packState !== 'opened' && (
              <div 
                role="button"
                onClick={handleOpenPack}
                className={`relative z-40 w-[290px] sm:w-[340px] aspect-[2/3.2] cursor-pointer transition-all ${
                  packState === 'opening' ? 'pointer-events-none' : 'hover:scale-105 hover:-translate-y-2'
                }`}
                style={{
                  animation: packState === 'opening' ? 'packShake 0.4s ease-in-out forwards' : 'float 6s ease-in-out infinite'
                }}
              >
                {/* Booster Pack Shadow & Glow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/50 blur-2xl rounded-[100%]" />
                <div className="absolute inset-0 bg-blue-300/30 blur-[80px] rounded-[30px] opacity-30 -z-10" />

                {/* Top Flap (tears off) */}
                <div 
                  className="absolute top-0 left-0 w-full h-[25%] bg-[var(--color-royal-dark)] rounded-t-2xl overflow-hidden shadow-inner flex flex-col justify-end border-t border-l border-r border-white/20"
                  style={{
                    transformOrigin: 'bottom',
                    transform: packState === 'opening' ? 'translateY(-100px) rotateX(25deg)' : 'none',
                    opacity: packState === 'opening' ? 0 : 1,
                    transition: 'all 0.6s cubic-bezier(0.8, 0, 0.2, 1) 0.25s',
                  }}
                >
                  {/* Flap ridges */}
                  <div className="absolute top-0 left-0 w-full flex justify-between px-2 py-1">
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="w-1.5 h-4 bg-white/20 rounded-full" />
                    ))}
                  </div>
                  <div className="p-4 text-center pb-2">
                    <div className="w-16 h-1 mx-auto bg-white/40 rounded-full mb-2" />
                    <span className="font-display text-white/70 text-xs tracking-widest">TEAR HERE</span>
                  </div>
                </div>

                {/* Main Pack Body */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[75%] rounded-b-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center p-8 text-center border border-white/15"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-royal-dark) 0%, #162047 100%)',
                    transform: packState === 'opening' ? 'translateY(100px) scale(0.95)' : 'none',
                    opacity: packState === 'opening' ? 0 : 1,
                    transition: 'all 0.8s cubic-bezier(0.8, 0, 0.2, 1) 0.35s',
                  }}
                >
                  {/* Shiny Foil Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/35 to-white/0 -rotate-45 translate-x-[-100%] animate-[glare_3.5s_infinite]" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 shadow-lg">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-white tracking-widest leading-none mb-2">
                    PORTFOLIO 
                    <br/> 
                    <span className="text-[var(--color-royal-100)]">EDITION</span>
                  </h3>
                  <p className="font-body text-[11px] font-bold text-white tracking-widest uppercase mt-4 border border-white/30 px-5 py-2 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white hover:text-[var(--color-royal)] transition-colors">
                    Click to Open Pack
                  </p>
                  <div className="absolute bottom-4 font-body text-[10px] text-white/50 tracking-widest font-semibold">
                    CONTAINS {projectsList.length} RARE PROJECTS
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ── MODE 2: Full Grid Showcase (All 6 Cards at once) ── */}
        {viewMode === 'grid' && packState === 'opened' && (
          <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {projectsList.map((project, idx) => (
                <PokeCard 
                  key={idx} 
                  project={project} 
                  index={idx} 
                  activeIndex={idx}
                  isOpened={true}
                  isMobile={isMobile}
                  viewMode="grid"
                  onClick={() => setDetailProject(idx)}
                />
              ))}
            </div>
          </div>
        )}

      </section>

      {/* ═══════ Detail Modal ═══════ */}
      {detailProject !== null && (
        <DetailModal 
          project={projectsList[detailProject]} 
          onClose={() => setDetailProject(null)} 
        />
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes glare {
          0% { transform: translateX(-120%) rotate(-45deg); opacity: 0; }
          25% { transform: translateX(200%) rotate(-45deg); opacity: 0.5; }
          100% { transform: translateX(200%) rotate(-45deg); opacity: 0; }
        }
        @keyframes packShake {
          0%, 100% { transform: translateX(0) scale(1); }
          25% { transform: translateX(-8px) scale(0.98); }
          50% { transform: translateX(8px) scale(1.02); }
          75% { transform: translateX(-8px) scale(0.98); }
        }
        .perspective-1000 {
          perspective: 1200px;
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
