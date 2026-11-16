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
    <section id="location" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1110]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Panama Chowk Destination &bull; Gate 2 Strip</span>
          </div>
          <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl text-zinc-100 tracking-tight mb-4">
            Find the{' '}
            <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Rhythm &bull; Visit Us
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Conveniently situated at the central cultural transit crossroads linking Jammu University, Gujarbasti, Bahu Plaza, and Jammu Tawi.
          </p>
        </div>

        {/* 2-Column Info & Timings Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Hours & Dual Vibe Timing */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#161917] border border-amber-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg text-zinc-100">
                      Operating Hours
                    </h3>
                    <span className="text-xs text-emerald-400 font-semibold">
                      Open All 7 Days &bull; Monday through Sunday
                    </span>
                  </div>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  11 AM – 11:30 PM
                </span>
              </div>

              {/* Day Cafe vs Night Lounge Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#1E2220] border-l-4 border-amber-400">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      ☀️ Day Cafe &amp; Co-Working Mode
                    </span>
                    <span className="font-mono text-xs text-zinc-300 font-semibold">
                      11:00 AM – 05:00 PM
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Acoustic chill lo-fi playlists, pour-overs, nitro cold brews, ergonomic booth seating with plug points, and sunlit patio seating.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#1E2220] border-l-4 border-rose-500">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                      🌙 Night Lounge &amp; Live Gigs Mode
                    </span>
                    <span className="font-mono text-xs text-zinc-300 font-semibold">
                      05:00 PM – 11:30 PM
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Live music sessions, botanical craft coolers, glowing neon amber lighting, smoking cast-iron sizzlers, and communal social dining.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>Kitchen Order Closing Time:</span>
                <span className="text-amber-400 font-bold">11:00 PM Daily</span>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-6 mt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{restaurant.contact.phone}</span>
              </a>
              <a
                href={`mailto:${restaurant.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{restaurant.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Address, Landmarks & Live Map Trigger */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#161917] border border-amber-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg text-zinc-100">
                      Panama Chowk Address
                    </h3>
                    <span className="text-xs text-zinc-400 font-medium">
                      Opposite University Road &bull; Jammu, J&amp;K
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact Address */}
              <div className="mb-6 p-4 rounded-2xl bg-[#1E2220] border border-zinc-800">
                <p className="text-sm text-zinc-200 font-medium leading-relaxed mb-3">
                  {restaurant.location.address}
                </p>
                <div className="text-xs text-zinc-400 space-y-1.5 border-t border-zinc-800/80 pt-3">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono text-[11px] shrink-0">📍 Proximity:</span>
                    <span>2 mins from University of Jammu Gate 2</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono text-[11px] shrink-0">🚆 Transit:</span>
                    <span>4 mins from Jammu Tawi Railway Station &amp; Bahu Plaza Hub</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono text-[11px] shrink-0">🚗 Parking:</span>
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
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`tel:${restaurant.contact.mobile.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#1E2220] hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold text-xs transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Valet / Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* 8 Signature Amenities Grid */}
        <div>
          <h3 className="font-['Syne'] font-extrabold text-xl sm:text-2xl text-zinc-100 text-center mb-8">
            Engineered for Comfort, Creativity &amp; High Energy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {restaurant.amenities.map((item) => {
              const Icon = amenityIcons[item.id] || Sparkles;
              return (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-2xl bg-[#161917] border border-amber-500/10 hover:border-amber-500/35 transition-all flex flex-col items-start group"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-['Syne'] font-bold text-xs sm:text-sm text-zinc-200 group-hover:text-amber-400 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
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
