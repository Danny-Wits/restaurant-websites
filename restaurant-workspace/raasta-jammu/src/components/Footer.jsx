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
    <footer className="relative bg-[#0A0C0B] border-t border-amber-500/20 pt-16 pb-24 md:pb-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Column 1: Brand & Manifesto */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="default" />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              Jammu&apos;s premier bohemian cafe, rhythm lounge &amp; urban bistro. Sunlit single-origin brews &amp; co-working corners by day; sizzling global platters, craft mocktails &amp; live acoustic indie rhythms by night.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/raastajammu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-zinc-800 hover:border-amber-500/50 flex items-center justify-center text-zinc-300 hover:text-amber-400 transition-all"
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
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-zinc-800 hover:border-emerald-500/50 flex items-center justify-center text-zinc-300 hover:text-emerald-400 transition-all"
                title="WhatsApp Official"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${restaurant.contact.email}`}
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-zinc-800 hover:border-amber-500/50 flex items-center justify-center text-zinc-300 hover:text-amber-400 transition-all"
                title="Email Desk"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Culinary Pillars */}
          <div>
            <h4 className="font-['Syne'] font-bold text-sm text-zinc-100 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>Culinary Menu</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  All-Day Nitro Cold Brews &amp; Sips
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Loaded Truffle Fries &amp; Jerk Tapas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  48-Hr Fermented Sourdough Pizzas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Double Patty Smash Brioche Burgers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Hissing Cast-Iron Soul Sizzlers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Skillet Choc-Chip Cookies &amp; Churros
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Live Rhythm & Campus */}
          <div>
            <h4 className="font-['Syne'] font-bold text-sm text-zinc-100 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Music className="w-4 h-4 text-rose-400" />
              <span>Gigs &amp; Campus</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#gigs" className="hover:text-rose-400 transition-colors">
                  Thursday Acoustic Unplugged
                </a>
              </li>
              <li>
                <a href="#gigs" className="hover:text-rose-400 transition-colors">
                  Friday Sufi &amp; Bollywood Fusion
                </a>
              </li>
              <li>
                <a href="#gigs" className="hover:text-rose-400 transition-colors">
                  Saturday Indie Rhythm &amp; Groove
                </a>
              </li>
              <li>
                <a href="#gigs" className="hover:text-rose-400 transition-colors">
                  Sunday Vinyl Chill &amp; Open Mic
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#campus"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>15% Jammu Univ. ID Perk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Desk */}
          <div>
            <h4 className="font-['Syne'] font-bold text-sm text-zinc-100 uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Panama Chowk Desk</span>
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              Opposite University Road / Gujarbasti Junction, Near University of Jammu Gate 2, Jammu 180006.
            </p>
            <div className="space-y-1.5 text-xs font-mono text-zinc-400">
              <div>Phone: {restaurant.contact.phone}</div>
              <div>Hours: 11:00 AM – 11:30 PM</div>
              <div className="text-emerald-400 font-semibold">Kitchen Closes: 11:00 PM</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Raasta Jammu. Where Good Vibes, Great Beats &amp; Epic Flavors Converge.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
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
