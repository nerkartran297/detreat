import type { Lang } from "@/lib/i18n";

/** Contact page copy — copied verbatim from the dictionaries embedded in
 *  design_handoff_detreat_site/"Lien He.dc.html". Do not edit strings. */

export interface ContactFaq {
  q: string;
  a: string;
}

export interface ContactCopy {
  eyebrow: string;
  title: string;
  titleAccent: string;
  responseLabel: string;
  responseValue: string;
  formLabel: string;
  formTitle: string;
  formSub: string;
  required: string;
  fName: string;
  fNamePh: string;
  fPhone: string;
  fRoom: string;
  fMsg: string;
  fMsgPh: string;
  fSubmit: string;
  fSent: string;
  directLabel: string;
  fastest: string;
  callDirect: string;
  areaLabel: string;
  area1: string;
  onlineLabel: string;
  area2: string;
  faqTitle: string;
  faqSub: string;
  roomTypes: string[];
  faqs: ContactFaq[];
}

export const CONTACT_COPY: Record<Lang, ContactCopy> = {
  en: {
    eyebrow: "Contact",
    title: "It starts\u00A0with",
    titleAccent: "your\u00A0room.",
    responseLabel: "Response\u00A0time",
    responseValue: "Same\u00A0day",
    formLabel: "Consultation request",
    formTitle: "Tell us about your\u00A0space",
    formSub:
      "Room dimensions, purpose, and what bothers you about the sound. Attach photos later via Zalo — we quote within the\u00A0day.",
    required: "Required",
    fName: "Full name",
    fNamePh: "Your name",
    fPhone: "Phone / Zalo",
    fRoom: "Room type",
    fMsg: "Message",
    fMsgPh: "Size, purpose, acoustic issues…",
    fSubmit: "Send request",
    fSent: "Opening Zalo — message copied to\u00A0clipboard.",
    directLabel: "Direct channels",
    fastest: "Fastest",
    callDirect: "Phone",
    areaLabel: "On-site surveys",
    area1: "Ho Chi Minh City & surrounding provinces",
    onlineLabel: "Online consultation",
    area2: "Nationwide, via photos & room\u00A0dimensions",
    faqTitle: "Common questions, answered.",
    faqSub:
      "Everything most clients ask before their first survey. Anything else — just message\u00A0us.",
    roomTypes: [
      "Home studio",
      "Podcast",
      "Hi-Fi listening room",
      "DJ / Club",
      "Commercial space",
      "Other",
    ],
    faqs: [
      {
        q: "How much does treating a room\u00A0cost?",
        a: "It depends on size and goals. A small home studio typically starts from a few million VND for a basic package; professional listening and recording rooms run higher. Send photos via Zalo for a fast\u00A0quote.",
      },
      {
        q: "Do you do on-site surveys?",
        a: "Yes. For projects in Ho Chi Minh City we survey and measure in person. Outside the area, we consult online using photos and room dimensions.",
      },
      {
        q: "How long does a room\u00A0take?",
        a: "Most installs finish in 1–3\u00A0days depending on scope. In-stock products ship fast; made-to-measure pieces need extra production time.",
      },
      {
        q: "Can I install it\u00A0myself?",
        a: "Yes. Many absorbers and bass traps mount with adhesive or simple hanging frames. We provide measured placement guidance so you can\u00A0DIY.",
      },
    ],
  },
  vi: {
    eyebrow: "Liên\u00A0hệ",
    title: "Bắt\u00A0đầu\u00A0từ",
    titleAccent: "căn\u00A0phòng của\u00A0bạn.",
    responseLabel: "Thời\u00A0gian phản\u00A0hồi",
    responseValue: "Trong\u00A0ngày",
    formLabel: "Yêu\u00A0cầu tư\u00A0vấn",
    formTitle: "Kể chúng tôi nghe về căn\u00A0phòng",
    formSub:
      "Kích thước, mục đích sử dụng và vấn đề âm thanh đang gặp. Ảnh phòng gửi sau qua Zalo — báo giá trong\u00A0ngày.",
    required: "Bắt\u00A0buộc",
    fName: "Họ\u00A0tên",
    fNamePh: "Tên của bạn",
    fPhone: "SĐT / Zalo",
    fRoom: "Loại\u00A0phòng",
    fMsg: "Mô\u00A0tả nhu\u00A0cầu",
    fMsgPh: "Diện tích, mục đích, vấn đề âm thanh…",
    fSubmit: "Gửi yêu\u00A0cầu",
    fSent: "Đang mở Zalo — nội dung đã copy\u00A0sẵn.",
    directLabel: "Kênh trực\u00A0tiếp",
    fastest: "Nhanh\u00A0nhất",
    callDirect: "Điện\u00A0thoại",
    areaLabel: "Khảo\u00A0sát tận\u00A0nơi",
    area1: "TP. Hồ Chí Minh & các tỉnh lân\u00A0cận",
    onlineLabel: "Tư\u00A0vấn online",
    area2: "Toàn quốc, qua ảnh & thông\u00A0số\u00A0phòng",
    faqTitle: "Những câu\u00A0hỏi thường\u00A0gặp.",
    faqSub:
      "Những điều khách hàng hay hỏi trước buổi khảo sát đầu tiên. Còn gì khác — cứ nhắn chúng\u00A0tôi.",
    roomTypes: [
      "Home studio",
      "Podcast",
      "Phòng nghe Hi-Fi",
      "DJ / Club",
      "Không gian thương mại",
      "Khác",
    ],
    faqs: [
      {
        q: "Chi\u00A0phí xử\u00A0lý một phòng khoảng bao\u00A0nhiêu?",
        a: "Tuỳ diện tích và mục tiêu. Home studio nhỏ thường từ vài triệu cho gói cơ bản; phòng nghe / phòng thu chuyên nghiệp cao hơn. Gửi ảnh phòng qua Zalo để nhận báo\u00A0giá\u00A0nhanh.",
      },
      {
        q: "Có khảo\u00A0sát tận\u00A0nơi\u00A0không?",
        a: "Có. Với dự án trong khu vực TP.HCM, chúng tôi khảo sát và đo đạc trực tiếp. Ngoài khu vực có thể tư vấn online qua ảnh và thông\u00A0số\u00A0phòng.",
      },
      {
        q: "Bao\u00A0lâu thì xong một\u00A0phòng?",
        a: "Phần lớn dự án thi công trong 1–3\u00A0ngày tuỳ khối lượng. Sản phẩm có sẵn giao nhanh; hàng đặt theo kích thước riêng cần thêm thời gian sản\u00A0xuất.",
      },
      {
        q: "Tôi tự lắp được\u00A0không?",
        a: "Được. Nhiều sản phẩm tiêu âm / bass\u00A0trap lắp bằng keo hoặc khung treo đơn giản. Chúng tôi hướng dẫn vị trí đặt theo phép đo để bạn tự thi\u00A0công.",
      },
    ],
  },
};
