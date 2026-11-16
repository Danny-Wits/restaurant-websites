import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function Testimonials() {
  const reviews = restaurantData.testimonials;

  return (
    <section id="reviews" className="py-24 bg-[#09090b] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-light text-[#D4AF37] mb-2">
              <Star className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Voices of Jammu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-100 tracking-tight">
              Cherished by Jammu's Finest Diners
            </h2>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="mt-4 md:mt-0 p-4 rounded-xl bg-[#121214] border border-white/[0.08] flex items-center gap-4">
            <div className="text-3xl font-serif font-light text-[#D4AF37]">
              {restaurantData.rating}
            </div>
            <div className="border-l border-white/[0.08] pl-4">
              <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-[11px] text-zinc-400 font-light">
                {restaurantData.reviewCount} Verified Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-xl bg-[#121214] border border-white/[0.06] hover:border-white/15 relative transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/[0.03] pointer-events-none" />

              <div>
                {/* Top Row: Stars + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400/90">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-white/10 text-zinc-400 bg-white/[0.02]">
                    {rev.tag}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif text-base sm:text-lg text-zinc-200 italic font-light leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-medium text-zinc-100">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-zinc-500 font-light">
                    {rev.role}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-zinc-500 font-mono block">
                    {rev.date}
                  </span>
                  <span className="text-[10px] text-zinc-400 flex items-center gap-1 font-light">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400/70" />
                    Verified Patron
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
