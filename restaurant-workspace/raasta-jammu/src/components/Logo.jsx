import React from 'react';

export default function Logo({ size = 'default', showTagline = true }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1">
      {/* Rhythm Vinyl & Wave Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${
        isSmall ? 'w-9 h-9' : isLarge ? 'w-14 h-14' : 'w-11 h-11'
      } rounded-xl bg-gradient-to-br from-[#1E2220] via-[#161917] to-[#0F1110] border border-amber-500/30 group-hover:border-amber-400/70 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)] group-hover:shadow-[0_0_22px_0_rgba(245,158,11,0.5)]`}>
        {/* Animated ambient pulse glow */}
        <div className="absolute inset-0 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors" />

        {/* SVG Rhythm Wave & Vinyl Groove */}
        <svg
          viewBox="0 0 40 40"
          className={`${isSmall ? 'w-6 h-6' : isLarge ? 'w-9 h-9' : 'w-7 h-7'} text-amber-400 transition-transform duration-500 group-hover:rotate-45`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Vinyl concentric groove circles */}
          <circle cx="20" cy="20" r="18" stroke="#F59E0B" strokeWidth="1.2" strokeOpacity="0.4" />
          <circle cx="20" cy="20" r="13" stroke="#10B981" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.6" />
          <circle cx="20" cy="20" r="8" stroke="#F43F5E" strokeWidth="1.2" strokeOpacity="0.5" />
          {/* Center spindle */}
          <circle cx="20" cy="20" r="3.5" fill="#F59E0B" />
          <circle cx="20" cy="20" r="1.5" fill="#0F1110" />

          {/* Soundwave stylization overlay */}
          <path
            d="M7 20C7 20 10 13 13 20C16 27 18 10 20 20C22 30 25 15 28 20C31 25 33 20 33 20"
            stroke="#FBBF24"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />
        </svg>

        {/* Emerald Reggae Spark */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0F1110] animate-pulse" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-['Syne'] font-extrabold tracking-tight uppercase ${
            isSmall ? 'text-lg' : isLarge ? 'text-2xl' : 'text-xl'
          } text-zinc-100 group-hover:text-amber-400 transition-colors`}>
            Raasta
          </span>
          <span className="text-[10px] font-['JetBrains_Mono'] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
            Jammu
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-wider font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
            Bohemian Cafe &bull; Rhythm Lounge
          </span>
        )}
      </div>
    </a>
  );
}
