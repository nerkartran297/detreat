import type { Lang } from "@/lib/i18n";

/** Products catalogue copy + data — source of truth: the dictionaries and
 *  product arrays embedded in design_handoff_detreat_site/San Pham.dc.html. */

export type ProductCategory =
  | "tieu-am"
  | "tan-am"
  | "bass-trap"
  | "ceiling-cloud";

export type ProductFilter = "all" | ProductCategory;

export interface Product {
  key: ProductCategory;
  nrc: string;
  slug: string;
  href: string;
  img: string;
}

const IMG: Record<ProductCategory, string> = {
  "tieu-am": "/assets/TieuAm.png",
  "tan-am": "/assets/TanAm.png",
  "bass-trap": "/assets/BassTrap.png",
  "ceiling-cloud": "/assets/Ceiling.png",
};

const P = (key: ProductCategory, nrc: string, slug: string): Product => ({
  key,
  nrc,
  slug,
  href: "/san-pham/" + slug,
  img: IMG[key],
});

export const PRODUCTS: Product[] = [
  P("bass-trap", "1.05", "bass-trap-corner-tri"),
  P("ceiling-cloud", "1.00", "ceiling-cloud-rect-120"),
  P("tan-am", "0.20", "tan-am-qrd-skyline"),
  P("bass-trap", "0.95", "bass-trap-column-round"),
  P("ceiling-cloud", "0.90", "ceiling-cloud-hexa"),
  P("tan-am", "0.25", "tan-am-qrd-well-7"),
  P("tieu-am", "1.00", "tieu-am-panel-fabric-60"),
  P("bass-trap", "1.10", "bass-trap-panel-superchunk"),
  P("ceiling-cloud", "0.95", "ceiling-cloud-baffle"),
  P("tan-am", "0.40", "tan-am-slat-wood"),
  P("bass-trap", "0.80", "bass-trap-membrane-tuned"),
  P("ceiling-cloud", "1.05", "ceiling-cloud-wood-frame"),
  P("tan-am", "0.15", "tan-am-poly-binary"),
  P("tieu-am", "0.80", "tieu-am-pet-slim-40"),
];

const namesVi = [
  "Corner Tri — Trap góc tam\u00A0giác",
  "Cloud Rect 120 — Cloud chữ\u00A0nhật",
  "Skyline QRD — Tán\u00A0âm\u00A02D",
  "Column Round — Trap trụ\u00A0tròn",
  "Cloud Hexa — Cloud lục\u00A0giác",
  "QRD Well 7 — Tán\u00A0âm 1D dãy\u00A0giếng",
  "Acoustic Panel 60 — Bọc nỉ khung\u00A0gỗ",
  "Superchunk — Trap góc\u00A0đặc",
  "Cloud Baffle — Baffle treo trần\u00A0dọc",
  "Slat Wood — Tán\u00A0âm nan\u00A0gỗ",
  "Membrane Tuned — Trap màng cộng\u00A0hưởng",
  "Cloud Wood Frame — Cloud viền\u00A0gỗ",
  "Poly Binary — Tán âm khối đa\u00A0diện",
  "PET Slim 40 — Tiêu\u00A0âm polyester",
];

const descsVi = [
  "Trap góc nhồi rockwool 80kg/m³, siết tiếng bass bùng ở góc\u00A0phòng.",
  "Tấm treo trần nhồi rockwool, dứt phản xạ trần ngay trên đầu bàn\u00A0mix.",
  "Diffuser skyline gỗ thông, phân tán âm 2\u00A0chiều giữ phòng sống\u00A0động.",
  "Trụ trap tròn 40cm, hút bass đa hướng, đặt linh hoạt mọi\u00A0góc.",
  "Tấm treo trần lục giác ghép tổ ong, vừa tiêu âm vừa làm điểm nhấn\u00A0trần.",
  "Tán âm QRD 1\u00A0chiều 7\u00A0giếng, trải phản xạ theo phương ngang\u00A0chuẩn.",
  "Panel khung gỗ nhồi rockwool, bọc nỉ — hấp thụ sâu, thẩm\u00A0mỹ\u00A0studio.",
  "Trap góc đặc nguyên khối rockwool 100kg/m³, xử lý bass cực\u00A0sâu.",
  "Baffle treo dọc dưới trần, hấp thụ hai mặt cho không gian trần\u00A0cao.",
  "Vách nan gỗ trên nền nỉ tiêu âm — vừa tán, vừa hút nhẹ, đẹp như nội\u00A0thất.",
  "Trap màng cộng hưởng tinh chỉnh đúng tần số mode phòng, xử lý chọn\u00A0lọc.",
  "Cloud viền gỗ cao cấp, hấp thụ sâu cho phòng nghe và phòng\u00A0thu\u00A0đẹp.",
  "Diffuser khối đa diện trải phản xạ rộng dải, nhẹ và dễ\u00A0treo.",
  "Tấm polyester PET không bụi, mỏng gọn, an toàn cho phòng kín đông\u00A0người.",
];

const namesEn = [
  "Corner Tri — Triangular corner\u00A0trap",
  "Cloud Rect 120 — Rectangular cloud",
  "Skyline QRD — 2D\u00A0diffuser",
  "Column Round — Cylindrical trap",
  "Cloud Hexa — Hexagonal\u00A0cloud",
  "QRD Well 7 — 1D\u00A0well\u00A0diffuser",
  "Acoustic Panel 60 — Fabric-wrapped",
  "Superchunk — Solid corner\u00A0trap",
  "Cloud Baffle — Vertical ceiling\u00A0baffle",
  "Slat Wood — Slatted wood\u00A0diffuser",
  "Membrane Tuned — Tuned membrane\u00A0trap",
  "Cloud Wood Frame — Wood-framed cloud",
  "Poly Binary — Polyhedral diffuser",
  "PET Slim 40 — Polyester absorber",
];

const descsEn = [
  "Corner trap filled with 80kg/m³ rockwool — tightens boomy bass in room\u00A0corners.",
  "Suspended rockwool panel that stops ceiling reflections above the mix\u00A0position.",
  "Pine skyline diffuser scattering sound in two dimensions to keep the room\u00A0alive.",
  "40cm cylindrical trap absorbing bass omnidirectionally — flexible placement.",
  "Honeycomb hexagonal ceiling tiles — absorption and a ceiling statement in\u00A0one.",
  "1D QRD diffuser with 7 wells, spreading reflections evenly across the horizontal plane.",
  "Timber-framed rockwool panel wrapped in fabric — deep absorption, studio aesthetics.",
  "Solid 100kg/m³ rockwool corner chunk for the deepest bass\u00A0control.",
  "Vertical baffles hung below the ceiling — double-sided absorption for tall\u00A0rooms.",
  "Wood slats over an absorbent felt core — scatters and absorbs, looks like\u00A0furniture.",
  "Membrane trap tuned to your room’s exact mode frequencies — surgical treatment.",
  "Premium wood-framed cloud with deep absorption for beautiful rooms.",
  "Lightweight polyhedral diffuser spreading reflections across a wide\u00A0band.",
  "Dust-free PET polyester panel — slim, safe for crowded enclosed\u00A0rooms.",
];

export const PRODUCT_NAMES: Record<Lang, string[]> = {
  en: namesEn,
  vi: namesVi,
};

export const PRODUCT_DESCS: Record<Lang, string[]> = {
  en: descsEn,
  vi: descsVi,
};

export const CATEGORY_LABELS: Record<Lang, Record<ProductCategory, string>> = {
  en: {
    "tieu-am": "Absorption",
    "tan-am": "Diffusion",
    "bass-trap": "Bass\u00A0Trap",
    "ceiling-cloud": "Ceiling\u00A0Cloud",
  },
  vi: {
    "tieu-am": "Tiêu\u00A0âm",
    "tan-am": "Tán\u00A0âm",
    "bass-trap": "Trap",
    "ceiling-cloud": "Ceiling\u00A0Cloud",
  },
};

type ProductsDict = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  sub: string;
  all: string;
  priceOnRequest: string;
  details: string;
  ctaTitle: string;
  ctaTitleAccent: string;
  ctaSub: string;
};

export const PRODUCTS_COPY: Record<Lang, ProductsDict> = {
  en: {
    eyebrow: "Catalogue",
    title: "Acoustic treatment,",
    titleAccent: "engineered.",
    sub: "Every product ships with real specs: NRC rating, frequency range, dimensions and materials. Filter by family\u00A0below.",
    all: "All",
    priceOnRequest: "Price on\u00A0request",
    details: "Details\u00A0→",
    ctaTitle: "Not sure what\u00A0your",
    ctaTitleAccent: "room\u00A0needs?",
    ctaSub: "Send us a few photos — we’ll recommend the right mix of absorption, diffusion and trapping, free of\u00A0charge.",
  },
  vi: {
    eyebrow: "Danh\u00A0mục",
    title: "Sản\u00A0phẩm",
    titleAccent: "xử\u00A0lý âm\u00A0học.",
    sub: "Mỗi sản phẩm kèm thông số thật: NRC, dải tần, kích thước, vật liệu. Chọn theo nhóm bên\u00A0dưới.",
    all: "Tất\u00A0cả",
    priceOnRequest: "Giá liên\u00A0hệ",
    details: "Chi\u00A0tiết\u00A0→",
    ctaTitle: "Chưa biết phòng\u00A0bạn",
    ctaTitleAccent: "cần\u00A0gì?",
    ctaSub: "Gửi vài tấm ảnh phòng — chúng tôi đề xuất tổ hợp tiêu âm, tán âm, trap phù hợp, hoàn toàn miễn\u00A0phí.",
  },
};
