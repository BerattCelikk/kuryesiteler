import type { Metadata } from "next";
import { WORKSHOP } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Kurye Araç Proje — Bağcılar Atölyesi 6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
};

const lastUpdated = "2026-05-01";

export default function KvkkPage() {
  return (
    <main className="bg-[#0A0A0A] pt-28">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-12 text-center">
          <div className="flex justify-center">
            <SectionLabel>Yasal</SectionLabel>
          </div>
          <h1 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            KVKK Aydınlatma Metni
          </h1>
          <p className="mt-3 text-[13px] text-[#555]">
            Son güncelleme: {lastUpdated}
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[#A0A0A0]">
          <p className="rounded-lg border border-[#2A2A2A] bg-[#111111] p-5 text-[14px]">
            Bu aydınlatma metni, 6698 Sayılı Kişisel Verilerin Korunması Kanunu
            (&quot;KVKK&quot;) m. 10 kapsamında, veri sorumlusu sıfatıyla{" "}
            <strong className="text-white">Kurye Araç Proje — Bağcılar Atölyesi</strong>{" "}
            tarafından hazırlanmıştır.
          </p>

          <Section title="1. Veri Sorumlusu">
            <p>
              Veri sorumlusu:{" "}
              <strong className="text-white">Kurye Araç Proje — Bağcılar Atölyesi</strong>
            </p>
            <p>Adres: {WORKSHOP.address}</p>
            <p>E-posta: {WORKSHOP.email}</p>
            <p>Telefon: {WORKSHOP.phone}</p>
          </Section>

          <Section title="2. Toplanan Kişisel Veriler">
            <p>Aşağıdaki kişisel verileriniz, randevu ve hizmet süreci kapsamında toplanır:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>Kimlik verileri: ad, soyad</li>
              <li>İletişim verileri: cep telefonu, e-posta adresi</li>
              <li>Randevu verileri: seçilen tarih, saat, çalıştığınız platform, çanta sayısı</li>
              <li>
                Görsel veriler: ön kontrol için tarafınızdan iletilen araç ve çanta
                fotoğrafları (yalnızca isteğe bağlı olarak)
              </li>
              <li>Trafik verileri: IP adresi, tarayıcı bilgisi (güvenlik amaçlı)</li>
              <li>
                Araç tescil verileri: araç ruhsatı, motosiklet plakası, şasi numarası
                (yalnızca atölyeye geldiğinizde proje hazırlığı sırasında)
              </li>
            </ul>
          </Section>

          <Section title="3. Verilerin İşlenme Amacı">
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Randevu oluşturma, iletişim ve hatırlatma yapma</li>
              <li>Sepet, topcase ve arka çanta projelerinin hazırlanması</li>
              <li>TÜVTÜRK muayene ve noter işlemlerinin koordinasyonu</li>
              <li>Mevzuat gereği zorunlu kayıt ve belge tutma</li>
              <li>Hizmet kalitesinin iyileştirilmesi ve müşteri memnuniyeti analizi</li>
              <li>Ön kontrol talebinizin değerlendirilmesi</li>
            </ul>
          </Section>

          <Section title="4. Verilerin Aktarıldığı Taraflar">
            <p>
              Kişisel verileriniz aşağıdaki taraflara, yalnızca işbu amaçlarla sınırlı
              olmak üzere aktarılabilir:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong className="text-white">Yetkili kamu kurumları:</strong> TÜVTÜRK,
                noterlik, trafik tescil müdürlükleri (mevzuat gereği)
              </li>
              <li>
                <strong className="text-white">TSE onaylı mühendislik birimleri:</strong>{" "}
                proje çiziminin imzalanması için
              </li>
              <li>
                <strong className="text-white">Hizmet sağlayıcıları:</strong> sunucu, SMS
                ve e-posta altyapı sağlayıcıları (gizlilik sözleşmeleri kapsamında)
              </li>
            </ul>
            <p className="mt-3">
              Verileriniz yurt dışına aktarılmaz. Reklam ve pazarlama amacıyla üçüncü
              kişilerle paylaşılmaz.
            </p>
          </Section>

          <Section title="5. Veri Saklama Süresi">
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Randevu kayıtları: hizmetin tamamlanmasından sonra 2 yıl</li>
              <li>Proje belgeleri: ilgili mevzuat gereği 10 yıl</li>
              <li>İletişim verileri: ilgili kişi talep ederse derhal silinir</li>
              <li>Sunucu log&apos;ları: yasal yükümlülük süresince</li>
            </ul>
          </Section>

          <Section title="6. İlgili Kişi Hakları (KVKK m. 11)">
            <p>Veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içi/yurt dışı aktarıldığı kişileri bilme</li>
              <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK m. 7 kapsamında silinmesini veya yok edilmesini isteme</li>
              <li>İşlemenin yalnızca otomatik sistemlerle yapılması nedeniyle aleyhinize sonuç çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işleme nedeniyle uğradığınız zararın giderilmesini talep etme</li>
            </ul>
          </Section>

          <Section title="7. İletişim ve Başvuru">
            <p>
              KVKK m. 13 uyarınca haklarınızı kullanmak için aşağıdaki kanallardan
              başvurabilirsiniz:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>E-posta: {WORKSHOP.email}</li>
              <li>Yazılı başvuru: {WORKSHOP.address}</li>
            </ul>
            <p className="mt-3">
              Başvurunuz en geç 30 gün içinde ücretsiz olarak sonuçlandırılır. KVKK m. 13/2
              uyarınca işlemin ayrıca bir maliyet gerektirmesi halinde Kurul tarafından
              belirlenen tarife uygulanır.
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
