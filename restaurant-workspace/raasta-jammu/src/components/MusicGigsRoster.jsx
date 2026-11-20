import React, { useState } from 'react';
import {
  Music,
  Calendar,
  Clock,
  Mic2,
  Sparkles,
  Radio,
  ArrowRight,
  Flame,
  Volume2
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function MusicGigsRoster({ onSelectGig }) {
  const [activeDay, setActiveDay] = useState('gig-sat');
  const gigs = restaurantData.liveGigs;

  return (
    <section id="gigs" className="relative py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#FAFAF7] w-full max-w-full overflow-hidden border-t border-orange-100">
      {/* Ambient Soundwave Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-rose-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full max-w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 max-w-full shadow-xs">
            <Radio className="w-4 h-4 animate-pulse text-rose-600 shrink-0" />
            <span className="truncate sm:hidden">Weekly Sonic Curations</span>
            <span className="hidden sm:inline">Weekly Sonic Curations &bull; Stage Front</span>
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-stone-900 tracking-tight mb-4 break-words">
            Jammu&apos;s Premier{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">
              Live Rhythm Sanctuary
            </span>
          </h2>
          <p className="text-xs sm:text-base text-stone-600 leading-relaxed">
            Every Thursday through Sunday, Raasta transforms from a sunlit cafe into an intimate acoustic den and high-energy music lounge. Reserve early for stage-front seating.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar mb-8 sm:mb-10 pb-2 w-full max-w-full">
          {gigs.map((gig) => {
            const isSelected = activeDay === gig.id;
            return (
              <button
                key={gig.id}
                onClick={() => setActiveDay(gig.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold shadow-md shadow-orange-500/25 scale-105'
                    : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200 shadow-xs hover:border-orange-300'
                }`}
              >
                <span>{gig.day}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/25 text-white' : 'bg-stone-100 text-stone-600 font-semibold'
                }`}>
                  {gig.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gig Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {gigs.map((gig) => {
            const isHighlighted = activeDay === gig.id;
            return (
              <div
                key={gig.id}
                onClick={() => setActiveDay(gig.id)}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isHighlighted
                    ? 'bg-white border-2 border-orange-500 shadow-[0_8px_30px_-4px_rgba(234,88,12,0.18)] ring-2 ring-orange-500/20'
                    : 'bg-white border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-orange-300'
                }`}
              >
                {/* Top Image Banner */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-stone-100">
                  <img
                    src={gig.coverImage}
                    alt={gig.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />

                  {/* Day Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-stone-900 font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider shadow-xs">
                      {gig.dateLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[11px] font-bold shadow-xs">
                      {gig.badge}
                    </span>
                  </div>

                  {/* Animated Equalizer Visualizer */}
                  {isHighlighted && (
                    <div className="absolute bottom-4 right-4 flex items-end gap-1 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-orange-200 shadow-sm">
                      <Volume2 className="w-3.5 h-3.5 text-rose-600 mr-1" />
                      <span className="w-1 bg-rose-500 rounded-full equalizer-bar-1" />
                      <span className="w-1 bg-amber-500 rounded-full equalizer-bar-2" />
                      <span className="w-1 bg-emerald-500 rounded-full equalizer-bar-3" />
                      <span className="w-1 bg-rose-500 rounded-full equalizer-bar-4" />
                    </div>
                  )}
                </div>

                {/* Gig Content Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Time & Timing */}
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 mb-2">
                      <Clock className="w-3.5 h-3.5 text-orange-600" />
                      <span>{gig.time}</span>
                      <span className="text-stone-300">&bull;</span>
                      <span className="text-stone-600 font-sans font-semibold">{gig.vibe}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {gig.title}
                    </h3>

                    {/* Artist & Genre */}
                    <div className="flex items-center gap-2 text-sm text-stone-700 mb-3 font-semibold">
                      <Mic2 className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{gig.artist}</span>
                      <span className="text-stone-300">&bull;</span>
                      <span className="text-stone-500 text-xs italic font-normal">{gig.genre}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                      {gig.description}
                    </p>
                  </div>

                  {/* Bottom Action CTA */}
                  <div className="pt-4 border-t border-orange-100 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono font-medium text-stone-500">
                      Free Entry &bull; Min. Cover on Stage Front
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectGig(gig);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white font-bold text-xs shadow-md hover:shadow-orange-500/25 transition-all cursor-pointer"
                    >
                      <span>RSVP Stage Table</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Music Manifesto / Musician Booking Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-orange-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 shadow-xs">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Syne'] font-bold text-base text-stone-900">
                Are You a Singer-Songwriter or Indie Band in Jammu?
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Raasta provides sound engineer support, stage monitoring, and an appreciative audience. Showcase your music on Panama Chowk.
              </p>
            </div>
          </div>
          <a
            href="mailto:events@raastajammu.com?subject=Artist%20Gig%20Inquiry%20-%20Raasta%20Jammu"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-800 font-bold text-xs transition-all shadow-xs"
          >
            Artist Inquiry &bull; events@raastajammu.com
          </a>
        </div>
      </div>
    </section>
  );
}
