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
    <section id="pillars" className="py-16 bg-[#14110F] border-y border-[#D4AF37]/20 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E08E36] block mb-2">
            The Aroma Hallmarks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F6F0]">
            Four Pillars of Uncompromising Integrity
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurantData.pillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="group p-6 rounded-2xl bg-[#1A1714] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#25201B] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25201B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:text-[#F3E9C7] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0D0B0A] text-[#E08E36] border border-[#E08E36]/30">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#C8C0B5] leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-medium text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
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
