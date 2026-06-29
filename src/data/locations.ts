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
};

export const locations: Location[] = [
  {
    id: "bizerte-14-janvier",
    name: "Cheezy — Boulevard du 14 Janvier",
    address: "7VQ9+H92, Boulevard du 14 Janvier",
    city: "Bizerte",
    hours: "Mon–Sun · 7:00 — 23:00",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cheezy+Boulevard+du+14+Janvier+Bizerte",
    embedUrl:
      "https://www.google.com/maps?q=Cheezy%20Boulevard%20du%2014%20Janvier%20Bizerte&output=embed",
    available: true,
  },
  {
    id: "shop-2",
    name: "Cheezy — Second Location",
    address: "Address coming soon",
    city: "Bizerte",
    hours: "Opening soon",
    mapsUrl: "#",
    embedUrl: "https://www.google.com/maps?q=Bizerte&output=embed",
    available: false,
  },
];

export const defaultLocationId = locations[0].id;
