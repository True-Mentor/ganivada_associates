"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("ga-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  function toggle(t: "dark" | "light") {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("ga-theme", t);
  }

  return (
    <div className="theme-toggle" aria-label="Toggle theme">
      <button className={theme === "dark" ? "is-on" : ""} onClick={() => toggle("dark")} aria-pressed={theme === "dark"}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
        Dark
      </button>
      <button className={theme === "light" ? "is-on" : ""} onClick={() => toggle("light")} aria-pressed={theme === "light"}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        Light
      </button>
      <style>{`
        .theme-toggle { position: fixed; right: 20px; bottom: 80px; z-index: 48; display: inline-flex; align-items: center; gap: 0; padding: 5px; border: 1px solid var(--rule); background: rgba(10,10,10,.7); backdrop-filter: saturate(140%) blur(10px); border-radius: 999px; font-family: 'Geist', sans-serif; font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase; transition: background .35s, border-color .35s; }
        .theme-toggle button { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; color: var(--bone-2); font-weight: 500; transition: all .3s; }
        .theme-toggle button.is-on { background: var(--gold); color: var(--obsidian); }
        .theme-toggle button:hover:not(.is-on) { color: var(--gold-soft); }
        .theme-toggle svg { width: 13px; height: 13px; }
        html[data-theme="light"] .theme-toggle { background: rgba(247,242,228,.85); border-color: rgba(58,53,43,.22); }
        html[data-theme="light"] .theme-toggle button { color: #3A352B; }
        html[data-theme="light"] .theme-toggle button.is-on { background: var(--ink); color: var(--paper); }
        html[data-theme="light"] .theme-toggle button:hover:not(.is-on) { color: var(--oxblood); }
        @media (max-width: 560px) { .theme-toggle { right: 14px; bottom: 70px; } .theme-toggle button { padding: 7px 11px; font-size: 10px; } }
      `}</style>
    </div>
  );
}
