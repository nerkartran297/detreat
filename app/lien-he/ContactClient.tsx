"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";
import { ZALO_URL, TEL_URL } from "@/lib/chrome-copy";
import { CONTACT_COPY } from "@/lib/copy/contact";
import styles from "./contact.module.css";

export default function ContactClient() {
  const { lang } = useLang();
  const t = CONTACT_COPY[lang];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [roomIndex, setRoomIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useReveal([lang], 0.08);

  const room = t.roomTypes[roomIndex] ?? "";

  const submitForm = () => {
    const msg = [name, phone, room, message].filter(Boolean).join(" — ");
    try {
      navigator.clipboard.writeText(msg).catch(() => {});
    } catch {
      /* clipboard unavailable */
    }
    setSent(true);
    window.open(ZALO_URL, "_blank");
  };

  return (
    <>
      <Nav page="contact" />

      <header className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowLabel}>{t.eyebrow}</span>
        </div>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>
            {t.title}{" "}
            <span className={styles.titleAccent}>{t.titleAccent}</span>
          </h1>
          <div className={styles.headerMeta}>
            <span className={styles.metaLabel}>{t.responseLabel}</span>
            <span className={styles.metaValue}>{t.responseValue}</span>
          </div>
        </div>
      </header>

      <section className={styles.main}>
        <div className={styles.mainGrid}>
          <div className="dt-reveal">
            <span className={styles.numLabel}>01 — {t.formLabel}</span>
            <h2 className={styles.formTitle}>{t.formTitle}</h2>
            <p className={styles.formSub}>{t.formSub}</p>
            <div className={styles.form}>
              <div className={styles.formRow}>
                <label className={styles.fieldLabel}>
                  <span className={styles.fieldName}>
                    {t.fName} — {t.required}
                  </span>
                  <input
                    type="text"
                    className={styles.field}
                    placeholder={t.fNamePh}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className={styles.fieldLabel}>
                  <span className={styles.fieldName}>
                    {t.fPhone} — {t.required}
                  </span>
                  <input
                    type="tel"
                    className={styles.field}
                    placeholder="+84 —"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
              </div>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldName}>{t.fRoom}</span>
                <select
                  className={`${styles.field} ${styles.select}`}
                  value={room}
                  onChange={(e) => setRoomIndex(e.target.selectedIndex)}
                >
                  {t.roomTypes.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>
              <label className={styles.fieldLabel}>
                <span className={styles.fieldName}>{t.fMsg}</span>
                <textarea
                  rows={4}
                  className={`${styles.field} ${styles.textarea}`}
                  placeholder={t.fMsgPh}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <div className={styles.submitRow}>
                <button className={styles.submitBtn} onClick={submitForm}>
                  {t.fSubmit}
                </button>
                {sent && <span className={styles.sentNote}>{t.fSent}</span>}
              </div>
            </div>
          </div>

          <div className={`dt-reveal ${styles.channelsCol}`}>
            <span className={styles.numLabel}>02 — {t.directLabel}</span>
            <div className={styles.channels}>
              <a href={ZALO_URL} className={styles.channel}>
                <span className={styles.channelLeft}>
                  <span
                    className={`${styles.channelLabel} ${styles.channelLabelGold}`}
                  >
                    Zalo — {t.fastest}
                  </span>
                  <span className={styles.channelValue}>0914 593 334</span>
                </span>
                <span className={styles.arrow}>→</span>
              </a>
              <a href={TEL_URL} className={styles.channel}>
                <span className={styles.channelLeft}>
                  <span className={styles.channelLabel}>{t.callDirect}</span>
                  <span className={styles.channelValue}>+84 914 593 334</span>
                </span>
                <span className={styles.arrow}>→</span>
              </a>
              <a href="mailto:hello@detreat.com.vn" className={styles.channel}>
                <span className={styles.channelLeft}>
                  <span className={styles.channelLabel}>Email</span>
                  <span className={styles.channelValue}>
                    hello@detreat.com.vn
                  </span>
                </span>
                <span className={styles.arrow}>→</span>
              </a>
            </div>
            <div className={styles.metaGrid}>
              <div className={styles.metaCol}>
                <span className={styles.metaColLabel}>{t.areaLabel}</span>
                <span className={styles.metaColText}>{t.area1}</span>
              </div>
              <div className={styles.metaCol}>
                <span className={styles.metaColLabel}>{t.onlineLabel}</span>
                <span className={styles.metaColText}>{t.area2}</span>
              </div>
            </div>
            <div className={styles.gearWrap}>
              <img
                src="https://detreat.com.vn/_astro/gear.C0djJ93a_nJ2f3.webp"
                alt="De-treat measurement rig"
                className={styles.gearImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqGrid}>
          <div className="dt-reveal">
            <span className={styles.numLabel}>03 — FAQ</span>
            <h2 className={styles.faqTitle}>{t.faqTitle}</h2>
            <p className={styles.faqSub}>{t.faqSub}</p>
          </div>
          <div className={`dt-reveal ${styles.faqList}`}>
            {t.faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={styles.faqItem}>
                  <button
                    className={`${styles.faqQ} ${open ? styles.faqQOpen : ""}`}
                    onClick={() => setOpenFaq(open ? -1 : i)}
                  >
                    <span className={styles.faqQLeft}>
                      <span className={styles.faqNum}>{"0" + (i + 1)}</span>{" "}
                      {f.q}
                    </span>
                    <span className={styles.faqIcon}>{open ? "−" : "+"}</span>
                  </button>
                  <div
                    className={`${styles.faqA} ${open ? styles.faqAOpen : ""}`}
                  >
                    <p className={styles.faqAText}>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className={styles.footerWrap}>
        <Footer />
      </div>
    </>
  );
}
