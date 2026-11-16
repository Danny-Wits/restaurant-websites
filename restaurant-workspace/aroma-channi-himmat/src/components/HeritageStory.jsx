import React from 'react';
import { Quote, Sparkles, UtensilsCrossed } from 'lucide-react';
import roganJoshImg from '../assets/rogan-josh.jpg';

export default function HeritageStory() {
  return (
    <section id="story" className="py-24 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Mosaic Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Slow simmered brass degh / Wazwan art */}
              <div className="relative rounded-xl overflow-hidden border border-white/[0.08] aspect-[4/5]">
                <img
                  src={roganJoshImg}
                  alt="Authentic Kashmiri Wazwan Rogan Josh simmered in copper degh"
                  className="w-full h-full object-cover filter brightness-90 hover:scale-[1.03] transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge on Main Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121214]/90 backdrop-blur-md border border-white/[0.08]">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#D4AF37] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Saffron Legacy</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Hand-harvested Kishtwar saffron & natural Kashmiri cockscomb (mawal) flower extraction.
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Image: Live Samovar Kehwa */}
              <div className="hidden sm:block absolute -top-6 -right-6 w-40 h-48 rounded-xl overflow-hidden border border-white/10 shadow-2xl z-20">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=85"
                  alt="Traditional Brass Samovar Kehwa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-2.5 left-2.5 text-[9px] font-mono uppercase tracking-wider bg-black/80 px-2 py-0.5 rounded border border-white/10 text-[#D4AF37]">
                  Live Kehwa Samovar
                </div>
              </div>

            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-light text-[#D4AF37] block mb-2">
                The Aroma Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-100 leading-tight tracking-tight">
                A Legacy of Warmth in the <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#D4AF37]">City of Temples</span>
              </h2>
            </div>

            <p className="font-serif text-lg text-zinc-200 italic font-light leading-relaxed border-l border-[#D4AF37]/60 pl-4">
              "At Aroma, we believe dining is not merely sustenance — it is a communion of fire, heirloom botanicals, and Jammu's legendary Mehmaan-Nawaazi."
            </p>

            <div className="space-y-4 text-sm text-zinc-400 font-light leading-relaxed">
              <p>
                Situated in the prestigious heart of <strong className="text-zinc-200 font-normal">Sector 1 Channi Himmat</strong>, Aroma was conceived to bring the true aristocratic culinary heritage of Jammu and Kashmir to life. Our culinary journey pays homage to the slow-cooking methods of royal Mughal kitchens and authentic Kashmiri Wazwan guilds.
              </p>
              <p>
                We never compromise on provenance: our saffron travels straight from the terraced meadows of Kishtwar, our dried cockscomb (mawal) is harvested by hand in the Kashmir Valley to yield that majestic ruby glow in our Rogan Josh, and our clay tandoors are fueled exclusively by natural charcoal for that unmistakable rustic fragrance.
              </p>
              <p>
                Whether hosting grand celebratory family gatherings in our plush banquet suites or indulging in quiet candlelight dinner moments, every guest at Aroma is greeted with the venerable warmth that Jammu has cherished for centuries.
              </p>
            </div>

            {/* Chef Quote Card */}
            <div className="mt-8 p-6 rounded-xl bg-[#121214] border border-white/[0.06] relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/[0.04] pointer-events-none" />
              <p className="font-serif text-base text-zinc-300 italic font-light mb-3">
                "A dish without genuine aroma is a story half-told. We slow-cook every degh until the spices whisper perfection."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#D4AF37]">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200 uppercase tracking-wider">
                    Executive Chef Ghulam Mohiuddin
                  </h4>
                  <span className="text-[11px] text-zinc-500 font-mono">
                    3rd-Generation Wazwan & Charcoal Tandoor Master
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
