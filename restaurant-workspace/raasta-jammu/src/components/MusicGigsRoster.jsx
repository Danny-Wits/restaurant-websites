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
    <section id="gigs" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1110]">
      {/* Ambient Soundwave Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/35 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Radio className="w-4 h-4 animate-pulse text-rose-400" />
            <span>Weekly Sonic Curations &bull; Stage Front</span>
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-100 tracking-tight mb-4">
            Jammu's Premier{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-400 to-amber-300">
              Live Rhythm Sanctuary
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Every Thursday through Sunday, Raasta transforms from a sunlit cafe into an intimate acoustic den and high-energy music lounge. Reserve early for stage-front seating.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar mb-10 pb-2">
          {gigs.map((gig) => {
            const isSelected = activeDay === gig.id;
            return (
              <button
                key={gig.id}
                onClick={() => setActiveDay(gig.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-rose-500 text-white font-bold shadow-[0_0_20px_rgba(244,63,94,0.45)] scale-105'
                    : 'bg-[#1E2220] text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <span>{gig.day}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-black/30 text-white' : 'bg-white/[0.06] text-zinc-400'
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
                    ? 'bg-[#1E2220] border-rose-500/60 shadow-[0_0_35px_rgba(244,63,94,0.25)] ring-1 ring-rose-500/50'
                    : 'bg-[#161917] border-amber-500/15 hover:border-amber-500/40 opacity-90 hover:opacity-100'
                }`}
              >
                {/* Top Image Banner */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={gig.coverImage}
                    alt={gig.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2220] via-[#1E2220]/50 to-transparent" />

                  {/* Day Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider">
                      {gig.dateLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/90 text-white text-[11px] font-bold">
                      {gig.badge}
                    </span>
                  </div>

                  {/* Animated Equalizer Visualizer */}
                  {isHighlighted && (
                    <div className="absolute bottom-4 right-4 flex items-end gap-1 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-rose-500/30">
                      <Volume2 className="w-3.5 h-3.5 text-rose-400 mr-1" />
                      <span className="w-1 bg-rose-400 rounded-full equalizer-bar-1" />
                      <span className="w-1 bg-amber-400 rounded-full equalizer-bar-2" />
                      <span className="w-1 bg-emerald-400 rounded-full equalizer-bar-3" />
                      <span className="w-1 bg-rose-400 rounded-full equalizer-bar-4" />
                    </div>
                  )}
                </div>

                {/* Gig Content Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Time & Timing */}
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{gig.time}</span>
                      <span className="text-zinc-600">&bull;</span>
                      <span className="text-zinc-300 font-sans">{gig.vibe}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-zinc-100 mb-2 group-hover:text-rose-400 transition-colors">
                      {gig.title}
                    </h3>

                    {/* Artist & Genre */}
                    <div className="flex items-center gap-2 text-sm text-zinc-300 mb-3 font-medium">
                      <Mic2 className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{gig.artist}</span>
                      <span className="text-zinc-600">&bull;</span>
                      <span className="text-zinc-400 text-xs italic">{gig.genre}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {gig.description}
                    </p>
                  </div>

                  {/* Bottom Action CTA */}
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono text-zinc-400">
                      Free Entry &bull; Min. Cover on Stage Front
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectGig(gig);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-semibold text-xs shadow-md hover:shadow-rose-500/30 transition-all cursor-pointer"
                    >
                      <span>RSVP / Reserve Stage Table</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Music Manifesto / Musician Booking Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#161917] border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Syne'] font-bold text-base text-zinc-100">
                Are You a Singer-Songwriter or Indie Band in Jammu?
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Raasta provides sound engineer support, stage monitoring, and an appreciative audience. Showcase your music on Panama Chowk.
              </p>
            </div>
          </div>
          <a
            href="mailto:events@raastajammu.com?subject=Artist%20Gig%20Inquiry%20-%20Raasta%20Jammu"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-zinc-700 hover:border-amber-400 text-zinc-200 hover:text-amber-400 text-xs font-semibold transition-all"
          >
            Artist Inquiry &bull; events@raastajammu.com
          </a>
        </div>
      </div>
    </section>
  );
}
