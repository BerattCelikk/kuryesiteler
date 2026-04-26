"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

const SUBJECTS = ["Genel Bilgi", "Randevu", "B2B", "Şikayet"] as const;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: "contact" as const },
  });
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: ContactInput) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, type: "contact" }),
    });
    const json = await res.json();
    if (!res.ok) {
      toast.error(json.error ?? "Bir hata oluştu");
      return;
    }
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div className="card-base p-7 text-center">
        <CheckCircle2 className="w-10 h-10 text-teal-500 mx-auto" />
        <h3 className="mt-3 fluid-lg text-text-primary">Mesajınız Alındı</h3>
        <p className="mt-2 text-text-muted">
          En kısa sürede size dönüş yapacağız.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-base p-7 space-y-4">
      <div>
        <label className="text-sm font-display font-medium text-text-secondary">Ad Soyad</label>
        <input
          {...register("name")}
          className="mt-1.5 w-full h-11 px-3.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
        />
        {errors.name && <p className="text-xs text-danger mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="text-sm font-display font-medium text-text-secondary">Telefon</label>
        <input
          {...register("phone")}
          placeholder="+90 5xx xxx xx xx"
          className="mt-1.5 w-full h-11 px-3.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white font-mono text-sm"
        />
        {errors.phone && <p className="text-xs text-danger mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="text-sm font-display font-medium text-text-secondary">Konu</label>
        <select
          {...register("subject")}
          defaultValue=""
          className="mt-1.5 w-full h-11 px-3.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
        >
          <option value="" disabled>
            Seçin...
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.subject && <p className="text-xs text-danger mt-1">{errors.subject.message}</p>}
      </div>
      <div>
        <label className="text-sm font-display font-medium text-text-secondary">Mesajınız</label>
        <textarea
          {...register("message")}
          rows={4}
          className="mt-1.5 w-full px-3.5 py-2.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
        />
        {errors.message && <p className="text-xs text-danger mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" variant="primary" size="lg" loading={isSubmitting} fullWidth>
        Gönder
      </Button>
    </form>
  );
}

export default ContactForm;
