"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { CheckCircle2 } from "lucide-react";
import { b2bSchema, type B2BInput } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

const FLEET_SIZES = ["5-10", "11-20", "21-50", "50+"];

export function B2BForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<B2BInput>({
    resolver: zodResolver(b2bSchema),
    defaultValues: { type: "b2b" as const },
  });
  const [done, setDone] = useState(false);

  const onSubmit = async (data: B2BInput) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, type: "b2b" }),
    });
    const json = await res.json();
    if (!res.ok) {
      toast.error(json.error ?? "Bir hata oluştu");
      return;
    }
    toast.success("Başvuru alındı, en kısa sürede dönüş yapılacak.");
    setDone(true);
    reset();
  };

  if (done) {
    return (
      <div className="card-base p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
        <h3 className="mt-3 fluid-lg text-text-primary">Başvurunuz Alındı</h3>
        <p className="mt-2 text-text-muted">
          Hesap yöneticimiz 24 saat içinde size dönüş yapacaktır.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-base p-7 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-display font-medium text-text-secondary">Ad</label>
          <input
            {...register("firstName")}
            className="mt-1.5 w-full h-11 px-3.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
          />
          {errors.firstName && <p className="text-xs text-danger mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="text-sm font-display font-medium text-text-secondary">Soyad</label>
          <input
            {...register("lastName")}
            className="mt-1.5 w-full h-11 px-3.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
          />
          {errors.lastName && <p className="text-xs text-danger mt-1">{errors.lastName.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
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
          <label className="text-sm font-display font-medium text-text-secondary">E-posta</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1.5 w-full h-11 px-3.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
          />
          {errors.email && <p className="text-xs text-danger mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-display font-medium text-text-secondary">Firma Adı</label>
          <input
            {...register("companyName")}
            className="mt-1.5 w-full h-11 px-3.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
          />
          {errors.companyName && <p className="text-xs text-danger mt-1">{errors.companyName.message}</p>}
        </div>
        <div>
          <label className="text-sm font-display font-medium text-text-secondary">Pozisyon</label>
          <input
            {...register("position")}
            placeholder="Operasyon Müdürü, Sahip, vb."
            className="mt-1.5 w-full h-11 px-3.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
          />
          {errors.position && <p className="text-xs text-danger mt-1">{errors.position.message}</p>}
        </div>
      </div>
      <div>
        <label className="text-sm font-display font-medium text-text-secondary">Filo Büyüklüğü</label>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {FLEET_SIZES.map((s) => (
            <label
              key={s}
              className="relative cursor-pointer"
            >
              <input type="radio" value={s} {...register("fleetSize")} className="peer sr-only" />
              <div className="h-11 rounded-[10px] border border-border-light flex items-center justify-center text-sm font-mono text-text-secondary peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600">
                {s}
              </div>
            </label>
          ))}
        </div>
        {errors.fleetSize && <p className="text-xs text-danger mt-1">{errors.fleetSize.message}</p>}
      </div>
      <div>
        <label className="text-sm font-display font-medium text-text-secondary">Ek Bilgi</label>
        <textarea
          {...register("additionalInfo")}
          rows={3}
          className="mt-1.5 w-full px-3.5 py-2.5 rounded-[10px] border border-border-light focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-text-secondary">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-0.5 w-4 h-4 accent-blue-600"
        />
        <span>
          KVKK kapsamında kişisel verilerimin kayıt amacıyla işlenmesini kabul ediyorum.
        </span>
      </label>
      {errors.consent && <p className="text-xs text-danger">{errors.consent.message}</p>}
      <Button type="submit" variant="primary" size="lg" loading={isSubmitting} fullWidth>
        Başvuruyu Gönder
      </Button>
    </form>
  );
}

export default B2BForm;
