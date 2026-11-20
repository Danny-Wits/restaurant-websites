import React, { useState, useEffect } from 'react';
import { Calendar, Utensils, ChevronDown, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import { getRestaurantStatus } from '../utils/timeHelper';

export default function Hero({ onOpenReservation, onExploreMenu }) {
  const [status, setStatus] = useState(getRestaurantStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getRestaurantStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-orange-50/80 via-amber-50/30 to-[#FFFDF9]">
      
      {/* Sunlit Food Photography & Radiant Warmth Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Appetizing Photographic Backdrop */}
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85"
          alt="Aroma Multi Cuisine Dining Ambiance"
          className="w-full h-full object-cover object-center opacity-[0.12] mix-blend-multiply filter contrast-125"
        />
        {/* Sunlit Saffron & Flame Radiant Auras */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-300/35 via-amber-200/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Live Service Status & Rating Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-emerald-200/90 shadow-warm-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status.isOpen ? 'bg-emerald-600' : 'bg-amber-500'}`} />
            </span>
            <span className="text-xs font-bold text-stone-800">
              {status.message}
            </span>
            <span className="hidden sm:inline text-xs text-orange-400">•</span>
            <span className="hidden sm:inline text-xs font-semibold text-orange-700">
              {status.nextAction}
            </span>
          </div>

          {/* ★ 4.8 Rating Card Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-amber-200/90 shadow-warm-sm text-stone-800">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-stone-900">4.8 / 5.0</span>
            <span className="text-[11px] text-stone-600 font-medium">({restaurantData.reviewCount} Reviews)</span>
          </div>
        </div>

        {/* Editorial Eyebrow */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.24em] uppercase font-bold text-orange-700 bg-orange-100/70 border border-orange-200/80 px-3.5 py-1 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Jammu's Multi-Cuisine Sanctuary • Channi Himmat</span>
          </span>
        </div>

        {/* High Contrast Appetite-Inducing Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900 max-w-4xl leading-[1.08] mb-6">
          Where <span className="italic font-semibold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">Aromatic Heritage</span> Meets Modern Gastronomy
        </h1>

        {/* High Contrast Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl font-normal leading-relaxed mb-10">
          From the slow-simmered brass deghs of royal Kashmir to charcoal-fired tandoor kebabs and sizzling continental skillets — an appetizing sanctuary crafted for refined palates.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-stone-800 bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 transition-all duration-200 shadow-warm-sm active:scale-95"
          >
            <Utensils className="w-4 h-4 text-orange-600" />
            <span>Explore Menu (44 Dishes)</span>
          </button>
        </div>

        {/* Crisp White Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-6">
          {restaurantData.heroQuickStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-white border border-orange-100 shadow-warm-sm hover:shadow-warm-md hover:border-orange-300 transition-all duration-200 text-center"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-orange-600 mb-0.5">
                {stat.number}
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-stone-700 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <button 
        onClick={onExploreMenu}
        aria-label="Scroll down to menu"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-orange-500 hover:text-orange-700 transition-colors p-2 bg-white/80 rounded-full border border-orange-200/80 shadow-warm-sm"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
