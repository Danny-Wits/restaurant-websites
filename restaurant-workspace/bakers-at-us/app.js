/**
 * Bakers @ Us — Artisanal French Boulangerie & Haute Pâtisserie
 * Sector 1, Channi Himmat, Jammu
 * High-performance Vanilla JS Engine (Tier 1, 0-dep)
 */

// Embedded Fallback Menu Data (Ensures instant zero-network rendering)
const BAKERS_MENU_DATA = [
  // 1. Viennoiserie
  {
    id: "croissant-pure-beurre",
    name: "Traditional French Butter Croissant",
    price: 195,
    category: "viennoiserie",
    veg: true,
    egg: true,
    chefSignature: true,
    description: "81 gossamer layers of French AOP butter laminate. Crisp golden honeycomb exterior with an airy, pillowy core.",
    ingredients: ["French T55 Flour", "Charentes-Poitou AOP Butter", "Milk", "Sea Salt", "Brown Sugar"],
    pairingSuggestion: "Pairs sublimely with our Cortado Reserve or Double Ristretto",
    tags: ["Chef Signature", "Best Seller", "Fresh Daily"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pain-au-chocolat",
    name: "Valrhona Pain au Chocolat",
    price: 240,
    category: "viennoiserie",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "Double batons of 64% Valrhona dark chocolate enveloped within golden butter laminate pastry.",
    ingredients: ["AOP Butter Pastry", "Valrhona 64% Dark Batons", "Fleur de Sel"],
    pairingSuggestion: "Ideal with Iced Saffron Latte or Hot Spiced Mocha",
    tags: ["Parisian Classic", "Rich Chocolate"],
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pistachio-escargot",
    name: "Bronte Pistachio & Cardamom Escargot",
    price: 290,
    category: "viennoiserie",
    veg: true,
    egg: true,
    chefSignature: true,
    description: "Spiral puff filled with Sicilian Bronte pistachio frangipane cream and freshly crushed green cardamom pods.",
    ingredients: ["Bronte Pistachio Puree", "Green Cardamom", "AOP Butter Laminate", "Raw Sugar Glaze"],
    pairingSuggestion: "Exquisite alongside Kashmiri Kahwa French Press",
    tags: ["Chef Signature", "Artisanal"],
    image: "https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "almond-croissant",
    name: "Almond & Orange Blossom Twice-Baked Croissant",
    price: 275,
    category: "viennoiserie",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "Twice-baked croissant soaked in orange blossom reduction, loaded with rich almond frangipane and toasted almond slivers.",
    ingredients: ["Kishtwar Sweet Almonds", "Orange Blossom Water", "Frangipane", "Flaked Almonds"],
    pairingSuggestion: "Pairs with Flat White or Ceylon Earl Grey",
    tags: ["Twice Baked", "Customer Favorite"],
    image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kouign-amann",
    name: "Breton Salted Caramel Kouign-Amann",
    price: 260,
    category: "viennoiserie",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "A Breton specialty of caramelized layered pastry, brittle crunch outside with tender butter pockets and Guérande sea salt.",
    ingredients: ["AOP Butter", "Breton Sea Salt", "Caramelized Raw Cane Sugar"],
    pairingSuggestion: "Pairs with Single-Origin Pour Over",
    tags: ["Crisp Caramel", "French Heritage"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cruffin-berry-vanilla",
    name: "Wild Berry & Tahitian Vanilla Cruffin",
    price: 285,
    category: "viennoiserie",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "Flaky hybrid cruffin piped with house-made wild blackberry-raspberry coulis and mascarpone Tahitian vanilla bean cream.",
    ingredients: ["Wild Himalayan Berries", "Tahitian Vanilla Bean", "Whipped Mascarpone", "Pastry Sugar"],
    pairingSuggestion: "Pairs with Iced Peach Cold Brew",
    tags: ["Indulgent", "Weekend Special"],
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
  },

  // 2. Sourdough
  {
    id: "country-sourdough",
    name: "36-Hour Country Levain Boule",
    price: 280,
    category: "sourdough",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "Our signature hearth loaf. Stoneground whole wheat and unbleached grain, long cold-proofed for blistered dark crust and deep umami sour notes.",
    ingredients: ["Heritage Wheat", "Rye Flour", "Natural Wild Levain", "Mineral Spring Water", "Kala Namak Salt"],
    pairingSuggestion: "Serve warm with cultured herb butter or aged cheddar",
    tags: ["Chef Signature", "Vegan", "100% Wild Ferment"],
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "walnut-cranberry-batard",
    name: "Roasted Walnut & Ruby Cranberry Batard",
    price: 340,
    category: "sourdough",
    veg: true,
    egg: false,
    chefSignature: false,
    description: "Fragrant sourdough loaf studded with toasted wild Kishtwar walnuts and tart ruby cranberries.",
    ingredients: ["Wild Levain", "Toasted Walnuts", "Dried Cranberries", "Organic Flour"],
    pairingSuggestion: "Exceptional paired with goat cheese or morning butter",
    tags: ["Vegan", "Nutty & Tart"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rosemary-olive-focaccia",
    name: "Kalamata Olive & Mountain Rosemary Focaccia",
    price: 260,
    category: "sourdough",
    veg: true,
    egg: false,
    chefSignature: false,
    description: "Dimpled olive oil focaccia baked with pitted Kalamata olives, fresh mountain rosemary, garlic confit, and flaky sea salt.",
    ingredients: ["Cold Pressed Extra Virgin Olive Oil", "Kalamata Olives", "Fresh Rosemary", "Garlic Confit"],
    pairingSuggestion: "Delicious with balsamic olive oil dip or tomato soup",
    tags: ["Vegan", "Golden Crust"],
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "brioche-pain-de-mie",
    name: "Golden Butter Brioche Loaf (Pain de Mie)",
    price: 310,
    category: "sourdough",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "Featherlight French brioche loaf enriched with farm eggs and Normandy butter. Impossibly soft crumb with golden bronze crust.",
    ingredients: ["AOP Butter", "Cage-Free Eggs", "Full Cream Milk", "Wheat Flour"],
    pairingSuggestion: "The gold standard for French Toast or tea sandwich slices",
    tags: ["Ultra Soft", "Enriched Classic"],
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "multiseed-rye-boule",
    name: "Seven-Seed Dark Rye Sourdough",
    price: 320,
    category: "sourdough",
    veg: true,
    egg: false,
    chefSignature: false,
    description: "Earthy dark rye sourdough packed with roasted flax, pumpkin seeds, black sesame, sunflower seeds, and cracked wheat.",
    ingredients: ["Dark Rye Flour", "Roasted Flax", "Pumpkin Seeds", "Sunflower Seeds", "Black Sesame"],
    pairingSuggestion: "Pairs with smoked salmon, avocado, or labneh",
    tags: ["Vegan", "High Fiber", "Nutrient Dense"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },

  // 3. Patisserie
  {
    id: "opera-classic",
    name: "Classic French Opera Gateau",
    price: 380,
    category: "patisserie",
    veg: true,
    egg: true,
    chefSignature: true,
    description: "Six precise layers of almond Joconde sponge steeped in espresso liqueur syrup, Valrhona dark ganache, and silky French coffee buttercream.",
    ingredients: ["Almond Joconde", "Espresso Reduction", "Valrhona Ganache", "Coffee Mousseline", "Mirror Glaze"],
    pairingSuggestion: "Pairs with Double Espresso or Highland Single Malt",
    tags: ["Chef Signature", "Parisian Benchmark"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "saffron-pistachio-tartlet",
    name: "Pampore Saffron & Pistachio Tartlet",
    price: 395,
    category: "patisserie",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "Eggless butter sable tart shell filled with Kashmiri saffron diplomate cream, roasted pistachio crunch layer, and edible silver foil.",
    ingredients: ["Kashmiri Pampore Saffron", "Iranian Pistachio Paste", "Vanilla Cream", "Butter Sable"],
    pairingSuggestion: "Pairs with Kashmiri Kahwa French Press",
    tags: ["Chef Signature", "Eggless", "Regional Pride"],
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "valrhona-raspberry-dome",
    name: "Valrhona 70% Dark Guanaja & Raspberry Dome",
    price: 420,
    category: "patisserie",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "Silky dark chocolate mousse made with 70% Guanaja Valrhona cacao, encasing a tart liquid raspberry center over hazelnut dacquoise.",
    ingredients: ["Valrhona 70% Guanaja", "Raspberry Coulis", "Hazelnut Dacquoise", "Cocoa Velvet Spray"],
    pairingSuggestion: "Pairs with Iced Saffron Cold Brew",
    tags: ["Gluten-Free Base", "Decadent"],
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mille-feuille-vanille",
    name: "Tahitian Vanilla Mille-Feuille",
    price: 360,
    category: "patisserie",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "Three layers of caramelized inverse puff pastry piped with velvety Tahitian vanilla bean mousseline cream and delicate dusted icing.",
    ingredients: ["Inverse Puff Pastry", "Tahitian Vanilla Beans", "Mousseline Cream", "Caramelized Sugar"],
    pairingSuggestion: "Pairs with Café au Lait",
    tags: ["Shatteringly Crisp", "French Icon"],
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "paris-brest-praline",
    name: "Piedmont Hazelnut Paris-Brest",
    price: 385,
    category: "patisserie",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "Crown of crisp choux pastry filled with house-made caramelized hazelnut praline mousseline and toasted whole hazelnuts.",
    ingredients: ["Piedmont Hazelnut Praline", "Choux Pastry", "Toasted Hazelnuts", "Praline Crunch"],
    pairingSuggestion: "Pairs with Cortado or Cappuccino",
    tags: ["Nutty & Crisp", "Classic Pastry"],
    image: "https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lemon-meringue-tart",
    name: "Torched Meyer Lemon & Yuzu Tart",
    price: 340,
    category: "patisserie",
    veg: true,
    egg: true,
    chefSignature: false,
    description: "Zesty citrus curd made with Meyer lemons and Japanese yuzu, sitting in a crisp buttery crust and capped with torched Italian meringue peaks.",
    ingredients: ["Meyer Lemon Juice", "Yuzu Extract", "Butter Sable", "Italian Meringue"],
    pairingSuggestion: "Pairs with Iced Citrus Americano",
    tags: ["Zesty & Bright", "Torched Meringue"],
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80"
  },

  // 4. Custom Celebration Cakes
  {
    id: "belgian-dark-truffle-cake",
    name: "Belgian Dark Truffle Reserve Gateau",
    price: 1450,
    category: "cakes",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "Pure luxury chocolate cake. Moist cocoa sponge layered with 64% Belgian dark chocolate silk ganache, finished with edible 24k gold leaf and cocoa dust (500g).",
    ingredients: ["Belgian 64% Dark Chocolate", "Dutch Processed Cocoa", "Dark Ganache", "24K Gold Leaf"],
    pairingSuggestion: "Accompanied with artisanal vanilla bean gelato",
    tags: ["Chef Signature", "100% Eggless", "Bestseller"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "biscoff-salted-caramel",
    name: "Lotus Biscoff & Fleur de Sel Caramel Gateau",
    price: 1550,
    category: "cakes",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "Spiced speculoos biscuit crust, light caramel sponge, whipped Biscoff buttercream, and dripping sea salt butter caramel (500g).",
    ingredients: ["Lotus Biscoff Spread", "Speculoos Crumb", "Fleur de Sel Caramel", "Eggless Caramel Sponge"],
    pairingSuggestion: "Pairs with Cold Brew or Iced Latte",
    tags: ["Chef Signature", "Eggless", "Trend Favorite"],
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kashmiri-kahwa-cake",
    name: "Kashmiri Kahwa & Rose Petal Chiffon Cake",
    price: 1650,
    category: "cakes",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "An ode to Jammu & Kashmir. Delicate chiffon cake infused with green tea kahwa broth, crushed green cardamom, roasted almond slivers, and fragrant rose petal glaze (500g).",
    ingredients: ["Kahwa Infusion", "Organic Dried Rose Petals", "Cardamom", "Kishtwar Almonds"],
    pairingSuggestion: "Pairs with Kashmiri Saffron Tea",
    tags: ["Chef Signature", "Regional Heritage", "Eggless"],
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "red-velvet-mascarpone",
    name: "Red Velvet & Tahitian Mascarpone Crown",
    price: 1400,
    category: "cakes",
    veg: true,
    egg: false,
    chefSignature: false,
    description: "Deep crimson cocoa velvet sponge enveloped with whipped Italian mascarpone and cream cheese frosting, topped with fresh red berries (500g).",
    ingredients: ["Italian Mascarpone", "Cream Cheese", "Cocoa Velvet Sponge", "Fresh Berries"],
    pairingSuggestion: "Pairs with Sparkling Rosé Mocktail",
    tags: ["Eggless", "Celebration Classic"],
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80"
  },

  // 5. Savory Tartines & Cafe Fare
  {
    id: "avocado-burrata-tartine",
    name: "Avocado & Burrata Sourdough Tartine",
    price: 440,
    category: "savory-cafe",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "Toasted slice of our 36-hr country sourdough, hass avocado smash, fresh artisanal burrata, heirloom cherry tomatoes, aged Modena balsamic glaze, and micro arugula.",
    ingredients: ["Country Sourdough", "Hass Avocado", "Fresh Burrata", "Aged Balsamic", "Microgreens"],
    pairingSuggestion: "Pairs with Lavender Honey Latte",
    tags: ["Chef Signature", "Vegetarian", "Healthy Luxury"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "smoked-chicken-croissant",
    name: "Oak-Smoked Chicken & Dijon Flaky Croissant",
    price: 410,
    category: "savory-cafe",
    veg: false,
    egg: true,
    chefSignature: false,
    description: "Our butter croissant sliced and stuffed with tender oak-smoked pulled chicken breast, whole-grain Dijon mustard emulsion, baby gherkins, and melted Emmental.",
    ingredients: ["Smoked Chicken", "French Croissant", "Dijon Mustard", "Emmental Cheese", "Gherkins"],
    pairingSuggestion: "Pairs with Cortado Reserve",
    tags: ["Savory Bestseller", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wild-mushroom-brioche",
    name: "Wild Forest Mushroom & Truffle Brioche Toast",
    price: 390,
    category: "savory-cafe",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "Thick-cut golden brioche toast loaded with pan-seared button, cremini, and shiitake mushrooms, garlic herb butter, white truffle oil, and shaved parmesan.",
    ingredients: ["Golden Brioche", "Truffle Oil", "Shiitake Mushrooms", "Cremini", "Aged Parmesan"],
    pairingSuggestion: "Pairs with Iced Saffron Cold Brew",
    tags: ["Chef Signature", "Vegetarian", "Truffle Aroma"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "quiche-lorraine-pastry",
    name: "Classic French Quiche Lorraine",
    price: 360,
    category: "savory-cafe",
    veg: false,
    egg: true,
    chefSignature: false,
    description: "Deep-dish savory French tart with rich egg custard, smoked turkey rashers, caramelized leeks, and aged Gruyère cheese in a flaky butter crust.",
    ingredients: ["Shortcrust Pastry", "Smoked Turkey", "Gruyère Cheese", "Heavy Cream", "Nutmeg"],
    pairingSuggestion: "Pairs with Americano or French Press",
    tags: ["French Classic", "Non-Veg"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },

  // 6. Coffee & Beverages
  {
    id: "iced-saffron-latte",
    name: "Iced Pampore Saffron Latte",
    price: 290,
    category: "coffee-beverages",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "Double espresso shot combined with our 24-hour saffron syrup made from handpicked Pampore saffron, chilled oat milk, and golden cardamom dust.",
    ingredients: ["Pampore Saffron", "Espresso", "Oat Milk", "Cardamom Dust"],
    pairingSuggestion: "Pairs with Traditional French Butter Croissant",
    tags: ["Chef Signature", "Signature Drink", "Chilled"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kashmiri-kahwa-press",
    name: "Artisanal Kashmiri Kahwa (French Press)",
    price: 240,
    category: "coffee-beverages",
    veg: true,
    egg: false,
    chefSignature: true,
    description: "Hand-plucked whole-leaf green tea steeped tableside with saffron strands, crushed cinnamon, green cardamom, and slivered almonds.",
    ingredients: ["Kashmiri Green Tea", "Saffron Strands", "Cinnamon", "Cardamom", "Almonds"],
    pairingSuggestion: "Pairs with Pistachio & Cardamom Escargot",
    tags: ["Regional Pride", "Hot Infusion"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cortado-reserve",
    name: "Cortado Reserve",
    price: 220,
    category: "coffee-beverages",
    veg: true,
    egg: false,
    chefSignature: false,
    description: "Equal parts rich double ristretto extraction cut with velvety steamed whole milk in a 130ml Gibraltar glass.",
    ingredients: ["Double Ristretto", "Microfoam Milk"],
    pairingSuggestion: "Pairs with Valrhona Pain au Chocolat",
    tags: ["Barista Favorite", "Strong"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lavender-honey-latte",
    name: "French Lavender & Forest Honey Latte",
    price: 260,
    category: "coffee-beverages",
    veg: true,
    egg: false,
    chefSignature: false,
    description: "Aromatic French lavender steeped with wild raw forest honey, pulled espresso, and textured silk foam.",
    ingredients: ["Organic Lavender", "Raw Honey", "Espresso", "Textured Milk"],
    pairingSuggestion: "Pairs with Avocado & Burrata Tartine",
    tags: ["Floral", "Calming"],
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
  }
];

// Category metadata
const CATEGORY_META = {
  all: {
    title: "All Artisanal Offerings",
    tagline: "Handcrafted with French flours, fresh mountain water, and AOP butter."
  },
  viennoiserie: {
    title: "Viennoiserie Fine & Morning Bakes",
    tagline: "81 delicate layers laminated with Charentes-Poitou AOP butter every dawn."
  },
  sourdough: {
    title: "Artisanal Wild Sourdough & Hearth Breads",
    tagline: "Slow 36-hour cold ferment, stone-baked with deep blistered crusts."
  },
  patisserie: {
    title: "Haute Pâtisserie & Petits Gâteaux",
    tagline: "Valrhona Guanaja cocoa, Tahitian vanilla beans, and Pampore saffron."
  },
  cakes: {
    title: "Bespoke Celebration Cakes & Gateaux",
    tagline: "Centerpiece gateaux for Jammu's grandest milestones & celebrations."
  },
  "savory-cafe": {
    title: "Savory Sourdough Tartines & Cafe Fare",
    tagline: "Warm open toasts on fresh stone-hearth sourdough and buttery brioche."
  },
  "coffee-beverages": {
    title: "Specialty Arabica & Botanical Infusions",
    tagline: "Single-origin pour-overs, chilled saffron lattes, and Kashmiri kahwa."
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
  // Compute IST hours
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utc + 3600000 * 5.5);
  const hour = istDate.getHours();
  const minute = istDate.getMinutes();
  const timeNum = hour + minute / 60;

  // Open 08:00 AM (8.0) to 10:30 PM (22.5)
  const isOpen = timeNum >= 8.0 && timeNum < 22.5;

  if (isOpen) {
    badgeEl.innerHTML = `<span class="status-dot"></span><span class="status-label">Open Now &bull; Closes 10:30 PM</span>`;
  } else {
    badgeEl.style.background = "rgba(239, 68, 68, 0.1)";
    badgeEl.style.borderColor = "rgba(239, 68, 68, 0.3)";
    badgeEl.style.color = "#f87171";
    badgeEl.innerHTML = `<span class="status-dot" style="background: #ef4444; box-shadow: 0 0 8px #ef4444;"></span><span class="status-label">Closed &bull; Opens 08:00 AM</span>`;
  }
}

// Render Menu Cards
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  const filtered = BAKERS_MENU_DATA.filter((item) => {
    // Category check
    if (currentCategory !== "all" && item.category !== currentCategory) {
      return false;
    }

    // Dietary filter check
    if (currentDietFilter === "veg" && !item.veg) return false;
    if (currentDietFilter === "eggless" && item.egg) return false;
    if (currentDietFilter === "signature" && !item.chefSignature) return false;
    if (currentDietFilter === "savory" && item.category !== "savory-cafe") return false;

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
          ${!item.egg ? '<span class="card-badge badge-eggless">🥚 100% Eggless</span>' : ''}
          ${item.veg ? '<span class="card-badge badge-veg">🌱 Pure Veg</span>' : ''}
        </div>
      </div>
      <div class="menu-card-body">
        <div class="card-title-row">
          <h4 class="card-item-title">${item.name}</h4>
          <span class="card-price">₹${item.price}</span>
        </div>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer-row">
          <span class="card-tag-pill">${item.tags[0] || 'Artisanal'}</span>
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
  const dish = BAKERS_MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  currentModalDish = dish;

  document.getElementById("dishModalImg").src = dish.image;
  document.getElementById("dishModalImg").alt = dish.name;
  document.getElementById("dishModalCategory").textContent = CATEGORY_META[dish.category]?.title || "Artisanal Special";
  document.getElementById("dishModalTitle").textContent = dish.name;
  document.getElementById("dishModalPrice").textContent = `₹${dish.price}`;
  document.getElementById("dishModalDesc").textContent = dish.description;
  document.getElementById("dishModalPairing").textContent = dish.pairingSuggestion;

  // Badges
  const badgesWrap = document.getElementById("dishModalBadges");
  badgesWrap.innerHTML = `
    ${dish.chefSignature ? '<span class="card-badge badge-signature">★ Chef Signature</span>' : ''}
    ${!dish.egg ? '<span class="card-badge badge-eggless">🥚 100% Eggless</span>' : ''}
    ${dish.veg ? '<span class="card-badge badge-veg">🌱 Vegetarian</span>' : '<span class="card-badge" style="background:#ef4444; color:#fff">Non-Vegetarian</span>'}
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
  const msg = `Bonjour Bakers @ Us Jammu! I am interested in ordering / inquiring about the "${currentModalDish.name}" (₹${currentModalDish.price}).`;
  const url = `https://wa.me/919419188204?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// Reservation Modal Logic
function openReservationModal(prefExperience) {
  const modal = document.getElementById("reserveModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  if (prefExperience) {
    const notesInput = document.getElementById("resNotes");
    if (notesInput && !notesInput.value) {
      notesInput.value = prefExperience;
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

function toggleExperienceType(val) {
  const seatingGroup = document.getElementById("resSeating");
  if (!seatingGroup) return;
  if (val.includes("Bespoke Cake")) {
    seatingGroup.value = "Artisanal Pastry Counter";
  }
}

function handleReservationSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("resName").value.trim();
  const phone = document.getElementById("resPhone").value.trim();
  const experience = document.getElementById("resType").value;
  const seating = document.getElementById("resSeating").value;
  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;
  const guests = document.getElementById("resGuests").value;
  const notes = document.getElementById("resNotes").value.trim();

  // Generate Reference Code
  const refCode = "#BAK-" + Math.floor(1000 + Math.random() * 9000);

  // Populate Confirmation Ticket
  document.getElementById("ticketRefCode").textContent = refCode;
  document.getElementById("ticketGuestName").textContent = name;
  document.getElementById("ticketExperience").textContent = experience;
  document.getElementById("ticketDate").textContent = date;
  document.getElementById("ticketTime").textContent = time;
  document.getElementById("ticketGuests").textContent = guests;
  document.getElementById("ticketSeating").textContent = seating;

  // WhatsApp Send Link
  const waMsg = `*Table / Atelier Booking Confirmation - Bakers @ Us Jammu*\n\nReference: ${refCode}\nGuest: ${name}\nPhone: ${phone}\nExperience: ${experience}\nDate: ${date}\nTime: ${time}\nParty: ${guests}\nSeating: ${seating}\nNotes: ${notes || "None"}\n\nVenue: Bakers @ Us, Sector 1, Channi Himmat, Jammu.`;
  const waUrl = `https://wa.me/919419188204?text=${encodeURIComponent(waMsg)}`;
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
