import { ArrowRight, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-nobg.png.asset.json";
import { useLocation } from "@/lib/location-context";

export function ShopGate({ onChosen }: { onChosen?: () => void }) {
  const { all, setLocationId } = useLocation();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--hot-pink)] text-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 size-[40rem] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 size-[40rem] rounded-full bg-[var(--mint)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <img src={logo.url} alt="Cheezy" className="mx-auto h-24 sm:h-28 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] brightness-0 invert" />
          <p className="mt-8 text-xs font-bold tracking-[0.3em] uppercase opacity-90">First, the important bit</p>
          <h1 className="mt-3 leading-[0.85]">
            <span className="block font-heavy uppercase text-[clamp(3rem,10vw,6rem)] tracking-tight">Pick</span>
            <span className="block font-script text-[var(--mint)] text-[clamp(2.75rem,9vw,5.5rem)] -mt-2">
              your shop
            </span>
          </h1>
          <p className="mt-5 text-lg opacity-95">
            We have two spots in Bizerte. Choose where you'd like to eat — we'll show you what's on today.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {all.map((loc, i) => (
            <motion.button
              key={loc.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => {
                if (!loc.available) return;
                setLocationId(loc.id);
                onChosen?.();
              }}
              disabled={!loc.available}
              className={
                "group text-left rounded-3xl p-7 transition-all " +
                (loc.available
                  ? "bg-white text-[var(--ink)] hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                  : "bg-white/10 text-white/70 border-2 border-dashed border-white/30 cursor-not-allowed")
              }
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                  {loc.available ? "Open now" : "Coming soon"}
                </span>
                {loc.available && (
                  <span className="size-2.5 rounded-full bg-[var(--mint)] ring-4 ring-[var(--mint)]/30" />
                )}
              </div>
              <h2 className="mt-3 font-heavy uppercase text-3xl sm:text-4xl leading-none tracking-tight">
                {loc.name.replace("Cheezy — ", "")}
              </h2>
              <p className="mt-3 flex items-start gap-2 text-sm">
                <MapPin className="size-4 mt-0.5 shrink-0 text-[var(--hot-pink)]" />
                {loc.address}, {loc.city}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm opacity-80">
                <Clock className="size-4 text-[var(--hot-pink)]" /> {loc.hours}
              </p>
              {loc.available && (
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-5 py-2.5 text-sm font-bold group-hover:bg-[var(--hot-pink)] transition-colors">
                  See the menu <ArrowRight className="size-4" />
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
