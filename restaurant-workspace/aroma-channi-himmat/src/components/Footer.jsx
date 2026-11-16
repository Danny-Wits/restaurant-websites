import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { restaurantData } from '../data/restaurantData';

export default function Footer({ onOpenReservation }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0A0808] border-t border-[#D4AF37]/25 text-[#C8C0B5] pt-16 pb-28 md:pb-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-60 bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#D4AF37]/15">
          
          {/* Logo & Story (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="large" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            
            <p className="text-xs text-[#C8C0B5] font-sans leading-relaxed pt-2">
              {restaurantData.concept}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] px-2.5 py-1 rounded-md bg-[#1A1714] border border-[#D4AF37]/30">
                ★ 4.8 / 5.0 Google Rating
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#10B981] px-2.5 py-1 rounded-md bg-[#1A1714] border border-[#10B981]/30">
                100% Halal & Pure Veg Segregated
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F6F0]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollToSection('story')} 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Our Heritage Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pillars')} 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Culinary Pillars
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('specials')} 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Chef's Spotlight
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Artisanal Menu (44 Dishes)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')} 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Diner Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')} 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Location & Driving Map
                </button>
              </li>
            </ul>
          </div>

          {/* Amenities & Dining Halls (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F6F0]">
              Dining Experiences
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E08E36] flex-shrink-0" />
                <span>Imperial Private Dining Room (PDR)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                <span>Independent Pure Vegetarian Prep Zone</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                <span>Royal Clay Tandoor & Live Sizzlers</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E08E36] flex-shrink-0" />
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F6F0]">
              Table Desk & Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E08E36] flex-shrink-0 mt-0.5" />
                <span>Sector 1, Commercial Belt, Channi Himmat, Jammu - 180015</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${restaurantData.contact.phoneClean}`} className="hover:text-[#D4AF37]">
                  {restaurantData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`mailto:${restaurantData.contact.email}`} className="hover:text-[#D4AF37]">
                  {restaurantData.contact.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0D0B0A] bg-gradient-to-r from-[#D4AF37] to-[#E08E36] hover:brightness-110 shadow-md transition-all text-center"
            >
              Book Table Online
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E867B]">
          <p>
            © {new Date().getFullYear()} Aroma Multi Cuisine Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Crafted for Jammu's Finest Epicures</span>
            <span>•</span>
            <span className="text-[#D4AF37]">Channi Himmat Flagship</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
