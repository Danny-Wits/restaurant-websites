import React from 'react';
import { Quote, Sparkles, UtensilsCrossed } from 'lucide-react';
import roganJoshImg from '../assets/rogan-josh.jpg';

export default function HeritageStory() {
  return (
    <section id="story" className="py-24 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Mosaic Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Slow simmered brass degh / Wazwan art */}
              <div className="relative rounded-3xl overflow-hidden border border-orange-200/90 shadow-warm-lg aspect-[4/5] bg-orange-50">
                <img
                  src={roganJoshImg}
                  alt="Authentic Kashmiri Wazwan Rogan Josh simmered in copper degh"
                  className="w-full h-full object-cover filter contrast-105 hover:scale-[1.03] transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85";
                  }}
                />
                
                {/* Floating Badge on Main Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-orange-200/90 shadow-warm-md">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Saffron Legacy</span>
                  </div>
                  <p className="text-xs text-stone-700 font-medium leading-relaxed">
                    Hand-harvested Kishtwar saffron & natural Kashmiri cockscomb (mawal) flower extraction.
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Image: Live Samovar Kehwa */}
              <div className="hidden sm:block absolute -top-6 -right-6 w-44 h-52 rounded-2xl overflow-hidden border-4 border-white shadow-warm-lg z-20">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=85"
                  alt="Traditional Brass Samovar Kehwa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 text-[10px] font-semibold uppercase tracking-wider bg-orange-600 text-white px-2.5 py-1 rounded-full shadow-sm">
                  Live Kehwa Samovar
                </div>
              </div>

            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-orange-600 block mb-2">
                The Aroma Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                A Legacy of Warmth in the <br className="hidden sm:inline" />
                <span className="italic font-semibold text-orange-600">City of Temples</span>
              </h2>
            </div>

            <p className="font-serif text-lg text-stone-800 italic font-medium leading-relaxed border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/60 rounded-r-2xl">
              "At Aroma, we believe dining is not merely sustenance — it is a communion of fire, heirloom botanicals, and Jammu's legendary Mehmaan-Nawaazi."
            </p>

            <div className="space-y-4 text-sm text-stone-700 font-normal leading-relaxed">
              <p>
                Situated in the prestigious heart of <strong className="text-stone-900 font-semibold">Sector 1 Channi Himmat</strong>, Aroma was conceived to bring the true aristocratic culinary heritage of Jammu and Kashmir to life. Our culinary journey pays homage to the slow-cooking methods of royal Mughal kitchens and authentic Kashmiri Wazwan guilds.
              </p>
              <p>
                We never compromise on provenance: our saffron travels straight from the terraced meadows of Kishtwar, our dried cockscomb (mawal) is harvested by hand in the Kashmir Valley to yield that majestic ruby glow in our Rogan Josh, and our clay tandoors are fueled exclusively by natural charcoal for that unmistakable rustic fragrance.
              </p>
              <p>
                Whether hosting grand celebratory family gatherings in our plush banquet suites or indulging in intimate candlelight dinner moments, every guest at Aroma is greeted with the venerable warmth that Jammu has cherished for centuries.
              </p>
            </div>

            {/* Chef Quote Card */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-orange-200/80 shadow-warm-sm relative">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-orange-200/80 pointer-events-none" />
              <p className="font-serif text-base sm:text-lg text-stone-800 italic font-medium mb-4">
                "A dish without genuine aroma is a story half-told. We slow-cook every degh until the spices whisper perfection."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shadow-2xs">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Executive Chef Ghulam Mohiuddin
                  </h4>
                  <span className="text-[11px] text-stone-600 font-medium font-sans">
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
