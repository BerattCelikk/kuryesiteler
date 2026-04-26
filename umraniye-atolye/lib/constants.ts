import type {
  WorkshopStat,
  WorkshopService,
  WorkshopStep,
  TransitOption,
  Testimonial,
  FAQItem,
  OtherWorkshop,
} from "@/types";

export const WORKSHOP = {
  name: "Ümraniye Atölyesi",
  district: "Ümraniye",
  side: "Anadolu Yakası",
  segment: "hub",
  tagline: "Anadolu Yakası'nın Lojistik Merkezi",
  shortDesc: "Ümraniye'de motorlu kurye çanta projesi atölyesi.",
  longDesc:
    "TEM ve D100 güzergahında, kargo ve yemek kuryelerine tam hizmet veren Anadolu Yakası'nın en büyük araç projesi atölyesi.",
  founded: "2022",
  teamSize: "12 uzman",

  heroHeadline: {
    eyebrow: "ANADOLU YAKASI • ÜMRANİYE ATÖLYESİ",
    line1: "Çantanı Getir,",
    line2: "Projeye Dahil Et.",
    accent: "Projeye Dahil Et.",
  },

  address: "Alemdağ Caddesi, Ümraniye, İstanbul",
  neighborhood: "Ümraniye Merkez",
  street: "Alemdağ Caddesi",
  postalCode: "34760",
  coordinates: { lat: 41.0167, lng: 29.1167 },
  phone: "+90 (216) 000 00 00",
  phoneRaw: "+902160000000",
  whatsapp: "+90 530 000 00 01",
  whatsappRaw: "+905300000001",
  instagram: "@kuryeproje.umraniye",
  email: "umraniye@kuryeproje.com",
  googleMapsUrl: "https://maps.google.com/?q=41.0167,29.1167",
  waLink: "https://wa.me/905300000001",

  hours: {
    weekday: { open: "08:00", close: "23:00", label: "Hafta içi" },
    weekend: { open: "08:00", close: "23:00", label: "Hafta sonu" },
    holiday: { open: "09:00", close: "22:00", label: "Resmi tatil" },
  },
  openHour: 8,
  closeHour: 23,
  priority: 2,

  transit: [
    { icon: "Train", label: "Ümraniye Metro (M7)", detail: "5 dk yürüyüş", highlight: true },
    { icon: "Route", label: "TEM Otoyolu", detail: "Direkt bağlantı", highlight: false },
    { icon: "Route", label: "D100 (E-5)", detail: "10 dakika", highlight: false },
    { icon: "ParkingCircle", label: "Park Alanı", detail: "Önünde ücretsiz", highlight: false },
  ] satisfies TransitOption[],

  stats: [
    { id: "population", value: 700000, display: "700K+", label: "İlçe Nüfusu", sublabel: "Ümraniye", color: "blue" },
    { id: "couriers", value: 12000, display: "12.000+", label: "Aktif Kurye", sublabel: "kayıtlı", color: "teal" },
    { id: "warehouses", value: 47, display: "47+", label: "E-ticaret Depo", sublabel: "yakın çevrede", color: "blue" },
    { id: "openTime", value: null, display: "08:00", label: "Açılış Saati", sublabel: "her gün", color: "green" },
  ] satisfies WorkshopStat[],

  services: [
    {
      id: "registration",
      icon: "Package",
      featured: true,
      title: "Çanta Kaydı",
      badge: "Ücretsiz",
      badgeVariant: "success",
      detail: "Kimlik + plaka yeterli",
      desc: "Teslimat çantanızı araç projemize kaydedin. 10 dakikada sistem kaydı, aynı gün aktivasyon.",
      longDesc:
        "Motorlu kurye olarak araç projemize dahil olmak için tek yapmanız gereken Ümraniye atölyemize gelip çantanızı teslim etmek. Ekibimiz çantanızı inceler, sisteme kaydeder ve kira planınızı aktive eder. Tüm süreç ortalama 10 dakika sürer. Kimlik kartı ve motorsiklet plaka bilgisi dışında herhangi bir belge gerekmez.",
      benefits: [
        "Ücretsiz kayıt işlemi",
        "Aynı gün aktivasyon",
        "SMS ile proje numarası",
        "Sözleşmesiz esnek plan",
      ],
      slug: "canta-kaydi",
    },
    {
      id: "b2b",
      icon: "Building2",
      featured: true,
      title: "Kurumsal & Filo",
      badge: "B2B",
      badgeVariant: "blue",
      detail: "Özel anlaşma",
      desc: "Kargo firmaları için toplu filo çanta yönetimi. Özel fiyatlandırma ve öncelikli servis.",
      longDesc:
        "Kargo şirketleri, e-ticaret firmaları ve büyük kurye ağları için özel filo çanta yönetimi sunuyoruz. 5 ve üzeri çanta için toplu kayıt, öncelikli bakım sırası ve ayrılmış hesap yöneticisi hizmetleri mevcuttur.",
      benefits: [
        "5+ çanta için özel fiyat",
        "Ayrılmış hesap yöneticisi",
        "Öncelikli bakım sırası",
        "Aylık filo raporu",
        "Fatura kesimi",
      ],
      slug: "b2b",
    },
    {
      id: "swap",
      icon: "ArrowLeftRight",
      featured: false,
      title: "Çanta Değişim",
      badge: "Hızlı",
      badgeVariant: "teal",
      detail: "Aynı gün teslim",
      desc: "Yıpranan veya hasarlı çantanızı yenisiyle değiştirin. Projede kesintisiz kalın.",
      longDesc:
        "Çantanız yıprandığında veya hasar gördüğünde projeden çıkmanıza gerek yok. Atölyemize gelin, hasarlı çantanızı teslim edin ve aynı gün yeni çantanızla ayrılın. Değişim işlemi 15 dakika sürer.",
      benefits: [
        "Aynı gün değişim",
        "Projede kesinti yok",
        "Tüm marka ve modeller",
        "Ücretsiz hasar tespiti",
      ],
      slug: "canta-degisim",
    },
    {
      id: "service",
      icon: "Settings2",
      featured: false,
      title: "Bakım & Servis",
      badge: "Yerinde",
      badgeVariant: "warning",
      detail: "Randevusuz kabul",
      desc: "Periyodik bakım, derin temizlik, donanım kontrolü. Profesyonel atölye ekibi.",
      longDesc:
        "Çantanızın performansını korumak için periyodik bakım şart. Atölyemizde fermuar kontrolü, iç astar temizliği, dış yüzey bakımı ve ısı yalıtım testi yapıyoruz. Bakım randevusuz, işlem 20-30 dakika.",
      benefits: [
        "Fermuar ve kilit kontrolü",
        "İç astar derin temizliği",
        "Isı yalıtım testi",
        "Dış yüzey koruma",
      ],
      slug: "bakim-servis",
    },
    {
      id: "consulting",
      icon: "BarChart3",
      featured: false,
      title: "Proje Analizi",
      badge: "Danışmanlık",
      badgeVariant: "neutral",
      detail: "Yüz yüze görüşme",
      desc: "Kazanç analizi ve plan karşılaştırması. En doğru araç projesi seçimini birlikte yapın.",
      longDesc:
        "Hangi kira planının size en uygun olduğunu, kazancınızı nasıl optimize edebileceğinizi ve araç projesi sistemini en iyi şekilde kullanmayı yüz yüze konuşuyoruz. Ücretsiz danışmanlık seansı için randevu alın.",
      benefits: [
        "Ücretsiz kazanç analizi",
        "Plan karşılaştırması",
        "Kişiselleştirilmiş öneri",
        "Takip görüşmesi",
      ],
      slug: "proje-analizi",
    },
    {
      id: "walkin",
      icon: "DoorOpen",
      featured: false,
      title: "Walk-in Servis",
      badge: "Anında",
      badgeVariant: "success",
      detail: "Ort. bekleme: 8 dk",
      desc: "Randevusuz kabul. Yoğun saatlerde SMS ile sıra bildirimi. Bekleme süresi ~8 dk.",
      longDesc:
        "Tüm hizmetlerimiz için randevu şart değil. Çalışma saatlerimiz içinde istediğiniz zaman gelebilirsiniz. Yoğun saatlerde (08:00-10:00) SMS sıra sistemi aktif olur.",
      benefits: ["7 gün açık", "Walk-in kabul", "SMS sıra sistemi", "Ortalama 8 dk bekleme"],
      slug: null,
    },
  ] satisfies WorkshopService[],

  steps: [
    {
      n: "01",
      icon: "MapPin",
      title: "Atölyeye Gel",
      desc: "Alemdağ Caddesi'ne gel. Metro veya TEM'den 5 dakika.",
      tag: "5 dk mesafe",
      longDesc:
        "Ümraniye Merkez'de Alemdağ Caddesi üzerindeki atölyemize ulaşmak çok kolay. Ümraniye Metro (M7) durağından yürüyerek 5 dakika, TEM çıkışından araçla 5 dakika mesafedeyiz. Atölye önünde geniş motorsiklet park alanı mevcuttur.",
    },
    {
      n: "02",
      icon: "FileCheck",
      title: "Belgeleri Hazırla",
      desc: "Kimlik kartı ve plaka. Kargo kuryeleri için şirket belgesi.",
      tag: "2 belge",
      longDesc:
        "Kayıt için gerekli belgeler son derece basit tutulmuştur: Nüfus cüzdanı veya ehliyet ile motorsiklet plakası. Kargo şirketi adına başvuruyorsanız ek olarak şirket yetki belgesi veya vergi levhası gerekir.",
    },
    {
      n: "03",
      icon: "ScanBarcode",
      title: "Çantanı Teslim Et",
      desc: "Ekibimiz inceler, barkodlar ve kayda hazırlar.",
      tag: "3 dk",
      longDesc:
        "Çantanızı teslim aldığımızda ekibimiz önce kısa bir durum tespiti yapar: dış yüzey, fermuar, ısı yalıtımı kontrol edilir. Sorun varsa sizi bilgilendiririz. Sonra çantaya proje barkodu eklenir ve sistem kaydı başlar.",
    },
    {
      n: "04",
      icon: "Database",
      title: "Sistem Kaydı",
      desc: "Dijital kaydınız oluşturulur. Proje numaranız SMS ile gelir.",
      tag: "10 dk toplam",
      longDesc:
        "Çantanızın bilgileri dijital sistemimize işlenir. Adınız, plaka numaranız, çanta tipi ve kira planı bilgileri kayıt altına alınır. İşlem tamamlandığında cep telefonunuza proje numaranız ve aktivasyon bilgisi SMS ile gelir.",
    },
    {
      n: "05",
      icon: "ListChecks",
      title: "Plan Seç",
      desc: "Günlük, haftalık veya aylık kira planından birini seç.",
      tag: "Sözleşmesiz",
      longDesc:
        "Üç farklı kira planından size en uygun olanı seçebilirsiniz. Tüm planlar sözleşmesiz olup istediğiniz zaman değiştirebilirsiniz. Günlük plan tam esneklik sağlar, aylık plan en ekonomik seçenektir.",
    },
    {
      n: "06",
      icon: "Zap",
      title: "Aktif Ol",
      desc: "Kira planın aynı gün başlar. Atölyeden çıkışta kazanıyorsun.",
      tag: "Aynı gün",
      longDesc:
        "Kayıt işleminin ardından kira planınız anında aktive olur. Atölyemizden çıktığınız anda araç projesi avantajlarından yararlanmaya başlarsınız. Herhangi bir sorunuzda destek hattımız 7/24 hizmetinizdedir.",
    },
  ] satisfies WorkshopStep[],

  testimonials: [
    {
      name: "Emre T.",
      initials: "ET",
      role: "Trendyol GO Kurye",
      district: "Ümraniye",
      platform: "Trendyol GO",
      stars: 5,
      text: "Depodan çıkışta uğruyorum, 10 dakikada her şey tamam. Sistem çok organize, personel çok bilgili.",
    },
    {
      name: "Bekir S.",
      initials: "BS",
      role: "Getir Kurye",
      district: "Sultanbeyli",
      platform: "Getir",
      stars: 5,
      text: "Sultanbeyli'den geliyorum ama en yakın ve en iyi atölye burası. TEM'den gelince çok kolay.",
    },
    {
      name: "Ahmet Y.",
      initials: "AY",
      role: "Kargo Kurye",
      district: "Kartal",
      platform: "Yurtiçi Kargo",
      stars: 5,
      text: "Kargo çantası için gelmiştim, B2B programdan haberdar ettiler. Şimdi 3 çantam projede.",
    },
    {
      name: "Semih K.",
      initials: "SK",
      role: "Yemeksepeti Kurye",
      district: "Çekmeköy",
      platform: "Yemeksepeti",
      stars: 5,
      text: "Bakım servisini denedim, çantam yeni gibi oldu. Artık düzenli geliyorum periyodik bakım için.",
    },
    {
      name: "Osman D.",
      initials: "OD",
      role: "MNG Kargo Kurye",
      district: "Pendik",
      platform: "MNG Kargo",
      stars: 5,
      text: "B2B anlaşması yaptık. 8 kurye arkadaşımız birlikte kayıt oldu, harika fiyat ve servis aldık.",
    },
  ] satisfies Testimonial[],

  faq: [
    {
      q: "Ümraniye atölyesi kargo kuryelerine de hizmet veriyor mu?",
      a: "Evet. Yemek, market ve kargo kuryelerinin tamamına hizmet veriyoruz. Kargo kuryeleri için özel B2B planlarımız da mevcut.",
      category: "Genel",
    },
    {
      q: "TEM veya D100'den gelindiğinde park yeri var mı?",
      a: "Evet, atölyemizin önünde geniş motorsiklet park alanı var. TEM çıkışından yaklaşık 5 dakika mesafedeyiz.",
      category: "Saat & Ulaşım",
    },
    {
      q: "Kayıt için hangi belgeler gerekiyor?",
      a: "Kimlik kartı ve motorsiklet plakası yeterlidir. Kargo kuryesi iseniz şirket belgesi de isteyebiliriz.",
      category: "Belgeler",
    },
    {
      q: "Walk-in bekleme süresi ne kadar?",
      a: "Ortalama 8 dakika. Yoğun saatlerde SMS ile sıra bildirimi yapıyoruz.",
      category: "Saat & Ulaşım",
    },
    {
      q: "B2B ve kurumsal filo anlaşmaları için nasıl başvurabilirim?",
      a: "WhatsApp hattımızdan veya randevu sayfasından 'Kurumsal' seçeneğini işaretleyerek başvurabilirsiniz.",
      category: "B2B",
    },
    {
      q: "Ümraniye dışından gelenler de başvurabilir mi?",
      a: "Kesinlikle. Sultanbeyli, Kartal, Pendik ve Kadıköy hattından pek çok kuryemiz atölyemizi tercih ediyor.",
      category: "Genel",
    },
    {
      q: "Çanta değişiminde ek ücret var mı?",
      a: "Kira planınız aktifken hasar kaynaklı değişimler planınıza dahildir. Detaylar için atölyemize gelin.",
      category: "Fiyat",
    },
    {
      q: "Kira planından çıkmak ne kadar sürer?",
      a: "Sözleşmesiz sistemimizdeyiz. İstediğiniz gün çıkış yapabilirsiniz, cezai şart uygulanmaz.",
      category: "Fiyat",
    },
    {
      q: "Birden fazla çantam olabilir mi?",
      a: "Evet. Her çanta için ayrı kayıt ve plan seçimi yapılır. B2B kapsamında toplu kayıt için iletişime geçin.",
      category: "B2B",
    },
    {
      q: "Destek için nasıl ulaşabilirim?",
      a: "WhatsApp, telefon veya atölyemize walk-in olarak ulaşabilirsiniz. 7/24 WhatsApp destek aktiftir.",
      category: "Genel",
    },
  ] satisfies FAQItem[],

  timeSlots: [
    "08:00 – 10:00",
    "10:00 – 12:00",
    "12:00 – 14:00",
    "14:00 – 17:00",
    "17:00 – 20:00",
    "20:00 – 23:00",
  ],
  platforms: ["Getir", "Trendyol GO", "Yemeksepeti", "Yurtiçi Kargo", "MNG Kargo", "Diğer"],
  bagTypes: ["Yemek Çantası", "Kargo Çantası", "Market Çantası", "Termal Çanta"],
};

export const OTHER_WORKSHOPS: OtherWorkshop[] = [
  { name: "Bağcılar", side: "Avrupa", type: "flagship", href: "https://bagcilar.kuryeproje.com" },
  { name: "Esenyurt", side: "Avrupa", type: "hub", href: "https://esenyurt.kuryeproje.com" },
  { name: "Gaziosmanpaşa", side: "Avrupa", type: "hub", href: "https://gop.kuryeproje.com" },
  { name: "Sultanbeyli", side: "Anadolu", type: "pool", href: "https://sultanbeyli.kuryeproje.com" },
  { name: "Pendik", side: "Anadolu", type: "b2b", href: "https://pendik.kuryeproje.com" },
  { name: "Kadıköy", side: "Anadolu", type: "showcase", href: "https://kadikoy.kuryeproje.com" },
];

export const FAQ_CATEGORIES = ["Genel", "Belgeler", "Saat & Ulaşım", "B2B", "Fiyat"];
