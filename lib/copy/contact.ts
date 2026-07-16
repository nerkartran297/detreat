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
    title: "It starts with",
    titleAccent: "your room.",
    responseLabel: "Response time",
    responseValue: "Same day",
    formLabel: "Consultation request",
    formTitle: "Tell us about your space",
    formSub:
      "Room dimensions, purpose, and what bothers you about the sound. Attach photos later via Zalo — we quote within the day.",
    required: "Required",
    fName: "Full name",
    fNamePh: "Your name",
    fPhone: "Phone / Zalo",
    fRoom: "Room type",
    fMsg: "Message",
    fMsgPh: "Size, purpose, acoustic issues…",
    fSubmit: "Send request",
    fSent: "Opening Zalo — message copied to clipboard.",
    directLabel: "Direct channels",
    fastest: "Fastest",
    callDirect: "Phone",
    areaLabel: "On-site surveys",
    area1: "Ho Chi Minh City & surrounding provinces",
    onlineLabel: "Online consultation",
    area2: "Nationwide, via photos & room dimensions",
    faqTitle: "Common questions, answered.",
    faqSub:
      "Everything most clients ask before their first survey. Anything else — just message us.",
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
        q: "How much does treating a room cost?",
        a: "It depends on size and goals. A small home studio typically starts from a few million VND for a basic package; professional listening and recording rooms run higher. Send photos via Zalo for a fast quote.",
      },
      {
        q: "Do you do on-site surveys?",
        a: "Yes. For projects in Ho Chi Minh City we survey and measure in person. Outside the area, we consult online using photos and room dimensions.",
      },
      {
        q: "How long does a room take?",
        a: "Most installs finish in 1–3 days depending on scope. In-stock products ship fast; made-to-measure pieces need extra production time.",
      },
      {
        q: "Can I install it myself?",
        a: "Yes. Many absorbers and bass traps mount with adhesive or simple hanging frames. We provide measured placement guidance so you can DIY.",
      },
    ],
  },
  vi: {
    eyebrow: "Liên hệ",
    title: "Bắt đầu từ",
    titleAccent: "căn phòng của bạn.",
    responseLabel: "Thời gian phản hồi",
    responseValue: "Trong ngày",
    formLabel: "Yêu cầu tư vấn",
    formTitle: "Kể chúng tôi nghe về căn phòng",
    formSub:
      "Kích thước, mục đích sử dụng và vấn đề âm thanh đang gặp. Ảnh phòng gửi sau qua Zalo — báo giá trong ngày.",
    required: "Bắt buộc",
    fName: "Họ tên",
    fNamePh: "Tên của bạn",
    fPhone: "SĐT / Zalo",
    fRoom: "Loại phòng",
    fMsg: "Mô tả nhu cầu",
    fMsgPh: "Diện tích, mục đích, vấn đề âm thanh…",
    fSubmit: "Gửi yêu cầu",
    fSent: "Đang mở Zalo — nội dung đã copy sẵn.",
    directLabel: "Kênh trực tiếp",
    fastest: "Nhanh nhất",
    callDirect: "Điện thoại",
    areaLabel: "Khảo sát tận nơi",
    area1: "TP. Hồ Chí Minh & các tỉnh lân cận",
    onlineLabel: "Tư vấn online",
    area2: "Toàn quốc, qua ảnh & thông số phòng",
    faqTitle: "Những câu hỏi thường gặp.",
    faqSub:
      "Những điều khách hàng hay hỏi trước buổi khảo sát đầu tiên. Còn gì khác — cứ nhắn chúng tôi.",
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
        q: "Chi phí xử lý một phòng khoảng bao nhiêu?",
        a: "Tuỳ diện tích và mục tiêu. Home studio nhỏ thường từ vài triệu cho gói cơ bản; phòng nghe / phòng thu chuyên nghiệp cao hơn. Gửi ảnh phòng qua Zalo để nhận báo giá nhanh.",
      },
      {
        q: "Có khảo sát tận nơi không?",
        a: "Có. Với dự án trong khu vực TP.HCM, chúng tôi khảo sát và đo đạc trực tiếp. Ngoài khu vực có thể tư vấn online qua ảnh và thông số phòng.",
      },
      {
        q: "Bao lâu thì xong một phòng?",
        a: "Phần lớn dự án thi công trong 1–3 ngày tuỳ khối lượng. Sản phẩm có sẵn giao nhanh; hàng đặt theo kích thước riêng cần thêm thời gian sản xuất.",
      },
      {
        q: "Tôi tự lắp được không?",
        a: "Được. Nhiều sản phẩm tiêu âm / bass trap lắp bằng keo hoặc khung treo đơn giản. Chúng tôi hướng dẫn vị trí đặt theo phép đo để bạn tự thi công.",
      },
    ],
  },
};
