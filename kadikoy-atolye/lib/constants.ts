export const WORKSHOP = {
  name: "Kadıköy Atölyesi",
  district: "Kadıköy",
  side: "Anadolu Yakası",
  segment: "showcase" as const,
  tagline: "Kadıköy'ün Araç Projesi Adresi",
  shortDesc: "Kadıköy'de motorlu kurye çanta projesi atölyesi.",
  edition: "No. 07",
  issueDate: "2024",

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
    heroIssue: "Kurye Proje · Kadıköy · No.07",
    heroLine1: "Kadıköy'ün",
    heroLine2: "Atölyesi.",
    heroSub: "Araç projesi sisteminde yer almanın\nen iyi adresi.",
    aboutTitle: "Bir Atölyeden Fazlası",
    aboutPara1:
      "Kadıköy'ün hareketli sokaklarında, İstanbul'un en dinamik teslimat güzergahlarından birinde faaliyet gösteren atölyemiz, kurye arkadaşlarımıza yalnızca teknik bir hizmet sunmakla kalmıyor.",
    aboutPara2:
      "Araç projesi sistemiyle kazancınızı artırmanın yanı sıra, çantanızın bakımını ve güvenilirliğini de güvence altına alıyoruz. Kadıköy'de her teslimat önemlidir — biz de bunu biliyoruz.",
    servicesTitle: "Size Neler Sunuyoruz",
    howitTitle: "Nasıl Çalışıyoruz",
    locationTitle: "Bizi Ziyaret Edin",
    testiTitle: "Kuryeler Anlatıyor",
    faqTitle: "Merak Ettikleriniz",
    ctaTitle: "Birlikte Başlayalım",
    ctaSub: "Randevu alın ya da doğrudan uğrayın. Kapımız her zaman açık.",
    contactTitle: "İletişim",
    fleetTitle: "Kurumsal İş Birliği",
    marqueeItems: [
      "Kadıköy Atölyesi",
      "Araç Projesi",
      "Ücretsiz Kayıt",
      "Aynı Gün Aktif",
      "10 Dakika",
      "Walk-in Kabul",
      "Randevu Alın",
    ],
  },

  address: "Koşuyolu Caddesi, Kadıköy, İstanbul",
  neighborhood: "Koşuyolu",
  street: "Koşuyolu Caddesi",
  postalCode: "34718",
  coordinates: { lat: 40.9867, lng: 29.0473 },
  phone: "+90 (216) 000 00 00",
  phoneRaw: "+902160000000",
  whatsapp: "+90 530 000 00 06",
  whatsappRaw: "+905300000006",
  instagram: "@kuryeproje.kadikoy",
  email: "kadikoy@kuryeproje.com",
  googleMapsUrl: "https://maps.google.com/?q=40.9867,29.0473",
  waLink: "https://wa.me/905300000006",

  hours: {
    weekday: { open: "08:00", close: "22:00", label: "Hafta içi" },
    weekend: { open: "09:00", close: "21:00", label: "Hafta sonu" },
    holiday: { open: "09:00", close: "20:00", label: "Resmi tatil" },
  },
  openHour: 8,
  closeHour: 22,
  priority: 7,

  transit: [
    { icon: "Train", label: "Kadıköy-Moda tramvayı", detail: "2 dk", highlight: true },
    { icon: "Ship", label: "Kadıköy İskelesi", detail: "8 dk yürüyüş", highlight: false },
    { icon: "Bus", label: "E5 / D-100 hattı", detail: "15 dk", highlight: false },
    { icon: "ParkingCircle", label: "Park alanı", detail: "Yakın çevrede", highlight: false },
  ],

  stats: [
    { id: "population", value: 500000, display: "500.000+", label: "Kadıköy Nüfusu", color: "forest" as const },
    { id: "couriers", value: 10000, display: "10.000+", label: "Aktif Kurye", color: "gold" as const },
    { id: "restaurants", value: 3000, display: "3.000+", label: "Restoran & Kafe", color: "forest" as const },
    { id: "waitTime", value: null, display: "≤8 dk", label: "Bekleme Süresi", color: "gold" as const },
  ],

  services: [
    {
      id: "registration",
      navTitle: "Sisteme Dahil Olun",
      pageTitle: "Sisteme Dahil Olun",
      badge: "Ücretsiz",
      badgeColor: "forest" as const,
      icon: "UserPlus",
      desc:
        "Çantanızı atölyemize getirin, araç projemize kayıt yaptırın. On dakika içinde sisteme dahil olursunuz.",
      longDesc:
        "Kadıköy atölyemize motosikletinizle gelin. Kimliğinizi ve plaka numaranızı paylaşın. Ekibimiz çantanızı kayıt sistemine alır, kira planınızı başlatır. Aynı gün aktif olursunuz.",
      benefits: ["Ücretsiz kayıt", "Aynı gün aktifleşme", "SMS proje numarası", "Sözleşmesiz çıkış"],
      slug: "sisteme-dahil-olun",
    },
    {
      id: "swap",
      navTitle: "Yenileme Hizmeti",
      pageTitle: "Yenileme Hizmeti",
      badge: "15 dk",
      badgeColor: "gold" as const,
      icon: "RefreshCcw",
      desc:
        "Çantanızın ömrü dolduğunda kesintisiz devam etmek için yenileme hizmetimizden yararlanın.",
      longDesc:
        "Eskiyen veya hasarlı çantanızı getirin. On beş dakika içinde yenisiyle değiştiriyoruz. Proje kaydınız kesintisiz devam eder.",
      benefits: ["15 dk değişim", "Proje devam eder", "Tüm çanta markaları", "Ücretsiz hasar tespiti"],
      slug: "yenileme-hizmeti",
    },
    {
      id: "service",
      navTitle: "Bakım & Onarım",
      pageTitle: "Bakım & Onarım",
      badge: "Yerinde",
      badgeColor: "forest" as const,
      icon: "Settings",
      desc:
        "Çantanızın performansını korumak için düzenli bakım ve gerektiğinde onarım hizmetleri sunuyoruz.",
      longDesc:
        "Fermuar, astar, ısı yalıtımı ve genel durum kontrolü. Yirmi ila otuz dakika, randevusuz.",
      benefits: ["Randevusuz kabul", "Fermuar kontrolü", "Derin temizlik", "Isı yalıtım testi"],
      slug: "bakim-onarim",
    },
    {
      id: "consulting",
      navTitle: "Danışmanlık",
      pageTitle: "Danışmanlık",
      badge: "Ücretsiz",
      badgeColor: "forest" as const,
      icon: "LineChart",
      desc:
        "Hangi kira planının size en çok kazandıracağını birlikte değerlendiririz.",
      longDesc:
        "Kazanç analizi ve plan karşılaştırması. Kişisel öneri. Tamamen ücretsiz, yüz yüze.",
      benefits: ["Ücretsiz analiz", "Plan karşılaştırma", "Kişisel öneri", "Takip görüşmesi"],
      slug: "danismanlik",
    },
    {
      id: "fleet",
      navTitle: "Kurumsal Program",
      pageTitle: "Kurumsal İş Birliği",
      badge: "B2B",
      badgeColor: "ink" as const,
      icon: "Briefcase",
      desc:
        "Beş ve üzeri kurye için kurumsal filo çanta yönetimi ve özel anlaşma koşulları sunuyoruz.",
      longDesc:
        "Kadıköy'deki kurye firmaları için özel program. Toplu kayıt, fatura, öncelikli servis.",
      benefits: ["Toplu kayıt indirimi", "Fatura kesimi", "Öncelikli servis", "Aylık filo raporu"],
      slug: "kurumsal-program",
    },
  ],

  steps: [
    {
      n: "01",
      title: "Atölyemize gelin.",
      desc: "Koşuyolu Caddesi üzerindeki atölyemize motosikletinizle gelin.",
      detail: "Kadıköy-Moda tramvay hattına iki dakika mesafedeyiz. Önünüzde park imkânı bulunmaktadır.",
      tag: "Ulaşım kolayı",
      icon: "MapPin",
    },
    {
      n: "02",
      title: "Belgelerinizi paylaşın.",
      desc: "Kimlik kartı ve motorsiklet plaka numarası yeterlidir.",
      detail: "Başka bir belgeye gerek yoktur. Kargo firması kuryeleri için şirket yetki belgesi de uygundur.",
      tag: "Sade prosedür",
      icon: "FileCheck",
    },
    {
      n: "03",
      title: "Çantanızı teslim edin.",
      desc: "Ekibimiz çantanızı inceler, barkodlar ve sisteme dahil eder.",
      detail: "Durum tespiti üç dakika sürer. Herhangi bir sorun varsa sizi bilgilendiririz.",
      tag: "Hızlı teslim",
      icon: "Package",
    },
    {
      n: "04",
      title: "Sisteme kaydedelim.",
      desc: "Dijital kayıt ortalama on dakikada tamamlanır. Proje numaranız SMS ile iletilir.",
      detail: "Bilgileriniz güvenli sistemimize işlenir. SMS ile proje numaranızı aldığınızda hazırsınız.",
      tag: "Dijital kayıt",
      icon: "Database",
    },
    {
      n: "05",
      title: "Planınızı seçin.",
      desc: "Günlük, haftalık veya aylık kira planı seçeneklerinden birini tercih edin.",
      detail: "Tüm planlar sözleşmesizdir. İstediğiniz zaman değiştirebilir ya da ayrılabilirsiniz.",
      tag: "Sözleşmesiz",
      icon: "Calendar",
    },
    {
      n: "06",
      title: "Yolculuğunuza başlayın.",
      desc: "Atölyemizden ayrıldığınız anda kira planınız aktif olur ve kazanmaya başlarsınız.",
      detail: "İlk günden itibaren araç projesi avantajlarından tam olarak yararlanabilirsiniz.",
      tag: "Aynı gün aktif",
      icon: "Compass",
    },
  ],

  testimonials: [
    {
      name: "Mehmet S.",
      initials: "MS",
      role: "Yemeksepeti Kurye",
      district: "Kadıköy",
      platform: "Yemeksepeti",
      stars: 5,
      text:
        "Kadıköy'de yıllardır kuryelik yapıyorum. Bu atölyenin açılması benim için çok büyük kolaylık oldu. Personelin tutumu gerçekten farklı.",
    },
    {
      name: "Selin K.",
      initials: "SK",
      role: "Getir Kurye",
      district: "Moda",
      platform: "Getir",
      stars: 5,
      text:
        "Randevu sistemini beğeniyorum. Geliyorum, işim oluyor, gidiyorum. Bekleme yok. Zaman çok değerli bu işte.",
    },
    {
      name: "Emrah Ö.",
      initials: "EÖ",
      role: "Trendyol GO Kurye",
      district: "Koşuyolu",
      platform: "Trendyol GO",
      stars: 5,
      text:
        "Bakım hizmetini düzenli kullanıyorum. Çantamın ömrü fark edilir biçimde uzadı. Tavsiye ederim.",
    },
    {
      name: "Bülent A.",
      initials: "BA",
      role: "Danışmanlık Görüşmesi",
      district: "Beşiktaş",
      platform: "Üsküdar",
      stars: 5,
      text:
        "Beşiktaş'tan gelip danışmanlık aldım. Hangi planın bana uygun olduğunu beraber hesapladık. Çok faydalı bir görüşmeydi.",
    },
  ],

  faq: [
    {
      q: "Walk-in kabul ediyor musunuz?",
      a:
        "Evet, randevusuz ziyaretçileri memnuniyetle karşılıyoruz. Randevulu misafirlerimize öncelik tanımakla birlikte walk-in bekleme süremiz ortalama sekiz dakikadır.",
      category: "Genel",
    },
    {
      q: "Kayıt tamamen ücretsiz mi?",
      a:
        "Evet. Sistem kaydı ve ilk görüşme tamamen ücretsizdir. Yalnızca seçtiğiniz kira planı ücretlidir.",
      category: "Ücretlendirme",
    },
    {
      q: "Kadıköy dışından gelen kuryeler de başvurabilir mi?",
      a:
        "Elbette. Üsküdar, Beşiktaş, Ataşehir ve Maltepe hattından pek çok kuryemiz düzenli olarak atölyemizi ziyaret etmektedir.",
      category: "Genel",
    },
    {
      q: "Kayıt için ne getirmem gerekiyor?",
      a:
        "Kimlik kartınız ve motorsiklet plaka numaranız yeterlidir. Kargo kuryeleri için şirket yetki belgesi de geçerlidir.",
      category: "Belgeler",
    },
    {
      q: "Kira planından çıkmak istediğimde ne yapmalıyım?",
      a:
        "Hiçbir şart aranmamaktadır. İstediğiniz gün çıkış yapabilirsiniz; cezai madde ya da ön bildirim zorunluluğu yoktur.",
      category: "Ücretlendirme",
    },
    {
      q: "Çanta değişiminde ek ücret alınıyor mu?",
      a:
        "Aktif planınız dahilindeki değişim hakkında ek ücret alınmaz. Ayrıntılar için atölyemizle iletişime geçebilirsiniz.",
      category: "Hizmet",
    },
    {
      q: "Kurumsal program için nasıl başvurabiliriz?",
      a:
        "WhatsApp hattımız veya randevu sayfamızdaki kurumsal form aracılığıyla başvurabilirsiniz.",
      category: "Kurumsal",
    },
    {
      q: "Bakım hizmeti ne sıklıkla yaptırılmalı?",
      a:
        "Aylık periyodik bakımı tavsiye ediyoruz. Yoğun kullanım durumunda iki haftada bir daha uygundur.",
      category: "Hizmet",
    },
    {
      q: "Randevu almadan önce soru sormak istiyorum.",
      a:
        "WhatsApp hattımız 7/24 aktiftir. Mesajınızı bırakın, kısa sürede yanıt verelim.",
      category: "Genel",
    },
  ],

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

  bookingSteps: [
    { n: "01", label: "Sizi Tanıyalım" },
    { n: "02", label: "Tarih & Saat" },
    { n: "03", label: "Detaylar" },
    { n: "04", label: "Onay" },
  ],
} as const;

export type Service = (typeof WORKSHOP.services)[number];
export type Step = (typeof WORKSHOP.steps)[number];
export type Testimonial = (typeof WORKSHOP.testimonials)[number];
export type FaqItem = (typeof WORKSHOP.faq)[number];

export const OTHER_WORKSHOPS = [
  { name: "Bağcılar", side: "Avrupa", type: "flagship", href: "https://bagcilar.kuryeproje.com" },
  { name: "Ümraniye", side: "Anadolu", type: "hub", href: "https://umraniye.kuryeproje.com" },
  { name: "Esenyurt", side: "Avrupa", type: "pool", href: "https://esenyurt.kuryeproje.com" },
  { name: "Gaziosmanpaşa", side: "Avrupa", type: "hub", href: "https://gop.kuryeproje.com" },
  { name: "Sultanbeyli", side: "Anadolu", type: "pool", href: "https://sultanbeyli.kuryeproje.com" },
  { name: "Pendik", side: "Anadolu", type: "b2b", href: "https://pendik.kuryeproje.com" },
] as const;
