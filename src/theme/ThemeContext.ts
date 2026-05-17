import { createContext } from "react";
import type { Theme, ThemeMode } from "../tokens/themes";

export interface ThemeContextValue {
  mode: ThemeMode;
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
