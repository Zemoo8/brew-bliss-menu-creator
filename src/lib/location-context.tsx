import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { locations, defaultLocationId, type Location } from "@/data/locations";

type Ctx = {
  current: Location;
  setLocationId: (id: string) => void;
  all: Location[];
};

const LocationContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "cheezy.location";

export function LocationProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<string>(defaultLocationId);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && locations.some((l) => l.id === saved)) setId(saved);
    } catch {}
  }, []);

  const setLocationId = (next: string) => {
    setId(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const current = locations.find((l) => l.id === id) ?? locations[0];
  return (
    <LocationContext.Provider value={{ current, setLocationId, all: locations }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation must be used inside LocationProvider");
  return ctx;
}
