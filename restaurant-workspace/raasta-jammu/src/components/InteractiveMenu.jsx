import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  Coffee,
  UtensilsCrossed,
  Pizza,
  Sandwich,
  Flame,
  IceCream,
  Sparkles,
  FlameKindling,
  GraduationCap,
  Clock,
  Eye,
  Check,
  Star
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function InteractiveMenu({ onSelectDish }) {
  const [activeCategory, setActiveCategory] = useState('all-day-sips');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = restaurantData.menuCategories;

  // Flatten all items for unified search/filtering
  const allDishes = useMemo(() => {
    return categories.flatMap(cat =>
      cat.items.map(item => ({
        ...item,
        categoryName: cat.name
      }))
    );
  }, [categories]);

  // Filter criteria options
  const filterTabs = [
    { id: 'all', label: 'All Items' },
    { id: 'veg', label: 'Pure Veg', icon: '🟢' },
    { id: 'non-veg', label: 'Non-Veg', icon: '🔴' },
    { id: 'crowd-favorite', label: 'Crowd Favorite', icon: '🔥' },
    { id: 'chef-special', label: "Chef's Special", icon: '⭐' },
    { id: 'student-budget', label: 'Under ₹300 (Student Pick)', icon: '🎓' },
  ];

  // Category Icon Map
  const categoryIcons = {
    'all-day-sips': Coffee,
    'loaded-bites': UtensilsCrossed,
    'artisanal-pizzas': Pizza,
    'burgers-sliders-baos': Sandwich,
    'soul-bowls-pasta-sizzlers': Flame,
    'decadent-desserts': IceCream,
  };

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    let list = allDishes;

    // Category filter: only apply if search query is empty OR if user explicitly changed category
    if (!searchQuery.trim() && activeCategory !== 'all') {
      list = list.filter(item => item.category === activeCategory);
    }

    // Secondary attribute filters
    if (selectedFilter === 'veg') {
      list = list.filter(item => item.diet === 'veg');
    } else if (selectedFilter === 'non-veg') {
      list = list.filter(item => item.diet === 'non-veg');
    } else if (selectedFilter === 'crowd-favorite') {
      list = list.filter(item => item.isCrowdFavorite);
    } else if (selectedFilter === 'chef-special') {
      list = list.filter(item => item.isChefSpecial);
    } else if (selectedFilter === 'student-budget') {
      list = list.filter(item => item.price <= 300);
    }

    // Search query matching
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q))) ||
        item.categoryName.toLowerCase().includes(q)
      );
    }

    return list;
  }, [allDishes, activeCategory, selectedFilter, searchQuery]);

  return (
    <section id="menu" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#161917]/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>40 Artisanal Creations &bull; Panama Chowk Kitchen</span>
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl text-zinc-100 tracking-tight mb-4">
            The Digital{' '}
            <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Culinary Menu
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            From 18-hour slow nitro extractions and 48-hour fermented sourdough crusts to double-smashed brioche burgers and hissing cast-iron platters.
          </p>
        </div>

        {/* Search & Quick Filter Controls */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative mb-4">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. cold brew, truffle, sourdough, smash burger, bao, sizzler)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#1E2220] border border-amber-500/25 focus:border-amber-400 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary & Badge Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-500 text-zinc-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-102'
                      : 'bg-[#1E2220] text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {tab.icon && <span>{tab.icon}</span>}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky Category Bar (Only visible when not actively searching) */}
        {!searchQuery && (
          <div className="sticky top-16 z-30 py-3 mb-8 bg-[#0F1110]/95 backdrop-blur-md border-y border-amber-500/20 shadow-md">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-5xl mx-auto px-2">
              {categories.map((cat) => {
                const isCatActive = activeCategory === cat.id;
                const Icon = categoryIcons[cat.id] || Sparkles;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                      isCatActive
                        ? 'bg-amber-500 text-zinc-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                        : 'bg-[#1E2220] text-zinc-400 hover:text-zinc-200 border border-zinc-800/80 hover:border-amber-500/30'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isCatActive ? 'bg-zinc-900/30 text-zinc-950' : 'bg-white/[0.06] text-zinc-400'
                    }`}>
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Current Filter Meta Header */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 px-1">
          <span>
            Showing <strong className="text-amber-400 font-mono text-sm">{filteredDishes.length}</strong> creations
            {searchQuery && <span> matching &ldquo;<span className="text-zinc-200">{searchQuery}</span>&rdquo;</span>}
          </span>
          <span className="font-mono text-[11px] text-zinc-400">
            Panama Chowk Craft Kitchen
          </span>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => {
              const isVeg = dish.diet === 'veg';

              return (
                <div
                  key={dish.id}
                  onClick={() => onSelectDish(dish)}
                  className="group rounded-3xl bg-[#1E2220] border border-amber-500/15 hover:border-amber-500/50 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  {/* Dish Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2220] via-transparent to-black/30" />

                    {/* Dietary Icon Top Left */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center p-0.5 bg-black/70 backdrop-blur-md ${
                          isVeg ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                        title={isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                      </div>

                      {dish.isChefSpecial && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500 text-zinc-950 font-extrabold text-[10px] tracking-wide shadow-sm flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 fill-zinc-950" />
                          <span>Chef's Special</span>
                        </span>
                      )}

                      {dish.isCrowdFavorite && (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500/90 text-white font-extrabold text-[10px] tracking-wide shadow-sm flex items-center gap-1">
                          <span>🔥</span>
                          <span>Bestseller</span>
                        </span>
                      )}
                    </div>

                    {/* Quick View Button on Image */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-amber-400 text-xs font-semibold border border-amber-500/40">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Recipe</span>
                      </span>
                    </div>

                    {/* Prep Time & Calories Tag */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{dish.prepTime}</span>
                      <span>&bull;</span>
                      <span>{dish.calories}</span>
                    </div>
                  </div>

                  {/* Dish Body Content */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      {/* Name and Price Header */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-['Syne'] font-bold text-lg text-zinc-100 group-hover:text-amber-400 transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        <div className="shrink-0 font-['JetBrains_Mono'] font-bold text-lg text-amber-400">
                          ₹{dish.price}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                        {dish.description}
                      </p>

                      {/* Spice Level Indicator & Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        {dish.spiceLevel > 0 && (
                          <span
                            className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/25 text-rose-400 text-[10px] font-bold"
                            title={`Spice Level: ${dish.spiceLevel}/3`}
                          >
                            {'🌶️'.repeat(dish.spiceLevel)}
                            <span className="ml-1">Spicy</span>
                          </span>
                        )}

                        {dish.tags && dish.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-zinc-800 text-zinc-400 text-[10px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        Tap for pairing &amp; craft notes
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectDish(dish);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Details</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h4 className="font-['Syne'] font-bold text-xl text-zinc-200 mb-2">
              No Culinary Creations Match
            </h4>
            <p className="text-xs text-zinc-400 mb-6">
              We couldn't find any dishes matching &ldquo;{searchQuery}&rdquo;. Try another keyword like &ldquo;truffle&rdquo;, &ldquo;sourdough&rdquo;, &ldquo;burger&rdquo;, or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
                setActiveCategory('all-day-sips');
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs"
            >
              Reset Filters &amp; View All Dishes
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
