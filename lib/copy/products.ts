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
  href: "https://detreat.com.vn/san-pham/" + slug + "/",
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
  "Corner Tri — Trap góc tam giác",
  "Cloud Rect 120 — Cloud chữ nhật",
  "Skyline QRD — Tán âm 2D",
  "Column Round — Trap trụ tròn",
  "Cloud Hexa — Cloud lục giác",
  "QRD Well 7 — Tán âm 1D dãy giếng",
  "Acoustic Panel 60 — Bọc nỉ khung gỗ",
  "Superchunk — Trap góc đặc",
  "Cloud Baffle — Baffle treo trần dọc",
  "Slat Wood — Tán âm nan gỗ",
  "Membrane Tuned — Trap màng cộng hưởng",
  "Cloud Wood Frame — Cloud viền gỗ",
  "Poly Binary — Tán âm khối đa diện",
  "PET Slim 40 — Tiêu âm polyester",
];

const descsVi = [
  "Trap góc nhồi rockwool 80kg/m³, siết tiếng bass bùng ở góc phòng.",
  "Tấm treo trần nhồi rockwool, dứt phản xạ trần ngay trên đầu bàn mix.",
  "Diffuser skyline gỗ thông, phân tán âm 2 chiều giữ phòng sống động.",
  "Trụ trap tròn 40cm, hút bass đa hướng, đặt linh hoạt mọi góc.",
  "Tấm treo trần lục giác ghép tổ ong, vừa tiêu âm vừa làm điểm nhấn trần.",
  "Tán âm QRD 1 chiều 7 giếng, trải phản xạ theo phương ngang chuẩn.",
  "Panel khung gỗ nhồi rockwool, bọc nỉ — hấp thụ sâu, thẩm mỹ studio.",
  "Trap góc đặc nguyên khối rockwool 100kg/m³, xử lý bass cực sâu.",
  "Baffle treo dọc dưới trần, hấp thụ hai mặt cho không gian trần cao.",
  "Vách nan gỗ trên nền nỉ tiêu âm — vừa tán, vừa hút nhẹ, đẹp như nội thất.",
  "Trap màng cộng hưởng tinh chỉnh đúng tần số mode phòng, xử lý chọn lọc.",
  "Cloud viền gỗ cao cấp, hấp thụ sâu cho phòng nghe và phòng thu đẹp.",
  "Diffuser khối đa diện trải phản xạ rộng dải, nhẹ và dễ treo.",
  "Tấm polyester PET không bụi, mỏng gọn, an toàn cho phòng kín đông người.",
];

const namesEn = [
  "Corner Tri — Triangular corner trap",
  "Cloud Rect 120 — Rectangular cloud",
  "Skyline QRD — 2D diffuser",
  "Column Round — Cylindrical trap",
  "Cloud Hexa — Hexagonal cloud",
  "QRD Well 7 — 1D well diffuser",
  "Acoustic Panel 60 — Fabric-wrapped",
  "Superchunk — Solid corner trap",
  "Cloud Baffle — Vertical ceiling baffle",
  "Slat Wood — Slatted wood diffuser",
  "Membrane Tuned — Tuned membrane trap",
  "Cloud Wood Frame — Wood-framed cloud",
  "Poly Binary — Polyhedral diffuser",
  "PET Slim 40 — Polyester absorber",
];

const descsEn = [
  "Corner trap filled with 80kg/m³ rockwool — tightens boomy bass in room corners.",
  "Suspended rockwool panel that stops ceiling reflections above the mix position.",
  "Pine skyline diffuser scattering sound in two dimensions to keep the room alive.",
  "40cm cylindrical trap absorbing bass omnidirectionally — flexible placement.",
  "Honeycomb hexagonal ceiling tiles — absorption and a ceiling statement in one.",
  "1D QRD diffuser with 7 wells, spreading reflections evenly across the horizontal plane.",
  "Timber-framed rockwool panel wrapped in fabric — deep absorption, studio aesthetics.",
  "Solid 100kg/m³ rockwool corner chunk for the deepest bass control.",
  "Vertical baffles hung below the ceiling — double-sided absorption for tall rooms.",
  "Wood slats over an absorbent felt core — scatters and absorbs, looks like furniture.",
  "Membrane trap tuned to your room’s exact mode frequencies — surgical treatment.",
  "Premium wood-framed cloud with deep absorption for beautiful rooms.",
  "Lightweight polyhedral diffuser spreading reflections across a wide band.",
  "Dust-free PET polyester panel — slim, safe for crowded enclosed rooms.",
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
    "bass-trap": "Bass Trap",
    "ceiling-cloud": "Ceiling Cloud",
  },
  vi: {
    "tieu-am": "Tiêu âm",
    "tan-am": "Tán âm",
    "bass-trap": "Trap",
    "ceiling-cloud": "Ceiling Cloud",
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
    sub: "Every product ships with real specs: NRC rating, frequency range, dimensions and materials. Filter by family below.",
    all: "All",
    priceOnRequest: "Price on request",
    details: "Details →",
    ctaTitle: "Not sure what your",
    ctaTitleAccent: "room needs?",
    ctaSub: "Send us a few photos — we’ll recommend the right mix of absorption, diffusion and trapping, free of charge.",
  },
  vi: {
    eyebrow: "Danh mục",
    title: "Sản phẩm",
    titleAccent: "xử lý âm học.",
    sub: "Mỗi sản phẩm kèm thông số thật: NRC, dải tần, kích thước, vật liệu. Chọn theo nhóm bên dưới.",
    all: "Tất cả",
    priceOnRequest: "Giá liên hệ",
    details: "Chi tiết →",
    ctaTitle: "Chưa biết phòng bạn",
    ctaTitleAccent: "cần gì?",
    ctaSub: "Gửi vài tấm ảnh phòng — chúng tôi đề xuất tổ hợp tiêu âm, tán âm, trap phù hợp, hoàn toàn miễn phí.",
  },
};
