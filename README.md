# 🍽️ Culinary Digital Engine: Multi-Restaurant Showcase & Portals

A high-performance monorepo platform designed to rapidly architect, generate, and deploy bespoke landing pages and interactive digital menus for premier culinary venues.

Powered by a **Two-Agent Autonomous Pipeline**:
1. **Culinary Brand Strategist (`restaurant-strategist`)**: Market positioning, culinary taxonomy, gastronomic copywriting, visual identity, and tier selection.
2. **Frontend UI Architect (`restaurant-builder`)**: Zero-placeholder implementation, mobile-first scannability, interactive dietary filters, table reservation flows, and micro-interactions.

---

## 🏗️ Architecture & Subfolder Routing

All individual restaurant websites are maintained in isolated subfolders under `restaurant-workspace/`:

```
res-websites/
├── package.json                         # Unified build orchestrator
├── vercel.json                          # Vercel deployment & routing config
├── scripts/
│   └── build-all.mjs                    # Discovers, compiles & generates agency portal
├── restaurant-workspace/
│   ├── aroma-channi-himmat/             # Tier 2 (React 19 + Vite + Tailwind CSS)
│   │   ├── brand-spec.json              # Full 44-dish menu & brand identity
│   │   ├── src/                         # Production React components
│   │   └── package.json
│   └── [future-restaurant-slug]/
└── dist/                                # Vercel deployment distribution
    ├── index.html                       # Master Agency Showcase & Directory Portal
    └── aroma-channi-himmat/             # Subfolder route: /aroma-channi-himmat/
        ├── index.html
        ├── assets/
        └── brand-spec.json
```

### Routing on Vercel:
* **Root Domain (`https://your-domain.vercel.app/`):** Master Agency Showcase Hub featuring all restaurant venues, stack tier badges, live site launch buttons, and mobile QR code previews.
* **Subfolder Routes (`https://your-domain.vercel.app/<restaurant-slug>/`):** Direct isolated site & menu for each restaurant (e.g. `/aroma-channi-himmat/`).

---

## 🚀 Rapid Development & Build

### Local Testing:
```bash
# Build all restaurant sites and generate the master portal:
npm run build

# Or work on an individual restaurant directly:
cd restaurant-workspace/aroma-channi-himmat
npm run dev
```

### Adding a New Restaurant:
Provide the restaurant name to the agentic engine. The two-agent system will:
1. Conduct local market and culinary analysis.
2. Formulate brand tokens and menu taxonomy in `restaurant-workspace/<slug>/brand-spec.json`.
3. Scaffold and build the site (Tier 1 Vanilla or Tier 2 React) in `restaurant-workspace/<slug>/`.
4. Next `git push` to GitHub will trigger Vercel to automatically compile and route the new subfolder!
