"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactSchema, type ContactInput } from "@/lib/validations";
import Button from "@/components/ui/Button";

const inputCls =
  "w-full bg-paper border border-[var(--border-light)] rounded-md px-4 py-3 font-body text-[15px] text-ink placeholder:text-text-subtle focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20 transition-colors";
const labelCls = "block font-mono text-[11px] uppercase tracking-[0.12em] text-forest-500 mb-2";
const errCls = "mt-1.5 font-body text-[12px] text-[#8B2520]";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    await new Promise((r) => setTimeout(r, 600));
    console.log("contact", values);
    toast.success("Mesajınız ulaştı. Teşekkür ederiz.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="md:col-span-2">
        <label className={labelCls} htmlFor="fullName">Ad Soyad</label>
        <input id="fullName" className={inputCls} {...register("fullName")} placeholder="Tam adınız" />
        {errors.fullName && <p className={errCls}>{errors.fullName.message}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="phone">Telefon</label>
        <input id="phone" className={inputCls} {...register("phone")} placeholder="+90 ..." />
        {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="email">E-posta (opsiyonel)</label>
        <input id="email" className={inputCls} {...register("email")} placeholder="ornek@e-posta.com" />
        {errors.email && <p className={errCls}>{errors.email.message}</p>}
      </div>
      <div className="md:col-span-2">
        <label className={labelCls} htmlFor="subject">Konu</label>
        <input id="subject" className={inputCls} {...register("subject")} placeholder="Görüşme talebiniz" />
        {errors.subject && <p className={errCls}>{errors.subject.message}</p>}
      </div>
      <div className="md:col-span-2">
        <label className={labelCls} htmlFor="message">Mesajınız</label>
        <textarea id="message" rows={6} className={inputCls} {...register("message")} placeholder="Bize ulaştırmak istediklerinizi paylaşın." />
        {errors.message && <p className={errCls}>{errors.message.message}</p>}
      </div>
      <div className="md:col-span-2 flex justify-end">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Gönderiliyor…" : "Gönderin"}
        </Button>
      </div>
    </form>
  );
}
