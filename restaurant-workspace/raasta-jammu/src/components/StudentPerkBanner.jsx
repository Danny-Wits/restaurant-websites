import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  Percent,
  Wifi,
  Users2,
  Mic,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function StudentPerkBanner({ onOpenReserve }) {
  const [copied, setCopied] = useState(false);
  const perks = restaurantData.campusPerks;

  const handleCopyCode = () => {
    navigator.clipboard.writeText('RAASTA-JU-15');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="campus" className="relative py-14 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-amber-50/50 via-orange-50/30 to-[#FFFDF9] border-y border-orange-100 w-full max-w-full">
      {/* Decorative Emerald & Amber Ambient Glow */}
      <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:w-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full max-w-full">
        {/* Banner Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 max-w-full shadow-xs">
              <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="truncate sm:hidden">Univ. of Jammu &bull; Student Perks</span>
              <span className="hidden sm:inline">University of Jammu &bull; Official Student Sanctuary</span>
            </div>
            <h2 className="font-['Syne'] font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight break-words">
              Flash Your Student ID for{' '}
              <span className="text-emerald-700 underline decoration-emerald-400 decoration-wavy">
                Flat 15% Off
              </span>
            </h2>
            <p className="text-xs sm:text-base text-stone-600 mt-2 max-w-xl leading-relaxed">
              2 minutes from Gate 2. We power your exam sprints, society meetings, thesis write-ups, and post-lecture celebrations.
            </p>
          </div>

          {/* Quick Copy Promo Code Box */}
          <div className="flex items-center justify-between sm:justify-start gap-3 p-3.5 rounded-2xl bg-white border-2 border-dashed border-orange-300 shadow-sm shrink-0 w-full sm:w-auto max-w-full">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block font-semibold">
                Digital Campus Code
              </span>
              <span className="font-mono font-extrabold text-base sm:text-lg text-orange-600 tracking-wider">
                RAASTA-JU-15
              </span>
            </div>
            <button
              onClick={handleCopyCode}
              className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all cursor-pointer flex items-center gap-1.5 text-xs shadow-xs shrink-0"
              title="Copy Promo Code"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-full">
          {perks.highlights.map((perk, idx) => {
            const icons = {
              Percent: Percent,
              Wifi: Wifi,
              Users2: Users2,
              Sparkles: Mic
            };
            const IconComponent = icons[perk.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Syne'] font-bold text-base text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-orange-100 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span>Panama Chowk Gate 2</span>
                  <span className="text-emerald-700 font-bold">&bull; Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-8 p-4.5 rounded-2xl bg-white border border-orange-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left w-full max-w-full">
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            <strong className="text-orange-600 font-bold">Valid on all 40 dishes &amp; cold brews:</strong> Simply present your physical college ID card or show your University portal profile during billing (11:00 AM – 06:00 PM, Monday to Friday).
          </p>
          <button
            onClick={onOpenReserve}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-xs shadow-md hover:shadow-orange-500/25 transition-all cursor-pointer"
          >
            <span>Book Student Table</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
