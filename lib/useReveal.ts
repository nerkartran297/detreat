"use client";

import { useEffect } from "react";

/**
 * Observes every `.dt-reveal` element that hasn't revealed yet and adds
 * `.dt-in` once it enters the viewport (once per element).
 * Re-run on state that re-renders new `.dt-reveal` elements (e.g. lang,
 * filters) by passing those values in `deps`.
 */
export function useReveal(deps: unknown[] = [], threshold = 0.1) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("dt-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold },
    );
    document
      .querySelectorAll(".dt-reveal:not(.dt-in)")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
