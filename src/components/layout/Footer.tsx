import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Cheezy" className="h-12 w-auto rounded-md" />
            <div>
              <p className="font-display text-2xl font-semibold">Cheezy</p>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Baker & fine cake maker · Since 2022
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A neighborhood bakery and juice bar in Bizerte, baking fresh every day —
            pastries, brunch, cold-pressed juices, and a serious coffee program.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-3">Visit</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0 text-accent" /> Bd du 14 Janvier, Bizerte</li>
            <li>Mon–Sun · 7:00 — 23:00</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-accent">Menu</Link></li>
            <li><Link to="/locations" className="hover:text-accent">Locations</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href="#" aria-label="Instagram" className="size-9 inline-flex items-center justify-center rounded-full bg-background border border-border hover:bg-accent hover:text-accent-foreground transition-colors"><Instagram className="size-4" /></a>
            <a href="#" aria-label="Facebook" className="size-9 inline-flex items-center justify-center rounded-full bg-background border border-border hover:bg-accent hover:text-accent-foreground transition-colors"><Facebook className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Cheezy. All rights reserved.</span>
          <span>Made with care in Bizerte, Tunisia.</span>
        </div>
      </div>
    </footer>
  );
}
