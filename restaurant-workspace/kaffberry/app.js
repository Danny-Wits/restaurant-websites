/**
 * Kaffberry Jammu - Frontend Application Logic
 * Pure Zero-Dependency Vanilla JavaScript (Tier 1 Architecture)
 */

(function () {
  'use strict';

  // --- 1. State & Data ---
  const state = {
    activeCategory: 'all',
    activeDiet: 'all',
    searchQuery: '',
    selectedDish: null,
    dishes: [],
    categories: []
  };

  // --- 2. Initialize Application ---
  document.addEventListener('DOMContentLoaded', () => {
    initLiveStatus();
    initMobileNav();
    loadDishesData();
    initFilterEvents();
    initReservationForm();
    initEscapeKey();
  });

  // --- 3. Live Operating Status (IST) ---
  function initLiveStatus() {
    const statusTextEl = document.getElementById('liveStatusText');
    if (!statusTextEl) return;

    function checkStatus() {
      // Current IST (UTC+5:30)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);

      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const timeVal = hours * 60 + minutes;

      const openTime = 9 * 60 + 30;  // 09:30 AM
      const bfastEnd = 12 * 60 + 30; // 12:30 PM
      const highTeaStart = 16 * 60;  // 04:00 PM
      const highTeaEnd = 19 * 60;    // 07:00 PM
      const closeTime = 23 * 60;     // 11:00 PM

      let statusMsg = '';
      let isLive = false;

      if (timeVal >= openTime && timeVal < bfastEnd) {
        statusMsg = 'Open Now • Fresh Viennoiserie & Morning Specialty Coffee';
        isLive = true;
      } else if (timeVal >= bfastEnd && timeVal < highTeaStart) {
        statusMsg = 'Open Now • Sourdough Pizza & European Bistro Lunch';
        isLive = true;
      } else if (timeVal >= highTeaStart && timeVal < highTeaEnd) {
        statusMsg = 'Open Now • Afternoon High Tea & Haute Patisserie';
        isLive = true;
      } else if (timeVal >= highTeaEnd && timeVal < closeTime) {
        statusMsg = 'Open Now • Intimate Bistro Dinner (Kitchen closes 10:30 PM)';
        isLive = true;
      } else {
        statusMsg = 'Closed for the Night • Doors reopen at 09:30 AM tomorrow';
        isLive = false;
      }

      statusTextEl.textContent = statusMsg;
      const dot = document.querySelector('.pulse-dot');
      if (dot) {
        dot.style.backgroundColor = isLive ? '#10B981' : '#F59E0B';
        dot.style.boxShadow = isLive
          ? '0 0 8px rgba(16, 185, 129, 0.6)'
          : '0 0 8px rgba(245, 158, 11, 0.6)';
      }
    }

    checkStatus();
    setInterval(checkStatus, 60000);
  }

  // --- 4. Mobile Nav Toggle ---
  function initMobileNav() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
      });
    });
  }

  // --- 5. Load Dishes Data ---
  async function loadDishesData() {
    try {
      const response = await fetch('brand-spec.json');
      if (!response.ok) throw new Error('Failed to fetch brand-spec.json');
      const data = await response.json();

      state.categories = data.menuEngineering?.categories || [];
      state.dishes = state.categories.flatMap(cat => cat.items || []);

      updateCategoryCounts();
      renderMenu();
    } catch (err) {
      console.warn('Loading fallback menu dataset for Kaffberry:', err.message);
      loadFallbackData();
    }
  }

  function loadFallbackData() {
    state.dishes = [
      {
        id: "kb-01",
        name: "Artisanal Spanish Iced Latte",
        diet: "veg",
        price: 260,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "coffee-brews",
        description: "Double ristretto of Chikmagalur estate Arabica shaken over condensed organic milk, whole cold milk, and crystal ice.",
        tags: ["Signature Sip", "Velvet Sweet", "Chilled Classic"],
        calories: "190 kcal",
        prepTime: "3 mins",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-02",
        name: "Single-Origin V60 Hand Pour-Over",
        diet: "veg",
        price: 240,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: false,
        category: "coffee-brews",
        description: "Light-roasted micro-lot beans extracted precisely at 92°C, featuring clear floral notes of Meyer lemon, jasmine blossom, and peach nectar.",
        tags: ["Third-Wave", "Zero Sugar", "Floral & Crisp"],
        calories: "5 kcal",
        prepTime: "5 mins",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-03",
        name: "Velvet Flat White (Double Ristretto)",
        diet: "veg",
        price: 220,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: true,
        category: "coffee-brews",
        description: "Short double ristretto coated in silk micro-foam with intricate latte art, balancing roasted hazelnut and dark chocolate tones.",
        tags: ["Espresso Classic", "Creamy Micro-Foam", "Intense"],
        calories: "110 kcal",
        prepTime: "3 mins",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-04",
        name: "Cascara Cherry & Elderflower Tonic",
        diet: "veg",
        price: 230,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: false,
        category: "coffee-brews",
        description: "Brewed sun-dried coffee cherry husks infused with French elderflower liqueur essence, chilled sparkling tonic, and dehydrated citrus wheel.",
        tags: ["Botanical", "Antioxidant Rich", "Sparkling"],
        calories: "65 kcal",
        prepTime: "3 mins",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-05",
        name: "Ceremonial Kyoto Matcha Latte",
        diet: "veg",
        price: 280,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: true,
        category: "coffee-brews",
        description: "First-harvest stone-ground Uji matcha whisked with warm oat milk and organic Madagascar vanilla syrup.",
        tags: ["Japanese Grade A", "Antioxidant", "Earthy & Smooth"],
        calories: "130 kcal",
        prepTime: "4 mins",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-06",
        name: "Classic French Butter Croissant",
        diet: "veg",
        price: 180,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "boulangerie",
        description: "Layered with premium 84% Normandy butter, baked fresh every morning to a shatteringly crisp exterior and airy honeycomb core.",
        tags: ["Morning Bake", "Normandy Butter", "Honeycomb Crumb"],
        calories: "260 kcal",
        prepTime: "Fresh from Display",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-07",
        name: "Pain au Chocolat with Double Valrhona Batons",
        diet: "veg",
        price: 220,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: true,
        category: "boulangerie",
        description: "Flaky French puff pastry rolled around twin batons of Valrhona 55% dark chocolate, finished with a golden sugar sheen.",
        tags: ["French Classic", "Valrhona Chocolate", "Buttery Indulgence"],
        calories: "310 kcal",
        prepTime: "Fresh from Display",
        image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-08",
        name: "Avocado Tartine on House Sourdough",
        diet: "veg",
        price: 380,
        spiceLevel: 1,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "boulangerie",
        description: "Toasted 48-hour sourdough slice topped with crushed Haas avocado, Danish feta crumbles, toasted pumpkin seeds, cherry tomatoes, and cold-pressed olive oil.",
        tags: ["Brunch Favorite", "Healthy Fats", "Vegan Modifiable"],
        calories: "320 kcal",
        prepTime: "6 mins",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-09",
        name: "Truffle Mushroom & Burrata Brioche Toast",
        diet: "veg",
        price: 420,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: false,
        category: "boulangerie",
        description: "Thick toasted brioche toast topped with pan-seared wild cremini and shiitake mushrooms, creamy Pugliese burrata heart, and black truffle oil drizzle.",
        tags: ["Gourmet Indulgence", "Truffle Aroma", "Creamy Burrata"],
        calories: "410 kcal",
        prepTime: "8 mins",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-10",
        name: "Smoked Salmon & Dill Cream Cheese Bagel",
        diet: "non-veg",
        price: 490,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: true,
        category: "boulangerie",
        description: "House-boiled toasted seeded bagel with cured Atlantic smoked salmon, whipped caper-dill cream cheese, and pickled red onions.",
        tags: ["Seafood Brunch", "High Protein", "Classic New York Delicacy"],
        calories: "440 kcal",
        prepTime: "6 mins",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-11",
        name: "Margherita Di Bufala D.O.P.",
        diet: "veg",
        price: 540,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "sourdough-pizza",
        description: "San Marzano D.O.P. tomato reduction, fresh Buffalo Mozzarella from Campania, Genovese sweet basil, and extra virgin olive oil.",
        tags: ["Neapolitan Classic", "San Marzano", "Wood-Fired"],
        calories: "680 kcal",
        prepTime: "8 mins",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-12",
        name: "Tartufo Bianco & Wild Forest Fungi",
        diet: "veg",
        price: 640,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "sourdough-pizza",
        description: "White garlic cream base, roasted porcini and shimeji mushrooms, Fior di Latte mozzarella, aged parmesan shavings, and aromatic white truffle essence.",
        tags: ["Chef's Signature", "White Pizza", "Earthy Truffle"],
        calories: "720 kcal",
        prepTime: "9 mins",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-13",
        name: "Artisanal Pepperoni & Calabrian Hot Honey",
        diet: "non-veg",
        price: 690,
        spiceLevel: 2,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "sourdough-pizza",
        description: "Crispy cupping pepperoni slices, San Marzano sauce, smoked provolone, and a generous drizzle of house-infused chili blossom honey.",
        tags: ["Sweet & Heat", "Crisp Pepperoni Cups", "Crowd Favorite"],
        calories: "790 kcal",
        prepTime: "9 mins",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-14",
        name: "Quattro Formaggi con Miele e Noci",
        diet: "veg",
        price: 620,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: false,
        category: "sourdough-pizza",
        description: "Four-cheese symphony of Gorgonzola Dolce, Fior di Latte, smoked Scamorza, and Pecorino Romano, finished with toasted walnuts and mountain honey.",
        tags: ["Four Italian Cheeses", "Rich & Complex", "Gourmet"],
        calories: "760 kcal",
        prepTime: "9 mins",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-15",
        name: "Pollo Affumicato & Sun-Dried Tomato",
        diet: "non-veg",
        price: 630,
        spiceLevel: 1,
        isChefSpecial: false,
        isCrowdFavorite: true,
        category: "sourdough-pizza",
        description: "Herb-roasted smoked chicken breast strips, sweet sun-dried tomatoes, roasted garlic, fresh mozzarella, and a hint of fresh oregano.",
        tags: ["Smoked Chicken", "Sun-Dried Tomatoes", "Hearty"],
        calories: "740 kcal",
        prepTime: "9 mins",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-16",
        name: "Hand-Cut Truffle Fettuccine Alfredo",
        diet: "veg",
        price: 540,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "pasta-mains",
        description: "Silky fresh egg fettuccine tossed in a velvet emulsion of 24-month Parmigiano-Reggiano, churned cultured butter, cracked black peppercorns, and summer truffle paste.",
        tags: ["Handmade Pasta", "Authentic Alfredo", "No Heavy Cream"],
        calories: "580 kcal",
        prepTime: "10 mins",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d628169e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-17",
        name: "Pugliese Burrata & Slow Pomodoro Gnocchi",
        diet: "veg",
        price: 510,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: true,
        category: "pasta-mains",
        description: "Pillow-soft hand-rolled potato gnocchi seared in slow-simmered San Marzano tomato sauce, topped with an entire creamy burrata sphere and torn basil.",
        tags: ["Pillowy Gnocchi", "Fresh Burrata", "Italian Comfort"],
        calories: "540 kcal",
        prepTime: "9 mins",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-18",
        name: "Spaghetti Aglio Olio e Peperoncino con Gamberi",
        diet: "non-veg",
        price: 590,
        spiceLevel: 2,
        isChefSpecial: true,
        isCrowdFavorite: false,
        category: "pasta-mains",
        description: "Bronze-die spaghetti sautéed in cold-pressed extra virgin olive oil, toasted garlic chips, spicy bird's eye chilies, and plump pan-seared sea prawns.",
        tags: ["Classic Rome Recipe", "Pan-Seared Prawns", "Aromatic Garlic"],
        calories: "490 kcal",
        prepTime: "9 mins",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d628169e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-19",
        name: "Pan-Seared Norwegian Salmon with Herb Beurre Blanc",
        diet: "non-veg",
        price: 890,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "pasta-mains",
        description: "Crispy skin Atlantic salmon fillet served over velvet parsnip purée, grilled asparagus spears, and a silky white wine tarragon reduction.",
        tags: ["Fine Dining", "Omega-3 Rich", "Crisp Skin"],
        calories: "520 kcal",
        prepTime: "14 mins",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-20",
        name: "French Herb Roasted Chicken Breast & Potato Mash",
        diet: "non-veg",
        price: 580,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: true,
        category: "pasta-mains",
        description: "Corn-fed supreme chicken breast basted with fresh thyme butter, served with Robuchon-style whipped potato mash, charred carrots, and rosemary jus.",
        tags: ["Bistro Classic", "Succulent Cut", "Robuchon Mash"],
        calories: "560 kcal",
        prepTime: "12 mins",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-21",
        name: "Classic Venetian Tiramisu al Mascarpone",
        diet: "veg",
        price: 340,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "patisserie",
        description: "Espresso-soaked Savoiardi ladyfingers layered with whipped Italian mascarpone cream and dusted with single-origin Valrhona cocoa powder.",
        tags: ["Iconic Dessert", "House Recipe", "Silky Mascarpone"],
        calories: "390 kcal",
        prepTime: "Fresh from Display",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-22",
        name: "San Sebastián Basque Burnt Cheesecake",
        diet: "veg",
        price: 360,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: true,
        category: "patisserie",
        description: "Caramelized, dark-crusted Spanish cheesecake featuring an ultra-creamy, molten custardy center, paired with wild berry compote.",
        tags: ["Bestseller", "Molten Center", "Gluten-Free"],
        calories: "420 kcal",
        prepTime: "Fresh from Display",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-23",
        name: "Warm Belgian Chocolate Lava Fondant",
        diet: "veg",
        price: 350,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: true,
        category: "patisserie",
        description: "Baked 70% dark Belgian chocolate cake with a molten flowing heart, served alongside a scoop of organic vanilla bean gelato.",
        tags: ["Molten Chocolate", "Warm & Decadent", "Baked to Order"],
        calories: "460 kcal",
        prepTime: "8 mins",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-24",
        name: "Sicilian Pistachio & Fresh Raspberry Tartlet",
        diet: "veg",
        price: 380,
        spiceLevel: 0,
        isChefSpecial: true,
        isCrowdFavorite: false,
        category: "patisserie",
        description: "Crisp sablé pastry crust filled with roasted Bronte pistachio frangipane, smooth diplomat cream, and ripe tart raspberries.",
        tags: ["Artisanal Tart", "Bronte Pistachio", "Delicate"],
        calories: "340 kcal",
        prepTime: "Fresh from Display",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "kb-25",
        name: "Parisian Macaron Assortment (Box of 4)",
        diet: "veg",
        price: 320,
        spiceLevel: 0,
        isChefSpecial: false,
        isCrowdFavorite: false,
        category: "patisserie",
        description: "Almond flour shells with delicate feet, filled with salted butter caramel, dark chocolate ganache, rose lychee, and Tahitian vanilla.",
        tags: ["French Macarons", "Gift Worthy", "Naturally Gluten-Free"],
        calories: "280 kcal",
        prepTime: "Fresh Box",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
      }
    ];
    updateCategoryCounts();
    renderMenu();
  }

  function updateCategoryCounts() {
    const counts = {
      all: state.dishes.length,
      'coffee-brews': 0,
      'boulangerie': 0,
      'sourdough-pizza': 0,
      'pasta-mains': 0,
      'patisserie': 0
    };

    state.dishes.forEach(d => {
      if (counts[d.category] !== undefined) {
        counts[d.category]++;
      }
    });

    Object.keys(counts).forEach(catId => {
      const el = document.getElementById(`count-${catId}`);
      if (el) el.textContent = counts[catId];
    });
  }

  // --- 6. Filter & Search Handlers ---
  function initFilterEvents() {
    // Category Tabs
    const catButtons = document.querySelectorAll('.category-tab');
    catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeCategory = btn.getAttribute('data-category');
        renderMenu();
      });
    });

    // Diet Filter Toggles
    const dietButtons = document.querySelectorAll('.diet-btn');
    dietButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dietButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeDiet = btn.getAttribute('data-diet');
        renderMenu();
      });
    });

    // Search Box
    const searchInput = document.getElementById('menuSearch');
    const clearBtn = document.getElementById('clearSearch');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        if (clearBtn) {
          clearBtn.style.display = state.searchQuery ? 'block' : 'none';
        }
        renderMenu();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearBtn.style.display = 'none';
        renderMenu();
        searchInput.focus();
      });
    }

    // Reset button in empty state
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.activeCategory = 'all';
        state.activeDiet = 'all';
        state.searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';

        catButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-category') === 'all'));
        dietButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-diet') === 'all'));
        renderMenu();
      });
    }
  }

  // --- 7. Menu Rendering ---
  function renderMenu() {
    const grid = document.getElementById('menuGrid');
    const emptyState = document.getElementById('menuEmptyState');
    if (!grid) return;

    // Filter items
    const filtered = state.dishes.filter(item => {
      if (state.activeCategory !== 'all' && item.category !== state.activeCategory) {
        return false;
      }
      if (state.activeDiet === 'veg' && item.diet !== 'veg') return false;
      if (state.activeDiet === 'non-veg' && item.diet !== 'non-veg') return false;
      if (state.activeDiet === 'chef' && !item.isChefSpecial) return false;

      if (state.searchQuery) {
        const query = state.searchQuery;
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = (item.tags || []).some(t => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTags) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filtered.map(dish => {
      const isVeg = dish.diet === 'veg';
      const badgeText = dish.isChefSpecial ? '⭐ Signature' : (dish.isCrowdFavorite ? '☕ Favorite' : '');

      return `
        <article class="menu-card" data-dish-id="${dish.id}" tabindex="0" role="button" aria-label="View details for ${dish.name}">
          <div class="menu-card-media">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
            <div class="media-tag-pills">
              <span class="diet-pill" title="${isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}">
                <span class="diet-indicator-inner ${isVeg ? 'indicator-veg' : 'indicator-nonveg'}"></span>
              </span>
              ${badgeText ? `<span class="badge-tag">${badgeText}</span>` : ''}
            </div>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-header">
              <h3 class="menu-dish-title">${dish.name}</h3>
              <span class="menu-dish-price">₹${dish.price}</span>
            </div>
            <p class="menu-dish-desc">${dish.description}</p>
            <div class="menu-card-footer">
              <span class="calorie-tag">🌿 ${dish.calories || 'Fresh'}</span>
              <span class="footer-link-hint">
                <span>View Details</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    grid.querySelectorAll('.menu-card').forEach(card => {
      const dishId = card.getAttribute('data-dish-id');
      const dish = state.dishes.find(d => d.id === dishId);

      const triggerModal = () => {
        if (dish) openDishModal(dish);
      };

      card.addEventListener('click', triggerModal);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerModal();
        }
      });
    });
  }

  // --- 8. Dish Modal Controller ---
  window.openDishModal = function (dish) {
    state.selectedDish = dish;
    const modal = document.getElementById('dishModal');
    if (!modal) return;

    document.getElementById('dishModalImg').src = dish.image;
    document.getElementById('dishModalImg').alt = dish.name;
    document.getElementById('dishModalTitle').textContent = dish.name;
    document.getElementById('dishModalDesc').textContent = dish.description;
    document.getElementById('dishModalPrice').textContent = `₹${dish.price}`;

    const dietEl = document.getElementById('dishModalDiet');
    dietEl.innerHTML = dish.diet === 'veg' 
      ? '<span class="diet-dot dot-veg"></span> Pure Vegetarian'
      : '<span class="diet-dot dot-nonveg"></span> Non-Vegetarian';

    const catEl = document.getElementById('dishModalCategory');
    const catLabels = {
      'coffee-brews': 'Specialty Coffee',
      'boulangerie': 'Normandy Viennoiserie',
      'sourdough-pizza': 'Neapolitan Sourdough',
      'pasta-mains': 'Handmade Bronze-Die Pasta',
      'patisserie': 'Haute Patisserie'
    };
    catEl.textContent = catLabels[dish.category] || 'European Bistro';

    document.getElementById('dishModalPrep').textContent = dish.prepTime || 'Prepared Fresh';
    document.getElementById('dishModalCalories').textContent = dish.calories || 'Standard Serving';
    document.getElementById('dishModalTasting').textContent = dish.tags?.[0] || 'Artisanal Selection';

    const badgesContainer = document.getElementById('dishModalBadges');
    badgesContainer.innerHTML = (dish.tags || []).map(t => `<span class="badge-tag">${t}</span>`).join('');

    modal.classList.add('modal-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  window.closeDishModal = function () {
    const modal = document.getElementById('dishModal');
    if (!modal) return;
    modal.classList.remove('modal-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  window.bookDishExperience = function () {
    closeDishModal();
    openReservationModal();
  };

  // --- 9. Reservation Modal & Slip Logic ---
  window.openReservationModal = function (preferredNote) {
    const modal = document.getElementById('reservationModal');
    if (!modal) return;

    const formStep = document.getElementById('reservationFormStep');
    const confirmStep = document.getElementById('confirmationStep');
    if (formStep) formStep.style.display = 'block';
    if (confirmStep) confirmStep.style.display = 'none';

    // Set default date to today
    const dateInput = document.getElementById('resDate');
    if (dateInput && !dateInput.value) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      dateInput.min = today;
    }

    if (preferredNote) {
      const notesInput = document.getElementById('resNotes');
      if (notesInput && !notesInput.value) {
        notesInput.value = `Interested in: ${preferredNote}`;
      }
    }

    updateBookingSlip();

    modal.classList.add('modal-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  window.closeReservationModal = function () {
    const modal = document.getElementById('reservationModal');
    if (!modal) return;
    modal.classList.remove('modal-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  window.stepGuests = function (delta) {
    const input = document.getElementById('resGuests');
    if (!input) return;
    let val = parseInt(input.value, 10) || 2;
    val = Math.max(1, Math.min(16, val + delta));
    input.value = val;
    updateBookingSlip();
  };

  window.updateBookingSlip = function () {
    const guestsInput = document.getElementById('resGuests');
    const timeInput = document.getElementById('resTime');
    const dateInput = document.getElementById('resDate');
    const prefInput = document.getElementById('resAreaPref');

    const guests = guestsInput ? parseInt(guestsInput.value, 10) || 2 : 2;
    const timeVal = timeInput ? timeInput.value : '07:30 PM';
    const dateVal = dateInput ? dateInput.value : '';
    const pref = prefInput ? prefInput.value : 'Indoor Velvet Booth';

    const slipGuests = document.getElementById('slipGuests');
    if (slipGuests) slipGuests.textContent = `${guests} ${guests === 1 ? 'Guest' : 'Guests'}`;

    const slipTime = document.getElementById('slipTime');
    if (slipTime) slipTime.textContent = timeVal;

    const slipDate = document.getElementById('slipDate');
    if (slipDate && dateVal) {
      const formatted = new Date(dateVal).toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      slipDate.textContent = formatted;
    }

    const slipPref = document.getElementById('slipPref');
    if (slipPref) slipPref.textContent = pref;
  };

  function initReservationForm() {
    const dateInput = document.getElementById('resDate');
    const timeInput = document.getElementById('resTime');
    const prefInput = document.getElementById('resAreaPref');

    if (dateInput) dateInput.addEventListener('change', updateBookingSlip);
    if (timeInput) timeInput.addEventListener('change', updateBookingSlip);
    if (prefInput) prefInput.addEventListener('change', updateBookingSlip);
  }

  window.handleReservationSubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const guests = document.getElementById('resGuests').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const pref = document.getElementById('resAreaPref').value;

    const randomRef = 'KB-CH-' + Math.floor(1000 + Math.random() * 9000);

    const formStep = document.getElementById('reservationFormStep');
    const confirmStep = document.getElementById('confirmationStep');
    const confirmedRef = document.getElementById('confirmedRef');
    const confirmedSummary = document.getElementById('confirmedSummary');

    if (confirmedRef) confirmedRef.textContent = randomRef;
    if (confirmedSummary) {
      const formattedDate = new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      confirmedSummary.innerHTML = `
        <p><strong>Primary Guest:</strong> ${name}</p>
        <p><strong>Phone:</strong> +91 ${phone}</p>
        <p><strong>Reserved Date:</strong> ${formattedDate} at ${time}</p>
        <p><strong>Seating Area:</strong> ${guests} Guests • ${pref}</p>
        <p><strong>Location:</strong> Plot 18, Sector 2, Channi Himmat, Jammu</p>
      `;
    }

    if (formStep) formStep.style.display = 'none';
    if (confirmStep) confirmStep.style.display = 'block';
  };

  // --- 10. Escape Key & Backdrop Dismissal ---
  function initEscapeKey() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDishModal();
        closeReservationModal();
      }
    });

    const dishBackdrop = document.getElementById('dishModal');
    if (dishBackdrop) {
      dishBackdrop.addEventListener('click', (e) => {
        if (e.target === dishBackdrop) closeDishModal();
      });
    }

    const resBackdrop = document.getElementById('reservationModal');
    if (resBackdrop) {
      resBackdrop.addEventListener('click', (e) => {
        if (e.target === resBackdrop) closeReservationModal();
      });
    }
  }

})();
