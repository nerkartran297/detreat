import type { Lang } from "./i18n";

/** Copy shared by the fixed nav + both footer variants (source of truth:
 *  the dictionaries embedded in the design_handoff .dc.html files). */
export const CHROME = {
  en: {
    navProducts: "Products",
    navProjects: "Projects",
    navProcess: "Process",
    navStory: "Story",
    navContact: "Contact",
    navCta: "Message us",
    footerTagline:
      "Acoustic treatment for recording studios, podcast rooms, listening rooms and commercial spaces. Measured before and after — never guesswork.",
    footerCall: "Call +84 914 593 334",
    footerExplore: "Explore",
    footerLines: "Product lines",
    lineAbsorption: "Absorption",
    lineDiffusion: "Diffusion",
    lineTrap: "Bass Traps",
    lineCloud: "Ceiling Clouds",
  },
  vi: {
    navProducts: "Sản phẩm",
    navProjects: "Dự án",
    navProcess: "Quy trình",
    navStory: "Câu chuyện",
    navContact: "Liên hệ",
    navCta: "Nhắn Zalo",
    footerTagline:
      "Xử lý âm học cho phòng thu, podcast, phòng nghe và không gian thương mại. Đo đạc trước — sau, không đoán.",
    footerCall: "Gọi 0914593334",
    footerExplore: "Khám phá",
    footerLines: "Dòng sản phẩm",
    lineAbsorption: "Tiêu âm",
    lineDiffusion: "Tán âm",
    lineTrap: "Trap",
    lineCloud: "Ceiling Cloud",
  },
} satisfies Record<Lang, Record<string, string>>;

export const ZALO_URL = "https://zalo.me/0914593334";
export const TEL_URL = "tel:+84914593334";
