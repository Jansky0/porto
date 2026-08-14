import React, { useState, useEffect } from 'react';

const blocks = [
  { cmd: "System.init({ setup: 'IdeaPad Gaming 3' });", output: "// ...OK" },
  { cmd: "Skills.load(['React', 'PHP', 'Tailwindv4', 'UX']);", output: "// ...LOADED" },
  { cmd: "Mission.state = 'Turning curiosity into code.';", output: "// ...SET" },
  { cmd: "System.run('Risk of Rain 2');", output: "// ...JUST KIDDING! -> npm run dev" }
];

const TerminalSimulator = () => {
  const [text, setText] = useState('');
  const [blockIndex, setBlockIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let timeout;
    const currentBlock = blocks[blockIndex];

    if (isTyping) {
      if (text.length < currentBlock.cmd.length) {
        timeout = setTimeout(() => {
          setText(currentBlock.cmd.slice(0, text.length + 1));
        }, 40 + Math.random() * 40); // Typewriter speed
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setShowOutput(true);
          timeout = setTimeout(() => {
            // Prepare next block
            setShowOutput(false);
            setText('');
            setBlockIndex((prev) => (prev + 1) % blocks.length);
            setIsTyping(true);
          }, 2500); // Wait before clearing
        }, 500); // Wait before showing output
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isTyping, blockIndex]);

  // Syntax Highlighting
  const renderCode = (codeStr) => {
    const parts = codeStr.split(/('.*?')/);
    return parts.map((part, i) => {
      if (part.startsWith("'") && part.endsWith("'")) {
        return <span key={i} className="text-purple-400">{part}</span>;
      }
      
      const keywords = ['System.init', 'Skills.load', 'Mission.state', 'System.run'];
      let matched = false;
      let out = [];

      for (const kw of keywords) {
        if (part.includes(kw)) {
          const idx = part.indexOf(kw);
          out.push(<span key={"1-"+i}>{part.slice(0, idx)}</span>);
          out.push(<span key={"2-"+i} className="text-teal-400">{kw}</span>);
          out.push(<span key={"3-"+i}>{part.slice(idx + kw.length)}</span>);
          matched = true;
          break;
        }
      }
      
      return matched ? out : <span key={i} className="text-slate-300">{part}</span>;
    });
  };

  return (
    <div className="w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500 relative group z-10 lg:ml-auto">
      {/* Outer Pulse Glow matching purple-to-teal gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
      
      {/* Terminal Container */}
      <div className="relative rounded-2xl bg-slate-900 border border-slate-700 flex flex-col overflow-hidden h-[280px] hover-glitch">
        
        {/* Terminal Header */}
        <div className="h-10 border-b border-slate-700 flex items-center px-4 space-x-2 bg-slate-800/80">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <div className="ml-2 text-xs text-slate-500 font-mono opacity-60 flex-1 text-center pr-12">bash - andika@ideapad:~</div>
        </div>
        
        {/* Terminal Body */}
        <div className="flex-1 p-6 flex flex-col items-start justify-center text-left relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-900 font-mono text-[13px] sm:text-sm leading-relaxed">
          
          {/* Active Command Line */}
          <div className="w-full">
            <span className="text-teal-500 font-bold mr-2">$</span>
            {renderCode(text)}
            <span className={`inline-block w-2 h-4 bg-slate-400 ml-1 translate-y-1 ${!isTyping && !showOutput ? 'animate-pulse' : ''} ${isTyping ? 'opacity-100' : ''} ${showOutput ? 'hidden' : ''}`}></span>
          </div>

          {/* Output Line */}
          {showOutput && (
            <div className="w-full mt-3 text-slate-500">
              {blocks[blockIndex].output}
            </div>
          )}

          {/* Waiting Cursor after output */}
          {showOutput && (
             <div className="w-full mt-2">
               <span className="text-teal-500 font-bold mr-2">$</span>
               <span className="animate-pulse inline-block w-2 h-4 bg-slate-400 ml-1 translate-y-1"></span>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalSimulator;
