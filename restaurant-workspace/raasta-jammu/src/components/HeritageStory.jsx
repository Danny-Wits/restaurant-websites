import React from 'react';
import { Sparkles, Music, Disc, Heart, Quote, ArrowRight } from 'lucide-react';

export default function HeritageStory({ onOpenReserve }) {
  return (
    <section id="vibe" className="relative py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#161917]/90 border-t border-amber-500/15 overflow-hidden w-full max-w-full">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Vignette & Vinyl Vibe */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_0_35px_rgba(245,158,11,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80"
                alt="Raasta Jammu Bohemian Atmosphere"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1110] via-black/40 to-transparent" />

              {/* Floating Vinyl Tag */}
              <div className="absolute top-5 left-5 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-amber-500/30 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 animate-spin-slow">
                  <Disc className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block font-bold">
                    Analog Lounge
                  </span>
                  <span className="text-xs font-semibold text-zinc-200">
                    Curated Indie &amp; Sufi Vinyls
                  </span>
                </div>
              </div>

              {/* Floating Quote Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-xs text-zinc-300 italic leading-relaxed">
                <Quote className="w-4 h-4 text-amber-400 mb-1 opacity-70" />
                &ldquo;Raasta isn't merely a destination; it's the rhythm in your step, the warmth of laughter over sizzling platters, and the soundtrack of our campus years.&rdquo;
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>The Raasta Soul &bull; Panama Chowk</span>
            </div>

            <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-zinc-100 tracking-tight mb-6 leading-tight">
              Born at the Crossroads of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Music, Youth &amp; Gastronomy
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
              <p>
                Right outside the historic gates of University of Jammu, where Panama Chowk hums with the city&apos;s heartbeat, Raasta was built to be more than a cafe — it is a sanctuary for Jammu&apos;s creative youth and culinary nomads.
              </p>
              <p className="text-zinc-400">
                For years, students and Bahu Plaza professionals had to choose between formal banquet-style family halls or uninspired fast-food franchises. There was no communal living room where you could sip a single-origin nitro cold brew while drafting your thesis, split a bubbling 48-hour sourdough pizza with your squad, and lose yourself in a live acoustic indie guitar set as night settles over Tawi.
              </p>
              <p className="text-zinc-400">
                We handpicked weathered timber, lush living monstera, vintage concert prints, and warm filament chandeliers to craft an urban retreat that feels instantly like home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenReserve}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-950 font-bold text-sm shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-102 transition-all cursor-pointer"
              >
                <span>Reserve Table or Mezzanine</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-zinc-700 text-zinc-200 font-semibold text-sm transition-all"
              >
                <span>Browse Artisan Menu</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
