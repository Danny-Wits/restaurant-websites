import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu as MenuIcon, X, Clock, MapPin, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { restaurantData } from '../data/restaurantData';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Pillars", href: "#pillars" },
    { name: "Chef's Specials", href: "#specials" },
    { name: "Artisanal Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location & Hours", href: "#location" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-warm-sm py-3' 
            : 'bg-[#FFFDF9]/90 backdrop-blur-sm py-4 border-b border-orange-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.14em] font-semibold text-stone-700 hover:text-orange-600 transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-3.5">
              {/* Phone call pill */}
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="flex items-center gap-2 text-xs font-semibold tracking-wide text-stone-800 bg-orange-50 hover:bg-orange-100 border border-orange-200 hover:border-orange-300 px-4 py-2 rounded-full transition-all duration-200 shadow-warm-sm"
                title="Direct Table Inquiries"
              >
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>{restaurantData.contact.phone}</span>
              </a>

              {/* Reserve CTA */}
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 transition-all duration-200 shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenReservation}
                className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-500 shadow-sm"
              >
                Book
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-orange-50 text-stone-800 border border-orange-200 hover:bg-orange-100 transition-colors"
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-orange-600" /> : <MenuIcon className="w-5 h-5 text-stone-800" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Soft Backdrop */}
        <div 
          className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div 
          className={`absolute top-0 right-0 w-[86%] max-w-sm h-full bg-[#FFFDF9] border-l border-orange-200 p-6 flex flex-col justify-between shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-orange-100">
              <Logo onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-500 hover:text-stone-900 rounded-xl bg-orange-50 border border-orange-200/70"
              >
                <X className="w-5 h-5 text-orange-600" />
              </button>
            </div>

            {/* Nav list */}
            <div className="py-5 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base font-serif font-semibold text-stone-800 hover:text-orange-600 py-2.5 px-2 rounded-lg hover:bg-orange-50/60 border-b border-orange-50 transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-orange-500 text-sm font-sans font-bold">→</span>
                </a>
              ))}
            </div>

            {/* Fast info */}
            <div className="space-y-2.5 pt-4 text-xs text-stone-600 font-medium bg-orange-50/60 p-3.5 rounded-xl border border-orange-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Lunch: 12:30–4:00 PM | Dinner: 7:00–11:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Sector 1, Channi Himmat (Near NH-44)</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-orange-100 space-y-3 mt-6">
            <a
              href={`tel:${restaurantData.contact.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-stone-800 border border-orange-200 text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-orange-50"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>{restaurantData.contact.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/25 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
