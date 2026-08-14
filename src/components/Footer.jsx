import React from 'react';
import { Mail, MessageCircle, Briefcase, Code2, ArrowUpRight } from 'lucide-react';

/* ──────────────────────────────────────────
   FOOTER — Massive CTA Style
   Besar, berani, dan memancing user untuk klik
   ────────────────────────────────────────── */

const contactItems = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: 'andikaramadhan@mail.com',
    href: 'mailto:andikaramadhan@mail.com',
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    label: '+62 812 3456 7890',
    href: 'tel:+6281234567890',
  },
];

const socialItems = [
  { label: 'LinkedIn', href: '#', icon: <Briefcase className="w-4 h-4" /> },
  { label: 'GitHub', href: '#', icon: <Code2 className="w-4 h-4" /> },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" data-cursor="dark" className="relative overflow-hidden" style={{ background: 'var(--color-royal)' }}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-10 relative z-10">
        
        {/* ── MASSIVE CTA SECTION ── */}
        <div className="flex flex-col items-center text-center mb-24">
          <p className="font-body text-sm sm:text-base font-bold tracking-[0.3em] uppercase text-[var(--color-royal-100)] mb-6">
            Punya ide proyek menarik?
          </p>
          
          <h2 className="font-display text-[15vw] sm:text-[180px] leading-[0.85] text-white tracking-widest mb-12 hover:scale-[1.02] transition-transform duration-500 cursor-default">
            LET'S WORK
            <br />
            TOGETHER
          </h2>

          <a 
            href="mailto:andikaramadhan@mail.com"
            className="group relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white text-[var(--color-royal)] font-display text-2xl sm:text-3xl tracking-wider transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] overflow-hidden"
          >
            {/* Magnetic Hover Background Fill */}
            <div className="absolute inset-0 bg-[var(--color-royal-100)] translate-y-[100%] rounded-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <span className="relative z-10 flex items-center gap-2">
              SAY HELLO
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* ── FOOTER LINKS & COPYRIGHT ── */}
        <div className="pt-10 border-t border-white/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Email & Phone */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {contactItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group flex items-center gap-2 font-body text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  {item.icon}
                </div>
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            {socialItems.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                className="group flex items-center gap-2 font-body text-sm font-bold tracking-wider uppercase text-white/70 hover:text-white transition-colors"
              >
                {item.label}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/40 font-bold tracking-widest uppercase">
            &copy; {currentYear} ANDIKA RAMADHAN.
          </p>
          <p className="font-body text-xs text-white/40 font-bold tracking-widest uppercase">
            CRAFTED WITH PASSION IN 2026.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
