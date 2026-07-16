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
    navCta: "Message\u00A0us",
    footerTagline:
      "Acoustic treatment for recording studios, podcast rooms, listening rooms and commercial spaces. Measured before and after — never guesswork.",
    footerCall: "Call +84\u00A0914\u00A0593\u00A0334",
    footerExplore: "Explore",
    footerLines: "Product\u00A0lines",
    lineAbsorption: "Absorption",
    lineDiffusion: "Diffusion",
    lineTrap: "Bass\u00A0Traps",
    lineCloud: "Ceiling\u00A0Clouds",
  },
  vi: {
    navProducts: "Sản\u00A0phẩm",
    navProjects: "Dự\u00A0án",
    navProcess: "Quy\u00A0trình",
    navStory: "Câu\u00A0chuyện",
    navContact: "Liên\u00A0hệ",
    navCta: "Nhắn\u00A0Zalo",
    footerTagline:
      "Xử lý âm học cho phòng thu, podcast, phòng nghe và không gian thương mại. Đo đạc trước — sau, không\u00A0đoán.",
    footerCall: "Gọi 0914593334",
    footerExplore: "Khám\u00A0phá",
    footerLines: "Dòng sản\u00A0phẩm",
    lineAbsorption: "Tiêu\u00A0âm",
    lineDiffusion: "Tán\u00A0âm",
    lineTrap: "Trap",
    lineCloud: "Ceiling\u00A0Cloud",
  },
} satisfies Record<Lang, Record<string, string>>;

export const ZALO_URL = "https://zalo.me/0914593334";
export const TEL_URL = "tel:+84914593334";
