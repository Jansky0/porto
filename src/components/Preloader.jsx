import React, { useState, useEffect } from 'react';

const words = [
  "INITIALIZING",
  "NEURAL_NET_V2",
  "DATA_PARSING",
  "CONSTRUCTING_UI",
  "ESTABLISHING",
  "SYNC_PROTOCOL",
  "DESIGN_SYSTEM",
  "ANDIKA_RAMADHAN",
  "SYSTEM_READY"
];

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    let time = 0;
    const duration = 2400; // 2.4 seconds loading
    const intervalTime = 40; // High frequency for smooth jitter

    const timer = setInterval(() => {
      time += intervalTime;
      
      // Calculate progress with a jitter/glitch effect for the number
      const linearProgress = time / duration;
      const jitter = (Math.random() * 4) - 2; 
      const currentProgress = Math.min(100, Math.floor(linearProgress * 100) + (linearProgress < 0.95 ? jitter : 0));
      
      setProgress(currentProgress >= 100 ? 100 : Math.max(0, Math.floor(currentProgress)));

      // Sync word index with progress
      const currentWordIndex = Math.min(
        words.length - 1,
        Math.floor(linearProgress * words.length)
      );
      setWordIndex(currentWordIndex);

      // Finish loading
      if (time >= duration) {
        clearInterval(timer);
        setProgress(100);
        setWordIndex(words.length - 1);
        
        // Brief pause on "SYSTEM_READY" before shutter opens
        setTimeout(() => {
          setIsLoaded(true);
          document.body.style.overflow = 'auto'; // Release scroll
          
          // Wait for 5-column alternating exit animation 
          setTimeout(() => setShouldUnmount(true), 1500);
        }, 500);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (shouldUnmount) return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none">
      
      {/* 5 Alternating Columns Background (Shutter Effect) */}
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <div 
            key={i}
            className="flex-1 h-full bg-[var(--color-royal-dark)] relative"
            style={{
              // Alternating Slide Up/Down perfectly matching the "selang-seling" concept
              transform: isLoaded 
                ? (i % 2 === 0 ? 'translateY(-100%)' : 'translateY(100%)')
                : 'translateY(0)',
              transition: 'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)',
              transitionDelay: `${i * 0.08}s` // Staggered opening
            }}
          >
             {/* Inner column borders for premium architectural feel */}
             <div className="absolute inset-0 border-r border-white/5" />
          </div>
        ))}
      </div>

      {/* Content wrapper */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out"
        style={{ 
          opacity: isLoaded ? 0 : 1,
          transform: isLoaded ? 'scale(1.1)' : 'scale(1)' 
        }}
      >
        {/* Massive Center Word / Slot Machine Ticker */}
        <div className="h-16 sm:h-24 md:h-32 overflow-hidden mb-8 sm:mb-12 relative w-full flex justify-center">
          <div 
            className="flex flex-col transition-transform duration-150 ease-out"
            style={{ transform: `translateY(calc(-${wordIndex} * 100% / ${words.length}))` }}
          >
            {words.map((w, i) => (
              <h1 
                key={i} 
                className={`h-16 sm:h-24 md:h-32 flex items-center justify-center font-display text-4xl sm:text-6xl md:text-8xl tracking-widest text-center uppercase ${
                  i === words.length - 1 ? 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'text-transparent'
                }`}
                style={{ 
                  WebkitTextStroke: i === words.length - 1 ? 'none' : '2px rgba(255,255,255,0.8)' 
                }}
              >
                {w}
              </h1>
            ))}
          </div>
        </div>
        
        {/* Tech Progress Bar */}
        <div className="flex items-center gap-4 sm:gap-6 w-full max-w-sm px-8">
           <span className="font-display text-2xl sm:text-4xl text-[var(--color-royal-100)] w-16 text-right">
             {progress}%
           </span>
           <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
             <div 
               className="absolute top-0 left-0 h-full bg-[var(--color-royal-100)] shadow-[0_0_15px_var(--color-royal-100)] transition-all duration-75"
               style={{ width: `${progress}%` }}
             />
           </div>
        </div>

        {/* Floating Abstract details */}
        <div className="absolute bottom-8 flex justify-between w-full px-8 md:px-16 font-body text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.3em]">
           <span>CORE_SYS/V.2.0.26</span>
           <span className="hidden sm:block">PROCESS_ID: {Math.floor(Math.random() * 9000) + 1000}</span>
        </div>
      </div>

    </div>
  );
};

export default Preloader;
