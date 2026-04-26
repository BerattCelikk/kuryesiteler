export const WORKSHOP = {
  name: "Bağcılar Atölyesi",
  district: "Bağcılar",
  side: "Avrupa Yakası",
  segment: "flagship" as const,
  tagline: "İstanbul'un En Büyük Kurye Atölyesi",
  address: "E-5 Kenarı, Kirazlı Mahallesi, Bağcılar, İstanbul",
  neighborhood: "Kirazlı",
  street: "Abdi İpekçi Caddesi",
  coordinates: { lat: 41.038, lng: 28.856 },
  phone: "+90 (212) 000 00 00",
  phoneRaw: "+902120000000",
  whatsapp: "+90 530 000 00 00",
  whatsappRaw: "905300000000",
  instagram: "@kuryeproje.bagcilar",
  googleMapsUrl: "https://maps.google.com/?q=41.0380,28.8560",
  hours: {
    weekday: { open: "07:00", close: "01:00", label: "Hafta içi" },
    weekend: { open: "07:00", close: "01:00", label: "Hafta sonu" },
    holiday: { open: "08:00", close: "23:00", label: "Resmi tatil" },
  },
  openHour: 7,
  closeHour: 25,
  transit: [
    { type: "metro", icon: "Train", label: "Kirazlı (M1)", detail: "3 dk yürüyüş" },
    { type: "bus", icon: "Bus", label: "E-5 tüm hatlar", detail: "Direkt bağlantı" },
    { type: "moto", icon: "Bike", label: "Park alanı", detail: "Önünde ücretsiz" },
  ],
  stats: {
    population: { value: 900000, display: "900.000+", label: "İlçe Nüfusu" },
    couriers: { value: 15000, display: "15.000+", label: "Aktif Kurye" },
    openTime: { value: null as number | null, display: "07:00", label: "Sabah Açılış" },
    rank: { value: 1, display: "#1", label: "Flagship" },
  },
  timeSlots: [
    "07:00 – 09:00",
    "09:00 – 12:00",
    "12:00 – 15:00",
    "15:00 – 18:00",
    "18:00 – 00:00",
  ] as const,
  platforms: ["Getir", "Trendyol GO", "Yemeksepeti", "Diğer"] as const,
  testimonials: [
    {
      name: "Murat K.",
      role: "Getir Kurye",
      district: "Bağcılar",
      stars: 5,
      text: "10 dakikada her şey halloldu. Sabah 7'de geldim, 7:15'te çıktım. Başka bir yer böyle hızlı olmaz.",
    },
    {
      name: "Serkan D.",
      role: "Trendyol GO Kurye",
      district: "Bağcılar",
      stars: 5,
      text: "E-5 üzerinde olduğu için işe giderken uğramak çok kolay. Motorsiklet için yer de var önünde.",
    },
    {
      name: "Halil İ.",
      role: "Yemeksepeti Kurye",
      district: "Ümraniye",
      stars: 5,
      text: "Ümraniye'den geliyorum ama Bağcılar atölyesi tercihim. Güvenilir, hızlı, dürüst.",
    },
  ],
  faq: [
    { q: "Kayıt için ne gerekiyor?", a: "Kimlik kartı ve motorsiklet plakası yeterlidir. Başka belge gerekmez." },
    { q: "İşlem ne kadar sürer?", a: "Ortalama 10 dakika. Yoğun saatlerde maksimum 20 dakika bekleme olabilir." },
    { q: "Hangi saatlerde açıksınız?", a: "Her gün 07:00 – 01:00 arası açığız. Resmi tatillerde 08:00'de açılıyoruz." },
    { q: "Çantam kayıt sonrası ne olur?", a: "Çantanız sisteme işlenir, size bir proje numarası verilir ve kira planınız aynı gün başlar." },
    { q: "Kayıt ücreti var mı?", a: "Kayıt işlemi tamamen ücretsizdir. Sadece seçtiğiniz kira planı ücretlidir." },
    { q: "Randevusuz gelebilir miyim?", a: "Evet, walk-in kabul ediyoruz. Randevuyla gelenler önceliklidir." },
  ],
  priority: 1,
};

export const OTHER_WORKSHOPS = [
  { name: "Ümraniye", slug: "umraniye", side: "Anadolu", href: "https://umraniye.kuryeproje.com" },
  { name: "Esenyurt", slug: "esenyurt", side: "Avrupa", href: "https://esenyurt.kuryeproje.com" },
  { name: "Gaziosmanpaşa", slug: "gop", side: "Avrupa", href: "https://gop.kuryeproje.com" },
  { name: "Sultanbeyli", slug: "sultanbeyli", side: "Anadolu", href: "https://sultanbeyli.kuryeproje.com" },
  { name: "Pendik", slug: "pendik", side: "Anadolu", href: "https://pendik.kuryeproje.com" },
  { name: "Kadıköy", slug: "kadikoy", side: "Anadolu", href: "https://kadikoy.kuryeproje.com" },
];

export type TimeSlot = typeof WORKSHOP.timeSlots[number];
export type Platform = typeof WORKSHOP.platforms[number];
