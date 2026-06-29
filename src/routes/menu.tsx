import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { categories, items, type MenuItem } from "@/data/menu";
import { useLocation } from "@/lib/location-context";

const ORDER_URL = "https://e-shkoon.com/cart/menu/NjehOhhE";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The whole menu — Cheezy Bizerte" },
      { name: "description", content: "Coffee, juice, brunch, sandwiches, salads and pastry. Browse the full Cheezy menu." },
      { property: "og:title", content: "The whole menu — Cheezy" },
      { property: "og:description", content: "Coffee, juice, brunch, sandwiches, salads and pastry." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { current } = useLocation();
  const [active, setActive] = useState<string>("all");

  const visibleCats = useMemo(
    () => categories.filter((c) => items.some((i) => i.category === c.slug)),
    []
  );

  const grouped = useMemo(() => {
    if (active !== "all") {
      const cat = visibleCats.find((c) => c.slug === active);
      return cat ? [{ ...cat, items: items.filter((i) => i.category === cat.slug) }] : [];
    }
    return visibleCats.map((c) => ({ ...c, items: items.filter((i) => i.category === c.slug) }));
  }, [active, visibleCats]);

  return (
    <div>
      {/* HOT PINK HERO */}
      <section className="relative overflow-hidden bg-[var(--hot-pink)] text-white">
        <div className="absolute -top-40 -left-40 size-[40rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 size-[36rem] rounded-full bg-[var(--mint)]/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-90">Notre carte · {current.city}</p>
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

      {/* CATEGORY CHIPS */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max">
            <Chip active={active === "all"} onClick={() => setActive("all")}>All</Chip>
            {visibleCats.map((c) => (
              <Chip key={c.slug} active={active === c.slug} onClick={() => setActive(c.slug)}>
                {c.name}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {/* NUMBERED SECTIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {grouped.map((g, idx) => (
          <div key={g.slug} id={g.slug} className="scroll-mt-32 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="font-script text-5xl text-[var(--hot-pink)] leading-none">
                {String(idx + 1).padStart(2, "0")}.
              </p>
              <h2 className="mt-3 font-heavy uppercase text-5xl sm:text-6xl tracking-tight leading-[0.9]">
                {g.name}
              </h2>
              {g.blurb && <p className="mt-3 text-muted-foreground">{g.blurb}</p>}
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {g.items.map((i) => <MenuLine key={i.id} item={i} />)}
            </div>
          </div>
        ))}
        {grouped.length === 0 && (
          <p className="text-center text-muted-foreground py-20">Nothing in this category yet.</p>
        )}
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
    </div>
  );
}

function MenuLine({ item }: { item: MenuItem }) {
  const badge = item.tags?.includes("signature")
    ? { label: "signature", cls: "bg-[var(--hot-pink)] text-white" }
    : item.tags?.includes("popular")
    ? { label: "popular", cls: "bg-[var(--ink)] text-white" }
    : item.tags?.includes("new")
    ? { label: "new", cls: "bg-[var(--mint)] text-[var(--ink)]" }
    : null;

  return (
    <a
      href={ORDER_URL}
      target="_blank"
      rel="noreferrer"
      className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 hover:border-[var(--hot-pink)] hover:shadow-lg transition-all"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-display text-lg font-semibold leading-tight truncate">{item.name}</h3>
          {badge && (
            <span className={`text-[10px] font-bold tracking-wider uppercase rounded-full px-2 py-0.5 ${badge.cls}`}>
              {badge.label}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        )}
      </div>
      <div className="text-right shrink-0">
        <p className="font-heavy text-2xl text-[var(--hot-pink)] leading-none">
          {item.price === 0 ? "Free" : `${item.price.toFixed(item.price % 1 === 0 ? 0 : 1)} DT`}
        </p>
        <p className="mt-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground group-hover:text-[var(--hot-pink)]">
          Order →
        </p>
      </div>
    </a>
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
