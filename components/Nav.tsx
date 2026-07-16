"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLang } from "@/lib/i18n";
import { CHROME, ZALO_URL } from "@/lib/chrome-copy";
import styles from "./chrome.module.css";
import Link from "next/link";

export type NavPage = "home" | "products" | "projects" | "contact";

export default function Nav({ page }: { page: NavPage }) {
  const { lang, toggleLang } = useLang();
  const t = CHROME[lang];
  const isHome = page === "home";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  /* Lock body scroll + close on Escape while the overlay is open. */
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  /* If the viewport grows past the mobile breakpoint, dismiss the overlay. */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const links = isHome
    ? [
        { href: "/san-pham", label: t.navProducts, active: false },
        { href: "/du-an", label: t.navProjects, active: false },
        { href: "#quy-trinh", label: t.navProcess, active: false },
        { href: "#cau-chuyen", label: t.navStory, active: false },
      ]
    : [
        {
          href: "/san-pham",
          label: t.navProducts,
          active: page === "products",
        },
        { href: "/du-an", label: t.navProjects, active: page === "projects" },
        { href: "/#quy-trinh", label: t.navProcess, active: false },
        { href: "/lien-he", label: t.navContact, active: page === "contact" },
      ];

  return (
    <>
      <nav
        className={`${styles.nav} ${isHome ? styles.navHome : styles.navSub}`}
      >
        <Logo variant="nav" href={isHome ? "#top" : "/"} />
        <div className={styles.links}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`dt-nav ${l.active ? styles.linkActive : styles.link}`}
            >
              {l.label}
            </Link>
          ))}
          <button className={styles.langBtn} onClick={toggleLang}>
            {lang === "vi" ? "EN" : "VI"}
          </button>
          <a href={ZALO_URL} className={styles.ctaBtn}>
            {t.navCta}
          </a>
        </div>
        <button
          className={styles.hamburger}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.menuOverlay} role="dialog" aria-modal="true">
          <div className={styles.menuTop}>
            <span onClick={closeMenu} style={{ display: "flex" }}>
              <Logo variant="nav" href={isHome ? "#top" : "/"} />
            </span>
            <button
              className={styles.menuClose}
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ✕
            </button>
          </div>
          <div className={styles.menuLinks}>
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className={`${styles.menuLink} ${
                  l.active ? styles.menuLinkActive : ""
                }`}
                style={{
                  animation: "dt-fadeUp .7s cubic-bezier(.22,1,.36,1) both",
                  animationDelay: `${i * 0.06}s`,
                }}
              >
                <span className={styles.menuIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </Link>
            ))}
          </div>
          <div className={styles.menuBottom}>
            <button
              className={`${styles.langBtn} ${styles.menuBottomBtn}`}
              onClick={toggleLang}
            >
              {lang === "vi" ? "EN" : "VI"}
            </button>
            <a
              href={ZALO_URL}
              className={`${styles.ctaBtn} ${styles.menuBottomBtn}`}
              onClick={closeMenu}
            >
              {t.navCta}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
