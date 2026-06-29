import type { MenuItem } from "@/data/menu";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function tagBadge(tag: string) {
  if (tag === "signature") return "bg-[var(--hot-pink)] text-white";
  if (tag === "popular") return "bg-[var(--ink)] text-white";
  if (tag === "new") return "bg-[var(--mint)] text-[var(--ink)]";
  return "bg-secondary text-foreground";
}

export function ItemCard({ item, onClick }: { item: MenuItem; onClick?: () => void }) {
  const primaryTag = item.tags?.find((t) => t === "signature" || t === "popular" || t === "new");

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group w-full text-left flex items-stretch gap-0 rounded-2xl bg-card border border-border overflow-hidden hover:border-[var(--hot-pink)] hover:shadow-lg transition-all"
    >
      <div className="relative w-28 sm:w-32 shrink-0 bg-[var(--hot-pink)]/10 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-script text-3xl text-[var(--hot-pink)]/40">
            Cheezy
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 p-4 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display text-base sm:text-lg font-semibold leading-tight truncate">
                {item.name}
              </h3>
              {primaryTag && (
                <span className={`text-[9px] font-bold tracking-wider uppercase rounded-full px-1.5 py-0.5 ${tagBadge(primaryTag)}`}>
                  {primaryTag}
                </span>
              )}
            </div>
            {item.description && (
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
          <ChevronRight className="size-4 text-muted-foreground shrink-0 mt-1 group-hover:text-[var(--hot-pink)] group-hover:translate-x-0.5 transition-all" />
        </div>
        <p className="mt-auto pt-2 font-heavy text-xl text-[var(--hot-pink)] leading-none">
          {item.price === 0 ? "Free" : `${item.price.toFixed(item.price % 1 === 0 ? 0 : 1)} DT`}
        </p>
      </div>
    </motion.button>
  );
}
