/**
 * Open Cafe & Dining — Rooftop Sky Terrace & Starlit Dining
 * Level 5 Rooftop, Bahu Plaza, Jammu
 * High-performance Vanilla JS Engine (Tier 1, 0-dep)
 */

// Embedded Fallback Menu Data (Instant zero-network rendering)
const OPEN_CAFE_MENU_DATA = [
  // 1. Small Plates & Tapas
  {
    id: "truffle-edamame-hummus",
    name: "Truffle Edamame & Roasted Garlic Hummus",
    price: 420,
    category: "small-plates",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Silky Japanese edamame and chickpea puree whipped with black truffle oil, roasted garlic confit, toasted pine nuts, and warm woodfired pita crisps.",
    ingredients: ["Edamame", "Black Truffle Oil", "Garlic Confit", "Pine Nuts", "Hearth Pita"],
    pairingSuggestion: "Pairs elegantly with our Bahu Sunset Spritz",
    tags: ["Chef Signature", "Vegan", "Rooftop Favorite"],
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "crispy-softshell-calamari",
    name: "Crispy Rock Salt Calamari",
    price: 540,
    category: "small-plates",
    veg: false,
    egg: true,
    chefSignature: false,
    woodfire: false,
    description: "Flash-fried tender squid rings dusted with crushed Sichuan pepper and Himalayan rock salt, charred lemon wedge, and house kaffir lime aioli.",
    ingredients: ["Squid Rings", "Kaffir Lime Aioli", "Sichuan Pepper", "Charred Lemon"],
    pairingSuggestion: "Pairs with Tawi Mist Smoked Rosemary Tonic",
    tags: ["Seafood", "Crisp", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wild-mushroom-arancini",
    name: "Wild Porcini & Truffle Arancini",
    price: 450,
    category: "small-plates",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Crispy golden risotto spheres stuffed with wild porcini mushrooms and a molten fior di latte mozzarella center, served over smoked pomodoro emulsion.",
    ingredients: ["Carnaroli Rice", "Porcini Mushrooms", "Fior di Latte", "Smoked Pomodoro", "White Truffle Oil"],
    pairingSuggestion: "Pairs with Sparkling Elderflower Tonic",
    tags: ["Chef Signature", "Vegetarian", "Molten Core"],
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pulled-mutton-rogan-sliders",
    name: "Pulled Mutton Rogan Slider Duo",
    price: 520,
    category: "small-plates",
    veg: false,
    egg: true,
    chefSignature: true,
    woodfire: false,
    description: "8-hour slow braised Kashmiri spiced pulled mutton, cucumber mint labneh, pickled shallots, inside toasted mini brioche slider buns.",
    ingredients: ["Braised Mutton", "Kashmiri Chillies", "Mint Labneh", "Brioche Buns", "Pickled Shallots"],
    pairingSuggestion: "Pairs with Kashmiri Pomegranate & Mint Mule",
    tags: ["Chef Signature", "Kashmiri Heritage", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "charcoal-paneer-tikka",
    name: "Charcoal Smoked Kasundi Paneer Tikka",
    price: 440,
    category: "small-plates",
    veg: true,
    egg: false,
    chefSignature: false,
    woodfire: true,
    description: "Fresh cottage cheese marinated in stoneground yellow mustard (kasundi), hung curd, roasted ajwain seeds, charred over live coconut charcoal, mint foam.",
    ingredients: ["Farm Paneer", "Kasundi Mustard", "Roasted Ajwain", "Mint Emulsion", "Bell Peppers"],
    pairingSuggestion: "Pairs with Iced Citrus Americano",
    tags: ["Vegetarian", "Clay Oven", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gambas-al-ajillo",
    name: "Tiger Prawns Gambas al Ajillo",
    price: 590,
    category: "small-plates",
    veg: false,
    egg: false,
    chefSignature: false,
    woodfire: false,
    description: "Juicy tiger prawns flash-seared in Spanish extra virgin olive oil with slivered garlic, dried bird's eye chili, fresh parsley, and toasted sourdough croute.",
    ingredients: ["Tiger Prawns", "Spanish Olive Oil", "Garlic Confit", "Bird's Eye Chili", "Fresh Parsley"],
    pairingSuggestion: "Pairs with Chilled Blood Orange Mule",
    tags: ["Non-Veg", "Spanish Classic", "Sizzling"],
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80"
  },

  // 2. Woodfired Neapolitan Pizzas
  {
    id: "pizza-burrata-margherita",
    name: "Burrata & San Marzano Margherita",
    price: 590,
    category: "woodfired-pizzas",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: true,
    description: "Italian San Marzano tomato pomodoro, fresh whole burrata torn tableside, basil olive oil drizzle, aged parmesan reggiano on leopard-spotted crust.",
    ingredients: ["San Marzano DOP Tomatoes", "Artisanal Burrata", "Fresh Sweet Basil", "Parmigiano Reggiano"],
    pairingSuggestion: "Pairs with Bahu Sunset Spritz",
    tags: ["Chef Signature", "Vegetarian", "Neapolitan Benchmark"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pizza-quattro-formaggi-honey",
    name: "Quattro Formaggi & Hot Mountain Honey",
    price: 640,
    category: "woodfired-pizzas",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: true,
    description: "White base pizza with smoked fior di latte, tangy Gorgonzola dolce, Fontina, and aged Parmigiano, finished with wild chili-infused raw forest honey.",
    ingredients: ["Gorgonzola Dolce", "Fior di Latte", "Fontina", "Aged Parmesan", "Hot Wild Honey"],
    pairingSuggestion: "Pairs with Smoked Rosemary Tonic",
    tags: ["Chef Signature", "Vegetarian", "Sweet & Savory"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pizza-smoked-chicken-jalapeno",
    name: "Smoked Kashmiri Chicken & Charred Jalapeño",
    price: 620,
    category: "woodfired-pizzas",
    veg: false,
    egg: false,
    chefSignature: false,
    woodfire: true,
    description: "Spiced oak-smoked chicken shreds, charred pickled jalapeños, red onions, smoked scamorza cheese, and fresh coriander over zesty tomato base.",
    ingredients: ["Oak-Smoked Chicken", "Scamorza Cheese", "Pickled Jalapeños", "Red Onion", "San Marzano Sauce"],
    pairingSuggestion: "Pairs with Celestial Blue Elixir",
    tags: ["Non-Veg", "Spicy & Smoky"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pizza-tartufata-funghi",
    name: "Tartufata & Wild Forest Funghi",
    price: 660,
    category: "woodfired-pizzas",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: true,
    description: "Garlic mascarpone cream base, roasted wild porcini, button and shiitake mushrooms, fresh thyme, and white truffle oil drizzle.",
    ingredients: ["White Truffle Cream", "Porcini Mushrooms", "Shiitake", "Fior di Latte", "Fresh Thyme"],
    pairingSuggestion: "Pairs with Sparkling Green Apple Tonic",
    tags: ["Chef Signature", "Vegetarian", "Truffle Indulgence"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pizza-pepperoni-classico",
    name: "Artisanal Pepperoni & Calabrian Chili",
    price: 680,
    category: "woodfired-pizzas",
    veg: false,
    egg: false,
    chefSignature: false,
    woodfire: true,
    description: "Crisp cup-and-char pork pepperoni rounds, whole milk mozzarella, spicy Calabrian chili flakes, and hot tomato sauce.",
    ingredients: ["Pork Pepperoni", "Whole Milk Mozzarella", "Calabrian Chili", "Oregano"],
    pairingSuggestion: "Pairs with Iced Botanical Cold Brew",
    tags: ["Non-Veg", "Classic Favorite"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },

  // 3. Pan-Asian & Robata
  {
    id: "dim-sum-truffle-edamame",
    name: "Edamame & Black Truffle Crystal Dim Sum",
    price: 460,
    category: "pan-asian-robata",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Translucent crystal skin parcels packed with finely smashed young edamame, water chestnuts, scallions, and pure black truffle essence.",
    ingredients: ["Edamame", "Black Truffle Oil", "Water Chestnut", "Chili Crisp Dip"],
    pairingSuggestion: "Pairs with Jasmine Green Tea or Sunset Spritz",
    tags: ["Chef Signature", "Vegetarian", "Steamed Hot"],
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sushi-spicy-salmon",
    name: "Spicy Norwegian Salmon & Avocado Roll",
    price: 620,
    category: "pan-asian-robata",
    veg: false,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Fresh sashimi-grade Norwegian salmon, Hass avocado, spicy tobanjan mayo, toasted black sesame, and sweet unagi reduction drizzle (8 pieces).",
    ingredients: ["Norwegian Salmon", "Hass Avocado", "Koshihikari Rice", "Tobanjan Mayo", "Toasted Sesame"],
    pairingSuggestion: "Pairs with Celestial Blue Elixir",
    tags: ["Chef Signature", "Fresh Seafood", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rock-shrimp-tempura",
    name: "Rock Shrimp Crispy Tempura",
    price: 580,
    category: "pan-asian-robata",
    veg: false,
    egg: true,
    chefSignature: false,
    woodfire: false,
    description: "Featherlight crispy battered baby shrimp tossed in a velvety spicy sriracha glaze with toasted sesame and scallions.",
    ingredients: ["Baby Shrimp", "Tempura Batter", "Spicy Sriracha Glaze", "Scallions"],
    pairingSuggestion: "Pairs with Kashmiri Pomegranate Mule",
    tags: ["Seafood", "Crisp", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sichuan-crispy-lotus",
    name: "Sichuan Honey Chilli Crispy Lotus Stem",
    price: 390,
    category: "pan-asian-robata",
    veg: true,
    egg: false,
    chefSignature: false,
    woodfire: false,
    description: "Thin sliced Jammu lotus roots fried to crackling perfection, tossed in a sticky sweet chili garlic sauce, toasted sesame, and roasted Sichuan peppercorns.",
    ingredients: ["Jammu Lotus Root", "Sichuan Peppercorns", "Honey Chili Glaze", "Toasted Sesame"],
    pairingSuggestion: "Pairs with Chilled Blood Orange Mule",
    tags: ["Vegetarian", "Crunchy", "Local Produce"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "robata-chicken-yakitori",
    name: "Robata Charred Chicken Yakitori Skewers",
    price: 480,
    category: "pan-asian-robata",
    veg: false,
    egg: false,
    chefSignature: false,
    woodfire: true,
    description: "Charcoal grilled skewers of succulent chicken thigh and scallion segments, basted continuously with sweet mirin tare glaze.",
    ingredients: ["Chicken Thigh", "Spring Onion", "Mirin Tare Glaze", "Shichimi Togarashi"],
    pairingSuggestion: "Pairs with Smoked Rosemary Tonic",
    tags: ["Charcoal Grilled", "Non-Veg", "Robata Skewers"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },

  // 4. Rooftop Mains
  {
    id: "mutton-shank-braised",
    name: "Slow-Braised Kashmiri Mutton Shank",
    price: 780,
    category: "rooftop-mains",
    veg: false,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Slow-cooked for 6 hours until meat melts from the bone. Rich reduction of saffron, fennel, and whole Kashmiri spices, served alongside saffron pilaf and glazed baby carrots.",
    ingredients: ["Mutton Shank", "Pampore Saffron", "Fennel & Dry Ginger", "Aromatic Saffron Rice"],
    pairingSuggestion: "Pairs with Kashmiri Pomegranate & Mint Mule",
    tags: ["Chef Signature", "Kashmiri Legacy", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pan-seared-river-sole",
    name: "Pan-Seared River Sole with Caper Emulsion",
    price: 720,
    category: "rooftop-mains",
    veg: false,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Delicate fresh river sole fillet seared in brown herb butter, crushed sea salt baby potatoes, grilled asparagus spears, and a vibrant lemon caper emulsion.",
    ingredients: ["Fresh River Sole", "Capers", "Brown Butter", "Baby Potatoes", "Asparagus"],
    pairingSuggestion: "Pairs with Bahu Sunset Spritz",
    tags: ["Chef Signature", "Seafood", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "saffron-asparagus-risotto",
    name: "Kashmiri Saffron & Charred Asparagus Risotto",
    price: 560,
    category: "rooftop-mains",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Acquerello carnaroli rice simmered in saffron-infused vegetable broth, finished with 24-month Parmigiano Reggiano, butter emulsion, and charred baby asparagus spears.",
    ingredients: ["Carnaroli Rice", "Kashmiri Saffron", "Parmigiano Reggiano", "Charred Asparagus", "White Wine Reduction"],
    pairingSuggestion: "Pairs with Elderflower Tonic",
    tags: ["Chef Signature", "Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "grilled-herb-chicken-supreme",
    name: "Grilled Mediterranean Herb Chicken Supreme",
    price: 620,
    category: "rooftop-mains",
    veg: false,
    egg: false,
    chefSignature: false,
    woodfire: true,
    description: "Charred bone-in chicken breast marinated in fresh mountain rosemary, thyme, and garlic, served over roasted garlic potato mash and rich rosemary pan jus.",
    ingredients: ["Chicken Breast", "Rosemary Jus", "Garlic Mash", "Charred Greens"],
    pairingSuggestion: "Pairs with Smoked Rosemary Tonic",
    tags: ["Non-Veg", "Comfort Dining"],
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "harissa-paneer-steak",
    name: "Moroccan Harissa Cottage Cheese Steak",
    price: 540,
    category: "rooftop-mains",
    veg: true,
    egg: false,
    chefSignature: false,
    woodfire: true,
    description: "Thick-cut fresh paneer steak marinated in fiery North African harissa paste, grilled on hot griddle and served with roasted vegetable ratatouille and fragrant herb couscous.",
    ingredients: ["Farm Paneer", "Harissa Paste", "Herb Couscous", "Ratatouille", "Toasted Almonds"],
    pairingSuggestion: "Pairs with Celestial Blue Elixir",
    tags: ["Vegetarian", "Spicy & Bold"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },

  // 5. Sky Desserts
  {
    id: "deconstructed-tiramisu",
    name: "Deconstructed Tiramisu with Espresso Mist",
    price: 420,
    category: "sky-desserts",
    veg: true,
    egg: true,
    chefSignature: true,
    woodfire: false,
    description: "Savoiardi ladyfingers steeped in single-origin espresso, whipped Italian mascarpone mousse, Valrhona dark chocolate soil, misted tableside with espresso aroma.",
    ingredients: ["Italian Mascarpone", "Savoiardi", "Single-Origin Espresso", "Valrhona Cocoa Soil"],
    pairingSuggestion: "Pairs with Double Espresso or Cold Brew",
    tags: ["Chef Signature", "Dessert Benchmark"],
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "charred-basque-cheesecake",
    name: "San Sebastián Charred Basque Cheesecake",
    price: 440,
    category: "sky-desserts",
    veg: true,
    egg: true,
    chefSignature: true,
    woodfire: false,
    description: "Caramelized deeply bronzed exterior with an impossibly creamy, molten cream-cheese center, served with warm wild Himalayan berry compote.",
    ingredients: ["Philadelphia Cream Cheese", "Heavy Cream", "Vanilla Bean", "Wild Mulberry Coulis"],
    pairingSuggestion: "Pairs with Bahu Sunset Spritz",
    tags: ["Chef Signature", "Molten Texture"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "molten-dark-chocolate-lava",
    name: "70% Valrhona Dark Chocolate Lava Sphere",
    price: 460,
    category: "sky-desserts",
    veg: true,
    egg: true,
    chefSignature: false,
    woodfire: false,
    description: "Warm baked chocolate cake that reveals a molten 70% Guanaja chocolate core when sliced, paired with artisanal Madagascar bourbon vanilla bean gelato.",
    ingredients: ["Valrhona 70% Guanaja", "Bourbon Vanilla Gelato", "Almond Sable Crumble"],
    pairingSuggestion: "Pairs with Cortado or Hot Mocha",
    tags: ["Decadent", "Warm & Cold"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },

  // 6. Sunset Mixology
  {
    id: "bahu-sunset-spritz",
    name: "Bahu Sunset Aperitivo Spritz",
    price: 340,
    category: "crafted-mixology",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Blood orange reduction, French elderflower cordial, sparkling artisanal tonic water, dehydrated orange wheel, and a sprig of fresh mountain thyme.",
    ingredients: ["Blood Orange Shrub", "Elderflower", "Sparkling Tonic", "Dehydrated Orange"],
    pairingSuggestion: "Our signature golden hour sunset drink",
    tags: ["Chef Signature", "Golden Hour", "Sparkling"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tawi-mist-smoked-rosemary",
    name: "Tawi Mist Smoked Rosemary Tonic",
    price: 320,
    category: "crafted-mixology",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Cold-pressed tart green apple juice, fresh lime extract, botanical dry tonic, served over crystal ice with a smoking Himalayan rosemary branch.",
    ingredients: ["Green Apple", "Smoked Rosemary", "Botanical Tonic", "Lime"],
    pairingSuggestion: "Pairs with Truffle Arancini or Neapolitan Pizza",
    tags: ["Chef Signature", "Aromatic Smoke", "Refreshing"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pomegranate-mint-mule",
    name: "Kashmiri Pomegranate & Ginger Mule",
    price: 310,
    category: "crafted-mixology",
    veg: true,
    egg: false,
    chefSignature: false,
    woodfire: false,
    description: "Pure Jammu pomegranate reduction, spicy non-alcoholic ginger beer, bruised garden mint, crushed ice in a frosty copper mug.",
    ingredients: ["Jammu Pomegranate", "Spicy Ginger Beer", "Garden Mint", "Lime Wheels"],
    pairingSuggestion: "Pairs with Pulled Mutton Rogan Sliders",
    tags: ["Regional Pride", "Fiery & Sweet"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "celestial-blue-butterfly-elixir",
    name: "Celestial Starlight Butterfly Pea Elixir",
    price: 330,
    category: "crafted-mixology",
    veg: true,
    egg: false,
    chefSignature: true,
    woodfire: false,
    description: "Wild butterfly pea flower cold infusion that changes color tableside with Japanese yuzu cordial, sparkling mineral soda, and edible silver shimmer.",
    ingredients: ["Butterfly Pea Flower", "Yuzu Cordial", "Sparkling Soda", "Edible Silver Shimmer"],
    pairingSuggestion: "Pairs with Edamame Dim Sum or Salmon Sushi",
    tags: ["Chef Signature", "Visual Magic", "Instagrammable"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  }
];

// Category metadata
const CATEGORY_META = {
  all: {
    title: "All Artisanal Offerings",
    tagline: "Crafted for twilight dining under the stars at Bahu Plaza."
  },
  "small-plates": {
    title: "Artisanal Small Plates & Rooftop Tapas",
    tagline: "Designed for sharing as twilight falls over the Tawi skyline."
  },
  "woodfired-pizzas": {
    title: "Artisanal Woodfired Neapolitan Pizzas",
    tagline: "Slow 48-hr fermented crust, blistered at 450°C in our stone oven."
  },
  "pan-asian-robata": {
    title: "Pan-Asian Dim Sum & Robata Grill",
    tagline: "Crystal dim sum, fresh rolled uramaki, and binchotan skewers."
  },
  "rooftop-mains": {
    title: "Al Fresco Rooftop Mains",
    tagline: "Hearty elevated plates crafted for cool mountain evening breezes."
  },
  "sky-desserts": {
    title: "Sky Lounge Postres & Desserts",
    tagline: "Sweet finales crafted for lingering under the constellations."
  },
  "crafted-mixology": {
    title: "Bespoke Zero-Proof Mixology & Aperitifs",
    tagline: "Botanical tonics, cold-pressed Himalayan shrubs, and sunset spritzers."
  }
};

// Global state
let currentCategory = "all";
let currentDietFilter = "all";
let currentSearchTerm = "";
let currentModalDish = null;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initLiveHours();
  initDateConstraints();
  renderMenu();
  setupKeyboardListeners();

  // Update current year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Live Operating Hours in Jammu (IST: UTC + 5:30)
function initLiveHours() {
  const badgeEl = document.getElementById("liveStatusBadge");
  if (!badgeEl) return;

  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utc + 3600000 * 5.5);
  const hour = istDate.getHours();
  const minute = istDate.getMinutes();
  const timeNum = hour + minute / 60;

  // Open 04:30 PM (16.5) to 11:30 PM (23.5)
  const isOpen = timeNum >= 16.5 && timeNum < 23.5;

  if (isOpen) {
    badgeEl.innerHTML = `<span class="status-dot"></span><span class="status-label">Open Now &bull; Closes 11:30 PM</span>`;
  } else {
    badgeEl.style.background = "rgba(239, 68, 68, 0.1)";
    badgeEl.style.borderColor = "rgba(239, 68, 68, 0.3)";
    badgeEl.style.color = "#f87171";
    badgeEl.innerHTML = `<span class="status-dot" style="background: #ef4444; box-shadow: 0 0 8px #ef4444;"></span><span class="status-label">Opens 04:30 PM &bull; Sunset Terrace</span>`;
  }
}

// Render Menu Cards
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  const filtered = OPEN_CAFE_MENU_DATA.filter((item) => {
    // Category check
    if (currentCategory !== "all" && item.category !== currentCategory) {
      return false;
    }

    // Dietary filter check
    if (currentDietFilter === "veg" && !item.veg) return false;
    if (currentDietFilter === "nonveg" && item.veg) return false;
    if (currentDietFilter === "signature" && !item.chefSignature) return false;
    if (currentDietFilter === "woodfire" && !item.woodfire) return false;

    // Search query check
    if (currentSearchTerm) {
      const q = currentSearchTerm.toLowerCase();
      const inName = item.name.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inIng = item.ingredients.some(ing => ing.toLowerCase().includes(q));
      const inTags = item.tags.some(tag => tag.toLowerCase().includes(q));
      if (!inName && !inDesc && !inIng && !inTags) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card" onclick="openDishModal('${item.id}')" tabindex="0" onkeydown="handleCardKeydown(event, '${item.id}')">
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="card-top-badges">
          ${item.chefSignature ? '<span class="card-badge badge-signature">★ Chef Signature</span>' : ''}
          ${item.woodfire ? '<span class="card-badge badge-woodfire">🔥 Woodfire Hearth</span>' : ''}
          ${item.veg ? '<span class="card-badge badge-veg">🌱 Pure Veg</span>' : '<span class="card-badge badge-nonveg">🍗 Non-Veg</span>'}
        </div>
      </div>
      <div class="menu-card-body">
        <div class="card-title-row">
          <h4 class="card-item-title">${item.name}</h4>
          <span class="card-price">₹${item.price}</span>
        </div>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer-row">
          <span class="card-tag-pill">${item.tags[0] || 'Sky Special'}</span>
          <span class="card-explore-link">
            <span>Explore Dish</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </article>
  `).join("");
}

// Category Selection
function selectCategory(catKey) {
  currentCategory = catKey;
  
  // Update tabs active state
  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.cat === catKey);
  });

  // Update header text
  const meta = CATEGORY_META[catKey] || CATEGORY_META.all;
  const titleEl = document.getElementById("currentCategoryTitle");
  const tagEl = document.getElementById("currentCategoryTagline");
  if (titleEl) titleEl.textContent = meta.title;
  if (tagEl) tagEl.textContent = meta.tagline;

  renderMenu();
}

// Dietary Filter Toggle
function setDietaryFilter(filterKey) {
  currentDietFilter = filterKey;
  
  document.querySelectorAll(".diet-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filterKey);
  });

  renderMenu();
}

// Search Input Handler
function handleMenuSearch(val) {
  currentSearchTerm = val.trim();
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) {
    clearBtn.classList.toggle("visible", currentSearchTerm.length > 0);
  }
  renderMenu();
}

function clearSearch() {
  const input = document.getElementById("menuSearchInput");
  if (input) {
    input.value = "";
    input.focus();
  }
  currentSearchTerm = "";
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) clearBtn.classList.remove("visible");
  renderMenu();
}

function resetAllFilters() {
  selectCategory("all");
  setDietaryFilter("all");
  clearSearch();
}

// Dish Details Modal
function openDishModal(dishId) {
  const dish = OPEN_CAFE_MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  currentModalDish = dish;

  document.getElementById("dishModalImg").src = dish.image;
  document.getElementById("dishModalImg").alt = dish.name;
  document.getElementById("dishModalCategory").textContent = CATEGORY_META[dish.category]?.title || "Sky Specialty";
  document.getElementById("dishModalTitle").textContent = dish.name;
  document.getElementById("dishModalPrice").textContent = `₹${dish.price}`;
  document.getElementById("dishModalDesc").textContent = dish.description;
  document.getElementById("dishModalPairing").textContent = dish.pairingSuggestion;

  // Badges
  const badgesWrap = document.getElementById("dishModalBadges");
  badgesWrap.innerHTML = `
    ${dish.chefSignature ? '<span class="card-badge badge-signature">★ Chef Signature</span>' : ''}
    ${dish.woodfire ? '<span class="card-badge badge-woodfire">🔥 Woodfire Hearth</span>' : ''}
    ${dish.veg ? '<span class="card-badge badge-veg">🌱 Pure Veg</span>' : '<span class="card-badge badge-nonveg">🍗 Non-Veg</span>'}
  `;

  // Ingredients Chips
  const ingWrap = document.getElementById("dishModalIngredients");
  ingWrap.innerHTML = dish.ingredients.map(ing => `<span class="ingredient-chip">${ing}</span>`).join("");

  // Open modal
  const modal = document.getElementById("dishModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDishModal(e) {
  if (e && e.target && !e.target.classList.contains("modal-backdrop") && !e.target.classList.contains("modal-close-btn")) {
    return;
  }
  const modal = document.getElementById("dishModal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function handleDishInquiry() {
  if (!currentModalDish) return;
  const msg = `Hello Open Cafe & Dining Bahu Plaza! I would like to inquire / reserve a table and order "${currentModalDish.name}" (₹${currentModalDish.price}).`;
  const url = `https://wa.me/919419177309?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// Reservation Modal Logic
function openReservationModal(prefZone) {
  const modal = document.getElementById("reserveModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  if (prefZone) {
    const seatingGroup = document.getElementById("resSeating");
    if (seatingGroup) {
      for (let i = 0; i < seatingGroup.options.length; i++) {
        if (seatingGroup.options[i].value.includes(prefZone)) {
          seatingGroup.selectedIndex = i;
          break;
        }
      }
    }
    const notesInput = document.getElementById("resNotes");
    if (notesInput && !notesInput.value && prefZone.startsWith("Dish Inquiry")) {
      notesInput.value = prefZone;
    }
  }
}

function closeReservationModal(e) {
  if (e && e.target && !e.target.classList.contains("modal-backdrop") && !e.target.classList.contains("modal-close-btn")) {
    return;
  }
  const modal = document.getElementById("reserveModal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function initDateConstraints() {
  const dateInput = document.getElementById("resDate");
  if (!dateInput) return;
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
  dateInput.value = today;
}

function handleReservationSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("resName").value.trim();
  const phone = document.getElementById("resPhone").value.trim();
  const seating = document.getElementById("resSeating").value;
  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;
  const guests = document.getElementById("resGuests").value;
  const notes = document.getElementById("resNotes").value.trim();

  // Generate Reference Code
  const refCode = "#OPN-" + Math.floor(1000 + Math.random() * 9000);

  // Populate Confirmation Ticket
  document.getElementById("ticketRefCode").textContent = refCode;
  document.getElementById("ticketGuestName").textContent = name;
  document.getElementById("ticketSeating").textContent = seating;
  document.getElementById("ticketDate").textContent = date;
  document.getElementById("ticketTime").textContent = time;
  document.getElementById("ticketGuests").textContent = guests;

  // WhatsApp Send Link
  const waMsg = `*Rooftop Table Reservation - Open Cafe & Dining Bahu Plaza*\n\nReference: ${refCode}\nGuest: ${name}\nPhone: ${phone}\nSeating: ${seating}\nDate: ${date}\nTime: ${time}\nParty: ${guests}\nSpecial Notes: ${notes || "None"}\n\nVenue: Open Cafe & Dining, Level 5 Rooftop, Bahu Plaza, Jammu.`;
  const waUrl = `https://wa.me/919419177309?text=${encodeURIComponent(waMsg)}`;
  document.getElementById("ticketWhatsAppBtn").href = waUrl;

  // Switch View
  document.getElementById("reservationFormState").classList.add("hidden");
  document.getElementById("reservationConfirmationState").classList.remove("hidden");
}

function resetReservationForm() {
  document.getElementById("reservationForm").reset();
  initDateConstraints();
  document.getElementById("reservationFormState").classList.remove("hidden");
  document.getElementById("reservationConfirmationState").classList.add("hidden");
}

// Mobile Nav Toggle
function toggleMobileNav() {
  const drawer = document.getElementById("mobileDrawer");
  drawer.classList.toggle("open");
}

function closeMobileNav() {
  const drawer = document.getElementById("mobileDrawer");
  if (drawer) drawer.classList.remove("open");
}

// Accessibility & Keyboard Helpers
function setupKeyboardListeners() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDishModal();
      closeReservationModal();
      closeMobileNav();
    }
  });
}

function handleCardKeydown(e, dishId) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openDishModal(dishId);
  }
}
