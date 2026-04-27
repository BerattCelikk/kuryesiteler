"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { b2bSchema, type B2BInput, type B2BOutput } from "@/lib/validations";
import Button from "@/components/ui/Button";

const inputCls =
  "w-full bg-paper border border-[var(--border-light)] rounded-md px-4 py-3 font-body text-[15px] text-ink placeholder:text-text-subtle focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20 transition-colors";
const labelCls = "block font-mono text-[11px] uppercase tracking-[0.12em] text-forest-500 mb-2";
const errCls = "mt-1.5 font-body text-[12px] text-[#8B2520]";

export default function B2BForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<B2BInput, unknown, B2BOutput>({
    resolver: zodResolver(b2bSchema),
  });

  async function onSubmit(values: B2BOutput) {
    await new Promise((r) => setTimeout(r, 600));
    console.log("b2b", values);
    toast.success("Başvurunuz alındı. Kısa sürede dönüş yapacağız.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label className={labelCls} htmlFor="companyName">Şirket Adı</label>
        <input id="companyName" className={inputCls} {...register("companyName")} placeholder="Şirketinizin tam adı" />
        {errors.companyName && <p className={errCls}>{errors.companyName.message}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="contactName">İlgili Kişi</label>
        <input id="contactName" className={inputCls} {...register("contactName")} placeholder="Ad Soyad" />
        {errors.contactName && <p className={errCls}>{errors.contactName.message}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="phone">Telefon</label>
        <input id="phone" className={inputCls} {...register("phone")} placeholder="+90 ..." />
        {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="email">E-posta</label>
        <input id="email" className={inputCls} {...register("email")} placeholder="ornek@e-posta.com" />
        {errors.email && <p className={errCls}>{errors.email.message}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="fleetSize">Filo Büyüklüğü</label>
        <input id="fleetSize" type="number" min={1} className={inputCls} {...register("fleetSize")} placeholder="Aktif kurye sayısı" />
        {errors.fleetSize && <p className={errCls}>{errors.fleetSize.message}</p>}
      </div>
      <div className="md:col-span-2">
        <label className={labelCls} htmlFor="notes">Açıklama (opsiyonel)</label>
        <textarea id="notes" rows={4} className={inputCls} {...register("notes")} placeholder="İhtiyaçlarınızı kısaca paylaşır mısınız?" />
        {errors.notes && <p className={errCls}>{errors.notes.message}</p>}
      </div>
      <div className="md:col-span-2 flex justify-end">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Gönderiliyor…" : "Başvuruyu Gönderin"}
        </Button>
      </div>
    </form>
  );
}
