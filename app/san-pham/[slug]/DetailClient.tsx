"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";
import { CHROME, TEL_URL, ZALO_URL } from "@/lib/chrome-copy";
import { CATEGORY_LABELS, PRODUCTS, PRODUCT_DESCS } from "@/lib/copy/products";
import {
  DETAIL_COPY,
  DETAIL_NAMES,
  PRODUCT_DETAILS,
  zaloMessage,
} from "@/lib/copy/product-detail";
import styles from "./detail.module.css";

export default function DetailClient({ slug }: { slug: string }) {
  const { lang } = useLang();
  const [color, setColor] = useState(0);

  /* The design is an MPA — each product page loads fresh with the first
     swatch selected. Mirror that on client navigations between details. */
  useEffect(() => {
    setColor(0);
  }, [slug]);

  useReveal([lang, slug], 0.08);

  const t = DETAIL_COPY[lang];
  const chrome = CHROME[lang];
  const cats = CATEGORY_LABELS[lang];

  const index = PRODUCTS.findIndex((p) => p.slug === slug);
  const product = PRODUCTS[index];
  const d = PRODUCT_DETAILS[slug];
  const name = DETAIL_NAMES[lang][slug];
  const shortName = name.split(" — ")[0];
  const desc = PRODUCT_DESCS[lang][index];
  const cat = cats[product.key];
  const catHref = `/san-pham?cat=${product.key}`;

  const colors = d.colors[lang];
  const zaloHref = `${ZALO_URL}?text=${encodeURIComponent(
    zaloMessage(lang, name),
  )}`;

  /* Spec keys order: dims, thickness, material, nrc, range, weight, fire,
     install — as in the design script. */
  const specs = [
    d.dims,
    d.th,
    d.mat[lang],
    product.nrc,
    d.range[lang],
    d.wt,
    t.fire,
    d.install[lang],
  ].map((v, i) => ({ k: t.specKeys[i], v }));

  const related = PRODUCTS.map((p, i) => ({ ...p, index: i }))
    .filter((p) => p.key === product.key && p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Nav page="products" />

      {/* Key by slug so entry animations + reveals replay on client navs
          between detail pages, matching the MPA design. */}
      <Fragment key={slug}>
        <section className={styles.crumbSection}>
          <div className={styles.crumb}>
            <Link href="/san-pham" className={styles.crumbLink}>
              {chrome.navProducts}
            </Link>
            <span className={styles.crumbSep}>/</span>
            <Link href={catHref} className={styles.crumbLink}>
              {cat}
            </Link>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.crumbCurrent}>{shortName}</span>
          </div>
        </section>

        <section className={styles.main}>
          <div className={styles.mainGrid}>
            <div className={styles.left}>
              <div className={styles.stage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.stageImg} src={product.img} alt={name} />
                <span className={styles.stageChip}>{cat}</span>
                <span className={styles.stageNrc}>NRC {product.nrc}</span>
              </div>
              <p className={styles.imgNote}>{t.imgNote}</p>
            </div>

            <div>
              <h1 className={styles.title}>{name}</h1>
              <p className={styles.desc}>{desc}</p>

              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>{t.price}</span>
                <span className={styles.priceValue}>{t.priceValue}</span>
              </div>

              <div className={styles.finish}>
                <span className={styles.pickLabel}>{t.finish}</span>
                <div className={styles.colorRow}>
                  {colors.map((label, i) => (
                    <button
                      key={label}
                      onClick={() => setColor(i)}
                      className={
                        i === color
                          ? `${styles.colorBtn} ${styles.colorBtnActive}`
                          : styles.colorBtn
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.ctaRow}>
                <a href={zaloHref} className={styles.zaloBtn}>
                  {t.askZalo}
                </a>
                <a href={TEL_URL} className={styles.telBtn}>
                  {t.call}
                </a>
              </div>

              <div className={styles.specsBlock}>
                <h2 className={styles.specsTitle}>{t.specs}</h2>
                <div className={styles.specRows}>
                  {specs.map((s) => (
                    <div key={s.k} className={styles.specRow}>
                      <span className={styles.specKey}>{s.k}</span>
                      <span className={styles.specVal}>{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fitBlock}>
                <span className={styles.pickLabel}>{t.fitFor}</span>
                <div className={styles.fitChips}>
                  {d.fit[lang].map((f) => (
                    <span key={f} className={styles.fitChip}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.aboutInner}>
            <div className="dt-reveal">
              <div className="dt-eyebrow">
                <span className="dt-eyebrow-line" />
                <span className="dt-eyebrow-label">{t.aboutEyebrow}</span>
              </div>
              <h2 className={styles.aboutTitle}>{t.aboutTitle}</h2>
            </div>
            <div className="dt-reveal">
              <div className={styles.paras}>
                <p>{d.para1[lang]}</p>
                <p>{d.para2[lang]}</p>
              </div>
              <div className={styles.hlGrid}>
                {d.hl[lang].map((text, i) => (
                  <div key={text} className={styles.hlCell}>
                    <span className={styles.hlNum}>{`0${i + 1}`}</span>
                    <span className={styles.hlText}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <div className={`dt-reveal ${styles.relatedHead}`}>
              <div>
                <div className="dt-eyebrow">
                  <span className="dt-eyebrow-line" />
                  <span className="dt-eyebrow-label">{cat}</span>
                </div>
                <h2 className={styles.relatedTitle}>{t.relatedTitle}</h2>
              </div>
              <Link href={catHref} className="dt-gold-link">
                {t.relatedAll}
              </Link>
            </div>
            <div className={`dt-reveal ${styles.relatedGrid}`}>
              {related.map((r, i) => (
                <Link
                  key={r.slug}
                  href={`/san-pham/${r.slug}`}
                  className={styles.relCard}
                  style={{ animationDelay: `${(i * 0.08).toFixed(2)}s` }}
                >
                  <div className={styles.relTop}>
                    <span className={styles.relChip}>{cats[r.key]}</span>
                    <span className={styles.relNrc}>NRC {r.nrc}</span>
                  </div>
                  <div className={styles.relImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={styles.relImg}
                      src={r.img}
                      alt={DETAIL_NAMES[lang][r.slug]}
                      loading="lazy"
                    />
                  </div>
                  <h3 className={styles.relName}>{DETAIL_NAMES[lang][r.slug]}</h3>
                  <p className={styles.relDesc}>{PRODUCT_DESCS[lang][r.index]}</p>
                  <div className={styles.relFoot}>
                    <span className={styles.relPrice}>{t.priceValue}</span>
                    <span className={styles.relDetails}>{t.details}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Fragment>

      <Footer />
    </>
  );
}
