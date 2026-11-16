import React, { useState, useEffect } from 'react';
import { Calendar, Utensils, ChevronDown } from 'lucide-react';
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
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image Layer with Deep Matte Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Aroma Dining Hall Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.15]"
        />
        {/* Subtle Matte Obsidian Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/40 to-[#09090b]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Live Service Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121214]/80 border border-white/[0.08] backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-70 ${status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
          </span>
          <span className="text-xs font-normal tracking-wide text-zinc-300">
            {status.message}
          </span>
          <span className="hidden sm:inline text-xs text-zinc-600">•</span>
          <span className="hidden sm:inline text-xs text-[#D4AF37] font-light">
            {status.nextAction}
          </span>
        </div>

        {/* Minimalist Editorial Eyebrow */}
        <div className="mb-4">
          <span className="text-xs tracking-[0.28em] uppercase font-light text-[#D4AF37]">
            Jammu's Multi-Cuisine Sanctuary • Channi Himmat
          </span>
        </div>

        {/* Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          Where <span className="italic font-normal text-[#D4AF37]">Aromatic Heritage</span> Meets Modern Gastronomy
        </h1>

        {/* Restrained Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed mb-10">
          From the slow-simmered brass deghs of Kashmir to royal clay-oven tandoor mastery and international table sizzlers — an understated sanctuary for refined palates.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-widest text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-all duration-200"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-light uppercase tracking-widest text-zinc-300 bg-transparent hover:bg-white/[0.04] border border-white/15 hover:border-white/30 transition-all duration-200"
          >
            <Utensils className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Hairline Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-8 border-t border-white/[0.06]">
          {restaurantData.heroQuickStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-xl bg-[#121214]/60 border border-white/[0.06] text-center"
            >
              <div className="font-serif text-2xl sm:text-3xl font-light text-[#D4AF37] mb-0.5">
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-zinc-400 font-light">
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
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-zinc-300 transition-colors p-2"
      >
        <ChevronDown className="w-5 h-5 animate-pulse" />
      </button>
    </section>
  );
}
