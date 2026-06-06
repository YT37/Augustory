import { useEffect, useState } from "react";

/**
 * Light / dark theme, driven by a `data-theme` attribute on <html> and the
 * existing CSS variables. Persists the choice to localStorage. The initial
 * value is read from the attribute set by the inline script in index.html
 * (which prevents a flash of the wrong theme on load).
 */
export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore unavailable storage */
    }
  }, [theme]);

  const toggle = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
