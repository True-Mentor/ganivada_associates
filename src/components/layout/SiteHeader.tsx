"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice", href: "/practice-areas" },
  { label: "Chambers", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function NavThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("ga-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ga-theme", next);
  }

  return (
    <button
      className="nav__theme"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        /* Sun icon */
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        /* Moon icon */
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      )}
    </button>
  );
}

export function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav${solid ? " is-solid" : ""}`} id="nav">
        <Link href="/" className="nav__brand" aria-label="Ganivada & Associates home">
          <span className="nav__mono">G</span>
          <span className="nav__name">Ganivada <em>&amp;</em> Associates</span>
        </Link>

        <nav className="nav__links" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="nav__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav__right">
          <NavThemeToggle />
          <Link href="/contact" className="nav__cta">
            Book consultation →
          </Link>
          <button
            className="nav__hamburger"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`nav-drawer${drawerOpen ? " is-open" : ""}`}
        aria-hidden={!drawerOpen}
      >
        <button className="close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>×</button>
        {navLinks.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setDrawerOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/vision-mission" onClick={() => setDrawerOpen(false)}>Vision &amp; Mission</Link>
        <Link href="/resources" onClick={() => setDrawerOpen(false)}>Resources</Link>
        <Link href="/careers" onClick={() => setDrawerOpen(false)}>Careers</Link>
      </div>

      <style>{`
        .nav__brand { display: flex; align-items: center; gap: 14px; }
        .nav__mono { width: 38px; height: 38px; border: 1px solid var(--gold); display: grid; place-items: center; color: var(--gold); font-family: 'Newsreader', Georgia, serif; font-style: italic; font-weight: 400; font-size: 18px; position: relative; flex-shrink: 0; }
        .nav__mono::before { content: ""; position: absolute; inset: 3px; border: 1px solid var(--gold); opacity: .3; }
        .nav__name { font-family: 'Newsreader', Georgia, serif; font-size: 20px; letter-spacing: .04em; font-weight: 400; color: var(--bone); }
        .nav__name em { font-style: italic; color: var(--gold); font-weight: 400; }
        html[data-theme="light"] .nav__name { color: var(--ink); }
        html[data-theme="light"] .nav__mono { border-color: var(--oxblood); color: var(--oxblood); }
        html[data-theme="light"] .nav__mono::before { border-color: var(--oxblood); }
        .nav__links { display: flex; gap: 34px; align-items: center; justify-self: center; }
        .nav__link { font-family: 'Geist', sans-serif; font-size: 11.5px; letter-spacing: .22em; text-transform: uppercase; color: var(--bone-2); font-weight: 500; position: relative; padding: 6px 0; }
        .nav__link:hover { color: var(--gold-soft); }
        html[data-theme="light"] .nav__link { color: #3A352B; }
        html[data-theme="light"] .nav__link:hover { color: var(--oxblood); }
        .nav__right { display: flex; align-items: center; gap: 18px; }
        .nav__theme { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border: 1px solid var(--rule-light); color: var(--bone-2); transition: color .3s, border-color .3s; flex-shrink: 0; }
        .nav__theme:hover { color: var(--gold); border-color: var(--gold); }
        .nav__theme svg { width: 16px; height: 16px; }
        html[data-theme="light"] .nav__theme { color: #3A352B; border-color: rgba(58,53,43,.4); }
        html[data-theme="light"] .nav__theme:hover { color: var(--oxblood); border-color: var(--oxblood); }
        .nav__cta { font-family: 'Newsreader', Georgia, serif; font-size: 14.5px; letter-spacing: .02em; font-style: italic; border-bottom: 1px solid var(--bone); padding-bottom: 2px; color: var(--bone); }
        .nav__cta:hover { color: var(--gold); border-color: var(--gold); }
        html[data-theme="light"] .nav__cta { color: var(--ink); border-bottom-color: var(--ink); }
        html[data-theme="light"] .nav__cta:hover { color: var(--oxblood); border-color: var(--oxblood); }
        .nav__hamburger { display: none; width: 34px; height: 34px; border: 1px solid var(--rule-light); align-items: center; justify-content: center; flex-direction: column; gap: 5px; }
        .nav__hamburger span { display: block; width: 18px; height: 1px; background: var(--bone); }
        html[data-theme="light"] .nav__hamburger { border-color: var(--ink); }
        html[data-theme="light"] .nav__hamburger span { background: var(--ink); }
        @media (max-width: 1024px) { .nav__links { display: none; } .nav__cta { display: none; } .nav__hamburger { display: flex; } }
        .nav-drawer { position: fixed; inset: 0; background: var(--obsidian); z-index: 55; display: flex; flex-direction: column; padding: 88px var(--pad-x) 40px; transform: translateY(-100%); transition: transform .55s cubic-bezier(.7,0,.2,1); }
        .nav-drawer.is-open { transform: translateY(0); }
        .nav-drawer a { font-family: 'Newsreader', Georgia, serif; font-size: 42px; font-weight: 300; color: var(--bone); padding: 14px 0; border-bottom: 1px solid var(--rule); letter-spacing: -.01em; }
        .nav-drawer a:hover { color: var(--gold); font-style: italic; }
        .nav-drawer .close { position: absolute; top: 24px; right: var(--pad-x); font-size: 32px; color: var(--bone); font-family: 'Newsreader', serif; }
        html[data-theme="light"] .nav-drawer { background: var(--paper); }
        html[data-theme="light"] .nav-drawer a { color: var(--ink); border-bottom-color: rgba(58,53,43,.18); }
        html[data-theme="light"] .nav-drawer a:hover { color: var(--oxblood); }
        html[data-theme="light"] .nav-drawer .close { color: var(--ink); }
        @media (max-width: 768px) { .nav-drawer a { font-size: 32px; padding: 12px 0; } .nav-drawer { padding: 80px var(--pad-x) 30px; } }
      `}</style>
    </>
  );
}
