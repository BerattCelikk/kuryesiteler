"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-[#C05C28] text-cream hover:bg-[#A34A1E] shadow-[0_4px_16px_rgba(192,92,40,0.30)]",
  secondary:
    "bg-transparent border-[1.5px] border-sage-400/50 text-sage-600 hover:bg-sage-bg hover:border-sage-500",
  ghost:
    "bg-transparent border-[1.5px] border-terra-200 text-ink-mid hover:bg-cream-mid hover:text-ink",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1DB954] shadow-[0_4px_16px_rgba(37,211,102,0.30)]",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  fullWidth,
  ...rest
}: ButtonProps) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-body font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap",
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className,
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.span whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={href} className={cls}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type="button"
      className={cls}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      {...(rest as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
