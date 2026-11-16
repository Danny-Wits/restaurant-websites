import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Music,
  Coffee,
  Flame,
  Star,
  GraduationCap,
  Clock,
  Radio,
  Volume2
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function Hero({ onOpenReserve }) {
  // Determine current vibe based on Indian Standard Time (IST)
  const [currentVibe, setCurrentVibe] = useState('cafe'); // 'cafe' or 'lounge'
  const [userOverride, setUserOverride] = useState(null);

  useEffect(() => {
    const calculateISTVibe = () => {
      // Calculate current IST time
      const now = new Date();
      const utcOffset = now.getTimezoneOffset() * 60000;
      const istTime = new Date(now.getTime() + utcOffset + (5.5 * 3600000));
      const hours = istTime.getHours();

      // Day cafe: 11:00 to 17:00 (5 PM)
      // Night lounge: 17:00 to 23:30
      if (hours >= 17 && hours < 24) {
        return 'lounge';
      } else {
        return 'cafe';
      }
    };

    if (!userOverride) {
      setCurrentVibe(calculateISTVibe());
    }
  }, [userOverride]);

  const activeVibe = userOverride || currentVibe;
  const isLounge = activeVibe === 'lounge';

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[130px] pointer-events-none transition-all duration-1000 ${
          isLounge
            ? 'bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-emerald-500/15'
            : 'bg-gradient-to-tr from-amber-500/20 via-emerald-500/15 to-amber-200/10'
        }`}
      />

      {/* Decorative Bohemian Ambient Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-amber-500/10 pointer-events-none animate-spin-slow opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-emerald-500/10 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Dynamic Vibe Status Pill & Interactive Switcher */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 p-1.5 rounded-full bg-[#161917]/90 border border-amber-500/30 backdrop-blur-md shadow-[0_0_20px_-3px_rgba(245,158,11,0.25)]">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04]">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isLounge ? 'bg-rose-400' : 'bg-emerald-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isLounge ? 'bg-rose-500' : 'bg-emerald-500'
              }`} />
            </span>
            <span className="text-xs font-semibold text-zinc-200">
              {isLounge ? '🌙 NIGHT RHYTHM LOUNGE ACTIVE' : '☀️ DAY CAFE ACTIVE'}
            </span>
            <span className="text-zinc-500 text-xs hidden sm:inline">&bull;</span>
            <span className="text-xs text-amber-400 hidden sm:inline font-mono">
              {isLounge ? 'Live Gigs • Craft Coolers • Sizzlers' : 'Acoustic Chill • Cold Brews • Study Nooks'}
            </span>
          </div>

          {/* Vibe Switcher Buttons */}
          <div className="flex items-center gap-1 bg-[#0F1110]/80 p-0.5 rounded-full border border-zinc-800">
            <button
              onClick={() => setUserOverride('cafe')}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                !isLounge
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Coffee className="w-3 h-3" />
              <span>Day Cafe</span>
            </button>
            <button
              onClick={() => setUserOverride('lounge')}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                isLounge
                  ? 'bg-rose-500 text-white font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Music className="w-3 h-3" />
              <span>Night Gig</span>
            </button>
          </div>
        </div>

        {/* Location Eyebrow */}
        <p className="text-xs sm:text-sm font-['JetBrains_Mono'] tracking-[0.25em] uppercase text-amber-400 font-semibold mb-3 flex items-center gap-2">
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-amber-500" />
          <span>Panama Chowk &bull; University Strip &bull; Jammu</span>
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-amber-500" />
        </p>

        {/* Headline */}
        <h1 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-100 tracking-tight leading-[1.08] max-w-4xl mb-6">
          Where <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]">Good Vibes</span>, Great Beats &amp;{' '}
          <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-rose-400 bg-clip-text text-transparent">
            Epic Flavors
          </span>{' '}
          Converge.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed mb-8">
          Jammu's premier bohemian cafe, rhythm lounge &amp; urban bistro. Sunlit single-origin cold brews and study nooks by day; sizzling global platters, craft mocktails, and live indie rhythms by night.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-bold text-sm tracking-wide shadow-[0_0_24px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Explore 40-Dish Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1E2220] hover:bg-[#282D2A] border border-amber-500/40 hover:border-amber-400 text-zinc-100 font-semibold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Book Table / Gig Spot</span>
          </button>

          <a
            href="#gigs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-zinc-800 hover:border-rose-500/40 text-zinc-300 hover:text-rose-400 font-medium text-sm transition-all duration-200"
          >
            <Radio className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>Live Music Lineup</span>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4 border-t border-zinc-800/80">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#161917]/70 border border-amber-500/15 hover:border-amber-500/40 transition-all flex flex-col items-center">
            <span className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-amber-400 mb-0.5">
              18 Hrs
            </span>
            <span className="text-xs text-zinc-400 font-medium text-center">
              Nitro Steeped Cold Brew
            </span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#161917]/70 border border-amber-500/15 hover:border-amber-500/40 transition-all flex flex-col items-center">
            <span className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-amber-400 mb-0.5">
              48 Hrs
            </span>
            <span className="text-xs text-zinc-400 font-medium text-center">
              Fermented Sourdough
            </span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#161917]/70 border border-amber-500/15 hover:border-amber-500/40 transition-all flex flex-col items-center">
            <span className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-emerald-400 mb-0.5">
              4 Gigs
            </span>
            <span className="text-xs text-zinc-400 font-medium text-center">
              Weekly Live Music Sessions
            </span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#161917]/70 border border-amber-500/15 hover:border-amber-500/40 transition-all flex flex-col items-center">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-amber-400">
                4.9
              </span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-xs text-zinc-400 font-medium text-center">
              2,140+ Student Reviews
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
