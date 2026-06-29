# Cheezy — Joe & The Juice–style site

Your current Lovable project here is the blank starter (I can't reach `bizerte-brew-bliss` from this workspace), so I'll build a fresh, polished site from scratch in the same spirit and using all the photos you uploaded.

## Design direction

- Joe & The Juice energy: bold full-bleed photography, oversized type, generous whitespace, sticky top nav, playful hover micro-interactions, smooth scroll reveals.
- Brand pulled from the Cheezy logo: deep indigo/navy (`#2A1B5C`-ish from the logo) as primary, soft lavender as secondary surface, warm cream background, coral/pink accent (from the Cheezy stamp on the cups). Rounded shapes, the chef-hat badge used as a recurring motif.
- Typography: a confident display script/sans pair (e.g. Fraunces or Syne for display + Inter/DM Sans body) — not the default Inter look.
- Motion via framer-motion: hero parallax, category chip scroll-snap, item card hover lift.

## Pages / routes

- `/` Home — hero with Cheezy logo + tagline "Baker and fine cake maker, since 2022", featured items carousel, "Our story" strip (team photo), location preview, Instagram-style gallery.
- `/menu` Menu — full category navigation (see list below), sticky category bar, item cards with image, name, short description, price placeholder. Filter by category, search.
- `/locations` Locations — map + cards for each shop, with a global **Location Switcher** in the header (persists in localStorage) so menu/hours can later differ per shop.
- `/about` — story, team photo, values.
- `/contact` — address, hours, phone, social, embedded Google map.

## Location switcher

- Stored in `localStorage` + React context.
- Shop 1 (active): **Cheezy — 7VQ9+H92, Boulevard du 14 Janvier, Bizerte**.
- Shop 2: **Placeholder ("Coming soon — address TBD")** so you can fill it in later without code changes (editable in a single `src/data/locations.ts` file).
- Header shows current shop with a dropdown to switch.

## Menu categories (from your list)

All / Hot Drinks – Café / Cold Drinks – Café Glacé / Frappés / Espresso / Tea / Smoothies / Mojitos / Iced Tea / Lemonade / Omelet / Protéine Shake / Shake (jus à base de lait) / Matcha / Café Arabe / Cheese Board / Tisane / Brunch / Glace et Milk Shake / Healthy Juice / Toast / Shot / Sandwich / Breakfast Bowl / Salad Bowl / Crêpe / Fresh Juice.

I'll seed ~3–6 items per category (referencing the e-shkoon Cheezy menu you linked for names/structure) into `src/data/menu.ts` so you can edit easily. Your uploaded food photos (omelet, tuna sandwich, cookies, muffins, pistachio cheesecake combo, butterfly-pea drink, iced coffees) get mapped to matching items; remaining items use tasteful placeholder imagery from your shop ambiance shots.

## Assets

All uploaded images (logo, team, drinks, food, cookies, muffins) uploaded via `lovable-assets` and referenced from `src/assets/*.asset.json` — no binaries in the repo.

## Technical notes

- TanStack Start file routes under `src/routes/` (`index.tsx`, `menu.tsx`, `locations.tsx`, `about.tsx`, `contact.tsx`).
- Design tokens in `src/styles.css` (oklch), no hardcoded colors in components.
- Data layer: `src/data/menu.ts`, `src/data/locations.ts` — easy to edit, no backend yet.
- framer-motion for animations, shadcn components for nav/sheet/dropdown/dialog.
- SEO: per-route `head()` with unique titles, meta, OG tags; JSON-LD `Restaurant` schema on home.
- Fully responsive, mobile drawer nav.

## Out of scope (ask if you want them)

- Online ordering / cart / payments.
- CMS or admin to edit menu in-browser (currently you'd edit `menu.ts`).
- Backend (Lovable Cloud) — not enabling unless you want auth/orders.

Approve and I'll build it.
