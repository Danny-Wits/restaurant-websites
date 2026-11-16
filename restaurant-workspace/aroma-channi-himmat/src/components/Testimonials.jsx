import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function Testimonials() {
  const reviews = restaurantData.testimonials;

  return (
    <section id="reviews" className="py-24 bg-[#14110F] border-t border-[#D4AF37]/20 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#E08E36] mb-2">
              <Star className="w-4 h-4 fill-[#E08E36]" />
              <span>Voices of Jammu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0]">
              Cherished by Jammu's Finest Diners
            </h2>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="mt-4 md:mt-0 p-4 rounded-2xl bg-[#1A1714] border border-[#D4AF37]/30 flex items-center gap-4 shadow-lg">
            <div className="text-3xl font-serif font-bold text-[#D4AF37]">
              {restaurantData.rating}
            </div>
            <div className="border-l border-white/10 pl-4">
              <div className="flex items-center gap-1 text-[#F59E0B] mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-[11px] text-[#C8C0B5] font-sans">
                {restaurantData.reviewCount} Verified Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-[#1A1714] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 relative transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#D4AF37]/10 pointer-events-none" />

              <div>
                {/* Top Row: Stars + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#25201B] text-[#D4AF37] border border-[#D4AF37]/25">
                    {rev.tag}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif text-base sm:text-lg text-[#F8F6F0] italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#F8F6F0]">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#8E867B] font-sans">
                    {rev.role}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#8E867B] font-mono block">
                    {rev.date}
                  </span>
                  <span className="text-[10px] text-[#10B981] flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
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
