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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/50 backdrop-blur-sm transition-all duration-300 w-full max-w-full"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-orange-200 shadow-2xl flex flex-col no-scrollbar max-w-full"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/95 hover:bg-white text-stone-700 hover:text-stone-900 border border-stone-200 shadow-md transition-colors cursor-pointer"
          title="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-stone-100">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-black/30 to-transparent" />

          {/* Badges on Modal Image */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded-md border-2 flex items-center justify-center p-0.5 bg-white/95 backdrop-blur-md shadow-xs ${
                isVeg ? 'border-emerald-600' : 'border-rose-600'
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                }`}
              />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-stone-200 shadow-xs">
              {isVeg ? 'Pure Veg' : 'Non-Veg'}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                {dish.categoryName || 'Craft Creation'}
              </span>
              <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-white">
                {dish.name}
              </h3>
            </div>
            <div className="font-['JetBrains_Mono'] font-extrabold text-2xl text-orange-400 bg-stone-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-orange-400/40">
              ₹{dish.price}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
          <div>
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/60 text-center">
              <div>
                <span className="text-[10px] uppercase font-mono text-stone-500 font-bold block mb-0.5">
                  Prep Time
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-stone-800">
                  {dish.prepTime}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-stone-500 font-bold block mb-0.5">
                  Calories
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-stone-800">
                  {dish.calories}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-stone-500 font-bold block mb-0.5">
                  Spice Heat
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-orange-600">
                  {dish.spiceLevel > 0 ? '🌶️'.repeat(dish.spiceLevel) : 'Mild'}
                </span>
              </div>
            </div>

            {/* Gastronomic Description */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold mb-2">
                Flavor Profile &amp; Preparation
              </h4>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Craft Story */}
            {dish.story && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50/80 border-l-4 border-amber-500 border border-amber-200/60 text-xs sm:text-sm text-stone-800">
                <strong className="text-amber-800 block mb-1 font-['Syne'] font-bold">
                  The Kitchen Craft Story
                </strong>
                {dish.story}
              </div>
            )}

            {/* Recommended Pairing */}
            {dish.pairing && (
              <div className="mb-6 p-4 rounded-2xl bg-orange-50/80 border border-orange-200/80 flex items-start gap-3">
                <Utensils className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-['Syne'] font-bold text-orange-800 block mb-0.5">
                    Sommelier / Barista Recommended Pairing
                  </strong>
                  <p className="text-xs text-stone-700">
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
                    className="px-3 py-1 rounded-lg bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-600 text-center sm:text-left">
              <span>Ready to indulge at Panama Chowk?</span>
              <span className="block text-emerald-700 font-bold">
                Flash student ID at table for flat 15% discount
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onReserveForDish(dish);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-bold text-sm shadow-[0_4px_16px_rgba(234,88,12,0.35)] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Reserve Table to Taste This</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
