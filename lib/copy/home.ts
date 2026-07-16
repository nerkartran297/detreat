import type { Lang } from "@/lib/i18n";

/* Copy for the Home page. Source of truth: the EN/VI dictionaries embedded
 * in design_handoff_detreat_site/"De-treat Luxury.dc.html". Do not edit
 * strings — they must match the design file exactly. */

export interface HomeCategory {
  num: string;
  count: string;
  name: string;
  desc: string;
  href: string;
}

export interface HomeProduct {
  cat: string;
  nrc: string;
  name: string;
  desc: string;
  href: string;
}

export interface HomeStep {
  num: string;
  title: string;
  desc: string;
  deliverable: string;
}

export interface HomeStat {
  value: string;
  label: string;
}

export interface HomeTestimonial {
  quote: string;
  name: string;
  role: string;
  href: string;
}

export interface HomeCopy {
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSub: string;
  heroCta1: string;
  heroCta2: string;
  marquee: string[];
  catEyebrow: string;
  catTitle: string;
  catAll: string;
  view: string;
  categories: HomeCategory[];
  prodEyebrow: string;
  prodTitle: string;
  prodAll: string;
  priceOnRequest: string;
  details: string;
  products: HomeProduct[];
  processEyebrow: string;
  processTitle: string;
  processTitleAccent: string;
  processSub: string;
  steps: HomeStep[];
  caption1: string;
  caption2: string;
  projEyebrow: string;
  projTitle: string;
  projAll: string;
  viewProject: string;
  storyEyebrow: string;
  storyTitle: string;
  storyP1: string;
  storyP2: string;
  storyP3: string;
  quote: string;
  quoteBy: string;
  founderRole: string;
  stats: HomeStat[];
  testiEyebrow: string;
  testiTitle: string;
  testiLink: string;
  testimonials: HomeTestimonial[];
  ctaTitle: string;
  ctaTitleAccent: string;
  ctaSub: string;
  ctaBtn1: string;
  ctaBtn2: string;
}

export const HOME_COPY: Record<Lang, HomeCopy> = {
  en: {
    heroEyebrow: "Acoustic Treatment · Vietnam",
    heroTitle: "Great sound starts",
    heroTitleAccent: "with the\u00A0room.",
    heroSub:
      "De-treat designs and builds absorption, diffusion and bass trapping for recording studios, podcast rooms and listening spaces. Measured before and after — never guesswork.",
    heroCta1: "Get a free consultation",
    heroCta2: "View our work",
    marquee: [
      "Recording studios",
      "Podcast rooms",
      "Hi-Fi listening rooms",
      "DJ booths",
      "Home studios",
      "Commercial spaces",
    ],
    catEyebrow: "Four solution families",
    catTitle: "Every frequency demands its own\u00A0treatment.",
    catAll: "All products\u00A0→",
    view: "Explore\u00A0→",
    categories: [
      {
        num: "01",
        count: "2\u00A0products",
        name: "Absorption",
        desc: "Absorbs mid–high frequency reflections and eliminates flutter\u00A0echo.",
        href: "/san-pham?cat=tieu-am",
      },
      {
        num: "02",
        count: "4\u00A0products",
        name: "Diffusion",
        desc: "Scatters sound energy, keeping the room lively without deadening\u00A0it.",
        href: "/san-pham?cat=tan-am",
      },
      {
        num: "03",
        count: "4\u00A0products",
        name: "Bass\u00A0Traps",
        desc: "Tames low-frequency build-up in corners and tightens the\u00A0bass.",
        href: "/san-pham?cat=bass-trap",
      },
      {
        num: "04",
        count: "4\u00A0products",
        name: "Ceiling\u00A0Clouds",
        desc: "Suspended panels that control overhead reflections and open up the\u00A0ceiling.",
        href: "/san-pham?cat=ceiling-cloud",
      },
    ],
    prodEyebrow: "Signature",
    prodTitle: "Featured products",
    prodAll: "View all\u00A0→",
    priceOnRequest: "Price on\u00A0request",
    details: "Details\u00A0→",
    products: [
      {
        cat: "Bass\u00A0Trap",
        nrc: "1.05",
        name: "Corner Tri — Triangular corner\u00A0trap",
        desc: "Corner trap filled with 80kg/m³ rockwool — tightens boomy bass in room\u00A0corners.",
        href: "https://detreat.com.vn/san-pham/bass-trap-corner-tri/",
      },
      {
        cat: "Ceiling\u00A0Cloud",
        nrc: "1.00",
        name: "Cloud Rect 120 — Rectangular cloud",
        desc: "Suspended rockwool panel that stops ceiling reflections right above the mix\u00A0position.",
        href: "https://detreat.com.vn/san-pham/ceiling-cloud-rect-120/",
      },
      {
        cat: "Diffusion",
        nrc: "0.20",
        name: "Skyline QRD — 2D\u00A0diffuser",
        desc: "Pine skyline diffuser scattering sound in two dimensions to keep the room\u00A0alive.",
        href: "https://detreat.com.vn/san-pham/tan-am-qrd-skyline/",
      },
      {
        cat: "Absorption",
        nrc: "1.00",
        name: "Acoustic Panel 60 — Fabric-wrapped",
        desc: "Timber-framed rockwool panel wrapped in fabric — deep absorption, studio aesthetics.",
        href: "https://detreat.com.vn/san-pham/tieu-am-panel-fabric-60/",
      },
    ],
    processEyebrow: "Our process · 5\u00A0steps",
    processTitle: "Measure first. Then\u00A0treat.",
    processTitleAccent: "Never\u00A0guess.",
    processSub:
      "We measure at both ends of the job — so you know exactly how much your room improved, not just that it “sounds different”.",
    steps: [
      {
        num: "01",
        title: "Survey",
        desc: "On-site measurement and assessment — dimensions, room modes, reflection points.",
        deliverable: "Room condition report",
      },
      {
        num: "02",
        title: "Consultation",
        desc: "A tailored mix of absorption, diffusion and trapping matched to your room and use\u00A0case.",
        deliverable: "Treatment plan +\u00A0layout",
      },
      {
        num: "03",
        title: "Quotation",
        desc: "Itemized materials and labor, transparently priced line by\u00A0line.",
        deliverable: "Detailed itemized quote",
      },
      {
        num: "04",
        title: "Fabrication",
        desc: "Panels, traps and clouds built to your room’s exact dimensions and color\u00A0palette.",
        deliverable: "Custom-built for your\u00A0room",
      },
      {
        num: "05",
        title: "Installation",
        desc: "Clean, precise installation at the calculated positions, with full\u00A0handover.",
        deliverable: "On-site install +\u00A0handover",
      },
    ],
    caption1: "Tuning & listening sessions with clients, on\u00A0site",
    caption2: "Measurement rig & reference signal\u00A0chain",
    projEyebrow: "Completed work",
    projTitle: "Selected projects",
    projAll: "View all\u00A0→",
    viewProject: "View project\u00A0→",
    storyEyebrow: "Our story",
    storyTitle: "Every room is its own acoustic puzzle.",
    storyP1:
      "De-treat began with a simple belief: great sound doesn’t come from expensive gear — it comes from a properly treated room. Even the finest speakers sound wrong in a reflective room.",
    storyP2:
      "Nguyễn Thành Linh and his team approach every space with measurement, not intuition. We measure RT60, find the room modes, locate first reflection points — and only then decide what goes where, and how\u00A0thick.",
    storyP3:
      "The result: rooms that sound right, stay fatigue-free through long sessions, and look like they belong in your\u00A0space.",
    quote:
      "“Great speakers in a bad room still sound wrong. We treat the room first — everything else falls into\u00A0place.”",
    quoteBy: "Nguyễn Thành Linh —\u00A0Founder",
    founderRole: "Founder · De-treat",
    stats: [
      { value: "8+", label: "Projects delivered" },
      { value: "RT60", label: "Measured before–after" },
      { value: "AA", label: "Build standard" },
    ],
    testiEyebrow: "Client voices",
    testiTitle: "Measurable — and\u00A0audible.",
    testiLink: "View projects\u00A0→",
    testimonials: [
      {
        quote:
          "The room looks beautiful and sounds accurate. The bass tightened up, and my mixes finally translate — I trust what I hear\u00A0now.",
        name: "Trần Gia Bảo",
        role: "EDM producer · Home\u00A0studio",
        href: "https://detreat.com.vn/du-an/home-studio-edm-led/",
      },
      {
        quote:
          "The soundstage opened right up — precise imaging, yet the room stays warm and inviting enough to listen for\u00A0hours.",
        name: "Lý Hoàng Nam",
        role: "Audiophile · Listening\u00A0room",
        href: "https://detreat.com.vn/du-an/phong-nghe-hifi-lounge/",
      },
      {
        quote:
          "At the mix position everything is solid and even. My mixes hold their balance anywhere I take them — clients\u00A0notice.",
        name: "Bùi Đức Tài",
        role: "Audio engineer · Commercial studio",
        href: "https://detreat.com.vn/du-an/phong-thu-mixing-console/",
      },
      {
        quote:
          "For the first time I can trust the bass in my room. Mixes translate to the car and headphones — no more second-guessing.",
        name: "Trần Minh Khoa",
        role: "Music producer · Home\u00A0studio",
        href: "https://detreat.com.vn/du-an/home-studio-q7/",
      },
    ],
    ctaTitle: "Where is your\u00A0room",
    ctaTitleAccent: "getting it\u00A0wrong?",
    ctaSub:
      "Send us a few photos of your room — we’ll give you free preliminary advice and a same-day\u00A0quote.",
    ctaBtn1: "Message us on\u00A0Zalo",
    ctaBtn2: "Call directly",
  },
  vi: {
    heroEyebrow: "Xử\u00A0lý âm\u00A0học · Việt\u00A0Nam",
    heroTitle: "Không\u00A0gian nghe\u00A0đúng,",
    heroTitleAccent: "bắt\u00A0đầu từ căn\u00A0phòng.",
    heroSub:
      "De-treat thiết kế và thi công tiêu âm, tán âm, bass\u00A0trap cho phòng thu, podcast và phòng nghe. Đo đạc trước – sau, không\u00A0đoán.",
    heroCta1: "Nhận tư\u00A0vấn miễn\u00A0phí",
    heroCta2: "Xem dự\u00A0án đã\u00A0làm",
    marquee: [
      "Phòng thu",
      "Podcast",
      "Phòng nghe Hi-Fi",
      "DJ booth",
      "Home studio",
      "Không gian thương mại",
    ],
    catEyebrow: "Bốn nhóm giải\u00A0pháp",
    catTitle: "Mỗi tần\u00A0số có một cách xử\u00A0lý\u00A0riêng.",
    catAll: "Toàn\u00A0bộ sản\u00A0phẩm\u00A0→",
    view: "Xem\u00A0→",
    categories: [
      {
        num: "01",
        count: "2\u00A0sản\u00A0phẩm",
        name: "Tiêu\u00A0âm",
        desc: "Hấp thụ phản xạ tần trung – cao, dứt tiếng vang\u00A0dội.",
        href: "/san-pham?cat=tieu-am",
      },
      {
        num: "02",
        count: "4\u00A0sản\u00A0phẩm",
        name: "Tán\u00A0âm",
        desc: "Phân tán sóng âm, giữ độ sống động mà không\u00A0bí.",
        href: "/san-pham?cat=tan-am",
      },
      {
        num: "03",
        count: "4\u00A0sản\u00A0phẩm",
        name: "Trap",
        desc: "Khử bùng tần thấp ở góc phòng, siết lại tiếng\u00A0bass.",
        href: "/san-pham?cat=bass-trap",
      },
      {
        num: "04",
        count: "4\u00A0sản\u00A0phẩm",
        name: "Ceiling\u00A0Cloud",
        desc: "Tấm treo trần xử lý phản xạ đầu, mở trần\u00A0phòng.",
        href: "/san-pham?cat=ceiling-cloud",
      },
    ],
    prodEyebrow: "Signature",
    prodTitle: "Sản\u00A0phẩm nổi\u00A0bật",
    prodAll: "Tất\u00A0cả\u00A0→",
    priceOnRequest: "Giá liên\u00A0hệ",
    details: "Chi\u00A0tiết\u00A0→",
    products: [
      {
        cat: "Trap",
        nrc: "1.05",
        name: "Corner Tri — Trap góc tam\u00A0giác",
        desc: "Trap góc nhồi rockwool 80kg/m³, siết tiếng bass bùng ở góc\u00A0phòng.",
        href: "https://detreat.com.vn/san-pham/bass-trap-corner-tri/",
      },
      {
        cat: "Ceiling\u00A0Cloud",
        nrc: "1.00",
        name: "Cloud Rect 120 — Cloud chữ\u00A0nhật",
        desc: "Tấm treo trần nhồi rockwool, dứt phản xạ trần ngay trên đầu bàn\u00A0mix.",
        href: "https://detreat.com.vn/san-pham/ceiling-cloud-rect-120/",
      },
      {
        cat: "Tán\u00A0âm",
        nrc: "0.20",
        name: "Skyline QRD — Tán\u00A0âm\u00A02D",
        desc: "Diffuser skyline gỗ thông, phân tán âm 2\u00A0chiều giữ phòng sống\u00A0động.",
        href: "https://detreat.com.vn/san-pham/tan-am-qrd-skyline/",
      },
      {
        cat: "Tiêu\u00A0âm",
        nrc: "1.00",
        name: "Acoustic Panel 60 — Bọc nỉ khung\u00A0gỗ",
        desc: "Panel khung gỗ nhồi rockwool, bọc nỉ — hấp thụ sâu, thẩm\u00A0mỹ\u00A0studio.",
        href: "https://detreat.com.vn/san-pham/tieu-am-panel-fabric-60/",
      },
    ],
    processEyebrow: "Quy\u00A0trình · 5\u00A0bước",
    processTitle: "Đo, rồi mới xử\u00A0lý.",
    processTitleAccent: "Không\u00A0đoán.",
    processSub:
      "Đo đạc ở cả đầu vào lẫn đầu ra — bạn biết chính xác phòng cải thiện bao nhiêu, không chỉ “nghe thấy\u00A0khác”.",
    steps: [
      {
        num: "01",
        title: "Khảo\u00A0sát",
        desc: "Đo đạc và khảo sát hiện trạng phòng tại chỗ — kích thước, mode phòng, điểm phản\u00A0xạ.",
        deliverable: "Báo\u00A0cáo hiện trạng\u00A0phòng",
      },
      {
        num: "02",
        title: "Tư\u00A0vấn",
        desc: "Đề xuất giải pháp tiêu âm – tán âm – trap phù hợp với phòng và nhu cầu sử\u00A0dụng.",
        deliverable: "Phương\u00A0án xử\u00A0lý +\u00A0bố\u00A0trí",
      },
      {
        num: "03",
        title: "Báo\u00A0giá",
        desc: "Bóc tách vật tư và hạng mục thi công, báo giá minh bạch theo từng\u00A0phần.",
        deliverable: "Báo\u00A0giá chi\u00A0tiết theo hạng\u00A0mục",
      },
      {
        num: "04",
        title: "Sản\u00A0xuất",
        desc: "Gia công tấm, trụ, cloud theo đúng kích thước và tông màu của\u00A0phòng.",
        deliverable: "Vật\u00A0tư gia\u00A0công riêng cho\u00A0phòng",
      },
      {
        num: "05",
        title: "Lắp\u00A0đặt",
        desc: "Thi công gọn sạch, căn chỉnh đúng vị trí tính toán và bàn giao tận\u00A0nơi.",
        deliverable: "Lắp\u00A0đặt tận\u00A0nơi +\u00A0bàn\u00A0giao",
      },
    ],
    caption1: "Căn chỉnh & nghe thử cùng khách ngay tại hiện\u00A0trường",
    caption2: "Thiết bị đo & chuỗi tín hiệu tham\u00A0chiếu",
    projEyebrow: "Đã thi\u00A0công",
    projTitle: "Dự\u00A0án tiêu\u00A0biểu",
    projAll: "Toàn\u00A0bộ\u00A0→",
    viewProject: "Xem dự\u00A0án\u00A0→",
    storyEyebrow: "Câu\u00A0chuyện",
    storyTitle: "Mỗi phòng là một bài\u00A0toán âm\u00A0học\u00A0riêng.",
    storyP1:
      "De-treat bắt đầu từ một niềm tin đơn giản: âm thanh hay không nằm ở thiết bị đắt tiền, mà ở căn phòng được xử lý đúng. Một cặp loa tốt trong phòng dội tiếng sẽ luôn nghe\u00A0sai.",
    storyP2:
      "Nguyễn Thành Linh và đội ngũ tiếp cận mỗi không gian bằng phép đo, không bằng cảm tính. Chúng tôi đo RT60, tìm mode phòng, xác định điểm phản xạ đầu — rồi mới quyết định đặt tấm gì, ở đâu, dày bao\u00A0nhiêu.",
    storyP3:
      "Kết quả là những không gian nghe đúng, làm việc lâu không mỏi tai, và đẹp đúng với không gian của\u00A0bạn.",
    quote:
      "“Loa xịn đặt sai phòng vẫn nghe sai. Tụi mình xử\u00A0lý căn\u00A0phòng trước — phần còn lại tự khắc\u00A0đúng.”",
    quoteBy: "Nguyễn Thành Linh — Nhà sáng\u00A0lập",
    founderRole: "Nhà sáng\u00A0lập · De-treat",
    stats: [
      { value: "8+", label: "Dự\u00A0án bàn\u00A0giao" },
      { value: "RT60", label: "Đo trước –\u00A0sau" },
      { value: "AA", label: "Tiêu\u00A0chí thi\u00A0công" },
    ],
    testiEyebrow: "Khách\u00A0hàng nói",
    testiTitle: "Đo được, và nghe\u00A0được.",
    testiLink: "Xem dự\u00A0án\u00A0→",
    testimonials: [
      {
        quote:
          "Phòng vừa đẹp vừa nghe chuẩn. Đường bass gọn hẳn, mix xong mang ra ngoài nghe khớp nên mình tự tin hơn\u00A0nhiều.",
        name: "Trần Gia Bảo",
        role: "Producer EDM · Home\u00A0studio",
        href: "https://detreat.com.vn/du-an/home-studio-edm-led/",
      },
      {
        quote:
          "Sân khấu âm thanh mở rộng hẳn, định vị nhạc cụ rõ ràng mà phòng vẫn ấm và có không khí để ngồi nghe cả\u00A0buổi.",
        name: "Lý Hoàng Nam",
        role: "Audiophile · Phòng nghe\u00A0nhạc",
        href: "https://detreat.com.vn/du-an/phong-nghe-hifi-lounge/",
      },
      {
        quote:
          "Ngồi ở vị trí mix nghe cực kỳ chắc và đều. Đem bản phối đi đâu cũng giữ được cân bằng, khách hài\u00A0lòng\u00A0hẳn.",
        name: "Bùi Đức Tài",
        role: "Kỹ\u00A0sư âm\u00A0thanh · Phòng\u00A0thu",
        href: "https://detreat.com.vn/du-an/phong-thu-mixing-console/",
      },
      {
        quote:
          "Lần đầu tiên tai mình tin được đường bass trong phòng. Mang bản mix ra xe, ra tai nghe đều khớp, không còn phải\u00A0đoán.",
        name: "Trần Minh Khoa",
        role: "Music producer · Home\u00A0studio",
        href: "https://detreat.com.vn/du-an/home-studio-q7/",
      },
    ],
    ctaTitle: "Phòng của\u00A0bạn\u00A0đang",
    ctaTitleAccent: "nghe sai ở\u00A0đâu?",
    ctaSub:
      "Gửi vài tấm ảnh phòng qua Zalo — chúng tôi tư vấn sơ bộ miễn phí và báo giá trong\u00A0ngày.",
    ctaBtn1: "Nhắn\u00A0Zalo 0914593334",
    ctaBtn2: "Gọi trực\u00A0tiếp",
  },
};

/* Category render images, index-aligned with HomeCopy.categories */
export const CATEGORY_IMAGES = [
  "/assets/TieuAm.png",
  "/assets/TanAm.png",
  "/assets/BassTrap.png",
  "/assets/Ceiling.png",
] as const;

/* Product renders for the Featured products cards, in the same order as
 * HOME_COPY.*.products (Corner Tri / Cloud Rect 120 / Skyline QRD / Panel 60). */
export const FEATURED_IMAGES = [
  "/assets/BassTrap.png",
  "/assets/Ceiling.png",
  "/assets/TanAm.png",
  "/assets/TieuAm.png",
] as const;

export const TEAM_IMG = "https://detreat.com.vn/_astro/team.3rA2OqYe_Z1d4awU.webp";
export const GEAR_IMG = "https://detreat.com.vn/_astro/gear.C0djJ93a_nJ2f3.webp";
export const FOUNDER_IMG =
  "https://detreat.com.vn/_astro/founder.DLfl8Dmg_Z2ovk1m.webp";

export interface HomeProjectTile {
  src: string;
  alt: string;
  row: "span 2" | "auto";
}

export const PROJECT_TILES: HomeProjectTile[] = [
  {
    src: "https://detreat.com.vn/_astro/z7964036168225_c5ad2ffe028a020a5fb6e630c0b048a6.CBPjECU7_Z1vlVjG.webp",
    alt: "De-treat project 1",
    row: "span 2",
  },
  {
    src: "https://detreat.com.vn/_astro/z7964036176104_01da6653a0431251219a5f9511f3d2fb.OvWrYVMz_ZTII9k.webp",
    alt: "De-treat project 2",
    row: "auto",
  },
  {
    src: "https://detreat.com.vn/_astro/z7964036186772_143171647ae09ebf77df688a7aab0714.Bz-Rd8wU_ZUuwJQ.webp",
    alt: "De-treat project 3",
    row: "auto",
  },
  {
    src: "https://detreat.com.vn/_astro/z7964036196611_b0c300ed9cc61f2b01f49111051b2bb8.CehFMkiv_1nVV1T.webp",
    alt: "De-treat project 4",
    row: "auto",
  },
  {
    src: "https://detreat.com.vn/_astro/z7964036198220_5d7c5b5b28d4f61dd3e51e3bcd02adea.C-xwwcyt_Z1hDV1o.webp",
    alt: "De-treat project 5",
    row: "auto",
  },
];
