# Cheezy — Menu & Website

Website and digital menu for **Cheezy**, a bakery and café in Bizerte, Tunisia.

## Features

- **Shop picker**: choose your Cheezy location before browsing (remembered in the browser)
- **Photo menu**: item cards with photos, prices and NEW / SIGNATURE / POPULAR tags
- **Live search + category chips**: filter across every category (hot drinks, frappés, smoothies, mojitos, brunch...)
- **Item details**: tap any item to open a detail dialog
- **Pages**: home, menu, locations, about and contact
- Mobile-first, responsive layout

## Tech stack

React · TypeScript · TanStack Start / Router · Vite · Tailwind CSS · shadcn/ui (Radix) · Framer Motion

## Run locally

```bash
bun install      # or: npm install
bun run dev      # or: npm run dev
```

Other scripts: `build`, `preview`, `lint`, `format`.

## Project structure

```
src/
  routes/       # pages (index, menu, locations, about, contact)
  components/   # layout (header/footer) and site components (item card, shop gate...)
  data/         # menu items and shop locations
  lib/          # helpers and location context
```

To update the menu, edit `src/data/menu.ts`.
