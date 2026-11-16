import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu as MenuIcon, X, Clock, MapPin, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { restaurantData } from '../data/restaurantData';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    { name: "Culinary Pillars", href: "#pillars" },
    { name: "Chef's Specials", href: "#specials" },
    { name: "Artisanal Menu", href: "#menu" },
    { name: "Diner Reviews", href: "#reviews" },
    { name: "Location & Hours", href: "#location" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
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
            ? 'glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.85)] border-b border-[#D4AF37]/25' 
            : 'bg-gradient-to-b from-[#0D0B0A]/95 via-[#0D0B0A]/80 to-transparent py-5'
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
                  className="text-xs uppercase tracking-[0.14em] font-medium text-[#C8C0B5] hover:text-[#D4AF37] transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#E08E36] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Phone call pill */}
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F8F6F0] bg-[#1A1714] hover:bg-[#25201B] border border-[#D4AF37]/30 hover:border-[#D4AF37] px-3.5 py-2 rounded-full transition-all duration-200"
                title="Direct Table Inquiries"
              >
                <Phone className="w-3.5 h-3.5 text-[#E08E36]" />
                <span>{restaurantData.contact.phone}</span>
              </a>

              {/* Reserve CTA */}
              <button
                onClick={onOpenReservation}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D0B0A] bg-gradient-to-r from-[#D4AF37] via-[#F3E9C7] to-[#D4AF37] hover:from-[#E6C35C] hover:to-[#E08E36] shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.65)] transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenReservation}
                className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#0D0B0A] bg-[#D4AF37]"
              >
                Book
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#1A1714] text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#25201B] transition-colors"
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
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
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#14110F] border-l border-[#D4AF37]/30 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
              <Logo onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#C8C0B5] hover:text-[#D4AF37] rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav list */}
            <div className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base font-serif font-semibold text-[#F8F6F0] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[#D4AF37]/40 text-sm">→</span>
                </a>
              ))}
            </div>

            {/* Fast info */}
            <div className="space-y-3 pt-2 text-xs text-[#C8C0B5]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Lunch: 12:30–4:00 PM | Dinner: 7:00–11:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E08E36]" />
                <span>Sector 1, Channi Himmat (Near NH-44)</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#D4AF37]/20 space-y-3">
            <a
              href={`tel:${restaurantData.contact.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1A1714] text-[#F8F6F0] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#E08E36]" />
              <span>Call Reception: {restaurantData.contact.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[#0D0B0A] bg-gradient-to-r from-[#D4AF37] to-[#E08E36] font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
