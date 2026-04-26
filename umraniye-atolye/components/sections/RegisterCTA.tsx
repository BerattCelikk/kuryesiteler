"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";

export function RegisterCTA() {
  return (
    <section className="relative overflow-hidden blue-gradient-bg text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,.35), transparent 40%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100"
        >
          // {WORKSHOP.district.toUpperCase()} · ANADOLU YAKASI
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 fluid-xl md:fluid-hero text-white"
        >
          Bugün Gel. Bugün Başla.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 text-lg text-blue-50 max-w-2xl mx-auto"
        >
          Çantanı getir, 10 dakikada projeye dahil ol. Kimlik ve plaka yeterli.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Button
            variant="primary"
            size="lg"
            href="/randevu"
            className="bg-white text-blue-700 hover:bg-blue-50"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Randevu Al
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href={WORKSHOP.waLink}
            className="text-white border-white/30 hover:bg-white/10 hover:text-white"
            icon={<MessageCircle className="w-4 h-4" />}
            iconPosition="left"
          >
            WhatsApp
          </Button>
        </motion.div>
        <div className="mt-6 flex items-center justify-center gap-5 text-xs font-mono text-blue-100">
          <span>✓ Ücretsiz kayıt</span>
          <span>✓ 10 dakikada aktif</span>
          <span>✓ Sözleşmesiz</span>
        </div>
      </div>
    </section>
  );
}

export default RegisterCTA;
