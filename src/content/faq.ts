import { eventFacts } from "@/content/event";

export const faqItems = [
  {
    id: "Apa saja yang perlu disiapkan peserta?",
    en: "What do participants need to prepare?",
    answer: {
      id: "Peserta perlu menyelesaikan persyaratan visa untuk masuk ke Korea, dan mendaftar secara online terlebih dahulu.",
      en: "Participants need to complete their visa requirements to enter Korea, and register online in advance.",
    },
  },
  {
    id: "Bagaimana cara menuju lokasi acara?",
    en: "How do I get to the venue?",
    answer: {
      id: "Transportasi akan disediakan bagi peserta yang telah mendaftar (pra-pendaftaran) sebelumnya.",
      en: "Transportation will be provided for participants who have pre-registered in advance.",
    },
  },
  {
    id: "Apakah tersedia penerjemah bahasa Indonesia?",
    en: "Is Indonesian interpretation available?",
    answer: {
      id: "Ya, penerjemahan/interpretasi bahasa Indonesia tersedia selama acara.",
      en: "Yes, Indonesian interpretation is provided throughout the event.",
    },
  },
  {
    id: "Bagaimana cara mendaftar?",
    en: "How do I register?",
    answer: {
      id: `Klik tombol "Daftar Sekarang", lalu ikuti 4 langkah: pilih jenis pendaftaran, isi data peserta, periksa ringkasan pesanan dan biaya, kemudian selesaikan pembayaran. Pendaftaran dibuka mulai ${eventFacts.saleStartLabel.id}.`,
      en: `Click "Register Here" and follow the 4 steps: select your registration type, fill in your participant details, review the order and fee summary, then complete payment. Registration opens ${eventFacts.saleStartLabel.en}.`,
    },
  },
  {
    id: "Apakah biaya pendaftaran termasuk akomodasi?",
    en: "Does the registration fee include accommodation?",
    answer: {
      id: "Ya, biaya pendaftaran termasuk akomodasi asrama, konsumsi, dan item lain — lihat Panduan Peserta untuk rincian lengkap.",
      en: "Yes, the registration fee includes dormitory accommodation, meals, and more — see the Participant Guide for full details.",
    },
  },
  {
    id: "Bagaimana jika saya perlu membatalkan pendaftaran?",
    en: "What if I need to cancel my registration?",
    answer: {
      id: eventFacts.refundPolicy.id,
      en: eventFacts.refundPolicy.en,
    },
  },
] as const;
