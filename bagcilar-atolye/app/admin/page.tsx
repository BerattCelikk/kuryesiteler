import type { Metadata } from "next";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ key?: string }>;
}

export default async function AdminPage({ searchParams }: PageProps) {
  const { key } = await searchParams;
  const adminKey = process.env.ADMIN_KEY;

  if (!adminKey || key !== adminKey) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6">
        <div className="rounded-2xl border border-[#EF4444]/30 bg-[#EF4444]/5 p-10 text-center">
          <div className="text-7xl font-black text-[#EF4444]">403</div>
          <h1 className="mt-4 text-2xl font-black text-white">Erişim reddedildi</h1>
          <p className="mt-3 text-sm text-[#A0A0A0]">
            Bu sayfayı görüntülemek için geçerli bir anahtar gerekir.
          </p>
        </div>
      </main>
    );
  }

  const registrations = await db.registration.findMany({
    orderBy: { createdAt: "desc" },
  });

  const formatDateTime = (d: Date) =>
    new Intl.DateTimeFormat("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(d);

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-12">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
              Admin
            </div>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-white">
              Randevular
            </h1>
          </div>
          <div className="rounded-lg border border-[#2A2A2A] bg-[#111111] px-4 py-2 text-right">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#A0A0A0]">
              Toplam Kayıt
            </div>
            <div className="text-2xl font-black text-[#FF6B00]">
              {registrations.length}
            </div>
          </div>
        </header>

        <div className="overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#111111]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="bg-[#1A1A1A] text-[11px] uppercase tracking-wider text-[#A0A0A0]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Ad Soyad</th>
                  <th className="px-4 py-3 font-semibold">Telefon</th>
                  <th className="px-4 py-3 font-semibold">Tarih</th>
                  <th className="px-4 py-3 font-semibold">Saat</th>
                  <th className="px-4 py-3 font-semibold">Platform</th>
                  <th className="px-4 py-3 font-semibold">Çanta Sayısı</th>
                  <th className="px-4 py-3 font-semibold">Kayıt Tarihi</th>
                </tr>
              </thead>
              <tbody>
                {registrations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-12 text-center text-[#555]"
                    >
                      Henüz kayıt yok.
                    </td>
                  </tr>
                ) : (
                  registrations.map((r) => (
                    <tr
                      key={r.id}
                      className="border-t border-[#2A2A2A] text-white transition hover:bg-[#1A1A1A]"
                    >
                      <td className="px-4 py-3 font-semibold">
                        {r.firstName} {r.lastName}
                      </td>
                      <td className="px-4 py-3 font-mono text-[#A0A0A0]">
                        {r.phone}
                      </td>
                      <td className="px-4 py-3">{r.date}</td>
                      <td className="px-4 py-3">{r.time}</td>
                      <td className="px-4 py-3 text-[#FF6B00]">{r.platform}</td>
                      <td className="px-4 py-3 text-center">{r.bagCount}</td>
                      <td className="px-4 py-3 text-[#A0A0A0]">
                        {formatDateTime(r.createdAt)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
