import React from 'react';
import { Star, Flame, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function ChefSpecials({ onSelectDish, onOpenReservation }) {
  const specials = restaurantData.chefSpecials;

  return (
    <section id="specials" className="py-24 bg-[#14110F] border-t border-[#D4AF37]/20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#E08E36] mb-2">
              <Star className="w-4 h-4 fill-[#E08E36]" />
              <span>Epicurean Centerpieces</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0]">
              The Chef's Royal Spotlight
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#C8C0B5] max-w-md font-sans">
            Four signature creations that define the Aroma dining experience — celebrated across Jammu for authenticity, technique, and heirloom taste.
          </p>
        </div>

        {/* 4 Spotlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((dish) => {
            const isVeg = dish.diet === 'veg';
            return (
              <div
                key={dish.id}
                className="group rounded-2xl bg-[#1A1714] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 overflow-hidden flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-transparent to-transparent opacity-90" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#0D0B0A]/90 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-sm">
                    {dish.category}
                  </span>

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded bg-[#0D0B0A]/90 border border-white/20 flex items-center justify-center p-1 backdrop-blur-sm">
                    <span 
                      className={`w-2.5 h-2.5 rounded-full ${
                        isVeg ? 'bg-[#10B981]' : 'bg-[#EF4444]'
                      }`} 
                    />
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#0D0B0A]/95 text-[#D4AF37] font-bold text-sm border border-[#D4AF37]/40">
                    ₹{dish.price}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-[#E08E36] uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{dish.badge}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors leading-snug mb-2">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-[#C8C0B5] line-clamp-3 mb-4 leading-relaxed font-sans">
                      {dish.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    {/* Pairing hint */}
                    <div className="text-[11px] text-[#8E867B]">
                      <span className="text-[#D4AF37] font-medium">Recommended Pairing: </span>
                      {dish.pairing}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#F8F6F0] bg-[#25201B] hover:bg-[#D4AF37] hover:text-[#0D0B0A] border border-[#D4AF37]/30 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Dish</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Booking Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1A1714] via-[#25201B] to-[#1A1714] border border-[#D4AF37]/35 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F6F0] mb-1">
              Desire a Bespoke Multi-Course Table Experience?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8C0B5]">
              Reserve ahead for curated Kashmiri Wazwan traams or family anniversary celebrations.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D0B0A] bg-gradient-to-r from-[#D4AF37] to-[#E08E36] hover:brightness-110 shadow-lg transition-all"
          >
            Reserve Your Experience
          </button>
        </div>

      </div>
    </section>
  );
}
