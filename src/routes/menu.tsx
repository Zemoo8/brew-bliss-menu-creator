import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, items } from "@/data/menu";
import { ItemCard } from "@/components/site/ItemCard";
import { useLocation } from "@/lib/location-context";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cheezy Bizerte" },
      { name: "description", content: "Coffee, juice, brunch, sandwiches, salads and pastry. Browse the full Cheezy menu." },
      { property: "og:title", content: "Menu — Cheezy" },
      { property: "og:description", content: "Coffee, juice, brunch, sandwiches, salads and pastry." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { current } = useLocation();
  const [active, setActive] = useState<string>("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter((i) => {
      if (active !== "all" && i.category !== active) return false;
      if (term && !`${i.name} ${i.description}`.toLowerCase().includes(term)) return false;
      return true;
    });
  }, [active, q]);

  const grouped = useMemo(() => {
    if (active !== "all") return [{ slug: active, name: categories.find((c) => c.slug === active)?.name ?? "", items: filtered }];
    return categories
      .map((c) => ({ slug: c.slug, name: c.name, items: filtered.filter((i) => i.category === c.slug) }))
      .filter((g) => g.items.length > 0);
  }, [active, filtered]);

  return (
    <div>
      <section className="bg-secondary/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">{current.city}</p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold">The Menu</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Everything we serve, fresh every day. Tap a category or search.
          </p>

          <div className="mt-8 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the menu…"
              className="w-full rounded-full bg-background border border-border pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 ring-primary/30"
            />
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-30 bg-background/85 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max">
            <Chip active={active === "all"} onClick={() => setActive("all")}>All</Chip>
            {categories.map((c) => (
              <Chip key={c.slug} active={active === c.slug} onClick={() => setActive(c.slug)}>
                {c.name}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {grouped.length === 0 && (
          <p className="text-center text-muted-foreground py-20">Nothing matches that search.</p>
        )}
        {grouped.map((g) => (
          <div key={g.slug} id={g.slug}>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">{g.name}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {g.items.map((i) => <ItemCard key={i.id} item={i} />)}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={
        "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors border " +
        (active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-background text-foreground/80 border-border hover:bg-secondary")
      }
    >
      {children}
    </button>
  );
}
