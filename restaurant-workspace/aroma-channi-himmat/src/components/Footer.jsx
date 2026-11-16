import React from 'react';
import { Phone, Mail, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { restaurantData } from '../data/restaurantData';

export default function Footer({ onOpenReservation }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#09090b] border-t border-white/[0.06] text-zinc-400 pt-16 pb-28 md:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06]">
          
          {/* Logo & Story (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="large" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            
            <p className="text-xs text-zinc-400 font-light leading-relaxed pt-2">
              {restaurantData.concept}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.08]">
                ★ 4.8 / 5.0 Google Rating
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/80 px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.08]">
                100% Halal & Pure Veg Segregated
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button 
                  onClick={() => scrollToSection('story')} 
                  className="hover:text-zinc-100 transition-colors"
                >
                  Our Heritage Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pillars')} 
                  className="hover:text-zinc-100 transition-colors"
                >
                  Culinary Pillars
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('specials')} 
                  className="hover:text-zinc-100 transition-colors"
                >
                  Chef's Spotlight
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="hover:text-zinc-100 transition-colors"
                >
                  Artisanal Menu (44 Dishes)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')} 
                  className="hover:text-zinc-100 transition-colors"
                >
                  Diner Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')} 
                  className="hover:text-zinc-100 transition-colors"
                >
                  Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Amenities & Dining Halls (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-200">
              Dining Experiences
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>Imperial Private Dining Room (PDR)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Independent Pure Vegetarian Prep Zone</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>Royal Clay Tandoor & Live Sizzlers</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>Curated Candlelight Booths</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>Uniformed Valet at Channi Portico</span>
              </li>
            </ul>
          </div>

          {/* Contact & Reservations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-200">
              Table Desk & Contact
            </h4>
            <div className="space-y-2.5 text-xs font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Sector 1, Commercial Belt, Channi Himmat, Jammu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${restaurantData.contact.phoneClean}`} className="hover:text-zinc-200">
                  {restaurantData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <a href={`mailto:${restaurantData.contact.email}`} className="hover:text-zinc-200">
                  {restaurantData.contact.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-2.5 px-4 rounded-lg text-xs font-medium uppercase tracking-wider text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-colors text-center"
            >
              Book Table Online
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p>
            © {new Date().getFullYear()} Aroma Multi Cuisine Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>Jammu, Jammu & Kashmir</span>
            <span>•</span>
            <span className="text-[#D4AF37]">Channi Himmat Flagship</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
