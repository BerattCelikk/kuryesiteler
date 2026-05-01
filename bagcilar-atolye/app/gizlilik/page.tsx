import type { Metadata } from "next";
import { WORKSHOP } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Kurye Araç Proje — Bağcılar Atölyesi gizlilik politikası: hangi verileri topluyoruz, çerezler, üçüncü taraf hizmetler ve veri güvenliği.",
};

const lastUpdated = "2026-05-01";

export default function PrivacyPage() {
  return (
    <main className="bg-[#0A0A0A] pt-28">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-12 text-center">
          <div className="flex justify-center">
            <SectionLabel>Yasal</SectionLabel>
          </div>
          <h1 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            Gizlilik Politikası
          </h1>
          <p className="mt-3 text-[13px] text-[#555]">
            Son güncelleme: {lastUpdated}
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[#A0A0A0]">
          <p className="rounded-lg border border-[#2A2A2A] bg-[#111111] p-5 text-[14px]">
            Bu politika,{" "}
            <strong className="text-white">Kurye Araç Proje — Bağcılar Atölyesi</strong>{" "}
            web sitesini ziyaret eden ve hizmetlerimizden yararlanan kullanıcıların
            gizliliğinin nasıl korunduğunu açıklar.
          </p>

          <Section title="1. Hangi Verileri Topluyoruz?">
            <ul className="list-disc space-y-1.5 pl-6">
              <li>
                <strong className="text-white">Doğrudan verdiğiniz bilgiler:</strong> ad,
                soyad, telefon, e-posta, çalıştığınız platform, randevu tarih/saat
                bilgisi, çanta sayısı, tarafınızdan iletilen serbest metin notlar
              </li>
              <li>
                <strong className="text-white">İsteğe bağlı görsel veriler:</strong> ön
                kontrol için yüklediğiniz araç ve çanta fotoğrafları
              </li>
              <li>
                <strong className="text-white">Otomatik toplanan bilgiler:</strong> IP
                adresi, tarayıcı türü, ziyaret tarih/saati ve sayfa yolu (güvenlik ve
                kötüye kullanımı önleme amacıyla)
              </li>
            </ul>
          </Section>

          <Section title="2. Çerezler (Cookies)">
            <p>
              Sitemiz, çalışma için gerekli olan minimum düzeyde teknik çerez kullanır:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong className="text-white">Zorunlu çerezler:</strong> oturum, dil ve
                tema tercihi gibi temel işlevler. Reddedilemez.
              </li>
              <li>
                <strong className="text-white">Analitik çerezler:</strong> ileride
                eklenirse açık rıza ile çalışacaktır. Şu anda kullanılmıyor.
              </li>
              <li>
                <strong className="text-white">Pazarlama çerezleri:</strong>{" "}
                kullanılmıyor.
              </li>
            </ul>
          </Section>

          <Section title="3. Üçüncü Taraf Hizmetler">
            <p>Sitenin işleyişi için aşağıdaki üçüncü taraf hizmetleri kullanıyoruz:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong className="text-white">Harita (OpenStreetMap / CARTO):</strong>{" "}
                atölye konumunu göstermek için.
              </li>
              <li>
                <strong className="text-white">WhatsApp:</strong> tarafınızdan
                başlatıldığında iletişim için. Sohbet içeriği WhatsApp&apos;ın gizlilik
                politikasına tabidir.
              </li>
              <li>
                <strong className="text-white">Sunucu altyapısı:</strong> verileriniz
                yalnızca KVKK ile uyumlu sunucularda saklanır.
              </li>
            </ul>
          </Section>

          <Section title="4. Veri Güvenliği">
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Tüm trafik HTTPS üzerinden şifrelenir.</li>
              <li>API uç noktaları rate-limit ile korunur (saatte azami 5 başvuru / IP).</li>
              <li>
                Yetkisiz erişimi önlemek için yöneticisel veriler tek seferlik şifre ile
                korunur.
              </li>
              <li>
                Olası bir veri ihlali durumunda KVKK m. 12/5 gereği derhal sizinle
                iletişime geçilir ve Kurul&apos;a bildirim yapılır.
              </li>
            </ul>
          </Section>

          <Section title="5. Değişiklik Bildirimi">
            <p>
              Bu gizlilik politikası, mevzuat değişiklikleri ve hizmet güncellemeleri
              nedeniyle dönem dönem güncellenebilir. Önemli değişikliklerde sayfanın
              üstünde &quot;Son güncelleme&quot; tarihi yenilenir; gerektiğinde
              kullanıcılara e-posta veya site içi bildirim gönderilir.
            </p>
          </Section>

          <Section title="6. İletişim">
            <p>
              Gizlilik veya KVKK ile ilgili her türlü soru ve talebiniz için bize
              ulaşabilirsiniz:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>E-posta: {WORKSHOP.email}</li>
              <li>Telefon: {WORKSHOP.phone}</li>
              <li>Adres: {WORKSHOP.address}</li>
            </ul>
            <p className="mt-3">
              Daha ayrıntılı KVKK haklarınız için{" "}
              <a href="/kvkk" className="text-[#FF6B00] underline">
                KVKK Aydınlatma Metni
              </a>{" "}
              sayfasını inceleyiniz.
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-[20px] font-bold text-white">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
