import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useLocation } from "@/lib/location-context";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Cheezy Bizerte" },
      { name: "description", content: "Find Cheezy. Two locations in Bizerte — Boulevard du 14 Janvier and a second shop coming soon." },
      { property: "og:title", content: "Locations — Cheezy" },
      { property: "og:description", content: "Find Cheezy in Bizerte." },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const { current, all, setLocationId } = useLocation();
  return (
    <div>
      <section className="bg-secondary/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Visit</p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold">Our Shops</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Switch between locations any time. Your choice is remembered across the site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-8">
        {all.map((loc) => {
          const isCurrent = loc.id === current.id;
          return (
            <article
              key={loc.id}
              className={
                "rounded-3xl overflow-hidden border bg-card shadow-sm transition-all " +
                (isCurrent ? "border-primary ring-2 ring-primary/30" : "border-border")
              }
            >
              <div className="aspect-[16/10] bg-secondary">
                <iframe
                  title={loc.name}
                  src={loc.embedUrl}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-2xl font-semibold">{loc.name}</h2>
                  {!loc.available && (
                    <span className="text-[10px] uppercase tracking-widest font-semibold bg-accent text-accent-foreground rounded-full px-2 py-1">
                      Coming soon
                    </span>
                  )}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-accent" /> {loc.address}, {loc.city}</li>
                  <li className="flex gap-2"><Clock className="size-4 mt-0.5 text-accent" /> {loc.hours}</li>
                </ul>
                <div className="mt-6 flex gap-3 flex-wrap">
                  {loc.available && (
                    <button
                      onClick={() => setLocationId(loc.id)}
                      disabled={isCurrent}
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold disabled:opacity-60"
                    >
                      {isCurrent ? "Selected" : "Select this shop"}
                    </button>
                  )}
                  {loc.available && (
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
                    >
                      Directions <ArrowRight className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
