import React from 'react';
import Logo from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  ArrowUp,
  GraduationCap,
  Music,
  Coffee
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function Footer() {
  const { restaurant } = restaurantData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FAF7F2] border-t border-orange-200/80 pt-16 pb-24 md:pb-16 text-stone-600 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Column 1: Brand & Manifesto */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="default" />
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-6">
              Jammu&apos;s premier bohemian cafe, rhythm lounge &amp; urban bistro. Sunlit single-origin brews &amp; co-working corners by day; sizzling global platters, craft mocktails &amp; live acoustic indie rhythms by night.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/raastajammu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-stone-200 hover:border-orange-400 flex items-center justify-center text-stone-700 hover:text-orange-600 transition-all shadow-xs"
                title="Instagram @raastajammu"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={`https://wa.me/919419188230`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-stone-200 hover:border-emerald-400 flex items-center justify-center text-stone-700 hover:text-emerald-700 transition-all shadow-xs"
                title="WhatsApp Official"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${restaurant.contact.email}`}
                className="w-9 h-9 rounded-xl bg-white border border-stone-200 hover:border-orange-400 flex items-center justify-center text-stone-700 hover:text-orange-600 transition-all shadow-xs"
                title="Email Desk"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Culinary Pillars */}
          <div>
            <h4 className="font-['Syne'] font-bold text-sm text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-orange-600" />
              <span>Culinary Menu</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#menu" className="hover:text-orange-600 transition-colors font-medium">
                  All-Day Nitro Cold Brews &amp; Sips
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-600 transition-colors font-medium">
                  Loaded Truffle Fries &amp; Jerk Tapas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-600 transition-colors font-medium">
                  48-Hr Fermented Sourdough Pizzas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-600 transition-colors font-medium">
                  Double Patty Smash Brioche Burgers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-600 transition-colors font-medium">
                  Hissing Cast-Iron Soul Sizzlers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-600 transition-colors font-medium">
                  Skillet Choc-Chip Cookies &amp; Churros
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Live Rhythm & Campus */}
          <div>
            <h4 className="font-['Syne'] font-bold text-sm text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Music className="w-4 h-4 text-rose-600" />
              <span>Gigs &amp; Campus</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#gigs" className="hover:text-rose-600 transition-colors font-medium">
                  Thursday Acoustic Unplugged
                </a>
              </li>
              <li>
                <a href="#gigs" className="hover:text-rose-600 transition-colors font-medium">
                  Friday Sufi &amp; Bollywood Fusion
                </a>
              </li>
              <li>
                <a href="#gigs" className="hover:text-rose-600 transition-colors font-medium">
                  Saturday Indie Rhythm &amp; Groove
                </a>
              </li>
              <li>
                <a href="#gigs" className="hover:text-rose-600 transition-colors font-medium">
                  Sunday Vinyl Chill &amp; Open Mic
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#campus"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold hover:bg-emerald-100 transition-colors shadow-xs"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                  <span>15% Jammu Univ. ID Perk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Desk */}
          <div>
            <h4 className="font-['Syne'] font-bold text-sm text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>Panama Chowk Desk</span>
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed mb-3">
              Opposite University Road / Gujarbasti Junction, Near University of Jammu Gate 2, Jammu 180006.
            </p>
            <div className="space-y-1.5 text-xs font-mono text-stone-600">
              <div>Phone: <span className="font-bold text-stone-800">{restaurant.contact.phone}</span></div>
              <div>Hours: <span className="font-bold text-stone-800">11:00 AM – 11:30 PM</span></div>
              <div className="text-emerald-700 font-bold">Kitchen Closes: 11:00 PM</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Raasta Jammu. Where Good Vibes, Great Beats &amp; Epic Flavors Converge.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-bold text-stone-600 hover:text-orange-600 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
