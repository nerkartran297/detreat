"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";
import { CHROME, ZALO_URL } from "@/lib/chrome-copy";
import {
  CATEGORY_LABELS,
  PRODUCTS,
  PRODUCTS_COPY,
  PRODUCT_DESCS,
  PRODUCT_NAMES,
  type ProductCategory,
  type ProductFilter,
} from "@/lib/copy/products";
import styles from "./products.module.css";

const CATEGORY_KEYS: ProductCategory[] = [
  "tieu-am",
  "tan-am",
  "bass-trap",
  "ceiling-cloud",
];

function isCategory(value: string | null): value is ProductCategory {
  return value !== null && (CATEGORY_KEYS as string[]).includes(value);
}

// The design is an MPA: every navigation reloads the page and re-derives the
// filter from ?cat= (resetting to "all" when absent). Mirror that by
// re-syncing local state whenever the search param changes, so same-route
// client navigations (e.g. the nav "Products" link) don't leave stale state.
// useSearchParams() is isolated here — inside its own Suspense boundary — so
// its static-prerender bailout doesn't blank out the rest of the page's HTML.
function SyncFilterFromUrl({
  onSync,
}: {
  onSync: (filter: ProductFilter) => void;
}) {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");
  const urlFilter: ProductFilter = isCategory(cat) ? cat : "all";
  useEffect(() => {
    onSync(urlFilter);
  }, [urlFilter, onSync]);
  return null;
}

export default function ProductsPage() {
  const { lang } = useLang();
  const [filter, setFilter] = useState<ProductFilter>("all");

  useReveal([lang, filter], 0.08);

  const t = PRODUCTS_COPY[lang];
  const chrome = CHROME[lang];
  const cats = CATEGORY_LABELS[lang];
  const names = PRODUCT_NAMES[lang];
  const descs = PRODUCT_DESCS[lang];

  const all = PRODUCTS.map((p, i) => ({
    ...p,
    name: names[i],
    desc: descs[i],
    cat: cats[p.key],
  }));
  const shown = filter === "all" ? all : all.filter((p) => p.key === filter);

  const filterDefs: { key: ProductFilter; label: string; count: number }[] = [
    { key: "all", label: t.all, count: all.length },
    ...CATEGORY_KEYS.map((key) => ({
      key,
      label: cats[key],
      count: all.filter((p) => p.key === key).length,
    })),
  ];

  return (
    <>
      <Suspense fallback={null}>
        <SyncFilterFromUrl onSync={setFilter} />
      </Suspense>
      <Nav page="products" />

      <header className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowLabel}>{t.eyebrow}</span>
        </div>
        <h1 className={styles.title}>
          {t.title} <span className={styles.titleAccent}>{t.titleAccent}</span>
        </h1>
        <p className={styles.sub}>{t.sub}</p>
      </header>

      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          {filterDefs.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={
                filter === f.key
                  ? `${styles.tab} ${styles.tabActive}`
                  : styles.tab
              }
            >
              {f.label} <span className={styles.tabCount}>{f.count}</span>
            </button>
          ))}
        </div>
      </div>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {shown.map((p, i) => (
            <a
              key={`${filter}-${p.slug}`}
              href={p.href}
              className={styles.card}
              style={{ animationDelay: `${(i * 0.05).toFixed(2)}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardChip}>{p.cat}</span>
                <span className={styles.cardNrc}>NRC {p.nrc}</span>
              </div>
              <div className={styles.cardImgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.cardImg}
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.cardFoot}>
                <span className={styles.cardPrice}>{t.priceOnRequest}</span>
                <span className={styles.cardDetails}>{t.details}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={`dt-reveal ${styles.ctaTitle}`}>
          {t.ctaTitle}{" "}
          <span className={styles.ctaAccent}>{t.ctaTitleAccent}</span>
        </h2>
        <p className={`dt-reveal ${styles.ctaSub}`}>{t.ctaSub}</p>
        <div className={`dt-reveal ${styles.ctaBtns}`}>
          <a href={ZALO_URL} className="dt-btn-solid">
            {chrome.navCta}
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
