export const WORKSHOP = {
  name: "GOP Atölyesi",
  district: "Gaziosmanpaşa",
  side: "Avrupa Yakası",
  segment: "hub",
  tagline: "Gece Gündüz Yanınızdayız",
  shortDesc:
    "Gaziosmanpaşa'da motorlu kurye çanta projesi atölyesi. Kayıt, değişim, bakım, filo yönetimi.",

  nav: {
    home: "Başlangıç",
    services: "Hizmetler",
    howto: "Nasıl Çalışır",
    location: "Rotanı Bul",
    b2b: "Ekiple Gel",
    faq: "Aklındaki Sorular",
    book: "Randevu",
  },

  copy: {
    heroLine1: "Gece",
    heroLine2: "Gündüz.",
    heroLine3: "Çalışıyoruz.",
    heroSub: "GOP atölyesi, Avrupa yakasının en güvenilir kurye istasyonu.",
    statsTitle: "Sayılar Konuşuyor",
    servicesTitle: "Ne İstiyorsun?",
    howitworksTitle: "Üç Dakikada Anlarsın",
    stepsTitle: "Rotayı Takip Et",
    testimonialsTitle: "Kuryeler Biliyor",
    faqTitle: "Aklındaki Sorular",
    ctaTitle: "Hazırsan Gel",
    ctaSub: "Şimdi randevu al ya da direk atölyeye uğra.",
    locationTitle: "Neredeyiz",
    contactTitle: "İletişime Geç",
  },

  address: "Fevzi Çakmak Caddesi, Gaziosmanpaşa, İstanbul",
  neighborhood: "GOP Merkez",
  street: "Fevzi Çakmak Caddesi",
  postalCode: "34245",
  coordinates: { lat: 41.0667, lng: 28.91 },
  phone: "+90 (212) 000 00 00",
  phoneRaw: "+902120000000",
  whatsapp: "+90 530 000 00 03",
  whatsappRaw: "+905300000003",
  instagram: "@kuryeproje.gop",
  email: "gop@kuryeproje.com",
  googleMapsUrl: "https://maps.google.com/?q=41.0667,28.9100",
  waLink: "https://wa.me/905300000003",

  hours: {
    weekday: { open: "07:30", close: "23:30", label: "Hafta içi" },
    weekend: { open: "08:00", close: "23:00", label: "Hafta sonu" },
    holiday: { open: "09:00", close: "22:00", label: "Resmi tatil" },
  },
  openHour: 7,
  closeHour: 23,
  priority: 5,

  transit: [
    { icon: "Bus", label: "Şişli-Gaziosmanpaşa", detail: "Direkt hat", highlight: true },
    { icon: "Train", label: "Otogar Metro", detail: "10 dk", highlight: false },
    { icon: "Route", label: "E-5 Bağlantısı", detail: "15 dk", highlight: false },
    { icon: "ParkingCircle", label: "Park Alanı", detail: "Ücretsiz", highlight: false },
  ],

  stats: [
    { id: "population", value: 500000, display: "500K+", label: "GOP'ta Yaşıyor", sublabel: "nüfus", color: "coral" },
    { id: "couriers", value: 8000, display: "8.000+", label: "Aktif Kurye", sublabel: "kayıtlı", color: "cyan" },
    { id: "openHour", value: null, display: "07:30", label: "Sabah Açılış", sublabel: "hafta içi", color: "amber" },
    { id: "experience", value: null, display: "7/24", label: "Destek Hattı", sublabel: "WhatsApp", color: "coral" },
  ] as const,

  services: [
    {
      id: "registration",
      navTitle: "Sisteme Gir",
      pageTitle: "Sisteme Gir.",
      badge: "Ücretsiz",
      badgeColor: "coral",
      icon: "Fingerprint",
      desc: "Çantanı atölyeye getir, sistemimize kayıt ol. 10 dakika.",
      longDesc:
        "GOP atölyemize motosikletinle uğra. Ekibimiz çantanı inceler, sisteme kaydeder ve aynı gün aktif hale getirir. Kayıt tamamen ücretsizdir.",
      benefits: ["Ücretsiz kayıt", "Aynı gün aktif", "SMS ile proje no", "Sözleşmesiz"],
      slug: "sisteme-gir",
    },
    {
      id: "swap",
      navTitle: "Yenile",
      pageTitle: "Yenile.",
      badge: "Hızlı",
      badgeColor: "cyan",
      icon: "RefreshCcw",
      desc: "Hasarlı veya eski çantanı getir, yenisini al.",
      longDesc:
        "Çantanın ömrünü doldurduğunda projede kalmak için yenile. 15 dakikada tamamlanır.",
      benefits: ["15 dk değişim", "Tüm markalar", "Proje devam", "Ücretsiz hasar tespiti"],
      slug: "yenile",
    },
    {
      id: "service",
      navTitle: "Bakımda Tut",
      pageTitle: "Bakımda Tut.",
      badge: "Yerinde",
      badgeColor: "amber",
      icon: "Wrench",
      desc: "Periyodik bakım, derin temizlik. Randevusuz gel.",
      longDesc:
        "Fermuar, astar, ısı yalıtımı kontrolü. Profesyonel bakım 20-30 dakika, randevusuz.",
      benefits: ["Randevusuz", "Fermuar kontrolü", "Derin temizlik", "Isı yalıtım testi"],
      slug: "bakimda-tut",
    },
    {
      id: "consulting",
      navTitle: "Hesabı Gör",
      pageTitle: "Hesabı Gör.",
      badge: "Ücretsiz",
      badgeColor: "coral",
      icon: "Calculator",
      desc: "Kazanç analizi ve plan karşılaştırması. Birlikte hesaplayalım.",
      longDesc:
        "Hangi plan senin için en karlı? Ücretsiz danışmanlık seansı, yüz yüze.",
      benefits: ["Ücretsiz analiz", "Plan karşılaştırma", "Kişisel öneri", "Takip görüşmesi"],
      slug: "hesabi-gor",
    },
    {
      id: "b2b",
      navTitle: "Filonu Yönet",
      pageTitle: "Filonu Yönet.",
      badge: "B2B",
      badgeColor: "cyan",
      icon: "Network",
      desc: "5+ kurye için filo çanta yönetimi. Özel anlaşma.",
      longDesc:
        "Kargo şirketleri ve büyük kurye ağları için toplu kayıt ve özel fiyatlandırma.",
      benefits: ["5+ özel fiyat", "Fatura kesimi", "Öncelikli servis", "Filo raporu"],
      slug: "filonu-yonet",
    },
  ],

  steps: [
    { n: "01", title: "Atölyeye Ulaş", desc: "Fevzi Çakmak Caddesi'ndeki atölyemize motosikletinle gel.", detail: "Şişli yönünden veya Otogar Metro güzergahından kolayca ulaşabilirsiniz. Önümüzde park alanı var.", tag: "~10 dk", icon: "Navigation" },
    { n: "02", title: "Belgeni Göster", desc: "Kimlik ve plaka. Hepsi bu.", detail: "Kurumsal başvuru için şirket belgesi de yeter. Karmaşık evrak yok.", tag: "2 belge", icon: "CreditCard" },
    { n: "03", title: "Çantanı Teslim Et", desc: "Ekibimiz inceler, barkodlar, sisteme hazırlar.", detail: "Çantanın durumunu değerlendiriyoruz. Sorun varsa sizi bilgilendirip çözüyoruz.", tag: "~3 dk", icon: "PackageCheck" },
    { n: "04", title: "Sistem Kaydı", desc: "Dijital kayıt tamamlanır. Proje numaranız SMS ile gelir.", detail: "Tüm bilgileriniz şifreli sistemimize işlenir. SMS bildirimini aldığınızda hazırsınız.", tag: "~10 dk toplam", icon: "Database" },
    { n: "05", title: "Planını Belirle", desc: "Günlük, haftalık veya aylık. Sözleşmesiz.", detail: "İstediğiniz zaman plan değiştirebilir ya da projeden çıkabilirsiniz. Hiçbir koşul yok.", tag: "sözleşmesiz", icon: "SlidersHorizontal" },
    { n: "06", title: "Aktif Ol, Yola Çık", desc: "Çıkışta kazanmaya başlıyorsunuz.", detail: "Atölyeden ayrıldığınız anda kira planınız aktif. İlk günden avantajlardan yararlanın.", tag: "aynı gün", icon: "Rocket" },
  ],

  testimonials: [
    { name: "Erkan B.", initials: "EB", role: "Trendyol GO Kurye", district: "GOP", platform: "Trendyol GO", stars: 5, text: "Şişli'den çalışıyorum ama GOP atölyesine geliyorum çünkü personel çok dürüst. İşini biliyor." },
    { name: "Mustafa Ç.", initials: "MÇ", role: "Getir Kurye", district: "Eyüp", platform: "Getir", stars: 5, text: "Randevu sistemi mükemmel. Bekleme yok. Geliyorsun, işini hallediyorsun, gidiyorsun." },
    { name: "Rıfkı S.", initials: "RS", role: "Kargo Kurye", district: "Sultangazi", platform: "MNG Kargo", stars: 5, text: "Gece 11'de kapanıyor. Bu çok önemli çünkü biz gece çalışıyoruz. Başka atölye bu saatte yok." },
    { name: "Volkan D.", initials: "VD", role: "Yemeksepeti Kurye", district: "GOP", platform: "Yemeksepeti", stars: 5, text: "5 arkadaş toplu kayıt yaptık. Filo programından çok memnunuz. İndirim de aldık." },
  ],

  faq: [
    { q: "GOP'ta çalışmıyorum, gelebilir miyim?", a: "Evet. Şişli, Kâğıthane, Eyüp, Sultangazi, Beyoğlu hattından pek çok kuryemiz atölyemize geliyor." },
    { q: "Gece geç saatte açık mısınız?", a: "Hafta içi 23:30'a kadar, hafta sonu 23:00'a kadar açığız. Gece çalışan kuryeler için tasarlandı." },
    { q: "Kayıt için ne lazım?", a: "Kimlik kartı ve motorsiklet plakası. Kargo firması için şirket belgesi de getirin." },
    { q: "Bekleme süresi nasıl?", a: "Randevuyla sıfır bekleme. Walk-in ortalama 10-15 dakika. Gece saatlerinde genellikle boş." },
    { q: "5 kişi toplu gelecek miyiz?", a: "B2B programımıza bakın. 5 ve üzeri için özel fiyat, fatura, öncelikli servis mevcut." },
    { q: "Kira planından istediğimde çıkabilir miyim?", a: "Evet. Sözleşme yok. İstediğiniz gün çıkış yaparsınız." },
    { q: "Çantam hasar görürse?", a: "Aktif planınızda değişim hakkınız var. Getirin, yenisini alın." },
    { q: "WhatsApp ile bilgi alabilir miyim?", a: "7/24 WhatsApp destek aktif. Mesaj atın, kısa sürede yanıt verelim." },
    { q: "İlk kez gelirsem ne yapacağım?", a: "Gel, kimliğini göster, çantanı bırak. Ekibimiz seni yönlendirir. 10 dakika." },
  ],

  timeSlots: ["07:30 – 09:30", "09:30 – 12:00", "12:00 – 14:30", "14:30 – 17:00", "17:00 – 20:00", "20:00 – 23:30"],
  platforms: ["Getir", "Trendyol GO", "Yemeksepeti", "Yurtiçi Kargo", "MNG Kargo", "Diğer"],
  bagTypes: ["Yemek Çantası", "Kargo Çantası", "Market Çantası", "Termal Çanta"],

  bookingSteps: [
    { n: "01", label: "Seni Tanıyalım" },
    { n: "02", label: "Zamanı Seç" },
    { n: "03", label: "Detayları Ver" },
    { n: "04", label: "Onayla" },
  ],
} as const;

export const OTHER_WORKSHOPS = [
  { name: "Bağcılar", side: "Avrupa", type: "flagship", href: "https://bagcilar.kuryeproje.com" },
  { name: "Ümraniye", side: "Anadolu", type: "hub", href: "https://umraniye.kuryeproje.com" },
  { name: "Esenyurt", side: "Avrupa", type: "pool", href: "https://esenyurt.kuryeproje.com" },
  { name: "Sultanbeyli", side: "Anadolu", type: "pool", href: "https://sultanbeyli.kuryeproje.com" },
  { name: "Pendik", side: "Anadolu", type: "b2b", href: "https://pendik.kuryeproje.com" },
  { name: "Kadıköy", side: "Anadolu", type: "showcase", href: "https://kadikoy.kuryeproje.com" },
];

export const SECTIONS = [
  { id: "hero", label: "Başlangıç" },
  { id: "stats", label: "Sayılar" },
  { id: "hizmetler", label: "Hizmetler" },
  { id: "nasil-calisir", label: "Süreç" },
  { id: "testimonials", label: "Referanslar" },
  { id: "faq", label: "SSS" },
  { id: "cta", label: "İletişim" },
];

export type Service = (typeof WORKSHOP.services)[number];
export type Step = (typeof WORKSHOP.steps)[number];
export type Stat = (typeof WORKSHOP.stats)[number];
