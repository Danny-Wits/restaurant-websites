import React, { useState, useEffect } from 'react';
import { 
  X, Calendar as CalendarIcon, Users, Clock, MapPin, 
  Sparkles, CheckCircle2, Phone, Utensils, Heart, ChevronRight 
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose }) {
  const [step, setStep] = useState("form"); // 'form' or 'confirmed'
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: new Date().toISOString().split('T')[0],
    timeSlot: "08:00 PM",
    service: "dinner",
    guests: "4 Guests",
    seatingPreference: "Royal Dining Hall (Under Chandelier)",
    specialOccasion: "None",
    pureVegRequirement: false,
    specialNotes: ""
  });
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const lunchSlots = ["12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"];
  const dinnerSlots = ["07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM"];

  const guestOptions = [
    "1 Guest (Solo Executive)",
    "2 Guests (Couples / Intimate)",
    "3 - 4 Guests (Small Group)",
    "5 - 8 Guests (Family Table)",
    "9 - 14 Guests (Extended Family)",
    "15 - 35 Guests (Imperial Private Dining Room)"
  ];

  const seatingOptions = [
    "Royal Dining Hall (Under Chandelier)",
    "Imperial PDR (Private Dining Suite)",
    "Candlelight Corner Booth",
    "Live Tandoor & Sizzler View"
  ];

  const occasions = ["Regular Fine Dining", "Birthday Celebration", "Wedding Anniversary", "Corporate Dinner", "Family Gathering"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `ARM-${new Date().getFullYear()}-${randomNum}`;
    setBookingRef(ref);
    setStep("confirmed");
  };

  const handleReset = () => {
    setStep("form");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#121214] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 my-8 text-zinc-100">
        
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#D4AF37]">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block">
                Bespoke Dining Reservation
              </span>
              <h2 className="font-serif text-2xl font-light text-zinc-100">
                Reserve Your Evening at Aroma
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close reservation modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body content based on step */}
        {step === "form" ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* VIP Perks Banner */}
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-light">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Complimentary VIP Valet Parking & Instant SMS Confirmation</span>
              </span>
              <span className="text-emerald-400/80 font-normal hidden sm:inline">No Booking Fees</span>
            </div>

            {/* Date & Service Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-light mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-zinc-100 focus:border-[#D4AF37]/50 outline-none"
                />
              </div>

              {/* Service Type Toggle (Lunch / Dinner) */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-light mb-2">
                  Service Window
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, service: "lunch", timeSlot: "01:00 PM" })}
                    className={`py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all border ${
                      formData.service === "lunch"
                        ? "bg-zinc-100 text-zinc-950 font-medium border-transparent"
                        : "bg-zinc-900 text-zinc-400 border-white/10 font-light"
                    }`}
                  >
                    Lunch (12:30–4)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, service: "dinner", timeSlot: "08:00 PM" })}
                    className={`py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all border ${
                      formData.service === "dinner"
                        ? "bg-zinc-100 text-zinc-950 font-medium border-transparent"
                        : "bg-zinc-900 text-zinc-400 border-white/10 font-light"
                    }`}
                  >
                    Dinner (7–11:30)
                  </button>
                </div>
              </div>
            </div>

            {/* Time Slot Chips */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 font-light mb-2 flex items-center justify-between">
                <span>Select Dining Slot</span>
                <span className="text-[11px] text-zinc-500 font-light">Kitchen Closes 11:00 PM</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {(formData.service === "lunch" ? lunchSlots : dinnerSlots).map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: slot })}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                      formData.timeSlot === slot
                        ? "bg-zinc-100 text-zinc-950 font-medium border-transparent"
                        : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border-white/10 font-light"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests & Seating Preference Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Guests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-light mb-2">
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-zinc-100 focus:border-[#D4AF37]/50 outline-none"
                >
                  {guestOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#121214]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-light mb-2">
                  Table & Seating Ambiance
                </label>
                <select
                  value={formData.seatingPreference}
                  onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-zinc-100 focus:border-[#D4AF37]/50 outline-none"
                >
                  {seatingOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#121214]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Occasion & Pure Veg Checkbox */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 font-light mb-2">
                  Special Celebration
                </label>
                <select
                  value={formData.specialOccasion}
                  onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-zinc-100 focus:border-[#D4AF37]/50 outline-none"
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ} className="bg-[#121214]">
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pure Veg Checkbox */}
              <div className="pt-2 sm:pt-6">
                <label className="flex items-center gap-3 cursor-pointer p-2.5 rounded-lg bg-zinc-900/60 border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.pureVegRequirement}
                    onChange={(e) => setFormData({ ...formData, pureVegRequirement: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-500 accent-emerald-500 bg-black"
                  />
                  <span className="text-xs text-zinc-300 font-light">
                    Dedicated Pure Vegetarian Prep
                  </span>
                </label>
              </div>
            </div>

            {/* Patron Contact Details */}
            <div className="border-t border-white/[0.08] pt-4 space-y-4">
              <h4 className="text-xs font-medium uppercase tracking-wider text-[#D4AF37]">
                Guest Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-zinc-100 focus:border-[#D4AF37]/50 outline-none placeholder-zinc-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-zinc-100 focus:border-[#D4AF37]/50 outline-none placeholder-zinc-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-medium uppercase tracking-widest text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-colors flex items-center justify-center gap-2"
              >
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>Confirm Instant Table Booking</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation View */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-light">
                Table Reserved Successfully
              </span>
              <h2 className="font-serif text-3xl font-light text-zinc-100 mt-1">
                We Await Your Presence, {formData.name}
              </h2>
              <p className="text-xs text-zinc-400 font-light mt-2 max-w-md mx-auto leading-relaxed">
                Your reservation is logged at Aroma Multi Cuisine Restaurant, Channi Himmat. An SMS and WhatsApp itinerary has been dispatched to <strong className="text-zinc-200 font-normal">{formData.phone}</strong>.
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="max-w-md mx-auto p-5 rounded-xl bg-zinc-900/70 border border-white/10 text-left space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-xs text-zinc-500">Reservation ID:</span>
                <span className="font-mono text-xs text-[#D4AF37]">{bookingRef}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Date & Slot:</span>
                <span className="text-zinc-200 font-normal">{formData.date} at {formData.timeSlot}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Party Size:</span>
                <span className="text-zinc-200 font-normal">{formData.guests}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Seating Section:</span>
                <span className="text-zinc-300 font-normal">{formData.seatingPreference}</span>
              </div>
              {formData.pureVegRequirement && (
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/[0.04] text-emerald-400">
                  <span>Veg Kitchen Flag:</span>
                  <span className="font-light">Segregated Preparation Active</span>
                </div>
              )}
            </div>

            {/* Valet reminder */}
            <div className="text-xs text-zinc-400 font-light bg-black/40 p-3 rounded-lg border border-white/[0.04] max-w-md mx-auto flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
              <span>Complimentary Valet at Sector 1 Channi Himmat portico (off NH-44).</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-full text-xs font-medium uppercase tracking-wider text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-colors"
              >
                Return to Site
              </button>
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="w-full py-2.5 rounded-full text-xs font-normal uppercase tracking-wider text-zinc-300 bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] text-center transition-colors"
              >
                Call Concierge
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
