import React from 'react';

export default function Logo({ size = "default", onClick }) {
  const isLarge = size === "large";
  
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer group select-none"
    >
      {/* Restrained Hairline Emblem */}
      <div className="relative flex items-center justify-center">
        <div className={`rounded-full bg-[#121214] border border-[#D4AF37]/40 flex items-center justify-center transition-colors duration-300 group-hover:border-[#D4AF37] ${isLarge ? 'w-11 h-11' : 'w-9 h-9'}`}>
          <svg 
            viewBox="0 0 24 24" 
            className={`text-[#D4AF37] transition-all duration-300 ${isLarge ? 'w-6 h-6' : 'w-4 h-4'}`}
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            {/* Stylized Saffron Flame / Royal Motif */}
            <path 
              d="M12 2.5C9.8 6.2 7.5 9.5 8.8 13.8C9.7 16.7 12 17.6 12 17.6C12 17.6 14.3 16.7 15.2 13.8C16.5 9.5 14.2 6.2 12 2.5Z" 
              fill="#D4AF37" 
              fillOpacity="0.2"
              stroke="#D4AF37"
            />
            <circle cx="12" cy="13.5" r="1.5" fill="#D4AF37" />
          </svg>
        </div>
      </div>

      {/* Editorial Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-serif tracking-[0.22em] font-medium text-zinc-100 group-hover:text-[#D4AF37] transition-colors leading-none ${isLarge ? 'text-2xl' : 'text-lg'}`}>
            AROMA
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase font-mono px-1.5 py-0.5 rounded border border-white/[0.08] text-zinc-400 bg-white/[0.02]">
            Jammu
          </span>
        </div>
        <span className="text-[9px] font-sans tracking-[0.22em] uppercase text-zinc-500 font-normal mt-1">
          Multi Cuisine • Channi Himmat
        </span>
      </div>
    </div>
  );
}
