/**
 * BREWBERRYS JAMMU — CLIENT APPLICATION LOGIC
 * Zero Dependencies • Fast Vanilla JS • Accessible Micro-Interactions
 */

// Embedded Menu Data for Instant Offline/Local Rendering
const MENU_DATA = [
  {
    id: "bb-c01",
    name: "Signature Irish Cold Coffee",
    price: 199,
    category: "specialty-coffee",
    categoryName: "Specialty Coffee",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Double espresso shot shaken with Irish cream extract, rich chilled dairy, and vanilla bean froth.",
    ingredients: "Chikmagalur Arabica Double Shot, Non-alcoholic Irish Cream, Condensed Milk, Whole Milk, Cocoa Dust",
    calories: "210 kcal",
    tags: ["Chilled", "Sweet & Rich", "Cafe Icon"],
    pairing: "Pairs perfectly with Truffle Cheese Fries or Nutella Croissant",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-c02",
    name: "Roasted Hazelnut Frappe",
    price: 229,
    category: "specialty-coffee",
    categoryName: "Specialty Coffee",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Slow-roasted Piedmont hazelnut puree blended with ice-cold espresso and topped with whipped mascarpone.",
    ingredients: "Espresso Blend, Roasted Hazelnut Paste, Cream, Whipped Topping, Crushed Roasted Hazelnuts",
    calories: "285 kcal",
    tags: ["Nutty", "Whipped Cream", "Bestseller"],
    pairing: "Best savored with Classic Cheesy Garlic Bread",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-c03",
    name: "Himalayan Pour-Over (V60)",
    price: 189,
    category: "specialty-coffee",
    categoryName: "Specialty Coffee",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Hand-poured single origin filter brew highlighting notes of wild berries, raw cane sugar, and citrus zest.",
    ingredients: "Light-Medium Roast Single Origin Arabica, Mineral Spring Water (200ml)",
    calories: "5 kcal",
    tags: ["Black Coffee", "Pour-Over", "Artisan"],
    pairing: "Excellent with Grilled Smoked Chicken Panini",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-c04",
    name: "Spanish Cortado Latte",
    price: 169,
    category: "specialty-coffee",
    categoryName: "Specialty Coffee",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Equal parts intense ristretto espresso and warm silky microfoam milk for a balanced, bold morning kick.",
    ingredients: "Double Ristretto, Steamed Whole Milk, Microfoam",
    calories: "95 kcal",
    tags: ["Hot", "Bold", "Low Acidity"],
    pairing: "Try with Cinnamon Sugar Waffle Pop",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-c05",
    name: "Classic 18-Hour Cold Brew Tonic",
    price: 209,
    category: "specialty-coffee",
    categoryName: "Specialty Coffee",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Steeped cold for 18 hours in Jammu spring water, served over crystal clear ice with effervescent tonic and lime wheel.",
    ingredients: "18-Hour Arabica Cold Brew, Artisanal Indian Tonic Water, Rosemary Sprig, Dehydrated Lime",
    calories: "45 kcal",
    tags: ["Refreshing", "Fizzy", "Zero Dairy"],
    pairing: "Complements Peri-Peri Crispy Paneer Burger",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-s01",
    name: "The Nutella Volcano Freak Shake",
    price: 319,
    category: "monster-shakes",
    categoryName: "Monster & Freak Shakes",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Thick Nutella milkshake rimmed with chocolate chips, crowned with a warm walnut brownie, chocolate wafer stick, and chocolate syringe.",
    ingredients: "Pure Nutella, Chocolate Gelato, Whole Milk, Fresh Fudge Brownie, Wafer Roll, Chocolate Sauce",
    calories: "520 kcal",
    tags: ["Signature", "Overloaded", "Decadent"],
    pairing: "Must-have celebration shake for birthdays and reunions",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-s02",
    name: "Lotus Biscoff Crunch Shake",
    price: 329,
    category: "monster-shakes",
    categoryName: "Monster & Freak Shakes",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Caramelized Lotus Biscoff butter blended with vanilla bean cream, topped with crushed speculoos biscuits and salted caramel drizzle.",
    ingredients: "Lotus Biscoff Spread, Speculoos Biscuits, Vanilla Custard Cream, Sea Salt Caramel",
    calories: "490 kcal",
    tags: ["Caramel", "Biscoff", "Crowd Favorite"],
    pairing: "Pairs with Crispy Mexican Loaded Nachos",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-s03",
    name: "Belgian Dark Truffle Shake",
    price: 289,
    category: "monster-shakes",
    categoryName: "Monster & Freak Shakes",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Intense 70% dark Belgian cocoa melted into frozen cream, finished with bittersweet shaved chocolate curl rosettes.",
    ingredients: "70% Dark Callebaut Cocoa, Dark Ganache, Heavy Cream, Shaved Chocolate Flakes",
    calories: "410 kcal",
    tags: ["Rich Dark", "Low Sweetness", "Chocoholic"],
    pairing: "Goes well with Smoked Chicken Smashed Burger",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-s04",
    name: "Kashmir Strawberry Velvet Shake",
    price: 279,
    category: "monster-shakes",
    categoryName: "Monster & Freak Shakes",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Fresh hill strawberry compote swirled with sweet cream, white chocolate drizzle, and strawberry pop crunch.",
    ingredients: "Hill Strawberry Compote, White Chocolate Sauce, Whole Cream, Whipped Swirl",
    calories: "380 kcal",
    tags: ["Fruity", "Creamy", "Pastel"],
    pairing: "Pair with Four Cheese Garlic Pull-Apart Bread",
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-r01",
    name: "Apsara Kaffir Lime & Mint Mojito",
    price: 179,
    category: "refreshers-mojitos",
    categoryName: "Refreshers & Mojitos",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Muddled garden mint, kaffir lime zest, raw demerara sugar, sparkling club soda, and crushed glacier ice.",
    ingredients: "Fresh Spearmint, Kaffir Lime Leaves, Demerara Sugar, Sparkling Soda, Crushed Ice",
    calories: "85 kcal",
    tags: ["Zero Alcohol", "Zesty", "Hydrating"],
    pairing: "Light accompaniment to Truffle Fries",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-r02",
    name: "Jammu Wild Peach Iced Tea",
    price: 169,
    category: "refreshers-mojitos",
    categoryName: "Refreshers & Mojitos",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Slow-brewed Assam black tea infused with natural peach nectar, citrus bitters, and fresh peach slices.",
    ingredients: "Assam Orthodox Black Tea, Natural Peach Puree, Fresh Mint, Lemon Slices",
    calories: "95 kcal",
    tags: ["Iced Tea", "Fruity", "Summer Hit"],
    pairing: "Crisp pairing for Peri-Peri Chicken Pizza",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-r03",
    name: "Blue Curacao Citrus Fizz",
    price: 189,
    category: "refreshers-mojitos",
    categoryName: "Refreshers & Mojitos",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Vibrant Caribbean blue citrus cordial charged with Sprite, lemon tang, and sparkling water.",
    ingredients: "Blue Curacao Syrup (Non-Alcoholic), Sprite, Lemon Juice, Mint Leaves, Black Salt",
    calories: "110 kcal",
    tags: ["Photogenic", "Sweet & Tangy"],
    pairing: "Great with Spicy Farmhouse Pizza",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-r04",
    name: "Passion Fruit & Basil Cooler",
    price: 199,
    category: "refreshers-mojitos",
    categoryName: "Refreshers & Mojitos",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Tropical passion fruit pulp shaken with fragrant sweet basil seeds, ginger hint, and chilled apple juice.",
    ingredients: "Passion Fruit Pulp, Sweet Basil Seeds (Sabja), Clarified Apple Juice, Ginger Essence",
    calories: "90 kcal",
    tags: ["Exotic", "Cooling", "Detox"],
    pairing: "Pairs with Pesto Mozzarella Panini",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-b01",
    name: "Peri-Peri Crispy Paneer Burger",
    price: 249,
    category: "burgers-melts",
    categoryName: "Artisanal Burgers & Melts",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Golden panko-crusted cottage cheese patty tossed in fiery peri-peri spices, layered with crunchy purple slaw, gherkins, and garlic aioli in toasted brioche.",
    ingredients: "Fresh Malai Paneer, Panko Crust, In-House Peri Peri Spice, Red Cabbage Slaw, Garlic Mayo, Butter Brioche",
    calories: "460 kcal",
    tags: ["Crispy", "Spicy", "Youth Bestseller"],
    pairing: "Enjoy with Irish Cold Coffee",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-b02",
    name: "Smoked Chicken Smashed Burger",
    price: 279,
    category: "burgers-melts",
    categoryName: "Artisanal Burgers & Melts",
    veg: false,
    bestseller: true,
    chefSpecial: false,
    description: "Double grilled minced chicken patties smashed on the griddle with cheddar cheese melt, caramelized balsamic onions, and smoky BBQ relish.",
    ingredients: "Smoked Minced Chicken, English Cheddar, Caramelized Onions, Smoke Mayo, Brioche Bun",
    calories: "510 kcal",
    tags: ["Smoky", "Double Patty", "Juicy"],
    pairing: "Pairs with Belgian Dark Truffle Shake",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-b03",
    name: "Pesto Sundried Tomato Panini",
    price: 239,
    category: "burgers-melts",
    categoryName: "Artisanal Burgers & Melts",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Fresh walnut basil pesto, buffalo mozzarella, sundried tomatoes, and balsamic reduction pressed crisp inside Italian focaccia.",
    ingredients: "Fresh Basil Pesto, Buffalo Mozzarella, Sundried Tomatoes, Olive Oil Focaccia, Aged Balsamic",
    calories: "390 kcal",
    tags: ["Italian", "Crisp Pressed", "Vegetarian"],
    pairing: "Wonderful with Himalayan Pour-Over",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-b04",
    name: "Barbecue Pulled Chicken Melt",
    price: 269,
    category: "burgers-melts",
    categoryName: "Artisanal Burgers & Melts",
    veg: false,
    bestseller: false,
    chefSpecial: false,
    description: "Slow-braised pulled chicken tossed in hickory BBQ sauce, pressed between seeded sourdough with double melted Monterey Jack cheese.",
    ingredients: "Pulled Herb Chicken, Hickory Smoke BBQ, Monterey Jack, Pickled Jalapeños, Artisan Sourdough",
    calories: "440 kcal",
    tags: ["Cheesy", "Hickory Smoke", "Comfort"],
    pairing: "Great with Wild Peach Iced Tea",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-p01",
    name: "Gandhi Nagar Special Farmhouse Pizza",
    price: 329,
    category: "pizzas",
    categoryName: "Stone-Baked Pizzas",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "San Marzano marinara, 100% mozzarella, sweet corn, bell peppers, button mushrooms, black olives, and fresh red onions on thin crisp crust.",
    ingredients: "Italian Plum Tomato Sauce, Fior Di Latte Mozzarella, Corn, Capsicum, Mushrooms, Olives, Oregano",
    calories: "580 kcal (Whole)",
    tags: ["10-Inch", "Thin Crust", "Classic"],
    pairing: "Ideal for sharing with 2 iced lattes",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-p02",
    name: "Fiery Peri-Peri Pollo Pizza",
    price: 369,
    category: "pizzas",
    categoryName: "Stone-Baked Pizzas",
    veg: false,
    bestseller: true,
    chefSpecial: true,
    description: "Char-grilled peri-peri chicken chunks, spicy jalapeños, smoked paprika, roasted garlic, and stringy mozzarella.",
    ingredients: "Spicy Peri Marinated Chicken, Jalapeños, Crushed Red Chilis, Mozzarella, Fresh Basil",
    calories: "640 kcal (Whole)",
    tags: ["Spicy", "Wood Style", "Hot"],
    pairing: "Cools down with Kaffir Lime Mojito",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-p03",
    name: "Quattro Formaggi (Four Cheese) Pizza",
    price: 349,
    category: "pizzas",
    categoryName: "Stone-Baked Pizzas",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "A decadent molten blend of mozzarella, English cheddar, creamy gouda, and ricotta dollops with rosemary garlic honey drizzle.",
    ingredients: "Mozzarella, Cheddar, Gouda, Whipped Ricotta, Rosemary Hot Honey",
    calories: "660 kcal (Whole)",
    tags: ["Four Cheeses", "Gourmet", "Indulgent"],
    pairing: "Pairs with Spanish Cortado Latte",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-p04",
    name: "Chipotle Paneer Tikka Pizza",
    price: 339,
    category: "pizzas",
    categoryName: "Stone-Baked Pizzas",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Tandoori-spiced paneer cubes, roasted bell peppers, crunchy red onions, and smoky Mexican chipotle cream drizzle.",
    ingredients: "Tandoori Paneer, Chipotle Crema, Red Capsicum, Onion, Mozzarella Cheese",
    calories: "610 kcal (Whole)",
    tags: ["Fusion", "Smoky", "Youth Favorite"],
    pairing: "Pairs with Roasted Hazelnut Frappe",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-ps01",
    name: "Truffled Mushroom Alfredo Penne",
    price: 289,
    category: "pasta-bowls",
    categoryName: "Handcrafted Pastas",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Slow-simmered rich parmesan cream sauce, sautéed button mushrooms, white truffle oil mist, and fresh cracked black pepper.",
    ingredients: "Durum Wheat Penne, Fresh Dairy Cream, Aged Parmesan, Sautéed Mushrooms, White Truffle Oil",
    calories: "470 kcal",
    tags: ["Creamy", "Truffle", "Comfort"],
    pairing: "Comes served with 2 slices of garlic baguette",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-ps02",
    name: "Spicy Arrabbiata Grilled Chicken Fusilli",
    price: 319,
    category: "pasta-bowls",
    categoryName: "Handcrafted Pastas",
    veg: false,
    bestseller: true,
    chefSpecial: false,
    description: "Zesty garlic-chili San Marzano tomato ragu tossed with spirals of fusilli pasta, tender grilled chicken breast, and kalamata olives.",
    ingredients: "Italian Tomatoes, Fresh Garlic, Birds Eye Chili, Olive Oil, Herb-Grilled Chicken, Kalamata Olives",
    calories: "420 kcal",
    tags: ["Tangy & Spicy", "High Protein", "Italian"],
    pairing: "Pairs with Blue Curacao Citrus Fizz",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-ps03",
    name: "Sun-Kissed Pink Sauce Penne",
    price: 299,
    category: "pasta-bowls",
    categoryName: "Handcrafted Pastas",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "The golden union of fiery arrabbiata and velvety alfredo cream sauce, tossed with broccoli florets, baby corn, and mozzarella stretch.",
    ingredients: "Mama Rosa Pink Sauce, Penne Rigate, Steamed Broccoli, Sweet Corn, Mozzarella Melt",
    calories: "450 kcal",
    tags: ["Creamy & Tangy", "Cheesy", "Popular"],
    pairing: "Served with warm toasted garlic bread",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-ps04",
    name: "Smoked Basil Pesto Chicken Penne",
    price: 329,
    category: "pasta-bowls",
    categoryName: "Handcrafted Pastas",
    veg: false,
    bestseller: false,
    chefSpecial: true,
    description: "Aromatic Genovese basil pesto emulsion with roasted pine nuts, tender chicken strips, cherry tomatoes, and grated parmesan shavings.",
    ingredients: "Genovese Basil Pesto, Extra Virgin Olive Oil, Shredded Roast Chicken, Blistered Cherry Tomatoes, Parmesan",
    calories: "460 kcal",
    tags: ["Aromatic", "Pesto", "Chef's Cut"],
    pairing: "Pairs with Cold Brew Tonic",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-b05",
    name: "Overloaded Mexican Salsa Nachos",
    price: 229,
    category: "small-bites",
    categoryName: "Small Bites & Nachos",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Crispy corn tortilla triangles layered with warm liquid cheddar cheese, freshly diced pico de gallo salsa, sliced jalapeños, and sour cream.",
    ingredients: "Corn Tortilla Chips, Liquid Cheddar Sauce, Tomato Salsa Roja, Jalapeño Rings, Sour Cream",
    calories: "380 kcal",
    tags: ["Crunchy", "Shareable", "Party Hit"],
    pairing: "Perfect for table-side gaming and sharing",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-b06",
    name: "Cheesy Truffle Crinkle Fries",
    price: 199,
    category: "small-bites",
    categoryName: "Small Bites & Nachos",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Crispy golden crinkle cut potato fries tossed in aromatic truffle salt, drizzled with warm molten cheese and fresh chopped parsley.",
    ingredients: "Crinkle Cut Potatoes, Aromatic Truffle Essence, Melted Cheese Sauce, Paprika Dust, Parsley",
    calories: "340 kcal",
    tags: ["Crispy", "Cheesy", "Must Try"],
    pairing: "Best companion with any brewberrys burger",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-b07",
    name: "Four Cheese Garlic Stuffed Bread",
    price: 219,
    category: "small-bites",
    categoryName: "Small Bites & Nachos",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Freshly baked artisan baguette scored and packed with roasted garlic compound butter, parsley, and gooey mozzarella pull.",
    ingredients: "Artisan French Loaf, Roasted Confit Garlic, Fresh Herbs Butter, Stretched Mozzarella",
    calories: "360 kcal",
    tags: ["Garlic Butter", "Cheese Pull", "Warm"],
    pairing: "Dips effortlessly into pasta sauces",
    image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bb-b08",
    name: "Crisp Belgian Nutella Waffle Pop",
    price: 189,
    category: "small-bites",
    categoryName: "Small Bites & Nachos",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Freshly iron-pressed waffle pop on a wooden stick, drowned in warm Nutella, toasted almond flakes, and rainbow sprinkles.",
    ingredients: "Belgian Waffle Batter, Pure Nutella, Roasted Flaked Almonds, Dark Chocolate Drizzle",
    calories: "310 kcal",
    tags: ["Sweet Bite", "Waffle Pop", "Dessert"],
    pairing: "End your coffee session on a sweet note",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
  }
];

// Application State
const state = {
  currentCategory: "all",
  searchQuery: "",
  dietaryFilter: "all", // 'all', 'veg', 'nonveg', 'chef'
  selectedDish: null
};

// DOM References
document.addEventListener("DOMContentLoaded", () => {
  initLiveHours();
  initCategoryTabs();
  initSearch();
  initDietaryToggles();
  renderMenu();
  initModals();
  initReservationForm();
});

/**
 * 1. LIVE OPEN/CLOSED INDICATOR
 * Operating hours: 10:00 AM to 11:00 PM (10:00 - 23:00)
 */
function initLiveHours() {
  const statusDots = document.querySelectorAll(".status-indicator");
  const statusTexts = document.querySelectorAll(".live-status-text");

  const now = new Date();
  const currentHour = now.getHours();

  // 10:00 AM to 11:00 PM (23:00)
  const isOpen = currentHour >= 10 && currentHour < 23;

  statusDots.forEach(dot => {
    if (isOpen) {
      dot.classList.remove("closed");
    } else {
      dot.classList.add("closed");
    }
  });

  statusTexts.forEach(txt => {
    if (isOpen) {
      txt.textContent = "Open Now • Closes at 11:00 PM";
    } else {
      txt.textContent = "Closed Now • Opens tomorrow at 10:00 AM";
    }
  });
}

/**
 * 2. CATEGORY TABS
 */
function initCategoryTabs() {
  const tabs = document.querySelectorAll(".category-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.currentCategory = tab.dataset.category;
      renderMenu();
    });
  });
}

/**
 * 3. SEARCH WITH DEBOUNCE
 */
function initSearch() {
  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");

  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.classList.toggle("visible", state.searchQuery.length > 0);
      }
      renderMenu();
    }, 180);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearBtn.classList.remove("visible");
      renderMenu();
      searchInput.focus();
    });
  }
}

/**
 * 4. DIETARY FILTER TOGGLES
 */
function initDietaryToggles() {
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.dietaryFilter = btn.dataset.filter;
      renderMenu();
    });
  });
}

/**
 * 5. MENU RENDERING PIPELINE
 */
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const feedbackLine = document.getElementById("menuFeedbackCount");
  if (!grid) return;

  const filtered = MENU_DATA.filter(item => {
    // Category check
    if (state.currentCategory !== "all" && item.category !== state.currentCategory) {
      return false;
    }

    // Dietary check
    if (state.dietaryFilter === "veg" && !item.veg) return false;
    if (state.dietaryFilter === "nonveg" && item.veg) return false;
    if (state.dietaryFilter === "chef" && !item.chefSpecial) return false;

    // Search query check
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchIngr = item.ingredients.toLowerCase().includes(q);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchIngr && !matchTags) {
        return false;
      }
    }

    return true;
  });

  if (feedbackLine) {
    feedbackLine.textContent = `Showing ${filtered.length} of ${MENU_DATA.length} handcrafted dishes & beverages`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-menu-state">
        <h3 class="empty-title">No matching cafe items found</h3>
        <p class="empty-desc">We couldn't find anything matching your filter criteria. Try resetting filters or search terms.</p>
        <button class="btn-primary-sm" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card" onclick="openDishModal('${item.id}')" tabindex="0" role="button" aria-label="View details for ${item.name}">
      <div class="card-thumb-wrap">
        <img class="card-thumb-img" src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="card-top-badges">
          <span class="badge-dietary ${item.veg ? 'veg' : 'nonveg'}">
            ${item.veg ? '● VEG' : '▲ NON-VEG'}
          </span>
          <div>
            ${item.bestseller ? '<span class="badge-bestseller">BESTSELLER</span> ' : ''}
            ${item.chefSpecial ? '<span class="badge-chef">★ CHEF SIGNATURE</span>' : ''}
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-header-line">
          <h3 class="item-title">${item.name}</h3>
          <span class="item-price">₹${item.price}</span>
        </div>
        <p class="item-desc">${item.description}</p>
        <div class="card-footer-line">
          <span>${item.categoryName}</span>
          <span class="btn-view-item">
            <span>Explore Dish</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </article>
  `).join("");
}

function resetFilters() {
  state.currentCategory = "all";
  state.searchQuery = "";
  state.dietaryFilter = "all";

  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";

  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) clearBtn.classList.remove("visible");

  document.querySelectorAll(".category-tab").forEach((t, i) => {
    t.classList.toggle("active", i === 0);
  });
  document.querySelectorAll(".toggle-btn").forEach((b, i) => {
    b.classList.toggle("active", i === 0);
  });

  renderMenu();
}

/**
 * 6. MODALS MANAGEMENT
 */
function initModals() {
  // Close modals on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Close modals on clicking backdrop
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });
}

function closeAllModals() {
  document.querySelectorAll(".modal-backdrop").forEach(b => b.classList.remove("open"));
  document.body.style.overflow = "";
}

function openDishModal(dishId) {
  const item = MENU_DATA.find(d => d.id === dishId);
  if (!item) return;

  state.selectedDish = item;
  const modal = document.getElementById("dishModal");
  if (!modal) return;

  document.getElementById("dishModalImg").src = item.image;
  document.getElementById("dishModalImg").alt = item.name;
  document.getElementById("dishModalCategory").textContent = item.categoryName;
  document.getElementById("dishModalTitle").textContent = item.name;
  document.getElementById("dishModalPrice").textContent = `₹${item.price}`;
  document.getElementById("dishModalDesc").textContent = item.description;
  document.getElementById("dishModalIngredients").textContent = item.ingredients;
  document.getElementById("dishModalCalories").textContent = item.calories;
  document.getElementById("dishModalPairing").textContent = item.pairing;

  const dietBadge = document.getElementById("dishModalDietBadge");
  dietBadge.className = `badge-dietary ${item.veg ? 'veg' : 'nonveg'}`;
  dietBadge.textContent = item.veg ? '● 100% PURE VEGETARIAN' : '▲ NON-VEGETARIAN';

  const tagsContainer = document.getElementById("dishModalTags");
  tagsContainer.innerHTML = item.tags.map(t => `<span class="dish-tag-chip">#${t}</span>`).join("");

  const waBtn = document.getElementById("dishModalOrderBtn");
  if (waBtn) {
    const text = encodeURIComponent(`Hello Brewberrys Jammu! I'd like to ask about / order the "${item.name}" (₹${item.price}) seen on your digital menu.`);
    waBtn.href = `https://wa.me/919419211488?text=${text}`;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDishModal() {
  const modal = document.getElementById("dishModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * 7. RESERVATION SYSTEM & CONFIRMATION
 */
function openReservationModal() {
  closeAllModals();
  const modal = document.getElementById("reservationModal");
  const form = document.getElementById("reservationForm");
  const confirmCard = document.getElementById("resConfirmationCard");

  if (form) {
    form.style.display = "flex";
  }
  if (confirmCard) {
    confirmCard.classList.remove("visible");
  }

  // Set default min date to today
  const dateInput = document.getElementById("resDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    if (!dateInput.value) dateInput.value = today;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeReservationModal() {
  const modal = document.getElementById("reservationModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function initReservationForm() {
  const form = document.getElementById("reservationForm");
  const confirmCard = document.getElementById("resConfirmationCard");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("resName").value.trim();
    const phone = document.getElementById("resPhone").value.trim();
    const date = document.getElementById("resDate").value;
    const time = document.getElementById("resTime").value;
    const guests = document.getElementById("resGuests").value;
    const occasion = document.getElementById("resOccasion").value;
    const notes = document.getElementById("resNotes").value.trim();

    if (!name || !phone || !date || !time) {
      showToast("Please fill in all required booking details.");
      return;
    }

    // Generate Jammu Booking Reference ID
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `BB-JAMMU-${randomCode}`;

    // Populate Confirmation Card
    document.getElementById("confirmCodeVal").textContent = bookingId;
    document.getElementById("confirmName").textContent = name;
    document.getElementById("confirmDateTime").textContent = `${formatDate(date)} at ${time}`;
    document.getElementById("confirmGuests").textContent = `${guests} Guests (${occasion})`;
    document.getElementById("confirmPhone").textContent = phone;

    // Setup WhatsApp sync button
    const waConfirmBtn = document.getElementById("resWaConfirmBtn");
    if (waConfirmBtn) {
      const waMsg = encodeURIComponent(
        `*Table Reservation Confirmation - Brewberrys Cafe Jammu*\n\n` +
        `• Booking ID: ${bookingId}\n` +
        `• Name: ${name}\n` +
        `• Date & Time: ${formatDate(date)} at ${time}\n` +
        `• Party Size: ${guests} Guests\n` +
        `• Occasion: ${occasion}\n` +
        `• Special Request: ${notes || "None"}\n\n` +
        `Please confirm our table reservation at Apsara Road, Gandhi Nagar!`
      );
      waConfirmBtn.href = `https://wa.me/919419211488?text=${waMsg}`;
    }

    // Toggle view
    form.style.display = "none";
    confirmCard.classList.add("visible");
    showToast("Booking Request Registered! Check confirmation card.");
  });
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" });
  } catch (e) {
    return dateStr;
  }
}

/**
 * 8. TOAST NOTIFICATIONS
 */
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// Global Exports for inline HTML click handlers
window.openDishModal = openDishModal;
window.closeDishModal = closeDishModal;
window.openReservationModal = openReservationModal;
window.closeReservationModal = closeReservationModal;
window.resetFilters = resetFilters;
