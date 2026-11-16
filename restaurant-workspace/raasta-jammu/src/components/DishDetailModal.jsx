import React, { useEffect } from 'react';
import {
  X,
  Clock,
  Flame,
  Sparkles,
  Calendar,
  Utensils,
  Share2,
  Check,
  Heart
} from 'lucide-react';

export default function DishDetailModal({ dish, onClose, onReserveForDish }) {
  useEffect(() => {
    if (!dish) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [dish, onClose]);

  if (!dish) return null;

  const isVeg = dish.diet === 'veg';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1E2220] border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col no-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          title="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-zinc-900">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2220] via-black/30 to-transparent" />

          {/* Badges on Modal Image */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded-md border flex items-center justify-center p-0.5 bg-black/80 backdrop-blur-md ${
                isVeg ? 'border-emerald-500' : 'border-rose-500'
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                }`}
              />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {isVeg ? 'Pure Veg' : 'Non-Veg'}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                {dish.categoryName || 'Craft Creation'}
              </span>
              <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-zinc-100">
                {dish.name}
              </h3>
            </div>
            <div className="font-['JetBrains_Mono'] font-extrabold text-2xl text-amber-400 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-amber-500/30">
              ₹{dish.price}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
          <div>
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-3 rounded-2xl bg-[#161917] border border-amber-500/15 text-center">
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">
                  Prep Time
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-zinc-200">
                  {dish.prepTime}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">
                  Calories
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-zinc-200">
                  {dish.calories}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-0.5">
                  Spice Heat
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-amber-400">
                  {dish.spiceLevel > 0 ? '🌶️'.repeat(dish.spiceLevel) : 'Mild'}
                </span>
              </div>
            </div>

            {/* Gastronomic Description */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2">
                Flavor Profile &amp; Preparation
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Craft Story */}
            {dish.story && (
              <div className="mb-6 p-4 rounded-2xl bg-[#161917]/80 border-l-2 border-amber-500 text-xs sm:text-sm text-zinc-300">
                <strong className="text-amber-400 block mb-1 font-['Syne']">
                  The Kitchen Craft Story
                </strong>
                {dish.story}
              </div>
            )}

            {/* Recommended Pairing */}
            {dish.pairing && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
                <Utensils className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-['Syne'] font-bold text-amber-400 block mb-0.5">
                    Sommelier / Barista Recommended Pairing
                  </strong>
                  <p className="text-xs text-zinc-300">
                    {dish.pairing}
                  </p>
                </div>
              </div>
            )}

            {/* Tags */}
            {dish.tags && dish.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {dish.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-zinc-700 text-xs font-medium text-zinc-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 text-center sm:text-left">
              <span>Ready to indulge at Panama Chowk?</span>
              <span className="block text-emerald-400 font-semibold">
                Flash student ID at table for flat 15% discount
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onReserveForDish(dish);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-zinc-950" />
              <span>Reserve Table to Taste This</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
