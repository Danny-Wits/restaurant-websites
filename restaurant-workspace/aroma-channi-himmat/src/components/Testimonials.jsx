import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function Testimonials() {
  const reviews = restaurantData.testimonials;

  return (
    <section id="reviews" className="py-24 bg-[#FAFAF7] border-t border-orange-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-orange-600 mb-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Voices of Jammu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Cherished by Jammu's Finest Diners
            </h2>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="mt-4 md:mt-0 p-4 rounded-2xl bg-white border border-orange-200/80 shadow-warm-sm flex items-center gap-4">
            <div className="text-3xl font-serif font-bold text-orange-600">
              {restaurantData.rating}
            </div>
            <div className="border-l border-orange-100 pl-4">
              <div className="flex items-center gap-0.5 text-amber-500 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-stone-600 font-semibold">
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
              className="p-8 rounded-3xl bg-white border border-orange-100 shadow-warm-sm hover:shadow-warm-md hover:border-orange-300 relative transition-all duration-300 flex flex-col justify-between group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-orange-100/90 pointer-events-none group-hover:text-orange-200 transition-colors" />

              <div>
                {/* Top Row: Stars + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border border-orange-200 text-orange-800 bg-orange-50">
                    {rev.tag}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif text-base sm:text-lg text-stone-800 italic font-medium leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-orange-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-stone-600 font-normal">
                    {rev.role}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-stone-500 font-medium block">
                    {rev.date}
                  </span>
                  <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full inline-flex items-center gap-1 font-bold mt-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
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
