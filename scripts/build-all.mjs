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
    <article class="restaurant-card">
      <div class="card-image-wrap">
        <img src="${item.heroImage}" alt="${item.name}" loading="lazy" />
        <span class="tier-badge ${item.tier.includes('Tier 2') ? 'tier-react' : 'tier-vanilla'}">
          ${item.tier.includes('Tier 2') ? '⚡ React + Vite' : '🍃 Pure Vanilla'}
        </span>
      </div>
      <div class="card-body">
        <div class="card-meta-top">
          <span class="location-tag">📍 ${item.location || 'Premium Location'}</span>
          ${item.itemCount ? `<span class="items-count">🍽️ ${item.itemCount} Dishes</span>` : ''}
        </div>
        <h2 class="restaurant-title">${item.name}</h2>
        <p class="restaurant-desc">${item.description || 'Artisanal dining experience and digital culinary menu.'}</p>
        <div class="card-actions">
          <a href="./${item.slug}/" class="btn-primary" style="--accent: ${item.accentColor}">
            <span>View Live Site</span>
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
  <title>Culinary Engine | Multi-Restaurant Digital Portal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #09090b;
      --card-bg: #121215;
      --border: rgba(255, 255, 255, 0.08);
      --gold: #D4AF37;
      --gold-glow: rgba(212, 175, 55, 0.2);
      --text: #f4f4f5;
      --text-muted: #a1a1aa;
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
      top: -120px;
      left: 50%;
      transform: translateX(-50%);
      width: 700px;
      height: 400px;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
    header {
      position: relative;
      z-index: 10;
      padding: 3.5rem 1.5rem 2.5rem;
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.9rem;
      border-radius: 9999px;
      background: rgba(212, 175, 55, 0.1);
      border: 1px solid rgba(212, 175, 55, 0.3);
      color: var(--gold);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
    }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #ffffff 30%, #D4AF37 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p.lead {
      color: var(--text-muted);
      font-size: 1.1rem;
      line-height: 1.6;
      max-width: 650px;
      margin: 0 auto;
    }
    main {
      position: relative;
      z-index: 10;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 1rem 1.5rem 4rem;
      flex: 1;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 2rem;
    }
    .restaurant-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 1.25rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .restaurant-card:hover {
      transform: translateY(-6px);
      border-color: rgba(212, 175, 55, 0.4);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 24px var(--gold-glow);
    }
    .card-image-wrap {
      position: relative;
      width: 100%;
      height: 210px;
      overflow: hidden;
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
      padding: 0.3rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      backdrop-filter: blur(8px);
      letter-spacing: 0.03em;
    }
    .tier-react {
      background: rgba(14, 165, 233, 0.2);
      border: 1px solid rgba(56, 189, 248, 0.4);
      color: #7dd3fc;
    }
    .tier-vanilla {
      background: rgba(34, 197, 94, 0.2);
      border: 1px solid rgba(74, 222, 128, 0.4);
      color: #86efac;
    }
    .card-body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-meta-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
    }
    .restaurant-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.45rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #fff;
    }
    .restaurant-desc {
      color: var(--text-muted);
      font-size: 0.92rem;
      line-height: 1.5;
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
      background: linear-gradient(135deg, var(--gold) 0%, #b89127 100%);
      color: #0d0b0a;
      text-decoration: none;
      padding: 0.8rem 1.25rem;
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 0.95rem;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .btn-primary:hover {
      opacity: 0.95;
      transform: scale(1.02);
    }
    .btn-qr {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 0.8rem 1rem;
      border-radius: 0.75rem;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      transition: background 0.2s, border-color 0.2s;
    }
    .btn-qr:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(212, 175, 55, 0.5);
      color: var(--gold);
    }
    /* Modal styles */
    .modal-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px);
      z-index: 100;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }
    .modal-backdrop.open { display: flex; }
    .modal-card {
      background: #141210;
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 1.25rem;
      padding: 2rem;
      max-width: 400px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 50px rgba(0,0,0,0.8);
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
    }
    #qrCodeImg {
      width: 200px;
      height: 200px;
      margin: 1.5rem auto;
      border-radius: 0.75rem;
      background: white;
      padding: 0.5rem;
    }
    footer {
      border-top: 1px solid var(--border);
      padding: 2rem 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: var(--text-muted);
    }
  </style>
</head>
<body>
  <div class="ambient-glow"></div>
  
  <header>
    <div class="badge">Autonomous Restaurant Engine</div>
    <h1>Culinary Showcase & Digital Menus</h1>
    <p class="lead">Centralized high-performance deployment engine delivering bespoke landing pages and interactive digital menus for premier culinary venues.</p>
  </header>

  <main>
    <div class="grid">
      ${cardsHtml}
    </div>
  </main>

  <div id="qrModal" class="modal-backdrop" onclick="closeQrModal(event)">
    <div class="modal-card" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeQrModal()">&times;</button>
      <h3 id="qrModalTitle" style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin-bottom: 0.5rem;"></h3>
      <p style="font-size: 0.85rem; color: var(--text-muted);">Scan with your mobile camera to test the live responsive menu</p>
      <img id="qrCodeImg" src="" alt="Mobile QR Code" />
      <div id="qrModalUrl" style="font-size: 0.8rem; color: var(--gold); word-break: break-all;"></div>
    </div>
  </div>

  <footer>
    <p>Aura Multi-Agent Restaurant Engine &bull; Built with AI Strategist & Lead Frontend Architect &bull; Vercel Subfolder Architecture</p>
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
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log(`🌐 Master Agency Portal generated at dist/index.html`);
}
