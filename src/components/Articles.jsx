import React from 'react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

/* ──────────────────────────────────────────
   ARTICLES / LATEST INSIGHTS
   A clean grid displaying the latest blog
   posts or design thoughts.
   ────────────────────────────────────────── */

const articlesList = [
  {
    title: 'The Evolution of Generative AI in Development',
    excerpt: 'Exploring how modern LLMs and generative tools are reshaping the way developers write, review, and deploy code.',
    category: 'AI Research',
    date: 'Apr 12, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Building Scalable React Architectures',
    excerpt: 'A comprehensive guide on maintaining clean codebase structures for large-scale web applications using modern React patterns.',
    category: 'Web Dev',
    date: 'Mar 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Micro-Interactions that Matter in 2026',
    excerpt: 'Why subtle animations and feedback loops are the key to premium user experiences and how to implement them easily.',
    category: 'UI/UX Design',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];

const Articles = () => {
  return (
    <section id="articles" className="section-fade py-20 sm:py-32 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[var(--color-royal-50)] to-transparent rounded-full opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-[var(--color-royal)]">
              LATEST INSIGHTS
            </h2>
            <div className="h-[3px] w-20 rounded-full mt-4 bg-[var(--color-royal)]" />
            <p className="mt-6 text-[var(--color-text-secondary)] font-body max-w-lg">
              Perspektif, eksperimen, dan cerita dari perjalanan saya mengeksplorasi teknologi dan desain secara mendalam.
            </p>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 font-body font-bold text-[var(--color-royal)] hover:text-[var(--color-royal-dark)] transition-colors group"
          >
            Lihat Semua Artikel
            <span className="w-8 h-8 rounded-full bg-[var(--color-royal-50)] flex items-center justify-center group-hover:bg-[var(--color-royal)] group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesList.map((article, idx) => (
            <a 
              key={idx} 
              href={article.link}
              className="group block rounded-3xl overflow-hidden hover-lift bg-white border border-[var(--color-border-light)]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-[var(--color-royal)]">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-medium text-[var(--color-text-muted)] mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border-light)]" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-display text-2xl tracking-wide mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-royal)] transition-colors">
                  {article.title}
                </h3>
                
                <p className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)] line-clamp-3 mb-6">
                  {article.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 font-body text-sm font-bold text-[var(--color-royal)]">
                  Baca Selengkapnya
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Articles;
