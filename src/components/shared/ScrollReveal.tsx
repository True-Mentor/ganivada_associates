"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;
    let raf1: number;
    let raf2: number;

    // Two rAF passes: first lets React commit the DOM,
    // second ensures layout/paint is settled before IntersectionObserver measures.
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        // Strip .in from previous page so elements don't flash in pre-animated
        document.querySelectorAll<HTMLElement>(".reveal.in, .reveal-stagger.in").forEach((el) => {
          el.classList.remove("in");
        });

        const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger");
        if (!els.length) return;

        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in");
                io!.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
        );

        els.forEach((el) => io!.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
