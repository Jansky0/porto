import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/* ──────────────────────────────────────────
   MAIN NAVBAR COMPONENT (Floating Pill & Fullscreen Menu)
   ────────────────────────────────────────── */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home', number: '01' },
    { name: 'About', href: '#about', number: '02' },
    { name: 'Skills', href: '#skills', number: '03' },
    { name: 'Projects', href: '#projects', number: '04' },
    { name: 'Contact', href: '#contact', number: '05' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const matched = navLinks.find((l) => l.href === `#${id}`);
            if (matched) setActiveSection(matched.name);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // navLinks are now defined higher up

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'pt-4 sm:pt-6' : 'pt-6 sm:pt-8'
        }`}
      >
        {/* Floating Pill Design */}
        <div 
          className={`mx-auto transition-all duration-500 flex items-center justify-between ${
            isScrolled 
              ? 'max-w-4xl px-6 sm:px-8 py-3 bg-white/80 backdrop-blur-xl border border-[var(--color-border-light)] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)]' 
              : 'max-w-[1400px] px-6 sm:px-10 lg:px-16 py-0 bg-transparent'
          }`}
        >
          {/* Logo */}
          <a 
            href="#home" 
            className="font-display text-2xl tracking-widest relative z-50 transition-colors" 
            style={{ color: mobileMenuOpen ? '#ffffff' : 'var(--color-royal)' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            JANSKY.
          </a>

          {/* Desktop Navigation (Segmented Tab Style) */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* The Floating Tab Container */}
            <div className="relative flex items-center p-1.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] border border-transparent transition-all duration-300" 
                 style={{ background: isScrolled ? 'var(--color-surface-muted)' : 'var(--color-surface-alt)' }}>
              
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    // Biarkan anchor scroll alami, tapi kita animasi pill-nya duluan biar responsif
                    setActiveSection(link.name);
                  }}
                  className={`relative z-10 w-[90px] py-2.5 text-center font-body text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${
                    activeSection === link.name ? 'text-white' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-royal)]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Sliding Active Pill Highlight */}
              <div 
                className="absolute top-1.5 bottom-1.5 rounded-full pointer-events-none transition-all duration-500"
                style={{
                  width: '90px',
                  transform: `translateX(${Math.max(navLinks.findIndex(l => l.name === activeSection), 0) * 90}px)`,
                  background: 'linear-gradient(135deg, var(--color-royal), var(--color-royal-dark))',
                  boxShadow: '0 4px 12px rgba(58,79,159,0.3)',
                  transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              />
            </div>

            {/* CTA Button */}
            <div className="ml-2">
              <a
                href="#contact"
                className="font-body text-[13px] font-bold uppercase tracking-widest px-6 py-3 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-royal)]/30 hover:-translate-y-1 block ring-2 ring-transparent hover:ring-[var(--color-royal-100)] ring-offset-2 ring-offset-[var(--color-surface)]"
                style={{ background: 'var(--color-text-primary)' }}
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full outline-none"
            style={{ 
              background: mobileMenuOpen ? 'transparent' : (isScrolled ? 'transparent' : 'var(--color-surface-alt)'),
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span 
              className="w-6 h-0.5 transition-all duration-300 ease-in-out" 
              style={{ 
                background: mobileMenuOpen ? '#ffffff' : 'var(--color-text-primary)',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' 
              }} 
            />
            <span 
              className="w-6 h-0.5 transition-all duration-300 ease-in-out" 
              style={{ 
                background: mobileMenuOpen ? '#ffffff' : 'var(--color-text-primary)',
                opacity: mobileMenuOpen ? 0 : 1 
              }} 
            />
            <span 
              className="w-6 h-0.5 transition-all duration-300 ease-in-out" 
              style={{ 
                background: mobileMenuOpen ? '#ffffff' : 'var(--color-text-primary)',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                width: mobileMenuOpen ? '24px' : '16px' // Half width when idle
              }} 
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Overlay Menu */}
      <div 
        className={`fixed inset-0 z-40 flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          background: 'var(--color-royal)',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
        }}
      >
        <div className="px-10 flex flex-col gap-6 items-start w-full relative z-10">
          {navLinks.map((link, idx) => (
            <div 
              key={link.name} 
              className="overflow-hidden"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-5xl sm:text-7xl text-white tracking-widest hover:text-[var(--color-royal-100)] transition-colors flex items-end gap-4 group"
                style={{
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.6s cubic-bezier(0.76,0,0.24,1)',
                  transitionDelay: `${(idx * 0.05) + 0.2}s`
                }}
              >
                <span className="text-sm font-body font-bold text-white/50 mb-2 sm:mb-4 group-hover:text-[var(--color-royal-100)] transition-colors">
                  {link.number}
                </span>
                {link.name}
              </a>
            </div>
          ))}

          {/* Mobile Footer Area */}
          <div 
            className="mt-12 pt-12 border-t border-white/20 w-full flex flex-col gap-4 text-white/80 font-body text-sm"
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.6s'
            }}
          >
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
            <p className="mt-4 text-xs font-bold tracking-widest text-[var(--color-royal-100)] uppercase">
              Ready to work together?
            </p>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block mt-2 font-display text-4xl text-white underline decoration-2 underline-offset-8 decoration-white/30 hover:decoration-white transition-all"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

