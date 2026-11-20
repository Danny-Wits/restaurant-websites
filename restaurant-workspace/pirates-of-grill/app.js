/**
 * Pirates of Grill Jammu (Wave Mall) - Frontend Application Logic
 * Appetizing Light Theme Architecture (Tier 1 Pure Vanilla JavaScript)
 * Zero Dependencies • 100% Performance • Offline Ready
 */

(function () {
  'use strict';

  // --- 1. Global Application State ---
  const state = {
    activeCategory: 'all',
    activeDiet: 'all',
    searchQuery: '',
    selectedDish: null,
    dishes: [],
    categories: []
  };

  // --- 2. Fallback Menu Dataset (Guarantees Instant Standalone Offline Operation) ---
  const FALLBACK_DISHES = [
    {
      id: "pog-01",
      name: "Afghani Malai Paneer Tikka",
      diet: "veg",
      price: 425,
      spiceLevel: 1,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "live-grill",
      description: "Velvety cottage cheese marinated in hung curd, green cardamom, roasted cashews, and crushed white pepper, blistered over table charcoal.",
      tags: ["Buffet Highlight", "Melt-In-Mouth", "Mild & Creamy"],
      calories: "340 kcal",
      prepTime: "Live on Table",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-02",
      name: "Angaari Murgh Tikka",
      diet: "non-veg",
      price: 485,
      spiceLevel: 3,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "live-grill",
      description: "Tender chicken morsels drenched in mustard oil, roasted Kashmiri deggi mirch, smoked cloves, and ginger reduction, charred to perfection.",
      tags: ["Bestseller", "Smoky & Spicy", "Live Skewer"],
      calories: "390 kcal",
      prepTime: "Live on Table",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-03",
      name: "Dakhni Malai Seekh Kebab",
      diet: "non-veg",
      price: 525,
      spiceLevel: 2,
      isChefSpecial: true,
      isCrowdFavorite: false,
      category: "live-grill",
      description: "Finely minced young mutton infused with brown onions, mint, royal mace, and cheddar marrow, basted with clarified butter over hot embers.",
      tags: ["Chef's Signature", "Rich Mughlai", "Tender"],
      calories: "440 kcal",
      prepTime: "Live on Table",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-04",
      name: "Coastal Mustard Fish Tikka",
      diet: "non-veg",
      price: 545,
      spiceLevel: 2,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "live-grill",
      description: "Delicate river sole fillets marinated in crushed Kasundi mustard, yellow chili paste, and lemon glaze, quick-seared over coals.",
      tags: ["Seafood Delight", "Tangy Zing", "High Protein"],
      calories: "310 kcal",
      prepTime: "Live on Table",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-05",
      name: "Peshawari Tandoori Broccoli & Soya Chaap",
      diet: "veg",
      price: 395,
      spiceLevel: 1,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "live-grill",
      description: "Tender broccoli florets and soy protein chops coated in toasted besan, roasted cumin, and cream cheese marinade.",
      tags: ["Vegetarian Classic", "Protein Rich", "Charred Herb"],
      calories: "280 kcal",
      prepTime: "Live on Table",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-06",
      name: "Cinnamon & Honey Glazed Pineapple",
      diet: "veg",
      price: 320,
      spiceLevel: 0,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "live-grill",
      description: "Sweet Queen pineapples basted with wildflower honey, roasted Ceylon cinnamon, and sea salt crystals, caramelized tableside.",
      tags: ["Signature Palate Cleanser", "Caramelized", "Gluten-Free"],
      calories: "160 kcal",
      prepTime: "Live on Table",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-07",
      name: "Dal Makhani Pirates 18-Hour Slow Cook",
      diet: "veg",
      price: 385,
      spiceLevel: 1,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "mughlai-mains",
      description: "Black lentils stewed overnight over dying charcoal, finished with churned white butter, organic cream, and sun-dried kasuri methi.",
      tags: ["Heritage Recipe", "Iconic Dal", "Creamy Comfort"],
      calories: "390 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-08",
      name: "Purani Dilli Butter Chicken",
      diet: "non-veg",
      price: 545,
      spiceLevel: 2,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "mughlai-mains",
      description: "Clay-oven smoked tandoori chicken simmered in a velvet reduction of vine-ripened tomatoes, cashew butter, honey, and aromatic spices.",
      tags: ["All-Time Favorite", "Classic Butter Chicken", "Mughlai Royalty"],
      calories: "520 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-09",
      name: "Kashmiri Mutton Rogan Josh",
      diet: "non-veg",
      price: 625,
      spiceLevel: 2,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "mughlai-mains",
      description: "Tender Jammu mutton chunks slow braised in natural ratan jot root, Kashmiri shallots (pran), dried ginger (soonth), and whole aromatic spices.",
      tags: ["Jammu Heritage", "Authentic Rogan Josh", "Slow-Braised"],
      calories: "560 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-10",
      name: "Paneer Lababdar Shahjahani",
      diet: "veg",
      price: 435,
      spiceLevel: 2,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "mughlai-mains",
      description: "Fresh cottage cheese dice simmered with grated paneer in an onion-tomato gravy scented with royal shahi jeera and coriander seeds.",
      tags: ["Rich Gravy", "Cottage Cheese Feast", "Vegetarian Must"],
      calories: "410 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-11",
      name: "Subz Korma Nizami",
      diet: "veg",
      price: 375,
      spiceLevel: 1,
      isChefSpecial: false,
      isCrowdFavorite: false,
      category: "mughlai-mains",
      description: "Seasonal garden vegetables, water chestnuts, and baby corn bathed in a fragrant almond and saffron essence gravy.",
      tags: ["Mild Saffron Gravy", "Nutritious", "Awadhi Elegance"],
      calories: "290 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-12",
      name: "Amritsari Kulcha & Garlic Naan Basket",
      diet: "veg",
      price: 160,
      spiceLevel: 0,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "mughlai-mains",
      description: "Tandoor-baked flaky breads stuffed with spiced potatoes or coated with roasted garlic, fresh coriander, and melted butter.",
      tags: ["Clay Oven Baked", "Crispy & Flaky", "Fresh from Tandoor"],
      calories: "260 kcal",
      prepTime: "Served Fresh",
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-13",
      name: "Awadhi Murgh Dum Biryani",
      diet: "non-veg",
      price: 540,
      spiceLevel: 2,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "biryani-pulao",
      description: "Fragrant Daawat basmati rice slow-cooked in sealed clay handis with spiced bone-in chicken, rose water, and strands of saffron.",
      tags: ["Buffet Crown Jewel", "Fragrant Saffron", "Served with Mirchi Ka Salan"],
      calories: "590 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-14",
      name: "Nawabi Subz Dum Biryani",
      diet: "veg",
      price: 420,
      spiceLevel: 1,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "biryani-pulao",
      description: "Aged basmati layered with seasonal florets, marinated paneer cubes, mint leaves, and golden fried onions under a dough seal.",
      tags: ["Vegetarian Delight", "Aromatics", "Served with Burani Raita"],
      calories: "440 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-15",
      name: "Jeera Pulao with Kashmiri Saffron",
      diet: "veg",
      price: 280,
      spiceLevel: 0,
      isChefSpecial: false,
      isCrowdFavorite: false,
      category: "biryani-pulao",
      description: "Fluffy aged basmati rice tempered with roasted Shahjeera, ghee, and local saffron strands.",
      tags: ["Aromatic Rice", "Light & Fluffy", "Gluten-Free"],
      calories: "310 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-16",
      name: "Crispy Salt & Pepper American Corn",
      diet: "veg",
      price: 295,
      spiceLevel: 1,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "live-counters",
      description: "Crisp-fried sweet corn kernels tossed with chopped bell peppers, spring scallions, cracked pepper, and garlic butter.",
      tags: ["Addictive Starter", "Crunchy & Savory", "Kid Friendly"],
      calories: "260 kcal",
      prepTime: "3 mins",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-17",
      name: "Wok-Tossed Hakka Chilli Garlic Noodles",
      diet: "veg",
      price: 320,
      spiceLevel: 2,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "live-counters",
      description: "Fresh artisanal noodles tossed in high flame with shredded cabbage, crunchy carrots, garlic chili paste, and light soy.",
      tags: ["Live Teppanyaki", "Smoky Wok Hei", "Hot & Savory"],
      calories: "380 kcal",
      prepTime: "4 mins",
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-18",
      name: "Steamed Crystal Dim Sums (Veg / Chicken)",
      diet: "non-veg",
      price: 360,
      spiceLevel: 1,
      isChefSpecial: true,
      isCrowdFavorite: false,
      category: "live-counters",
      description: "Translucent bamboo-steamed dumplings stuffed with water chestnuts or seasoned minced chicken, served with fiery Sichuan dip.",
      tags: ["Live Steamer", "Low Calorie", "Authentic Asian"],
      calories: "210 kcal",
      prepTime: "5 mins",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-19",
      name: "Chandni Chowk Dahi Puri & Papdi Chaat",
      diet: "veg",
      price: 240,
      spiceLevel: 1,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "live-counters",
      description: "Crisp flour wafers filled with spiced potatoes, sweetened mountain curd, tangy saunth chutney, and mint dressing.",
      tags: ["Street Food Icon", "Sweet & Tangy", "Live Assembly"],
      calories: "280 kcal",
      prepTime: "Instant",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-20",
      name: "Smoked Chicken Tikka Pizza Slice",
      diet: "non-veg",
      price: 340,
      spiceLevel: 1,
      isChefSpecial: false,
      isCrowdFavorite: false,
      category: "live-counters",
      description: "Stone-baked thin-crust pizza topped with tandoori chicken shreds, melted mozzarella, bell peppers, and fresh herbs.",
      tags: ["Kids Special", "Cheesy", "Live Oven"],
      calories: "330 kcal",
      prepTime: "Fresh from Oven",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-21",
      name: "Sizzling Dark Brownie with Vanilla Pod Gelato",
      diet: "veg",
      price: 280,
      spiceLevel: 0,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "dessert-parlor",
      description: "Gooey Belgian chocolate fudge brownie served on a smoking hot iron skillet, crowned with rich Madagascar vanilla bean gelato and hot molten fudge.",
      tags: ["All-Time Champion", "Decadent Chocolate", "Warm & Cold"],
      calories: "480 kcal",
      prepTime: "3 mins",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-22",
      name: "Royal Shahi Kesar Pista Kulfi",
      diet: "veg",
      price: 190,
      spiceLevel: 0,
      isChefSpecial: true,
      isCrowdFavorite: true,
      category: "dessert-parlor",
      description: "Slow-reduced whole milk kulfi enriched with authentic Pampore saffron threads, crushed green pistachios, and scented falooda noodles.",
      tags: ["Heritage Sweet", "Kashmir Saffron", "Unlimited"],
      calories: "240 kcal",
      prepTime: "Trolley Fresh",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-23",
      name: "Hot Shahi Gulab Jamun with Rabri",
      diet: "veg",
      price: 210,
      spiceLevel: 0,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "dessert-parlor",
      description: "Mawa dumplings fried in pure desi ghee, soaked in green cardamom syrup and paired with chilled reduced malai rabri.",
      tags: ["Traditional Indulgence", "Desi Ghee", "Melt in Mouth"],
      calories: "360 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-24",
      name: "Stone-Cold Mix Ice Cream Sundae",
      diet: "veg",
      price: 240,
      spiceLevel: 0,
      isChefSpecial: false,
      isCrowdFavorite: true,
      category: "dessert-parlor",
      description: "Custom ice cream churned on a frozen granite slab with oreo crumbs, roasted almonds, sprinkles, and butterscotch ribbons.",
      tags: ["Custom Creation", "Kids Delight", "Unlimited Flavors"],
      calories: "310 kcal",
      prepTime: "Live Mix",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pog-25",
      name: "Moong Dal Halwa Desi Ghee",
      diet: "veg",
      price: 230,
      spiceLevel: 0,
      isChefSpecial: true,
      isCrowdFavorite: false,
      category: "dessert-parlor",
      description: "Golden roasted yellow lentils slow-cooked with pure cow's ghee, slivered cashews, and golden raisins.",
      tags: ["Winter Favorite", "Pure Ghee", "Rich & Hearty"],
      calories: "410 kcal",
      prepTime: "Buffet Ready",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // --- 3. Initialize Application ---
  document.addEventListener('DOMContentLoaded', () => {
    initLiveStatus();
    initMobileNav();
    loadDishesData();
    initFilterEvents();
    initReservationForm();
    initEscapeKey();
  });

  // --- 4. Live Operating Status in India Standard Time (IST, UTC+5:30) ---
  function initLiveStatus() {
    const statusTextEl = document.getElementById('liveStatusText');
    if (!statusTextEl) return;

    function checkStatus() {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);

      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const timeVal = hours * 60 + minutes;

      const lunchStart = 12 * 60; // 12:00 PM
      const lunchEnd = 16 * 60;   // 04:00 PM
      const dinnerStart = 18 * 60 + 30; // 06:30 PM
      const dinnerEnd = 23 * 60 + 30;   // 11:30 PM

      let statusMsg = '';
      let isLive = false;

      if (timeVal >= lunchStart && timeVal < lunchEnd) {
        statusMsg = 'Open Now • Lunch Buffet in Service (till 4:00 PM)';
        isLive = true;
      } else if (timeVal >= dinnerStart && timeVal < dinnerEnd) {
        statusMsg = 'Open Now • Grand Dinner Buffet in Service (till 11:30 PM)';
        isLive = true;
      } else if (timeVal >= lunchEnd && timeVal < dinnerStart) {
        statusMsg = 'Dinner Prep • Next seating starts at 6:30 PM';
        isLive = false;
      } else {
        statusMsg = 'Closed for the Night • Doors reopen at 12:00 PM tomorrow';
        isLive = false;
      }

      statusTextEl.textContent = statusMsg;
      const dot = document.querySelector('.pulse-dot');
      if (dot) {
        dot.style.backgroundColor = isLive ? '#16A34A' : '#F59E0B';
        dot.style.boxShadow = isLive
          ? '0 0 0 3px rgba(22, 163, 74, 0.25)'
          : '0 0 0 3px rgba(245, 158, 11, 0.25)';
      }
    }

    checkStatus();
    setInterval(checkStatus, 60000);
  }

  // --- 5. Mobile Navigation Toggle ---
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
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 6. Load Dishes Data ---
  async function loadDishesData() {
    try {
      const response = await fetch('brand-spec.json');
      if (!response.ok) throw new Error('Network error loading brand-spec.json');
      const data = await response.json();

      state.categories = data.menuEngineering?.categories || [];
      state.dishes = state.categories.flatMap(cat => cat.items || []);

      if (!state.dishes.length) {
        throw new Error('No items in parsed brand spec');
      }

      updateCategoryCounts();
      renderMenu();
    } catch (err) {
      console.info('Operating with built-in master menu dataset:', err.message);
      state.dishes = [...FALLBACK_DISHES];
      updateCategoryCounts();
      renderMenu();
    }
  }

  function updateCategoryCounts() {
    const counts = {
      all: state.dishes.length,
      'live-grill': 0,
      'mughlai-mains': 0,
      'biryani-pulao': 0,
      'live-counters': 0,
      'dessert-parlor': 0
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

  // --- 7. Filter & Search Handlers ---
  function initFilterEvents() {
    // Category Tabs
    const catButtons = document.querySelectorAll('.category-tab');
    catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeCategory = btn.getAttribute('data-category');
        renderMenu();

        // Scroll category tab into view on small screens
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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

  // --- 8. Menu Rendering (Vibrant Light Food Cards) ---
  function renderMenu() {
    const grid = document.getElementById('menuGrid');
    const emptyState = document.getElementById('menuEmptyState');
    if (!grid) return;

    // Filter items
    const filtered = state.dishes.filter(item => {
      // Category match
      if (state.activeCategory !== 'all' && item.category !== state.activeCategory) {
        return false;
      }

      // Diet match
      if (state.activeDiet === 'veg' && item.diet !== 'veg') return false;
      if (state.activeDiet === 'non-veg' && item.diet !== 'non-veg') return false;
      if (state.activeDiet === 'chef' && !item.isChefSpecial) return false;

      // Search match
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
      const badgeText = dish.isChefSpecial ? '⭐ Chef Special' : (dish.isCrowdFavorite ? '🔥 Bestseller' : '');

      return `
        <article class="menu-card" data-dish-id="${dish.id}" tabindex="0" role="button" aria-label="View details for ${dish.name}">
          <div class="menu-card-media">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy" width="400" height="250" />
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
              <span class="menu-dish-price">Unlimited</span>
            </div>
            <p class="menu-dish-desc">${dish.description}</p>
            <div class="menu-card-footer">
              <span class="calorie-tag">⚡ ${dish.calories || 'Nutritious'}</span>
              <span class="footer-link-hint">
                <span>View Details</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click and keyboard listeners to cards
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

  // --- 9. Dish Modal Controller ---
  window.openDishModal = function (dish) {
    state.selectedDish = dish;
    const modal = document.getElementById('dishModal');
    if (!modal) return;

    document.getElementById('dishModalImg').src = dish.image;
    document.getElementById('dishModalImg').alt = dish.name;
    document.getElementById('dishModalTitle').textContent = dish.name;
    document.getElementById('dishModalDesc').textContent = dish.description;

    const dietEl = document.getElementById('dishModalDiet');
    dietEl.innerHTML = dish.diet === 'veg'
      ? '<span class="diet-dot dot-veg"></span> Pure Vegetarian'
      : '<span class="diet-dot dot-nonveg"></span> Non-Vegetarian';

    const catEl = document.getElementById('dishModalCategory');
    const catLabels = {
      'live-grill': 'Live Charcoal Skewers',
      'mughlai-mains': 'Royal Mughlai Curry',
      'biryani-pulao': 'Dum Biryani & Rice',
      'live-counters': 'Live Asian & Chaat',
      'dessert-parlor': 'Artisan Dessert'
    };
    catEl.textContent = catLabels[dish.category] || 'Buffet Delicacy';

    const spiceMap = ['Mild / Sweet', 'Mild & Fragrant', 'Medium Spiced 🔥', 'Fiery High Flame 🔥🔥'];
    document.getElementById('dishModalSpice').textContent = spiceMap[dish.spiceLevel] || 'Balanced';
    document.getElementById('dishModalCalories').textContent = dish.calories || 'Standard Serving';
    document.getElementById('dishModalPrep').textContent = dish.prepTime || 'Prepared Fresh';

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

  // --- 10. Table Reservation Modal & Dynamic Instant Calculator ---
  window.openReservationModal = function (preferredSlot) {
    const modal = document.getElementById('reservationModal');
    if (!modal) return;

    // Reset views
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

    if (preferredSlot && preferredSlot.toLowerCase().includes('lunch')) {
      const slotEl = document.getElementById('resSlot');
      if (slotEl) slotEl.value = 'lunch';
    } else if (preferredSlot && preferredSlot.toLowerCase().includes('dinner')) {
      const slotEl = document.getElementById('resSlot');
      if (slotEl) slotEl.value = 'dinner';
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
    let val = parseInt(input.value, 10) || 4;
    val = Math.max(1, Math.min(30, val + delta));
    input.value = val;
    updateBookingSlip();
  };

  window.updateBookingSlip = function () {
    const guestsInput = document.getElementById('resGuests');
    const slotInput = document.getElementById('resSlot');
    const dateInput = document.getElementById('resDate');
    const prefInput = document.getElementById('resTablePref');

    const guests = guestsInput ? parseInt(guestsInput.value, 10) || 4 : 4;
    const slot = slotInput ? slotInput.value : 'dinner';
    const dateVal = dateInput ? dateInput.value : '';
    const pref = prefInput ? prefInput.value : 'Live Charcoal Grill Table';

    // Pricing calculation based on day & slot
    let dateObj = dateVal ? new Date(dateVal) : new Date();
    const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6; // Sunday or Saturday

    let estRate = 949;
    if (isWeekend) {
      estRate = 1099;
    } else {
      estRate = (slot === 'lunch') ? 899 : 999;
    }

    const estTotal = estRate * guests;

    // Update slip elements
    const slipGuests = document.getElementById('slipGuests');
    if (slipGuests) slipGuests.textContent = `${guests} ${guests === 1 ? 'Guest' : 'Guests'}`;

    const slipSlot = document.getElementById('slipSlot');
    if (slipSlot) {
      slipSlot.textContent = slot === 'lunch' ? 'Lunch Buffet (12:00 – 4:00 PM)' : 'Dinner Buffet (6:30 – 11:30 PM)';
    }

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

    const slipEstRate = document.getElementById('slipEstRate');
    if (slipEstRate) slipEstRate.textContent = `₹${estRate} / person (avg)`;

    const slipEstTotal = document.getElementById('slipEstTotal');
    if (slipEstTotal) slipEstTotal.textContent = `₹${estTotal.toLocaleString('en-IN')}*`;
  };

  function initReservationForm() {
    const dateInput = document.getElementById('resDate');
    const slotInput = document.getElementById('resSlot');
    const prefInput = document.getElementById('resTablePref');

    if (dateInput) dateInput.addEventListener('change', updateBookingSlip);
    if (slotInput) slotInput.addEventListener('change', updateBookingSlip);
    if (prefInput) prefInput.addEventListener('change', updateBookingSlip);
  }

  // --- 11. Handle Reservation Submission with Instant WhatsApp Sync ---
  window.handleReservationSubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const guests = document.getElementById('resGuests').value;
    const date = document.getElementById('resDate').value;
    const slot = document.getElementById('resSlot').value;
    const pref = document.getElementById('resTablePref').value;
    const notes = document.getElementById('resNotes').value.trim();

    const randomRef = 'POG-JMU-' + Math.floor(1000 + Math.random() * 9000);

    const formStep = document.getElementById('reservationFormStep');
    const confirmStep = document.getElementById('confirmationStep');
    const confirmedRef = document.getElementById('confirmedRef');
    const confirmedSummary = document.getElementById('confirmedSummary');
    const whatsappBtn = document.getElementById('whatsappShareBtn');

    if (confirmedRef) confirmedRef.textContent = randomRef;

    const formattedDate = new Date(date).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    const estTotalStr = document.getElementById('slipEstTotal')?.textContent || '';

    if (confirmedSummary) {
      confirmedSummary.innerHTML = `
        <p><strong>Primary Guest:</strong> ${name}</p>
        <p><strong>Phone:</strong> +91 ${phone}</p>
        <p><strong>Reserved Date:</strong> ${formattedDate}</p>
        <p><strong>Session:</strong> ${slot === 'lunch' ? 'Lunch Buffet (12:00 – 4:00 PM)' : 'Dinner Buffet (6:30 – 11:30 PM)'}</p>
        <p><strong>Table Allocation:</strong> ${guests} Guests • ${pref}</p>
        ${notes ? `<p><strong>Special Request:</strong> ${notes}</p>` : ''}
        <p><strong>Est. Amount:</strong> ${estTotalStr}</p>
      `;
    }

    // Configure WhatsApp Sync Link
    if (whatsappBtn) {
      const waMsg = encodeURIComponent(
        `*Table Reservation Request — Pirates of Grill Wave Mall Jammu*\n\n` +
        `🔖 *Booking Reference:* ${randomRef}\n` +
        `👤 *Guest Name:* ${name}\n` +
        `📱 *Mobile:* +91 ${phone}\n` +
        `📅 *Date:* ${formattedDate}\n` +
        `🍽️ *Session:* ${slot === 'lunch' ? 'Lunch Buffet (12:00 – 4:00 PM)' : 'Dinner Buffet (6:30 – 11:30 PM)'}\n` +
        `👥 *Party Size:* ${guests} Guests\n` +
        `🪑 *Seating Preference:* ${pref}\n` +
        (notes ? `📝 *Special Request:* ${notes}\n` : '') +
        `💰 *Estimated Bill:* ${estTotalStr}\n\n` +
        `_Please hold our live barbecue table at Level 3, Wave Mall Jammu._`
      );
      whatsappBtn.href = `https://wa.me/919103055100?text=${waMsg}`;
    }

    if (formStep) formStep.style.display = 'none';
    if (confirmStep) confirmStep.style.display = 'block';
  };

  // --- 12. Escape Key & Backdrop Dismissal ---
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
