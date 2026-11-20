import React from 'react';
import { Phone, BookOpen, Music, Calendar } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function MobileActionBar({ onOpenReserve }) {
  const phone = restaurantData.restaurant.contact.phone.replace(/\s+/g, '');

  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-orange-200/80 px-3 py-2 shadow-[0_-8px_25px_rgba(234,88,12,0.08)] w-full max-w-full"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto w-full">
        {/* Call Button */}
        <a
          href={`tel:${phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-stone-700 hover:text-orange-600 active:bg-orange-50 transition-colors min-h-[48px]"
        >
          <Phone className="w-5 h-5 text-orange-600 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Call</span>
        </a>

        {/* Menu Button */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-stone-700 hover:text-orange-600 active:bg-orange-50 transition-colors min-h-[48px]"
        >
          <BookOpen className="w-5 h-5 text-orange-600 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Menu</span>
        </a>

        {/* Gigs Button */}
        <a
          href="#gigs"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-stone-700 hover:text-rose-600 active:bg-rose-50 transition-colors min-h-[48px]"
        >
          <Music className="w-5 h-5 text-rose-600 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Gigs</span>
        </a>

        {/* Reserve Highlight Button */}
        <button
          onClick={onOpenReserve}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-bold active:scale-95 transition-all shadow-[0_3px_12px_rgba(234,88,12,0.35)] min-h-[48px] cursor-pointer"
        >
          <Calendar className="w-5 h-5 text-white mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Reserve</span>
        </button>
      </div>
    </aside>
  );
}
