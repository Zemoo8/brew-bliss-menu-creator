import type { MenuItem } from "@/data/menu";
import { motion } from "framer-motion";

export function ItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-sm hover:shadow-xl"
    >
      <div className="aspect-[4/3] bg-secondary overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-primary/30 font-display text-4xl">
            Cheezy
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-tight">{item.name}</h3>
          <span className="shrink-0 rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-xs font-semibold">
            {item.price.toFixed(item.price % 1 === 0 ? 0 : 1)} TND
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        {item.tags?.includes("signature") && (
          <span className="mt-3 inline-block text-[10px] font-semibold tracking-widest uppercase text-accent">
            ★ Signature
          </span>
        )}
      </div>
    </motion.article>
  );
}
