import React from 'react';
import { Quote, Sparkles, Award, UtensilsCrossed } from 'lucide-react';

export default function HeritageStory() {
  return (
    <section id="story" className="py-24 bg-[#0D0B0A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E08E36]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Mosaic Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Slow simmered brass degh / Wazwan art */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=1000&q=85"
                  alt="Authentic Kashmiri Wazwan Rogan Josh simmered in copper degh"
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge on Main Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1A1714]/90 backdrop-blur-md border border-[#D4AF37]/30">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#E08E36]" />
                    <span>The Saffron Legacy</span>
                  </div>
                  <p className="text-xs text-[#C8C0B5] font-sans">
                    Hand-harvested Kishtwar saffron & natural Kashmiri cockscomb (mawal) flower extraction.
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Image: Live Samovar Kehwa */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-44 h-52 rounded-xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl z-20">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=85"
                  alt="Traditional Brass Samovar Kehwa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0D0B0A]/30" />
                <div className="absolute bottom-2 left-2 text-[10px] font-mono uppercase bg-[#0D0B0A]/90 px-2 py-0.5 rounded text-[#D4AF37] border border-[#D4AF37]/30">
                  Live Kehwa Samovar
                </div>
              </div>

              {/* Decorative Gold Leaf Border Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-[#D4AF37]/40 rounded-bl-3xl -z-10 pointer-events-none" />
            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#E08E36] block mb-2">
                The Aroma Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0] leading-tight">
                A Legacy of Warmth in the <br className="hidden sm:inline" />
                <span className="text-[#D4AF37]">City of Temples</span>
              </h2>
            </div>

            <p className="font-serif text-lg text-[#F8F6F0] italic font-normal leading-relaxed border-l-2 border-[#D4AF37] pl-4">
              "At Aroma, we believe dining is not merely sustenance — it is a communion of fire, heirloom botanicals, and Jammu's legendary Mehmaan-Nawaazi."
            </p>

            <div className="space-y-4 text-sm text-[#C8C0B5] font-sans leading-relaxed">
              <p>
                Situated in the prestigious heart of <strong className="text-[#F8F6F0]">Sector 1 Channi Himmat</strong>, Aroma was conceived to bring the true aristocratic culinary heritage of Jammu and Kashmir to life. Our culinary journey pays homage to the slow-cooking methods of royal Mughal kitchens and authentic Kashmiri Wazwan guilds.
              </p>
              <p>
                We never compromise on provenance: our saffron travels straight from the terraced meadows of Kishtwar, our dried cockscomb (mawal) is harvested by hand in the Kashmir Valley to yield that majestic ruby glow in our Rogan Josh, and our clay tandoors are fueled exclusively by natural charcoal for that unmistakable rustic fragrance.
              </p>
              <p>
                Whether hosting grand celebratory family gatherings in our plush banquet suites or indulging in quiet candlelight dinner moments, every guest at Aroma is greeted with the venerable warmth that Jammu has cherished for centuries.
              </p>
            </div>

            {/* Chef Quote Card */}
            <div className="mt-8 p-6 rounded-2xl bg-[#1A1714] border border-[#D4AF37]/25 relative shadow-lg">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-[#D4AF37]/15 pointer-events-none" />
              <p className="font-serif text-base text-[#F8F6F0] italic mb-3">
                "A dish without genuine aroma is a story half-told. We slow-cook every degh until the spices whisper perfection."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25201B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F8F6F0] uppercase tracking-wider">
                    Executive Chef Ghulam Mohiuddin
                  </h4>
                  <span className="text-[11px] text-[#8E867B] font-mono">
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
