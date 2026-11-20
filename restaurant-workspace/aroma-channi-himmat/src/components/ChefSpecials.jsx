import React from 'react';
import { Star, Eye, ArrowRight, Sparkles } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function ChefSpecials({ onSelectDish, onOpenReservation }) {
  const specials = restaurantData.chefSpecials;

  return (
    <section id="specials" className="py-24 bg-[#FAFAF7] border-t border-orange-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-orange-600 mb-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Epicurean Centerpieces</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              The Chef's Royal Spotlight
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md font-normal leading-relaxed">
            Four signature creations that define the Aroma dining experience — celebrated across Jammu for heirloom Wazwan mastery, clay tandoor sizzle, and delicate craft.
          </p>
        </div>

        {/* 4 Spotlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((dish) => {
            const isVeg = dish.diet === 'veg';
            return (
              <div
                key={dish.id}
                className="group rounded-3xl bg-white border border-orange-100 shadow-warm-sm hover:shadow-warm-lg hover:border-orange-300 overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-orange-50">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 text-stone-800 border border-orange-200/80 shadow-sm backdrop-blur-sm">
                    {dish.category}
                  </span>

                  {/* Veg / Non-Veg Indicator Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-white/95 border border-orange-100 shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                    <span 
                      className={`w-2 h-2 rounded-full ${
                        isVeg ? 'bg-emerald-600' : 'bg-red-600'
                      }`} 
                    />
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isVeg ? 'text-emerald-800' : 'text-red-800'
                    }`}>
                      {isVeg ? 'Pure Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-white/95 text-orange-600 font-serif font-bold text-base border border-orange-100 shadow-md">
                    ₹{dish.price}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-amber-800 bg-amber-100/80 border border-amber-200/90 uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1 mb-2">
                      <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                      <span>{dish.badge}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors leading-snug mb-2">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed font-normal">
                      {dish.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-orange-100">
                    {/* Pairing hint */}
                    <div className="text-[11px] text-stone-700 font-medium bg-orange-50/70 p-2.5 rounded-xl border border-orange-100">
                      <span className="text-orange-700 font-bold">Pairing: </span>
                      {dish.pairing}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-800 bg-orange-50 hover:bg-orange-600 hover:text-white border border-orange-200 hover:border-orange-600 transition-all flex items-center justify-center gap-2 group/btn shadow-2xs"
                    >
                      <Eye className="w-4 h-4 text-orange-600 group-hover/btn:text-white" />
                      <span>Inspect Dish</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-600 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Booking Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100/90 border border-orange-200 shadow-warm-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700 block mb-1">
              Private Dining & Celebrations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-1">
              Desire a Bespoke Multi-Course Table Experience?
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 font-normal">
              Reserve ahead for curated Kashmiri Wazwan traams or memorable family anniversary banquets.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="whitespace-nowrap px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/25 transition-all"
          >
            Reserve Your Experience
          </button>
        </div>

      </div>
    </section>
  );
}
