import React from 'react';
import { Star, Quote, CheckCircle, GraduationCap } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function Testimonials() {
  const { testimonials, restaurant } = restaurantData;

  return (
    <section className="relative py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#0F1110] w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full max-w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 max-w-full">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
            <span>{restaurant.rating} Rating &bull; {restaurant.reviewCount} Reviews</span>
          </div>
          <h2 className="font-['Syne'] font-extrabold text-2xl sm:text-4xl text-zinc-100 tracking-tight mb-3 break-words">
            Voices of Panama Chowk
          </h2>
          <p className="text-sm text-zinc-400">
            What Jammu University scholars, local musicians, and Bahu Plaza executives say about the Raasta rhythm.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-[#161917] border border-amber-500/15 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Rating stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-700" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-['Syne'] font-bold text-sm text-zinc-100">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <span>{item.role}</span>
                    <span>&bull;</span>
                    <span className="text-amber-400 font-semibold">{item.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
