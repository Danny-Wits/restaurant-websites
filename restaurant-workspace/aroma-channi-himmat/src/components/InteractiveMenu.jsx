import React, { useState, useMemo, useRef } from 'react';
import { 
  Search, X, Flame, Soup, Utensils, Sparkles, UtensilsCrossed, 
  Coffee, Star, Info, ArrowUpRight 
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

  // Subtle Spice Indicator
  const renderSpiceIndicator = (level) => {
    if (level === 0) return null;
    return (
      <div className="flex items-center gap-0.5 text-zinc-500" title={`Spice Level: ${level}/3`}>
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} className="w-3 h-3 fill-rose-500/80 text-rose-500/80" />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-24 bg-[#09090b] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-light text-[#D4AF37] block mb-2">
            The Gastronomic Repertoire
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-100 tracking-tight">
            Artisanal Multi-Cuisine Menu
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Curated from heirloom recipes, clay-oven craftsmanship, and contemporary culinary technique.
          </p>
        </div>

        {/* Search Bar & Dietary Filter Tabs */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          
          {/* Live Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, ingredients (e.g. Rogan Josh, Saffron, Galouti, Sizzler, Dimsum)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#121214] border border-white/[0.08] focus:border-[#D4AF37]/50 text-sm text-zinc-200 placeholder-zinc-500 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Understated Dietary Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            
            {/* All */}
            <button
              onClick={() => setDietFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-normal tracking-wide transition-all ${
                dietFilter === "all"
                  ? "bg-zinc-100 text-zinc-950 font-medium"
                  : "bg-transparent text-zinc-400 hover:text-zinc-200 border border-white/[0.08]"
              }`}
            >
              All Offerings ({allDishes.length})
            </button>

            {/* Pure Veg */}
            <button
              onClick={() => setDietFilter("veg")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-normal tracking-wide transition-all ${
                dietFilter === "veg"
                  ? "bg-emerald-950/70 text-emerald-300 border border-emerald-500/40"
                  : "bg-transparent text-zinc-400 hover:text-zinc-200 border border-white/[0.08]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>Vegetarian</span>
            </button>

            {/* Non Veg */}
            <button
              onClick={() => setDietFilter("non-veg")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-normal tracking-wide transition-all ${
                dietFilter === "non-veg"
                  ? "bg-rose-950/70 text-rose-300 border border-rose-500/40"
                  : "bg-transparent text-zinc-400 hover:text-zinc-200 border border-white/[0.08]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
              <span>Non-Vegetarian</span>
            </button>

            {/* Chef's Signature */}
            <button
              onClick={() => setDietFilter("chef")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-normal tracking-wide transition-all ${
                dietFilter === "chef"
                  ? "bg-amber-950/70 text-amber-300 border border-amber-500/40"
                  : "bg-transparent text-zinc-400 hover:text-zinc-200 border border-white/[0.08]"
              }`}
            >
              <Star className="w-3 h-3 text-amber-400 fill-current" />
              <span>Chef's Signature</span>
            </button>

          </div>
        </div>

        {/* Sticky Category Bar */}
        <div className="sticky top-16 md:top-20 z-30 py-2.5 bg-[#09090b]/90 backdrop-blur-md border-y border-white/[0.06] mb-10">
          <div 
            ref={categoryScrollRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-2"
          >
            {/* All Category Pill */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs tracking-wide transition-all flex-shrink-0 flex items-center gap-2 ${
                selectedCategory === "all"
                  ? "bg-white/[0.08] text-zinc-100 border border-white/15 font-medium"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02] border border-transparent font-light"
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
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs tracking-wide transition-all flex-shrink-0 flex items-center gap-2 ${
                    isActive
                      ? "bg-white/[0.08] text-zinc-100 border border-white/15 font-medium"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02] border border-transparent font-light"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4AF37]' : 'text-zinc-500'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Filter & Results Count Bar */}
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-6 px-1">
          <div>
            Showing <strong className="text-zinc-300 font-medium">{filteredDishes.length}</strong> of {allDishes.length} artisanal dishes
            {searchQuery && <span> matching "<span className="text-zinc-200">{searchQuery}</span>"</span>}
          </div>
          {(selectedCategory !== "all" || dietFilter !== "all" || searchQuery !== "") && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietFilter("all");
                setSearchQuery("");
              }}
              className="text-[#D4AF37] hover:underline font-light"
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
                  className="group rounded-xl bg-[#121214] border border-white/[0.06] hover:border-[#D4AF37]/35 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300"
                >
                  {/* Top Dish Card Header with Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-85" />

                    {/* Diet Indicator Dot in Hairline Pill */}
                    <div 
                      className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/75 border border-white/10 backdrop-blur-sm flex items-center gap-1.5"
                      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <span 
                        className={`w-1.5 h-1.5 rounded-full ${
                          isVeg ? 'bg-emerald-400' : 'bg-rose-400'
                        }`} 
                      />
                      <span className="text-[9px] uppercase tracking-wider text-zinc-300 font-mono">
                        {isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    {/* Chef Special Star */}
                    {dish.isChefSpecial && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/75 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        Signature
                      </span>
                    )}

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-black/80 text-zinc-100 font-serif text-sm border border-white/10">
                      ₹{dish.price}
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-3 left-3 text-[9px] font-mono tracking-wider uppercase text-zinc-400 bg-black/75 px-2 py-0.5 rounded border border-white/10">
                      {dish.categoryName || dish.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Spice Meter */}
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-serif text-lg font-medium text-zinc-100 group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        {renderSpiceIndicator(dish.spiceLevel)}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4 font-light">
                        {dish.description}
                      </p>

                      {/* Tag Badges */}
                      {dish.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {dish.tags.slice(0, 3).map((tag, tIdx) => (
                            <span 
                              key={tIdx}
                              className="text-[9px] font-light px-2 py-0.5 rounded bg-white/[0.02] text-zinc-400 border border-white/[0.06]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      <span className="flex items-center gap-1 font-light">
                        <Info className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Gastronomy Notes</span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center rounded-xl bg-[#121214] border border-white/[0.08] max-w-lg mx-auto">
            <Utensils className="w-10 h-10 text-zinc-600 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-light text-zinc-100 mb-2">
              No Culinary Creations Found
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              We couldn't find any dishes matching your current search or dietary filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietFilter("all");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-colors"
            >
              Show Full Repertoire
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
