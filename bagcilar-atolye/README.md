# Bağcılar Atölyesi — Kurye Proje

İstanbul Bağcılar E-5 Kirazlı'daki flagship kurye atölyesi için production-ready Next.js sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılır.

## Build

```bash
npm run build
npm start
```

## Çevre Değişkenleri

`.env.local.example` dosyasını `.env.local` olarak kopyalayın. Şu an için zorunlu değişken bulunmuyor.

## Proje Yapısı

```
app/
  layout.tsx            Root layout, metadata, JSON-LD
  page.tsx              Ana sayfa (Hero, Stats, Services, vs.)
  nasil-calisir/        Araç projesi süreç sayfası
  randevu/              Randevu formu
  api/register/         Randevu kayıt POST endpoint
components/
  ui/                   Primitive componentler (Buton, Badge, Harita, ...)
  layout/               Navbar, Footer, ScrollProgress, CursorGlow, Fab
  sections/             Ana sayfa bölümleri
lib/
  constants.ts          Atölye verileri, SSS, testimonials
  utils.ts              cn, phone format, workshop status
  validations.ts        Zod schema (booking + contact)
data/
  registrations.json    (çalışma zamanında oluşturulur)
```

## Diğer Atölyeler

- [Ümraniye](https://umraniye.kuryeproje.com) — Anadolu
- [Esenyurt](https://esenyurt.kuryeproje.com) — Avrupa
- [Gaziosmanpaşa](https://gop.kuryeproje.com) — Avrupa
- [Sultanbeyli](https://sultanbeyli.kuryeproje.com) — Anadolu
- [Pendik](https://pendik.kuryeproje.com) — Anadolu
- [Kadıköy](https://kadikoy.kuryeproje.com) — Anadolu

## Teknoloji

Next.js 16 · React 19 · Tailwind CSS v4 · Framer Motion · Leaflet · Zod · react-hook-form · Radix UI · Lucide Icons
