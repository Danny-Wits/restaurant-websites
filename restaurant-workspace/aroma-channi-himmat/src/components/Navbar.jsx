import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu as MenuIcon, X, Clock, MapPin } from 'lucide-react';
import Logo from './Logo';
import { restaurantData } from '../data/restaurantData';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
            ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5 shadow-sm' 
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.16em] font-light text-zinc-400 hover:text-zinc-100 transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Phone call pill */}
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="flex items-center gap-2 text-xs font-normal tracking-wider text-zinc-300 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/20 px-3.5 py-2 rounded-full transition-all duration-200"
                title="Direct Table Inquiries"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{restaurantData.contact.phone}</span>
              </a>

              {/* Reserve CTA */}
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] transition-all duration-200"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex md:hidden items-center gap-2.5">
              <button
                onClick={onOpenReservation}
                className="px-3.5 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-wider text-zinc-950 bg-[#D4AF37]"
              >
                Book
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#121214] text-zinc-300 border border-white/[0.08] hover:text-white transition-colors"
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
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#09090b] border-l border-white/[0.08] p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <Logo onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <div className="py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-sm font-serif font-normal text-zinc-300 hover:text-white py-2 border-b border-white/[0.04] transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-600 text-xs">→</span>
                </a>
              ))}
            </div>

            {/* Fast info */}
            <div className="space-y-2.5 pt-2 text-xs text-zinc-400 font-light">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Lunch: 12:30–4:00 PM | Dinner: 7:00–11:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sector 1, Channi Himmat (Near NH-44)</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <a
              href={`tel:${restaurantData.contact.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#121214] text-zinc-200 border border-white/[0.08] text-xs font-medium uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{restaurantData.contact.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-zinc-950 bg-[#D4AF37] hover:bg-[#E2BD44] font-semibold text-xs uppercase tracking-wider transition-colors"
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
