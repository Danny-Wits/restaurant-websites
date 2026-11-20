import React from 'react';
import { Sparkles, Music, Disc, Heart, Quote, ArrowRight } from 'lucide-react';

export default function HeritageStory({ onOpenReserve }) {
  return (
    <section id="vibe" className="relative py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#FFFDF9] border-t border-orange-100 overflow-hidden w-full max-w-full">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-orange-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Vignette & Vinyl Vibe */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-orange-200/80 shadow-[0_10px_35px_-4px_rgba(234,88,12,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80"
                alt="Raasta Jammu Bohemian Atmosphere"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

              {/* Floating Vinyl Tag */}
              <div className="absolute top-5 left-5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-orange-200 shadow-md flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-orange-600 animate-spin-slow">
                  <Disc className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-orange-600 block font-bold">
                    Analog Lounge
                  </span>
                  <span className="text-xs font-bold text-stone-900">
                    Curated Indie &amp; Sufi Vinyls
                  </span>
                </div>
              </div>

              {/* Floating Quote Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-orange-200 text-xs text-stone-800 italic leading-relaxed shadow-lg">
                <Quote className="w-4 h-4 text-orange-600 mb-1 opacity-80" />
                &ldquo;Raasta isn&apos;t merely a destination; it&apos;s the rhythm in your step, the warmth of laughter over sizzling platters, and the soundtrack of our campus years.&rdquo;
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>The Raasta Soul &bull; Panama Chowk</span>
            </div>

            <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight mb-6 leading-tight">
              Born at the Crossroads of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                Music, Youth &amp; Gastronomy
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed mb-8">
              <p>
                Right outside the historic gates of University of Jammu, where Panama Chowk hums with the city&apos;s heartbeat, Raasta was built to be more than a cafe — it is a sanctuary for Jammu&apos;s creative youth and culinary nomads.
              </p>
              <p className="text-stone-600">
                For years, students and Bahu Plaza professionals had to choose between formal banquet-style family halls or uninspired fast-food franchises. There was no communal living room where you could sip a single-origin nitro cold brew while drafting your thesis, split a bubbling 48-hour sourdough pizza with your squad, and lose yourself in a live acoustic indie guitar set as night settles over Tawi.
              </p>
              <p className="text-stone-600">
                We handpicked weathered timber, lush living monstera, vintage concert prints, and warm filament chandeliers to craft an urban retreat that feels instantly like home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenReserve}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-[0_4px_16px_rgba(234,88,12,0.35)] hover:scale-102 transition-all cursor-pointer"
              >
                <span>Reserve Table or Mezzanine</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-orange-50 border border-stone-200 text-stone-800 font-bold text-sm transition-all shadow-xs"
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
