/**
 * Ki & Kia's Cafe & Kitchen — Talab Tillo, Canal Road, Jammu
 * Pure Vanilla JS Engine: Menu Filtering, Live IST Status, Modals & Table Booking Pass
 */

(function () {
  'use strict';

  // Master Menu Data fallback (matches brand-spec.json)
  const MENU_DATA = [
    // Coffee & Elixirs
    {
      id: "kk-c01",
      name: "Kashmiri Saffron & Cardamom Cortado",
      category: "coffee-beverages",
      categoryName: "Artisanal Coffee & Elixirs",
      price: 240,
      diet: "veg",
      isChefSpecial: true,
      description: "Double ristretto of Chikmagalur Arabica velvety microfoam infused with pure Kishtwar saffron strands and green cardamom essence.",
      tags: ["House Signature", "Single Origin", "Warm Saffron"],
      allergens: "Contains Dairy",
      prepTime: "4-6 mins",
      calories: "110 kcal",
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-c02",
      name: "Wild Berry Hibiscus Cold Brew",
      category: "coffee-beverages",
      categoryName: "Artisanal Coffee & Elixirs",
      price: 270,
      diet: "vegan",
      isChefSpecial: true,
      description: "16-hour slow steep cold brew layered with natural Egyptian hibiscus tea, crushed mountain berries, and sparkling citrus tonic.",
      tags: ["Zero Dairy", "Refreshing", "Antioxidant Rich"],
      allergens: "None",
      prepTime: "3 mins",
      calories: "45 kcal",
      imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-c03",
      name: "Salted Caramel Shakerato",
      category: "coffee-beverages",
      categoryName: "Artisanal Coffee & Elixirs",
      price: 260,
      diet: "veg",
      isChefSpecial: false,
      description: "Double espresso vigorously shaken over ice with Himalayan pink salt, house caramel reduction, and silky cream froth.",
      tags: ["Chilled", "Sweet & Savory"],
      allergens: "Contains Dairy",
      prepTime: "4 mins",
      calories: "170 kcal",
      imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-c04",
      name: "Roasted Hazelnut Velvet Latte",
      category: "coffee-beverages",
      categoryName: "Artisanal Coffee & Elixirs",
      price: 250,
      diet: "veg",
      isChefSpecial: false,
      description: "Freshly pulled espresso with slow-roasted hazelnut praline syrup and steam-stretched whole milk (oat milk optional).",
      tags: ["Comfort Classic", "Nutty Note"],
      allergens: "Contains Dairy & Tree Nuts",
      prepTime: "4 mins",
      calories: "180 kcal",
      imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-c05",
      name: "Pour-Over V60 Single Estate Arabica",
      category: "coffee-beverages",
      categoryName: "Artisanal Coffee & Elixirs",
      price: 280,
      diet: "vegan",
      isChefSpecial: false,
      description: "Handcrafted pour-over highlighting delicate floral notes of wild jasmine, stone fruit, and bright citrus acidity.",
      tags: ["Specialty Pour", "Black Coffee", "Direct Trade"],
      allergens: "None",
      prepTime: "6 mins",
      calories: "5 kcal",
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    },

    // All Day Breakfast
    {
      id: "kk-b01",
      name: "Truffle Scrambled Eggs on Sourdough",
      category: "all-day-breakfast",
      categoryName: "All-Day Brunch & Brioche",
      price: 380,
      diet: "non-veg",
      isChefSpecial: true,
      description: "Slow-cooked pasture-raised eggs folded with cultured butter, white truffle oil, and chives atop thick-cut toasted house sourdough.",
      tags: ["Chef's Recommendation", "Protein Rich"],
      allergens: "Contains Dairy, Eggs, Gluten",
      prepTime: "10 mins",
      calories: "390 kcal",
      imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-b02",
      name: "Brioche French Toast with Wild Berries",
      category: "all-day-breakfast",
      categoryName: "All-Day Brunch & Brioche",
      price: 360,
      diet: "veg",
      isChefSpecial: true,
      description: "Golden custard-soaked brioche loaf griddled to crisp perfection, crowned with organic Jammu mountain honey, blueberry compote, and mascarpone cream.",
      tags: ["Family Favorite", "Sweet Brunch"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "12 mins",
      calories: "440 kcal",
      imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-b03",
      name: "Smoked Salmon & Avocado Tartine",
      category: "all-day-breakfast",
      categoryName: "All-Day Brunch & Brioche",
      price: 490,
      diet: "non-veg",
      isChefSpecial: false,
      description: "Hass avocado mash, Norwegian smoked salmon ribbons, pickled shallots, capers, and micro-arugula on country grain sourdough.",
      tags: ["Omega-3", "Gourmet"],
      allergens: "Contains Fish, Gluten",
      prepTime: "8 mins",
      calories: "360 kcal",
      imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-b04",
      name: "Shakshuka Skillet with Goat Feta",
      category: "all-day-breakfast",
      categoryName: "All-Day Brunch & Brioche",
      price: 390,
      diet: "veg",
      isChefSpecial: false,
      description: "Baked eggs nestled in a simmered sauce of roasted plum tomatoes, bell peppers, garlic, and cumin, sprinkled with creamy feta and warm za'atar flatbread.",
      tags: ["Cast Iron", "Mediterranean"],
      allergens: "Contains Dairy, Eggs, Gluten",
      prepTime: "14 mins",
      calories: "380 kcal",
      imageUrl: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80"
    },

    // Small Plates
    {
      id: "kk-s01",
      name: "Burrata Caprese with Canal Road Fig Glaze",
      category: "small-plates",
      categoryName: "Small Plates & Shareables",
      price: 480,
      diet: "veg",
      isChefSpecial: true,
      description: "Creamy 150g artisanal burrata ball paired with heirloom cherry tomatoes, basil pesto drizzle, roasted pine nuts, and aged balsamic reduction with fresh fig compote.",
      tags: ["Chef's Signature", "Fresh Daily"],
      allergens: "Contains Dairy, Tree Nuts",
      prepTime: "6 mins",
      calories: "410 kcal",
      imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-s02",
      name: "Parmesan Truffle Hand-Cut Fries",
      category: "small-plates",
      categoryName: "Small Plates & Shareables",
      price: 290,
      diet: "veg",
      isChefSpecial: false,
      description: "Twice-cooked russet potato batons tossed in white truffle oil, sea salt flakes, and aged Grana Padano, accompanied by roasted garlic aioli.",
      tags: ["Crowd Favorite", "Crispy"],
      allergens: "Contains Dairy",
      prepTime: "8 mins",
      calories: "320 kcal",
      imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-s03",
      name: "Chermoula Charred Cottage Cheese Skewers",
      category: "small-plates",
      categoryName: "Small Plates & Shareables",
      price: 390,
      diet: "veg",
      isChefSpecial: false,
      description: "Fresh malai paneer cubes marinated in Moroccan cilantro chermoula herbs, slow-grilled over charcoal embers with bell peppers and pickled sumac onions.",
      tags: ["Charcoal Grilled", "Vegetarian Protein"],
      allergens: "Contains Dairy",
      prepTime: "12 mins",
      calories: "350 kcal",
      imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-s04",
      name: "Buttermilk Fried Chicken Tenders",
      category: "small-plates",
      categoryName: "Small Plates & Shareables",
      price: 420,
      diet: "non-veg",
      isChefSpecial: false,
      description: "Tender chicken fillets soaked in spiced cultured buttermilk, crusted in seasoned panko crumbs, and served with house smoked honey mustard dip.",
      tags: ["Crispy", "Shareable"],
      allergens: "Contains Gluten, Dairy",
      prepTime: "10 mins",
      calories: "460 kcal",
      imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-s05",
      name: "Mezze Board with Olive Tapenade & Warm Pita",
      category: "small-plates",
      categoryName: "Small Plates & Shareables",
      price: 440,
      diet: "veg",
      isChefSpecial: false,
      description: "Smooth silk hummus with toasted pine nuts, smoked baba ganoush, kalamata olive tapenade, marinated feta cubes, and wood-fired pita bread.",
      tags: ["Mediterranean", "Generous Platter"],
      allergens: "Contains Sesame, Dairy, Gluten",
      prepTime: "8 mins",
      calories: "480 kcal",
      imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80"
    },

    // Sourdough Pizzas
    {
      id: "kk-p01",
      name: "Margherita Verace D.O.P",
      category: "sourdough-pizzas",
      categoryName: "Stone-Baked Artisan Pizzas",
      price: 460,
      diet: "veg",
      isChefSpecial: false,
      description: "San Marzano plum tomato sugo, fresh fior di latte mozzarella, sweet Genovese basil leaves, and cold-pressed extra virgin olive oil drizzle.",
      tags: ["Classic Neapolitan", "Stone Baked"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "12 mins",
      calories: "680 kcal",
      imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-p02",
      name: "Wild Forest Mushroom & Truffle Pizza",
      category: "sourdough-pizzas",
      categoryName: "Stone-Baked Artisan Pizzas",
      price: 540,
      diet: "veg",
      isChefSpecial: true,
      description: "Garlic-herb confit base, sautéed porcini and shiitake mushrooms, smoked scamorza cheese, and a fragrant finish of white truffle oil.",
      tags: ["Chef's Masterpiece", "Rich & Earthy"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "14 mins",
      calories: "720 kcal",
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-p03",
      name: "Pollo Picante Smoked Chicken & Jalapeño",
      category: "sourdough-pizzas",
      categoryName: "Stone-Baked Artisan Pizzas",
      price: 560,
      diet: "non-veg",
      isChefSpecial: false,
      description: "Smoked shredded chicken breast, pickled jalapeño coins, charred red onions, aged mozzarella, and spicy hot honey drizzle.",
      tags: ["Spicy", "Meat Lovers"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "14 mins",
      calories: "790 kcal",
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-p04",
      name: "Quattro Formaggi with Walnut Honey",
      category: "sourdough-pizzas",
      categoryName: "Stone-Baked Artisan Pizzas",
      price: 550,
      diet: "veg",
      isChefSpecial: false,
      description: "Harmonious blend of four artisanal cheeses: Fior di latte, Gorgonzola Dolce, Fontina, and 24-month Parmigiano, finished with Jammu walnut honey.",
      tags: ["Four Cheeses", "Decadent"],
      allergens: "Contains Dairy, Gluten, Tree Nuts",
      prepTime: "12 mins",
      calories: "810 kcal",
      imageUrl: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-p05",
      name: "Burrata & Spiced Pepperoni Flatbread",
      category: "sourdough-pizzas",
      categoryName: "Stone-Baked Artisan Pizzas",
      price: 620,
      diet: "non-veg",
      isChefSpecial: true,
      description: "Crispy sourdough crust topped with artisanal pepperoni cups, torn fresh burrata placed post-bake, chili flakes, and hot blossom honey.",
      tags: ["Premium Cut", "Customer Obsession"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "14 mins",
      calories: "840 kcal",
      imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80"
    },

    // Pastas and Bowls
    {
      id: "kk-m01",
      name: "Wild Mushroom & Truffle Pappardelle",
      category: "pastas-and-bowls",
      categoryName: "Handmade Pastas & Nourish Bowls",
      price: 520,
      diet: "veg",
      isChefSpecial: true,
      description: "Wide ribbon egg pasta tossed in a velvety sauce of forest mushrooms, thyme butter, white wine reduction, and cracked black pepper.",
      tags: ["Handmade Pasta", "Silky Texture"],
      allergens: "Contains Gluten, Dairy",
      prepTime: "12 mins",
      calories: "520 kcal",
      imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-m02",
      name: "Slow-Simmered Lamb Bolognese Tagliatelle",
      category: "pastas-and-bowls",
      categoryName: "Handmade Pastas & Nourish Bowls",
      price: 590,
      diet: "non-veg",
      isChefSpecial: true,
      description: "Tender young lamb hand-minced and simmered for 5 hours with mirepoix, San Marzano tomatoes, and herbs, served over handmade tagliatelle.",
      tags: ["6-Hour Ragu", "Rich & Hearty"],
      allergens: "Contains Gluten, Dairy",
      prepTime: "14 mins",
      calories: "610 kcal",
      imageUrl: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-m03",
      name: "Burrata & Pine Nut Pesto Spaghetti",
      category: "pastas-and-bowls",
      categoryName: "Handmade Pastas & Nourish Bowls",
      price: 490,
      diet: "veg",
      isChefSpecial: false,
      description: "Al dente bronze-cut spaghetti tossed in vibrant Genovese basil and roasted pine nut pesto, topped with half burrata and slow-roasted cherry tomatoes.",
      tags: ["Fresh & Fragrant", "Summer Classic"],
      allergens: "Contains Gluten, Dairy, Tree Nuts",
      prepTime: "10 mins",
      calories: "480 kcal",
      imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-m04",
      name: "Mediterranean Grilled Halloumi & Quinoa Bowl",
      category: "pastas-and-bowls",
      categoryName: "Handmade Pastas & Nourish Bowls",
      price: 440,
      diet: "veg",
      isChefSpecial: false,
      description: "Charred halloumi cheese slabs, organic tricolor quinoa, roasted sweet potatoes, avocado slices, cucumber ribbons, and tahini pomegranate drizzle.",
      tags: ["Superfood", "High Fiber"],
      allergens: "Contains Dairy, Sesame",
      prepTime: "10 mins",
      calories: "420 kcal",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-m05",
      name: "Pan-Seared Lemon Herb Salmon Bowl",
      category: "pastas-and-bowls",
      categoryName: "Handmade Pastas & Nourish Bowls",
      price: 690,
      diet: "non-veg",
      isChefSpecial: true,
      description: "Crisp-skin Norwegian salmon fillet over garlic herb jasmine rice, grilled asparagus, edamame, and Meyer lemon caper emulsion.",
      tags: ["Premium Seafood", "Omega Rich"],
      allergens: "Contains Fish, Dairy",
      prepTime: "15 mins",
      calories: "530 kcal",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80"
    },

    // Desserts
    {
      id: "kk-d01",
      name: "Basque Burnt Cheesecake with Sour Cherry",
      category: "desserts",
      categoryName: "Artisanal Desserts & Bakes",
      price: 340,
      diet: "veg",
      isChefSpecial: true,
      description: "Caramelized deeply on the outside with an ultra-creamy, custard-soft center, accompanied by tart Morello cherry compote.",
      tags: ["Chef's Signature", "Bestseller"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Instant",
      calories: "380 kcal",
      imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-d02",
      name: "Belgian Chocolate Fondant with Vanilla Gelato",
      category: "desserts",
      categoryName: "Artisanal Desserts & Bakes",
      price: 360,
      diet: "veg",
      isChefSpecial: false,
      description: "Baked 70% Callebaut dark chocolate cake with an oozing warm molten heart, paired with artisanal Madagascar vanilla bean gelato.",
      tags: ["Warm & Decadent", "Pure Chocolate"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "12 mins",
      calories: "460 kcal",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-d03",
      name: "Saffron Pistachio Tres Leches Cake",
      category: "desserts",
      categoryName: "Artisanal Desserts & Bakes",
      price: 320,
      diet: "veg",
      isChefSpecial: true,
      description: "Airy sponge cake steeped overnight in Kishtwar saffron-infused three milks, crowned with whipped chantilly and crushed Iranian pistachios.",
      tags: ["Jammu Heritage", "Melt-In-Mouth"],
      allergens: "Contains Dairy, Gluten, Tree Nuts",
      prepTime: "Instant",
      calories: "340 kcal",
      imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kk-d04",
      name: "Artisanal Affogato al Caffe",
      category: "desserts",
      categoryName: "Artisanal Desserts & Bakes",
      price: 260,
      diet: "veg",
      isChefSpecial: false,
      description: "A velvety scoop of Madagascar vanilla gelato drowned in a freshly pulled double shot of piping hot Arabica espresso.",
      tags: ["Italian Classic", "Coffee Dessert"],
      allergens: "Contains Dairy",
      prepTime: "3 mins",
      calories: "160 kcal",
      imageUrl: "https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Application State
  const state = {
    selectedCategory: 'all',
    selectedDiet: 'all',
    searchQuery: '',
    items: MENU_DATA,
    activeDish: null
  };

  // DOM Elements
  const gridEl = document.getElementById('menuItemsGrid');
  const countTextEl = document.getElementById('menuCountText');
  const emptyStateEl = document.getElementById('emptyMenuState');
  const searchInput = document.getElementById('menuSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const catTabs = document.querySelectorAll('.cat-tab');
  const dietPills = document.querySelectorAll('.filter-pill');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Modals
  const dishModal = document.getElementById('dishModal');
  const closeDishModalBtn = document.getElementById('closeDishModalBtn');
  const reserveModal = document.getElementById('reserveModal');
  const closeReserveModalBtn = document.getElementById('closeReserveModalBtn');
  const reservationForm = document.getElementById('reservationForm');
  const reserveFormView = document.getElementById('reserveFormView');
  const reserveConfirmationView = document.getElementById('reserveConfirmationView');
  const resetReserveFormBtn = document.getElementById('resetReserveFormBtn');
  const passWhatsAppBtn = document.getElementById('passWhatsAppBtn');

  // Reservation triggers
  const openReserveBtnNav = document.getElementById('openReserveBtnNav');
  const openReserveBtnMobile = document.getElementById('openReserveBtnMobile');
  const heroReserveBtn = document.getElementById('heroReserveBtn');
  const locationReserveBtn = document.getElementById('locationReserveBtn');
  const mobileReserveBarBtn = document.getElementById('mobileReserveBarBtn');
  const modalReserveWithDishBtn = document.getElementById('modalReserveWithDishBtn');

  // Mobile Drawer
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Status Indicator
  const liveStatusDot = document.getElementById('liveStatusDot');
  const liveStatusText = document.getElementById('liveStatusText');

  /**
   * Initialize Application
   */
  function init() {
    setupLiveJammuStatus();
    renderMenu();
    attachEvents();
    setupDateConstraints();
    updateYear();
  }

  /**
   * Check Live Operating Hours in Jammu (IST: UTC + 5:30)
   * Hours: 10:30 AM (10.5) to 11:00 PM (23.0)
   */
  function setupLiveJammuStatus() {
    function updateStatus() {
      // Calculate current time in IST
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));

      const hour = istTime.getHours();
      const min = istTime.getMinutes();
      const timeVal = hour + (min / 60);

      const openVal = 10.5; // 10:30 AM
      const closeVal = 23.0; // 11:00 PM

      if (timeVal >= openVal && timeVal < closeVal) {
        liveStatusDot.classList.remove('closed');
        const remainingMinutes = Math.floor((closeVal - timeVal) * 60);
        if (remainingMinutes <= 60) {
          liveStatusText.textContent = `Open Now • Kitchen Closes in ${remainingMinutes}m (11:00 PM)`;
        } else {
          liveStatusText.textContent = "Open Now • Welcoming Guests (Closes 11:00 PM)";
        }
      } else {
        liveStatusDot.classList.add('closed');
        liveStatusText.textContent = "Currently Closed • Opens Today at 10:30 AM";
      }
    }

    updateStatus();
    setInterval(updateStatus, 60000);
  }

  /**
   * Render Menu Items based on Category, Diet, and Search Query
   */
  function renderMenu() {
    const q = state.searchQuery.trim().toLowerCase();

    const filtered = state.items.filter(item => {
      // Category match
      const matchCat = state.selectedCategory === 'all' || item.category === state.selectedCategory;

      // Dietary match
      let matchDiet = true;
      if (state.selectedDiet === 'veg') {
        matchDiet = item.diet === 'veg' || item.diet === 'vegan';
      } else if (state.selectedDiet === 'non-veg') {
        matchDiet = item.diet === 'non-veg';
      } else if (state.selectedDiet === 'special') {
        matchDiet = item.isChefSpecial === true;
      }

      // Search match
      let matchSearch = true;
      if (q) {
        matchSearch = (
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.categoryName.toLowerCase().includes(q) ||
          (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) ||
          (item.allergens && item.allergens.toLowerCase().includes(q))
        );
      }

      return matchCat && matchDiet && matchSearch;
    });

    // Update count display
    countTextEl.textContent = `Showing ${filtered.length} of ${state.items.length} artisanal items`;

    if (filtered.length === 0) {
      gridEl.innerHTML = '';
      emptyStateEl.style.display = 'block';
      return;
    }

    emptyStateEl.style.display = 'none';

    gridEl.innerHTML = filtered.map(item => {
      const dietClass = item.diet === 'veg' ? 'veg' : (item.diet === 'vegan' ? 'vegan' : 'non-veg');
      const dietLabel = item.diet === 'veg' ? 'Vegetarian' : (item.diet === 'vegan' ? 'Vegan' : 'Non-Vegetarian');

      return `
        <article class="menu-card" data-dish-id="${item.id}" tabindex="0" role="button" aria-label="View details for ${item.name}">
          <div class="card-img-wrap">
            <img src="${item.imageUrl}" alt="${item.name}" class="card-img" loading="lazy" />
            <div class="card-diet-badge" title="${dietLabel}">
              <span class="diet-dot-square ${dietClass}"></span>
            </div>
            ${item.isChefSpecial ? `<span class="card-special-badge">★ Chef's Special</span>` : ''}
          </div>
          <div class="card-content">
            <div class="card-top-row">
              <h3 class="card-title">${item.name}</h3>
              <span class="card-price">₹${item.price}</span>
            </div>
            <p class="card-desc">${item.description}</p>
            <div class="card-footer">
              <div class="card-tags">
                ${(item.tags || []).slice(0, 2).map(t => `<span class="tag-badge">#${t}</span>`).join('')}
              </div>
              <span class="quick-view-prompt">Inspect Dish &rarr;</span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card click handlers
    gridEl.querySelectorAll('.menu-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.dishId;
        openDishModal(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = card.dataset.dishId;
          openDishModal(id);
        }
      });
    });
  }

  /**
   * Open Dish Details Modal
   */
  function openDishModal(dishId) {
    const item = state.items.find(i => i.id === dishId);
    if (!item) return;

    state.activeDish = item;

    document.getElementById('modalDishImage').src = item.imageUrl;
    document.getElementById('modalDishImage').alt = item.name;
    document.getElementById('modalDishCategory').textContent = item.categoryName || 'Culinary Special';
    document.getElementById('modalDishTitle').textContent = item.name;
    document.getElementById('modalDishPrice').textContent = `₹${item.price}`;
    document.getElementById('modalDishDescription').textContent = item.description;

    const dietBadgeEl = document.getElementById('modalDishDiet');
    dietBadgeEl.textContent = item.diet === 'veg' ? '🌿 Vegetarian' : (item.diet === 'vegan' ? '🌱 100% Vegan' : '🍖 Non-Veg');

    document.getElementById('modalDishAllergens').textContent = item.allergens || 'None reported';
    document.getElementById('modalDishPrep').textContent = item.prepTime || '10-12 mins';
    document.getElementById('modalDishCalories').textContent = item.calories || 'Chef Prepared';

    const tagsContainer = document.getElementById('modalDishTags');
    tagsContainer.innerHTML = (item.tags || []).map(t => `<span class="tag-badge">#${t}</span>`).join('');

    dishModal.classList.add('active');
    dishModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDishModal() {
    dishModal.classList.remove('active');
    dishModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Table Reservation Modal
   */
  function openReserveModal(prefillNotes = '') {
    reserveFormView.style.display = 'block';
    reserveConfirmationView.style.display = 'none';

    if (prefillNotes) {
      const notesInput = document.getElementById('resSpecial');
      if (notesInput) {
        notesInput.value = `Inquiring for dish: ${prefillNotes}`;
      }
    }

    reserveModal.classList.add('active');
    reserveModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeReserveModal() {
    reserveModal.classList.remove('active');
    reserveModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Handle Reservation Form Submission & Generate Instant Pass
   */
  function handleReservationSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const guests = document.getElementById('resGuests').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const area = document.getElementById('resArea').value;
    const notes = document.getElementById('resSpecial').value.trim() || 'No special requests';

    // Unique Code
    const code = `KK-${Math.floor(1000 + Math.random() * 9000)}`;

    // Populate Pass Card
    document.getElementById('passCode').textContent = code;
    document.getElementById('passGuestName').textContent = name;
    document.getElementById('passPartySize').textContent = guests;
    document.getElementById('passDateTime').textContent = `${formatDate(date)} • ${time}`;
    document.getElementById('passSeating').textContent = area;
    document.getElementById('passNotes').textContent = notes;

    // Build WhatsApp Confirmation link
    const waText = encodeURIComponent(
      `Hello Ki & Kia's (Canal Road, Jammu)! I would like to confirm my table reservation:\n\n` +
      `Booking Code: ${code}\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Guests: ${guests}\n` +
      `Date & Time: ${date} at ${time}\n` +
      `Seating Area: ${area}\n` +
      `Notes: ${notes}\n\n` +
      `Thank you!`
    );
    passWhatsAppBtn.href = `https://wa.me/919419188234?text=${waText}`;

    // Switch view
    reserveFormView.style.display = 'none';
    reserveConfirmationView.style.display = 'block';
  }

  function formatDate(dStr) {
    if (!dStr) return 'Selected Date';
    try {
      const [year, month, day] = dStr.split('-');
      const d = new Date(year, month - 1, day);
      return d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });
    } catch {
      return dStr;
    }
  }

  /**
   * Set minimum date for reservation picker
   */
  function setupDateConstraints() {
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }
  }

  /**
   * Event Listeners
   */
  function attachEvents() {
    // Search input
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
      renderMenu();
    });

    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      searchClearBtn.style.display = 'none';
      renderMenu();
      searchInput.focus();
    });

    // Category Tabs
    catTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        catTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.selectedCategory = tab.dataset.category;
        renderMenu();
      });
    });

    // Dietary Filter Pills
    dietPills.forEach(pill => {
      pill.addEventListener('click', () => {
        dietPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedDiet = pill.dataset.diet;
        renderMenu();
      });
    });

    // Reset filters
    resetFiltersBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.selectedCategory = 'all';
      state.selectedDiet = 'all';
      searchInput.value = '';
      searchClearBtn.style.display = 'none';

      catTabs.forEach(t => t.classList.remove('active'));
      document.querySelector('.cat-tab[data-category="all"]').classList.add('active');

      dietPills.forEach(p => p.classList.remove('active'));
      document.querySelector('.filter-pill[data-diet="all"]').classList.add('active');

      renderMenu();
    });

    // Modal close triggers
    closeDishModalBtn.addEventListener('click', closeDishModal);
    closeReserveModalBtn.addEventListener('click', closeReserveModal);

    dishModal.addEventListener('click', (e) => {
      if (e.target === dishModal) closeDishModal();
    });

    reserveModal.addEventListener('click', (e) => {
      if (e.target === reserveModal) closeReserveModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDishModal();
        closeReserveModal();
      }
    });

    // Reservation open triggers
    if (openReserveBtnNav) openReserveBtnNav.addEventListener('click', () => openReserveModal());
    if (heroReserveBtn) heroReserveBtn.addEventListener('click', () => openReserveModal());
    if (locationReserveBtn) locationReserveBtn.addEventListener('click', () => openReserveModal());
    if (mobileReserveBarBtn) mobileReserveBarBtn.addEventListener('click', () => openReserveModal());
    if (openReserveBtnMobile) {
      openReserveBtnMobile.addEventListener('click', () => {
        closeMobileDrawer();
        openReserveModal();
      });
    }

    if (modalReserveWithDishBtn) {
      modalReserveWithDishBtn.addEventListener('click', () => {
        const dishName = state.activeDish ? state.activeDish.name : '';
        closeDishModal();
        openReserveModal(dishName);
      });
    }

    const shareDishBtn = document.getElementById('modalShareDishBtn');
    if (shareDishBtn) {
      shareDishBtn.addEventListener('click', () => {
        if (!state.activeDish) return;
        if (navigator.share) {
          navigator.share({
            title: state.activeDish.name,
            text: `Check out ${state.activeDish.name} at Ki & Kia's, Canal Road Jammu: ₹${state.activeDish.price}`,
            url: window.location.href
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(`${state.activeDish.name} - ₹${state.activeDish.price} at Ki & Kia's Jammu`);
          shareDishBtn.textContent = "Copied link!";
          setTimeout(() => { shareDishBtn.textContent = "Share Dish"; }, 2000);
        }
      });
    }

    // Reservation Form
    reservationForm.addEventListener('submit', handleReservationSubmit);
    resetReserveFormBtn.addEventListener('click', () => {
      reservationForm.reset();
      setupDateConstraints();
      reserveConfirmationView.style.display = 'none';
      reserveFormView.style.display = 'block';
    });

    // Mobile Navigation Drawer Toggle
    if (mobileMenuToggle && mobileDrawer) {
      mobileMenuToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('open');
        if (isOpen) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileDrawer);
    });
  }

  function openMobileDrawer() {
    mobileDrawer.classList.add('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }

  function updateYear() {
    const yrEl = document.getElementById('currentYear');
    if (yrEl) yrEl.textContent = new Date().getFullYear();
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
