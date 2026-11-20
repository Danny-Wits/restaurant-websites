import React from 'react';
import { ShieldCheck, Sparkles, Flame, Crown, CheckCircle2 } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function PillarsBanner() {
  const iconMap = {
    segregation: ShieldCheck,
    saffron: Sparkles,
    charcoal: Flame,
    hospitality: Crown
  };

  return (
    <section id="pillars" className="py-20 bg-[#FAFAF7] border-y border-orange-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-orange-600 block mb-2">
            The Aroma Hallmarks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Four Pillars of Uncompromising Integrity
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurantData.pillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="group p-6 rounded-2xl bg-white border border-orange-100 shadow-warm-sm hover:shadow-warm-md hover:border-orange-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:scale-105 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border border-amber-200 text-amber-800 bg-amber-50">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-orange-100 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50/70 px-2.5 py-1.5 rounded-xl border border-emerald-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Guaranteed at Aroma</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
