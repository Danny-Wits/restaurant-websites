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
    // Generate realistic reservation reference
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
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#1A1714] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.95)] z-10 my-8 animate-fade-in text-[#F8F6F0]">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#25201B] via-[#1A1714] to-[#25201B] p-6 border-b border-[#D4AF37]/25 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E08E36] block">
                Bespoke Dining Reservation
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#F8F6F0]">
                Reserve Your Evening at Aroma
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#0D0B0A]/80 border border-[#D4AF37]/30 text-[#C8C0B5] hover:text-[#D4AF37] flex items-center justify-center transition-all"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content based on step */}
        {step === "form" ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* VIP Perks Banner */}
            <div className="p-3.5 rounded-xl bg-[#0D0B0A]/60 border border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#C8C0B5]">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E08E36]" />
                <span>Complimentary VIP Valet Parking & Instant SMS Confirmation</span>
              </span>
              <span className="text-[#10B981] font-semibold hidden sm:inline">No Booking Fees</span>
            </div>

            {/* Date & Service Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8C0B5] mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#25201B] border border-[#D4AF37]/30 text-sm text-[#F8F6F0] focus:border-[#D4AF37] outline-none"
                />
              </div>

              {/* Service Type Toggle (Lunch / Dinner) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8C0B5] mb-2">
                  Service Window
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, service: "lunch", timeSlot: "01:00 PM" })}
                    className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      formData.service === "lunch"
                        ? "bg-[#D4AF37] text-[#0D0B0A] border-[#D4AF37]"
                        : "bg-[#25201B] text-[#C8C0B5] border-white/10"
                    }`}
                  >
                    Lunch (12:30–4)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, service: "dinner", timeSlot: "08:00 PM" })}
                    className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      formData.service === "dinner"
                        ? "bg-[#D4AF37] text-[#0D0B0A] border-[#D4AF37]"
                        : "bg-[#25201B] text-[#C8C0B5] border-white/10"
                    }`}
                  >
                    Dinner (7–11:30)
                  </button>
                </div>
              </div>
            </div>

            {/* Time Slot Chips */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8C0B5] mb-2 flex items-center justify-between">
                <span>Select Dining Slot</span>
                <span className="text-[11px] text-[#E08E36] font-normal">Kitchen Closes 11:00 PM</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {(formData.service === "lunch" ? lunchSlots : dinnerSlots).map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: slot })}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all border ${
                      formData.timeSlot === slot
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#E08E36] text-[#0D0B0A] font-bold border-transparent shadow-md"
                        : "bg-[#25201B] text-[#C8C0B5] hover:text-[#F8F6F0] border-white/10"
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8C0B5] mb-2">
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#25201B] border border-[#D4AF37]/30 text-sm text-[#F8F6F0] focus:border-[#D4AF37] outline-none"
                >
                  {guestOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#1A1714]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8C0B5] mb-2">
                  Table & Seating Ambiance
                </label>
                <select
                  value={formData.seatingPreference}
                  onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#25201B] border border-[#D4AF37]/30 text-sm text-[#F8F6F0] focus:border-[#D4AF37] outline-none"
                >
                  {seatingOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#1A1714]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Occasion & Pure Veg Checkbox */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8C0B5] mb-2">
                  Special Celebration
                </label>
                <select
                  value={formData.specialOccasion}
                  onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#25201B] border border-[#D4AF37]/30 text-sm text-[#F8F6F0] focus:border-[#D4AF37] outline-none"
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ} className="bg-[#1A1714]">
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pure Veg Checkbox */}
              <div className="pt-4 sm:pt-6">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-[#25201B]/60 border border-white/5 hover:border-[#10B981]/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.pureVegRequirement}
                    onChange={(e) => setFormData({ ...formData, pureVegRequirement: e.target.checked })}
                    className="w-4 h-4 rounded text-[#10B981] accent-[#10B981] bg-[#0D0B0A]"
                  />
                  <span className="text-xs text-[#F8F6F0] font-medium">
                    Dedicated Pure Vegetarian Table Prep
                  </span>
                </label>
              </div>
            </div>

            {/* Patron Contact Details */}
            <div className="border-t border-white/10 pt-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#25201B] border border-[#D4AF37]/30 text-sm text-[#F8F6F0] focus:border-[#D4AF37] outline-none placeholder-[#8E867B]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#25201B] border border-[#D4AF37]/30 text-sm text-[#F8F6F0] focus:border-[#D4AF37] outline-none placeholder-[#8E867B]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#0D0B0A] bg-gradient-to-r from-[#D4AF37] via-[#F3E9C7] to-[#E08E36] hover:brightness-105 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Confirm Instant Table Booking</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation View */
          <div className="p-8 sm:p-10 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/15 border-2 border-[#10B981] flex items-center justify-center text-[#10B981] mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#E08E36] font-semibold">
                Table Reserved Successfully
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#F8F6F0] mt-1">
                We Await Your Presence, {formData.name}
              </h2>
              <p className="text-xs text-[#C8C0B5] mt-2 max-w-md mx-auto">
                Your reservation is logged at Aroma Multi Cuisine Restaurant, Channi Himmat. An SMS and WhatsApp itinerary has been dispatched to <strong className="text-[#F8F6F0]">{formData.phone}</strong>.
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#25201B] border border-[#D4AF37]/40 text-left space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs text-[#8E867B]">Reservation ID:</span>
                <span className="font-mono font-bold text-[#D4AF37]">{bookingRef}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8E867B]">Date & Slot:</span>
                <span className="font-semibold text-[#F8F6F0]">{formData.date} at {formData.timeSlot}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8E867B]">Party Size:</span>
                <span className="font-semibold text-[#F8F6F0]">{formData.guests}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8E867B]">Seating Section:</span>
                <span className="font-semibold text-[#E08E36]">{formData.seatingPreference}</span>
              </div>
              {formData.pureVegRequirement && (
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5 text-[#10B981]">
                  <span>Veg Kitchen Flag:</span>
                  <span className="font-semibold">Segregated Preparation Active</span>
                </div>
              )}
            </div>

            {/* Valet reminder */}
            <div className="text-xs text-[#C8C0B5] bg-[#0D0B0A]/80 p-3 rounded-xl border border-white/5 max-w-md mx-auto flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>Complimentary Valet at Sector 1 Channi Himmat portico (off NH-44).</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D0B0A] bg-[#D4AF37] hover:bg-[#E6C35C] transition-all"
              >
                Return to Site
              </button>
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F8F6F0] bg-[#25201B] border border-[#D4AF37]/30 hover:bg-[#1A1714] text-center"
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
