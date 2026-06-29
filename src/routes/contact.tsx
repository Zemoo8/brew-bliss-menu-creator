import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useLocation } from "@/lib/location-context";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cheezy Bizerte" },
      { name: "description", content: "Get in touch with Cheezy. Address, hours, and directions in Bizerte." },
      { property: "og:title", content: "Contact Cheezy" },
      { property: "og:description", content: "Visit us, write to us, or follow along." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { current } = useLocation();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12">
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Say hi</p>
        <h1 className="font-display text-5xl sm:text-6xl font-semibold">Come visit, or write us.</h1>
        <p className="mt-5 text-muted-foreground max-w-md">
          The fastest way to reach us is in person. We're behind the counter most days.
        </p>

        <dl className="mt-10 space-y-5">
          <div className="flex gap-4">
            <MapPin className="size-5 mt-0.5 text-accent" />
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Address</dt>
              <dd className="font-medium">{current.address}, {current.city}</dd>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="size-5 mt-0.5 text-accent" />
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Hours</dt>
              <dd className="font-medium">{current.hours}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-8 flex gap-3">
          <a href="#" aria-label="Instagram" className="size-11 inline-flex items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"><Instagram className="size-5" /></a>
          <a href="#" aria-label="Facebook" className="size-11 inline-flex items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"><Facebook className="size-5" /></a>
        </div>
      </div>

      <div className="aspect-square lg:aspect-auto rounded-3xl overflow-hidden border border-border">
        <iframe
          title="Cheezy map"
          src={current.embedUrl}
          className="w-full h-full min-h-[400px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
