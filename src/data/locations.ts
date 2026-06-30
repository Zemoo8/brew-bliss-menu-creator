export type Review = {
  author: string;
  text: string;
  rating?: number;
};

export type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  phone?: string;
  mapsUrl: string;
  embedUrl: string;
  available: boolean;
  facebookUrl?: string;
  priceTier?: string;
  vibe?: string;
  accent?: string; // hex color tint for the shop card
  reviews?: Review[];
};

export const locations: Location[] = [
  {
    id: "bizerte-14-janvier",
    name: "Cheezy — Boulevard du 14 Janvier",
    address: "7VQ9+H92, Boulevard du 14 Janvier",
    city: "Bizerte",
    hours: "Mon–Sun · 7:00 — 23:00",
    facebookUrl: "https://www.facebook.com/p/Cheezy-100092489885654/",
    priceTier: "TND 1–10",
    vibe: "The original — fresh sweets, breakfast, juices and great coffee.",
    accent: "#FF2D87",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cheezy+Boulevard+du+14+Janvier+Bizerte",
    embedUrl:
      "https://www.google.com/maps?q=Cheezy%20Boulevard%20du%2014%20Janvier%20Bizerte&output=embed",
    available: true,
    reviews: [
      {
        author: "Yasmine Bouzid",
        rating: 5,
        text: "I highly recommend this place to eat such delicious sweets 😍",
      },
      {
        author: "Ahmed Ben Youssef",
        rating: 5,
        text: "Lovely place and high quality products (sweet and drinks).",
      },
      {
        author: "Hmaied Baratli",
        rating: 5,
        text: "Excellent San Sebastian cheesecake, and filled croissants in a variety of flavors. Warm and friendly staff.",
      },
    ],
  },
  {
    id: "cheezy-purple",
    name: "Cheezy Purple — rue Assia Kandara",
    address: "7VW7+CWX, rue Assia Kandara",
    city: "Bizerte",
    hours: "Mon–Sun · 8:00 — 23:30",
    priceTier: "TND 10–20",
    vibe: "Modern & Tunisian pastries, premium coffee, matcha, savory snacks and brunch.",
    accent: "#7C3AED",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cheezy+Purple+rue+Assia+Kandara+Bizerte",
    embedUrl:
      "https://www.google.com/maps?q=Cheezy%20Purple%20rue%20Assia%20Kandara%20Bizerte&output=embed",
    available: true,
    reviews: [
      {
        author: "Tesnim Kh",
        rating: 5,
        text: "A nice place with a wide variety of modern and Tunisian pastries, as well as drinks (hot and cold coffee, juice, matcha, tea, cocktails, etc.) and savory snacks. Great atmosphere, decor, and selection.",
      },
    ],
  },
];

export const defaultLocationId = locations[0].id;
