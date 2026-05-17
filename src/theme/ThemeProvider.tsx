import { useCallback, useEffect, useMemo, useState } from "react";
import { themeVars, staticVars } from "../tokens/cssVars";
import { borderRadius, shadow } from "../tokens/spacing";
import { fontSize, fontWeight, lineHeight } from "../tokens/typography";
import { darkTheme, lightTheme, type ThemeMode } from "../tokens/themes";
import { ThemeContext } from "./ThemeContext";

// Written once on mount — these never change between light and dark mode
function applyStaticTokens(): void {
  const root = document.documentElement;

  const staticMap: Record<string, string> = {
    // Border radius
    [staticVars.borderRadius.none]: borderRadius.none,
    [staticVars.borderRadius.sm]: borderRadius.sm,
    [staticVars.borderRadius.md]: borderRadius.md,
    [staticVars.borderRadius.lg]: borderRadius.lg,
    [staticVars.borderRadius.xl]: borderRadius.xl,
    [staticVars.borderRadius.full]: borderRadius.full,
    // Shadow
    [staticVars.shadow.none]: shadow.none,
    [staticVars.shadow.sm]: shadow.sm,
    [staticVars.shadow.md]: shadow.md,
    [staticVars.shadow.lg]: shadow.lg,
    [staticVars.shadow.xl]: shadow.xl,
    // Font size
    [staticVars.fontSize.xs]: fontSize.xs,
    [staticVars.fontSize.sm]: fontSize.sm,
    [staticVars.fontSize.md]: fontSize.md,
    [staticVars.fontSize.lg]: fontSize.lg,
    [staticVars.fontSize.xl]: fontSize.xl,
    [staticVars.fontSize["2xl"]]: fontSize["2xl"],
    [staticVars.fontSize["3xl"]]: fontSize["3xl"],
    [staticVars.fontSize["4xl"]]: fontSize["4xl"],
    // Font weight
    [staticVars.fontWeight.regular]: fontWeight.regular,
    [staticVars.fontWeight.medium]: fontWeight.medium,
    [staticVars.fontWeight.semibold]: fontWeight.semibold,
    [staticVars.fontWeight.bold]: fontWeight.bold,
    // Line height
    [staticVars.lineHeight.none]: lineHeight.none,
    [staticVars.lineHeight.tight]: lineHeight.tight,
    [staticVars.lineHeight.normal]: lineHeight.normal,
    [staticVars.lineHeight.relaxed]: lineHeight.relaxed,
  };

  Object.entries(staticMap).forEach(([varName, value]) => {
    root.style.setProperty(varName, value);
  });
}

// Re-runs on every mode change — color tokens differ between light and dark
function applyTheme(mode: ThemeMode): void {
  const theme = mode === "light" ? lightTheme : darkTheme;
  const root = document.documentElement;

  (Object.keys(themeVars) as Array<keyof typeof themeVars>).forEach((group) => {
    (
      Object.keys(themeVars[group]) as Array<
        keyof (typeof themeVars)[typeof group]
      >
    ).forEach((key) => {
      const varName = themeVars[group][key];
      const value = (theme[group] as Record<string, string>)[key];
      root.style.setProperty(varName, value);
    });
  });

  root.setAttribute("data-theme", mode);
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

export function ThemeProvider({
  children,
  defaultMode = "light",
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const toggle = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  // Static tokens — mount only, no dependencies
  useEffect(() => {
    applyStaticTokens();
  }, []);

  // Theme tokens — re-run whenever mode changes
  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      theme: mode === "light" ? lightTheme : darkTheme,
      toggle,
    }),
    [mode, toggle],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
