import React, { useEffect } from 'react';
import { X, Flame, Star, Utensils, GlassWater, BookOpen, Calendar } from 'lucide-react';

export default function DishDetailModal({ dish, onClose, onOpenReservation }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!dish) return null;

  const isVeg = dish.diet === 'veg';

  const getSpiceText = (level) => {
    switch (level) {
      case 0: return "Mild, Silken & Velvety (Zero Chili Heat)";
      case 1: return "Gentle Warmth (Aromatic Cinnamon, Cardamom & Fennel)";
      case 2: return "Medium Piquant (Balanced Kashmiri Degi Mirch & Pepper)";
      case 3: return "Fiery Heat (Artisanal Szechuan / Crushed Whole Chilies)";
      default: return "Balanced Royal Spice Profile";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Soft Dimmed Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-white border border-orange-200 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-stone-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/95 border border-orange-200 text-stone-600 hover:text-stone-900 flex items-center justify-center shadow-md transition-all hover:scale-105"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Photo Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-orange-50">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85" />

          {/* Badges on Banner */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* Veg/Non-Veg badge */}
                <div className="px-2.5 py-1 rounded-lg bg-white/95 border border-orange-100 shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isVeg ? 'text-emerald-800' : 'text-red-800'}`}>
                    {isVeg ? 'Pure Veg' : 'Non-Veg'}
                  </span>
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-800 bg-white/95 px-2.5 py-1 rounded-lg border border-orange-100 shadow-sm">
                  {dish.categoryName || dish.category}
                </span>

                {dish.isChefSpecial && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    Signature
                  </span>
                )}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
                {dish.name}
              </h2>
            </div>

            {/* Price */}
            <div className="text-xl sm:text-2xl font-bold font-serif text-orange-600 bg-white/95 px-4 py-1.5 rounded-xl border border-orange-100 shadow-md">
              ₹{dish.price}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Culinary Narrative */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span>The Culinary Story</span>
            </h4>
            <p className="text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Spice Meter Profile */}
          <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-stone-900 mb-0.5 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-red-500" />
                <span>Spice & Intensity Profile</span>
              </div>
              <span className="text-xs text-stone-600 font-medium">
                {getSpiceText(dish.spiceLevel)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <Flame 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < dish.spiceLevel 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-stone-300'
                  }`} 
                />
              ))}
            </div>
          </div>

          {/* Ingredients & Pairings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Ingredients */}
            <div className="p-4 rounded-2xl bg-[#FAFAF7] border border-orange-100">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-1.5 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                <span>Key Botanicals & Elements</span>
              </div>
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                {dish.ingredients || "Heirloom Kashmiri spices, clarified butter, organic aromatics."}
              </p>
            </div>

            {/* Curated Pairing */}
            <div className="p-4 rounded-2xl bg-[#FAFAF7] border border-orange-100">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5 flex items-center gap-1.5">
                <GlassWater className="w-3.5 h-3.5 text-orange-600" />
                <span>Curated Pairing</span>
              </div>
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                {dish.pairing || "Traditional Kashmiri Sheermal or Saffron Kehwa."}
              </p>
            </div>

          </div>

          {/* Chef's Secret Note */}
          {dish.chefNote && (
            <div className="p-4 rounded-2xl bg-amber-50/80 border-l-4 border-amber-500 text-xs text-stone-700 italic font-medium">
              <span className="font-bold text-stone-900 not-italic block mb-0.5">Ustads' Craft Note:</span>
              "{dish.chefNote}"
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-4 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-500 font-medium">
              Prepared fresh to order • Segregated vegetarian preparation available
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/25 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table to Savor</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
