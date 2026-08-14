import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

/* ──────────────────────────────────────────
   CUSTOM CURSOR COMPONENT
   Tema: Royal Blue (Elegan & Agency)
   Satu warna konsisten dengan White Halo untuk kontras
   ────────────────────────────────────────── */
const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide default cursor completely
    document.body.style.cursor = 'none';
    
    // Add custom styles for links to hide pointer but still be clickable
    const style = document.createElement('style');
    style.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target;
      // Cek apakah elemen bisa di-klik
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]')
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.head.removeChild(style);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inti Kursor (Titik Utama) */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] transition-transform"
        style={{ 
          background: 'var(--color-royal)',
          boxShadow: '0 0 0 2px white', // Halo putih supaya tidak nyaru di background gelap
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px) scale(${isPointer ? 0 : 1})`,
          transition: 'transform 100ms ease-out'
        }}
      />
      
      {/* Cincin Kursor (Aksen Luar) */}
      <div 
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]"
        style={{ 
          border: `1.5px solid var(--color-royal)`,
          boxShadow: '0 0 0 1.5px rgba(255,255,255,0.8), inset 0 0 0 1.5px rgba(255,255,255,0.8)', // Halo luar-dalam
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px) scale(${isPointer ? 1.4 : 1})`,
          transition: 'transform 0.25s ease-out, background-color 0.25s ease',
          backgroundColor: isPointer ? 'rgba(58, 79, 159, 0.15)' : 'transparent',
          backdropFilter: isPointer ? 'blur(2px)' : 'none'
        }}
      />
    </>
  );
};

function App() {
  // Intersection Observer for scroll-reveal (dengan MutationObserver untuk mencegah bug hilang saat Hot-Reload)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observeElements = () => {
      document.querySelectorAll('.section-fade').forEach((el) => observer.observe(el));
    };

    observeElements();

    // Pantau perubahan DOM (berguna saat file disimpan & Vite HMR memuat ulang komponen anak)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div style={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)' }}>
      {/* Premium Loading Screen */}
      <Preloader />
      
      {/* Hide Custom Cursor on really small mobile devices if we want, but keeping it ensures the agency feel */}
      <div className="hidden sm:block">
        <CustomCursor />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
