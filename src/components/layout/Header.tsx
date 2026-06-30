import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, MapPin, ChevronDown, X } from "lucide-react";
import logo from "@/assets/logo-nobg.png.asset.json";
import { useLocation } from "@/lib/location-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { current, all, setLocationId } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="Cheezy home">
          <img src={logo.url} alt="Cheezy — Baker and Fine Cake Maker" className="h-14 sm:h-16 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-full bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-full border border-border hover:bg-secondary transition-colors">
              <MapPin className="size-4 text-accent" />
              <span className="max-w-[160px] truncate">{current.city}</span>
              <ChevronDown className="size-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel>Choose a shop</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {all.map((loc) => (
                <DropdownMenuItem
                  key={loc.id}
                  onClick={() => loc.available && setLocationId(loc.id)}
                  disabled={!loc.available}
                  className="flex flex-col items-start gap-0.5 py-2"
                >
                  <span className="font-medium">{loc.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {loc.address}{!loc.available && " · soon"}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-secondary text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
