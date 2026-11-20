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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden w-full max-w-full bg-[#FFFDF9]">
      {/* Dynamic Warm Ambient Background Glows */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[130px] pointer-events-none transition-all duration-1000 ${
          isLounge
            ? 'bg-gradient-to-tr from-orange-400/18 via-rose-300/15 to-amber-200/20'
            : 'bg-gradient-to-tr from-amber-300/20 via-orange-300/18 to-emerald-200/15'
        }`}
      />

      {/* Decorative Bohemian Ambient Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-orange-200/50 pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-amber-200/40 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Dynamic Vibe Status Pill & Interactive Switcher */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 p-1.5 rounded-2xl sm:rounded-full bg-white/95 border border-orange-200 backdrop-blur-md shadow-sm max-w-full">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50/60 max-w-full">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isLounge ? 'bg-rose-400' : 'bg-emerald-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isLounge ? 'bg-rose-500' : 'bg-emerald-600'
              }`} />
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-stone-800">
              <span className="sm:hidden">{isLounge ? '🌙 NIGHT LOUNGE' : '☀️ DAY CAFE'}</span>
              <span className="hidden sm:inline">{isLounge ? '🌙 NIGHT RHYTHM LOUNGE ACTIVE' : '☀️ DAY CAFE ACTIVE'}</span>
            </span>
            <span className="text-stone-300 text-xs hidden md:inline">&bull;</span>
            <span className="text-xs text-orange-700 hidden md:inline font-mono font-semibold">
              {isLounge ? 'Live Gigs • Craft Coolers • Sizzlers' : 'Acoustic Chill • Cold Brews • Study Nooks'}
            </span>
          </div>

          {/* Vibe Switcher Buttons */}
          <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-full border border-stone-200 shrink-0">
            <button
              onClick={() => setUserOverride('cafe')}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                !isLounge
                  ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Coffee className="w-3 h-3" />
              <span>Day Cafe</span>
            </button>
            <button
              onClick={() => setUserOverride('lounge')}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                isLounge
                  ? 'bg-rose-600 text-white font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Music className="w-3 h-3" />
              <span>Night Gig</span>
            </button>
          </div>
        </div>

        {/* Location Eyebrow */}
        <p className="text-[11px] sm:text-sm font-['JetBrains_Mono'] tracking-[0.14em] sm:tracking-[0.25em] uppercase text-orange-600 font-bold mb-3 flex items-center justify-center gap-1.5 sm:gap-2 max-w-full flex-wrap">
          <span className="hidden min-[380px]:inline-block w-4 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-orange-400 shrink-0" />
          <span className="text-center">Panama Chowk &bull; University Strip &bull; Jammu</span>
          <span className="hidden min-[380px]:inline-block w-4 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-orange-400 shrink-0" />
        </p>

        {/* Headline */}
        <h1 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-stone-900 tracking-tight leading-[1.12] sm:leading-[1.08] max-w-4xl mb-6 break-words">
          Where <span className="text-orange-600">Good Vibes</span>, Great Beats &amp;{' '}
          <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
            Epic Flavors
          </span>{' '}
          Converge.
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-lg md:text-xl text-stone-600 font-normal max-w-2xl leading-relaxed mb-8">
          Jammu&apos;s premier bohemian cafe, rhythm lounge &amp; urban bistro. Sunlit single-origin cold brews and study nooks by day; sizzling global platters, craft mocktails, and live indie rhythms by night.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full sm:w-auto mb-10 max-w-full">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-bold text-sm tracking-wide shadow-[0_4px_18px_rgba(234,88,12,0.4)] hover:shadow-[0_6px_25px_rgba(234,88,12,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Explore 40-Dish Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-orange-50 border border-orange-200 hover:border-orange-400 text-stone-800 font-bold text-sm shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-orange-600" />
            <span>Book Table / Gig Spot</span>
          </button>

          <a
            href="#gigs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-800 hover:text-orange-900 font-semibold text-sm transition-all duration-200"
          >
            <Radio className="w-4 h-4 text-rose-600 animate-pulse" />
            <span>Live Music Lineup</span>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-4xl pt-4 border-t border-orange-100">
          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] hover:border-orange-300 transition-all flex flex-col items-center">
            <span className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-orange-600 mb-0.5">
              18 Hrs
            </span>
            <span className="text-xs text-stone-600 font-medium text-center">
              Nitro Steeped Cold Brew
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] hover:border-orange-300 transition-all flex flex-col items-center">
            <span className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-orange-600 mb-0.5">
              48 Hrs
            </span>
            <span className="text-xs text-stone-600 font-medium text-center">
              Fermented Sourdough
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] hover:border-orange-300 transition-all flex flex-col items-center">
            <span className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-emerald-600 mb-0.5">
              4 Gigs
            </span>
            <span className="text-xs text-stone-600 font-medium text-center">
              Weekly Live Music Sessions
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] hover:border-orange-300 transition-all flex flex-col items-center">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-amber-500">
                4.9
              </span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-xs text-stone-600 font-medium text-center">
              2,140+ Student Reviews
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
