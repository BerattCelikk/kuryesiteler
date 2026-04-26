"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { BlobShape } from "@/components/ui/BlobShape";
import { RegistrationIllustration } from "@/components/illustrations";
import { WORKSHOP } from "@/lib/constants";
import { getTodayHours } from "@/lib/utils";

const rise = {
  hidden: { opacity: 0, y: 20, filter: "sepia(0.15)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "sepia(0)",
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 min-h-[80dvh] flex items-center">
      <BlobShape color="#F4CCBA" size={520} className="-left-32 -top-24" opacity={0.18} />
      <BlobShape color="#A8C9A8" size={340} className="right-0 bottom-0" opacity={0.18} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center gap-10">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="show" custom={0} variants={rise}>
              <span className="label-pill">
                <span className="text-base">🏠</span>
                Sultanbeyli&apos;nin Atölyesi
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={rise}
              className="mt-6 font-display text-display-hero text-ink"
            >
              {WORKSHOP.copy.heroLine1}
              <br />
              <em className="not-italic font-display italic text-terra-500">
                {WORKSHOP.copy.heroLine2}
              </em>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={rise}
              className="mt-6 font-body text-body-lg text-ink-light max-w-lg"
            >
              {WORKSHOP.copy.heroSub}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={2.5}
              variants={rise}
              className="mt-6 flex items-center gap-3 flex-wrap"
            >
              <StatusBadge size="md" />
              <span className="h-1 w-1 rounded-full bg-terra-200" />
              <span className="font-body text-sm text-ink-mid">
                Bugün <span className="font-semibold">{getTodayHours()}</span>
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3}
              variants={rise}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button variant="primary" size="lg" href="/randevu">
                Randevu Alın
              </Button>
              <Button variant="ghost" size="lg" href="/nasil-calisir">
                Nasıl Çalışır?
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3.5}
              variants={rise}
              className="mt-6 flex flex-wrap gap-2"
            >
              {["Ücretsiz Kayıt", "10 Dakika", "Walk-In Kabul", "Sözleşmesiz"].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 bg-terra-100 text-terra-600 border border-terra-200 rounded-full px-3 py-1 font-body text-xs font-semibold"
                >
                  <span className="text-sage-500">✓</span> {p}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative animate-[floatY_5s_ease-in-out_infinite]">
              <RegistrationIllustration size={320} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
