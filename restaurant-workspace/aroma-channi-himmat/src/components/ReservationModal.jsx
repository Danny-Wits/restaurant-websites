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
      {/* Soft Dimmed Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white border border-orange-200 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-stone-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-orange-100 flex items-center justify-between bg-gradient-to-r from-orange-50/60 via-amber-50/40 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shadow-2xs">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-700 block">
                Bespoke Dining Reservation
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Reserve Your Evening at Aroma
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-orange-200 text-stone-500 hover:text-stone-900 flex items-center justify-center shadow-sm transition-transform hover:scale-105"
            aria-label="Close reservation modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body content based on step */}
        {step === "form" ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* VIP Perks Banner */}
            <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between text-xs text-stone-700 font-medium">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Complimentary VIP Valet Parking & Instant SMS Confirmation</span>
              </span>
              <span className="text-emerald-700 font-bold hidden sm:inline">No Booking Fees</span>
            </div>

            {/* Date & Service Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none shadow-2xs"
                />
              </div>

              {/* Service Type Toggle (Lunch / Dinner) */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
                  Service Window
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, service: "lunch", timeSlot: "01:00 PM" })}
                    className={`py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all font-bold ${
                      formData.service === "lunch"
                        ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-sm"
                        : "bg-stone-50 text-stone-700 border border-stone-200 hover:bg-orange-50"
                    }`}
                  >
                    Lunch (12:30–4)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, service: "dinner", timeSlot: "08:00 PM" })}
                    className={`py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all font-bold ${
                      formData.service === "dinner"
                        ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-sm"
                        : "bg-stone-50 text-stone-700 border border-stone-200 hover:bg-orange-50"
                    }`}
                  >
                    Dinner (7–11:30)
                  </button>
                </div>
              </div>
            </div>

            {/* Time Slot Chips */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2 flex items-center justify-between">
                <span>Select Dining Slot</span>
                <span className="text-[11px] text-stone-500 font-medium">Kitchen Closes 11:00 PM</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {(formData.service === "lunch" ? lunchSlots : dinnerSlots).map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: slot })}
                    className={`px-3.5 py-1.5 rounded-lg text-xs transition-all font-semibold border ${
                      formData.timeSlot === slot
                        ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white border-transparent shadow-sm"
                        : "bg-white text-stone-700 hover:bg-orange-50 border-stone-200"
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
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none shadow-2xs"
                >
                  {guestOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
                  Table & Seating Ambiance
                </label>
                <select
                  value={formData.seatingPreference}
                  onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none shadow-2xs"
                >
                  {seatingOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Occasion & Pure Veg Checkbox */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-bold mb-2">
                  Special Celebration
                </label>
                <select
                  value={formData.specialOccasion}
                  onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none shadow-2xs"
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pure Veg Checkbox */}
              <div className="pt-2 sm:pt-6">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.pureVegRequirement}
                    onChange={(e) => setFormData({ ...formData, pureVegRequirement: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 accent-emerald-600 bg-white"
                  />
                  <span className="text-xs text-emerald-900 font-bold">
                    Dedicated Pure Vegetarian Prep
                  </span>
                </label>
              </div>
            </div>

            {/* Patron Contact Details */}
            <div className="border-t border-orange-100 pt-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange-700">
                Guest Contact Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none placeholder-stone-400 shadow-2xs"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none placeholder-stone-400 shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Confirm Instant Table Booking</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation View */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-orange-700 font-bold">
                Table Reserved Successfully
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
                We Await Your Presence, {formData.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-normal mt-2 max-w-md mx-auto leading-relaxed">
                Your reservation is logged at Aroma Multi Cuisine Restaurant, Channi Himmat. An SMS and WhatsApp confirmation itinerary has been dispatched to <strong className="text-stone-900 font-bold">{formData.phone}</strong>.
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#FAFAF7] border border-orange-200/80 text-left space-y-3 shadow-warm-sm">
              <div className="flex items-center justify-between border-b border-orange-100 pb-2.5">
                <span className="text-xs font-semibold text-stone-500">Reservation Reference:</span>
                <span className="font-mono text-xs font-bold text-orange-600">{bookingRef}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Date & Slot:</span>
                <span className="text-stone-900 font-bold">{formData.date} at {formData.timeSlot}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Party Size:</span>
                <span className="text-stone-900 font-bold">{formData.guests}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Seating Preference:</span>
                <span className="text-stone-900 font-bold">{formData.seatingPreference}</span>
              </div>
              {formData.pureVegRequirement && (
                <div className="flex items-center justify-between text-xs pt-2 border-t border-orange-100 text-emerald-800 font-bold">
                  <span>Veg Kitchen Flag:</span>
                  <span>Segregated Prep Active</span>
                </div>
              )}
            </div>

            {/* Valet reminder */}
            <div className="text-xs text-stone-700 font-medium bg-orange-50 p-3.5 rounded-xl border border-orange-200 max-w-md mx-auto flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
              <span>Complimentary Valet service stationed at Sector 1 Channi Himmat portico (off NH-44).</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md transition-colors"
              >
                Return to Site
              </button>
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-800 bg-white border border-orange-200 hover:bg-orange-50 text-center transition-colors shadow-2xs"
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
