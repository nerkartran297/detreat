"use client";

import Logo from "./Logo";
import { useLang } from "@/lib/i18n";
import { CHROME, TEL_URL, ZALO_URL } from "@/lib/chrome-copy";
import styles from "./chrome.module.css";
import Link from "next/link";

export default function Footer() {
  const { lang } = useLang();
  const t = CHROME[lang];

  return (
    <footer className={styles.footerHome}>
      <div className={styles.footerHomeGrid}>
        <div className={styles.footerBrand}>
          <Logo variant="footerHome" href="/" />
          <p className={styles.footerTagline}>{t.footerTagline}</p>
          <div className={styles.footerBtns}>
            <a href={ZALO_URL} className={styles.footerZalo}>
              {t.navCta}
            </a>
            <a href={TEL_URL} className={styles.footerCall}>
              {t.footerCall}
            </a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.footerColTitle}>{t.footerExplore}</span>
          <Link href="/san-pham" className={styles.footerLink}>
            {t.navProducts}
          </Link>
          <Link href="/du-an" className={styles.footerLink}>
            {t.navProjects}
          </Link>
          <Link href="/#quy-trinh" className={styles.footerLink}>
            {t.navProcess}
          </Link>
          <Link href="/#cau-chuyen" className={styles.footerLink}>
            {t.navStory}
          </Link>
          <Link href="/lien-he" className={styles.footerLink}>
            {t.navContact}
          </Link>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.footerColTitle}>{t.footerLines}</span>
          <Link href="/san-pham?cat=tieu-am" className={styles.footerLink}>
            {t.lineAbsorption}
          </Link>
          <Link href="/san-pham?cat=tan-am" className={styles.footerLink}>
            {t.lineDiffusion}
          </Link>
          <Link href="/san-pham?cat=bass-trap" className={styles.footerLink}>
            {t.lineTrap}
          </Link>
          <Link
            href="/san-pham?cat=ceiling-cloud"
            className={styles.footerLink}
          >
            {t.lineCloud}
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 De-treat — Nguyễn Thành Linh</span>
        <span>detreat.com.vn</span>
      </div>
    </footer>
  );
}
