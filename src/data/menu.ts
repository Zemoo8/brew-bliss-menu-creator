import combo from "@/assets/combo_pistachio.webp.asset.json";
import drinksTrio from "@/assets/drinks_trio.webp.asset.json";
import cookies from "@/assets/cookies.webp.asset.json";
import muffin from "@/assets/muffin_dark.jpg.asset.json";
import cupcake from "@/assets/cupcake_pistachio.jpg.asset.json";
import butterfly from "@/assets/butterfly_drink.jpg.asset.json";
import tunaOld from "@/assets/tuna_sandwich.jpg.asset.json";
import omelet from "@/assets/omelet.jpg.asset.json";
import cake from "@/assets/cake-chocolate.webp.asset.json";
import atomique from "@/assets/atomique-muffin.jpg.asset.json";
import tuna from "@/assets/tuna-baguette.jpg.asset.json";
import avocado from "@/assets/avocado-toast.jpg.asset.json";
import berry from "@/assets/berry-brioche.jpg.asset.json";
import newBrunch from "@/assets/new-brunch.jpg.asset.json";

export type Category = {
  slug: string;
  name: string;
  blurb?: string;
};

export const categories: Category[] = [
  { slug: "hot-drinks", name: "Hot Drinks / Café", blurb: "Espresso classics, hand-pulled." },
  { slug: "cold-drinks", name: "Cold Drinks / Café Glacé" },
  { slug: "frappes", name: "Frappés" },
  { slug: "espresso", name: "Espresso" },
  { slug: "tea", name: "Tea" },
  { slug: "smoothies", name: "Smoothies" },
  { slug: "mojitos", name: "Mojitos" },
  { slug: "iced-tea", name: "Iced Tea" },
  { slug: "lemonade", name: "Lemonade" },
  { slug: "omelet", name: "The Omelet" },
  { slug: "protein-shake", name: "Protéine Shake" },
  { slug: "shake", name: "Shake (jus à base de lait)" },
  { slug: "matcha", name: "The Matcha" },
  { slug: "cafe-arabe", name: "Café Arabe" },
  { slug: "cheese-board", name: "Cheese Board" },
  { slug: "tisane", name: "Tisane" },
  { slug: "brunch", name: "The Brunch" },
  { slug: "milkshake", name: "Glace et Milk Shake" },
  { slug: "healthy-juice", name: "Healthy Juice" },
  { slug: "toast", name: "The Toast" },
  { slug: "shot", name: "The Shot" },
  { slug: "sandwich", name: "The Sandwich" },
  { slug: "breakfast-bowl", name: "Breakfast Bowl" },
  { slug: "salad-bowl", name: "Salad Bowl" },
  { slug: "crepe", name: "Crêpe" },
  { slug: "fresh-juice", name: "The Fresh Juice" },
  { slug: "pastry", name: "Pastry & Cakes", blurb: "Baked every morning." },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number; // TND
  category: string; // slug
  image?: string;
  tags?: string[];
};

const I = {
  combo: combo.url,
  drinksTrio: drinksTrio.url,
  cookies: cookies.url,
  muffin: muffin.url,
  cupcake: cupcake.url,
  butterfly: butterfly.url,
  tunaOld: tunaOld.url,
  omelet: omelet.url,
  cake: cake.url,
  atomique: atomique.url,
  tuna: tuna.url,
  avocado: avocado.url,
  berry: berry.url,
  newBrunch: newBrunch.url,
};

export const items: MenuItem[] = [
  // Hot Drinks
  { id: "espresso", name: "Espresso", description: "Single shot, dark and bright.", price: 2.5, category: "hot-drinks" },
  { id: "double-espresso", name: "Double Espresso", description: "Two pulls, one cup.", price: 3.5, category: "hot-drinks" },
  { id: "cappuccino", name: "Cappuccino", description: "Velvety steamed milk, cocoa dust.", price: 4.5, category: "hot-drinks", image: I.combo, tags: ["popular"] },
  { id: "latte", name: "Café Latte", description: "Silky espresso latte, lightly sweet.", price: 5, category: "hot-drinks" },
  { id: "mocha", name: "Mocha", description: "Espresso, chocolate, steamed milk.", price: 6, category: "hot-drinks" },

  // Cold Drinks
  { id: "iced-latte", name: "Iced Latte", description: "Espresso poured over cold milk and ice.", price: 6, category: "cold-drinks", image: I.drinksTrio },
  { id: "iced-americano", name: "Iced Americano", description: "Clean, bracing, all-day cold brew style.", price: 5, category: "cold-drinks" },
  { id: "pistachio-iced-latte", name: "Pistachio Iced Latte", description: "House pistachio cream, espresso, milk.", price: 8, category: "cold-drinks", image: I.combo, tags: ["signature"] },
  { id: "caramel-macchiato-iced", name: "Caramel Macchiato Glacé", description: "Vanilla milk, espresso, caramel drizzle.", price: 7, category: "cold-drinks" },

  // Frappes
  { id: "frappe-classic", name: "Frappé Classic", description: "Blended iced coffee, whipped top.", price: 7, category: "frappes" },
  { id: "frappe-oreo", name: "Frappé Oreo", description: "Cookies, cream, espresso, ice.", price: 8, category: "frappes" },
  { id: "frappe-nutella", name: "Frappé Nutella", description: "Chocolate-hazelnut, espresso.", price: 8, category: "frappes" },

  // Espresso
  { id: "ristretto", name: "Ristretto", description: "Short, syrupy espresso.", price: 3, category: "espresso" },
  { id: "macchiato", name: "Macchiato", description: "Espresso marked with foam.", price: 3.5, category: "espresso" },
  { id: "cortado", name: "Cortado", description: "Equal parts espresso and warm milk.", price: 4.5, category: "espresso" },

  // Tea
  { id: "english-breakfast", name: "English Breakfast", description: "Strong, classic black tea.", price: 4, category: "tea" },
  { id: "earl-grey", name: "Earl Grey", description: "Bergamot-laced black tea.", price: 4, category: "tea" },
  { id: "green-tea", name: "Green Tea", description: "Grassy, gentle, clean.", price: 4, category: "tea" },

  // Smoothies
  { id: "smoothie-berry", name: "Berry Smoothie", description: "Strawberry, raspberry, banana, yogurt.", price: 9, category: "smoothies" },
  { id: "smoothie-tropical", name: "Tropical Smoothie", description: "Mango, pineapple, passion fruit.", price: 9, category: "smoothies" },
  { id: "smoothie-green", name: "Green Smoothie", description: "Spinach, apple, ginger, lemon.", price: 9, category: "smoothies", tags: ["healthy"] },

  // Mojitos
  { id: "mojito-classic", name: "Mojito Classic", description: "Mint, lime, soda, syrup.", price: 8, category: "mojitos" },
  { id: "mojito-strawberry", name: "Strawberry Mojito", description: "Fresh strawberry, mint, lime.", price: 9, category: "mojitos" },
  { id: "mojito-blue", name: "Blue Mojito", description: "Butterfly-pea infusion over lime.", price: 9, category: "mojitos", image: I.butterfly, tags: ["signature"] },

  // Iced Tea
  { id: "iced-tea-peach", name: "Peach Iced Tea", description: "Cold-brewed black tea, peach.", price: 6, category: "iced-tea" },
  { id: "iced-tea-lemon", name: "Lemon Iced Tea", description: "Classic, brisk, citrus-forward.", price: 6, category: "iced-tea" },

  // Lemonade
  { id: "lemonade-mint", name: "Mint Lemonade", description: "Hand-squeezed lemons, fresh mint.", price: 6, category: "lemonade" },
  { id: "lemonade-ginger", name: "Ginger Lemonade", description: "Sharp ginger kick, citrus.", price: 6, category: "lemonade" },

  // Omelet
  { id: "omelet-mediterranean", name: "Mediterranean Omelet", description: "Olives, tomato, arugula, pesto, seeded rye.", price: 14, category: "omelet", image: I.omelet, tags: ["signature"] },
  { id: "omelet-cheese", name: "Three-Cheese Omelet", description: "Emmental, mozzarella, parmesan.", price: 13, category: "omelet", image: I.avocado },

  // Protein Shake
  { id: "protein-vanilla", name: "Vanilla Protein Shake", description: "Whey, banana, almond milk.", price: 11, category: "protein-shake" },
  { id: "protein-chocolate", name: "Chocolate Protein Shake", description: "Cocoa, peanut butter, milk.", price: 11, category: "protein-shake" },

  // Shake
  { id: "shake-strawberry", name: "Strawberry Milk Shake", description: "Real strawberries blended with milk.", price: 8, category: "shake" },
  { id: "shake-banana", name: "Banana Milk Shake", description: "Banana, milk, honey.", price: 8, category: "shake" },

  // Matcha
  { id: "matcha-latte", name: "Matcha Latte", description: "Ceremonial-grade matcha, steamed milk.", price: 8, category: "matcha", tags: ["signature"] },
  { id: "iced-matcha", name: "Iced Matcha", description: "Cold matcha, milk, ice.", price: 8, category: "matcha" },

  // Café Arabe
  { id: "cafe-arabe", name: "Café Arabe", description: "Cardamom-spiced Arabic coffee.", price: 5, category: "cafe-arabe" },

  // Cheese Board
  { id: "cheese-board", name: "Cheese Board", description: "Selection of cheeses, honey, nuts, bread.", price: 28, category: "cheese-board" },

  // Tisane
  { id: "tisane-verveine", name: "Verveine", description: "Lemon-verbena, calming.", price: 4, category: "tisane" },
  { id: "tisane-camomille", name: "Camomille", description: "Floral, soothing.", price: 4, category: "tisane" },

  // Brunch
  { id: "brunch-cheezy", name: "The Cheezy Brunch", description: "Eggs, breads, cheeses, fruit, juice & coffee.", price: 32, category: "brunch", image: I.newBrunch, tags: ["signature", "popular"] },
  { id: "brunch-new", name: "New Brunch Plate", description: "Toasted brioche, cheese, mushroom, fried egg, balsamic glaze.", price: 28, category: "brunch", image: I.newBrunch, tags: ["new"] },
  { id: "brunch-berry-brioche", name: "Berry Pistachio Brioche", description: "Brioche, whipped cream, blueberry compote, pistachio crumble.", price: 22, category: "brunch", image: I.berry, tags: ["signature"] },

  // Milkshake / Glace
  { id: "milkshake-vanilla", name: "Vanilla Milk Shake", description: "Bourbon vanilla ice cream blended.", price: 9, category: "milkshake" },
  { id: "milkshake-pistachio", name: "Pistachio Milk Shake", description: "House pistachio cream, ice cream.", price: 10, category: "milkshake", image: I.cupcake },

  // Healthy Juice
  { id: "healthy-detox", name: "Detox Green", description: "Celery, cucumber, apple, ginger, lemon.", price: 9, category: "healthy-juice", tags: ["healthy"] },
  { id: "healthy-immunity", name: "Immunity Boost", description: "Carrot, orange, turmeric, ginger.", price: 9, category: "healthy-juice" },

  // Toast
  { id: "avocado-toast", name: "Avocado Toast", description: "Smashed avocado, fried egg, microgreens, seeds, beet swirl.", price: 14, category: "toast", image: I.avocado, tags: ["signature"] },
  { id: "toast-pistachio", name: "Pistachio Cream Toast", description: "House pistachio, berries, mascarpone.", price: 12, category: "toast" },

  // Shot
  { id: "shot-ginger", name: "Ginger Shot", description: "Pure ginger, lemon, cayenne.", price: 4, category: "shot" },
  { id: "shot-turmeric", name: "Turmeric Shot", description: "Turmeric, orange, black pepper.", price: 4, category: "shot" },

  // Sandwich
  { id: "sandwich-tuna", name: "Tuna Baguette", description: "House tuna, lettuce, cherry tomato, side slaw.", price: 12, category: "sandwich", image: I.tuna, tags: ["signature", "popular"] },
  { id: "sandwich-chicken", name: "Grilled Chicken Sandwich", description: "Pesto, mozzarella, sundried tomato.", price: 13, category: "sandwich", image: I.tunaOld },

  // Breakfast Bowl
  { id: "bowl-acai", name: "Açaí Bowl", description: "Açaí, banana, berries, granola.", price: 14, category: "breakfast-bowl" },
  { id: "bowl-yogurt", name: "Yogurt & Granola Bowl", description: "House granola, honey, seasonal fruit.", price: 12, category: "breakfast-bowl" },

  // Salad Bowl
  { id: "salad-caesar", name: "Caesar Salad", description: "Romaine, parmesan, croutons, anchovy.", price: 14, category: "salad-bowl" },
  { id: "salad-quinoa", name: "Quinoa Bowl", description: "Quinoa, roasted veg, feta, lemon.", price: 15, category: "salad-bowl", tags: ["healthy"] },

  // Crêpe
  { id: "crepe-nutella", name: "Nutella Crêpe", description: "Warm crêpe, hazelnut spread, banana.", price: 9, category: "crepe", image: I.muffin },
  { id: "crepe-cheese", name: "Cheese & Honey Crêpe", description: "Sweet cheese, drizzled honey.", price: 9, category: "crepe" },

  // Fresh Juice
  { id: "juice-orange", name: "Fresh Orange", description: "Cold-pressed Tunisian oranges.", price: 7, category: "fresh-juice" },
  { id: "juice-pomegranate", name: "Pomegranate", description: "Hand-pressed pomegranate.", price: 9, category: "fresh-juice" },

  // Pastry & Cakes
  { id: "cake-chocolate", name: "Chocolate Dôme", description: "Glazed dark chocolate dôme, soft fudge centre.", price: 12, category: "pastry", image: I.cake, tags: ["signature"] },
  { id: "atomique", name: "Atomique Chezzy", description: "Double-chocolate muffin, vanilla drizzle, gold sprinkles.", price: 7, category: "pastry", image: I.atomique, tags: ["popular"] },
  { id: "cookies-pistachio", name: "Pistachio Cookie", description: "Stuffed soft cookie, white chocolate, pistachio cream.", price: 6, category: "pastry", image: I.cookies },
  { id: "muffin-dark", name: "Dark Chocolate Muffin", description: "Warm, rich, with chocolate chips.", price: 5, category: "pastry", image: I.muffin },
];

export const featured = [
  items.find((i) => i.id === "pistachio-iced-latte")!,
  items.find((i) => i.id === "omelet-mediterranean")!,
  items.find((i) => i.id === "mojito-blue")!,
  items.find((i) => i.id === "sandwich-tuna")!,
  items.find((i) => i.id === "brunch-cheezy")!,
  items.find((i) => i.id === "matcha-latte")!,
];
