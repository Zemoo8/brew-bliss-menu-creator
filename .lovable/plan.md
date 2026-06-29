## What I'll build

**1. Shop gate before menu**
- New `/menu` flow: if no shop is selected (no `cheezy-location` in localStorage), show a full-screen "Choose your shop" picker first.
- Two cards: **Cheezy — Bd du 14 Janvier, Bizerte** (active) and **Coming soon** placeholder. Click → saves choice → reveals the menu.
- A small "Change shop" link at the top of the menu so they can re-pick.

**2. New logo + cleaner header**
- Upload `noBGlogo.png` as a Lovable asset and use it everywhere (header, footer, shop-gate, hero corner mark).
- Header: show the transparent logo only — **remove the "Cheezy" wordmark text** next to it. The logo already contains the word.

**3. Menu in Joe-and-the-Juice style with photos**
Rebuild the menu list to match the e-shkoon reference you uploaded:
- Per-item card with a **square photo on the left**, name + short description, NEW/SIGNATURE/POPULAR pill, price on the right, chevron.
- Keep the hot-pink hero + numbered sections, but the items become photo-cards instead of text lines.
- Mobile: photo on top of name (Joe-style).

**4. Search + sticky category chips**
- A search bar pinned in the sticky chip row that filters items live across **all** categories (matches name, description, tags).
- Chips already exist; I'll keep them but make the active style match the new look and auto-scroll the active chip into view.
- Results show item count; "no results" empty state.

**5. Item detail modal**
- Click any item → opens a shadcn `Dialog`.
- Modal shows: large hero photo, name, full description, badges (SIGNATURE / POPULAR / NEW), category, price, and an "Order on shkoon" button.
- Closes with X, ESC, or backdrop click.

**6. Real food photography**
- Use the 6 uploaded food photos (chocolate cake, atomique muffin, tuna sandwich, avo-toast, berry brioche, new brunch toast) for the brunch / toast / sandwich / pastry items.
- The big food grid (Gemini collage) is treated as **reference only** — not embedded. Real photos go on the real items.

## Files

- `src/assets/logo-nobg.png.asset.json` (upload via `lovable-assets`)
- `src/assets/cake-chocolate.jpg.asset.json`, `atomique-muffin.jpg`, `tuna-baguette.jpg`, `avocado-toast.jpg`, `berry-brioche.jpg`, `new-brunch.jpg` (uploads)
- `src/lib/location-context.tsx` — add `hasChosen` flag (don't auto-select first shop until the user picks)
- `src/components/site/ShopGate.tsx` — new full-screen picker
- `src/components/site/ItemDetailDialog.tsx` — new modal
- `src/components/site/ItemCard.tsx` — rewrite to Joe-style photo row card
- `src/components/layout/Header.tsx` — swap logo, drop wordmark
- `src/components/layout/Footer.tsx` — swap logo
- `src/routes/menu.tsx` — gate, search input in sticky bar, swap to photo cards, wire dialog
- `src/data/menu.ts` — wire the new photos onto the matching items, ensure each item has an image fallback

## Notes / decisions

- Gate is **menu-only**, not site-wide — the homepage stays browsable without a shop chosen (matches Joe & the Juice's "pick a store before ordering" pattern).
- I'll keep the existing pink + mint + ink palette and bold-display vibe; only the menu item card shape changes.
- I won't embed the Gemini collage or e-shkoon screenshot — they're references.
