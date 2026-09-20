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
    amountUsd: 100,
    // Price is all-inclusive: no separate tax or PG transaction surcharge
    // is passed on to participants.
    allInclusiveNote: {
      id: "Harga sudah termasuk pajak dan biaya transaksi; tidak ada biaya tambahan yang dibebankan kepada peserta.",
      en: "The price already includes tax and transaction fees; no additional charges are passed on to participants.",
    },
  },
  // Group registrations pay the same per-person price as individuals — no
  // group discount — but are tracked together under a group/church name so
  // they can be managed as one block on the participant list.
  groupRegistration: {
    minSize: 10,
    note: {
      id: "Pendaftaran kelompok (minimal 10 orang) dikenakan harga per orang yang sama dengan pendaftaran individu, tanpa diskon kelompok.",
      en: "Group registration (minimum 10 people) is charged the same per-person price as individual registration — no group discount.",
    },
  },
  contactEmail: "cgibahasa@gmail.com",
  registrationDeadline: {
    id: "11 September 2027 (satu bulan sebelum acara)",
    en: "11 September 2027 (one month before the event)",
  },
  // Registration/payment opens on this date. Before it, `/registration`
  // shows a preview of the flow instead of the interactive wizard.
  saleStartDate: "2027-01-01",
  saleStartLabel: {
    id: "1 Januari 2027",
    en: "1 January 2027",
  },
  paymentProviderNote: {
    id: "Pembayaran diproses melalui PortOne sebagai penyedia layanan pembayaran (PG). Untuk metode pembayaran lokal Indonesia (GoPay, OVO, dan lainnya), PortOne terhubung dengan Midtrans sebagai penyedia pemrosesan pembayaran lokal.",
    en: "Payments are processed through PortOne as the payment gateway (PG). For Indonesian local payment methods (GoPay, OVO, and others), PortOne connects to Midtrans as the local payment processor.",
  },
  currencyNote: {
    id: "Harga ditampilkan dan ditagihkan dalam USD $100. Jika Anda membayar dengan metode pembayaran lokal Indonesia, konversi ke Rupiah dihitung otomatis oleh penyedia pembayaran (PG) sesuai kurs pada saat transaksi; situs ini tidak menampilkan perkiraan nilai Rupiah secara terpisah.",
    en: "The price is shown and charged in USD $100. If you pay with an Indonesian local payment method, conversion to Rupiah is calculated automatically by the payment gateway (PG) at the exchange rate in effect at the time of the transaction; this site does not separately display an estimated Rupiah amount.",
  },
  postPaymentInfo: {
    id: "Setelah pembayaran berhasil, konfirmasi pendaftaran (beserta nomor pesanan) akan dikirimkan ke email Anda segera. Pada hari acara, masuk ke lokasi dikonfirmasi dengan pencocokan nama pada daftar peserta di meja pendaftaran — tidak ada tiket fisik atau kode QR yang diterbitkan. Untuk pendaftaran kelompok, seluruh nama peserta yang didaftarkan akan dikelompokkan bersama di bawah nama kelompok/gereja pada daftar peserta.",
    en: "After a successful payment, a registration confirmation (with your order number) will be emailed to you right away. On the day of the event, entry is confirmed by matching your name against the participant list at the registration desk — no physical ticket or QR code is issued. For group registrations, all registered participant names are grouped together under the group/church name on the participant list.",
  },
  refundPolicy: {
    id: "Pembatalan hingga satu bulan sebelum acara (11 September 2027) mendapat pengembalian dana 100%. Pembatalan setelah tanggal tersebut tidak dapat dikembalikan.",
    en: "Cancellations made up to one month before the event (11 September 2027) receive a 100% refund. Cancellations after that date are non-refundable.",
  },
  refundProcessingTime: {
    id: "Paling lambat 14 hari kerja setelah pengajuan disetujui",
    en: "Within 14 business days after the request is approved",
  },
  refundMethod: {
    id: "Dikembalikan ke metode pembayaran semula (pembatalan otorisasi kartu atau pembatalan pembayaran lokal)",
    en: "Refunded to the original payment method (card authorization reversal or local payment method cancellation)",
  },
  eventPostponementPolicy: {
    id: "Jika acara ditunda, pendaftaran otomatis dipindahkan ke jadwal baru. Peserta yang ingin pengembalian dana dapat mengajukan melalui prosedur pengembalian dana yang sama.",
    en: "If the event is postponed, registrations are automatically carried over to the new date. Participants who prefer a refund may apply through the same refund procedure.",
  },
  duplicatePaymentPolicy: {
    id: "Pembayaran ganda diproses dengan kebijakan yang sama seperti pengembalian dana (paling lambat 14 hari kerja, dikembalikan ke metode pembayaran semula).",
    en: "Duplicate payments are handled under the same policy as refunds (within 14 business days, refunded to the original payment method).",
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

// PG(PortOne) 심사 대비 확정 사업자(단체) 정보 — 국세청 고유번호증(2022-11-02, 마포세무서) 기준.
// 사업자등록증이 아닌 비영리법인 고유번호증이므로 결제대행사 신청 시 "비영리단체(고유번호)" 유형으로 등록한다.
export const organizer = {
  legalName: {
    ko: "국제교회성장연구원(CGI)",
    en: "International Church Growth Institute (CGI)",
  },
  representative: {
    ko: "이영훈",
    en: "Lee Young Hoon",
  },
  registrationNumber: "609-82-84201",
  address: {
    ko: "서울특별시 마포구 서강로 19, 3층(신정동)",
    en: "3F, 19 Seogang-ro, Mapo-gu, Seoul, Republic of Korea",
  },
  email: "cgibahasa@gmail.com",
  dataProtectionOfficer: "Joseph Lee",
  dataRetentionPeriod: {
    id: "1 tahun setelah acara berakhir",
    en: "1 year after the event ends",
  },
} as const;

// Sourced from cgikorea.kr (fetched 2026-09-21) — see
// content-source/01-official-facts/cgi-and-welcome-message.md for the
// research notes and provenance.
export const cgiIntro = {
  id: "Church Growth International (CGI) didirikan pada tahun 1976 di bawah kepemimpinan visioner (Alm.) Dr. David Yonggi Cho, dengan komitmen yang mendalam terhadap pelayanan Roh Kudus, pertumbuhan gereja yang sehat, dan misi dunia. Selama hampir 50 tahun, CGI telah setia melayani gereja-gereja di berbagai negara dengan menjaga esensi Injil, memperlengkapi para pemimpin, dan memajukan misi Allah di antara bangsa-bangsa — melalui konferensi internasional tahunan, pengarsipan materi konferensi, dan penerbitan majalah pertumbuhan gereja. CGI saat ini dipimpin oleh Ketua Dr. Lee Young Hoon, Gembala Senior Yoido Full Gospel Church.",
  en: "Church Growth International (CGI) was founded in 1976 under the visionary leadership of the late Dr. David Yonggi Cho, with a deep commitment to the ministry of the Holy Spirit, healthy church growth, and world missions. For nearly 50 years, CGI has faithfully served churches around the world by preserving the essence of the Gospel, empowering leaders, and advancing God's mission among the nations — through an annual international conference, archiving past conference materials, and publishing a church growth magazine. CGI is currently led by Chairman Dr. Lee Young Hoon, Senior Pastor of Yoido Full Gospel Church.",
} as const;

// DRAFT — written to expand on eventFacts.purpose for the About page's
// welcome-message section. This has NOT been reviewed or approved by
// Rev. Lee Young Hoon or CGI leadership; it must be signed off before it
// is presented publicly as his own words. Swap in the real text once
// provided. See content-source/01-official-facts/cgi-and-welcome-message.md.
export const welcomeMessage = {
  id: "Salam sejahtera dalam kasih Tuhan Yesus Kristus.\n\nDengan sukacita besar, saya mengundang Saudara-saudari sekalian untuk turut ambil bagian dalam 2027 CGI BAHASA Conference di Osanri Prayer Mountain, Korea. Sejak didirikan pada tahun 1976, Church Growth International (CGI) telah setia melayani gereja-gereja di banyak negara dengan menjaga esensi Injil, memperlengkapi para pemimpin, dan memajukan misi Allah di antara bangsa-bangsa melalui kuasa Roh Kudus.\n\nKonferensi ini lahir dari kerinduan untuk membagikan spiritualitas Injil Sepenuh (Full Gospel) — sebuah iman yang hidup dalam kuasa Roh Kudus, pemulihan, dan pengharapan — kepada jemaat-jemaat Indonesia, baik yang berada di dalam maupun luar negeri. Kami percaya bahwa melalui doa bersama, firman Tuhan, dan persekutuan selama empat hari ini, akan lahir kebangunan rohani yang baru bagi penginjilan di Indonesia, sekaligus mempererat pertukaran rohani antara gereja-gereja di Korea dan Indonesia bagi kemuliaan nama Tuhan.\n\nSaya menantikan kehadiran Saudara-saudari sekalian, dan berdoa agar konferensi ini menjadi 'Kebangkitan Baru, Api yang Sama' bagi kita semua.\n\nTuhan Yesus memberkati.",
  en: "Grace and peace to you in the love of our Lord Jesus Christ.\n\nIt is with great joy that I invite you to join us at the 2027 CGI BAHASA Conference at Osanri Prayer Mountain, Korea. Since its founding in 1976, Church Growth International (CGI) has faithfully served churches in many nations by preserving the essence of the Gospel, empowering leaders, and advancing God's mission among the nations through the power of the Holy Spirit.\n\nThis conference was born out of a longing to share the spirituality of the Full Gospel — a living faith in the power of the Holy Spirit, restoration, and hope — with Indonesian congregations both at home and abroad. We believe that through four days of shared prayer, the Word of God, and fellowship, a new spiritual awakening will rise for evangelism in Indonesia, while deepening the spiritual exchange between the churches of Korea and Indonesia for the glory of God's name.\n\nI look forward to your presence, and I pray this conference will be 'A New Awakening, the Same Fire' for us all.\n\nGod bless you.",
} as const;

export const welcomeMessageAuthor = {
  name: "Dr. Lee Young Hoon",
  title: {
    id: "Ketua Church Growth International (CGI) / Gembala Senior Yoido Full Gospel Church",
    en: "Chairman, Church Growth International (CGI) / Senior Pastor, Yoido Full Gospel Church",
  },
  photo: "/images/about/lee-young-hoon.png",
} as const;

export const programHighlights = [
  { id: "Doa Subuh", en: "Early Morning Prayer" },
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

export const feeExclusions = [
  {
    id: "Tiket pesawat / transportasi internasional menuju Korea",
    en: "International airfare / transportation to Korea",
  },
  {
    id: "Biaya pengurusan visa",
    en: "Visa application fees",
  },
  {
    id: "Pengeluaran pribadi di luar program resmi",
    en: "Personal expenses outside the official program",
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
