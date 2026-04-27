"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactForm } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";

export function ContactFormDark() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <input
          {...register("name")}
          placeholder="Ad Soyad"
          className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm text-gray-50 placeholder-gray-500 focus:border-lime-500 focus:outline-none focus:shadow-[0_0_0_3px_rgba(108,192,36,0.15)] transition-all"
        />
        <input
          {...register("phone")}
          placeholder="Telefon"
          className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm text-gray-50 placeholder-gray-500 focus:border-lime-500 focus:outline-none focus:shadow-[0_0_0_3px_rgba(108,192,36,0.15)] transition-all"
        />
      </div>
      {(errors.name || errors.phone) && (
        <span className="text-[11px] text-red-400 font-mono">
          {errors.name?.message || errors.phone?.message}
        </span>
      )}
      <textarea
        {...register("message")}
        rows={3}
        placeholder="Mesaj"
        className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm text-gray-50 placeholder-gray-500 focus:border-lime-500 focus:outline-none focus:shadow-[0_0_0_3px_rgba(108,192,36,0.15)] resize-none transition-all"
      />
      {errors.message && (
        <span className="text-[11px] text-red-400 font-mono">{errors.message.message}</span>
      )}
      <Button variant="primary" size="md" fullWidth type="submit" disabled={submitting}>
        {submitting ? "Gönderiliyor..." : "Gönder"}
      </Button>
    </form>
  );
}
