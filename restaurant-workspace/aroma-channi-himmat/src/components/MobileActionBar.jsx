import React from 'react';
import { Phone, Utensils, Navigation, Calendar } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function MobileActionBar({ onOpenReservation }) {
  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      const navOffset = 70;
      const elementPosition = menuEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside 
      aria-label="Quick mobile dining actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#09090b]/95 backdrop-blur-lg border-t border-white/[0.08] py-2 px-3 shadow-lg"
    >
      <div className="grid grid-cols-4 gap-2 items-center">
        
        {/* Call button */}
        <a
          href={`tel:${restaurantData.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors"
          title="Call Aroma Restaurant"
        >
          <Phone className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="text-[10px] font-normal tracking-wider uppercase">Call</span>
        </a>

        {/* Menu button */}
        <button
          onClick={scrollToMenu}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors"
          title="Browse Menu"
        >
          <Utensils className="w-4 h-4 text-zinc-300 mb-0.5" />
          <span className="text-[10px] font-normal tracking-wider uppercase">Menu</span>
        </button>

        {/* Directions button */}
        <a
          href={restaurantData.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors"
          title="Google Maps Navigation"
        >
          <Navigation className="w-4 h-4 text-zinc-300 mb-0.5" />
          <span className="text-[10px] font-normal tracking-wider uppercase">Map</span>
        </a>

        {/* Book Table Button (Restrained Gold CTA) */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#D4AF37] text-zinc-950 font-medium transition-colors"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase font-semibold">Reserve</span>
        </button>

      </div>
    </aside>
  );
}
