import React from 'react';

export default function Logo({ size = "default", onClick }) {
  const isLarge = size === "large";
  
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer group select-none"
    >
      {/* Saffron Flame Emblem */}
      <div className="relative flex items-center justify-center">
        <div className={`rounded-2xl bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 border border-orange-200 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-orange-200/60 ${isLarge ? 'w-12 h-12 rounded-2xl' : 'w-10 h-10'}`}>
          <svg 
            viewBox="0 0 24 24" 
            className={`text-orange-600 transition-all duration-300 group-hover:text-orange-500 ${isLarge ? 'w-6 h-6' : 'w-5 h-5'}`}
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.75"
          >
            {/* Stylized Saffron Flame Motif */}
            <path 
              d="M12 2.5C9.8 6.2 7.5 9.5 8.8 13.8C9.7 16.7 12 17.6 12 17.6C12 17.6 14.3 16.7 15.2 13.8C16.5 9.5 14.2 6.2 12 2.5Z" 
              fill="#EA580C" 
              fillOpacity="0.25"
              stroke="#EA580C"
            />
            <circle cx="12" cy="13.5" r="1.5" fill="#F59E0B" />
          </svg>
        </div>
      </div>

      {/* High-Contrast Editorial Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-serif tracking-[0.2em] font-bold text-stone-900 group-hover:text-orange-600 transition-colors leading-none ${isLarge ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
            AROMA
          </span>
          <span className="text-[10px] tracking-[0.16em] uppercase font-semibold px-2 py-0.5 rounded-full border border-orange-200/90 text-orange-800 bg-orange-100/70 shadow-2xs">
            Jammu
          </span>
        </div>
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-600 font-semibold mt-1">
          Multi Cuisine • Channi Himmat
        </span>
      </div>
    </div>
  );
}
