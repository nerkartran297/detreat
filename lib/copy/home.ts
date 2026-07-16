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
    heroTitleAccent: "with the room.",
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
    catTitle: "Every frequency demands its own treatment.",
    catAll: "All products →",
    view: "Explore →",
    categories: [
      {
        num: "01",
        count: "2 products",
        name: "Absorption",
        desc: "Absorbs mid–high frequency reflections and eliminates flutter echo.",
        href: "/san-pham?cat=tieu-am",
      },
      {
        num: "02",
        count: "4 products",
        name: "Diffusion",
        desc: "Scatters sound energy, keeping the room lively without deadening it.",
        href: "/san-pham?cat=tan-am",
      },
      {
        num: "03",
        count: "4 products",
        name: "Bass Traps",
        desc: "Tames low-frequency build-up in corners and tightens the bass.",
        href: "/san-pham?cat=bass-trap",
      },
      {
        num: "04",
        count: "4 products",
        name: "Ceiling Clouds",
        desc: "Suspended panels that control overhead reflections and open up the ceiling.",
        href: "/san-pham?cat=ceiling-cloud",
      },
    ],
    prodEyebrow: "Signature",
    prodTitle: "Featured products",
    prodAll: "View all →",
    priceOnRequest: "Price on request",
    details: "Details →",
    products: [
      {
        cat: "Bass Trap",
        nrc: "1.05",
        name: "Corner Tri — Triangular corner trap",
        desc: "Corner trap filled with 80kg/m³ rockwool — tightens boomy bass in room corners.",
        href: "https://detreat.com.vn/san-pham/bass-trap-corner-tri/",
      },
      {
        cat: "Ceiling Cloud",
        nrc: "1.00",
        name: "Cloud Rect 120 — Rectangular cloud",
        desc: "Suspended rockwool panel that stops ceiling reflections right above the mix position.",
        href: "https://detreat.com.vn/san-pham/ceiling-cloud-rect-120/",
      },
      {
        cat: "Diffusion",
        nrc: "0.20",
        name: "Skyline QRD — 2D diffuser",
        desc: "Pine skyline diffuser scattering sound in two dimensions to keep the room alive.",
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
    processEyebrow: "Our process · 5 steps",
    processTitle: "Measure first. Then treat.",
    processTitleAccent: "Never guess.",
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
        desc: "A tailored mix of absorption, diffusion and trapping matched to your room and use case.",
        deliverable: "Treatment plan + layout",
      },
      {
        num: "03",
        title: "Quotation",
        desc: "Itemized materials and labor, transparently priced line by line.",
        deliverable: "Detailed itemized quote",
      },
      {
        num: "04",
        title: "Fabrication",
        desc: "Panels, traps and clouds built to your room’s exact dimensions and color palette.",
        deliverable: "Custom-built for your room",
      },
      {
        num: "05",
        title: "Installation",
        desc: "Clean, precise installation at the calculated positions, with full handover.",
        deliverable: "On-site install + handover",
      },
    ],
    caption1: "Tuning & listening sessions with clients, on site",
    caption2: "Measurement rig & reference signal chain",
    projEyebrow: "Completed work",
    projTitle: "Selected projects",
    projAll: "View all →",
    viewProject: "View project →",
    storyEyebrow: "Our story",
    storyTitle: "Every room is its own acoustic puzzle.",
    storyP1:
      "De-treat began with a simple belief: great sound doesn’t come from expensive gear — it comes from a properly treated room. Even the finest speakers sound wrong in a reflective room.",
    storyP2:
      "Nguyễn Thành Linh and his team approach every space with measurement, not intuition. We measure RT60, find the room modes, locate first reflection points — and only then decide what goes where, and how thick.",
    storyP3:
      "The result: rooms that sound right, stay fatigue-free through long sessions, and look like they belong in your space.",
    quote:
      "“Great speakers in a bad room still sound wrong. We treat the room first — everything else falls into place.”",
    quoteBy: "Nguyễn Thành Linh — Founder",
    founderRole: "Founder · De-treat",
    stats: [
      { value: "8+", label: "Projects delivered" },
      { value: "RT60", label: "Measured before–after" },
      { value: "AA", label: "Build standard" },
    ],
    testiEyebrow: "Client voices",
    testiTitle: "Measurable — and audible.",
    testiLink: "View projects →",
    testimonials: [
      {
        quote:
          "The room looks beautiful and sounds accurate. The bass tightened up, and my mixes finally translate — I trust what I hear now.",
        name: "Trần Gia Bảo",
        role: "EDM producer · Home studio",
        href: "https://detreat.com.vn/du-an/home-studio-edm-led/",
      },
      {
        quote:
          "The soundstage opened right up — precise imaging, yet the room stays warm and inviting enough to listen for hours.",
        name: "Lý Hoàng Nam",
        role: "Audiophile · Listening room",
        href: "https://detreat.com.vn/du-an/phong-nghe-hifi-lounge/",
      },
      {
        quote:
          "At the mix position everything is solid and even. My mixes hold their balance anywhere I take them — clients notice.",
        name: "Bùi Đức Tài",
        role: "Audio engineer · Commercial studio",
        href: "https://detreat.com.vn/du-an/phong-thu-mixing-console/",
      },
      {
        quote:
          "For the first time I can trust the bass in my room. Mixes translate to the car and headphones — no more second-guessing.",
        name: "Trần Minh Khoa",
        role: "Music producer · Home studio",
        href: "https://detreat.com.vn/du-an/home-studio-q7/",
      },
    ],
    ctaTitle: "Where is your room",
    ctaTitleAccent: "getting it wrong?",
    ctaSub:
      "Send us a few photos of your room — we’ll give you free preliminary advice and a same-day quote.",
    ctaBtn1: "Message us on Zalo",
    ctaBtn2: "Call directly",
  },
  vi: {
    heroEyebrow: "Xử lý âm học · Việt Nam",
    heroTitle: "Không gian nghe đúng,",
    heroTitleAccent: "bắt đầu từ căn phòng.",
    heroSub:
      "De-treat thiết kế và thi công tiêu âm, tán âm, bass trap cho phòng thu, podcast và phòng nghe. Đo đạc trước – sau, không đoán.",
    heroCta1: "Nhận tư vấn miễn phí",
    heroCta2: "Xem dự án đã làm",
    marquee: [
      "Phòng thu",
      "Podcast",
      "Phòng nghe Hi-Fi",
      "DJ booth",
      "Home studio",
      "Không gian thương mại",
    ],
    catEyebrow: "Bốn nhóm giải pháp",
    catTitle: "Mỗi tần số có một cách xử lý riêng.",
    catAll: "Toàn bộ sản phẩm →",
    view: "Xem →",
    categories: [
      {
        num: "01",
        count: "2 sản phẩm",
        name: "Tiêu âm",
        desc: "Hấp thụ phản xạ tần trung – cao, dứt tiếng vang dội.",
        href: "/san-pham?cat=tieu-am",
      },
      {
        num: "02",
        count: "4 sản phẩm",
        name: "Tán âm",
        desc: "Phân tán sóng âm, giữ độ sống động mà không bí.",
        href: "/san-pham?cat=tan-am",
      },
      {
        num: "03",
        count: "4 sản phẩm",
        name: "Trap",
        desc: "Khử bùng tần thấp ở góc phòng, siết lại tiếng bass.",
        href: "/san-pham?cat=bass-trap",
      },
      {
        num: "04",
        count: "4 sản phẩm",
        name: "Ceiling Cloud",
        desc: "Tấm treo trần xử lý phản xạ đầu, mở trần phòng.",
        href: "/san-pham?cat=ceiling-cloud",
      },
    ],
    prodEyebrow: "Signature",
    prodTitle: "Sản phẩm nổi bật",
    prodAll: "Tất cả →",
    priceOnRequest: "Giá liên hệ",
    details: "Chi tiết →",
    products: [
      {
        cat: "Trap",
        nrc: "1.05",
        name: "Corner Tri — Trap góc tam giác",
        desc: "Trap góc nhồi rockwool 80kg/m³, siết tiếng bass bùng ở góc phòng.",
        href: "https://detreat.com.vn/san-pham/bass-trap-corner-tri/",
      },
      {
        cat: "Ceiling Cloud",
        nrc: "1.00",
        name: "Cloud Rect 120 — Cloud chữ nhật",
        desc: "Tấm treo trần nhồi rockwool, dứt phản xạ trần ngay trên đầu bàn mix.",
        href: "https://detreat.com.vn/san-pham/ceiling-cloud-rect-120/",
      },
      {
        cat: "Tán âm",
        nrc: "0.20",
        name: "Skyline QRD — Tán âm 2D",
        desc: "Diffuser skyline gỗ thông, phân tán âm 2 chiều giữ phòng sống động.",
        href: "https://detreat.com.vn/san-pham/tan-am-qrd-skyline/",
      },
      {
        cat: "Tiêu âm",
        nrc: "1.00",
        name: "Acoustic Panel 60 — Bọc nỉ khung gỗ",
        desc: "Panel khung gỗ nhồi rockwool, bọc nỉ — hấp thụ sâu, thẩm mỹ studio.",
        href: "https://detreat.com.vn/san-pham/tieu-am-panel-fabric-60/",
      },
    ],
    processEyebrow: "Quy trình · 5 bước",
    processTitle: "Đo, rồi mới xử lý.",
    processTitleAccent: "Không đoán.",
    processSub:
      "Đo đạc ở cả đầu vào lẫn đầu ra — bạn biết chính xác phòng cải thiện bao nhiêu, không chỉ “nghe thấy khác”.",
    steps: [
      {
        num: "01",
        title: "Khảo sát",
        desc: "Đo đạc và khảo sát hiện trạng phòng tại chỗ — kích thước, mode phòng, điểm phản xạ.",
        deliverable: "Báo cáo hiện trạng phòng",
      },
      {
        num: "02",
        title: "Tư vấn",
        desc: "Đề xuất giải pháp tiêu âm – tán âm – trap phù hợp với phòng và nhu cầu sử dụng.",
        deliverable: "Phương án xử lý + bố trí",
      },
      {
        num: "03",
        title: "Báo giá",
        desc: "Bóc tách vật tư và hạng mục thi công, báo giá minh bạch theo từng phần.",
        deliverable: "Báo giá chi tiết theo hạng mục",
      },
      {
        num: "04",
        title: "Sản xuất",
        desc: "Gia công tấm, trụ, cloud theo đúng kích thước và tông màu của phòng.",
        deliverable: "Vật tư gia công riêng cho phòng",
      },
      {
        num: "05",
        title: "Lắp đặt",
        desc: "Thi công gọn sạch, căn chỉnh đúng vị trí tính toán và bàn giao tận nơi.",
        deliverable: "Lắp đặt tận nơi + bàn giao",
      },
    ],
    caption1: "Căn chỉnh & nghe thử cùng khách ngay tại hiện trường",
    caption2: "Thiết bị đo & chuỗi tín hiệu tham chiếu",
    projEyebrow: "Đã thi công",
    projTitle: "Dự án tiêu biểu",
    projAll: "Toàn bộ →",
    viewProject: "Xem dự án →",
    storyEyebrow: "Câu chuyện",
    storyTitle: "Mỗi phòng là một bài toán âm học riêng.",
    storyP1:
      "De-treat bắt đầu từ một niềm tin đơn giản: âm thanh hay không nằm ở thiết bị đắt tiền, mà ở căn phòng được xử lý đúng. Một cặp loa tốt trong phòng dội tiếng sẽ luôn nghe sai.",
    storyP2:
      "Nguyễn Thành Linh và đội ngũ tiếp cận mỗi không gian bằng phép đo, không bằng cảm tính. Chúng tôi đo RT60, tìm mode phòng, xác định điểm phản xạ đầu — rồi mới quyết định đặt tấm gì, ở đâu, dày bao nhiêu.",
    storyP3:
      "Kết quả là những không gian nghe đúng, làm việc lâu không mỏi tai, và đẹp đúng với không gian của bạn.",
    quote:
      "“Loa xịn đặt sai phòng vẫn nghe sai. Tụi mình xử lý căn phòng trước — phần còn lại tự khắc đúng.”",
    quoteBy: "Nguyễn Thành Linh — Nhà sáng lập",
    founderRole: "Nhà sáng lập · De-treat",
    stats: [
      { value: "8+", label: "Dự án bàn giao" },
      { value: "RT60", label: "Đo trước – sau" },
      { value: "AA", label: "Tiêu chí thi công" },
    ],
    testiEyebrow: "Khách hàng nói",
    testiTitle: "Đo được, và nghe được.",
    testiLink: "Xem dự án →",
    testimonials: [
      {
        quote:
          "Phòng vừa đẹp vừa nghe chuẩn. Đường bass gọn hẳn, mix xong mang ra ngoài nghe khớp nên mình tự tin hơn nhiều.",
        name: "Trần Gia Bảo",
        role: "Producer EDM · Home studio",
        href: "https://detreat.com.vn/du-an/home-studio-edm-led/",
      },
      {
        quote:
          "Sân khấu âm thanh mở rộng hẳn, định vị nhạc cụ rõ ràng mà phòng vẫn ấm và có không khí để ngồi nghe cả buổi.",
        name: "Lý Hoàng Nam",
        role: "Audiophile · Phòng nghe nhạc",
        href: "https://detreat.com.vn/du-an/phong-nghe-hifi-lounge/",
      },
      {
        quote:
          "Ngồi ở vị trí mix nghe cực kỳ chắc và đều. Đem bản phối đi đâu cũng giữ được cân bằng, khách hài lòng hẳn.",
        name: "Bùi Đức Tài",
        role: "Kỹ sư âm thanh · Phòng thu",
        href: "https://detreat.com.vn/du-an/phong-thu-mixing-console/",
      },
      {
        quote:
          "Lần đầu tiên tai mình tin được đường bass trong phòng. Mang bản mix ra xe, ra tai nghe đều khớp, không còn phải đoán.",
        name: "Trần Minh Khoa",
        role: "Music producer · Home studio",
        href: "https://detreat.com.vn/du-an/home-studio-q7/",
      },
    ],
    ctaTitle: "Phòng của bạn đang",
    ctaTitleAccent: "nghe sai ở đâu?",
    ctaSub:
      "Gửi vài tấm ảnh phòng qua Zalo — chúng tôi tư vấn sơ bộ miễn phí và báo giá trong ngày.",
    ctaBtn1: "Nhắn Zalo 0914593334",
    ctaBtn2: "Gọi trực tiếp",
  },
};

/* Category render images, index-aligned with HomeCopy.categories */
export const CATEGORY_IMAGES = [
  "/assets/TieuAm.png",
  "/assets/TanAm.png",
  "/assets/BassTrap.png",
  "/assets/Ceiling.png",
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
