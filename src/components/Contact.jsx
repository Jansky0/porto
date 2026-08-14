import React from 'react';
import { Mail, Code, Briefcase, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const socials = [
    { icon: <Code className="w-5 h-5" />, label: 'GitHub', href: '#', hoverBg: 'var(--color-noir-50)', hoverColor: 'var(--color-noir-950)' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'LinkedIn', href: '#', hoverBg: '#0A66C2', hoverColor: '#fff' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Twitter', href: '#', hoverBg: 'var(--color-noir-50)', hoverColor: 'var(--color-noir-950)' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Remote / Global', href: null },
  ];

  return (
    <section
      id="contact"
      className="section-fade py-28 relative"
      style={{ background: 'var(--color-noir-950)' }}
    >
      <div className="absolute top-0 left-0 right-0 glow-line" />

      <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className="rounded-3xl border p-8 md:p-14 relative overflow-hidden"
          style={{
            background: 'var(--color-noir-800)',
            borderColor: 'var(--color-noir-700)',
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '300px',
              height: '300px',
              top: '-100px',
              right: '-100px',
              background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-amber-glow)' }} />
              <span
                className="font-body text-xs tracking-[0.3em] uppercase"
                style={{ color: 'var(--color-noir-400)' }}
              >
                Get in touch
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-noir-50)' }}>
              Let's Connect
            </h2>
            <p className="font-body text-base mb-10 max-w-md mx-auto" style={{ color: 'var(--color-noir-400)' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:hello@example.com"
              className="btn-magnetic group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide mb-12 transition-all duration-300"
              style={{
                background: 'var(--color-amber-glow)',
                color: 'var(--color-noir-950)',
              }}
            >
              <Mail className="w-4 h-4" />
              hello@example.com
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Social Links */}
            <div
              className="flex justify-center flex-wrap gap-6 items-center pt-8"
              style={{ borderTop: '1px solid var(--color-noir-700)' }}
            >
              {socials.map((social, idx) => (
                social.href ? (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className="p-3.5 rounded-full transition-all duration-300"
                      style={{
                        background: 'var(--color-noir-700)',
                        color: 'var(--color-noir-400)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = social.hoverBg;
                        e.currentTarget.style.color = social.hoverColor;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--color-noir-700)';
                        e.currentTarget.style.color = 'var(--color-noir-400)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {social.icon}
                    </div>
                    <span className="font-body text-xs" style={{ color: 'var(--color-noir-500)' }}>
                      {social.label}
                    </span>
                  </a>
                ) : (
                  <div key={idx} className="flex flex-col items-center gap-2 cursor-default">
                    <div
                      className="p-3.5 rounded-full"
                      style={{
                        background: 'var(--color-noir-700)',
                        color: 'var(--color-noir-400)',
                      }}
                    >
                      {social.icon}
                    </div>
                    <span className="font-body text-xs" style={{ color: 'var(--color-noir-500)' }}>
                      {social.label}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
