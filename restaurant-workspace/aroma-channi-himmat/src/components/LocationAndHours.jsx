import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, ExternalLink, Navigation, ShieldCheck, Car } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function LocationAndHours({ onOpenReservation }) {
  const { location, hours, contact } = restaurantData;

  return (
    <section id="location" className="py-24 bg-[#0D0B0A] relative border-t border-[#D4AF37]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E08E36]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#E08E36] block mb-2">
            Plan Your Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0]">
            Location & Dining Hours
          </h2>
          <p className="mt-3 text-sm text-[#C8C0B5] font-sans">
            Centrally situated in Sector 1 Channi Himmat with effortless access from National Highway 44.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Hours Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-[#1A1714] border border-[#D4AF37]/30 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#25201B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#E08E36]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] block mb-1">
                    Channi Himmat Flagship
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#F8F6F0]">
                    {restaurantData.name}
                  </h3>
                  <p className="text-sm text-[#C8C0B5] font-sans mt-2 leading-relaxed">
                    {location.address}, {location.neighborhood}, {location.city}, {location.state} – {location.pincode}
                  </p>
                  <p className="text-xs text-[#E08E36] font-medium mt-1">
                    📍 {location.landmarks}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0D0B0A] bg-gradient-to-r from-[#D4AF37] to-[#E08E36] hover:brightness-110 shadow-md transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <a
                  href={`tel:${contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#F8F6F0] bg-[#25201B] hover:bg-[#D4AF37] hover:text-[#0D0B0A] border border-[#D4AF37]/30 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Hours & Service Windows */}
            <div className="p-8 rounded-3xl bg-[#1A1714] border border-[#D4AF37]/30 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#25201B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#F8F6F0]">
                    Dining Schedule
                  </h3>
                  <span className="text-xs text-[#10B981] font-mono font-medium">
                    {hours.days}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Lunch */}
                <div className="p-4 rounded-2xl bg-[#25201B] border border-white/5">
                  <span className="text-xs uppercase tracking-wider text-[#E08E36] font-bold block mb-1">
                    ☀️ Royal Luncheon
                  </span>
                  <div className="font-serif text-xl font-bold text-[#F8F6F0]">
                    {hours.lunch.open} – {hours.lunch.close}
                  </div>
                  <p className="text-[11px] text-[#8E867B] mt-1 font-sans">
                    Ideal for executive dining & family lunches
                  </p>
                </div>

                {/* Dinner */}
                <div className="p-4 rounded-2xl bg-[#25201B] border border-white/5">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                    🌙 Evening Grandeur
                  </span>
                  <div className="font-serif text-xl font-bold text-[#F8F6F0]">
                    {hours.dinner.open} – {hours.dinner.close}
                  </div>
                  <p className="text-[11px] text-[#8E867B] mt-1 font-sans">
                    Kitchen final order call at {hours.kitchenCloses}
                  </p>
                </div>
              </div>

              {/* Valet & Parking note */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-[#C8C0B5]">
                <Car className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Uniformed valet attendants stationed at main entrance for seamless parking.</span>
              </div>
            </div>

          </div>

          {/* Map Preview & VIP Portico Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#1A1714] border border-[#D4AF37]/30 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E08E36] block mb-2">
                Easy Highway Proximity
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F8F6F0] mb-4">
                3 Minutes from NH-44 & Bahu Plaza
              </h3>

              {/* Interactive Stylized Map Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 aspect-[4/3] mb-6 group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Channi Himmat, Jammu Location Map"
                  className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0D0B0A]/50 backdrop-blur-[2px]" />

                {/* Pin Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0D0B0A]/95 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-3 shadow-[0_0_20px_rgba(212,175,55,0.7)] animate-bounce">
                    <MapPin className="w-7 h-7 text-[#E08E36]" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#F8F6F0]">
                    Aroma Multi Cuisine
                  </h4>
                  <p className="text-xs text-[#C8C0B5] max-w-xs mt-1">
                    Sector 1 Commercial Belt, Channi Himmat
                  </p>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 rounded-full text-xs font-bold text-[#0D0B0A] bg-[#D4AF37] hover:bg-[#E6C35C] shadow-lg flex items-center gap-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Landmark bullets */}
              <div className="space-y-2 text-xs text-[#C8C0B5]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>3 mins drive from <strong>Wave Mall Jammu</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>4 mins from <strong>Bahu Plaza Commercial Complex</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>12 mins from <strong>Jammu Tawi Railway Station</strong></span>
                </div>
              </div>
            </div>

            {/* Bottom Concierge WhatsApp */}
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#8E867B] uppercase block">WhatsApp Concierge</span>
                <span className="text-xs font-bold text-[#F8F6F0]">{contact.whatsapp}</span>
              </div>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Aroma%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20table%20reservation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#10B981] text-[#0D0B0A] hover:brightness-105 flex items-center gap-1.5"
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
