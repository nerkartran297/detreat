"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";
import { ZALO_URL, TEL_URL } from "@/lib/chrome-copy";
import {
  HOME_COPY,
  CATEGORY_IMAGES,
  PROJECT_TILES,
  TEAM_IMG,
  GEAR_IMG,
  FOUNDER_IMG,
} from "@/lib/copy/home";
import styles from "@/app/home.module.css";

/* Exact transition list from the design: reveal delay applies only to
 * opacity/transform — border/background/box-shadow stay at 0s. */
const STEP_TRANSITION =
  "opacity 1.1s var(--ease), transform 1.1s var(--ease), border-color .5s, background .5s, box-shadow .6s ease";

export default function HomePage() {
  const { lang } = useLang();
  const t = HOME_COPY[lang];
  const heroBgRef = useRef<HTMLDivElement>(null);

  useReveal([lang], 0.12);

  useEffect(() => {
    const onScroll = () => {
      const bg = heroBgRef.current;
      if (bg) {
        const y = Math.min(window.scrollY, window.innerHeight);
        bg.style.transform = `scale(1.02) translateY(${y * 0.18}px)`;
      }
    };
    const timer = setTimeout(
      () => window.addEventListener("scroll", onScroll, { passive: true }),
      3000,
    );
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const marqueeItems = [...t.marquee, ...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <>
      <Nav page="home" />

      {/* 1. Hero */}
      <header id="top" className={styles.hero}>
        <div className={styles.heroBg} ref={heroBgRef} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={`dt-eyebrow ${styles.heroEyebrow}`}>
            <span className="dt-eyebrow-line" />
            <span className="dt-eyebrow-label">{t.heroEyebrow}</span>
          </div>
          <h1 className={styles.heroTitle}>
            {t.heroTitle}{" "}
            <span className={styles.accent}>{t.heroTitleAccent}</span>
          </h1>
          <p className={styles.heroSub}>{t.heroSub}</p>
          <div className={styles.heroCtas}>
            <a href={ZALO_URL} className="dt-btn-solid">
              {t.heroCta1}
            </a>
            <a href="#du-an" className="dt-btn-outline">
              {t.heroCta2}
            </a>
          </div>
        </div>
      </header>

      {/* 2. Marquee strip */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((m, i) => (
            <span key={i} className={styles.marqueeItem}>
              {m} <span className={styles.marqueeDiamond}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. Solution categories */}
      <section id="san-pham" className={styles.catSection}>
        <div className={`dt-reveal ${styles.sectionHead}`}>
          <div>
            <div className="dt-eyebrow">
              <span className="dt-eyebrow-line" />
              <span className="dt-eyebrow-label">{t.catEyebrow}</span>
            </div>
            <h2 className={`dt-h2 ${styles.catTitle}`}>{t.catTitle}</h2>
          </div>
          <Link href="/san-pham" className="dt-gold-link">
            {t.catAll}
          </Link>
        </div>
        <div className={`dt-reveal ${styles.catGrid}`}>
          {t.categories.map((c, i) => (
            <Link key={c.num} href={c.href} className={styles.catCard}>
              <div className={styles.catTop}>
                <span className={styles.catNum}>{c.num}</span>
                <span className={styles.catCount}>{c.count}</span>
              </div>
              <div className={styles.catImgWrap}>
                <img
                  className={styles.catImg}
                  src={CATEGORY_IMAGES[i]}
                  alt={c.name}
                />
              </div>
              <h3 className={styles.catName}>{c.name}</h3>
              <p className={styles.catDesc}>{c.desc}</p>
              <span className={styles.catView}>{t.view}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured products */}
      <section className={styles.prodSection}>
        <div className={styles.inner}>
          <div className={`dt-reveal ${styles.sectionHead}`}>
            <div>
              <div className="dt-eyebrow">
                <span className="dt-eyebrow-line" />
                <span className="dt-eyebrow-label">{t.prodEyebrow}</span>
              </div>
              <h2 className={`dt-h2 ${styles.h2}`}>{t.prodTitle}</h2>
            </div>
            <Link href="/san-pham" className="dt-gold-link">
              {t.prodAll}
            </Link>
          </div>
          <div className={`dt-reveal ${styles.prodGrid}`}>
            {t.products.map((p) => (
              <a key={p.href} href={p.href} className={styles.prodCard}>
                <div className={styles.prodTop}>
                  <span className={styles.prodChip}>{p.cat}</span>
                  <span className={styles.prodNrc}>NRC {p.nrc}</span>
                </div>
                <h3 className={styles.prodName}>{p.name}</h3>
                <p className={styles.prodDesc}>{p.desc}</p>
                <div className={styles.prodFoot}>
                  <span className={styles.prodPrice}>{t.priceOnRequest}</span>
                  <span className={styles.prodDetails}>{t.details}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section id="quy-trinh" className={styles.processSection}>
        <div className={`dt-reveal ${styles.processHead}`}>
          <div className={`dt-eyebrow ${styles.processEyebrow}`}>
            <span className="dt-eyebrow-line" />
            <span className="dt-eyebrow-label">{t.processEyebrow}</span>
            <span className="dt-eyebrow-line" />
          </div>
          <h2 className={`dt-h2 ${styles.h2}`}>
            {t.processTitle}{" "}
            <span className={styles.accent}>{t.processTitleAccent}</span>
          </h2>
          <p className={styles.processSub}>{t.processSub}</p>
        </div>
        <div className={styles.stepsGrid}>
          {t.steps.map((s, i) => {
            const delay = `${(i * 0.14).toFixed(2)}s`;
            return (
              <div
                key={s.num}
                className={`dt-reveal ${styles.step}`}
                style={{
                  transition: STEP_TRANSITION,
                  transitionDelay: `${delay}, ${delay}, 0s, 0s, 0s`,
                }}
              >
                <div className={styles.stepHead}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <span className={styles.stepLine} />
                  <span className={styles.stepDot} />
                </div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
                <span className={styles.stepDeliverable}>{s.deliverable}</span>
              </div>
            );
          })}
        </div>

        {/* 6. Two figures */}
        <div className={`dt-reveal ${styles.figures}`}>
          <figure className={styles.figure}>
            <div className={styles.figWrap}>
              <img src={TEAM_IMG} alt="On-site tuning" className={styles.figImg} />
            </div>
            <figcaption className={styles.figCaption}>{t.caption1}</figcaption>
          </figure>
          <figure className={styles.figure}>
            <div className={styles.figWrap}>
              <img
                src={GEAR_IMG}
                alt="Measurement rig"
                className={styles.figImg}
              />
            </div>
            <figcaption className={styles.figCaption}>{t.caption2}</figcaption>
          </figure>
        </div>
      </section>

      {/* 7. Projects mosaic */}
      <section id="du-an" className={styles.projSection}>
        <div className={styles.projHeadWrap}>
          <div className={`dt-reveal ${styles.sectionHead}`}>
            <div>
              <div className="dt-eyebrow">
                <span className="dt-eyebrow-line" />
                <span className="dt-eyebrow-label">{t.projEyebrow}</span>
              </div>
              <h2 className={`dt-h2 ${styles.h2}`}>{t.projTitle}</h2>
            </div>
            <Link href="/du-an" className="dt-gold-link">
              {t.projAll}
            </Link>
          </div>
        </div>
        <div className={`dt-reveal ${styles.mosaic}`}>
          {PROJECT_TILES.map((pr) => (
            <Link
              key={pr.src}
              href="/du-an"
              className={
                pr.row === "span 2"
                  ? `${styles.tile} ${styles.tileTall}`
                  : styles.tile
              }
            >
              <img src={pr.src} alt={pr.alt} className={styles.tileImg} />
              <span className={styles.tileOverlay}>{t.viewProject}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Story */}
      <section id="cau-chuyen" className={styles.storySection}>
        <div className={styles.storyGrid}>
          <figure className={`dt-reveal ${styles.storyFigure}`}>
            <div className={styles.storyImgFrame}>
              <img
                src={FOUNDER_IMG}
                alt="Nguyen Thanh Linh — founder of De-treat"
                className={styles.storyImg}
              />
            </div>
            <figcaption className={styles.storyFigcaption}>
              <span className={styles.storyName}>Nguyễn Thành Linh</span>
              <span className={styles.storyRole}>{t.founderRole}</span>
            </figcaption>
          </figure>
          <div>
            <div className="dt-reveal dt-eyebrow">
              <span className="dt-eyebrow-line" />
              <span className="dt-eyebrow-label">{t.storyEyebrow}</span>
            </div>
            <h2 className={`dt-reveal ${styles.storyTitle}`}>{t.storyTitle}</h2>
            <div className={`dt-reveal ${styles.storyParas}`}>
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
            </div>
            <blockquote className={`dt-reveal ${styles.quote}`}>
              <p className={styles.quoteText}>{t.quote}</p>
              <cite className={styles.quoteBy}>{t.quoteBy}</cite>
            </blockquote>
            <div className={`dt-reveal ${styles.statsGrid}`}>
              {t.stats.map((st) => (
                <div key={st.value} className={styles.stat}>
                  <span className={styles.statValue}>{st.value}</span>
                  <span className={styles.statLabel}>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className={styles.testiSection}>
        <div className={styles.inner}>
          <div className={`dt-reveal ${styles.sectionHead}`}>
            <div>
              <div className="dt-eyebrow">
                <span className="dt-eyebrow-line" />
                <span className="dt-eyebrow-label">{t.testiEyebrow}</span>
              </div>
              <h2 className={`dt-h2 ${styles.h2}`}>{t.testiTitle}</h2>
            </div>
            <Link href="/du-an" className="dt-gold-link">
              {t.testiLink}
            </Link>
          </div>
          <div className={`dt-reveal ${styles.testiGrid}`}>
            {t.testimonials.map((ts) => (
              <a key={ts.href} href={ts.href} className={styles.testiCard}>
                <span className={styles.testiMark}>“</span>
                <p className={styles.testiQuote}>{ts.quote}</p>
                <div className={styles.testiFoot}>
                  <span className={styles.testiName}>{ts.name}</span>
                  <span className={styles.testiRole}>{ts.role}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <div className={styles.ctaOverlay} />
        <div className={`dt-reveal ${styles.ctaContent}`}>
          <h2 className={styles.ctaTitle}>
            {t.ctaTitle}{" "}
            <span className={styles.accent}>{t.ctaTitleAccent}</span>
          </h2>
          <p className={styles.ctaSub}>{t.ctaSub}</p>
          <div className={styles.ctaBtns}>
            <a href={ZALO_URL} className={styles.ctaSolid}>
              {t.ctaBtn1}
            </a>
            <a href={TEL_URL} className={styles.ctaOutline}>
              {t.ctaBtn2}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
