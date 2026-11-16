# 🎸 Raasta Jammu — Digital Menu & Bohemian Rhythm Lounge Web Application

> **Where Good Vibes, Great Beats & Epic Flavors Converge.**  
> Panama Chowk • University Strip • Opp. University of Jammu Gate 2, Jammu (J&K) 180006

A production-grade, Tier 2 (React 19 + Vite + Tailwind CSS + Lucide React) responsive digital web application built specifically for **Raasta Jammu**. Designed with an urban bohemian rhythm lounge aesthetic, low-light anti-glare contrast, day-to-night vibe switching, high-performance dish search and filtering, and interactive live gig reservations.

---

## 🌟 Key Highlights & Architectural Features

### 1. Dual Atmosphere Architecture (Day Cafe vs Night Lounge)
- **Automatic IST Time-of-Day Detection**: Automatically switches between:
  - **☀️ Day Cafe Mode (11:00 AM – 05:00 PM IST)**: Acoustic chill, 18-hour single-origin nitro cold brews, pour-overs, and study nooks.
  - **🌙 Night Lounge Mode (05:00 PM – 11:30 PM IST)**: Live music sessions, craft mocktails, glowing neon amber lighting, and hissing iron sizzlers.
- **Interactive Mode Switcher**: Visitors can manually toggle between Day Cafe and Night Lounge modes to explore both atmospheres.

### 2. University of Jammu Campus ID Integration
- **Flat 15% Student Discount**: Dedicated banner and promo engine (`RAASTA-JU-15`) with one-click copy and instant discount toggle in the booking modal.
- Highlights campus perks: 300 Mbps mesh Wi-Fi, booth power outlets, society fest afterparties, and open-mic spotlights.

### 3. Weekly Live Music Roster & Stage Reservation
- **4 Live Gigs Weekly**:
  - *Thursday*: Acoustic Unplugged Sessions (07:30 PM – 10:30 PM)
  - *Friday*: Sufi & Bollywood Fusion Night (08:00 PM – 11:00 PM)
  - *Saturday*: Indie Rhythm & Groove Live (08:00 PM – 11:30 PM)
  - *Sunday*: Sundowner Vinyl Chill & Open Mic (05:00 PM – 09:00 PM)
- **Interactive RSVPs**: Clicking any gig opens the reservation modal with that event and stage-front seating pre-selected.
- **Sound Equalizer Motion**: Animated equalizer visualizer on the featured gig card.

### 4. Interactive 40-Dish Culinary Engine
- **Full Database Across 6 Categories**:
  1. *Cold Brews & Sips* (7 items: Nitro Cold Brew, Spanish Cortado, Lotus Biscoff Freakshake, Jamun Sparkler, etc.)
  2. *Loaded Tapas* (7 items: Truffle Parmesan Fries, Caribbean Jerk Skewers, 4-Cheese Pull-Apart Brioche, etc.)
  3. *Hand-Stretched Pizzas* (7 items: 48-hr Margherita Bufala, Wild Truffle Bianca, Tandoori Chicken Tikka, etc.)
  4. *Smash Burgers & Baos* (6 items: Double Smash Cheeseburger, Buttermilk Fried Chicken, Korean Bao Trio, etc.)
  5. *Soul Bowls & Sizzlers* (8 items: Penne Alla Vodka with Burrata, Jamaican Jerk Sizzler, Butter Chicken Bowl, etc.)
  6. *Decadent Desserts* (5 items: Cinnamon Churro Bites, Banoffee Mason Jar, Skillet Choc-Chip Cookie Gelato, etc.)
- **Instant Client-Side Filtering**:
  - `All Items`
  - `🟢 Pure Veg`
  - `🔴 Non-Veg`
  - `🔥 Crowd Favorite`
  - `⭐ Chef's Special`
  - `🎓 Under ₹300 (Student Pick)`
- **Real-Time Fuzzy Search**: Instant matching across title, culinary description, ingredients, and tags.
- **Sticky Category Pill Bar**: Smooth horizontal scrolling with active indicator.

### 5. Multi-Zone Reservation & Booking Modal
- **Seating Zone Selection**:
  - 🎸 *Music Stage Front*
  - 📚 *Mezzanine Study & Lounge*
  - 🌿 *Bohemian Green Patio*
  - 🛋️ *Velvet Lounge Booth*
- **Instant Booking Confirmation**: Generates a unique reference code (`RAASTA-JU-XXXX`), table hold details, and direct one-tap WhatsApp Desk Confirmation.

### 6. Mobile First Touch UX (>=44px touch targets)
- Fixed bottom mobile action bar (<768px): [📞 Call], [📖 Menu], [🎸 Gigs], [📅 Reserve].
- Animated slide-out navigation drawer with University ID reminder.

---

## 🎨 Visual Identity & Design Tokens

| Token | Hex / Value | Usage |
|---|---|---|
| **Deep Espresso Charcoal** | `#0F1110` | Main application background |
| **Dark Forest Velvet** | `#161917` | Secondary section background |
| **Smoked Timber** | `#1E2220` | Surface cards & containers |
| **Elevated Charcoal** | `#282D2A` | Interactive hover states & modal cards |
| **Sunburst Amber** | `#F59E0B` | Primary brand accent & neon glow |
| **Warm Honey Gold** | `#FBBF24` | Primary hover & highlights |
| **Electric Reggae Green** | `#10B981` | Pure Veg indicators & campus perks |
| **Sunset Coral** | `#F43F5E` | Live gig ribbons & spicy cues |
| **Display Headings** | `'Syne', 'Outfit', sans-serif` | Hero titles & brand headers |
| **Body & UI** | `'Plus Jakarta Sans', sans-serif` | Descriptions & button labels |
| **Prices & Codes** | `'JetBrains Mono', monospace` | INR prices, hours & promo codes |

---

## 📂 Project Structure

```
restaurant-workspace/raasta-jammu/
├── index.html                   # HTML entry point with Google Fonts preconnect & SVG favicon
├── package.json                 # Project dependencies & Vite scripts
├── vite.config.js               # Vite config with base: './' for Vercel subfolder deployment
├── brand-spec.json              # Full brand specification & strategy blueprint
├── README.md                    # Architecture and documentation
└── src/
    ├── main.jsx                 # React root mounting
    ├── App.jsx                  # Main application orchestrator & modal state
    ├── index.css                # Tailwind CSS v4 setup, theme tokens & custom neon animations
    ├── data/
    │   └── restaurantData.js    # 40 dishes, gigs roster, campus perks, amenities & testimonials
    └── components/
        ├── Logo.jsx             # Bohemian rhythm wave & vinyl groove brand emblem
        ├── Navbar.jsx           # Glassmorphic header with student perk pill & mobile drawer
        ├── Hero.jsx             # Day Cafe / Night Lounge dynamic vibe hero & stats
        ├── StudentPerkBanner.jsx# University of Jammu 15% discount promo banner
        ├── MusicGigsRoster.jsx  # Weekly acoustic & indie music schedule cards
        ├── InteractiveMenu.jsx  # 40-dish filterable menu with live search & sticky pill bar
        ├── DishDetailModal.jsx  # Dish craft story, pairing notes, and table reserve CTA
        ├── GigReservationModal.jsx # Multi-zone booking modal with instant confirmation reference
        ├── HeritageStory.jsx    # Panama Chowk history & bohemian philosophy narrative
        ├── Testimonials.jsx     # Scholar, artist & corporate verified reviews
        ├── LocationAndHours.jsx # Map links, dual timings breakdown & 8 amenities
        ├── MobileActionBar.jsx  # Sticky thumb-friendly mobile action bar
        └── Footer.jsx           # Links, contact info & copyright
```

---

## 🛠️ Build & Deployment Instructions

### Local Development
```bash
cd restaurant-workspace/raasta-jammu
npm install
npm run dev
```

### Production Build (Standalone)
```bash
cd restaurant-workspace/raasta-jammu
npm run build
```
Build output will be generated inside `restaurant-workspace/raasta-jammu/dist/` with relative subpath asset links.

### Universal Multi-Restaurant Deployment
From the repository root:
```bash
npm run build
```
This runs `scripts/build-all.mjs`, compiling all restaurants (including Raasta Jammu and Aroma Channi Himmat) into `dist/`, and regenerates the universal portal at `dist/index.html`.
