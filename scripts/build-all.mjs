import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const workspaceDir = path.join(rootDir, 'restaurant-workspace');
const outputDir = path.join(rootDir, 'dist');

console.log('🚀 Starting Universal Restaurant Pipeline Build...');
console.log(`📁 Root: ${rootDir}`);
console.log(`📁 Workspace: ${workspaceDir}`);
console.log(`📁 Output: ${outputDir}`);

if (!fs.existsSync(workspaceDir)) {
  console.error(`❌ Workspace directory does not exist: ${workspaceDir}`);
  process.exit(1);
}

// Clean & recreate dist directory
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

// Discover restaurant subdirectories
const entries = fs.readdirSync(workspaceDir, { withFileTypes: true });
const restaurantDirs = entries
  .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
  .map(entry => entry.name);

console.log(`🍽️ Discovered ${restaurantDirs.length} restaurant(s): ${restaurantDirs.join(', ')}`);

const restaurantsMeta = [];

for (const slug of restaurantDirs) {
  const restPath = path.join(workspaceDir, slug);
  const targetDist = path.join(outputDir, slug);
  const hasPkg = fs.existsSync(path.join(restPath, 'package.json'));
  const specPath = path.join(restPath, 'brand-spec.json');

  let meta = {
    slug,
    name: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    cuisine: 'Multi Cuisine',
    location: '',
    tier: hasPkg ? 'Tier 2 (React + Vite + Tailwind)' : 'Tier 1 (Vanilla 0-Dep)',
    description: '',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    itemCount: 0,
    accentColor: '#D4AF37'
  };

  if (fs.existsSync(specPath)) {
    try {
      const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
      meta.name = spec.restaurant?.name || spec.restaurantName || meta.name;
      const loc = spec.restaurant?.location || spec.location;
      meta.location = loc?.city ? `${loc.address ? loc.address.split(',')[0] + ', ' : ''}${loc.city}` : (typeof loc === 'string' ? loc : '');
      const pillars = spec.marketAnalysis?.culinaryPillars || spec.marketContext?.culinaryPillars;
      meta.cuisine = (pillars && pillars[0]?.pillar) || pillars?.[0] || 'Artisanal Cafe & Lounge';
      meta.description = spec.storytellingAndCopy?.hero?.subheadline || spec.restaurant?.subTagline || spec.microCopy?.heroHeadline || spec.marketContext?.targetAudience || '';
      meta.accentColor = spec.visualIdentity?.colorTokens?.primary?.hex || spec.visualIdentity?.colorPalette?.primary?.hex || '#F59E0B';
      const categories = spec.menuEngineering?.categories || spec.menuCategories;
      if (Array.isArray(categories)) {
        meta.itemCount = categories.reduce((acc, cat) => acc + (cat.items?.length || 0), 0);
      }
      if (spec.visualIdentity?.heroImage || spec.restaurant?.heroImage) {
        meta.heroImage = spec.visualIdentity?.heroImage || spec.restaurant?.heroImage;
      } else if (slug === 'raasta-jammu') {
        meta.heroImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
      }
    } catch (e) {
      console.warn(`⚠️ Warning: Failed to parse brand-spec.json for ${slug}:`, e.message);
    }
  }

  restaurantsMeta.push(meta);

  console.log(`\n⚙️ Building site for [${slug}]...`);

  if (hasPkg) {
    // Check if node_modules exists, if not install
    if (!fs.existsSync(path.join(restPath, 'node_modules'))) {
      console.log(`📦 Installing dependencies for ${slug}...`);
      execSync('npm install', { cwd: restPath, stdio: 'inherit' });
    }

    console.log(`🔨 Running build for ${slug}...`);
    execSync('npm run build', { cwd: restPath, stdio: 'inherit' });

    const localDist = path.join(restPath, 'dist');
    if (fs.existsSync(localDist)) {
      copyFolderSync(localDist, targetDist);
      console.log(`✅ Copied build output to dist/${slug}/`);
    } else {
      console.error(`❌ Expected dist directory not found at ${localDist}`);
    }
  } else {
    // Tier 1 static copy
    console.log(`📄 Copying static Tier 1 files for ${slug}...`);
    fs.mkdirSync(targetDist, { recursive: true });
    copyFolderSync(restPath, targetDist, ['node_modules', '.git', 'brand-spec.json']);
  }

  // Copy brand-spec.json if it exists so it's accessible at /<slug>/brand-spec.json
  if (fs.existsSync(specPath)) {
    fs.copyFileSync(specPath, path.join(targetDist, 'brand-spec.json'));
  }
}

// Generate the Master Agency Portal at dist/index.html
generatePortalHtml(outputDir, restaurantsMeta);

console.log('\n🎉 Pipeline Build Complete! All sites ready in ./dist');

// Helpers
function copyFolderSync(from, to, exclude = ['node_modules', '.git']) {
  fs.mkdirSync(to, { recursive: true });
  for (const element of fs.readdirSync(from)) {
    if (exclude.includes(element)) continue;
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.lstatSync(fromPath);
    if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath, exclude);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  }
}

function generatePortalHtml(outDir, items) {
  const cardsHtml = items.map(item => `
    <article class="restaurant-card" data-name="${item.name.toLowerCase()}" data-cuisine="${item.cuisine.toLowerCase()}" data-location="${item.location.toLowerCase()}">
      <div class="card-image-wrap">
        <img src="${item.heroImage}" alt="${item.name}" loading="lazy" />
        <span class="tier-badge ${item.tier.includes('Tier 2') ? 'tier-react' : 'tier-vanilla'}">
          ${item.tier.includes('Tier 2') ? '⚡ React + Vite' : '🍃 Pure Vanilla'}
        </span>
      </div>
      <div class="card-body">
        <div class="card-meta-top">
          <span class="location-tag">📍 ${item.location || 'Jammu, J&K'}</span>
          ${item.itemCount ? `<span class="items-count">🍽️ ${item.itemCount} Dishes</span>` : ''}
        </div>
        <h2 class="restaurant-title">${item.name}</h2>
        <p class="restaurant-desc">${item.description || 'Artisanal dining experience and digital culinary menu.'}</p>
        <div class="card-actions">
          <a href="./${item.slug}/" class="btn-primary">
            <span>Explore Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <button class="btn-qr" onclick="openQrModal('./${item.slug}/', '${item.name.replace(/'/g, "\\'")}')" title="Scan QR Code for Mobile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span>QR</span>
          </button>
        </div>
      </div>
    </article>
  `).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jammu Culinary Engine | Multi-Restaurant Digital Showcase</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #FFFDF9;
      --card-bg: #FFFFFF;
      --border: #F3E8E2;
      --orange: #EA580C;
      --orange-light: #FFF7ED;
      --amber: #F59E0B;
      --text: #1C1917;
      --text-muted: #78716C;
      --shadow-soft: 0 4px 20px -2px rgba(234, 88, 12, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04);
      --shadow-hover: 0 12px 28px -4px rgba(234, 88, 12, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow-x: hidden;
    }
    .ambient-glow {
      position: absolute;
      top: -160px;
      left: 50%;
      transform: translateX(-50%);
      width: 900px;
      height: 480px;
      background: radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, rgba(254, 243, 199, 0.25) 45%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
    header {
      position: relative;
      z-index: 10;
      padding: 4rem 1.5rem 2rem;
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      border-radius: 9999px;
      background: var(--orange-light);
      border: 1px solid #FFEDD5;
      color: var(--orange);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
      box-shadow: 0 2px 8px rgba(234, 88, 12, 0.08);
    }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.4rem, 5.5vw, 4rem);
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 1rem;
      color: var(--text);
    }
    h1 span {
      background: linear-gradient(135deg, #EA580C 0%, #D97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p.lead {
      color: var(--text-muted);
      font-size: 1.15rem;
      line-height: 1.6;
      max-width: 680px;
      margin: 0 auto 2rem;
    }
    .search-bar-wrap {
      max-width: 520px;
      margin: 0 auto 2.5rem;
      position: relative;
    }
    .search-input {
      width: 100%;
      padding: 0.9rem 1.2rem 0.9rem 2.8rem;
      border-radius: 9999px;
      border: 1px solid var(--border);
      background: #FFFFFF;
      font-size: 0.95rem;
      color: var(--text);
      box-shadow: var(--shadow-soft);
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-input:focus {
      border-color: var(--orange);
      box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.15);
    }
    .search-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      pointer-events: none;
    }
    main {
      position: relative;
      z-index: 10;
      max-width: 1240px;
      width: 100%;
      margin: 0 auto;
      padding: 0 1.5rem 4.5rem;
      flex: 1;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }
    .restaurant-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 1.25rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-soft);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .restaurant-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-hover);
      border-color: #FED7AA;
    }
    .card-image-wrap {
      position: relative;
      width: 100%;
      height: 220px;
      overflow: hidden;
      background: #F5F5F4;
    }
    .card-image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .restaurant-card:hover .card-image-wrap img {
      transform: scale(1.05);
    }
    .tier-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      backdrop-filter: blur(8px);
      letter-spacing: 0.03em;
      box-shadow: 0 2px 6px rgba(0,0,0,0.12);
    }
    .tier-react {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #BAE6FD;
      color: #0284C7;
    }
    .tier-vanilla {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #BBF7D0;
      color: #16A34A;
    }
    .card-body {
      padding: 1.6rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-meta-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
      font-weight: 500;
    }
    .location-tag {
      color: var(--text-muted);
    }
    .items-count {
      color: var(--orange);
      font-weight: 600;
    }
    .restaurant-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--text);
    }
    .restaurant-desc {
      color: var(--text-muted);
      font-size: 0.92rem;
      line-height: 1.55;
      margin-bottom: 1.5rem;
      flex: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-actions {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
    .btn-primary {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, var(--orange) 0%, #D97706 100%);
      color: #FFFFFF;
      text-decoration: none;
      padding: 0.8rem 1.25rem;
      border-radius: 0.75rem;
      font-weight: 700;
      font-size: 0.92rem;
      box-shadow: 0 4px 12px rgba(234, 88, 12, 0.22);
      transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }
    .btn-primary:hover {
      opacity: 0.96;
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(234, 88, 12, 0.32);
    }
    .btn-qr {
      background: var(--orange-light);
      border: 1px solid #FED7AA;
      color: var(--orange);
      padding: 0.8rem 1rem;
      border-radius: 0.75rem;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 700;
      transition: background 0.2s, border-color 0.2s, color 0.2s;
    }
    .btn-qr:hover {
      background: #FFEDD5;
      border-color: var(--orange);
    }
    /* Modal styles */
    .modal-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(28, 25, 23, 0.6);
      backdrop-filter: blur(6px);
      z-index: 100;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }
    .modal-backdrop.open { display: flex; }
    .modal-card {
      background: #FFFFFF;
      border: 1px solid var(--border);
      border-radius: 1.25rem;
      padding: 2.2rem;
      max-width: 420px;
      width: 100%;
      text-align: center;
      box-shadow: 0 24px 60px rgba(0,0,0,0.2);
      position: relative;
    }
    .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
    }
    #qrCodeImg {
      width: 210px;
      height: 210px;
      margin: 1.5rem auto;
      border-radius: 0.75rem;
      background: #FFF7ED;
      padding: 0.75rem;
      border: 1px solid #FED7AA;
    }
    footer {
      border-top: 1px solid var(--border);
      padding: 2.5rem 1.5rem;
      text-align: center;
      font-size: 0.88rem;
      color: var(--text-muted);
      background: #FFFFFF;
    }
  </style>
</head>
<body>
  <div class="ambient-glow"></div>
  
  <header>
    <div class="badge">🍽️ 10 Premier Jammu Dining Venues</div>
    <h1>Bespoke Landing Sites & <span>Digital Menus</span></h1>
    <p class="lead">Centralized high-performance restaurant engine delivering sunlit, mouth-watering landing pages and mobile-first interactive menus across Jammu.</p>
    
    <div class="search-bar-wrap">
      <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="text" id="portalSearch" class="search-input" placeholder="Search by restaurant name, cuisine, or locality..." oninput="filterPortalCards()" />
    </div>
  </header>

  <main>
    <div class="grid" id="portalGrid">
      ${cardsHtml}
    </div>
  </main>

  <div id="qrModal" class="modal-backdrop" onclick="closeQrModal(event)">
    <div class="modal-card" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeQrModal()">&times;</button>
      <h3 id="qrModalTitle" style="font-family: 'Playfair Display', serif; font-size: 1.35rem; color: #1C1917; margin-bottom: 0.4rem;"></h3>
      <p style="font-size: 0.85rem; color: #78716C;">Scan with your phone to open the mobile menu</p>
      <img id="qrCodeImg" src="" alt="Mobile QR Code" />
      <div id="qrModalUrl" style="font-size: 0.8rem; color: #EA580C; font-weight: 600; word-break: break-all;"></div>
    </div>
  </div>

  <footer>
    <p>Jammu Restaurant Engine &bull; Built with Appetizing Light UX Architecture &bull; Vercel Monorepo Deployment</p>
  </footer>

  <script>
    function openQrModal(subpath, name) {
      const fullUrl = window.location.origin + window.location.pathname.replace(/\\/[^\\/]*$/, '/') + subpath.replace(/^\\.\\//, '');
      document.getElementById('qrModalTitle').textContent = name;
      document.getElementById('qrModalUrl').textContent = fullUrl;
      document.getElementById('qrCodeImg').src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(fullUrl);
      document.getElementById('qrModal').classList.add('open');
    }
    function closeQrModal() {
      document.getElementById('qrModal').classList.remove('open');
    }
    function filterPortalCards() {
      const query = document.getElementById('portalSearch').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.restaurant-card');
      cards.forEach(card => {
        const name = card.getAttribute('data-name') || '';
        const cuisine = card.getAttribute('data-cuisine') || '';
        const loc = card.getAttribute('data-location') || '';
        if (!query || name.includes(query) || cuisine.includes(query) || loc.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log(`🌐 Master Agency Portal generated at dist/index.html`);
}
