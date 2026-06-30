import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Search, X, MapPin } from "lucide-react";
import { categories, items, type MenuItem } from "@/data/menu";
import { useLocation } from "@/lib/location-context";
import { ItemCard } from "@/components/site/ItemCard";
import { ItemDetailDialog } from "@/components/site/ItemDetailDialog";
import { ShopGate } from "@/components/site/ShopGate";

const ORDER_URL = "https://e-shkoon.com/cart/menu/NjehOhhE";

type MenuSearch = { item?: string; cat?: string; q?: string };

export const Route = createFileRoute("/menu")({
  validateSearch: (s: Record<string, unknown>): MenuSearch => ({
    item: typeof s.item === "string" ? s.item : undefined,
    cat: typeof s.cat === "string" ? s.cat : undefined,
    q: typeof s.q === "string" ? s.q : undefined,
  }),
  head: ({ match }) => {
    const itemId = (match.search as MenuSearch).item;
    const item = itemId ? items.find((i) => i.id === itemId) : undefined;
    const title = item ? `${item.name} — Cheezy Bizerte` : "The whole menu — Cheezy Bizerte";
    const description = item?.description ?? "Coffee, juice, brunch, sandwiches, salads and pastry.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(item?.image ? [{ property: "og:image", content: item.image }] : []),
      ],
    };
  },
  component: MenuPage,
});

function MenuPage() {
  const { current, hasChosen, clearChoice } = useLocation();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const [active, setActive] = useState<string>(search.cat ?? "all");
  const [query, setQuery] = useState(search.q ?? "");
  const selected = useMemo(
    () => (search.item ? items.find((i) => i.id === search.item) ?? null : null),
    [search.item]
  );
  const dialogOpen = !!selected;

  const setSelectedItem = (item: MenuItem | null) => {
    navigate({
      search: (prev: MenuSearch) => ({ ...prev, item: item ? item.id : undefined }),
      replace: false,
    });
  };

  // Keep URL in sync with filters (replace history to avoid spam)
  useEffect(() => {
    navigate({
      search: (prev: MenuSearch) => ({
        ...prev,
        cat: active === "all" ? undefined : active,
        q: query.trim() ? query.trim() : undefined,
      }),
      replace: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, query]);

  const visibleCats = useMemo(
    () => categories.filter((c) => items.some((i) => i.category === c.slug)),
    []
  );

  const filteredItems = useMemo(() => {
    const term = query.trim().toLowerCase();
    return items.filter((i) => {
      if (active !== "all" && i.category !== active) return false;
      if (!term) return true;
      return (
        i.name.toLowerCase().includes(term) ||
        i.description.toLowerCase().includes(term) ||
        (i.tags ?? []).some((t) => t.toLowerCase().includes(term))
      );
    });
  }, [active, query]);

  const grouped = useMemo(() => {
    return visibleCats
      .map((c) => ({ ...c, items: filteredItems.filter((i) => i.category === c.slug) }))
      .filter((g) => g.items.length > 0);
  }, [visibleCats, filteredItems]);

  const openItem = (i: MenuItem) => setSelectedItem(i);

  if (!hasChosen) {
    return <ShopGate />;
  }


  return (
    <div>
      {/* HOT PINK HERO */}
      <section className="relative overflow-hidden bg-[var(--hot-pink)] text-white">
        <div className="absolute -top-40 -left-40 size-[40rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 size-[36rem] rounded-full bg-[var(--mint)]/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase opacity-90">
            <MapPin className="size-3.5" />
            <span>{current.name.replace("Cheezy — ", "")} · {current.city}</span>
            <button
              onClick={clearChoice}
              className="ml-2 underline underline-offset-2 hover:text-[var(--mint)] tracking-normal normal-case font-medium"
            >
              change
            </button>
          </div>
          <h1 className="mt-4 leading-[0.85]">
            <span className="block font-heavy text-[clamp(5rem,16vw,12rem)] tracking-tight uppercase">The</span>
            <span className="block font-script text-[var(--mint)] text-[clamp(4rem,13vw,10rem)] -mt-4 sm:-mt-8">
              whole menu
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-95">
            Updated weekly. Anything you don't see, just ask — the kitchen improvises with a smile.
          </p>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-7 py-4 text-sm font-bold hover:scale-[1.02] transition-transform"
          >
            Order on shkoon <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* SEARCH + CATEGORY CHIPS */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu — try 'pistachio', 'brunch', 'detox'…"
              className="w-full rounded-full bg-secondary/60 border border-border pl-11 pr-10 py-2.5 text-sm outline-none focus:ring-2 ring-[var(--hot-pink)]/40 focus:bg-background"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 size-6 inline-flex items-center justify-center rounded-full hover:bg-secondary"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
          <div className="overflow-x-auto no-scrollbar -mx-1 px-1">
            <div className="flex gap-2 w-max">
              <Chip active={active === "all"} onClick={() => setActive("all")}>
                All
              </Chip>
              {visibleCats.map((c) => (
                <Chip key={c.slug} active={active === c.slug} onClick={() => setActive(c.slug)}>
                  {c.name}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NUMBERED SECTIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {grouped.length === 0 && (
          <div className="text-center py-24">
            <p className="font-script text-5xl text-[var(--hot-pink)]">oops</p>
            <p className="mt-2 text-lg font-semibold">Nothing matches "{query}"</p>
            <button
              onClick={() => { setQuery(""); setActive("all"); }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-5 py-2.5 text-sm font-bold"
            >
              Clear filters
            </button>
          </div>
        )}
        {grouped.map((g, idx) => (
          <div key={g.slug} id={g.slug} className="scroll-mt-44 grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4 lg:sticky lg:top-44 self-start">
              <p className="font-script text-5xl text-[var(--hot-pink)] leading-none">
                {String(idx + 1).padStart(2, "0")}.
              </p>
              <h2 className="mt-3 font-heavy uppercase text-4xl sm:text-5xl tracking-tight leading-[0.9]">
                {g.name}
              </h2>
              {g.blurb && <p className="mt-3 text-muted-foreground">{g.blurb}</p>}
              <p className="mt-3 text-xs font-bold tracking-widest uppercase text-muted-foreground">
                {g.items.length} {g.items.length === 1 ? "item" : "items"}
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {g.items.map((i) => (
                <ItemCard key={i.id} item={i} onClick={() => openItem(i)} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[2rem] bg-[var(--ink)] text-white p-10 sm:p-14 text-center">
          <p className="font-script text-4xl text-[var(--mint)]">hungry yet?</p>
          <h3 className="mt-2 font-heavy uppercase text-4xl sm:text-5xl">Order in two taps.</h3>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--hot-pink)] px-7 py-4 text-sm font-bold hover:scale-[1.02] transition-transform"
          >
            Open shkoon <ArrowRight className="size-4" />
          </a>
          <div className="mt-4 text-sm opacity-80">
            or <Link to="/locations" className="underline">visit us in {current.city}</Link>
          </div>
        </div>
      </section>

      <ItemDetailDialog
        item={selected}
        open={dialogOpen}
        onOpenChange={(open) => { if (!open) setSelectedItem(null); }}
      />
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={
        "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
        (active
          ? "bg-[var(--ink)] text-white"
          : "bg-background text-foreground/80 border border-border hover:bg-secondary")
      }
    >
      {children}
    </button>
  );
}
