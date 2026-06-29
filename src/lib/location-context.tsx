import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { locations, defaultLocationId, type Location } from "@/data/locations";

type Ctx = {
  current: Location;
  setLocationId: (id: string) => void;
  all: Location[];
  hasChosen: boolean;
  clearChoice: () => void;
};

const LocationContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "cheezy.location";

export function LocationProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<string>(defaultLocationId);
  const [hasChosen, setHasChosen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && locations.some((l) => l.id === saved)) {
        setId(saved);
        setHasChosen(true);
      }
    } catch {}
  }, []);

  const setLocationId = (next: string) => {
    setId(next);
    setHasChosen(true);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const clearChoice = () => {
    setHasChosen(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const current = locations.find((l) => l.id === id) ?? locations[0];
  return (
    <LocationContext.Provider value={{ current, setLocationId, all: locations, hasChosen, clearChoice }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation must be used inside LocationProvider");
  return ctx;
}
