/**
 * MR BEAN CAFE & RESTAURANT — CLIENT APPLICATION LOGIC
 * Zero Dependencies • Fast Vanilla JS • Accessible Micro-Interactions
 */

// Embedded Menu Data for Instant Offline/Local Rendering
const MENU_DATA = [
  {
    id: "mb-w01",
    name: "Classic Nutella Drizzle Belgian Waffle",
    price: 239,
    category: "belgian-waffles",
    categoryName: "Belgian Waffles & Sweets",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Golden malted waffle with deep crispy pockets, smothered in warm imported Nutella, toasted hazelnut crunch, and chocolate pearls.",
    ingredients: "Crisp Belgian Malt Batter, Warm Nutella, Roasted Crushed Hazelnuts, Belgian Chocolate Pearls",
    calories: "390 kcal",
    tags: ["Nutella", "Crisp Pockets", "House Classic"],
    pairing: "Pairs blissfully with Hazelnut Espresso Frappe",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-w02",
    name: "Triple Belgian Chocolate Overload Waffle",
    price: 269,
    category: "belgian-waffles",
    categoryName: "Belgian Waffles & Sweets",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Dark chocolate waffle base layered with melted milk chocolate, dark Belgian ganache, and white chocolate shavings with vanilla gelato.",
    ingredients: "Callebaut Cocoa Waffle, Milk & Dark Ganache, White Chocolate Shavings, Gourmet Vanilla Gelato",
    calories: "460 kcal",
    tags: ["Triple Chocolate", "Gelato", "Indulgence"],
    pairing: "Best enjoyed after a savory sizzler",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-w03",
    name: "Wild Berry & Whipped Cream Waffle",
    price: 249,
    category: "belgian-waffles",
    categoryName: "Belgian Waffles & Sweets",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Crisp golden waffle crowned with wild blueberry and raspberry compote, cloud-like Chantilly cream, and powdered sugar dust.",
    ingredients: "Belgian Batter, Wild Forest Berries, Natural Berry Compote, Fresh Whipped Chantilly Cream",
    calories: "320 kcal",
    tags: ["Fruity", "Light", "Tart & Sweet"],
    pairing: "Pairs with Jammu Kesar Rose Mojito",
    image: "https://images.unsplash.com/photo-1459780248984-ae74842ba65c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-w04",
    name: "Lotus Biscoff & Salted Caramel Waffle",
    price: 279,
    category: "belgian-waffles",
    categoryName: "Belgian Waffles & Sweets",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Warm speculoos waffle drizzled generously with smooth Lotus Biscoff spread, crushed spiced cookies, and Himalayan sea salt caramel.",
    ingredients: "Malted Waffle, Lotus Biscoff Cream, Crushed Lotus Cookies, Artisanal Salted Caramel Sauce",
    calories: "440 kcal",
    tags: ["Biscoff", "Caramel", "Trendsetter"],
    pairing: "Pairs with Iced Vanilla Latte",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-sz01",
    name: "Mr Bean Signature Paneer Shashlik Sizzler",
    price: 359,
    category: "cast-iron-sizzlers",
    categoryName: "Smoking Sizzlers",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Skewered tandoori marinated cottage cheese, charred bell peppers, and sweet onions served over a sizzling bed of garlic butter herb rice, crinkle fries, and smoky black pepper demiglace.",
    ingredients: "Marinated Cottage Cheese, Tri-Color Bell Peppers, Butter Herb Rice, Crinkle Fries, Smoky Brown Sauce",
    calories: "590 kcal",
    tags: ["Sizzling Skillet", "Full Meal", "Veg Signature"],
    pairing: "The crowd-pleasing dinner centerpiece of Shastri Nagar",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-sz02",
    name: "Hickory BBQ Smoked Chicken Sizzler",
    price: 389,
    category: "cast-iron-sizzlers",
    categoryName: "Smoking Sizzlers",
    veg: false,
    bestseller: true,
    chefSpecial: true,
    description: "Succulent boneless chicken breast char-grilled in hickory smoke glaze, presented sizzling over buttery parsley rice, sautéed baby corn, steamed greens, and spiced fries.",
    ingredients: "Prime Chicken Fillets, Hickory Smoke BBQ Glaze, Parsley Butter Rice, Seasoned Crinkle Cut Fries, Charred Greens",
    calories: "640 kcal",
    tags: ["High Protein", "Smoking Sizzler", "Non-Veg Hit"],
    pairing: "Pairs smoothly with Green Apple Mint Fizz",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-sz03",
    name: "Crispy Veg Patty Sizzler with Mushroom Jus",
    price: 339,
    category: "cast-iron-sizzlers",
    categoryName: "Smoking Sizzlers",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Two crispy herb potato-corn patties sizzled with buttery noodles, tossed oriental veggies, and roasted wild mushroom cream jus.",
    ingredients: "Crisp Potato & Herb Cutlets, Sautéed Hakka Noodles, Sliced Button Mushrooms, Garlic Jus",
    calories: "520 kcal",
    tags: ["Comfort Food", "Noodle Base", "Mushroom Jus"],
    pairing: "Great with Blue Ocean Mojito",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-sz04",
    name: "Spicy Peri-Peri Chicken Steak Sizzler",
    price: 399,
    category: "cast-iron-sizzlers",
    categoryName: "Smoking Sizzlers",
    veg: false,
    bestseller: false,
    chefSpecial: true,
    description: "Fire-grilled peri-peri spiced chicken steak over cilantro rice, blistered tomatoes, jalapeño rings, and melted cheddar drizzle on a red-hot iron griddle.",
    ingredients: "Peri Marinated Chicken Breast, Cilantro Butter Rice, Cheddar Sauce Melt, Blistered Tomatoes",
    calories: "620 kcal",
    tags: ["Fiery & Bold", "Cheesy Skillet", "Chef's Cut"],
    pairing: "Follow up with a cool Triple Chocolate Waffle",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-p01",
    name: "Mr Bean Signature Pink Sauce Penne",
    price: 289,
    category: "pastas-comfort",
    categoryName: "Handcrafted Pastas",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Our legendary harmonious fusion of fire-roasted San Marzano arrabbiata and thick parmesan alfredo cream, tossed with broccoli and black olives.",
    ingredients: "Durum Wheat Penne, Italian Tomatoes, Heavy Cream, Aged Parmesan, Broccoli Florets, Sliced Olives",
    calories: "460 kcal",
    tags: ["Signature", "Creamy & Zesty", "Bistro Legend"],
    pairing: "Served with warm roasted garlic baguette",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-p02",
    name: "Classic Alfredo Pollo Penne",
    price: 319,
    category: "pastas-comfort",
    categoryName: "Handcrafted Pastas",
    veg: false,
    bestseller: true,
    chefSpecial: false,
    description: "Silky garlic butter white sauce simmered with cracked black peppercorns, tender grilled chicken breast, and freshly grated Grana Padano.",
    ingredients: "Penne Rigate, Herb-Infused Butter Cream, Grilled Chicken Chunks, Cracked Black Pepper, Parmesan",
    calories: "520 kcal",
    tags: ["Rich & Silky", "Comfort Classic", "Non-Veg"],
    pairing: "Complements a chilled Peach Ice Cooler",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-p03",
    name: "Fiery Arrabbiata Rustic Penne",
    price: 259,
    category: "pastas-comfort",
    categoryName: "Handcrafted Pastas",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Slow-simmered rich red Italian tomato reduction loaded with crushed garlic, birds eye chili flakes, fresh Genovese basil, and extra virgin olive oil.",
    ingredients: "Crushed Roma Tomatoes, Confit Garlic, Fresh Basil Leaves, Chili Oil, Durum Penne",
    calories: "380 kcal",
    tags: ["Spicy & Tangy", "Pure Olive Oil", "Vegan Friendly"],
    pairing: "Dips perfectly with Stuffed Garlic Bread",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-p04",
    name: "Baked Cheesy Macaroni Gratin",
    price: 299,
    category: "pastas-comfort",
    categoryName: "Handcrafted Pastas",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Elbow macaroni enveloped in triple cheese mornay sauce, baked golden in the oven with a herb panko crust until bubbling hot.",
    ingredients: "Elbow Macaroni, English Cheddar, Mozzarella, Creamy Mornay Sauce, Herb Panko Breadcrumbs",
    calories: "540 kcal",
    tags: ["Oven Baked", "Molten Cheese", "Decadent"],
    pairing: "Ideal comfort dish on a rainy Jammu evening",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-b01",
    name: "The Shastri Nagar Royale Burger",
    price: 239,
    category: "bistro-burgers",
    categoryName: "Bistro Burgers & Paninis",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Handcrafted crispy corn & cottage cheese patty, cheddar slice, caramelized onions, crisp iceberg, gherkins, and house thousand island on toasted sesame brioche.",
    ingredients: "Handmade Cottage Cheese & Corn Patty, Melted Cheddar, Caramelized Onion, Iceberg Lettuce, Thousand Island Sauce",
    calories: "470 kcal",
    tags: ["Bistro Icon", "Cheesy", "Must Try"],
    pairing: "Served with a side of peri-peri salted fries",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-b02",
    name: "Crispy Panko Fried Chicken Burger",
    price: 269,
    category: "bistro-burgers",
    categoryName: "Bistro Burgers & Paninis",
    veg: false,
    bestseller: true,
    chefSpecial: false,
    description: "Buttermilk-brined chicken breast coated in crunchy Japanese panko, topped with purple cabbage slaw, spicy chipotle mayo, and dill pickles.",
    ingredients: "Buttermilk Fried Chicken, Panko Crumbs, Chipotle Aioli, Red Cabbage Slaw, Dill Pickle Slices",
    calories: "530 kcal",
    tags: ["Crispy Crunch", "Spicy Aioli", "Crowd Favorite"],
    pairing: "Goes great with an Oreo Thick Shake",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-b03",
    name: "Tuscan Grilled Vegetable Panini",
    price: 229,
    category: "bistro-burgers",
    categoryName: "Bistro Burgers & Paninis",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Grilled zucchini, roasted bell peppers, mozzarella melt, and homemade sun-dried tomato tapenade pressed crisp in herb focaccia.",
    ingredients: "Focaccia Bread, Char-Grilled Veggies, Sundried Tomato Spread, Melted Mozzarella",
    calories: "380 kcal",
    tags: ["Pressed Crisp", "Mediterranean", "Light Meal"],
    pairing: "Pairs with Kesar Rose Mojito",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-b04",
    name: "Smoked Chicken & Jalapeño Club Panini",
    price: 259,
    category: "bistro-burgers",
    categoryName: "Bistro Burgers & Paninis",
    veg: false,
    bestseller: false,
    chefSpecial: true,
    description: "Shredded smoked chicken tossed with sweet corn, pickled jalapeño coins, garlic emulsion, and double cheddar cheese between toasted artisan sourdough.",
    ingredients: "Shredded Smoked Chicken, Pickled Jalapeños, Sweet Corn, Garlic Herb Spread, Sourdough Loaf",
    calories: "430 kcal",
    tags: ["Smoky", "Jalapeño Kick", "Toasted"],
    pairing: "Pairs with Green Apple Fizz",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-pz01",
    name: "Mr Bean Special Exotic Veggie Pizza",
    price: 319,
    category: "stone-pizzas",
    categoryName: "Stone-Oven Pizzas",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Crisp thin crust topped with Italian marinara, whole milk mozzarella, crunchy broccoli, bell peppers, baby corn, black olives, and jalapeños.",
    ingredients: "Plum Tomato Base, Mozzarella Cheese, Broccoli, Bell Peppers, Golden Corn, Jalapeños, Fresh Basil",
    calories: "570 kcal (Whole)",
    tags: ["10-Inch", "Thin Crust", "Loaded Veg"],
    pairing: "Best shared with friends alongside loaded nachos",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-pz02",
    name: "Barbecue Grilled Chicken & Onion Pizza",
    price: 359,
    category: "stone-pizzas",
    categoryName: "Stone-Oven Pizzas",
    veg: false,
    bestseller: true,
    chefSpecial: true,
    description: "Tender grilled chicken tossed in sweet hickory BBQ glaze, caramelized red onions, fresh coriander, and bubbling mozzarella on crisp stone crust.",
    ingredients: "Smoky BBQ Sauce, Grilled Chicken Breast, Caramelized Red Onions, Mozzarella, Cilantro",
    calories: "620 kcal (Whole)",
    tags: ["Sweet & Smoky", "High Protein", "Bistro Cut"],
    pairing: "Pairs with Classic Chilled Cold Coffee",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-pz03",
    name: "Margherita Classica with Buffalo Bocconcini",
    price: 289,
    category: "stone-pizzas",
    categoryName: "Stone-Oven Pizzas",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Simple perfection of slow-cooked Italian plum tomatoes, torn fresh bocconcini mozzarella, sweet basil, and cold-pressed extra virgin olive oil.",
    ingredients: "San Marzano Marinara, Fresh Bocconcini Mozzarella, Fresh Basil Leaves, Extra Virgin Olive Oil",
    calories: "510 kcal (Whole)",
    tags: ["Neapolitan Style", "Pure Simplicity", "Vegetarian"],
    pairing: "Pairs with Wild Berry Waffle dessert",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-pz04",
    name: "Fiery Tandoori Paneer Makhani Pizza",
    price: 339,
    category: "stone-pizzas",
    categoryName: "Stone-Oven Pizzas",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Tandoor-charred paneer cubes in a spiced makhani sauce reduction, topped with diced capsicum, red onions, and melted mozzarella.",
    ingredients: "Makhani Gravy Base, Tandoori Spiced Paneer, Crisp Capsicum, Onion Rings, Mozzarella",
    calories: "610 kcal (Whole)",
    tags: ["Desi Bistro Fusion", "Rich Makhani", "Local Hit"],
    pairing: "Pairs with Blue Lagoon Cooler",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-st01",
    name: "Molten Cheese & Jalapeño Stuffed Garlic Roll",
    price: 219,
    category: "bistro-starters",
    categoryName: "Starters & Garlic Rolls",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Freshly baked artisan bread boat stuffed with roasted garlic herb butter, spicy pickled jalapeños, and an unforgettable mozzarella cheese stretch.",
    ingredients: "In-House Bread Dough, Confit Roasted Garlic, Fresh Herbs Butter, Pickled Jalapeño Rings, Mozzarella Melt",
    calories: "370 kcal",
    tags: ["Cheese Pull", "Garlic Butter", "Table Favorite"],
    pairing: "The ultimate starter to open your bistro meal",
    image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-st02",
    name: "Fiery Peri-Peri Loaded Cheese Fries",
    price: 189,
    category: "bistro-starters",
    categoryName: "Starters & Garlic Rolls",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Crispy golden french fries tossed generously in African bird's eye peri-peri spice dust, topped with warm liquid cheddar and chopped chives.",
    ingredients: "Golden Potato Fries, Peri-Peri Seasoning, Molten Cheddar Sauce, Scallions",
    calories: "350 kcal",
    tags: ["Crispy", "Spicy", "Addictive"],
    pairing: "Perfect for casual snacking and friendly debates",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-st03",
    name: "Crispy Corn Tortilla Nachos Grande",
    price: 229,
    category: "bistro-starters",
    categoryName: "Starters & Garlic Rolls",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Piled high stone-ground corn chips layered with warm queso sauce, house fresh tomato salsa, black beans, jalapeños, and sour cream swirl.",
    ingredients: "Corn Tortilla Chips, Warm Queso, Pico De Gallo Salsa Roja, Black Beans, Sour Cream",
    calories: "390 kcal",
    tags: ["Shareable", "Crunchy", "Party Bowl"],
    pairing: "Pairs with Jammu Kesar Rose Mojito",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-st04",
    name: "Golden Herb Panko Paneer Fingers",
    price: 239,
    category: "bistro-starters",
    categoryName: "Starters & Garlic Rolls",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Fresh cottage cheese batons breaded in herbed Japanese panko breadcrumbs, deep fried until shattering crisp, served with zesty tartar dip.",
    ingredients: "Fresh Malai Paneer, Japanese Panko, Oregano & Thyme, Spiced Tartar Aioli",
    calories: "360 kcal",
    tags: ["Crispy Bite", "High Protein", "Kid Friendly"],
    pairing: "Dips into in-house sweet chili tartar",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-bv01",
    name: "Jammu Kesar Rose & Mint Mojito",
    price: 189,
    category: "beverages-coolers",
    categoryName: "Coolers & Thick Shakes",
    veg: true,
    bestseller: true,
    chefSpecial: true,
    description: "Local Kashmiri saffron extract and natural damask rose syrup shaken with fresh garden mint, lime juice, sparkling soda, and crushed ice.",
    ingredients: "Kishtwar Kesar Infusion, Damask Rose Extract, Fresh Mint Leaves, Lime Slices, Sparkling Water",
    calories: "85 kcal",
    tags: ["Local Twist", "Saffron Aroma", "Refreshing"],
    pairing: "Refreshing counterbalance to any hot sizzler platter",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-bv02",
    name: "Decadent Oreo Crumble Thick Shake",
    price: 229,
    category: "beverages-coolers",
    categoryName: "Coolers & Thick Shakes",
    veg: true,
    bestseller: true,
    chefSpecial: false,
    description: "Double crushed Oreo cookies spun into thick vanilla bean ice cream and whole dairy, topped with cocoa whipped cream and chocolate drizzle.",
    ingredients: "Oreo Cookies, Vanilla Bean Gelato, Whole Milk, Chocolate Fudge Drizzle, Whipped Topping",
    calories: "410 kcal",
    tags: ["Thick Shake", "Oreo", "Youth Favorite"],
    pairing: "A nostalgic companion to our Royale Burger",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-bv03",
    name: "Crisp Green Apple Fizz Cooler",
    price: 179,
    category: "beverages-coolers",
    categoryName: "Coolers & Thick Shakes",
    veg: true,
    bestseller: false,
    chefSpecial: false,
    description: "Tart Granny Smith green apple nectar charged with lemon soda, sweet basil seeds, fresh mint, and cracked black salt.",
    ingredients: "Green Apple Nectar, Clarified Lemon Soda, Sweet Basil Seeds (Sabja), Rock Salt",
    calories: "95 kcal",
    tags: ["Tart & Sweet", "Bubbly", "Digestive"],
    pairing: "Cuts right through cheesy pasta sauces",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mb-bv04",
    name: "Blue Lagoon Sparkling Mocktail",
    price: 189,
    category: "beverages-coolers",
    categoryName: "Coolers & Thick Shakes",
    veg: true,
    bestseller: false,
    chefSpecial: true,
    description: "Electric blue curacao citrus cordial balanced with fresh lime wedge, mint sprig, Sprite, and crushed crystal ice.",
    ingredients: "Blue Curacao Syrup (Non-Alcoholic), Lemon Juice, Sprite, Mint, Maraschino Cherry",
    calories: "105 kcal",
    tags: ["Vibrant Color", "Citrus Zing", "Photogenic"],
    pairing: "A must-order for celebration photo moments",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
  }
];

// Application State
const state = {
  currentCategory: "all",
  searchQuery: "",
  dietaryFilter: "all",
  selectedDish: null
};

// DOM Initialization
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
 * Operating hours: 11:00 AM to 11:00 PM (11:00 - 23:00)
 */
function initLiveHours() {
  const statusDots = document.querySelectorAll(".status-indicator");
  const statusTexts = document.querySelectorAll(".live-status-text");

  const now = new Date();
  const currentHour = now.getHours();

  // 11:00 AM to 11:00 PM (23:00)
  const isOpen = currentHour >= 11 && currentHour < 23;

  statusDots.forEach(dot => {
    if (isOpen) {
      dot.classList.remove("closed");
    } else {
      dot.classList.add("closed");
    }
  });

  statusTexts.forEach(txt => {
    if (isOpen) {
      txt.textContent = "Open Now • 11:00 AM – 11:00 PM • Shastri Nagar, Jammu";
    } else {
      txt.textContent = "Closed Now • Opens at 11:00 AM • Shastri Nagar, Jammu";
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
      tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
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
    feedbackLine.textContent = `Showing ${filtered.length} of ${MENU_DATA.length} handcrafted bistro items`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-menu-state">
        <h3 class="empty-title">No matching bistro dishes found</h3>
        <p class="empty-desc">We couldn't find anything matching your filter criteria. Try resetting filters or search terms.</p>
        <button class="btn-primary-sm" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card" onclick="openDishModal('${item.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openDishModal('${item.id}');}" tabindex="0" role="button" aria-label="View details for ${item.name}">
      <div class="card-thumb-wrap">
        <img class="card-thumb-img" src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="card-top-badges">
          <span class="badge-dietary ${item.veg ? 'veg' : 'nonveg'}">
            ${item.veg ? '● VEG' : '▲ NON-VEG'}
          </span>
          <div>
            ${item.bestseller ? '<span class="badge-bestseller">BESTSELLER</span> ' : ''}
            ${item.chefSpecial ? '<span class="badge-chef">★ BISTRO SIGNATURE</span>' : ''}
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
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

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
    const text = encodeURIComponent(`Hello Mr Bean Cafe Jammu! I would like to order / ask about "${item.name}" (₹${item.price}) seen on your digital menu.`);
    waBtn.href = `https://wa.me/919419143210?text=${text}`;
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

    // Generate Shastri Nagar Booking Reference ID
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `MB-JAMMU-${randomCode}`;

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
        `*Table & Celebration Reservation - Mr Bean Cafe & Restaurant Jammu*\n\n` +
        `• Booking Reference: ${bookingId}\n` +
        `• Name: ${name}\n` +
        `• Date & Time: ${formatDate(date)} at ${time}\n` +
        `• Party Size: ${guests} Guests\n` +
        `• Occasion: ${occasion}\n` +
        `• Special Request: ${notes || "None"}\n\n` +
        `Please confirm our table reservation at Shastri Nagar, Jammu!`
      );
      waConfirmBtn.href = `https://wa.me/919419143210?text=${waMsg}`;
    }

    form.style.display = "none";
    confirmCard.classList.add("visible");
    showToast("Bistro Table Request Registered! See confirmation preview.");
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

// Global Exports
window.openDishModal = openDishModal;
window.closeDishModal = closeDishModal;
window.openReservationModal = openReservationModal;
window.closeReservationModal = closeReservationModal;
window.resetFilters = resetFilters;
