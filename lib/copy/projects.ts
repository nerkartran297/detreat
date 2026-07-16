import type { Lang } from "@/lib/i18n";

/** Projects page copy — source of truth: design_handoff_detreat_site/"Du An.dc.html" */
export const PROJECTS_COPY = {
  en: {
    title: "Spaces we\u00A0have",
    titleAccent: "treated.",
    sub: "A selection of finished rooms — home studios, podcast rooms, Hi‑Fi listening rooms, DJ\u00A0booths and commercial studios. Click any photo to\u00A0enlarge.",
    spaces: "Photos",
    ctaTitle: "Want your room\u00A0to",
    ctaTitleAccent: "sound like\u00A0this?",
    ctaBtn: "Get a free consultation",
  },
  vi: {
    title: "Những không\u00A0gian",
    titleAccent: "đã hoàn\u00A0thiện.",
    sub: "Một số không gian De-treat đã thi công — home studio, podcast, phòng nghe Hi‑Fi, DJ\u00A0booth và phòng thu thương mại. Bấm vào ảnh để phóng\u00A0to.",
    spaces: "Hình\u00A0ảnh",
    ctaTitle: "Muốn phòng của\u00A0bạn",
    ctaTitleAccent: "nghe như thế\u00A0này?",
    ctaBtn: "Nhận tư\u00A0vấn miễn\u00A0phí",
  },
} satisfies Record<Lang, Record<string, string>>;

/** The 34 project photo ids on detreat.com.vn — order matters (labels 01…34). */
const GALLERY_IDS = [
  "z7964036168225_c5ad2ffe028a020a5fb6e630c0b048a6.CBPjECU7_Z1vlVjG",
  "z7964036176104_01da6653a0431251219a5f9511f3d2fb.OvWrYVMz_ZTII9k",
  "z7964036186772_143171647ae09ebf77df688a7aab0714.Bz-Rd8wU_ZUuwJQ",
  "z7964036196611_b0c300ed9cc61f2b01f49111051b2bb8.CehFMkiv_1nVV1T",
  "z7964036198220_5d7c5b5b28d4f61dd3e51e3bcd02adea.C-xwwcyt_Z1hDV1o",
  "z7964036211939_661d87f99ab2073a8075938ea23e308b.zGpcylk__Z6VfpB",
  "z7964036213851_a28c1172efa0c1ead44bcb03c764d801.DjeqL6uf_Z1151J5",
  "z7964036224562_9823f7c067f0eeebd125242d4e4ecac5.DNIaTTza_ZNqd5G",
  "z7964036234740_73787808e5a305bf766591ea5c4870fc.CLKC7oGY_XnMxc",
  "z7964036240475_a624911730f07c58d8afad3655e2c0db.CuAS9pKT_1VKVB3",
  "z7964036244526_28221d4aea0a86d540c0fa649af38f35.VwXY0bMw_Z2cxEeY",
  "z7964036253110_4167697dc717383b453e18db3a134e54._emoMEMd_1fqpjs",
  "z7964036253436_2943a6a7c0e13c40d5db96dcb0c1497b.DxCk5kNc_ZjuPYm",
  "z7964036267947_8a83e244a1e6bbf544d8189bee4fb272.CEZLHo0T_ZtR2oL",
  "z7964036275246_f57b22e1d64f93964323d6dc189824f8.Cul3jmVs_Z1Kayd2",
  "z7964036279205_66a6210c123c7e8704c9eca8fadeb2a9.C-HTd9I4_267qgV",
  "z7964036289653_734b26332a8e1d609ef7a183efc47fe8.C4fL1TOb_Z1LF0ib",
  "z7964036289975_b205649015a9bb8ebd6dff567ce10747.BYSgxeia_d3Esv",
  "z7964036300335_73a1abf7c81f8f31aee99435f56e8cca.BRH9Addx_ZhKn7s",
  "z7964036307264_ae4a977cb09ebd415e35b85c9db27dc0.d6zyAefP_FrEhy",
  "z7964036312607_997330d643a237824f17910b9e1de5df.omC537BU_2qdtpA",
  "z7964036323178_b39a1c3db5fce0837bbc627c779736e6.DY5ER3Qv_ZAvTlb",
  "z7964036329583_16b6b27e93e46443cc53230dfe81799d.BXw3xdA1_ZnNoTF",
  "z7964036338294_44b8ad56786cb22f7b04904055cc288d.DwPbNWsT_Z5O5TS",
  "z7964036341878_2d4f99100d02496e41b6bdf47aa07648.G8SUvnEE_ZSdzMh",
  "z7964036356089_980ec6506b4e6fd7b28df353ea8acba9.D0F3wOW2_1xCcSl",
  "z7964036364250_2c7393032565eeebe099a94518dc79ee.BDjRONEH_2816m9",
  "z7964036370696_c965758ed65c27be33b8acf68f951f59.BFOvMvOI_1YLGnI",
  "z7964036491569_9bc7c739b6c801f6176d5a2cb5fe5efd.Boa6vhxA_2p0Myz",
  "z7964036505198_5d525100f035627aade5cf17b943d85b.pcjshh3u_18Juem",
  "z7964036506394_2e25f9feab10fdf42f79a2f49e0f08f4.Br37Y6Zs_Z1g6gQm",
  "z7964036512250_9a4462998f96d3a09a9bf13f8a91d347.C8ncPg38_Z1knRis",
  "z7964036525711_679ed4ab3a745be0d0b4ced58bb3ef78.DfJkur59_Z1oC8xl",
  "z7964036526613_20f948d74d04c276a0efc3fd1b93de52.CHn867JS_2bncpD",
];

export const GALLERY_SRCS = GALLERY_IDS.map(
  (id) => `https://detreat.com.vn/_astro/${id}.webp`,
);
