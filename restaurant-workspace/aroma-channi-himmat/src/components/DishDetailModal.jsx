import React, { useEffect } from 'react';
import { X, Flame, Sparkles, Star, Utensils, GlassWater, BookOpen, Calendar } from 'lucide-react';

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
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#1A1714] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 my-8 animate-fade-in text-[#F8F6F0]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0D0B0A]/80 border border-[#D4AF37]/30 text-[#C8C0B5] hover:text-[#D4AF37] hover:bg-[#25201B] flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Photo Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#25201B]">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-transparent to-transparent opacity-95" />

          {/* Badges on Banner */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                {/* Veg/Non-Veg icon */}
                <div 
                  className={`w-5 h-5 rounded bg-[#0D0B0A]/90 border flex items-center justify-center p-0.5 ${
                    isVeg ? 'border-[#10B981]' : 'border-[#EF4444]'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isVeg ? 'bg-[#10B981]' : 'bg-[#EF4444]'}`} />
                </div>
                
                <span className="text-xs font-mono uppercase tracking-wider text-[#C8C0B5] bg-[#0D0B0A]/80 px-2 py-0.5 rounded border border-white/10">
                  {dish.categoryName || dish.category}
                </span>

                {dish.isChefSpecial && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0D0B0A]/90 text-[#F59E0B] border border-[#F59E0B]/40">
                    <Star className="w-3 h-3 fill-[#F59E0B]" />
                    Chef's Signature
                  </span>
                )}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F6F0]">
                {dish.name}
              </h2>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold font-serif text-[#D4AF37] bg-[#0D0B0A]/90 px-3.5 py-1.5 rounded-xl border border-[#D4AF37]/40 shadow-lg">
              ₹{dish.price}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Culinary Narrative */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E08E36] mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>The Culinary Story</span>
            </h4>
            <p className="text-sm text-[#C8C0B5] font-sans leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Spice Meter Profile */}
          <div className="p-4 rounded-xl bg-[#25201B]/80 border border-[#D4AF37]/20 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#F8F6F0] mb-0.5 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#EF4444]" />
                <span>Spice & Intensity Profile</span>
              </div>
              <span className="text-xs text-[#C8C0B5] font-sans">
                {getSpiceText(dish.spiceLevel)}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#EF4444]">
              {Array.from({ length: 3 }).map((_, i) => (
                <Flame 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < dish.spiceLevel 
                      ? 'fill-[#EF4444] text-[#EF4444]' 
                      : 'text-white/20'
                  }`} 
                />
              ))}
            </div>
          </div>

          {/* Ingredients & Pairings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Ingredients */}
            <div className="p-4 rounded-xl bg-[#25201B]/40 border border-white/5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1.5 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                <span>Key Botanicals & Elements</span>
              </div>
              <p className="text-xs text-[#C8C0B5] font-sans leading-relaxed">
                {dish.ingredients || "Heirloom Kashmiri spices, clarified butter, organic aromatics."}
              </p>
            </div>

            {/* Curated Pairing */}
            <div className="p-4 rounded-xl bg-[#25201B]/40 border border-white/5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#E08E36] mb-1.5 flex items-center gap-1.5">
                <GlassWater className="w-3.5 h-3.5" />
                <span>Curated Pairing</span>
              </div>
              <p className="text-xs text-[#C8C0B5] font-sans leading-relaxed">
                {dish.pairing || "Traditional Kashmiri Sheermal or Saffron Kehwa."}
              </p>
            </div>

          </div>

          {/* Chef's Secret Note */}
          {dish.chefNote && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#25201B] to-[#1A1714] border-l-4 border-[#D4AF37] text-xs text-[#C8C0B5] italic">
              <span className="font-semibold text-[#D4AF37] not-italic block mb-0.5">Ustads' Craft Note:</span>
              "{dish.chefNote}"
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#8E867B]">
              Tax applicable as per GST norms • Prepared fresh to order
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D0B0A] bg-gradient-to-r from-[#D4AF37] to-[#E08E36] hover:brightness-110 shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table to Savor This</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
