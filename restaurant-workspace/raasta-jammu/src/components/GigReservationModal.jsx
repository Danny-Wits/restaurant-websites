import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  Users,
  MapPin,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageSquare,
  Music,
  Share2,
  Send
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function GigReservationModal({ isOpen, onClose, preselectedGig, preselectedDish }) {
  const [step, setStep] = useState('form'); // 'form' or 'confirmed'
  const [bookingRef, setBookingRef] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '07:30 PM (Live Music Gig)',
    seatingZone: 'stage-front',
    isStudent: false,
    specialOccasion: 'Regular Dining / Gig Hangout',
    notes: ''
  });

  // Handle preselected gig or dish
  useEffect(() => {
    if (preselectedGig) {
      setFormData(prev => ({
        ...prev,
        timeSlot: `${preselectedGig.time.split(' - ')[0]} (${preselectedGig.day} Gig)`,
        seatingZone: 'stage-front',
        notes: `Attending ${preselectedGig.title} (${preselectedGig.artist})`
      }));
    } else if (preselectedDish) {
      setFormData(prev => ({
        ...prev,
        notes: `Craving to taste: ${preselectedDish.name}`
      }));
    }
  }, [preselectedGig, preselectedDish]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const seatingZones = [
    {
      id: 'stage-front',
      name: 'Music Stage Front',
      icon: '🎸',
      desc: 'Prime stage proximity & live sound acoustics'
    },
    {
      id: 'mezzanine',
      name: 'Mezzanine Study & Lounge',
      icon: '📚',
      desc: 'Power plugs, lo-fi ambiance & group banquettes'
    },
    {
      id: 'patio',
      name: 'Bohemian Green Patio',
      icon: '🌿',
      desc: 'Sunlit outdoor terrace with living monstera'
    },
    {
      id: 'lounge-booth',
      name: 'Velvet Lounge Booth',
      icon: '🛋️',
      desc: 'Deep timber booths for dates & celebrations'
    }
  ];

  const timeSlots = [
    '12:30 PM (Lunch & Cafe)',
    '02:30 PM (Afternoon Study)',
    '04:30 PM (Sunset Patio)',
    '06:30 PM (Early Dinner)',
    '07:30 PM (Live Music Gig)',
    '09:00 PM (Late Night Lounge)',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    // Generate random booking reference
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const ref = `RAASTA-JU-${randomCode}`;
    setBookingRef(ref);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  // WhatsApp formatted confirmation text
  const whatsappText = encodeURIComponent(
    `Hello Raasta Jammu! 👋 I would like to confirm my table reservation:\n\n` +
    `🔖 Reference: ${bookingRef}\n` +
    `👤 Name: ${formData.name}\n` +
    `📅 Date: ${formData.date}\n` +
    `⏰ Time: ${formData.timeSlot}\n` +
    `👥 Guests: ${formData.guests} people\n` +
    `📍 Zone: ${seatingZones.find(z => z.id === formData.seatingZone)?.name}\n` +
    `🎓 Student Perk: ${formData.isStudent ? 'Yes (Flat 15% Campus Discount)' : 'No'}\n` +
    `📝 Notes: ${formData.notes || 'None'}\n\n` +
    `Please confirm my spot!`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/50 backdrop-blur-sm transition-all duration-300 w-full max-w-full"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-orange-200 shadow-2xl flex flex-col no-scrollbar max-w-full"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          /* Step 1: Booking Form */
          <div className="p-6 sm:p-8">
            {/* Modal Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
                <Music className="w-3.5 h-3.5 text-orange-600" />
                <span>Panama Chowk Rhythm Desk</span>
              </div>
              <h2 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-stone-900">
                Reserve Your Table or Gig Spot
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Instant reservation for acoustic music nights, study nooks, or group birthday bashes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                    Reservation Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-orange-500 focus:bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                    Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-orange-500 focus:bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all shadow-xs"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Seating Zone Selection */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  Select Seating Atmosphere *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {seatingZones.map((zone) => {
                    const isSelected = formData.seatingZone === zone.id;
                    return (
                      <div
                        key={zone.id}
                        onClick={() => setFormData({ ...formData, seatingZone: zone.id })}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-orange-50 border-2 border-orange-500 shadow-xs'
                            : 'bg-stone-50/70 border-stone-200 hover:border-orange-300'
                        }`}
                      >
                        <span className="text-xl">{zone.icon}</span>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-orange-700' : 'text-stone-900'}`}>
                            {zone.name}
                          </div>
                          <div className="text-[11px] text-stone-600 mt-0.5">
                            {zone.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Guests and Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                    Number of Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-orange-500 focus:bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all shadow-xs"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, '12+ (Mezzanine Group)'].map((num) => (
                      <option key={num} value={num}>
                        {num} {typeof num === 'number' && (num === 1 ? 'Guest (Solo Study)' : 'Guests')}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                    Occasion
                  </label>
                  <select
                    value={formData.specialOccasion}
                    onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-orange-500 focus:bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all shadow-xs"
                  >
                    <option value="Regular Dining / Gig Hangout">Regular Dining / Gig Hangout</option>
                    <option value="Birthday Celebration (Free Sizzler Sparkler!)">Birthday Celebration (Free Sizzler Sparkler!)</option>
                    <option value="University Study Sprint">University Study Sprint</option>
                    <option value="Society / Fest Afterparty">Society / Fest Afterparty</option>
                    <option value="Romantic Date Night">Romantic Date Night</option>
                  </select>
                </div>
              </div>

              {/* Student Discount Toggle Box */}
              <div
                onClick={() => setFormData({ ...formData, isStudent: !formData.isStudent })}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  formData.isStudent
                    ? 'bg-emerald-50 border-2 border-emerald-500 shadow-xs'
                    : 'bg-stone-50/70 border-stone-200 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${formData.isStudent ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-600'}`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">
                      I am a University of Jammu / College Student
                    </div>
                    <div className="text-[11px] text-stone-600">
                      Apply flat 15% campus perk on food &amp; cold brews (Promo: <span className="font-mono text-emerald-700 font-bold">RAASTA-JU-15</span>)
                    </div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                  formData.isStudent ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-400'
                }`}>
                  {formData.isStudent && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
              </div>

              {/* Row 4: Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-orange-500 focus:bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94191 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-orange-500 focus:bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  Special Requests / Dietary Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Near power outlet for laptop, stage-facing table, extra spicy sizzler..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-orange-500 focus:bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all shadow-xs"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-[0_4px_18px_rgba(234,88,12,0.4)] hover:shadow-[0_6px_25px_rgba(234,88,12,0.55)] transition-all cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Confirm Reservation Request</span>
                </button>
                <p className="text-center text-[11px] text-stone-500 mt-2 font-mono">
                  Instant digital reference code &bull; No upfront booking fee required
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Step 2: Instant Booking Confirmation Preview */
          <div className="p-8 text-center flex flex-col items-center">
            {/* Success Check Icon with Pulse */}
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 mb-1">
              Reservation Confirmed &bull; Table Reserved
            </span>
            <h2 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-stone-900 mb-3">
              We Can&apos;t Wait to Welcome You!
            </h2>
            <p className="text-sm text-stone-600 max-w-md mb-6 leading-relaxed">
              Your table at Raasta Panama Chowk is held under your name. Show this reference at the reception.
            </p>

            {/* Booking Pass Card */}
            <div className="w-full max-w-md rounded-2xl bg-orange-50/60 border border-orange-200 p-5 text-left mb-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-orange-200/80">
                <div>
                  <span className="text-[10px] uppercase font-mono text-stone-500 font-bold block">
                    Booking Reference
                  </span>
                  <span className="font-mono font-extrabold text-lg text-orange-600">
                    {bookingRef}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono text-stone-500 font-bold block">
                    Status
                  </span>
                  <span className="text-xs font-bold text-emerald-800 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-200">
                    Confirmed
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500 block">Guest Name</span>
                  <span className="font-bold text-stone-900">{formData.name}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Phone</span>
                  <span className="font-bold text-stone-900">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Date &amp; Slot</span>
                  <span className="font-bold text-stone-900">{formData.date} &bull; {formData.timeSlot.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Guests &amp; Zone</span>
                  <span className="font-bold text-stone-900">{formData.guests} Pax &bull; {seatingZones.find(z => z.id === formData.seatingZone)?.name}</span>
                </div>
              </div>

              {formData.isStudent && (
                <div className="mt-3 pt-3 border-t border-orange-200/80 flex items-center justify-between text-xs text-emerald-800">
                  <span className="flex items-center gap-1 font-bold">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    Student 15% Perk Attached
                  </span>
                  <span className="font-mono text-[11px] font-bold">Valid with ID</span>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <a
                href={`https://wa.me/919419188230?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk Confirmation</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition-all cursor-pointer"
              >
                Close &bull; Explore Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
