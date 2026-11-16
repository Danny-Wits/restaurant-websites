import React from 'react';

export default function Logo({ size = "default", onClick }) {
  const isLarge = size === "large";
  
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer group select-none"
    >
      {/* Saffron & Champagne Gold Flame Motif */}
      <div className="relative flex items-center justify-center">
        <div className={`rounded-full bg-gradient-to-tr from-[#E08E36] via-[#D4AF37] to-[#FFF3D1] p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(224,142,54,0.35)] ${isLarge ? 'w-12 h-12' : 'w-10 h-10'}`}>
          <div className="w-full h-full bg-[#0D0B0A] rounded-full flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className={`text-[#D4AF37] transition-all duration-300 group-hover:text-[#E6C35C] ${isLarge ? 'w-7 h-7' : 'w-5 h-5'}`}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.8"
            >
              {/* Stylized Saffron Flame / Royal Motif */}
              <path 
                d="M12 2C9.5 6 7 9.5 8.5 14C9.5 17 12 18 12 18C12 18 14.5 17 15.5 14C17 9.5 14.5 6 12 2Z" 
                fill="url(#goldGradient)" 
                stroke="none"
              />
              <path 
                d="M12 7C10.5 9.5 9 12 10 15C10.5 16.5 12 17 12 17C12 17 13.5 16.5 14 15C15 12 13.5 9.5 12 7Z" 
                fill="#0D0B0A" 
                stroke="none"
              />
              <circle cx="12" cy="14" r="1.5" fill="#D4AF37" />
              <defs>
                <linearGradient id="goldGradient" x1="8" y1="2" x2="16" y2="18" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E08E36" />
                  <stop offset="0.5" stopColor="#D4AF37" />
                  <stop offset="1" stopColor="#F8F6F0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif tracking-wider font-bold text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors leading-none ${isLarge ? 'text-2xl' : 'text-xl'}`}>
            AROMA
          </span>
          <span className="text-[10px] tracking-widest uppercase font-mono px-1.5 py-0.5 rounded bg-[#25201B] text-[#D4AF37] border border-[#D4AF37]/30">
            Jammu
          </span>
        </div>
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#8E867B] font-medium mt-1">
          Multi Cuisine • Channi Himmat
        </span>
      </div>
    </div>
  );
}
