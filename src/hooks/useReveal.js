import { useEffect } from "react";

/**
 * Adds the `in` class to every `.reveal` element when it scrolls into view.
 * Staggering is handled per-element via inline `style={{ transitionDelay }}`.
 * Re-runs whenever `dep` changes (e.g. on route change) so new pages animate.
 */
export default function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
