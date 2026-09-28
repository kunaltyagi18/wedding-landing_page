"use client";

import { useEffect } from "react";

export function LovableBadgeRemover() {
  useEffect(() => {
    const remove = () => {
      // Remove by ID
      document.getElementById("lovable-badge")?.remove();

      // Remove custom element
      document
        .querySelectorAll("lovable-badge")
        .forEach((el) => el.remove());

      // Remove by data attribute
      document
        .querySelectorAll("[data-lovable-badge]")
        .forEach((el) => el.remove());

      // Remove anchor links to lovable.dev that are fixed-position
      document
        .querySelectorAll<HTMLAnchorElement>("a[href*='lovable.dev']")
        .forEach((el) => {
          const style = window.getComputedStyle(el);
          if (style.position === "fixed" || style.position === "absolute") {
            el.remove();
          }
        });

      // Remove any element with z-index > 9000 containing lovable text
      document.querySelectorAll<HTMLElement>("*").forEach((el) => {
        if (
          el.shadowRoot === null &&
          el.textContent?.toLowerCase().includes("lovable") &&
          window.getComputedStyle(el).position === "fixed"
        ) {
          el.remove();
        }
      });
    };

    // Run immediately
    remove();

    // Watch for dynamically injected badges
    const observer = new MutationObserver(remove);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
