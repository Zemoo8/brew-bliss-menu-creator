import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Sparkles } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";
import drinks from "@/assets/drinks_trio.webp.asset.json";
import combo from "@/assets/combo_pistachio.webp.asset.json";
import cookies from "@/assets/cookies.webp.asset.json";
import team from "@/assets/team.jpg.asset.json";
import omelet from "@/assets/omelet.jpg.asset.json";
import butterfly from "@/assets/butterfly_drink.jpg.asset.json";
import muffin from "@/assets/muffin_dark.jpg.asset.json";
import tuna from "@/assets/tuna_sandwich.jpg.asset.json";
import { ItemCard } from "@/components/site/ItemCard";
import { featured } from "@/data/menu";
import { useLocation } from "@/lib/location-context";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cheezy — Baker & Fine Cake Maker · Bizerte" },
      { name: "description", content: "Fresh bakes, brunch, juices and serious coffee in Bizerte. Cheezy is a neighborhood bakery and café — since 2022." },
      { property: "og:title", content: "Cheezy — Baker & Fine Cake Maker" },
      { property: "og:description", content: "Fresh bakes, brunch, juices and serious coffee in Bizerte — since 2022." },
      { property: "og:image", content: combo.url },
      { name: "twitter:image", content: combo.url },
    ],
  }),
  component: Index,
});

function Index() {
  const { current } = useLocation();
  return (
    <div>
      {/* HERO — hot pink + bold display */}
      <section className="relative overflow-hidden bg-[var(--hot-pink)] text-white">
        <div className="absolute -top-32 -right-32 size-[36rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 size-[40rem] rounded-full bg-[var(--mint)]/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="size-3.5" /> Since 2022 · Bizerte
            </span>
            <h1 className="mt-5 leading-[0.85]">
              <span className="block font-heavy uppercase text-[clamp(4rem,12vw,9rem)] tracking-tight">Baked</span>
              <span className="block font-script text-[var(--mint)] text-[clamp(3.5rem,11vw,8rem)] -mt-3">
                served bright
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg opacity-95">
              A neighborhood bakery & juice bar. Hand-pulled coffee, cold-pressed juices,
              warm brunch, and pastries baked every morning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-6 py-3 text-sm font-bold hover:scale-[1.02] transition-transform"
              >
                See the menu <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-bold hover:bg-white/10 transition-colors"
              >
                <MapPin className="size-4" /> Find us
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm opacity-90">
              <span className="inline-flex items-center gap-2"><Clock className="size-4" /> 7:00 — 23:00 daily</span>
              <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> {current.city}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/20">
              <img src={combo.url} alt="Pistachio cheesecake & iced coffee" className="h-full w-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -left-4 sm:-left-10 bottom-10 w-44 rounded-2xl overflow-hidden shadow-xl ring-4 ring-[var(--mint)] rotate-[-6deg]"
            >
              <img src={drinks.url} alt="Iced drinks" className="w-full h-44 object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-2 top-6 w-32 rounded-2xl overflow-hidden shadow-xl ring-4 ring-[var(--ink)] rotate-[8deg] hidden sm:block"
            >
              <img src={muffin.url} alt="Muffin" className="w-full h-32 object-cover" />
            </motion.div>
            <img src={logo.url} alt="" className="absolute -bottom-6 -right-6 w-28 rounded-2xl shadow-lg hidden lg:block" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-[var(--ink)] text-white py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite] font-script text-3xl text-[var(--mint)]">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Fresh bakes", "★", "Cold-pressed juice", "★", "Pistachio everything", "★", "Brunch all day", "★", "Real coffee", "★"]
              .map((w, i) => <span key={`${k}-${i}`} className="opacity-95">{w}</span>)
          )}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>


      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Signatures</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold">What we're known for</h2>
          </div>
          <Link to="/menu" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold hover:text-accent">
            Full menu <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => <ItemCard key={item.id} item={item} />)}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-xl">
              <img src={team.url} alt="The Cheezy team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl px-5 py-3 shadow-lg border border-border">
              <p className="font-display text-3xl font-semibold text-accent">3 years</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">baking in Bizerte</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Our story</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-balance">
              A small kitchen with big appetite.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cheezy started as a family project in 2022 — a love letter to the bakery
              counters of Tunisia and the coffee bars of the world. Today we serve
              brunch, pastry, and juice from morning to late, in a room built for
              hanging out.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Read our story <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">From the counter</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-10">A day at Cheezy</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[omelet.url, butterfly.url, cookies.url, tuna.url, drinks.url, combo.url, muffin.url, team.url].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "row-span-2 aspect-square md:aspect-[3/4]" : "aspect-square"}`}
            >
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCATION CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 sm:p-14 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Visit us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">{current.name}</h2>
            <p className="mt-2 opacity-90">{current.address}, {current.city} · {current.hours}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={current.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:opacity-90"
            >
              Get directions <ArrowRight className="size-4" />
            </a>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10"
            >
              All locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
