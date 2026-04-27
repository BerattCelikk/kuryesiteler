"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactForm } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";

const inputCls =
  "w-full bg-white border border-gray-300 rounded-md px-3.5 py-2.5 text-[14px] text-gray-900 focus:border-lime-500 focus:outline-none focus:shadow-[0_0_0_3px_rgba(108,192,36,0.15)] transition-all";

export function ContactFormLight() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "Genel" },
  });

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type: "contact", payload: data }),
      });
      if (res.ok) {
        toast.success("Mesajınız iletildi.");
        reset();
      } else toast.error("Gönderilemedi.");
    } catch {
      toast.error("Bağlantı hatası.");
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="widget p-6 flex flex-col gap-3">
      <span className="precision-label">İletişim Formu</span>
      <div className="grid grid-cols-2 gap-3">
        <input className={inputCls} placeholder="Ad Soyad" {...register("name")} />
        <input className={inputCls} placeholder="Telefon" {...register("phone")} />
      </div>
      <select className={inputCls} {...register("subject")}>
        <option value="Genel">Genel Soru</option>
        <option value="Randevu">Randevu</option>
        <option value="B2B">B2B / Filo</option>
        <option value="Bakım">Bakım</option>
      </select>
      <textarea rows={4} className={inputCls + " resize-none"} placeholder="Mesaj" {...register("message")} />
      {(errors.name || errors.phone || errors.message) && (
        <span className="text-[11px] text-red-600 font-mono">
          {errors.name?.message || errors.phone?.message || errors.message?.message}
        </span>
      )}
      <Button variant="primary" size="md" type="submit" fullWidth disabled={submitting}>
        {submitting ? "Gönderiliyor..." : "Gönder"}
      </Button>
    </form>
  );
}
