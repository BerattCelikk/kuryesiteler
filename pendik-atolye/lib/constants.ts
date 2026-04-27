export const WORKSHOP = {
  name: "Pendik Atölyesi",
  district: "Pendik",
  side: "Anadolu Yakası",
  segment: "b2b" as const,
  tagline: "Lojistikte Güvenilir Sistem",
  shortDesc: "Pendik'te motorlu kurye çanta projesi atölyesi.",

  nav: {
    home: "Panel",
    services: "Hizmetler",
    process: "Süreç",
    location: "Konum",
    fleet: "Filo",
    faq: "SSS",
    book: "Randevu",
  },

  copy: {
    heroLine1: "Pendik.",
    heroLine2: "Sistemde Ol.",
    heroSub:
      "Kargo ve yemek kuryelerine tam hizmet. Kayıt, değişim, bakım — tek atölyede.",
    statsTitle: "Atölye Verileri",
    servicesTitle: "Ne İhtiyacın Var?",
    processTitle: "Süreç: 6 Adım",
    locationTitle: "Konumumuz",
    testiTitle: "Kuryelerden",
    faqTitle: "Sık Sorulan Sorular",
    ctaTitle: "Sisteme Gir",
    ctaSub: "Randevu al ya da walk-in gel.",
    contactTitle: "İletişim",
    fleetTitle: "Filo Yönetimi",
  },

  address: "D100 Caddesi, Pendik, İstanbul",
  neighborhood: "Pendik Merkez",
  street: "D100 Caddesi",
  postalCode: "34899",
  coordinates: { lat: 40.8753, lng: 29.232 },
  phone: "+90 (216) 000 00 00",
  phoneRaw: "+902160000000",
  whatsapp: "+90 530 000 00 05",
  whatsappRaw: "+905300000005",
  instagram: "@kuryeproje.pendik",
  email: "pendik@kuryeproje.com",
  googleMapsUrl: "https://maps.google.com/?q=40.8753,29.2320",
  waLink: "https://wa.me/905300000005",

  hours: {
    weekday: { open: "07:30", close: "22:30", label: "Hafta içi" },
    weekend: { open: "08:00", close: "21:00", label: "Hafta sonu" },
    holiday: { open: "08:00", close: "20:00", label: "Resmi tatil" },
  },
  openHour: 7,
  closeHour: 22,
  priority: 6,

  transit: [
    { icon: "Train", label: "Pendik TCDD Garı", detail: "8 dk yürüyüş", highlight: true },
    { icon: "Route", label: "D100 Üzeri", detail: "Direkt erişim", highlight: false },
    { icon: "Plane", label: "SAW Havalimanı", detail: "15 dk", highlight: false },
    { icon: "ParkingCircle", label: "Park Alanı", detail: "Ücretsiz", highlight: false },
  ],

  stats: [
    { id: "population", value: 600000, display: "600K+", label: "Pendik Nüfusu", sublabel: "kişi", color: "lime" as const },
    { id: "couriers", value: 9000, display: "9.000+", label: "Aktif Kurye", sublabel: "kayıtlı", color: "white" as const },
    { id: "cargoHubs", value: 12, display: "12", label: "Kargo Hub'ı", sublabel: "yakın", color: "lime" as const },
    { id: "waitTime", value: null, display: "≤10 dk", label: "Maks. Bekleme", sublabel: "walk-in", color: "white" as const },
  ],

  services: [
    {
      id: "registration",
      navTitle: "Sisteme Kayıt",
      pageTitle: "Sisteme Kayıt",
      badge: "Ücretsiz",
      badgeColor: "lime",
      icon: "PackagePlus",
      desc: "Çantanı kaydet. 10 dakika, ücretsiz, aynı gün aktif.",
      longDesc:
        "Atölyemize gel, kimliğini ve plakayı göster, çantanı bırak. Sistem kaydı 10 dakika. Kira planın aynı gün başlar.",
      benefits: ["Ücretsiz kayıt", "10 dk işlem", "SMS proje no", "Sözleşmesiz"],
      slug: "sisteme-kayit",
    },
    {
      id: "swap",
      navTitle: "Çanta Değişimi",
      pageTitle: "Çanta Değişimi",
      badge: "Hızlı",
      badgeColor: "gray",
      icon: "RefreshCw",
      desc: "Hasarlı veya eskiyen çantanı yenisiyle değiştir.",
      longDesc:
        "15 dakikada eski çantanı teslim et, yenisini al. Proje kaydın kesintisiz devam eder.",
      benefits: ["15 dk değişim", "Tüm markalar", "Proje devam", "Hasar tespiti"],
      slug: "canta-degisimi",
    },
    {
      id: "service",
      navTitle: "Periyodik Bakım",
      pageTitle: "Periyodik Bakım",
      badge: "Yerinde",
      badgeColor: "gray",
      icon: "Wrench",
      desc: "Fermuar, astar, ısı yalıtım kontrolü. Randevusuz.",
      longDesc:
        "20-30 dakikalık periyodik bakım. Fermuar, astar, ısı testi. Walk-in kabul.",
      benefits: ["Randevusuz", "Fermuar+kilit", "Derin temizlik", "Isı testi"],
      slug: "periyodik-bakim",
    },
    {
      id: "consulting",
      navTitle: "Plan Optimizasyonu",
      pageTitle: "Plan Optimizasyonu",
      badge: "Ücretsiz",
      badgeColor: "lime",
      icon: "BarChart2",
      desc: "Hangi plan kazandırır? Ücretsiz analiz.",
      longDesc:
        "Günlük/haftalık/aylık plan karşılaştırması. Kazanç optimizasyonu. Ücretsiz.",
      benefits: ["Ücretsiz analiz", "Plan karşılaştırma", "Kişisel öneri", "Takip"],
      slug: "plan-optimizasyonu",
    },
    {
      id: "fleet",
      navTitle: "Filo Yönetimi",
      pageTitle: "Filo Yönetimi",
      badge: "B2B",
      badgeColor: "dark",
      icon: "Truck",
      desc: "5+ kurye için filo çanta yönetimi. Özel fiyat.",
      longDesc:
        "Kargo firmaları için toplu kayıt, fatura, öncelikli servis. 5 ve üzeri kayıtta filo programı.",
      benefits: ["5+ özel fiyat", "Fatura kesimi", "Öncelikli servis", "Filo raporu"],
      slug: "filo-yonetimi",
    },
  ],

  steps: [
    { n: "01", title: "Atölyeye Gel", desc: "D100 üzerindeki atölyemize motosikletinle gel.", detail: "Pendik garından 8 dakika. D100'den direkt erişim. Önünde park var.", tag: "~10 dk yolda", icon: "Navigation" },
    { n: "02", title: "Kimlik + Plaka", desc: "Kimlik ve plaka numarası. Başka belge gerekmez.", detail: "Kargo kuryesi isen şirket belgesi de yeterli. Ekstra evrak yok.", tag: "2 belge", icon: "CreditCard" },
    { n: "03", title: "Çantayı Teslim Et", desc: "Ekip çantanı inceler, barkodlar, kaydeder.", detail: "Durum tespiti yapılır. Sorun varsa bildirilir. 3 dakika.", tag: "~3 dk", icon: "PackageCheck" },
    { n: "04", title: "Sistem Kaydı", desc: "Dijital kayıt tamamlanır. Proje no SMS ile gelir.", detail: "Şifreli sisteme işlenir. SMS bildirimini alınca aktifsiniz.", tag: "~10 dk toplam", icon: "Database" },
    { n: "05", title: "Plan Seç", desc: "Günlük, haftalık veya aylık. Sözleşmesiz.", detail: "İstediğin zaman değiştirebilir ya da çıkabilirsin.", tag: "sözleşmesiz", icon: "SlidersHorizontal" },
    { n: "06", title: "Aktif Ol", desc: "Çıkışta aktif. Aynı gün kazanmaya başla.", detail: "Plan anında başlar. İlk günden avantajlardan yararlan.", tag: "aynı gün", icon: "Zap" },
  ],

  testimonials: [
    { name: "Barış K.", initials: "BK", role: "MNG Kargo Kurye", district: "Pendik", platform: "MNG Kargo", stars: 5, text: "Kargo deposuna yakın olduğu için sabah gelip kayıt yaptırdım, öğleden sonra zaten çalışıyordum." },
    { name: "Selim A.", initials: "SA", role: "Yurtiçi Kurye", district: "Kurtköy", platform: "Yurtiçi Kargo", stars: 5, text: "SAW yakınında olması büyük avantaj. Havalimanı hattında çalışıyoruz, mesafe çok iyi." },
    { name: "Tarık E.", initials: "TE", role: "Getir Kurye", district: "Pendik", platform: "Getir", stars: 5, text: "Bakım servisini kullanıyorum ayda bir. Randevusuz gidiyorum, hemen alıyorlar. Sistem çalışıyor." },
    { name: "Orhan T.", initials: "OT", role: "Trendyol GO Kurye", district: "Kartal", platform: "Trendyol GO", stars: 5, text: "Kartal'dan geliyorum çünkü filo programı en iyi burada. 8 kişiyle toplu kayıt yaptık." },
  ],

  faq: [
    { q: "Kargo kuryeleri de başvurabilir mi?", a: "Evet. Yemek, market ve kargo kuryelerinin tamamına hizmet veriyoruz. B2B programımız özellikle kargo firmaları için tasarlandı.", category: "Genel" },
    { q: "Sabiha Gökçen veya D100 güzergahından gelinebilir mi?", a: "Evet. D100 üzerindeyiz. SAW'dan yaklaşık 15 dakika, Pendik garından 8 dakika yürüyüş mesafesi.", category: "Ulaşım" },
    { q: "Walk-in bekleme süresi nedir?", a: "Maksimum 10 dakika. Randevuyla sıfır bekleme.", category: "Genel" },
    { q: "Kayıt ücreti var mı?", a: "Hayır. Sistem kaydı ücretsizdir. Yalnızca seçilen kira planı ücretlidir.", category: "Ücret" },
    { q: "5 kişi toplu kayıt yaptırmak istiyoruz.", a: "Filo programımız devreye girer. 5 ve üzeri için özel fiyat, fatura, öncelikli servis sağlıyoruz.", category: "B2B" },
    { q: "Kira planından çıkış nasıl?", a: "Sözleşmesiz sistem. İstediğin gün çıkış yapabilirsin, ceza yok.", category: "Ücret" },
    { q: "Çanta değişiminde ek ücret?", a: "Aktif planınızda değişim hakkı dahildir. Planınıza göre detay için atölyeye gelin.", category: "Hizmet" },
    { q: "Hafta sonu ve gece açık mısınız?", a: "Hafta içi 07:30-22:30, hafta sonu 08:00-21:00 açığız.", category: "Saat" },
  ],

  timeSlots: [
    "07:30 – 09:30",
    "09:30 – 12:00",
    "12:00 – 14:30",
    "14:30 – 17:00",
    "17:00 – 19:30",
    "19:30 – 22:30",
  ],
  platforms: ["Getir", "Trendyol GO", "Yemeksepeti", "Yurtiçi Kargo", "MNG Kargo", "PTT Kargo", "Diğer"],
  bagTypes: ["Yemek Çantası", "Kargo Çantası", "Market Çantası", "Termal Çanta"],

  bookingSteps: [
    { n: "01", label: "Kişisel Bilgiler" },
    { n: "02", label: "Slot Seç" },
    { n: "03", label: "Detaylar" },
    { n: "04", label: "Onay" },
  ],
};

export const OTHER_WORKSHOPS = [
  { name: "Bağcılar", side: "Avrupa", type: "flagship", href: "https://bagcilar.kuryeproje.com" },
  { name: "Ümraniye", side: "Anadolu", type: "hub", href: "https://umraniye.kuryeproje.com" },
  { name: "Esenyurt", side: "Avrupa", type: "pool", href: "https://esenyurt.kuryeproje.com" },
  { name: "Gaziosmanpaşa", side: "Avrupa", type: "hub", href: "https://gop.kuryeproje.com" },
  { name: "Sultanbeyli", side: "Anadolu", type: "pool", href: "https://sultanbeyli.kuryeproje.com" },
  { name: "Kadıköy", side: "Anadolu", type: "showcase", href: "https://kadikoy.kuryeproje.com" },
];

export type Service = (typeof WORKSHOP.services)[number];
export type Step = (typeof WORKSHOP.steps)[number];
export type Testimonial = (typeof WORKSHOP.testimonials)[number];
