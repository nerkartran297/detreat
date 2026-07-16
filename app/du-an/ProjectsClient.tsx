"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";
import { CHROME, ZALO_URL } from "@/lib/chrome-copy";
import { PROJECTS_COPY, GALLERY_SRCS } from "@/lib/copy/projects";
import styles from "./page.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProjectsClient() {
  const { lang } = useLang();
  const t = PROJECTS_COPY[lang];
  const chrome = CHROME[lang];
  const [lightbox, setLightbox] = useState(-1);

  useReveal([lang], 0.08);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox < 0) return;
      if (e.key === "Escape") setLightbox(-1);
      if (e.key === "ArrowLeft")
        setLightbox((s) => (s + GALLERY_SRCS.length - 1) % GALLERY_SRCS.length);
      if (e.key === "ArrowRight")
        setLightbox((s) => (s + 1) % GALLERY_SRCS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <Nav page="projects" />

      <header className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowLabel}>Portfolio</span>
        </div>
        <h1 className={styles.h1}>
          {t.title} <span className={styles.gold}>{t.titleAccent}</span>
        </h1>
        <div className={styles.headerRow}>
          <p className={styles.sub}>{t.sub}</p>
          <span className={styles.count}>
            {pad(GALLERY_SRCS.length)}{" "}
            <span className={styles.countLabel}>{t.spaces}</span>
          </span>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {GALLERY_SRCS.map((src, i) => (
            <div
              key={src}
              className={`dt-reveal ${styles.tile}`}
              style={{
                gridRow: i % 7 === 0 ? "span 2" : "auto",
                gridColumn: i % 11 === 3 ? "span 2" : "auto",
              }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`De-treat project ${i + 1}`}
                loading="lazy"
                className={styles.tileImg}
              />
              <span className={styles.tileLabel}>{pad(i + 1)}</span>
            </div>
          ))}
        </div>
      </section>

      {lightbox >= 0 && (
        <div className={styles.lightbox} onClick={() => setLightbox(-1)}>
          <img
            src={GALLERY_SRCS[lightbox]}
            alt="De-treat project"
            className={styles.lightboxImg}
          />
          <button
            className={`${styles.lbArrow} ${styles.lbPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (s) => (s + GALLERY_SRCS.length - 1) % GALLERY_SRCS.length,
              );
            }}
          >
            ‹
          </button>
          <button
            className={`${styles.lbArrow} ${styles.lbNext}`}
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((s) => (s + 1) % GALLERY_SRCS.length);
            }}
          >
            ›
          </button>
          <button className={styles.lbClose} onClick={() => setLightbox(-1)}>
            ✕
          </button>
          <span className={styles.lbCounter}>
            {pad(lightbox + 1)} / {pad(GALLERY_SRCS.length)}
          </span>
        </div>
      )}

      <section className={styles.cta}>
        <h2 className={`dt-reveal ${styles.ctaTitle}`}>
          {t.ctaTitle} <span className={styles.gold}>{t.ctaTitleAccent}</span>
        </h2>
        <div className={`dt-reveal ${styles.ctaBtns}`}>
          <a href={ZALO_URL} className="dt-btn-solid">
            {t.ctaBtn}
          </a>
          <Link href="/lien-he" className="dt-btn-outline">
            {chrome.navContact}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
