import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  Wifi,
  Car,
  Sun,
  Users,
  Disc,
  Leaf,
  Mic2,
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function LocationAndHours() {
  const { restaurant } = restaurantData;

  const amenityIcons = {
    gigs: Mic2,
    student: GraduationCap,
    wifi: Wifi,
    patio: Sun,
    mezzanine: Users,
    vinyl: Disc,
    vegprep: Leaf,
    valet: Car
  };

  return (
    <section id="location" className="relative py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#FFFDF9] border-t border-orange-100 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 max-w-full shadow-xs">
            <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
            <span className="truncate sm:hidden">Panama Chowk Destination</span>
            <span className="hidden sm:inline">Panama Chowk Destination &bull; Gate 2 Strip</span>
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight mb-4 break-words">
            Find the{' '}
            <span className="text-orange-600">
              Rhythm &bull; Visit Us
            </span>
          </h2>
          <p className="text-xs sm:text-base text-stone-600 leading-relaxed">
            Conveniently situated at the central cultural transit crossroads linking Jammu University, Gujarbasti, Bahu Plaza, and Jammu Tawi.
          </p>
        </div>

        {/* 2-Column Info & Timings Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Hours & Dual Vibe Timing */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg text-stone-900">
                      Operating Hours
                    </h3>
                    <span className="text-xs text-emerald-700 font-bold">
                      Open All 7 Days &bull; Monday through Sunday
                    </span>
                  </div>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                  11 AM – 11:30 PM
                </span>
              </div>

              {/* Day Cafe vs Night Lounge Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 border border-amber-200/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                      ☀️ Day Cafe &amp; Co-Working Mode
                    </span>
                    <span className="font-mono text-xs text-stone-700 font-bold">
                      11:00 AM – 05:00 PM
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Acoustic chill lo-fi playlists, pour-overs, nitro cold brews, ergonomic booth seating with plug points, and sunlit patio seating.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/70 border-l-4 border-orange-500 border border-orange-200/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-orange-900 uppercase tracking-wider">
                      🌙 Night Lounge &amp; Live Gigs Mode
                    </span>
                    <span className="font-mono text-xs text-stone-700 font-bold">
                      05:00 PM – 11:30 PM
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Live music sessions, botanical craft coolers, glowing ambient filament lighting, smoking cast-iron sizzlers, and communal social dining.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-[11px] font-mono text-stone-600 flex items-center justify-between">
                <span>Kitchen Order Closing Time:</span>
                <span className="text-orange-600 font-bold">11:00 PM Daily</span>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-6 mt-6 border-t border-orange-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-orange-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>{restaurant.contact.phone}</span>
              </a>
              <a
                href={`mailto:${restaurant.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-orange-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-orange-600" />
                <span>{restaurant.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Address, Landmarks & Live Map Trigger */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg text-stone-900">
                      Panama Chowk Address
                    </h3>
                    <span className="text-xs text-stone-500 font-medium">
                      Opposite University Road &bull; Jammu, J&amp;K
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact Address */}
              <div className="mb-6 p-4 rounded-2xl bg-stone-50/80 border border-stone-200">
                <p className="text-sm text-stone-800 font-semibold leading-relaxed mb-3">
                  {restaurant.location.address}
                </p>
                <div className="text-xs text-stone-600 space-y-2 border-t border-stone-200 pt-3">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-mono text-[11px] font-bold shrink-0">📍 Proximity:</span>
                    <span>2 mins from University of Jammu Gate 2</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-mono text-[11px] font-bold shrink-0">🚆 Transit:</span>
                    <span>4 mins from Jammu Tawi Railway Station &amp; Bahu Plaza Hub</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-mono text-[11px] font-bold shrink-0">🚗 Parking:</span>
                    <span>Dedicated valet service &amp; two-wheeler campus bike bay</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={restaurant.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-bold text-xs tracking-wide shadow-md hover:shadow-orange-500/25 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`tel:${restaurant.contact.mobile.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white hover:bg-orange-50 border border-stone-200 text-stone-800 font-bold text-xs transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Call Valet / Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* 8 Signature Amenities Grid */}
        <div>
          <h3 className="font-['Syne'] font-extrabold text-2xl text-stone-900 text-center mb-8">
            Engineered for Comfort, Creativity &amp; High Energy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {restaurant.amenities.map((item) => {
              const Icon = amenityIcons[item.id] || Sparkles;
              return (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-orange-100 shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-orange-300 transition-all flex flex-col items-start group"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-100 border border-orange-200 text-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-['Syne'] font-bold text-xs sm:text-sm text-stone-900 group-hover:text-orange-600 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
