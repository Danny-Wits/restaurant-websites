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
    <footer className="bg-[#F8F4EE] border-t border-orange-200/80 text-stone-700 pt-16 pb-28 md:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-orange-200/60">
          
          {/* Logo & Story (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="large" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            
            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed pt-2">
              {restaurantData.concept}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-2xs">
                ★ 4.8 / 5.0 Google Rating
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 px-3 py-1 rounded-full bg-white border border-emerald-200 shadow-2xs">
                100% Halal & Segregated Pure Veg Kitchen
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-900">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button 
                  onClick={() => scrollToSection('story')} 
                  className="hover:text-orange-600 transition-colors"
                >
                  Our Heritage Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pillars')} 
                  className="hover:text-orange-600 transition-colors"
                >
                  Culinary Pillars
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('specials')} 
                  className="hover:text-orange-600 transition-colors"
                >
                  Chef's Spotlight
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="hover:text-orange-600 transition-colors"
                >
                  Artisanal Menu (44 Dishes)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')} 
                  className="hover:text-orange-600 transition-colors"
                >
                  Diner Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')} 
                  className="hover:text-orange-600 transition-colors"
                >
                  Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Amenities & Dining Halls (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-900">
              Dining Experiences
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Imperial Private Dining Room (PDR)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Segregated Pure Vegetarian Preparation</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Royal Clay Tandoor & Live Sizzlers</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Curated Candlelight Booths</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Uniformed Valet at Channi Portico</span>
              </li>
            </ul>
          </div>

          {/* Contact & Reservations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-900">
              Table Desk & Contact
            </h4>
            <div className="space-y-2.5 text-xs font-medium text-stone-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>Sector 1, Commercial Belt, Channi Himmat, Jammu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <a href={`tel:${restaurantData.contact.phoneClean}`} className="hover:text-orange-600 transition-colors">
                  {restaurantData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <a href={`mailto:${restaurantData.contact.email}`} className="hover:text-orange-600 transition-colors">
                  {restaurantData.contact.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 transition-all shadow-md shadow-orange-500/20 text-center"
            >
              Book Table Online
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 font-medium">
          <p>
            © {new Date().getFullYear()} Aroma Multi Cuisine Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>Jammu, Jammu & Kashmir</span>
            <span>•</span>
            <span className="text-orange-700 font-bold">Channi Himmat Flagship</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
