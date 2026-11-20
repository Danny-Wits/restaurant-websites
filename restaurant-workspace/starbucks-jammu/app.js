/**
 * Starbucks Coffee — Wave Mall, Jammu
 * Appetizing Light Theme Engine: Menu Filtering, Interactive Cup Sizing, Live IST Status, Modals & Starbucks Digital Pass
 */

(function () {
  'use strict';

  // 28 Curated Starbucks Offerings (matches brand-spec.json)
  const MENU_DATA = [
    // Master Espresso & Cold Brews (6 items)
    {
      id: "sb-e01",
      name: "Jammu Saffron Kahwa Nitro Cold Brew",
      category: "espresso-reserve",
      categoryName: "Master Espresso & Cold Brews",
      price: 395,
      diet: "vegan",
      isChefSpecial: true,
      isBeverage: true,
      description: "Signature Jammu Reserve edition. 20-hour cold steep Arabica micro-infused with Kishtwar saffron, green cardamom, and nitrogen cascade for a naturally sweet, creamy head.",
      tags: ["Jammu Exclusive", "Nitro Tap", "Zero Dairy"],
      allergens: "None",
      prepTime: "2 mins",
      calories: "25 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-e02",
      name: "Starbucks Blonde Roast Vanilla Latte",
      category: "espresso-reserve",
      categoryName: "Master Espresso & Cold Brews",
      price: 345,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: true,
      description: "Extra-smooth Blonde Espresso roast with sweet Madagascar vanilla syrup and expertly steam-stretched milk for a delightfully mellow, balanced cup.",
      tags: ["Blonde Roast", "Silky Sweet"],
      allergens: "Contains Dairy",
      prepTime: "4 mins",
      calories: "210 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-e03",
      name: "Iced Caramel Macchiato",
      category: "espresso-reserve",
      categoryName: "Master Espresso & Cold Brews",
      price: 375,
      diet: "veg",
      isChefSpecial: true,
      isBeverage: true,
      description: "Freshly steamed vanilla milk poured over ice, marked with rich full-bodied espresso shots, and finished with buttery Starbucks caramel drizzle crosshatch.",
      tags: ["World Icon", "Customer Favorite"],
      allergens: "Contains Dairy",
      prepTime: "3 mins",
      calories: "250 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-e04",
      name: "Iced Brown Sugar Shaken Espresso",
      category: "espresso-reserve",
      categoryName: "Master Espresso & Cold Brews",
      price: 385,
      diet: "vegan",
      isChefSpecial: true,
      isBeverage: true,
      description: "Starbucks Blonde Espresso vigorously shaken with brown sugar and cinnamon powder over ice, crowned with a smooth splash of oat milk.",
      tags: ["Plant Based", "Shaken Espresso", "Oat Milk"],
      allergens: "Contains Oats",
      prepTime: "4 mins",
      calories: "120 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-e05",
      name: "Artisanal Reserve Cortado",
      category: "espresso-reserve",
      categoryName: "Master Espresso & Cold Brews",
      price: 295,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: true,
      description: "Two bold ristretto shots cut with an equal volume of warm velvety steamed milk in a 130ml glass to highlight roast nuances without dilution.",
      tags: ["Pure Espresso", "Intense"],
      allergens: "Contains Dairy",
      prepTime: "3 mins",
      calories: "85 kcal",
      imageUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-e06",
      name: "Classic Caffe Americano (Signature Roast)",
      category: "espresso-reserve",
      categoryName: "Master Espresso & Cold Brews",
      price: 265,
      diet: "vegan",
      isChefSpecial: false,
      isBeverage: true,
      description: "Espresso shots topped with hot filtered water creating a light layer of crema, unlocking subtle nuances of dark cocoa and toasted nuts.",
      tags: ["Classic Roast", "Zero Sugar"],
      allergens: "None",
      prepTime: "2 mins",
      calories: "15 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=80"
    },

    // Frappuccino® Blended Magic (5 items)
    {
      id: "sb-f01",
      name: "Signature Java Chip Frappuccino®",
      category: "frappuccino-blended",
      categoryName: "Frappuccino® Blended Magic",
      price: 415,
      diet: "veg",
      isChefSpecial: true,
      isBeverage: true,
      description: "Rich mocha sauce and Frappuccino® chips blended with roast coffee and milk, crowned with fluffy whipped cream and mocha drizzle.",
      tags: ["Starbucks Legend", "Decadent Crunch"],
      allergens: "Contains Dairy, Soy",
      prepTime: "4 mins",
      calories: "440 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-f02",
      name: "Caramel Ribbon Crunch Frappuccino®",
      category: "frappuccino-blended",
      categoryName: "Frappuccino® Blended Magic",
      price: 435,
      diet: "veg",
      isChefSpecial: true,
      isBeverage: true,
      description: "Buttery dark caramel sauce blended with coffee and milk, layered over dark caramel drizzle and finished with whipped cream, caramel glaze, and crunchy caramel sugar gems.",
      tags: ["Sweet & Crunchy", "Bestseller"],
      allergens: "Contains Dairy",
      prepTime: "4 mins",
      calories: "470 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-f03",
      name: "Matcha Green Tea Creme Frappuccino®",
      category: "frappuccino-blended",
      categoryName: "Frappuccino® Blended Magic",
      price: 425,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: true,
      description: "Fine-milled shade-grown Japanese matcha tea blended with sweetened milk and ice, topped with sweet whipped cream.",
      tags: ["Green Tea", "Smooth Creme"],
      allergens: "Contains Dairy",
      prepTime: "4 mins",
      calories: "380 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-f04",
      name: "Double Chocolaty Chip Creme Frappuccino®",
      category: "frappuccino-blended",
      categoryName: "Frappuccino® Blended Magic",
      price: 415,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: true,
      description: "Coffee-free chocolate indulgence. Rich mocha sauce, chocolate chips, milk and ice blended and crowned with chocolate drizzle.",
      tags: ["Coffee Free", "Kids Favorite"],
      allergens: "Contains Dairy, Soy",
      prepTime: "4 mins",
      calories: "410 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-f05",
      name: "Dark Caramel Espresso Frappuccino®",
      category: "frappuccino-blended",
      categoryName: "Frappuccino® Blended Magic",
      price: 445,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: true,
      description: "Bold shot of Italian dark espresso roast blended directly with smoky dark caramel syrup, milk, and crushed ice.",
      tags: ["Double Coffee", "Deep Caramel"],
      allergens: "Contains Dairy",
      prepTime: "4 mins",
      calories: "350 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=800&q=80"
    },

    // Teavana™ Teas & Refreshers (5 items)
    {
      id: "sb-t01",
      name: "Kashmiri Green Kahwa Reserve Blend",
      category: "teavana-refreshers",
      categoryName: "Teavana™ Teas & Refreshers",
      price: 285,
      diet: "vegan",
      isChefSpecial: true,
      isBeverage: true,
      description: "Slow-brewed Himalayan whole leaf green tea infused with Kishtwar saffron threads, green cardamom pods, cinnamon bark, and slivered almonds.",
      tags: ["Jammu Heritage", "Heart Warming", "Zero Dairy"],
      allergens: "Contains Tree Nuts (Almonds)",
      prepTime: "5 mins",
      calories: "35 kcal",
      imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-t02",
      name: "Strawberry Açaí Lemonade Starbucks Refresher®",
      category: "teavana-refreshers",
      categoryName: "Teavana™ Teas & Refreshers",
      price: 355,
      diet: "vegan",
      isChefSpecial: true,
      isBeverage: true,
      description: "Sweet strawberry flavors accented by passion fruit and açaí notes, caffeinated with green coffee extract and shaken with ice and real strawberry slices.",
      tags: ["Thirst Quencher", "Real Fruit", "Naturally Energizing"],
      allergens: "None",
      prepTime: "2 mins",
      calories: "140 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-t03",
      name: "Teavana™ Passion Tango Iced Tea Lemonade",
      category: "teavana-refreshers",
      categoryName: "Teavana™ Teas & Refreshers",
      price: 295,
      diet: "vegan",
      isChefSpecial: false,
      isBeverage: true,
      description: "A crisp blend of hibiscus, lemongrass, and apple shaken vigorously with tart lemonade and ice for a bright ruby glow.",
      tags: ["Caffeine Free", "Crisp Citrus"],
      allergens: "None",
      prepTime: "2 mins",
      calories: "90 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-t04",
      name: "Classic Matcha Green Tea Latte",
      category: "teavana-refreshers",
      categoryName: "Teavana™ Teas & Refreshers",
      price: 365,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: true,
      description: "Smooth, creamy sweetened Japanese matcha green tea lightly whisked with steamed whole milk (or oat milk) for vibrant herbal comfort.",
      tags: ["Antioxidant Rich", "Zen Comfort"],
      allergens: "Contains Dairy",
      prepTime: "3 mins",
      calories: "240 kcal (Grande)",
      imageUrl: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-t05",
      name: "Emperor's Clouds & Mist Green Tea",
      category: "teavana-refreshers",
      categoryName: "Teavana™ Teas & Refreshers",
      price: 255,
      diet: "vegan",
      isChefSpecial: false,
      isBeverage: true,
      description: "Harvested high in the mist-shrouded Huangshan mountains. A gently sweet, lightly toasted green tea with delicate smoky floral undertones.",
      tags: ["Whole Leaf", "Calm & Pure"],
      allergens: "None",
      prepTime: "4 mins",
      calories: "0 kcal",
      imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
    },

    // Artisanal Bakeries & Croissants (4 items)
    {
      id: "sb-b01",
      name: "Authentic French Butter Croissant",
      category: "bakery-croissants",
      categoryName: "Artisanal Bakeries & Croissants",
      price: 245,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: false,
      description: "Classic 16-layer French pastry laminated with pure Normandy butter, baked golden brown with crisp outer flakiness and a soft honeycomb center.",
      tags: ["Warm & Flaky", "Coffee Companion"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Warm on order",
      calories: "260 kcal",
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-b02",
      name: "Triple Dark Chocolate Chip Muffin",
      category: "bakery-croissants",
      categoryName: "Artisanal Bakeries & Croissants",
      price: 275,
      diet: "veg",
      isChefSpecial: true,
      isBeverage: false,
      description: "Decadent Dutch cocoa muffin studded with chunks of 70% dark Belgian chocolate and a warm molten truffle core inside.",
      tags: ["Rich Cocoa", "Chocoholic"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Warm on order",
      calories: "420 kcal",
      imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-b03",
      name: "Toasted Almond Frangipane Croissant",
      category: "bakery-croissants",
      categoryName: "Artisanal Bakeries & Croissants",
      price: 295,
      diet: "veg",
      isChefSpecial: true,
      isBeverage: false,
      description: "Twice-baked buttery croissant filled with luscious almond frangipane cream, crowned with toasted sliced almonds and powdered sugar snow.",
      tags: ["Nutty & Sweet", "French Bakery"],
      allergens: "Contains Dairy, Gluten, Tree Nuts",
      prepTime: "Warm on order",
      calories: "380 kcal",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-b04",
      name: "Wild Blueberry Cream Cheese Danish",
      category: "bakery-croissants",
      categoryName: "Artisanal Bakeries & Croissants",
      price: 285,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: false,
      description: "Flaky puff pastry filled with velvety sweet cream cheese and tart mountain blueberry compote, finished with vanilla sugar glaze.",
      tags: ["Fruity & Creamy", "Crisp Layers"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Warm on order",
      calories: "310 kcal",
      imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80"
    },

    // Gourmet Sandwiches & Savories (4 items)
    {
      id: "sb-s01",
      name: "Smoked Chicken & English Cheddar Brioche",
      category: "sandwiches-savory",
      categoryName: "Gourmet Sandwiches & Savories",
      price: 385,
      diet: "non-veg",
      isChefSpecial: true,
      isBeverage: false,
      description: "Hickory-smoked pulled chicken breast, aged English cheddar cheese, caramelized onions, and whole grain mustard mayo in a toasted butter brioche bun.",
      tags: ["Hearty Lunch", "Smoked Chicken"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Toasted 5 mins",
      calories: "480 kcal",
      imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-s02",
      name: "Roasted Pesto Mozzarella Panini",
      category: "sandwiches-savory",
      categoryName: "Gourmet Sandwiches & Savories",
      price: 345,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: false,
      description: "Fresh fior di latte mozzarella, sun-ripened tomatoes, sweet basil pesto, and baby spinach grilled hot inside rustic ciabatta bread.",
      tags: ["Melty Cheese", "Italian Panini"],
      allergens: "Contains Dairy, Gluten, Tree Nuts",
      prepTime: "Toasted 5 mins",
      calories: "420 kcal",
      imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-s03",
      name: "Saffron Paneer Tikka Sourdough Wrap",
      category: "sandwiches-savory",
      categoryName: "Gourmet Sandwiches & Savories",
      price: 355,
      diet: "veg",
      isChefSpecial: true,
      isBeverage: false,
      description: "Clay-oven roasted malai paneer cubes marinated in saffron tikka masala, wrapped in thin sourdough flatbread with mint chutney and pickled onions.",
      tags: ["Jammu Fusion", "Spicy Warm"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Toasted 5 mins",
      calories: "410 kcal",
      imageUrl: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-s04",
      name: "Three Cheese & Truffle Sourdough Toastie",
      category: "sandwiches-savory",
      categoryName: "Gourmet Sandwiches & Savories",
      price: 365,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: false,
      description: "Artisanal sharp white cheddar, fontina, and mozzarella layered inside crusty sourdough with garlic herb butter and subtle black truffle glaze.",
      tags: ["Gooey Cheese", "Truffle Aroma"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Toasted 6 mins",
      calories: "460 kcal",
      imageUrl: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80"
    },

    // Master Confectionery & Cakes (4 items)
    {
      id: "sb-d01",
      name: "Signature New York Style Cheesecake",
      category: "patisserie-desserts",
      categoryName: "Master Confectionery & Cakes",
      price: 365,
      diet: "veg",
      isChefSpecial: true,
      isBeverage: false,
      description: "Dense, ultra-rich Philadelphia cream cheese cake over a buttery graham cracker crust with a light hint of lemon zest.",
      tags: ["Starbucks Legend", "Silky Smooth"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Instant",
      calories: "460 kcal",
      imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-d02",
      name: "Dutch Dark Truffle Gateau",
      category: "patisserie-desserts",
      categoryName: "Master Confectionery & Cakes",
      price: 375,
      diet: "veg",
      isChefSpecial: true,
      isBeverage: false,
      description: "Moist chocolate sponge layered with bittersweet 70% dark chocolate ganache, crowned with cocoa dust and chocolate curls.",
      tags: ["Pure Chocolate", "Decadent"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Instant",
      calories: "490 kcal",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-d03",
      name: "Red Velvet & White Chocolate Cake Slice",
      category: "patisserie-desserts",
      categoryName: "Master Confectionery & Cakes",
      price: 355,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: false,
      description: "Velvety crimson sponge cake layered with tangy vanilla bean cream cheese frosting and white Belgian chocolate shavings.",
      tags: ["Velvety", "Photo Worthy"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Instant",
      calories: "410 kcal",
      imageUrl: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sb-d04",
      name: "Classic Italian Espresso Tiramisu",
      category: "patisserie-desserts",
      categoryName: "Master Confectionery & Cakes",
      price: 385,
      diet: "veg",
      isChefSpecial: false,
      isBeverage: false,
      description: "Savoiardi ladyfingers steeped in Starbucks Italian Roast espresso, layered with airy mascarpone mousse and Valrhona cocoa powder.",
      tags: ["Coffee Dessert", "Authentic Recipe"],
      allergens: "Contains Dairy, Gluten",
      prepTime: "Instant",
      calories: "390 kcal",
      imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Application State
  const state = {
    selectedCategory: 'all',
    selectedDiet: 'all',
    searchQuery: '',
    items: MENU_DATA,
    activeDish: null,
    selectedCupModifier: 0 // Tall (base)
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
  const sizeSelectorWrap = document.getElementById('sizeSelectorWrap');
  const sizePills = document.querySelectorAll('.size-pill');

  // Reservation Triggers
  const openHoldBtnNav = document.getElementById('openHoldBtnNav');
  const openHoldBtnMobile = document.getElementById('openHoldBtnMobile');
  const heroHoldBtn = document.getElementById('heroHoldBtn');
  const locationHoldBtn = document.getElementById('locationHoldBtn');
  const mobileHoldBarBtn = document.getElementById('mobileHoldBarBtn');
  const modalHoldWithDishBtn = document.getElementById('modalHoldWithDishBtn');

  // Mobile Drawer
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Live Status Indicator
  const liveStatusDot = document.getElementById('liveStatusDot');
  const liveStatusText = document.getElementById('liveStatusText');

  /**
   * Application Initialization
   */
  function init() {
    setupLiveJammuStatus();
    renderMenu();
    attachEvents();
    setupDateConstraints();
    updateYear();
  }

  /**
   * Check Live Operating Hours in Wave Mall Jammu (IST: UTC + 5:30)
   * Hours: 08:30 AM (8.5) to 11:30 PM (23.5)
   */
  function setupLiveJammuStatus() {
    function updateStatus() {
      if (!liveStatusDot || !liveStatusText) return;

      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));

      const hour = istTime.getHours();
      const min = istTime.getMinutes();
      const timeVal = hour + (min / 60);

      const openVal = 8.5;  // 8:30 AM
      const closeVal = 23.5; // 11:30 PM

      if (timeVal >= openVal && timeVal < closeVal) {
        liveStatusDot.classList.remove('closed');
        const remainingMinutes = Math.floor((closeVal - timeVal) * 60);
        if (remainingMinutes <= 45) {
          liveStatusText.textContent = `Open Now • Barista Last Call in ${remainingMinutes}m (11:30 PM)`;
        } else {
          liveStatusText.textContent = "Open Now • Handcrafting at Wave Mall (Closes 11:30 PM)";
        }
      } else {
        liveStatusDot.classList.add('closed');
        liveStatusText.textContent = "Currently Closed • Opens Today at 08:30 AM";
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
      } else if (state.selectedDiet === 'vegan') {
        matchDiet = item.diet === 'vegan';
      } else if (state.selectedDiet === 'non-veg') {
        matchDiet = item.diet === 'non-veg';
      } else if (state.selectedDiet === 'special') {
        matchDiet = item.isChefSpecial === true;
      }

      // Live search match
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
    if (countTextEl) {
      countTextEl.textContent = `Showing ${filtered.length} of ${state.items.length} reserve items`;
    }

    if (filtered.length === 0) {
      gridEl.innerHTML = '';
      if (emptyStateEl) emptyStateEl.style.display = 'block';
      return;
    }

    if (emptyStateEl) emptyStateEl.style.display = 'none';

    gridEl.innerHTML = filtered.map(item => {
      const dietClass = item.diet === 'veg' ? 'veg' : (item.diet === 'vegan' ? 'vegan' : 'non-veg');
      const dietLabel = item.diet === 'veg' ? 'Vegetarian' : (item.diet === 'vegan' ? 'Plant Based' : 'Non-Veg');

      return `
        <article class="menu-card" data-dish-id="${item.id}" tabindex="0" role="button" aria-label="View beverage details for ${item.name}">
          <div class="card-img-wrap">
            <img src="${item.imageUrl}" alt="${item.name}" class="card-img" loading="lazy" />
            <div class="card-diet-badge" title="${dietLabel}">
              <span class="diet-dot-square ${dietClass}"></span>
            </div>
            ${item.isChefSpecial ? `<span class="card-special-badge">★ Reserve Special</span>` : ''}
          </div>
          <div class="card-content">
            <div class="card-top-row">
              <h3 class="card-title">${item.name}</h3>
              <span class="card-price">₹${item.price}</span>
            </div>
            <p class="card-desc">${item.description}</p>
            <div class="card-footer">
              <div class="card-tags">
                ${(item.tags || []).slice(0, 2).map(t => `<span class="tag-badge">${t}</span>`).join('')}
              </div>
              <span class="quick-view-prompt">Customize &rarr;</span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card click & keyboard handlers
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
   * Open Item Details Modal with Interactive Sizing
   */
  function openDishModal(dishId) {
    const item = state.items.find(i => i.id === dishId);
    if (!item) return;

    state.activeDish = item;
    state.selectedCupModifier = 0; // default Tall (0 mod)

    document.getElementById('modalDishImage').src = item.imageUrl;
    document.getElementById('modalDishImage').alt = item.name;
    document.getElementById('modalDishCategory').textContent = item.categoryName || 'Starbucks Craft';
    document.getElementById('modalDishTitle').textContent = item.name;
    document.getElementById('modalDishDescription').textContent = item.description;

    const dietBadgeEl = document.getElementById('modalDishDiet');
    dietBadgeEl.textContent = item.diet === 'veg' ? '🌿 Vegetarian' : (item.diet === 'vegan' ? '🌱 100% Plant Based' : '🍖 Non-Veg');

    document.getElementById('modalDishAllergens').textContent = item.allergens || 'None reported';
    document.getElementById('modalDishPrep').textContent = item.prepTime || 'Handcrafted fresh';
    document.getElementById('modalDishCalories').textContent = item.calories || 'Standard serving';

    const tagsContainer = document.getElementById('modalDishTags');
    tagsContainer.innerHTML = (item.tags || []).map(t => `<span class="tag-badge">#${t}</span>`).join('');

    // Beverage Cup Size Selector Handling
    if (item.isBeverage && sizeSelectorWrap) {
      sizeSelectorWrap.style.display = 'block';
      sizePills.forEach(p => {
        p.classList.remove('active');
        if (p.dataset.size === 'tall') p.classList.add('active');
      });
      state.selectedCupModifier = 0;
      updateModalPrice(item.price);
    } else {
      if (sizeSelectorWrap) sizeSelectorWrap.style.display = 'none';
      document.getElementById('modalDishPrice').textContent = `₹${item.price}`;
    }

    dishModal.classList.add('active');
    dishModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function updateModalPrice(basePrice) {
    const finalPrice = Math.max(100, basePrice + state.selectedCupModifier);
    document.getElementById('modalDishPrice').textContent = `₹${finalPrice}`;
  }

  function closeDishModal() {
    dishModal.classList.remove('active');
    dishModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Table Hold / Order Ahead Modal
   */
  function openReserveModal(prefillNotes = '') {
    reserveFormView.style.display = 'block';
    reserveConfirmationView.style.display = 'none';

    if (prefillNotes) {
      const notesInput = document.getElementById('resCustomMilk');
      if (notesInput) {
        notesInput.value = `Order Item: ${prefillNotes}`;
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
   * Handle Starbucks Digital Pass Submission
   */
  function handleReservationSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const orderType = document.getElementById('resOrderType').value;
    const guests = document.getElementById('resGuests').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const custom = document.getElementById('resCustomMilk').value.trim() || 'Standard Starbucks Recipe';

    // Unique Code
    const code = `SB-WAVE-${Math.floor(100 + Math.random() * 900)}`;

    // Populate Pass Card
    document.getElementById('passCode').textContent = code;
    document.getElementById('passGuestName').textContent = name;
    document.getElementById('passServiceMode').textContent = orderType;
    document.getElementById('passPartySize').textContent = guests;
    document.getElementById('passDateTime').textContent = `${formatDate(date)} • ${time}`;
    document.getElementById('passNotes').textContent = custom;

    // Build WhatsApp Confirmation link to Wave Mall Store
    const waText = encodeURIComponent(
      `Hello Starbucks Wave Mall (Jammu)! I have generated an express order/table pass:\n\n` +
      `Pass Code: ${code}\n` +
      `Customer Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service Mode: ${orderType}\n` +
      `Party Size: ${guests}\n` +
      `Expected Arrival: ${date} at ${time}\n` +
      `Customization / Order Notes: ${custom}\n\n` +
      `Thank you!`
    );
    passWhatsAppBtn.href = `https://wa.me/919419133401?text=${waText}`;

    // Switch view
    reserveFormView.style.display = 'none';
    reserveConfirmationView.style.display = 'block';
  }

  function formatDate(dStr) {
    if (!dStr) return 'Today';
    try {
      const [year, month, day] = dStr.split('-');
      const d = new Date(year, month - 1, day);
      return d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });
    } catch {
      return dStr;
    }
  }

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
    // Cup Sizing clicks
    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        sizePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedCupModifier = parseInt(pill.dataset.mod, 10) || 0;
        if (state.activeDish) {
          updateModalPrice(state.activeDish.price);
        }
      });
    });

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (searchClearBtn) {
          searchClearBtn.style.display = state.searchQuery ? 'flex' : 'none';
        }
        renderMenu();
      });
    }

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        searchClearBtn.style.display = 'none';
        renderMenu();
        searchInput.focus();
      });
    }

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
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', () => {
        state.searchQuery = '';
        state.selectedCategory = 'all';
        state.selectedDiet = 'all';
        if (searchInput) searchInput.value = '';
        if (searchClearBtn) searchClearBtn.style.display = 'none';

        catTabs.forEach(t => t.classList.remove('active'));
        const allCat = document.querySelector('.cat-tab[data-category="all"]');
        if (allCat) allCat.classList.add('active');

        dietPills.forEach(p => p.classList.remove('active'));
        const allDiet = document.querySelector('.filter-pill[data-diet="all"]');
        if (allDiet) allDiet.classList.add('active');

        renderMenu();
      });
    }

    // Modal close triggers
    if (closeDishModalBtn) closeDishModalBtn.addEventListener('click', closeDishModal);
    if (closeReserveModalBtn) closeReserveModalBtn.addEventListener('click', closeReserveModal);

    if (dishModal) {
      dishModal.addEventListener('click', (e) => {
        if (e.target === dishModal) closeDishModal();
      });
    }

    if (reserveModal) {
      reserveModal.addEventListener('click', (e) => {
        if (e.target === reserveModal) closeReserveModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDishModal();
        closeReserveModal();
      }
    });

    // Hold / Order open triggers
    if (openHoldBtnNav) openHoldBtnNav.addEventListener('click', () => openReserveModal());
    if (heroHoldBtn) heroHoldBtn.addEventListener('click', () => openReserveModal());
    if (locationHoldBtn) locationHoldBtn.addEventListener('click', () => openReserveModal());
    if (mobileHoldBarBtn) mobileHoldBarBtn.addEventListener('click', () => openReserveModal());
    if (openHoldBtnMobile) {
      openHoldBtnMobile.addEventListener('click', () => {
        closeMobileDrawer();
        openReserveModal();
      });
    }

    if (modalHoldWithDishBtn) {
      modalHoldWithDishBtn.addEventListener('click', () => {
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
            text: `Taste ${state.activeDish.name} at Starbucks Wave Mall Jammu: ₹${state.activeDish.price}`,
            url: window.location.href
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(`${state.activeDish.name} at Starbucks Wave Mall Jammu`);
          shareDishBtn.textContent = "Copied link!";
          setTimeout(() => { shareDishBtn.textContent = "Share Beverage"; }, 2000);
        }
      });
    }

    // Reservation Form
    if (reservationForm) {
      reservationForm.addEventListener('submit', handleReservationSubmit);
    }
    if (resetReserveFormBtn) {
      resetReserveFormBtn.addEventListener('click', () => {
        reservationForm.reset();
        setupDateConstraints();
        reserveConfirmationView.style.display = 'none';
        reserveFormView.style.display = 'block';
      });
    }

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
