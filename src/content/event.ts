export const eventFacts = {
  name: "2027 CGI BAHASA Conference",
  theme: {
    id: "Kebangkitan Baru, Api yang Sama",
    en: "A New Awakening, the Same Fire",
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
  fee: {
    amount: "USD $100",
  },
  contactEmail: "info@cgikorea.kr",
} as const;

export const venuePhotos = [
  {
    src: "/images/venue/osanri-01.jpg",
    alt: {
      id: "Jemaat berdoa bersama di ruang ibadah utama Osanri Prayer Mountain",
      en: "Congregation praying together in the main worship hall at Osanri Prayer Mountain",
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
