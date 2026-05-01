export const WORKSHOP = {
  name: "Bağcılar Atölyesi",
  fullName: "Kurye Araç Proje — Bağcılar Atölyesi",
  district: "Bağcılar",
  city: "İstanbul",
  side: "Avrupa Yakası",
  segment: "flagship" as const,
  tagline: "Kurye Çantanı Yasallaştır, Cezasız Çalış",
  address: "Mahmutbey Mah. E-5 Üzeri, Bağcılar / İstanbul",
  neighborhood: "Bağcılar, Kirazlı",
  street: "Mahmutbey Mahallesi",
  description:
    "E-5 üzerinde, Kirazlı metro durağına 2 dakika yürüme mesafesinde kurye araç projesi atölyesi",
  coordinates: { lat: 41.0442, lng: 28.8394 },
  // TODO: Müşteri gerçek numarayı verene kadar placeholder
  phone: "+90 (212) 000 00 00",
  phoneRaw: "+902120000000",
  // TODO: Müşteri gerçek WhatsApp numarasını verene kadar placeholder
  whatsapp: "+90 530 000 00 00",
  whatsappRaw: "905300000000",
  email: "bagcilar@kuryearacproje.com",
  instagram: "@kuryearacproje.bagcilar",
  googleMapsUrl: "https://maps.google.com/?q=41.0442,28.8394",
  mapUrl: "https://maps.google.com/?q=41.0442,28.8394",
  hours: {
    weekday: { open: "09:00", close: "19:00", label: "Hafta içi" },
    weekend: { open: "10:00", close: "17:00", label: "Cumartesi" },
    holiday: { open: "—", close: "—", label: "Pazar / Resmi tatil" },
  },
  openHour: 9,
  closeHour: 19,
  transit: [
    { type: "metro", icon: "Train", label: "Kirazlı (M1B)", detail: "2 dk yürüyüş" },
    { type: "bus", icon: "Bus", label: "E-5 tüm hatlar", detail: "Direkt bağlantı" },
    { type: "moto", icon: "Bike", label: "Park alanı", detail: "Önünde ücretsiz" },
  ],
  timeSlots: [
    "09:00 – 11:00",
    "11:00 – 13:00",
    "13:00 – 15:00",
    "15:00 – 17:00",
    "17:00 – 19:00",
  ] as const,
  platforms: ["Trendyol", "Getir", "Yemeksepeti", "Migros", "Diğer"] as const,
  priority: 1,
};

export const STATS = [
  { key: "projects", value: 2840, suffix: "+", label: "Tamamlanan Proje" },
  { key: "duration", value: 45, suffix: " dk", label: "Ortalama İşlem Süresi" },
  { key: "satisfaction", value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
  { key: "experience", value: 7, suffix: "+", label: "Yıllık Deneyim" },
] as const;

export const SERVICES = [
  {
    iconName: "ShoppingBasket",
    title: "Motosiklet Sepeti Projesi",
    description:
      "Yan sepet montajınız için TSE onaylı mühendis imzalı resmi proje çizimi. Ruhsata işletme şartı olan tüm belgeler hazırlanır.",
    badge: "TSE Onaylı",
    badgeColor: "orange" as const,
  },
  {
    iconName: "Box",
    title: "Topcase Ruhsata İşletme",
    description:
      "Trendyol, Getir, Yemeksepeti kutularınızı ve büyük hacimli topcase çantaları yasal hale getiriyoruz. Ceza riskini sıfırlayın.",
    badge: "Cezasız",
    badgeColor: "green" as const,
  },
  {
    iconName: "Backpack",
    title: "Arka Çanta Projesi",
    description:
      "Ticari amaçlı veya kalıcı montajlı arka çantalar tadilat kapsamındadır. Projenizi 15 dakikada çiziyoruz.",
    badge: "15 Dakika",
    badgeColor: "blue" as const,
  },
  {
    iconName: "ShieldCheck",
    title: "TÜVTÜRK Hazırlığı",
    description:
      "Projemizle birlikte TÜVTÜRK muayenesine hazır geliyorsunuz. Ret riski minimuma indirilmiş, kontrol listesi tamamlanmış.",
    badge: "Hazırlık",
    badgeColor: "orange" as const,
  },
  {
    iconName: "Stamp",
    title: "Noter İşlemleri Danışmanlığı",
    description:
      "Atölyemiz noter ve TÜVTÜRK'e yakın konumda. İşlem sırasını ve gerekli belgeleri önceden planlıyoruz.",
    badge: "Yakın Konum",
    badgeColor: "blue" as const,
  },
  {
    iconName: "BadgeCheck",
    title: "Platform Uygunluk Kontrolü",
    description:
      "Trendyol, Getir, Migros gibi platformların standart kutularının işlenip işlenmeyeceğini ücretsiz kontrol ediyoruz.",
    badge: "Ücretsiz",
    badgeColor: "green" as const,
  },
] as const;

export const HOW_IT_WORKS = [
  {
    iconName: "MessageCircle",
    title: "WhatsApp ile Ön Kontrol",
    description:
      "Motorunuzun ve çantanızın 3 fotoğrafını WhatsApp'tan bize gönderin. Uzman ekibimiz uygunluk kontrolünü ücretsiz yapar.",
  },
  {
    iconName: "MapPin",
    title: "Atölyeye Gelin",
    description:
      "Randevu alarak Bağcılar atölyemize gelin. E-5 üzerindeyiz, Kirazlı metro çıkışından yürüme mesafesinde.",
  },
  {
    iconName: "ClipboardCheck",
    title: "15 Dakikada Proje",
    description:
      "TSE onaylı mühendislerimiz proje çizimini ortalama 15 dakikada tamamlar. Belgeleriniz anında hazır olur.",
  },
  {
    iconName: "ShieldCheck",
    title: "TÜVTÜRK Muayenesi",
    description:
      "Hazırladığımız projeyle TÜVTÜRK'e gidiyorsunuz. Ekibimiz süreç hakkında sizi adım adım bilgilendirir.",
  },
  {
    iconName: "FileCheck",
    title: "Noter ve Ruhsat Güncelleme",
    description:
      "Son adımda noter işlemi tamamlanır, araç tescil belgeniz güncellenir. Artık tamamen yasal ve cezasızsınız.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Motosiklet çantamı ruhsata işletmem şart mı?",
    answer:
      "Evet. Ticari amaçlı, kalıcı montajlı veya büyük hacimli çanta ve kutular yasal olarak tadilat sayılır. Ruhsata işlenmemiş araçlar TÜVTÜRK muayenesinde kusurlu çıkar ve trafikte ceza riski doğurur. Trendyol, Getir, Yemeksepeti gibi platform kutularının büyük çoğunluğu bu kapsama girer.",
  },
  {
    question: "İşlem ne kadar sürer?",
    answer:
      "Proje çizimi ortalama 15 dakika sürer. Atölyeden çıktıktan sonra TÜVTÜRK ve noter işlemleri de aynı gün tamamlanabilir. Doğru hazırlıkla toplam süreç yaklaşık 1—2 saat içinde biter.",
  },
  {
    question: "Toplam maliyet ne kadar?",
    answer:
      "Maliyet; proje ofisi ücreti + güncel TÜVTÜRK muayene bedeli + noter ücreti toplamından oluşur. Kesin fiyat için WhatsApp'tan fotoğraf gönderin, aynı gün size özel teklif verelim. Gizli ücret yoktur.",
  },
  {
    question: "Hangi marka ve modeller için proje çizebiliyorsunuz?",
    answer:
      "Honda Dio, Activa, PCX, Yamaha NMAX, XMAX, Sym, Kymco ve diğer tüm kurye yoğun modeller dahil geniş bir yelpazede çalışıyoruz. Modeliniz seri tadilat kapsamındaysa TSE AKM ücreti oluşmaz, maliyet düşer. Emin olmak için önce ön kontrol yaptırın.",
  },
  {
    question: "Trendyol veya Getir kutusu için de proje gerekiyor mu?",
    answer:
      "Genellikle evet. Platform standart kutuları kalıcı montajlı ve büyük hacimli olduğundan tadilat kapsamına girer. Ancak her model ve kutu kombinasyonu farklı olabilir. Ücretsiz ön kontrolle netleştirelim.",
  },
  {
    question: "Bağcılar dışından gelebilir miyim?",
    answer:
      "Elbette. E-5 üzerindeki konumumuz İstanbul'un her yakasından ulaşılabilir. Avrupa Yakası kuryelerinin büyük çoğunluğu zaten E-5 güzergahında. Kirazlı metro ile de direkt ulaşım var.",
  },
  {
    question: "TÜVTÜRK'te ret yersem ne olur?",
    answer:
      "Projemiz TÜVTÜRK gerekliliklerine göre hazırlandığı için ret riski minimumdur. Nadir durumlarda projeden kaynaklanan bir hata tespit edilirse revizyon sürecini biz yönetiriz.",
  },
  {
    question: "Aynı gün işlem garanti midir?",
    answer:
      "TÜVTÜRK ve noter yoğunluğuna bağlı olmakla birlikte, sabah erkenden atölyeye geldiğinizde büyük çoğunlukla aynı gün tüm işlemleri tamamlamak mümkündür. Randevu alarak gelmeniz süreci hızlandırır.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Mehmet K.",
    platform: "Trendyol Kurye",
    rating: 5,
    text: "2 yıldır Trendyol kuryesiyim, kutumu hiç işletmemiştim. Ceza yemeden önce buraya geldim. 15 dakikada proje bitti, aynı gün TÜVTÜRK ve noter. Artık rahat çalışıyorum.",
  },
  {
    name: "Serkan Y.",
    platform: "Getir Kurye",
    rating: 5,
    text: "Kirazlı'dan metroyla geldim, 10 dakikada atölyedeydim. Ekip çok bilgili, ne yapılacağını adım adım anlattılar. Öğleden önce her şey bitmişti.",
  },
  {
    name: "Fatih D.",
    platform: "Yemeksepeti Kurye",
    rating: 5,
    text: "Daha önce başka yerde fiyat aldım, çok karmaşık gelmişti. Burada hem uygun fiyat hem de her şeyi kendileri yönettiler. Tavsiye ederim.",
  },
  {
    name: "Onur T.",
    platform: "Migros Hızlı Kurye",
    rating: 5,
    text: "Büyük topcase kullanıyordum, işletmem gerektiğini bilmiyordum. WhatsApp'tan fotoğraf gönderdim, aynı gün geldim hallettim. Süper.",
  },
] as const;

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
