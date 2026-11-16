import React from 'react';
import { Star, Eye, ArrowRight } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function ChefSpecials({ onSelectDish, onOpenReservation }) {
  const specials = restaurantData.chefSpecials;

  return (
    <section id="specials" className="py-24 bg-[#09090b] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-light text-[#D4AF37] mb-2">
              <Star className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Epicurean Centerpieces</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-100 tracking-tight">
              The Chef's Royal Spotlight
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-zinc-400 max-w-md font-light leading-relaxed">
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
                className="group rounded-xl bg-[#121214] border border-white/[0.06] hover:border-[#D4AF37]/35 overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-black/75 text-zinc-300 border border-white/10 backdrop-blur-sm">
                    {dish.category}
                  </span>

                  {/* Veg / Non-Veg Indicator Dot */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/75 border border-white/10 backdrop-blur-sm flex items-center gap-1.5">
                    <span 
                      className={`w-1.5 h-1.5 rounded-full ${
                        isVeg ? 'bg-emerald-400' : 'bg-rose-400'
                      }`} 
                    />
                    <span className="text-[9px] uppercase tracking-wider text-zinc-300 font-mono">
                      {isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-black/80 text-zinc-100 font-serif text-sm border border-white/10">
                    ₹{dish.price}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-medium text-[#D4AF37] uppercase tracking-widest mb-1">
                      {dish.badge}
                    </div>

                    <h3 className="font-serif text-lg font-medium text-zinc-100 group-hover:text-[#D4AF37] transition-colors leading-snug mb-2">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-3 mb-4 leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/[0.04]">
                    {/* Pairing hint */}
                    <div className="text-[11px] text-zinc-500 font-light">
                      <span className="text-zinc-400 font-normal">Pairing: </span>
                      {dish.pairing}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="w-full py-2 px-3.5 rounded-lg text-xs font-medium uppercase tracking-wider text-zinc-300 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Inspect Dish</span>
                      <ArrowRight className="w-3 h-3 text-zinc-500 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Booking Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#121214] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-zinc-100 mb-1">
              Desire a Bespoke Multi-Course Table Experience?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Reserve ahead for curated Kashmiri Wazwan traams or family anniversary celebrations.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-colors"
          >
            Reserve Your Experience
          </button>
        </div>

      </div>
    </section>
  );
}
