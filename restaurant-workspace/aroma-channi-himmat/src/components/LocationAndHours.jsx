import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, ExternalLink, Navigation, Car } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function LocationAndHours({ onOpenReservation }) {
  const { location, hours, contact } = restaurantData;

  return (
    <section id="location" className="py-24 bg-[#09090b] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-light text-[#D4AF37] block mb-2">
            Plan Your Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-100 tracking-tight">
            Location & Dining Hours
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Centrally situated in Sector 1 Channi Himmat with effortless access from National Highway 44.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Location & Hours Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="p-8 rounded-xl bg-[#121214] border border-white/[0.06]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] block mb-1">
                    Channi Himmat Flagship
                  </span>
                  <h3 className="font-serif text-2xl font-light text-zinc-100">
                    {restaurantData.name}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                    {location.address}, {location.neighborhood}, {location.city}, {location.state} – {location.pincode}
                  </p>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    📍 {location.landmarks}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.04]">
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-medium uppercase tracking-wider text-zinc-950 bg-zinc-100 hover:bg-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <a
                  href={`tel:${contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-normal uppercase tracking-wider text-zinc-300 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call {contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Hours & Service Windows */}
            <div className="p-8 rounded-xl bg-[#121214] border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#D4AF37]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-light text-zinc-100">
                    Dining Schedule
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono font-light">
                    {hours.days}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Lunch */}
                <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/[0.04]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium block mb-1">
                    Royal Luncheon
                  </span>
                  <div className="font-serif text-xl font-light text-zinc-100">
                    {hours.lunch.open} – {hours.lunch.close}
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1 font-light">
                    Ideal for executive dining & family lunches
                  </p>
                </div>

                {/* Dinner */}
                <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/[0.04]">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-300 font-medium block mb-1">
                    Evening Grandeur
                  </span>
                  <div className="font-serif text-xl font-light text-zinc-100">
                    {hours.dinner.open} – {hours.dinner.close}
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1 font-light">
                    Kitchen final order call at {hours.kitchenCloses}
                  </p>
                </div>
              </div>

              {/* Valet & Parking note */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-3 text-xs text-zinc-400 font-light">
                <Car className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <span>Uniformed valet attendants stationed at main entrance for seamless parking.</span>
              </div>
            </div>

          </div>

          {/* Map Preview & VIP Portico Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-[#121214] border border-white/[0.06] p-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] block mb-2 font-light">
                Easy Highway Proximity
              </span>
              <h3 className="font-serif text-2xl font-light text-zinc-100 mb-4">
                3 Minutes from NH-44 & Bahu Plaza
              </h3>

              {/* Interactive Stylized Map Card */}
              <div className="relative rounded-lg overflow-hidden border border-white/[0.08] aspect-[4/3] mb-6 group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Channi Himmat, Jammu Location Map"
                  className="w-full h-full object-cover filter brightness-70 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#09090b]/40 backdrop-blur-[1px]" />

                {/* Pin Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-11 h-11 rounded-full bg-[#121214] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-3">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h4 className="font-serif text-base font-medium text-zinc-100">
                    Aroma Multi Cuisine
                  </h4>
                  <p className="text-xs text-zinc-400 font-light max-w-xs mt-1">
                    Sector 1 Commercial Belt, Channi Himmat
                  </p>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-colors flex items-center gap-1.5"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Landmark bullets */}
              <div className="space-y-2 text-xs text-zinc-400 font-light">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  <span>3 mins drive from <strong>Wave Mall Jammu</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  <span>4 mins from <strong>Bahu Plaza Commercial Complex</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  <span>12 mins from <strong>Jammu Tawi Railway Station</strong></span>
                </div>
              </div>
            </div>

            {/* Bottom Concierge WhatsApp */}
            <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">WhatsApp Concierge</span>
                <span className="text-xs font-mono text-zinc-300">{contact.whatsapp}</span>
              </div>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Aroma%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20table%20reservation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/60 transition-colors flex items-center gap-1.5"
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
