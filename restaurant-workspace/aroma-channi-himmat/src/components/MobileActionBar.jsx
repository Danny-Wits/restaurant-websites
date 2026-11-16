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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0B0A]/95 backdrop-blur-lg border-t border-[#D4AF37]/35 py-2 px-3 shadow-[0_-5px_25px_rgba(0,0,0,0.85)]"
    >
      <div className="grid grid-cols-4 gap-2 items-center">
        
        {/* Call button */}
        <a
          href={`tel:${restaurantData.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#C8C0B5] hover:text-[#D4AF37] transition-colors"
          title="Call Aroma Restaurant"
        >
          <Phone className="w-5 h-5 text-[#E08E36] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight uppercase">Call</span>
        </a>

        {/* Menu button */}
        <button
          onClick={scrollToMenu}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#C8C0B5] hover:text-[#D4AF37] transition-colors"
          title="Browse Menu"
        >
          <Utensils className="w-5 h-5 text-[#D4AF37] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight uppercase">Menu</span>
        </button>

        {/* Directions button */}
        <a
          href={restaurantData.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#C8C0B5] hover:text-[#D4AF37] transition-colors"
          title="Google Maps Navigation"
        >
          <Navigation className="w-5 h-5 text-[#10B981] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight uppercase">Map</span>
        </a>

        {/* Book Table Button (Prominent Gold CTA) */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E08E36] text-[#0D0B0A] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-95 transition-transform"
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight uppercase font-extrabold">Reserve</span>
        </button>

      </div>
    </aside>
  );
}
