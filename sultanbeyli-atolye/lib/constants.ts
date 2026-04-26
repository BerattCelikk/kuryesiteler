export type WorkshopStat = {
  id: string;
  value: number | null;
  display: string;
  label: string;
  color: "terra" | "sage";
};

export type Service = {
  id: string;
  navTitle: string;
  pageTitle: string;
  badge: string;
  badgeColor: "terra" | "sage";
  desc: string;
  longDesc: string;
  benefits: string[];
  slug: string;
  illustrationId: "registration" | "swap" | "service" | "consulting" | "b2b";
};

export type Step = {
  n: string;
  title: string;
  desc: string;
  detail: string;
  tag: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  initials: string;
  role: string;
  district: string;
  platform: string;
  stars: number;
  text: string;
};

export type FAQ = { q: string; a: string; category: string };

export const WORKSHOP = {
  name: "Sultanbeyli Atölyesi",
  district: "Sultanbeyli",
  side: "Anadolu Yakası",
  segment: "pool" as const,
  tagline: "Mahallenin Güvenilir Atölyesi",
  shortDesc:
    "Sultanbeyli'de motorlu kurye çanta projesi atölyesi.",
  founding: "Kurucusu mahalleden, hizmet mahalleye.",

  nav: {
    home: "Ana Sayfa",
    services: "Hizmetler",
    howto: "Nasıl Çalışır",
    workshop: "Atölye",
    faq: "Sıkça Sorulanlar",
    contact: "İletişim",
    book: "Randevu",
  },

  copy: {
    heroLine1: "Mahallenin",
    heroLine2: "Atölyesi.",
    heroSub:
      "Sultanbeyli'de kurye çanta projesi için güvenilir adresiniz. Kayıt, değişim ve bakım — hepsi burada.",
    statsLabel: "Sultanbeyli'de Neler Oldu?",
    servicesTitle: "Sana Nasıl Yardımcı Olabiliriz?",
    howitTitle: "Nasıl Çalışıyoruz?",
    stepsTitle: "Dört Adımda Anlat",
    workshopTitle: "Atölyemizi Tanıyın",
    testiTitle: "Kuryelerimiz Anlatıyor",
    faqTitle: "Aklınızdaki Sorular",
    ctaTitle: "Başlamaya Hazır mısınız?",
    ctaSub:
      "Randevu alın ya da doğrudan uğrayın. Her ikisinde de kapımız açık.",
    contactTitle: "Bize Ulaşın",
  },

  address: "Ankara Caddesi, Sultanbeyli, İstanbul",
  neighborhood: "Sultanbeyli Merkez",
  street: "Ankara Caddesi",
  postalCode: "34920",
  coordinates: { lat: 40.9648, lng: 29.2625 },
  phone: "+90 (216) 000 00 00",
  phoneRaw: "+902160000000",
  whatsapp: "+90 530 000 00 04",
  whatsappRaw: "+905300000004",
  instagram: "@kuryeproje.sultanbeyli",
  email: "sultanbeyli@kuryeproje.com",
  googleMapsUrl: "https://maps.google.com/?q=40.9648,29.2625",
  waLink: "https://wa.me/905300000004",

  hours: {
    weekday: { open: "08:00", close: "22:00", label: "Hafta içi" },
    weekend: { open: "09:00", close: "21:00", label: "Hafta sonu" },
    holiday: { open: "09:00", close: "20:00", label: "Resmi tatil" },
  },
  openHour: 8,
  closeHour: 22,
  priority: 4,

  transit: [
    { icon: "Train", label: "Sabiha Gökçen Hattı", detail: "Yakın güzergah", highlight: true },
    { icon: "Bus", label: "Ankara Cad. hatları", detail: "Kapı önü", highlight: false },
    { icon: "Route", label: "D100 güzergahı", detail: "15 dakika", highlight: false },
    { icon: "ParkingCircle", label: "Park alanı", detail: "Önünde", highlight: false },
  ],

  stats: [
    { id: "population", value: 320000, display: "320.000+", label: "Sultanbeyli'de Yaşıyor", color: "terra" },
    { id: "couriers", value: 6000, display: "6.000+", label: "Bize Güvenen Kurye", color: "sage" },
    { id: "openHour", value: null, display: "08:00", label: "Her Sabah Açılıyoruz", color: "terra" },
    { id: "waitTime", value: null, display: "~8 dk", label: "Ortalama Bekleme Süresi", color: "sage" },
  ] as WorkshopStat[],

  services: [
    {
      id: "registration",
      navTitle: "Kayıt Yaptıralım",
      pageTitle: "Kayıt Yaptıralım.",
      badge: "Ücretsiz",
      badgeColor: "sage",
      desc: "Çantanızı getirin, sistemimize kaydedelim. 10 dakika, ücretsiz.",
      longDesc:
        "Atölyemize motosikletinizle gelin. Ekibimiz çantanızı inceler, sisteme kaydeder ve aynı gün aktive eder. Kayıt tamamen ücretsizdir.",
      benefits: ["Ücretsiz kayıt", "Aynı gün aktif", "SMS proje numarası", "Sözleşmesiz çıkış"],
      slug: "kayit-yaptirali",
      illustrationId: "registration",
    },
    {
      id: "swap",
      navTitle: "Yenisini Verelim",
      pageTitle: "Yenisini Verelim.",
      badge: "Hızlı",
      badgeColor: "terra",
      desc: "Eski çantanızı getirin, yenisini götürün. Proje devam eder.",
      longDesc:
        "15 dakikada hasarlı veya eskiyen çantanızı yenisiyle değiştiriyoruz. Proje kaydınız kesintisiz devam eder.",
      benefits: ["15 dk değişim", "Proje devam eder", "Tüm çanta markaları", "Hasar tespiti ücretsiz"],
      slug: "yenisini-verelim",
      illustrationId: "swap",
    },
    {
      id: "service",
      navTitle: "Bakımını Yapalım",
      pageTitle: "Bakımını Yapalım.",
      badge: "Yerinde",
      badgeColor: "terra",
      desc: "Periyodik bakım, temizlik ve kontrol. Randevusuz gelin.",
      longDesc:
        "Fermuar kontrolü, iç astar temizliği, ısı yalıtım testi. Profesyonel bakım 20-30 dakika, randevusuz.",
      benefits: ["Randevusuz kabul", "Fermuar ve kilit", "Derin temizlik", "Isı yalıtım testi"],
      slug: "bakimini-yapalim",
      illustrationId: "service",
    },
    {
      id: "consulting",
      navTitle: "Hesabınıza Bakalım",
      pageTitle: "Hesabınıza Bakalım.",
      badge: "Ücretsiz",
      badgeColor: "sage",
      desc: "Kazanç analizi ve plan karşılaştırması. Birlikte bakalım.",
      longDesc: "Hangi plan size daha çok kazandırır? Ücretsiz yüz yüze danışmanlık.",
      benefits: ["Ücretsiz analiz", "Plan karşılaştırma", "Kişisel öneri", "Takip desteği"],
      slug: "hesabiniza-bakalim",
      illustrationId: "consulting",
    },
    {
      id: "b2b",
      navTitle: "Ekibinizle Gelin",
      pageTitle: "Ekibinizle Gelin.",
      badge: "B2B",
      badgeColor: "terra",
      desc: "5 ve üzeri kurye için toplu kayıt ve özel fiyat.",
      longDesc: "Kargo firmaları ve kurye ağları için özel filo çanta yönetimi.",
      benefits: ["5+ için indirim", "Fatura kesimi", "Öncelikli servis", "Filo raporu"],
      slug: "ekibinizle-gelin",
      illustrationId: "b2b",
    },
  ] as Service[],

  steps: [
    {
      n: "01",
      title: "Kapımıza Gelin",
      desc: "Ankara Caddesi'ndeki atölyemize motosikletinizle gelin. Park alanı var.",
      detail: "Sabah 8'den itibaren açığız. Randevusuz gelebilirsiniz; walk-in memnuniyetle karşılanır.",
      tag: "Walk-in kabul",
      icon: "MapPin",
    },
    {
      n: "02",
      title: "Belgenizi Gösterin",
      desc: "Kimlik kartı ve motorsiklet plakası yeterli.",
      detail: "Kargo kuryeleri için şirket belgesi de yeterli. Ekstra evrak istemiyoruz.",
      tag: "2 belge",
      icon: "FileText",
    },
    {
      n: "03",
      title: "Çantanızı Bırakın",
      desc: "Ekibimiz inceler, barkodlar ve kayda hazırlar.",
      detail: "Çantanızın durumunu değerlendirip size bilgi veriyoruz. Sonra sisteme alıyoruz.",
      tag: "~3 dakika",
      icon: "Package",
    },
    {
      n: "04",
      title: "Sisteme Alıyoruz",
      desc: "10 dakikada dijital kayıt tamamlanır. Proje numaranız SMS ile gelir.",
      detail: "Güvenli sistemimize kaydedilir. SMS bildirimini alınca hazırsınız.",
      tag: "~10 dk toplam",
      icon: "CheckCircle",
    },
    {
      n: "05",
      title: "Planınızı Belirleyin",
      desc: "Günlük, haftalık veya aylık. Sözleşmesiz.",
      detail: "İstediğiniz zaman plan değiştirebilir ya da çıkabilirsiniz.",
      tag: "Sözleşmesiz",
      icon: "Calendar",
    },
    {
      n: "06",
      title: "Yola Çıkın",
      desc: "Çıkışta kazanmaya başlıyorsunuz. Aynı gün aktif.",
      detail: "Atölyeden ayrıldığınızda planınız aktif. İlk günden avantajlar sizin.",
      tag: "Aynı gün",
      icon: "Bike",
    },
  ] as Step[],

  testimonials: [
    {
      name: "Hüseyin A.",
      initials: "HA",
      role: "Getir Kurye",
      district: "Sultanbeyli",
      platform: "Getir",
      stars: 5,
      text:
        "Mahallemizde böyle bir atölye açıldığına çok sevindim. Artık uzağa gitmiyorum, her şey burada.",
    },
    {
      name: "Yusuf K.",
      initials: "YK",
      role: "Yemeksepeti Kurye",
      district: "Sancaktepe",
      platform: "Yemeksepeti",
      stars: 5,
      text:
        "Sancaktepe'den geliyorum. Personeliyle çok iyi ilgileniyorlar. Sanki esnaf gibi, sıcacık.",
    },
    {
      name: "Musa T.",
      initials: "MT",
      role: "Trendyol GO Kurye",
      district: "Sultanbeyli",
      platform: "Trendyol GO",
      stars: 5,
      text: "İlk kayıtta 10 dakika geçmedi. O gün aktif oldum, o gün çalıştım. Çok memnunum.",
    },
    {
      name: "Ahmet D.",
      initials: "AD",
      role: "Kargo Kurye",
      district: "Pendik",
      platform: "Yurtiçi Kargo",
      stars: 5,
      text:
        "Bakım servisini denedim. Çantam yeni gibi oldu. Artık her ay geliyorum bakıma.",
    },
  ] as Testimonial[],

  faq: [
    { q: "Walk-in gelebilir miyim, randevu şart mı?", a: "Walk-in memnuniyetle karşılıyoruz. Randevu alanlar önceliklidir ama randevusuz da beklemeniz kısa olur.", category: "Genel" },
    { q: "Kayıt ücreti alıyor musunuz?", a: "Hayır. Sistem kaydı tamamen ücretsizdir. Yalnızca seçtiğiniz kira planı ücretlidir.", category: "Fiyat" },
    { q: "Sultanbeyli dışından gelenler başvurabilir mi?", a: "Evet. Sancaktepe, Pendik, Kartal, Maltepe hattından kuryelerimiz var. Herkese kapımız açık.", category: "Genel" },
    { q: "Kayıt için ne lazım?", a: "Kimlik kartı ve motorsiklet plaka numarası. Kargo kuryelerinden şirket belgesi de isteyebiliriz.", category: "Belgeler" },
    { q: "Ortalama bekleme süresi nedir?", a: "Randevuyla gelenler hemen alınıyor. Walk-in ortalama 8-10 dakika bekleme.", category: "Genel" },
    { q: "Kira planından istediğim zaman çıkabilir miyim?", a: "Evet. Sözleşme yok, ceza yok. İstediğiniz gün çıkış yapabilirsiniz.", category: "Fiyat" },
    { q: "Çantam hasar görürse ne yapacağım?", a: "Aktif planınızda değişim hakkı var. Atölyeye getirin, yenisini alın.", category: "Hizmet" },
    { q: "5 arkadaşla birlikte gelsek olur mu?", a: "Çok memnun oluruz. 5 ve üzeri için B2B programımız devreye girer, özel fiyat alırsınız.", category: "B2B" },
    { q: "Bakım ne sıklıkla yapılmalı?", a: "Ayda bir periyodik bakım öneriyoruz. Yoğun kullananlar için iki haftada bir daha iyidir.", category: "Hizmet" },
  ] as FAQ[],

  timeSlots: [
    "08:00 – 10:00",
    "10:00 – 12:00",
    "12:00 – 14:00",
    "14:00 – 16:30",
    "16:30 – 19:00",
    "19:00 – 22:00",
  ],
  platforms: ["Getir", "Trendyol GO", "Yemeksepeti", "Yurtiçi Kargo", "MNG Kargo", "Diğer"],
  bagTypes: ["Yemek Çantası", "Kargo Çantası", "Market Çantası", "Termal Çanta"],
};

export const OTHER_WORKSHOPS = [
  { name: "Bağcılar", side: "Avrupa", type: "flagship", href: "https://bagcilar.kuryeproje.com" },
  { name: "Ümraniye", side: "Anadolu", type: "hub", href: "https://umraniye.kuryeproje.com" },
  { name: "Esenyurt", side: "Avrupa", type: "pool", href: "https://esenyurt.kuryeproje.com" },
  { name: "Gaziosmanpaşa", side: "Avrupa", type: "hub", href: "https://gop.kuryeproje.com" },
  { name: "Pendik", side: "Anadolu", type: "b2b", href: "https://pendik.kuryeproje.com" },
  { name: "Kadıköy", side: "Anadolu", type: "showcase", href: "https://kadikoy.kuryeproje.com" },
];
