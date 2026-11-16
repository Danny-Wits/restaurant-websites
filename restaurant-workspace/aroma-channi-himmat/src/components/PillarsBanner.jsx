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
    <section id="pillars" className="py-20 bg-[#09090b] border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-light text-[#D4AF37] block mb-2">
            The Aroma Hallmarks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-zinc-100">
            Four Pillars of Uncompromising Integrity
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto mt-4" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {restaurantData.pillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="group p-6 rounded-xl bg-[#121214] border border-white/[0.06] hover:border-[#D4AF37]/35 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#D4AF37] transition-colors group-hover:border-[#D4AF37]/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-white/[0.08] text-zinc-400 bg-white/[0.02]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-zinc-100 group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-light text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
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
