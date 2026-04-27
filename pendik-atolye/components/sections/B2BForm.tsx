"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { b2bSchema, type B2BForm as B2BFormType } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";

const inputCls =
  "w-full bg-white border border-gray-300 rounded-md px-3.5 py-2.5 text-[14px] text-gray-900 focus:border-lime-500 focus:outline-none focus:shadow-[0_0_0_3px_rgba(108,192,36,0.15)] transition-all";

export function B2BForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<B2BFormType>({
    resolver: zodResolver(b2bSchema),
    defaultValues: { fleetSize: 5 },
  });

  const onSubmit = async (data: B2BFormType) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type: "b2b", payload: data }),
      });
      const json = await res.json();
      if (json.success) {
        toast.success(`Başvuru alındı: ${json.bookingId}`);
        reset();
      } else toast.error("Hata oluştu.");
    } catch {
      toast.error("Bağlantı hatası.");
    }
    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="widget p-6 flex flex-col gap-3 border-2 border-lime-500/40"
    >
      <input className={inputCls} placeholder="Firma Adı" {...register("company")} />
      {errors.company && <Err>{errors.company.message}</Err>}
      <input className={inputCls} placeholder="Yetkili Kişi" {...register("contactName")} />
      {errors.contactName && <Err>{errors.contactName.message}</Err>}
      <div className="grid grid-cols-2 gap-3">
        <input className={inputCls} placeholder="Telefon" {...register("phone")} />
        <input className={inputCls} placeholder="E-posta" {...register("email")} />
      </div>
      {(errors.phone || errors.email) && (
        <Err>{errors.phone?.message || errors.email?.message}</Err>
      )}
      <input
        type="number"
        min={5}
        className={inputCls}
        placeholder="Filo Büyüklüğü (min 5)"
        {...register("fleetSize", { valueAsNumber: true })}
      />
      {errors.fleetSize && <Err>{errors.fleetSize.message}</Err>}
      <textarea
        rows={3}
        className={inputCls + " resize-none"}
        placeholder="Notlar (opsiyonel)"
        {...register("notes")}
      />
      <Button variant="primary" size="md" type="submit" fullWidth disabled={submitting}>
        {submitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
      </Button>
    </form>
  );
}

function Err({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] text-red-600 font-mono">{children}</span>;
}
