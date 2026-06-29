import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, MapPin } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { categories } from "@/data/menu";
import { useLocation } from "@/lib/location-context";

const ORDER_URL = "https://e-shkoon.com/cart/menu/NjehOhhE";

function tagBadge(tag: string) {
  if (tag === "signature") return "bg-[var(--hot-pink)] text-white";
  if (tag === "popular") return "bg-[var(--ink)] text-white";
  if (tag === "new") return "bg-[var(--mint)] text-[var(--ink)]";
  return "bg-secondary text-foreground";
}

export function ItemDetailDialog({
  item,
  open,
  onOpenChange,
}: {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { current } = useLocation();
  const catName = item ? categories.find((c) => c.slug === item.category)?.name : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0 border-0">
        {item && (
          <>
            <div className="relative aspect-[16/10] bg-[var(--hot-pink)]/10">
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-script text-7xl text-[var(--hot-pink)]/40">
                  Cheezy
                </div>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-1 ${tagBadge(t)}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--hot-pink)]">{catName}</p>
              <DialogTitle className="mt-1 font-heavy uppercase text-3xl sm:text-4xl tracking-tight leading-[0.95]">
                {item.name}
              </DialogTitle>
              <DialogDescription className="mt-3 text-base text-muted-foreground">
                {item.description || "Made fresh in-house."}
              </DialogDescription>

              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-[var(--hot-pink)]" />
                Available at {current.name.replace("Cheezy — ", "")} · {current.city}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 pt-6 border-t border-border">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Price</p>
                  <p className="font-heavy text-4xl text-[var(--hot-pink)] leading-none mt-1">
                    {item.price === 0 ? "Free" : `${item.price.toFixed(item.price % 1 === 0 ? 0 : 1)} DT`}
                  </p>
                </div>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-6 py-3.5 text-sm font-bold hover:bg-[var(--hot-pink)] transition-colors"
                >
                  Order on shkoon <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
