import React, { useState, useMemo, useRef } from 'react';
import { 
  Search, X, Flame, Soup, Utensils, Sparkles, UtensilsCrossed, 
  Coffee, Star, Info, Filter, ArrowUpRight 
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function InteractiveMenu({ onSelectDish, onOpenReservation }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dietFilter, setDietFilter] = useState("all"); // 'all', 'veg', 'non-veg', 'chef'
  const [searchQuery, setSearchQuery] = useState("");
  const categoryScrollRef = useRef(null);

  // Category Icon Resolver
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Flame": return Flame;
      case "Soup": return Soup;
      case "Utensils": return Utensils;
      case "Sparkles": return Sparkles;
      case "UtensilsCrossed": return UtensilsCrossed;
      case "Coffee": return Coffee;
      default: return Utensils;
    }
  };

  // Flatten all dishes for global search and counts
  const allDishes = useMemo(() => {
    return restaurantData.categories.flatMap(cat => 
      cat.items.map(item => ({ ...item, categoryName: cat.name }))
    );
  }, []);

  // Filter dishes based on Category, Dietary, and Search query
  const filteredDishes = useMemo(() => {
    return allDishes.filter(dish => {
      // Category filter
      if (selectedCategory !== "all" && dish.category !== selectedCategory) {
        return false;
      }
      
      // Dietary filter
      if (dietFilter === "veg" && dish.diet !== "veg") return false;
      if (dietFilter === "non-veg" && dish.diet !== "non-veg") return false;
      if (dietFilter === "chef" && !dish.isChefSpecial) return false;

      // Search query (case-insensitive across name, description, ingredients, tags)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesIngredients = dish.ingredients ? dish.ingredients.toLowerCase().includes(query) : false;
        const matchesTags = dish.tags ? dish.tags.some(tag => tag.toLowerCase().includes(query)) : false;
        if (!matchesName && !matchesDesc && !matchesIngredients && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [allDishes, selectedCategory, dietFilter, searchQuery]);

  // Spice chillies renderer
  const renderSpiceIndicator = (level) => {
    if (level === 0) return null;
    return (
      <div className="flex items-center gap-0.5 text-[#EF4444]" title={`Spice Level: ${level}/3`}>
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} className="w-3.5 h-3.5 fill-[#EF4444]" />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-24 bg-[#0D0B0A] relative">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#E08E36]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#D4AF37]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#E08E36] block mb-2">
            The Gastronomic Repertoire
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0]">
            Artisanal Multi-Cuisine Menu
          </h2>
          <p className="mt-3 text-sm text-[#C8C0B5] font-sans">
            Curated from heirloom recipes, clay-oven craftsmanship, and contemporary culinary technique.
          </p>
        </div>

        {/* Search Bar & Dietary Filter Tabs */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          
          {/* Live Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, ingredients (e.g. Rogan Josh, Saffron, Galouti, Sizzler, Dimsum)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-full bg-[#1A1714] border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-[#F8F6F0] placeholder-[#8E867B] outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8E867B] hover:text-[#F8F6F0]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            
            {/* All */}
            <button
              onClick={() => setDietFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                dietFilter === "all"
                  ? "bg-[#D4AF37] text-[#0D0B0A] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "bg-[#1A1714] text-[#C8C0B5] hover:text-[#F8F6F0] border border-[#D4AF37]/20"
              }`}
            >
              All Offerings ({allDishes.length})
            </button>

            {/* Pure Veg */}
            <button
              onClick={() => setDietFilter("veg")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                dietFilter === "veg"
                  ? "bg-[#10B981] text-[#0D0B0A] shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "bg-[#1A1714] text-[#C8C0B5] hover:text-[#10B981] border border-[#10B981]/30"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block border border-white" />
              <span>Pure Veg 🟢</span>
            </button>

            {/* Non Veg */}
            <button
              onClick={() => setDietFilter("non-veg")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                dietFilter === "non-veg"
                  ? "bg-[#EF4444] text-[#F8F6F0] shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  : "bg-[#1A1714] text-[#C8C0B5] hover:text-[#EF4444] border border-[#EF4444]/30"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block border border-white" />
              <span>Non-Veg 🔴</span>
            </button>

            {/* Chef's Signature */}
            <button
              onClick={() => setDietFilter("chef")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                dietFilter === "chef"
                  ? "bg-[#F59E0B] text-[#0D0B0A] shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "bg-[#1A1714] text-[#C8C0B5] hover:text-[#F59E0B] border border-[#F59E0B]/30"
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Chef's Signature ⭐</span>
            </button>

          </div>
        </div>

        {/* Sticky Category Bar */}
        <div className="sticky top-16 md:top-20 z-30 py-3 bg-[#0D0B0A]/95 backdrop-blur-md border-y border-[#D4AF37]/20 mb-10">
          <div 
            ref={categoryScrollRef}
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1 px-2"
          >
            {/* All Category Pill */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex-shrink-0 flex items-center gap-2 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#E08E36] text-[#0D0B0A] font-bold shadow-md"
                  : "bg-[#1A1714] text-[#C8C0B5] hover:text-[#D4AF37] border border-white/5"
              }`}
            >
              <span>All Categories</span>
            </button>

            {/* Individual Categories */}
            {restaurantData.categories.map((cat) => {
              const Icon = getCategoryIcon(cat.icon);
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex-shrink-0 flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#E08E36] text-[#0D0B0A] font-bold shadow-md"
                      : "bg-[#1A1714] text-[#C8C0B5] hover:text-[#D4AF37] hover:bg-[#25201B] border border-white/5"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0D0B0A]' : 'text-[#E08E36]'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Filter & Results Count Bar */}
        <div className="flex items-center justify-between text-xs text-[#8E867B] mb-6 px-1">
          <div>
            Showing <strong className="text-[#D4AF37]">{filteredDishes.length}</strong> of {allDishes.length} artisanal dishes
            {searchQuery && <span> matching "<span className="text-[#F8F6F0]">{searchQuery}</span>"</span>}
          </div>
          {(selectedCategory !== "all" || dietFilter !== "all" || searchQuery !== "") && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietFilter("all");
                setSearchQuery("");
              }}
              className="text-[#E08E36] hover:underline font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Dish Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => {
              const isVeg = dish.diet === 'veg';
              return (
                <div
                  key={dish.id}
                  onClick={() => onSelectDish(dish)}
                  className="group rounded-2xl bg-[#1A1714] border border-[#D4AF37]/20 hover:border-[#D4AF37]/55 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
                >
                  {/* Top Dish Card Header with Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#25201B]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-transparent to-transparent opacity-90" />

                    {/* Diet Indicator: Veg (Green Square + Dot) / Non-Veg (Red Square + Dot) */}
                    <div 
                      className={`absolute top-3 left-3 w-6 h-6 rounded bg-[#0D0B0A]/90 border flex items-center justify-center p-1 backdrop-blur-sm ${
                        isVeg ? 'border-[#10B981]' : 'border-[#EF4444]'
                      }`}
                      title={isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                    >
                      <span 
                        className={`w-2.5 h-2.5 rounded-full ${
                          isVeg ? 'bg-[#10B981]' : 'bg-[#EF4444]'
                        }`} 
                      />
                    </div>

                    {/* Chef Special Star */}
                    {dish.isChefSpecial && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0D0B0A]/90 text-[#F59E0B] border border-[#F59E0B]/40 backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-[#F59E0B]" />
                        Signature
                      </span>
                    )}

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#0D0B0A]/95 text-[#D4AF37] font-bold text-sm border border-[#D4AF37]/35 shadow-md">
                      ₹{dish.price}
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider uppercase text-[#C8C0B5] bg-[#0D0B0A]/80 px-2 py-0.5 rounded border border-white/10">
                      {dish.categoryName || dish.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Spice Meter */}
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-serif text-lg font-bold text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        {renderSpiceIndicator(dish.spiceLevel)}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#C8C0B5] line-clamp-2 leading-relaxed mb-4 font-sans">
                        {dish.description}
                      </p>

                      {/* Tag Badges */}
                      {dish.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {dish.tags.slice(0, 3).map((tag, tIdx) => (
                            <span 
                              key={tIdx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#25201B] text-[#C8C0B5] border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                      <span className="flex items-center gap-1 group-hover:text-[#E6C35C] transition-colors">
                        <Info className="w-3.5 h-3.5" />
                        <span>View Gastronomy Notes</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center rounded-2xl bg-[#1A1714] border border-[#D4AF37]/20 max-w-lg mx-auto">
            <Utensils className="w-12 h-12 text-[#D4AF37]/40 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#F8F6F0] mb-2">
              No Culinary Creations Found
            </h3>
            <p className="text-xs text-[#C8C0B5] mb-6">
              We couldn't find any dishes matching your current search or dietary filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietFilter("all");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D0B0A] bg-[#D4AF37]"
            >
              Show Full Repertoire
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
