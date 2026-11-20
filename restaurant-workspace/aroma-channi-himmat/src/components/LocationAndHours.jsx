import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, ExternalLink, Navigation, Car } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function LocationAndHours({ onOpenReservation }) {
  const { location, hours, contact } = restaurantData;

  return (
    <section id="location" className="py-24 bg-[#FFFDF9] relative border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-orange-600 block mb-2">
            Plan Your Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Location & Dining Hours
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Centrally situated in Sector 1 Channi Himmat with effortless access from National Highway 44.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Location & Hours Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-white border border-orange-100 shadow-warm-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block mb-1">
                    Channi Himmat Flagship
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    {restaurantData.name}
                  </h3>
                  <p className="text-sm text-stone-700 font-normal mt-2 leading-relaxed">
                    {location.address}, {location.neighborhood}, {location.city}, {location.state} – {location.pincode}
                  </p>
                  <p className="text-xs text-stone-600 font-medium mt-1">
                    📍 {location.landmarks}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-orange-100">
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 transition-all shadow-md shadow-orange-500/20"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href={`tel:${contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-800 bg-white hover:bg-orange-50 border border-orange-200 transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>Call Concierge</span>
                </a>
              </div>
            </div>

            {/* Hours & Service Windows */}
            <div className="p-8 rounded-3xl bg-white border border-orange-100 shadow-warm-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shadow-2xs">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    Dining Schedule
                  </h3>
                  <span className="text-xs text-stone-600 font-semibold">
                    {hours.days}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Lunch */}
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                  <span className="text-[11px] uppercase tracking-wider text-orange-700 font-bold block mb-1">
                    Royal Luncheon
                  </span>
                  <div className="font-serif text-2xl font-bold text-stone-900">
                    {hours.lunch.open} – {hours.lunch.close}
                  </div>
                  <p className="text-[11px] text-stone-600 mt-1 font-medium">
                    Ideal for executive dining & family lunches
                  </p>
                </div>

                {/* Dinner */}
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100">
                  <span className="text-[11px] uppercase tracking-wider text-stone-800 font-bold block mb-1">
                    Evening Grandeur
                  </span>
                  <div className="font-serif text-2xl font-bold text-stone-900">
                    {hours.dinner.open} – {hours.dinner.close}
                  </div>
                  <p className="text-[11px] text-stone-600 mt-1 font-medium">
                    Kitchen final order call at {hours.kitchenCloses}
                  </p>
                </div>
              </div>

              {/* Valet & Parking note */}
              <div className="mt-6 pt-4 border-t border-orange-100 flex items-center gap-3 text-xs text-stone-700 font-medium bg-[#FAFAF7] p-3 rounded-xl border border-orange-100">
                <Car className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Uniformed valet attendants stationed at main portico entrance for seamless parking.</span>
              </div>
            </div>

          </div>

          {/* Map Preview & VIP Portico Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white border border-orange-100 p-8 shadow-warm-sm">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-orange-600 block mb-2">
                Easy Highway Proximity
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                3 Minutes from NH-44 & Bahu Plaza
              </h3>

              {/* Stylized Map Card */}
              <div className="relative rounded-2xl overflow-hidden border border-orange-200 aspect-[4/3] mb-6 group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Channi Himmat, Jammu Location Map"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/30" />

                {/* Pin Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-orange-400 flex items-center justify-center text-orange-600 mb-2 shadow-lg">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white drop-shadow-sm">
                    Aroma Multi Cuisine
                  </h4>
                  <p className="text-xs text-white/95 font-medium max-w-xs mt-1 drop-shadow-sm">
                    Sector 1 Commercial Belt, Channi Himmat
                  </p>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Landmark bullets */}
              <div className="space-y-2.5 text-xs text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>3 mins drive from <strong>Wave Mall Jammu</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>4 mins from <strong>Bahu Plaza Commercial Complex</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>12 mins from <strong>Jammu Tawi Railway Station</strong></span>
                </div>
              </div>
            </div>

            {/* Bottom Concierge WhatsApp */}
            <div className="pt-6 mt-6 border-t border-orange-100 flex items-center justify-between bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
              <div>
                <span className="text-[10px] text-emerald-800 uppercase tracking-wider font-bold block">WhatsApp Concierge</span>
                <span className="text-xs font-mono font-bold text-emerald-950">{contact.whatsapp}</span>
              </div>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Aroma%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20table%20reservation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
