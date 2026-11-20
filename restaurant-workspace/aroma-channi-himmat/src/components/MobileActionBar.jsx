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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-orange-150 py-2 px-3 shadow-2xl"
    >
      <div className="grid grid-cols-4 gap-2 items-center">
        
        {/* Call button */}
        <a
          href={`tel:${restaurantData.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-700 hover:text-orange-600 transition-colors"
          title="Call Aroma Restaurant"
        >
          <Phone className="w-5 h-5 text-orange-600 mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Call</span>
        </a>

        {/* Menu button */}
        <button
          onClick={scrollToMenu}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-700 hover:text-orange-600 transition-colors"
          title="Browse Menu"
        >
          <Utensils className="w-5 h-5 text-orange-600 mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Menu</span>
        </button>

        {/* Directions button */}
        <a
          href={restaurantData.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-700 hover:text-orange-600 transition-colors"
          title="Google Maps Navigation"
        >
          <Navigation className="w-5 h-5 text-orange-600 mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Map</span>
        </a>

        {/* Book Table Button (Flame Orange CTA) */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold transition-all shadow-md shadow-orange-500/25 active:scale-95"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase font-bold">Reserve</span>
        </button>

      </div>
    </aside>
  );
}
