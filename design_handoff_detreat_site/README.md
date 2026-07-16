# Handoff: De-treat — Luxury Acoustic Treatment Website

## Overview
A complete 4-page marketing website redesign for De-treat (detreat.com.vn), an acoustic treatment studio in Vietnam. The redesign targets international clients with a dark, editorial "luxury magazine" aesthetic: cinematic full-bleed imagery, high-contrast serif display type, gold accents, and refined scroll/hover animations. The site is fully bilingual (EN default / VI), with the language choice persisted in localStorage under the key `dt-lang`.

## About the Design Files
The files in this bundle are **design references created in HTML** — high-fidelity prototypes showing the intended look and behavior, NOT production code to copy directly. The task is to **recreate these designs in the target codebase's environment** (Next.js/React, Astro, Vue, etc.) using its established patterns. If no environment exists yet, a static-first framework (Astro or Next.js) is recommended since this is a content/marketing site. The prototypes are single-file HTML "design components" — open each in a browser to inspect the rendered result.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy (both languages), animations and interaction states are final. Recreate pixel-perfectly.

## Design Tokens
Colors:
- Background base: #0a0a0b
- Background alt sections: #0e0e10 (also #0c0c0e for marquee strip)
- Card gradient: linear-gradient(160deg, #131315, #0a0a0b)
- Text primary: #f2eee6
- Text secondary: #b8b1a4
- Text muted: #9b9487 / #8d867a
- Text faint: #6f695e / #57524a (placeholders)
- Accent gold: #c9a96a (hover-brightened: #e0c48a)
- Hairlines: rgba(242,238,230,.08) borders, rgba(242,238,230,.1) card borders
- Gold hairline/borders: rgba(201,169,106,.35–.55)
- Selection: gold background, #0a0a0b text

Typography (Google Fonts, all with Vietnamese subsets):
- Display serif: 'Prata' 400 — h1/h2/h3, product names, step numbers, logo wordmark, pull quotes, FAQ questions. h1: clamp(44–48px → 84–96px), line-height 1.04–1.06; h2 sections: clamp(34px, 3.8vw, 56px).
- UI sans: 'Archivo' 500–600 — eyebrows/labels/buttons: 10–12px, uppercase, letter-spacing .14em–.42em.
- Body sans: 'Manrope' 300 — 13–16px, line-height 1.7–1.9.

Spacing / layout:
- Max content width 1400px, horizontal padding 48px.
- Section vertical padding 140px (heroes of subpages: 200px top).
- Grid gaps: cards 20–28px, gallery 12px.
- NO border radius anywhere (sharp corners). Shadows only as gold glows and image drop-shadows.

## Shared Components (all 4 pages)
### Logo (nav + footer)
5 vertical gold equalizer bars (3px wide, heights ~12/22/28/18/25px, gap 3px, transform-origin bottom) + wordmark "DE-TREAT" (Prata, letter-spacing .1em) with sub-line "YOUR SOUND SOLUTION" (8.5px, tracking .4em, gold). On logo hover: bars animate scaleY .3→1, .8s ease-in-out infinite alternate, staggered negative delays (-.1/-.35/-.6/-.2/-.5s). Implementation: keyframes run permanently with animation-play-state: paused, switched to running on :hover.

### Fixed nav
Fixed top, padding 20px 48px, background linear-gradient(rgba(10,10,11,.92), transparent) + blur(2px). Links: Archivo 11.5px uppercase, tracking .14em, color #cfc9bd, white-space nowrap, gap clamp(16px, 2.4vw, 34px). Hover: text brightens to #f2eee6 AND a 1px gold underline grows from left (scaleX 0→1, .45s cubic-bezier(.22,1,.36,1)). Active page link is gold. Language toggle button (shows "VI" when in EN and vice versa) — hairline border, gold on hover. CTA button "Message us / Nhắn Zalo": gold 1px border, gold text; hover fills gold with dark text. All transitions .35–.45s.

### Scroll reveal
Elements start opacity 0 / translateY(36px), transition 1.1s cubic-bezier(.22,1,.36,1), triggered by IntersectionObserver at threshold ~0.1, once per element. Hero elements instead use a keyframed fade-up with sequential delays (.2/.4/.6/.8s).

### Footer
Home page: 3-column (brand + tagline + Zalo/call buttons | Explore links | Product lines links), then hairline bottom bar with © 2026 De-treat — Nguyễn Thành Linh. Subpages: compact single-row footer (logo | 3 links | copyright).

### i18n
Every string exists in EN and VI dictionaries. Default: EN. Toggle persists to localStorage 'dt-lang' and is shared by all pages. Full copy for both languages is embedded in each HTML file's script — treat those dictionaries as the source of truth for copy.

## Screens

### 1. Home — "De-treat Luxury.dc.html"
Sections top to bottom:
1. **Hero**: 100vh full-bleed photo (project image), slow zoom-in on load (scale 1.12→1, 2.8s), scroll parallax (bg translateY = scrollY × 0.18, capped at viewport height). Overlay gradient dark top → 92% dark bottom. Content bottom-left: gold hairline + eyebrow "ACOUSTIC TREATMENT · VIETNAM", h1 "Great sound starts with the room." (accent phrase in gold), sub-paragraph, two CTAs (solid gold + outlined).
2. **Marquee strip**: hairline top/bottom, bg #0c0c0e, infinite leftward marquee (32s linear) of use-cases in Archivo 15px uppercase tracking .28em, separated by small gold ◆.
3. **Solution categories (id=san-pham)**: section header (eyebrow + h2 left, "All products →" gold underlined link right). 4 cards in grid (auto-fit minmax(300px,1fr), gap 20px): each has number + product count row, centered transparent-PNG product image in a 340px-tall area (drop-shadow(0 30px 38px rgba(0,0,0,.6))), Prata title, body copy, "Explore →". Hover: bg #131311, gold border, image lifts translateY(-8px) scale(1.05) over .9s.
4. **Featured products**: alt bg #0e0e10. 4 cards: cat chip (gold outlined, 10px caps) + NRC value, Prata name, desc, hairline footer row "Price on request / Details →". Hover: gold border + translateY(-6px).
5. **Process (id=quy-trinh)**: centered header "Measure first. Then treat. Never guess." 5 cards in one row (auto-fit minmax(210px,1fr)): number (Prata 34px, 55% gold) + gradient line + 5px gold dot, title, desc, deliverable pinned to bottom after hairline. Reveal staggers 0.14s per card. Hover: card lifts, border + multi-layer gold glow box-shadow, number jumps up & scales to full gold, line extends scaleX .45→1, dot pulses (box-shadow ripple 1.1s infinite).
6. Two photos (team + gear) side by side with captions; images scale 1.05 on hover inside overflow-hidden.
7. **Projects (id=du-an)**: header + mosaic grid (1.6fr 1fr 1fr, rows 320px, first item spans 2 rows). Hover: image scale 1.07 (1.4s) + bottom gradient overlay with "View project →".
8. **Story (id=cau-chuyen)**: 2-col. Left sticky portrait in gold hairline frame (14px padding, grayscale .25). Right: eyebrow, h2, 3 paragraphs, gold-left-border pull quote (Prata) on rgba gold 5% bg, 3 stat tiles (8+ / RT60 / AA).
9. **Testimonials**: alt bg, 4 cards with big Prata " mark, quote, hairline, name + role.
10. **CTA**: fixed-attachment bg photo under rgba(10,10,11,.88), centered h2 with gold accent phrase, 2 buttons.

Tweakable prop: defaultLang (enum en/vi).

### 2. Products — "San Pham.dc.html"
- Hero header (eyebrow "Catalogue", h1 "Acoustic treatment, engineered.", sub).
- **Sticky filter bar** (top 76px, blurred dark bg, hairlines): tabs All / Absorption / Diffusion / Bass Traps / Ceiling Clouds with counts (14/2/4/4/4). Active tab: gold text + 2px gold bottom border. Reads ?cat= URL param on load (tieu-am | tan-am | bass-trap | ceiling-cloud) for deep links from Home category cards.
- **Product grid** (auto-fill minmax(300px,1fr), gap 24px): 14 products, same card anatomy as Home featured cards + 240px category image area. Cards animate in with fade-up staggered 0.05s per card on every filter change. Hover: gold border, lift, subtle gold glow, image lift.
- Product data (name/desc EN+VI, NRC, category, detail URL) is embedded in the file's script.
- CTA band + compact footer.

### 3. Projects — "Du An.dc.html"
- Hero header: eyebrow "Portfolio", h1, sub, photo count "34 PHOTOS" (Prata + caps label) right-aligned.
- **Mosaic gallery**: grid auto-fill minmax(300px,1fr), auto-rows 250px, dense flow, gap 12px. Every 7th item spans 2 rows; every 11th(+3) spans 2 columns. Each tile: cursor zoom-in, image scale 1.06 on hover, index label (01…34) bottom-left with text shadow. Images lazy-load from detreat.com.vn (see Assets).
- **Lightbox**: click opens fixed full-screen rgba(10,10,11,.96) overlay, image contained with large shadow; ‹ › square outline buttons (52px, gold on hover), ✕ top-right, counter "07 / 34" bottom-center (Archivo tracking .3em). Keyboard: Esc close, arrows navigate, wraps around. Click backdrop closes.
- CTA band + compact footer.

### 4. Contact — "Lien He.dc.html"
Editorial numbered layout:
- Header: eyebrow, huge h1 "It starts with your room." + right-aligned meta "RESPONSE TIME / Same day" (Prata 26px), hairline under whole header.
- **01 — Consultation request** (left, 1.15fr): heading + sub, then underline-style form fields (no boxes: transparent bg, 1px bottom hairline, focus → gold; labels 10px caps tracking .28em with "— Required"). Fields: Full name*, Phone/Zalo* (2-col), Room type (custom select, double-triangle gold arrow, options: Home studio / Podcast / Hi-Fi listening room / DJ-Club / Commercial space / Other), Message textarea. Submit: solid gold button. On submit: concatenates values, copies to clipboard, opens zalo.me/0914593334, shows confirmation line.
- **02 — Direct channels** (right, gold-left hairline separated, padding-left 64px): 3 hairline rows (Zalo — FASTEST, Phone, Email hello@detreat.com.vn) — label caps + Prata 24px value + arrow. Hover: row shifts right 14px, arrow slides +8px and turns gold. Below: 2-col meta (On-site surveys: HCMC & surroundings / Online: nationwide) + 220px gear photo (grayscale .2, hover scale).
- **03 — FAQ** (alt bg section, 1fr/1.6fr): left title + sub; right accordion of 4 items — Prata 19px questions with 01–04 numbers, +/− gold icon, open question turns gold, answer slides via max-height .6s. First item open by default.
- Compact footer.

## Interactions & Behavior summary
- All easing: cubic-bezier(.22,1,.36,1) ("expo-out feel"); durations .35–.6s for hovers, 1.1–1.4s for reveals/image zooms.
- Language toggle re-renders all copy instantly; persists in localStorage.
- Nav cross-links: Products ↔ Projects ↔ Contact pages; Process/Story link to home anchors #quy-trinh / #cau-chuyen. In production use routes: / , /san-pham (products, ?cat= filter), /du-an (projects), /lien-he (contact).
- External links: zalo.me/0914593334, tel:+84914593334, product detail pages on detreat.com.vn.

## State Management
- lang: 'en' | 'vi' (shared, localStorage 'dt-lang')
- Products page: filter ('all' | 'tieu-am' | 'tan-am' | 'bass-trap' | 'ceiling-cloud'), initialized from URL.
- Projects page: lightbox index (-1 closed).
- Contact page: openFaq index, sent flag.

## Assets
- Photography: hot-linked from https://detreat.com.vn/_astro/*.webp (34 project photos + team.webp, gear.webp, founder.webp). For production, obtain originals from the client.
- Product renders (transparent PNGs, in assets/ folder of this bundle): TieuAm.png (absorption panel), TanAm.png (skyline diffuser), BassTrap.png (corner trap), Ceiling.png (ceiling cloud).
- Fonts: Google Fonts — Prata, Archivo, Manrope (load vietnamese+latin subsets).

## Files
- `De-treat Luxury.dc.html` — Home
- `San Pham.dc.html` — Products (filterable catalogue)
- `Du An.dc.html` — Projects (gallery + lightbox)
- `Lien He.dc.html` — Contact (form + FAQ)
- `assets/` — 4 transparent product PNGs

Note: the .dc.html files use a small in-house runtime (support.js, {{ }} template holes, sc-for/sc-if tags). Read them for exact styles, copy and data; do not port the runtime — reimplement with your framework's idioms.
