export const eventFacts = {
  name: "2027 CGI BAHASA Conference",
  theme: {
    id: "Kebangkitan Baru, Api yang Sama",
    en: "A New Awakening, the Same Fire",
  },
  // Hero headline split at the comma so it breaks onto its own line
  // instead of wrapping wherever the viewport width happens to cut it.
  themeLines: {
    id: ["Kebangkitan Baru,", "Api yang Sama"],
    en: ["A New Awakening,", "the Same Fire"],
  },
  dates: {
    id: "11–14 Oktober 2027",
    en: "11–14 October 2027",
  },
  venue: {
    id: "Osanri Prayer Mountain, Korea",
    en: "Osanri Prayer Mountain, Korea",
  },
  host: "CGI",
  audience: {
    id: "Untuk CGI, ALS, dan jemaat Indonesia (dalam & luar negeri)",
    en: "For CGI, ALS, and Indonesian congregations (domestic & overseas)",
  },
  purpose: {
    id: "Konferensi ini bertujuan untuk penginjilan dan kebangunan rohani di Indonesia, dengan berbagi spiritualitas Injil Sepenuh (Full Gospel), serta menjadi wadah pertukaran bagi perkembangan kekristenan di Korea dan Indonesia.",
    en: "This conference aims to advance evangelism and spiritual revival in Indonesia through the shared spirituality of the Full Gospel movement, and to serve as an exchange for the growth of Christianity in Korea and Indonesia.",
  },
  fee: {
    amount: "USD $100",
  },
  contactEmail: "info@cgikorea.kr",
  registrationDeadline: {
    id: "11 September 2027 (satu bulan sebelum acara)",
    en: "11 September 2027 (one month before the event)",
  },
  earlyBird: {
    id: "Pendaftaran awal (Januari–Maret setiap tahun) mendapatkan potongan harga; besaran diskon akan diumumkan kemudian.",
    en: "Early registration (January–March each year) receives a discount; the discount amount will be announced later.",
  },
  refundPolicy: {
    id: "Pembatalan hingga dua bulan sebelum acara (11 Agustus 2027) mendapat pengembalian dana 100%. Pembatalan setelah tanggal tersebut tidak dapat dikembalikan.",
    en: "Cancellations made up to two months before the event (11 August 2027) receive a 100% refund. Cancellations after that date are non-refundable.",
  },
  transportInfo: {
    id: "Transportasi akan disediakan bagi peserta yang telah mendaftar (pra-pendaftaran) sebelumnya.",
    en: "Transportation will be provided for participants who have pre-registered in advance.",
  },
  interpretationInfo: {
    id: "Ya, penerjemahan/interpretasi bahasa Indonesia tersedia selama acara.",
    en: "Yes, Indonesian interpretation is provided throughout the event.",
  },
} as const;

export const programHighlights = [
  { id: "Doa Subuh", en: "Dawn Prayer" },
  { id: "Seminar 1–6", en: "Seminar 1–6" },
  {
    id: "Kebaktian Kebangunan Rohani (KKR) I & II",
    en: "Holy Spirit Revival Service (KKR) I & II",
  },
  { id: "Waktu Kesaksian & Berbagi", en: "Testimony & Sharing Time" },
  { id: "Makan Siang VIP", en: "VIP Luncheon" },
  {
    id: "Program Budaya & Pembinaan (O'Sarang, Mother's Dream, Sekolah Alkitab, dll.)",
    en: "Cultural & Discipleship Programs (O'Sarang, Mother's Dream, Bible School, etc.)",
  },
] as const;

export const feeInclusions = [
  {
    id: "Akomodasi asrama di Osanri Prayer Mountain (3 malam 4 hari)",
    en: "Dormitory accommodation at Osanri Prayer Mountain (3 nights, 4 days)",
  },
  {
    id: "Konsumsi (sarapan, makan siang, makan malam — termasuk menu kebutuhan khusus)",
    en: "Meals (breakfast, lunch, dinner — including special dietary menus)",
  },
  {
    id: "Suvenir (buku catatan, kaos, alat tulis, dll.)",
    en: "Souvenirs (notebook, T-shirt, stationery, etc.)",
  },
  {
    id: "Biaya mengikuti seminar dan program acara",
    en: "Seminar and program participation fees",
  },
  {
    id: "Transportasi lokal (mis. antar-jemput ke/dari gereja mitra)",
    en: "Local transportation (e.g., shuttle to/from partner churches)",
  },
] as const;

export const heroImage = {
  src: "/images/hero/awakening-crowd.png",
  alt: {
    id: "Jemaat mengangkat tangan dalam penyembahan, diterangi cahaya keemasan",
    en: "A congregation with hands raised in worship, lit by golden light",
  },
} as const;

export const venuePhotos = [
  {
    src: "/images/venue/osanri-prayer-cave.jpg",
    alt: {
      id: "Bagian dalam salah satu bilik Gua Doa (기도굴) untuk doa pribadi di Osanri Prayer Mountain",
      en: "Inside one of the individual Prayer Cave (기도굴) rooms used for personal prayer at Osanri Prayer Mountain",
    },
  },
  {
    src: "/images/venue/osanri-02.jpg",
    alt: {
      id: "Jemaat beribadah bersama di Osanri Prayer Mountain",
      en: "Congregation worshiping together at Osanri Prayer Mountain",
    },
  },
  {
    src: "/images/venue/osanri-03.jpg",
    alt: {
      id: "Pemandangan udara kompleks Osanri Prayer Mountain di musim gugur",
      en: "Aerial view of the Osanri Prayer Mountain campus in autumn",
    },
  },
] as const;
