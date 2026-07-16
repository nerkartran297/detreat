import type { Lang } from "@/lib/i18n";

/** Product detail page copy + data — source of truth: the per-product data
 *  map `D`, the `names` maps and the `t` dictionaries embedded in
 *  design_handoff_detreat_site/Chi Tiet San Pham.dc.html.
 *  Only \u00A0 escapes (NBSP insertions) deviate from the design strings.
 *
 *  Descriptions, category labels, NRC values and images are shared with the
 *  catalogue and imported from lib/copy/products.ts. The product NAMES are
 *  NOT shared: the detail design file uses longer variants for six slugs
 *  (e.g. "Slat Wood — Tán âm nan gỗ tích hợp tiêu âm"), so they live here. */

export interface Localized<T = string> {
  en: T;
  vi: T;
}

export interface ProductDetail {
  dims: string;
  th: string;
  wt: string;
  install: Localized;
  mat: Localized;
  range: Localized;
  colors: Localized<string[]>;
  fit: Localized<string[]>;
  para1: Localized;
  para2: Localized;
  hl: Localized<string[]>;
}

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  "bass-trap-corner-tri": {
    dims: "100 × 30 × 30\u00A0cm",
    th: "300\u00A0mm",
    wt: "6.2\u00A0kg",
    install: {
      en: "Corner stacking / wall brackets",
      vi: "Xếp chồng góc / ke tường",
    },
    mat: {
      en: "80\u00A0kg/m³ rockwool core, timber frame, acoustic fabric",
      vi: "Rockwool 80\u00A0kg/m³, khung gỗ, bọc nỉ acoustic",
    },
    range: { en: "60 – 500\u00A0Hz", vi: "60 – 500\u00A0Hz" },
    colors: {
      en: ["Charcoal", "Cream", "Black"],
      vi: ["Xám\u00A0than", "Kem", "Đen"],
    },
    fit: {
      en: ["Home\u00A0studio", "Mixing\u00A0room", "Hi-Fi\u00A0room"],
      vi: ["Home\u00A0studio", "Phòng\u00A0mix", "Phòng nghe\u00A0Hi-Fi"],
    },
    para1: {
      en: "Corner Tri stacks vertically into room corners — where low-frequency pressure builds up most. The 80\u00A0kg/m³ rockwool core is dense enough to convert boomy corner energy into heat, tightening the bass without touching the\u00A0mids.",
      vi: "Corner Tri xếp chồng theo phương đứng vào góc phòng — nơi áp suất tần thấp dồn ứ nhiều nhất. Lõi rockwool 80\u00A0kg/m³ đủ đặc để chuyển năng lượng bass bùng ở góc thành nhiệt, siết lại tiếng bass mà không chạm vào dải\u00A0trung.",
    },
    para2: {
      en: "A column of four units covers a standard 2.4m corner. Most rooms treat the two front corners first, then add rear corners if modal ringing persists in measurements.",
      vi: "Một cột bốn khối phủ đủ góc phòng 2.4m tiêu chuẩn. Đa số phòng xử lý hai góc trước trước tiên, sau đó thêm góc sau nếu phép đo vẫn thấy ringing do mode\u00A0phòng.",
    },
    hl: {
      en: [
        "Dense 80\u00A0kg/m³ core tuned for 60–500\u00A0Hz",
        "Stacks to full room height, no\u00A0tools",
        "Tri profile hugs the corner pressure\u00A0zone",
        "Fabric finish matches wall\u00A0panels",
      ],
      vi: [
        "Lõi 80\u00A0kg/m³ tối ưu dải 60–500\u00A0Hz",
        "Xếp chồng kín chiều cao phòng, không cần dụng\u00A0cụ",
        "Khối tam giác ôm đúng vùng áp suất\u00A0góc",
        "Bọc nỉ đồng bộ với panel\u00A0tường",
      ],
    },
  },
  "ceiling-cloud-rect-120": {
    dims: "120 × 60 × 8\u00A0cm",
    th: "80\u00A0mm",
    wt: "5.8\u00A0kg",
    install: {
      en: "Cable suspension / turnbuckles",
      vi: "Hệ dây cáp treo / tăng đơ",
    },
    mat: {
      en: "60\u00A0kg/m³ rockwool, timber frame, acoustic fabric",
      vi: "Bông khoáng rockwool 60\u00A0kg/m³, khung gỗ, bọc nỉ acoustic",
    },
    range: { en: "200 – 4000\u00A0Hz", vi: "200 – 4000\u00A0Hz" },
    colors: {
      en: ["Charcoal", "Cream", "Black", "Navy"],
      vi: ["Xám\u00A0than", "Kem", "Đen", "Xanh\u00A0navy"],
    },
    fit: {
      en: [
        "Above the mix\u00A0position",
        "Recording\u00A0studio",
        "Meeting\u00A0room",
      ],
      vi: ["Trần trên bàn\u00A0mix", "Phòng\u00A0thu", "Phòng\u00A0họp"],
    },
    para1: {
      en: "Cloud Rect 120 hangs parallel below the ceiling, right above the listening position, to absorb the ceiling reflection — the early reflection path most rooms forget, which smears imaging. The 80mm, 60\u00A0kg/m³ core reaches NRC\u00A0~1.0; more importantly, the air gap behind the panel extends absorption into the low-mids, far beyond what flush mounting achieves.",
      vi: "Cloud Rect 120 treo song song dưới trần, ngay phía trên vị trí ngồi, để hấp thụ phản xạ trần — đường phản xạ sớm thường bị bỏ quên nhưng làm âm hình mờ và đục. Lõi rockwool 60\u00A0kg/m³ dày 80\u00A0mm cho NRC\u00A0~1.0; quan trọng hơn, khoảng không khí giữa tấm và trần kéo dài hiệu quả hấp thụ xuống dải trung – thấp, tốt hơn nhiều so với ốp sát\u00A0trần.",
    },
    para2: {
      en: 'The cable system with turnbuckles lets you set both height and tilt, aligning the panel to the exact reflection angle toward the ear. A clear upgrade for rooms that treated the walls but still hear energy "overhead".',
      vi: 'Hệ dây cáp kèm tăng đơ cho phép chỉnh cao độ và độ nghiêng tấm, căn đúng góc phản xạ tới tai. Đây là bước nâng cấp rõ rệt cho phòng đã xử lý tường nhưng vẫn thấy tiếng "ở trên\u00A0đầu".',
    },
    hl: {
      en: [
        "Air gap extends absorption into\u00A0low-mids",
        "60\u00A0kg/m³ rockwool, NRC\u00A0~1.0",
        "Turnbuckle cables adjust height and\u00A0tilt",
        "Opens the ceiling, sharpens\u00A0imaging",
      ],
      vi: [
        "Treo cách trần — khoang khí kéo dài dải hấp\u00A0thụ",
        "Rockwool 60\u00A0kg/m³, NRC\u00A0~1.0, dứt phản xạ\u00A0trần",
        "Dây cáp tăng đơ chỉnh cao độ và độ\u00A0nghiêng",
        "Mở trần phòng, làm âm hình rõ và gọn\u00A0hơn",
      ],
    },
  },
  "tan-am-qrd-skyline": {
    dims: "60 × 60 × 12\u00A0cm",
    th: "120\u00A0mm",
    wt: "4.8\u00A0kg",
    install: { en: "Wall mount / adhesive", vi: "Treo tường / dán nền" },
    mat: {
      en: "Solid pine blocks, prime-root sequence, matte finish",
      vi: "Khối gỗ thông nguyên khối, chuỗi số học primitive-root, phủ mờ",
    },
    range: {
      en: "800 – 6000\u00A0Hz (2D scattering)",
      vi: "800 – 6000\u00A0Hz (tán xạ 2\u00A0chiều)",
    },
    colors: {
      en: ["Natural\u00A0pine", "Walnut", "Matte\u00A0black"],
      vi: ["Thông tự\u00A0nhiên", "Óc\u00A0chó", "Đen\u00A0mờ"],
    },
    fit: {
      en: [
        "Listening\u00A0room",
        "Control room rear\u00A0wall",
        "Live\u00A0room",
      ],
      vi: ["Phòng\u00A0nghe", "Tường sau phòng\u00A0mix", "Phòng thu\u00A0live"],
    },
    para1: {
      en: "Skyline QRD scatters sound in two dimensions using a mathematically derived grid of pine columns. Instead of killing reflections, it breaks them into a diffuse field — the room keeps its life and air, but flutter and harsh specular reflections disappear.",
      vi: 'Skyline QRD phân tán âm theo hai chiều bằng lưới cột gỗ thông tính theo chuỗi toán học. Thay vì triệt phản xạ, nó bẻ phản xạ thành trường âm khuếch tán — phòng giữ được độ sống và "không khí", nhưng flutter\u00A0echo và phản xạ gắt biến\u00A0mất.',
    },
    para2: {
      en: "Typical placement is the rear wall of a control room or the wall behind the listening position, at ear height. Combine with absorption at first reflection points for a balanced\u00A0room.",
      vi: "Vị trí điển hình là tường sau phòng mix hoặc mảng tường sau vị trí ngồi nghe, ngang tầm tai. Kết hợp với tiêu âm tại điểm phản xạ đầu để phòng cân\u00A0bằng.",
    },
    hl: {
      en: [
        "True 2D scattering from prime-sequence grid",
        "Solid pine — no veneer, ages beautifully",
        "Keeps the room alive, kills\u00A0flutter",
        "Modular 60cm tiles form large\u00A0arrays",
      ],
      vi: [
        "Tán xạ 2\u00A0chiều thật từ lưới chuỗi số nguyên\u00A0tố",
        "Gỗ thông nguyên khối — không veneer, càng dùng càng\u00A0đẹp",
        "Giữ phòng sống động, dứt flutter\u00A0echo",
        "Module 60cm ghép được mảng\u00A0lớn",
      ],
    },
  },
  "bass-trap-column-round": {
    dims: "Ø40 × 120\u00A0cm",
    th: "Ø400\u00A0mm",
    wt: "7.5\u00A0kg",
    install: {
      en: "Freestanding / corner placement",
      vi: "Đặt sàn tự đứng / kê góc",
    },
    mat: {
      en: "60\u00A0kg/m³ rockwool cylinder, fabric sleeve, timber caps",
      vi: "Trụ rockwool 60\u00A0kg/m³, vỏ nỉ, nắp gỗ hai đầu",
    },
    range: {
      en: "80 – 800\u00A0Hz (omnidirectional)",
      vi: "80 – 800\u00A0Hz (hút đa\u00A0hướng)",
    },
    colors: {
      en: ["Charcoal", "Cream", "Black"],
      vi: ["Xám\u00A0than", "Kem", "Đen"],
    },
    fit: {
      en: ["Home\u00A0studio", "Vocal\u00A0booth", "Flexible\u00A0rooms"],
      vi: ["Home\u00A0studio", "Booth thu\u00A0âm", "Phòng đa\u00A0dụng"],
    },
    para1: {
      en: "Column Round absorbs bass omnidirectionally — the full cylinder surface works, so each unit does more than a flat panel of the same footprint. Being freestanding, it moves with you: behind the speakers today, in the corners tomorrow.",
      vi: "Column Round hút bass đa hướng — toàn bộ bề mặt trụ đều làm việc, nên mỗi trụ hiệu quả hơn tấm phẳng cùng diện tích chiếm chỗ. Vì tự đứng, nó di chuyển linh hoạt: hôm nay sau loa, mai kê góc\u00A0phòng.",
    },
    para2: {
      en: "Producers who rent or rearrange often prefer columns over fixed corner traps — zero drilling, and the room can be re-tuned in\u00A0minutes.",
      vi: "Producer thuê nhà hoặc hay đổi layout thường chuộng trụ hơn trap góc cố định — không khoan tường, và phòng có thể tinh chỉnh lại trong vài\u00A0phút.",
    },
    hl: {
      en: [
        "Omnidirectional absorption, full\u00A0surface",
        "Freestanding — zero installation",
        "Moves and re-tunes the room in\u00A0minutes",
        "Timber caps double as plant\u00A0stands",
      ],
      vi: [
        "Hút đa hướng, toàn bộ bề mặt làm\u00A0việc",
        "Tự đứng — không cần thi\u00A0công",
        "Di chuyển, tinh chỉnh phòng trong vài\u00A0phút",
        "Nắp gỗ có thể đặt chậu cây trang\u00A0trí",
      ],
    },
  },
  "ceiling-cloud-hexa": {
    dims: "60 × 52 × 5\u00A0cm",
    th: "50\u00A0mm",
    wt: "2.4\u00A0kg",
    install: {
      en: "Cable suspension, honeycomb layout",
      vi: "Dây cáp treo, ghép tổ ong",
    },
    mat: {
      en: "50mm PET acoustic core, fabric wrap",
      vi: "Lõi PET acoustic 50mm, bọc nỉ",
    },
    range: { en: "300 – 4000\u00A0Hz", vi: "300 – 4000\u00A0Hz" },
    colors: {
      en: ["Charcoal", "Cream", "Navy", "Terracotta"],
      vi: ["Xám\u00A0than", "Kem", "Xanh\u00A0navy", "Đất\u00A0nung"],
    },
    fit: {
      en: ["Office", "Cafe / restaurant", "Podcast\u00A0room"],
      vi: ["Văn\u00A0phòng", "Cafe / nhà\u00A0hàng", "Phòng\u00A0podcast"],
    },
    para1: {
      en: "Cloud Hexa turns ceiling treatment into a design feature: hexagonal tiles cluster into honeycomb fields that absorb speech-band reflections while giving the ceiling a deliberate, architectural look.",
      vi: "Cloud Hexa biến xử lý trần thành điểm nhấn thiết kế: các tấm lục giác ghép thành mảng tổ ong hấp thụ phản xạ dải giọng nói, đồng thời cho trần một diện mạo kiến trúc có chủ\u00A0đích.",
    },
    para2: {
      en: "Popular in commercial spaces where reverberation control must not look industrial. Mix colors across the honeycomb for a branded ceiling.",
      vi: 'Được ưa chuộng ở không gian thương mại, nơi việc kiểm soát vang không được trông "công nghiệp". Phối màu trong mảng tổ ong để tạo trần mang dấu ấn thương\u00A0hiệu.',
    },
    hl: {
      en: [
        "Honeycomb clusters — ceiling as\u00A0design",
        "Lightweight PET, 2.4\u00A0kg per\u00A0tile",
        "Four colors, mixable per\u00A0array",
        "Speech-band tuned for busy\u00A0spaces",
      ],
      vi: [
        "Ghép tổ ong — trần thành thiết\u00A0kế",
        "PET nhẹ, 2.4\u00A0kg mỗi\u00A0tấm",
        "Bốn màu, phối tự do trong\u00A0mảng",
        "Tối ưu dải giọng nói cho không gian đông\u00A0người",
      ],
    },
  },
  "tan-am-qrd-well-7": {
    dims: "120 × 60 × 15\u00A0cm",
    th: "150\u00A0mm",
    wt: "8.2\u00A0kg",
    install: { en: "Wall mount, ear\u00A0height", vi: "Treo tường, ngang tầm tai" },
    mat: {
      en: "MDF wells, veneer finish, sealed back",
      vi: "Giếng MDF phủ veneer, lưng kín",
    },
    range: {
      en: "600 – 5000\u00A0Hz (1D scattering)",
      vi: "600 – 5000\u00A0Hz (tán xạ 1\u00A0chiều)",
    },
    colors: {
      en: ["Walnut", "Natural\u00A0oak", "Matte\u00A0black"],
      vi: ["Óc\u00A0chó", "Sồi tự\u00A0nhiên", "Đen\u00A0mờ"],
    },
    fit: {
      en: ["Control\u00A0room", "Listening\u00A0room", "Mastering\u00A0room"],
      vi: ["Phòng\u00A0mix", "Phòng\u00A0nghe", "Phòng\u00A0mastering"],
    },
    para1: {
      en: "QRD Well 7 is the classic quadratic-residue diffuser: seven wells of mathematically set depths spread reflections evenly across the horizontal plane — where your ears\u00A0live.",
      vi: "QRD Well 7 là diffuser quadratic-residue kinh điển: bảy giếng với độ sâu tính toán trải phản xạ đều theo phương ngang — đúng mặt phẳng đôi tai làm\u00A0việc.",
    },
    para2: {
      en: "Mount a row at ear height on the rear wall for a wider, deeper soundstage without losing energy. Pairs well with bass trapping in the same wall's corners.",
      vi: "Treo một hàng ngang tầm tai ở tường sau cho sân khấu âm thanh rộng và sâu hơn mà không mất năng lượng. Kết hợp tốt với trap bass ở hai góc cùng bức\u00A0tường.",
    },
    hl: {
      en: [
        "Classic QRD math, honest performance",
        "Horizontal scattering at ear\u00A0height",
        "Veneer wells — furniture-grade finish",
        "Wider soundstage, zero\u00A0deadening",
      ],
      vi: [
        "Toán QRD kinh điển, hiệu năng\u00A0thật",
        "Tán xạ ngang đúng tầm\u00A0tai",
        "Giếng veneer — hoàn thiện như nội\u00A0thất",
        "Sân khấu rộng hơn, không làm chết\u00A0phòng",
      ],
    },
  },
  "tieu-am-panel-fabric-60": {
    dims: "120 × 60 × 6\u00A0cm",
    th: "60\u00A0mm",
    wt: "4.2\u00A0kg",
    install: {
      en: "Z-clips / adhesive / frame hang",
      vi: "Z-clip / dán / khung treo",
    },
    mat: {
      en: "60\u00A0kg/m³ rockwool, timber frame, acoustic fabric",
      vi: "Rockwool 60\u00A0kg/m³, khung gỗ, bọc nỉ acoustic",
    },
    range: { en: "250 – 4000\u00A0Hz", vi: "250 – 4000\u00A0Hz" },
    colors: {
      en: ["Charcoal", "Cream", "Black", "Navy"],
      vi: ["Xám\u00A0than", "Kem", "Đen", "Xanh\u00A0navy"],
    },
    fit: {
      en: [
        "First reflection\u00A0points",
        "Vocal\u00A0recording",
        "Podcast\u00A0room",
      ],
      vi: ["Điểm phản xạ\u00A0đầu", "Thu\u00A0vocal", "Phòng\u00A0podcast"],
    },
    para1: {
      en: "Acoustic Panel 60 is the workhorse: a timber-framed rockwool panel wrapped in acoustic fabric, absorbing deeply across the mid and high bands. Placed at first reflection points, it removes the smear that makes rooms sound\u00A0boxy.",
      vi: 'Acoustic Panel 60 là "ngựa thồ" của xử lý âm học: panel khung gỗ nhồi rockwool bọc nỉ, hấp thụ sâu dải trung – cao. Đặt tại điểm phản xạ đầu, nó loại bỏ tiếng nhòe khiến phòng nghe bị "đóng\u00A0hộp".',
    },
    para2: {
      en: "The 60mm depth hits NRC\u00A0~1.0 where voices and instruments live. Most rooms start with six to eight panels at measured reflection points.",
      vi: "Độ dày 60mm đạt NRC\u00A0~1.0 đúng dải giọng hát và nhạc cụ. Đa số phòng bắt đầu với 6–8 tấm tại các điểm phản xạ được đo\u00A0đạc.",
    },
    hl: {
      en: [
        "NRC\u00A0~1.0 across the vocal\u00A0band",
        "Timber frame keeps edges crisp for\u00A0years",
        "Four fabric colors, custom\u00A0sizes",
        "Three mounting systems included",
      ],
      vi: [
        "NRC\u00A0~1.0 trọn dải giọng\u00A0hát",
        "Khung gỗ giữ cạnh phẳng đẹp nhiều\u00A0năm",
        "Bốn màu nỉ, nhận đặt kích thước\u00A0riêng",
        "Kèm ba phương án lắp\u00A0đặt",
      ],
    },
  },
  "bass-trap-panel-superchunk": {
    dims: "60 × 60 × 60\u00A0cm (tri)",
    th: "600\u00A0mm",
    wt: "11\u00A0kg",
    install: {
      en: "Corner stacking, floor to ceiling",
      vi: "Xếp chồng góc, sàn tới\u00A0trần",
    },
    mat: {
      en: "Solid 100\u00A0kg/m³ rockwool, fabric face",
      vi: "Rockwool đặc 100\u00A0kg/m³, mặt bọc nỉ",
    },
    range: { en: "40 – 300\u00A0Hz", vi: "40 – 300\u00A0Hz" },
    colors: { en: ["Charcoal", "Black"], vi: ["Xám\u00A0than", "Đen"] },
    fit: {
      en: [
        "Mastering\u00A0room",
        "Small control\u00A0room",
        "Bass-heavy genres",
      ],
      vi: [
        "Phòng\u00A0mastering",
        "Phòng mix\u00A0nhỏ",
        "Thể loại nặng\u00A0bass",
      ],
    },
    para1: {
      en: "Superchunk is the deepest bass treatment we build: a solid triangular block of 100\u00A0kg/m³ rockwool filling the entire corner, floor to ceiling. Nothing absorbs below 100\u00A0Hz like sheer mass in the pressure\u00A0zone.",
      vi: "Superchunk là giải pháp bass sâu nhất chúng tôi sản xuất: khối tam giác rockwool đặc 100\u00A0kg/m³ lấp kín toàn bộ góc phòng từ sàn tới trần. Không gì hút dưới 100\u00A0Hz tốt bằng khối lượng đặt đúng vùng áp\u00A0suất.",
    },
    para2: {
      en: "Small rooms with big monitors need this: modal decay at 50–80\u00A0Hz drops dramatically, and the mix position stops lying to\u00A0you.",
      vi: 'Phòng nhỏ chơi loa lớn cần nó: thời gian dội của mode 50–80\u00A0Hz giảm mạnh, và vị trí mix không còn "nói dối" bạn\u00A0nữa.',
    },
    hl: {
      en: [
        "Solid 100\u00A0kg/m³ — deepest absorption",
        "Works down to 40\u00A0Hz in\u00A0corners",
        "Floor-to-ceiling modular stacking",
        "The fix for small-room\u00A0bass",
      ],
      vi: [
        "Khối đặc 100\u00A0kg/m³ — hút sâu\u00A0nhất",
        "Hiệu quả xuống tới 40\u00A0Hz ở\u00A0góc",
        "Xếp chồng module kín sàn tới\u00A0trần",
        "Lời giải cho bass phòng\u00A0nhỏ",
      ],
    },
  },
  "ceiling-cloud-baffle": {
    dims: "120 × 40 × 5\u00A0cm",
    th: "50\u00A0mm",
    wt: "3.1\u00A0kg",
    install: {
      en: "Vertical cable hang, rows",
      vi: "Treo dọc bằng cáp, theo hàng",
    },
    mat: {
      en: "50mm PET core, fabric wrap, both faces active",
      vi: "Lõi PET 50mm, bọc nỉ, hai mặt đều làm việc",
    },
    range: { en: "250 – 4000\u00A0Hz", vi: "250 – 4000\u00A0Hz" },
    colors: {
      en: ["Charcoal", "Cream", "Navy"],
      vi: ["Xám\u00A0than", "Kem", "Xanh\u00A0navy"],
    },
    fit: {
      en: ["High\u00A0ceilings", "Halls &\u00A0lobbies", "Open\u00A0offices"],
      vi: ["Trần\u00A0cao", "Sảnh\u00A0lớn", "Văn phòng\u00A0mở"],
    },
    para1: {
      en: "Cloud Baffle hangs vertically in rows below tall ceilings — both faces absorb, doubling effective area per panel. The rhythm of repeated baffles also gives big spaces a strong architectural line.",
      vi: "Cloud Baffle treo dọc thành hàng dưới trần cao — hai mặt cùng hấp thụ, nhân đôi diện tích hiệu dụng mỗi tấm. Nhịp lặp của dãy baffle còn cho không gian lớn một đường nét kiến trúc\u00A0mạnh.",
    },
    para2: {
      en: "The go-to for halls, lobbies and open offices where reverberation is measured in seconds, not milliseconds.",
      vi: "Lựa chọn hàng đầu cho sảnh, lobby và văn phòng mở — nơi độ vang tính bằng giây chứ không phải\u00A0mili-giây.",
    },
    hl: {
      en: [
        "Double-sided absorption per\u00A0panel",
        "Rows create architectural rhythm",
        "Lightweight — safe over large\u00A0spans",
        "Cuts long reverb in big\u00A0volumes",
      ],
      vi: [
        "Hấp thụ hai mặt trên mỗi\u00A0tấm",
        "Dãy baffle tạo nhịp kiến\u00A0trúc",
        "Nhẹ — an toàn cho khẩu độ\u00A0lớn",
        "Cắt vang dài ở không gian\u00A0lớn",
      ],
    },
  },
  "tan-am-slat-wood": {
    dims: "120 × 60 × 2.1\u00A0cm",
    th: "21\u00A0mm",
    wt: "5.5\u00A0kg",
    install: {
      en: "Hanging frame / adhesive backing",
      vi: "Khung treo / dán nền",
    },
    mat: {
      en: "Veneered MDF slats on polyester acoustic felt",
      vi: "Nan gỗ MDF phủ veneer trên nền nỉ polyester tiêu âm",
    },
    range: {
      en: "500 – 4000\u00A0Hz (scattering + light absorption)",
      vi: "500 – 4000\u00A0Hz (tán xạ + hấp thụ nhẹ)",
    },
    colors: {
      en: ["Walnut", "Natural\u00A0oak", "Matte\u00A0black"],
      vi: ["Óc\u00A0chó", "Sồi tự\u00A0nhiên", "Đen\u00A0mờ"],
    },
    fit: {
      en: [
        "Listening\u00A0room",
        "Hi-Fi living\u00A0room",
        "Commercial\u00A0lobby",
      ],
      vi: [
        "Phòng nghe\u00A0nhạc",
        "Phòng khách\u00A0hi-fi",
        "Sảnh thương\u00A0mại",
      ],
    },
    para1: {
      en: "Slat Wood is a hybrid: evenly spaced wood slats over a polyester acoustic felt base. The slat faces break up and scatter mid–high reflections, while the gaps let part of the wave through to the felt for absorption. The result is NRC\u00A0~0.4 — more than a pure diffuser, yet the room keeps its atmosphere. True to our principle: never deaden the\u00A0room.",
      vi: 'Slat Wood là dòng "lai": các nan gỗ đặt cách đều trên nền nỉ polyester tiêu âm. Bề mặt nan bẻ và tán phản xạ tần trung – cao, trong khi khe hở giữa các nan cho một phần sóng âm lọt xuống lớp nỉ để hấp thụ. Kết quả là NRC\u00A0~0.4 — cao hơn diffuser thuần tuý nhưng vẫn giữ được không khí cho phòng, đúng tinh thần "không làm phòng\u00A0chết".',
    },
    para2: {
      en: "It is the favorite for listening rooms that double as living rooms, where aesthetics matter as much as acoustics. A continuous slat field reads as premium interior wall cladding — few people ever realize it is acoustic treatment.",
      vi: "Đây là giải pháp được ưa chuộng cho phòng nghe kết hợp phòng khách, nơi yêu cầu thẩm mỹ ngang ngửa yêu cầu kỹ thuật. Mảng nan gỗ liền mạch trông như một bức tường ốp nội thất cao cấp, ít ai nhận ra đó là vật liệu xử lý âm\u00A0học.",
    },
    hl: {
      en: [
        "Hybrid scattering + absorption, balanced NRC\u00A0~0.4",
        "Real wood veneer slats — reads as interior cladding",
        "Sold per\u00A0m², covers large walls seamlessly",
        "Keeps liveliness while cutting light\u00A0flutter",
      ],
      vi: [
        "Lai tán âm + tiêu âm, NRC\u00A0~0.4 cân\u00A0bằng",
        "Mặt nan veneer gỗ thật, đẹp như ốp nội\u00A0thất",
        "Tính theo m², dễ phủ mảng tường lớn liền\u00A0mạch",
        "Giữ độ sống động trong khi vẫn cắt dội nhẹ",
      ],
    },
  },
  "bass-trap-membrane-tuned": {
    dims: "120 × 60 × 15\u00A0cm",
    th: "150\u00A0mm",
    wt: "9.6\u00A0kg",
    install: {
      en: "Wall mount at pressure points",
      vi: "Treo tường tại điểm áp suất",
    },
    mat: {
      en: "Tuned membrane over damped cavity, timber shell",
      vi: "Màng cộng hưởng trên khoang tiêu âm, vỏ gỗ",
    },
    range: {
      en: "Tuned per room: 45 – 120\u00A0Hz",
      vi: "Tinh chỉnh theo phòng: 45 – 120\u00A0Hz",
    },
    colors: {
      en: ["Walnut", "Matte\u00A0black"],
      vi: ["Óc\u00A0chó", "Đen\u00A0mờ"],
    },
    fit: {
      en: [
        "Problem-frequency rooms",
        "Mastering\u00A0room",
        "Finished\u00A0rooms",
      ],
      vi: [
        "Phòng có tần số\u00A0lỗi",
        "Phòng\u00A0mastering",
        "Phòng đã hoàn\u00A0thiện",
      ],
    },
    para1: {
      en: "Membrane Tuned is surgical: we measure your room, find the exact modal frequencies that ring, and build the membrane to resonate — and absorb — precisely there. Broadband treatment fixes the average; this fixes the\u00A0peak.",
      vi: 'Membrane Tuned là giải pháp "phẫu thuật": chúng tôi đo phòng, tìm đúng tần số mode đang ringing, và chế màng cộng hưởng để hút chính xác tại đó. Xử lý dải rộng sửa mức trung bình; màng tinh chỉnh sửa đúng đỉnh\u00A0lỗi.',
    },
    para2: {
      en: "Ideal for finished rooms where a stubborn 60\u00A0Hz boom survives conventional trapping — one tuned panel where the pressure peaks often beats four broadband\u00A0ones.",
      vi: "Lý tưởng cho phòng đã hoàn thiện nhưng còn tiếng ù 60\u00A0Hz cứng đầu sau khi đặt trap thường — một tấm tinh chỉnh đặt đúng điểm áp suất thường thắng bốn tấm dải\u00A0rộng.",
    },
    hl: {
      en: [
        "Tuned to your room's measured\u00A0modes",
        "Deep absorption from a slim 150mm\u00A0panel",
        "Timber shell — furniture appearance",
        "Built after measurement, not\u00A0before",
      ],
      vi: [
        "Tinh chỉnh theo mode đo được của phòng\u00A0bạn",
        "Hút sâu từ tấm mỏng chỉ\u00A0150mm",
        "Vỏ gỗ — ngoại hình như nội\u00A0thất",
        "Sản xuất sau khi đo, không đoán\u00A0trước",
      ],
    },
  },
  "ceiling-cloud-wood-frame": {
    dims: "120 × 60 × 10\u00A0cm",
    th: "100\u00A0mm",
    wt: "8.4\u00A0kg",
    install: {
      en: "Cable suspension / turnbuckles",
      vi: "Dây cáp treo / tăng đơ",
    },
    mat: {
      en: "60\u00A0kg/m³ rockwool, solid wood frame, acoustic fabric",
      vi: "Rockwool 60\u00A0kg/m³, khung gỗ nguyên khối, bọc nỉ acoustic",
    },
    range: { en: "150 – 4000\u00A0Hz", vi: "150 – 4000\u00A0Hz" },
    colors: {
      en: ["Walnut / charcoal", "Oak / cream", "Black / black"],
      vi: ["Óc chó / xám\u00A0than", "Sồi / kem", "Đen / đen"],
    },
    fit: {
      en: [
        "Premium listening\u00A0room",
        "Studio live\u00A0room",
        "Executive\u00A0spaces",
      ],
      vi: [
        "Phòng nghe cao\u00A0cấp",
        "Phòng thu\u00A0live",
        "Không gian\u00A0executive",
      ],
    },
    para1: {
      en: "Cloud Wood Frame is the flagship cloud: a 100mm rockwool core wrapped in fabric, bordered by a solid wood frame that turns the ceiling treatment into a designed object. The deeper core plus air gap pushes absorption down to 150\u00A0Hz.",
      vi: "Cloud Wood Frame là dòng cloud cao cấp nhất: lõi rockwool 100mm bọc nỉ, viền khung gỗ nguyên khối biến tấm xử lý trần thành một món đồ thiết kế. Lõi dày hơn cộng khoang khí kéo hấp thụ xuống tận 150\u00A0Hz.",
    },
    para2: {
      en: "Chosen for rooms where the ceiling is visible in every photo — premium listening rooms, live rooms, executive meeting spaces.",
      vi: "Được chọn cho những căn phòng mà trần xuất hiện trong mọi bức ảnh — phòng nghe cao cấp, phòng thu live, phòng họp\u00A0executive.",
    },
    hl: {
      en: [
        "100mm core — absorbs down to 150\u00A0Hz",
        "Solid wood frame, mitred\u00A0corners",
        "Two-tone wood + fabric combinations",
        "Flagship finish for visible ceilings",
      ],
      vi: [
        "Lõi 100mm — hút xuống tới 150\u00A0Hz",
        "Khung gỗ nguyên khối, góc ghép\u00A0mộng",
        "Phối hai tông gỗ + nỉ tuỳ\u00A0chọn",
        "Hoàn thiện flagship cho trần lộ\u00A0diện",
      ],
    },
  },
  "tan-am-poly-binary": {
    dims: "60 × 60 × 9\u00A0cm",
    th: "90\u00A0mm",
    wt: "1.9\u00A0kg",
    install: { en: "Adhesive / magnet mount", vi: "Dán keo / nam châm" },
    mat: {
      en: "Molded lightweight polymer, paintable surface",
      vi: "Polymer nhẹ đúc khối, bề mặt sơn được",
    },
    range: {
      en: "1000 – 8000\u00A0Hz (wide-band scattering)",
      vi: "1000 – 8000\u00A0Hz (tán xạ dải rộng)",
    },
    colors: {
      en: ["White (paintable)", "Charcoal", "Gold\u00A0accent"],
      vi: ["Trắng (sơn\u00A0được)", "Xám\u00A0than", "Nhấn vàng\u00A0đồng"],
    },
    fit: {
      en: ["Content\u00A0studio", "Streaming\u00A0room", "Accent\u00A0walls"],
      vi: [
        "Studio\u00A0content",
        "Phòng\u00A0streaming",
        "Tường điểm\u00A0nhấn",
      ],
    },
    para1: {
      en: "Poly Binary scatters high-band reflections through a binary-sequence relief of polyhedral facets. At 1.9\u00A0kg it mounts anywhere — even with magnets — and the paintable surface lets it disappear into, or contrast with, any\u00A0wall.",
      vi: "Poly Binary tán xạ phản xạ dải cao qua bề mặt khối đa diện xếp theo chuỗi nhị phân. Chỉ 1.9\u00A0kg, nó gắn được mọi nơi — kể cả bằng nam châm — và bề mặt sơn được giúp nó hoà vào hoặc tương phản với bất kỳ bức tường\u00A0nào.",
    },
    para2: {
      en: "A favorite backdrop for streaming and video studios: it reads beautifully on camera while taming the harshness of bare\u00A0walls.",
      vi: "Là backdrop được ưa chuộng cho studio quay video và streaming: lên hình rất đẹp trong khi vẫn khử độ gắt của tường\u00A0trần.",
    },
    hl: {
      en: [
        "Wide-band scattering, 1–8\u00A0kHz",
        "Featherweight 1.9\u00A0kg — mounts\u00A0anywhere",
        "Paintable to match any\u00A0interior",
        "Camera-ready sculptural relief",
      ],
      vi: [
        "Tán xạ dải rộng 1–8\u00A0kHz",
        "Siêu nhẹ 1.9\u00A0kg — gắn mọi bề\u00A0mặt",
        "Sơn được theo mọi nội\u00A0thất",
        "Bề mặt điêu khắc đẹp trên\u00A0camera",
      ],
    },
  },
  "tieu-am-pet-slim-40": {
    dims: "120 × 60 × 4\u00A0cm",
    th: "40\u00A0mm",
    wt: "2.6\u00A0kg",
    install: { en: "Adhesive / velcro", vi: "Dán keo / velcro" },
    mat: {
      en: "100% PET polyester fiber, dust-free, hypoallergenic",
      vi: "Sợi polyester PET 100%, không bụi, không kích ứng",
    },
    range: { en: "400 – 4000\u00A0Hz", vi: "400 – 4000\u00A0Hz" },
    colors: {
      en: ["Charcoal", "Cream", "Navy", "Terracotta"],
      vi: ["Xám\u00A0than", "Kem", "Xanh\u00A0navy", "Đất\u00A0nung"],
    },
    fit: {
      en: [
        "Podcast\u00A0room",
        "Office / call\u00A0room",
        "Bedroom\u00A0studio",
      ],
      vi: [
        "Phòng\u00A0podcast",
        "Văn phòng / phòng\u00A0họp",
        "Studio phòng\u00A0ngủ",
      ],
    },
    para1: {
      en: "PET Slim 40 is absorption for rooms people live in: dust-free polyester fiber, no mineral wool, safe for enclosed and crowded spaces. At 40mm it stays visually slim while covering the full speech\u00A0band.",
      vi: "PET Slim 40 là tiêu âm cho không gian sinh hoạt: sợi polyester không bụi, không bông khoáng, an toàn cho phòng kín đông người. Chỉ dày 40mm, mỏng gọn về thị giác nhưng phủ trọn dải giọng\u00A0nói.",
    },
    para2: {
      en: "Cut it on site with a utility knife — edges stay clean. The practical choice for podcast rooms, call rooms and bedroom studios.",
      vi: "Cắt được tại chỗ bằng dao rọc giấy — cạnh vẫn sắc gọn. Lựa chọn thực dụng cho phòng podcast, phòng họp online và studio phòng\u00A0ngủ.",
    },
    hl: {
      en: [
        "Dust-free PET — safe for living\u00A0spaces",
        "Slim 40mm, full speech-band coverage",
        "Cuts cleanly on site, DIY-friendly",
        "Four colors for visible\u00A0walls",
      ],
      vi: [
        "PET không bụi — an toàn không gian\u00A0sống",
        "Mỏng 40mm, phủ trọn dải giọng\u00A0nói",
        "Cắt gọn tại chỗ, thân thiện\u00A0DIY",
        "Bốn màu cho tường lộ\u00A0diện",
      ],
    },
  },
};

/** Detail-page product names (design file's `namesEn` / `namesVi` maps).
 *  Several differ from the catalogue names — do not merge with
 *  PRODUCT_NAMES in lib/copy/products.ts. */
export const DETAIL_NAMES: Record<Lang, Record<string, string>> = {
  en: {
    "bass-trap-corner-tri": "Corner Tri — Triangular corner\u00A0trap",
    "ceiling-cloud-rect-120":
      "Cloud Rect 120 — Rectangular ceiling\u00A0cloud",
    "tan-am-qrd-skyline": "Skyline QRD — 2D\u00A0diffuser",
    "bass-trap-column-round": "Column Round — Cylindrical bass\u00A0trap",
    "ceiling-cloud-hexa": "Cloud Hexa — Hexagonal ceiling\u00A0cloud",
    "tan-am-qrd-well-7": "QRD Well 7 — 1D\u00A0well\u00A0diffuser",
    "tieu-am-panel-fabric-60":
      "Acoustic Panel 60 — Fabric-wrapped absorber",
    "bass-trap-panel-superchunk": "Superchunk — Solid corner\u00A0trap",
    "ceiling-cloud-baffle": "Cloud Baffle — Vertical ceiling\u00A0baffle",
    "tan-am-slat-wood":
      "Slat Wood — Slatted wood\u00A0diffuser with\u00A0absorption",
    "bass-trap-membrane-tuned": "Membrane Tuned — Tuned membrane\u00A0trap",
    "ceiling-cloud-wood-frame":
      "Cloud Wood Frame — Wood-framed ceiling\u00A0cloud",
    "tan-am-poly-binary": "Poly Binary — Polyhedral diffuser",
    "tieu-am-pet-slim-40": "PET Slim 40 — Polyester absorber",
  },
  vi: {
    "bass-trap-corner-tri": "Corner Tri — Trap góc tam\u00A0giác",
    "ceiling-cloud-rect-120":
      "Cloud Rect 120 — Ceiling Cloud chữ\u00A0nhật",
    "tan-am-qrd-skyline": "Skyline QRD — Tán\u00A0âm\u00A02D",
    "bass-trap-column-round": "Column Round — Trap trụ\u00A0tròn",
    "ceiling-cloud-hexa": "Cloud Hexa — Ceiling Cloud lục\u00A0giác",
    "tan-am-qrd-well-7": "QRD Well 7 — Tán\u00A0âm 1D dãy\u00A0giếng",
    "tieu-am-panel-fabric-60": "Acoustic Panel 60 — Bọc nỉ khung\u00A0gỗ",
    "bass-trap-panel-superchunk": "Superchunk — Trap góc\u00A0đặc",
    "ceiling-cloud-baffle": "Cloud Baffle — Baffle treo trần\u00A0dọc",
    "tan-am-slat-wood":
      "Slat Wood — Tán\u00A0âm nan\u00A0gỗ tích\u00A0hợp tiêu\u00A0âm",
    "bass-trap-membrane-tuned":
      "Membrane Tuned — Trap màng cộng\u00A0hưởng",
    "ceiling-cloud-wood-frame":
      "Cloud Wood Frame — Ceiling Cloud viền\u00A0gỗ",
    "tan-am-poly-binary": "Poly Binary — Tán âm khối poly đa\u00A0diện",
    "tieu-am-pet-slim-40": "PET Slim 40 — Tiêu\u00A0âm polyester",
  },
};

type DetailDict = {
  imgNote: string;
  price: string;
  priceValue: string;
  finish: string;
  askZalo: string;
  call: string;
  specs: string;
  fitFor: string;
  aboutEyebrow: string;
  aboutTitle: string;
  relatedTitle: string;
  relatedAll: string;
  details: string;
  specKeys: string[];
  fire: string;
};

export const DETAIL_COPY: Record<Lang, DetailDict> = {
  en: {
    imgNote: "* Illustration render — real product photos coming\u00A0soon",
    price: "Price",
    priceValue: "On\u00A0request",
    finish: "Color / finish",
    askZalo: "Ask price on\u00A0Zalo",
    call: "Call 0914\u00A0593\u00A0334",
    specs: "Specifications",
    fitFor: "Best suited\u00A0for",
    aboutEyebrow: "In\u00A0depth",
    aboutTitle: "How it works in your\u00A0room.",
    relatedTitle: "From the same\u00A0family",
    relatedAll: "View category\u00A0→",
    details: "Details\u00A0→",
    specKeys: [
      "Dimensions",
      "Thickness",
      "Materials",
      "NRC",
      "Treated\u00A0range",
      "Weight",
      "Fire\u00A0rating",
      "Installation",
    ],
    fire: "B1 flame-retardant",
  },
  vi: {
    imgNote: "* Ảnh minh hoạ — ảnh sản phẩm thực tế cập nhật\u00A0sau",
    price: "Giá",
    priceValue: "Liên hệ báo\u00A0giá",
    finish: "Màu / hoàn\u00A0thiện",
    askZalo: "Hỏi giá qua\u00A0Zalo",
    call: "Gọi 0914\u00A0593\u00A0334",
    specs: "Thông số kỹ\u00A0thuật",
    fitFor: "Phù hợp\u00A0cho",
    aboutEyebrow: "Chuyên\u00A0sâu",
    aboutTitle: "Nó làm việc thế nào trong phòng\u00A0bạn.",
    relatedTitle: "Cùng nhóm sản\u00A0phẩm",
    relatedAll: "Xem cả nhóm\u00A0→",
    details: "Chi\u00A0tiết\u00A0→",
    specKeys: [
      "Kích\u00A0thước",
      "Độ\u00A0dày",
      "Vật\u00A0liệu",
      "NRC",
      "Dải tần xử\u00A0lý",
      "Trọng\u00A0lượng",
      "Chống\u00A0cháy",
      "Lắp\u00A0đặt",
    ],
    fire: "Chống cháy lan\u00A0B1",
  },
};

/** Prefilled Zalo message (design file's `zaloText`). NBSP insertions in the
 *  display name are stripped so the URL carries the plain product name. */
export function zaloMessage(lang: Lang, name: string): string {
  const plain = name.replace(/\u00A0/g, " ");
  return lang === "vi"
    ? 'Chào De-treat, em quan tâm sản phẩm "' +
        plain +
        '". Tư vấn giúp em với ạ.'
    : 'Hello De-treat, I am interested in "' + plain + '". Please advise.';
}
