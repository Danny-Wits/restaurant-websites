import React, { useState, useEffect } from 'react';
import { Calendar, Utensils, Star, Flame, Sparkles, ShieldCheck, ChevronDown, Clock } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import { getRestaurantStatus } from '../utils/timeHelper';

export default function Hero({ onOpenReservation, onExploreMenu }) {
  const [status, setStatus] = useState(getRestaurantStatus());

  useEffect(() => {
    // Update live status every 60 seconds
    const interval = setInterval(() => {
      setStatus(getRestaurantStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image Layer with Luxury Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Aroma Luxury Dining Hall"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.28] contrast-125"
        />
        {/* Radial amber glow & obsidian vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0D0B0A]/75 to-[#0D0B0A]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/40 to-[#0D0B0A]/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E08E36]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Live Service Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1714]/90 border border-[#D4AF37]/35 shadow-lg backdrop-blur-md mb-6 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.isOpen ? 'bg-[#10B981]' : 'bg-[#E08E36]'}`} />
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status.isOpen ? 'bg-[#10B981]' : 'bg-[#E08E36]'}`} />
          </span>
          <span className="text-xs font-semibold tracking-wide text-[#F8F6F0]">
            {status.message}
          </span>
          <span className="hidden sm:inline text-xs text-[#8E867B]">•</span>
          <span className="hidden sm:inline text-xs text-[#D4AF37]">
            {status.nextAction}
          </span>
        </div>

        {/* Dual Luxury Eyebrow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-[#25201B]/80 text-[#D4AF37] border border-[#D4AF37]/30">
            <Sparkles className="w-3 h-3 text-[#E08E36]" />
            Jammu's Premier Multi-Cuisine Table
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-[#25201B]/80 text-[#F8F6F0] border border-white/10">
            <Flame className="w-3 h-3 text-[#E08E36]" />
            Authentic Wazwan & Royal Tandoor
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F6F0] max-w-4xl leading-[1.12] mb-6">
          Where <span className="shimmer-text">Aromatic Heritage</span> Meets Modern Gastronomy
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#C8C0B5] max-w-2xl font-normal leading-relaxed mb-10">
          Experience Jammu's grandest table in <span className="text-[#F8F6F0] font-medium">Channi Himmat</span> — from the slow-simmered brass deghs of Kashmir to royal clay-oven tandoor feasts and theatrical international sizzlers.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#0D0B0A] bg-gradient-to-r from-[#D4AF37] via-[#F3E9C7] to-[#D4AF37] hover:from-[#E6C35C] hover:to-[#E08E36] shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Your Table</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#F8F6F0] bg-[#1A1714]/90 hover:bg-[#25201B] border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Utensils className="w-4 h-4 text-[#D4AF37]" />
            <span>Explore Artisanal Menu</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-6 border-t border-[#D4AF37]/20">
          {restaurantData.heroQuickStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-2xl bg-[#1A1714]/60 backdrop-blur-md border border-[#D4AF37]/15 hover:border-[#D4AF37]/35 transition-all text-center"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                {stat.number}
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#C8C0B5] font-medium">
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors animate-bounce p-2"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
