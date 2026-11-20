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

  // Spice Level Indicator
  const renderSpiceIndicator = (level) => {
    if (level === 0) return null;
    return (
      <div className="flex items-center gap-0.5 text-red-500" title={`Spice Intensity: ${level}/3`}>
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-24 bg-[#FFFDF9] border-t border-orange-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-orange-600 block mb-2">
            The Gastronomic Repertoire
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Artisanal Multi-Cuisine Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Curated from heirloom Kashmiri Wazwan guilds, royal clay tandoors, and sizzler craftsmanship.
          </p>
        </div>

        {/* Search Bar & Dietary Filter Tabs */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          
          {/* Live Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, spices, or cuisines (e.g. Rogan Josh, Saffron, Galouti, Sizzler, Dimsum)..."
              className="w-full pl-12 pr-11 py-3.5 rounded-2xl bg-white border border-orange-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 text-sm sm:text-base text-stone-900 placeholder-stone-400 outline-none transition-all shadow-warm-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 rounded-full hover:bg-orange-50"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            
            {/* All */}
            <button
              onClick={() => setDietFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-2xs ${
                dietFilter === "all"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-700 hover:bg-orange-50 border border-orange-200/80"
              }`}
            >
              All Offerings ({allDishes.length})
            </button>

            {/* Pure Veg */}
            <button
              onClick={() => setDietFilter("veg")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-2xs ${
                dietFilter === "veg"
                  ? "bg-emerald-600 text-white shadow-sm border border-emerald-600"
                  : "bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-300"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>🟢 Pure Veg</span>
            </button>

            {/* Non Veg */}
            <button
              onClick={() => setDietFilter("non-veg")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-2xs ${
                dietFilter === "non-veg"
                  ? "bg-red-600 text-white shadow-sm border border-red-600"
                  : "bg-white text-red-800 hover:bg-red-50 border border-red-300"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span>🔴 Non-Veg</span>
            </button>

            {/* Chef's Signature */}
            <button
              onClick={() => setDietFilter("chef")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-2xs ${
                dietFilter === "chef"
                  ? "bg-amber-500 text-white shadow-sm border border-amber-500"
                  : "bg-white text-amber-800 hover:bg-amber-50 border border-amber-300"
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current text-amber-500 group-hover:text-amber-600" />
              <span>⭐ Chef's Signature</span>
            </button>

          </div>
        </div>

        {/* Sticky Category Bar */}
        <div className="sticky top-16 md:top-20 z-30 py-3 bg-[#FFFDF9]/95 backdrop-blur-md border-y border-orange-100 shadow-warm-sm mb-8">
          <div 
            ref={categoryScrollRef}
            className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 px-2"
          >
            {/* All Category Pill */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex-shrink-0 flex items-center gap-2 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-500/25"
                  : "bg-white text-stone-700 hover:bg-orange-50 border border-orange-200/80 shadow-2xs"
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
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex-shrink-0 flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-500/25"
                      : "bg-white text-stone-700 hover:bg-orange-50 border border-orange-200/80 shadow-2xs"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-orange-600'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Filter & Results Count Bar */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600 mb-6 px-1 font-medium">
          <div>
            Showing <strong className="text-orange-700 font-bold">{filteredDishes.length}</strong> of {allDishes.length} dishes
            {searchQuery && <span> matching "<span className="text-stone-900 font-bold">{searchQuery}</span>"</span>}
          </div>
          {(selectedCategory !== "all" || dietFilter !== "all" || searchQuery !== "") && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietFilter("all");
                setSearchQuery("");
              }}
              className="text-orange-600 hover:text-orange-700 hover:underline font-bold"
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
                  className="group rounded-3xl bg-white border border-orange-100 shadow-warm-sm hover:shadow-warm-lg hover:border-orange-300 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300"
                >
                  {/* Top Dish Card Header with Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-orange-50">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Veg / Non-Veg Indicator Badge */}
                    <div 
                      className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-white/95 border border-orange-100 shadow-sm backdrop-blur-sm flex items-center gap-1.5"
                      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
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

                    {/* Chef Special Star */}
                    {dish.isChefSpecial && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 shadow-sm backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        Signature
                      </span>
                    )}

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-white/95 text-orange-600 font-serif font-bold text-base border border-orange-100 shadow-md">
                      ₹{dish.price}
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-3 left-3 text-[10px] font-bold tracking-wider uppercase text-stone-700 bg-white/95 px-2.5 py-1 rounded-lg border border-orange-100 shadow-sm">
                      {dish.categoryName || dish.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Spice Meter */}
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        {renderSpiceIndicator(dish.spiceLevel)}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                        {dish.description}
                      </p>

                      {/* Tag Badges */}
                      {dish.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {dish.tags.slice(0, 3).map((tag, tIdx) => (
                            <span 
                              key={tIdx}
                              className="text-[10px] font-medium px-2.5 py-0.5 rounded-lg bg-orange-50 text-stone-700 border border-orange-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-3 border-t border-orange-100 flex items-center justify-between text-xs text-stone-600 group-hover:text-orange-600 transition-colors">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Info className="w-3.5 h-3.5 text-orange-600" />
                        <span>Gastronomy Notes & Pairing</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center rounded-3xl bg-white border border-orange-200 max-w-lg mx-auto shadow-warm-sm">
            <Utensils className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              No Culinary Creations Found
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-normal mb-6">
              We couldn't find any dishes matching your current search or dietary filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietFilter("all");
                setSearchQuery("");
              }}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md transition-all"
            >
              Show Full Repertoire (44 Dishes)
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
