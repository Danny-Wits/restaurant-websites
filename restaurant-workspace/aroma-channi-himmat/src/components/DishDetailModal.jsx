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
      {/* Dimmed Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#121214] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 my-8 text-zinc-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Photo Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-90" />

          {/* Badges on Banner */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* Veg/Non-Veg dot */}
                <div className="px-2 py-0.5 rounded-full bg-black/75 border border-white/10 backdrop-blur-sm flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                  <span className="text-[9px] uppercase tracking-wider text-zinc-300 font-mono">
                    {isVeg ? 'Veg' : 'Non-Veg'}
                  </span>
                </div>
                
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-black/75 px-2 py-0.5 rounded border border-white/10">
                  {dish.categoryName || dish.category}
                </span>

                {dish.isChefSpecial && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/75 text-amber-300 border border-amber-400/30">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    Signature
                  </span>
                )}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-light text-zinc-100">
                {dish.name}
              </h2>
            </div>

            {/* Price */}
            <div className="text-xl sm:text-2xl font-light font-serif text-[#D4AF37] bg-black/80 px-3 py-1 rounded-lg border border-white/10">
              ₹{dish.price}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Culinary Narrative */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37] mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>The Culinary Story</span>
            </h4>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Spice Meter Profile */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-zinc-200 mb-0.5 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                <span>Spice & Intensity Profile</span>
              </div>
              <span className="text-xs text-zinc-400 font-light">
                {getSpiceText(dish.spiceLevel)}
              </span>
            </div>
            <div className="flex items-center gap-0.5 text-zinc-600">
              {Array.from({ length: 3 }).map((_, i) => (
                <Flame 
                  key={i} 
                  className={`w-3.5 h-3.5 ${
                    i < dish.spiceLevel 
                      ? 'fill-rose-500 text-rose-500' 
                      : 'text-zinc-700'
                  }`} 
                />
              ))}
            </div>
          </div>

          {/* Ingredients & Pairings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Ingredients */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.04]">
              <div className="text-xs font-medium uppercase tracking-wider text-[#D4AF37] mb-1.5 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                <span>Key Botanicals & Elements</span>
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {dish.ingredients || "Heirloom Kashmiri spices, clarified butter, organic aromatics."}
              </p>
            </div>

            {/* Curated Pairing */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.04]">
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                <GlassWater className="w-3.5 h-3.5" />
                <span>Curated Pairing</span>
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {dish.pairing || "Traditional Kashmiri Sheermal or Saffron Kehwa."}
              </p>
            </div>

          </div>

          {/* Chef's Secret Note */}
          {dish.chefNote && (
            <div className="p-4 rounded-xl bg-zinc-900/40 border-l border-[#D4AF37] text-xs text-zinc-400 italic font-light">
              <span className="font-normal text-zinc-200 not-italic block mb-0.5">Ustads' Craft Note:</span>
              "{dish.chefNote}"
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-500 font-light">
              Tax applicable as per GST norms • Prepared fresh to order
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-colors"
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
