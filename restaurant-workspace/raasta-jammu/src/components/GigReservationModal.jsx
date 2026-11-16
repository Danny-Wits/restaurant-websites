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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#1E2220] border border-amber-500/35 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col no-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          /* Step 1: Booking Form */
          <div className="p-6 sm:p-8">
            {/* Modal Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Music className="w-3.5 h-3.5 text-amber-400" />
                <span>Panama Chowk Rhythm Desk</span>
              </div>
              <h2 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-zinc-100">
                Reserve Your Table or Gig Spot
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Instant reservation for acoustic music nights, study nooks, or group birthday bashes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-zinc-400 mb-1.5">
                    Reservation Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161917] border border-zinc-700 focus:border-amber-400 text-zinc-100 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-zinc-400 mb-1.5">
                    Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161917] border border-zinc-700 focus:border-amber-400 text-zinc-100 text-sm focus:outline-none"
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
                <label className="block text-xs font-mono font-semibold uppercase text-zinc-400 mb-2">
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
                            ? 'bg-amber-500/15 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                            : 'bg-[#161917] border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <span className="text-xl">{zone.icon}</span>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-amber-400' : 'text-zinc-200'}`}>
                            {zone.name}
                          </div>
                          <div className="text-[11px] text-zinc-400 mt-0.5">
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
                  <label className="block text-xs font-mono font-semibold uppercase text-zinc-400 mb-1.5">
                    Number of Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161917] border border-zinc-700 focus:border-amber-400 text-zinc-100 text-sm focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, '12+ (Mezzanine Group)'].map((num) => (
                      <option key={num} value={num}>
                        {num} {typeof num === 'number' && (num === 1 ? 'Guest (Solo Study)' : 'Guests')}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-zinc-400 mb-1.5">
                    Occasion
                  </label>
                  <select
                    value={formData.specialOccasion}
                    onChange={(e) => setFormData({ ...formData, specialOccasion: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161917] border border-zinc-700 focus:border-amber-400 text-zinc-100 text-sm focus:outline-none"
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
                    ? 'bg-emerald-500/15 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                    : 'bg-[#161917] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${formData.isStudent ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-zinc-400'}`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-100">
                      I am a University of Jammu / College Student
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Apply flat 15% campus perk on food &amp; cold brews (Promo: <span className="font-mono text-emerald-400">RAASTA-JU-15</span>)
                    </div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                  formData.isStudent ? 'bg-emerald-500 border-emerald-500 text-zinc-950' : 'border-zinc-600'
                }`}>
                  {formData.isStudent && <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-zinc-950" />}
                </div>
              </div>

              {/* Row 4: Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-zinc-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161917] border border-zinc-700 focus:border-amber-400 text-zinc-100 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-zinc-400 mb-1.5">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94191 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161917] border border-zinc-700 focus:border-amber-400 text-zinc-100 text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase text-zinc-400 mb-1.5">
                  Special Requests / Dietary Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Near power outlet for laptop, stage-facing table, extra spicy sizzler..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#161917] border border-zinc-700 focus:border-amber-400 text-zinc-100 text-sm focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-bold text-sm shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] transition-all cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Confirm Reservation Request</span>
                </button>
                <p className="text-center text-[11px] text-zinc-500 mt-2 font-mono">
                  Instant digital reference code &bull; No upfront booking fee required
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Step 2: Instant Booking Confirmation Preview */
          <div className="p-8 text-center flex flex-col items-center">
            {/* Success Check Icon with Pulse */}
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-5 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-1">
              Reservation Confirmed &bull; Table Reserved
            </span>
            <h2 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-zinc-100 mb-3">
              We Can&apos;t Wait to Welcome You!
            </h2>
            <p className="text-sm text-zinc-400 max-w-md mb-6 leading-relaxed">
              Your table at Raasta Panama Chowk is held under your name. Show this reference at the reception.
            </p>

            {/* Booking Pass Card */}
            <div className="w-full max-w-md rounded-2xl bg-[#161917] border border-amber-500/30 p-5 text-left mb-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                    Booking Reference
                  </span>
                  <span className="font-mono font-extrabold text-lg text-amber-400">
                    {bookingRef}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                    Status
                  </span>
                  <span className="text-xs font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    Confirmed
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 block">Guest Name</span>
                  <span className="font-semibold text-zinc-200">{formData.name}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Phone</span>
                  <span className="font-semibold text-zinc-200">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Date &amp; Slot</span>
                  <span className="font-semibold text-zinc-200">{formData.date} &bull; {formData.timeSlot.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Guests &amp; Zone</span>
                  <span className="font-semibold text-zinc-200">{formData.guests} Pax &bull; {seatingZones.find(z => z.id === formData.seatingZone)?.name}</span>
                </div>
              </div>

              {formData.isStudent && (
                <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-emerald-400">
                  <span className="flex items-center gap-1 font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    Student 15% Perk Attached
                  </span>
                  <span className="font-mono text-[11px]">Valid with ID</span>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <a
                href={`https://wa.me/919419188230?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk Confirmation</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs transition-all cursor-pointer"
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
