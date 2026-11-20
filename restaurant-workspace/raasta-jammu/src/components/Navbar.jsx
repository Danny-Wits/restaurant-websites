import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import {
  Menu as MenuIcon,
  X,
  Calendar,
  Phone,
  GraduationCap,
  Sparkles,
  Music,
  MapPin,
  Clock
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function Navbar({ onOpenReserve }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Live Gigs', href: '#gigs', badge: 'Weekly' },
    { label: 'Campus Perks', href: '#campus', badge: '15% Off' },
    { label: 'The Soul', href: '#vibe' },
    { label: 'Hours & Map', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full max-w-full ${
          isScrolled
            ? 'glass-nav shadow-[0_4px_20px_-2px_rgba(234,88,12,0.06),0_2px_6px_-1px_rgba(0,0,0,0.04)] py-2.5 sm:py-3 border-b border-orange-100'
            : 'bg-[#FFFDF9]/92 backdrop-blur-md py-3 sm:py-4 border-b border-orange-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
          <div className="flex items-center justify-between gap-2 w-full min-w-0">
            {/* Logo */}
            <div className="min-w-0 shrink">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-semibold text-stone-700 hover:text-orange-600 transition-colors duration-200 rounded-xl hover:bg-orange-50/70 flex items-center gap-1.5 group"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-orange-100 text-orange-700 border border-orange-200 group-hover:bg-orange-200">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Right Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Campus Perk Pill */}
              <a
                href="#campus"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-all shadow-xs shrink-0"
              >
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                <span>15% JU Student Perk</span>
              </a>

              {/* Direct Call Link */}
              <a
                href={`tel:${restaurantData.restaurant.contact.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-orange-600 hover:border-orange-300 hover:bg-orange-50 transition-all shadow-xs shrink-0"
                title="Call Panama Chowk Desk"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Reserve CTA */}
              <button
                onClick={onOpenReserve}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-[0_4px_16px_-2px_rgba(234,88,12,0.4)] hover:shadow-[0_6px_22px_0_rgba(234,88,12,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shrink-0"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Reserve Table / Gig</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={onOpenReserve}
                className="hidden min-[400px]:inline-flex px-2.5 sm:px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-xs shadow-sm shrink-0 cursor-pointer"
              >
                Reserve
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 sm:p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-xs shrink-0 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
        />

        {/* Slide-over panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white border-l border-orange-200 shadow-2xl p-5 sm:p-6 flex flex-col justify-between transition-transform duration-300 overflow-y-auto max-w-full ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-orange-100">
              <Logo size="small" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Student Perk Flash Alert */}
            <div className="my-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs mb-1">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Jammu University Special</span>
              </div>
              <p className="text-stone-700 text-xs">
                Flash your college ID for flat <strong className="text-emerald-700">15% off</strong> food &amp; brews on weekdays!
              </p>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-stone-800 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-orange-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-sm shadow-[0_4px_16px_rgba(234,88,12,0.35)]"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table or Gig Seat</span>
            </button>

            <a
              href={`tel:${restaurantData.restaurant.contact.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 font-semibold text-sm hover:border-orange-300 hover:text-orange-600"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call Panama Chowk Desk</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-600" /> Opp JU Gate 2
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-600" /> 11 AM - 11:30 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
