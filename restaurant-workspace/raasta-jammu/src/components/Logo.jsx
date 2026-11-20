import React from 'react';

export default function Logo({ size = 'default', showTagline = true }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <a href="#" className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-0.5 sm:p-1 min-w-0 max-w-full">
      {/* Rhythm Vinyl & Wave Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${
        isSmall ? 'w-8 h-8 sm:w-9 sm:h-9' : isLarge ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-9 h-9 sm:w-11 sm:h-11'
      } rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 border border-orange-300 shadow-sm group-hover:shadow-[0_0_20px_0_rgba(249,115,22,0.4)] transition-all duration-300`}>
        {/* Animated subtle warm pulse */}
        <div className="absolute inset-0 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors" />

        {/* SVG Rhythm Wave & Vinyl Groove */}
        <svg
          viewBox="0 0 40 40"
          className={`${isSmall ? 'w-5 h-5 sm:w-6 sm:h-6' : isLarge ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-6 h-6 sm:w-7 sm:h-7'} text-white transition-transform duration-500 group-hover:rotate-45 shrink-0`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Vinyl concentric groove circles */}
          <circle cx="20" cy="20" r="18" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" />
          <circle cx="20" cy="20" r="13" stroke="#DCFCE7" strokeWidth="1.2" strokeDasharray="3 2" strokeOpacity="0.8" />
          <circle cx="20" cy="20" r="8" stroke="#FEE2E2" strokeWidth="1.2" strokeOpacity="0.7" />
          {/* Center spindle */}
          <circle cx="20" cy="20" r="3.5" fill="#FFFFFF" />
          <circle cx="20" cy="20" r="1.5" fill="#C2410C" />

          {/* Soundwave stylization overlay */}
          <path
            d="M7 20C7 20 10 13 13 20C16 27 18 10 20 20C22 30 25 15 28 20C31 25 33 20 33 20"
            stroke="#FEF08A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-95"
          />
        </svg>

        {/* Emerald Reggae Spark */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <span className={`font-['Syne'] font-extrabold tracking-tight uppercase ${
            isSmall ? 'text-base sm:text-lg' : isLarge ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          } text-stone-900 group-hover:text-orange-600 transition-colors shrink-0`}>
            Raasta
          </span>
          <span className="text-[9px] sm:text-[10px] font-['JetBrains_Mono'] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-md bg-orange-100 text-orange-700 border border-orange-200 shrink-0">
            Jammu
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-wider font-semibold text-stone-500 group-hover:text-stone-700 transition-colors hidden sm:block truncate">
            Bohemian Cafe &bull; Rhythm Lounge
          </span>
        )}
      </div>
    </a>
  );
}
