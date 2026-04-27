"use client";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-forest-500 text-ivory border border-forest-600 hover:bg-forest-600 shadow-[0_4px_16px_rgba(30,92,52,0.25)] hover:shadow-[0_6px_32px_rgba(26,26,20,0.10),0_2px_8px_rgba(26,26,20,0.06)] hover:-translate-y-px",
  secondary:
    "bg-transparent text-gold-500 border-[1.5px] border-[rgba(184,149,58,0.35)] hover:bg-[rgba(184,149,58,0.06)] hover:border-gold-400",
  ghost:
    "bg-transparent text-text-secondary border border-[rgba(30,92,52,0.15)] hover:bg-ivory-mid hover:border-[rgba(30,92,52,0.30)]",
  dark:
    "bg-transparent text-ivory border border-[rgba(254,252,245,0.25)] hover:bg-[rgba(254,252,245,0.10)] hover:border-[rgba(254,252,245,0.50)]",
};

const SIZE: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-[14px]",
  lg: "h-13 px-8 text-[15px] py-3.5",
};

type Common = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: Common) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide select-none transition-[background,border,color,box-shadow,transform] duration-200 will-change-transform",
    VARIANT[variant],
    SIZE[size],
    disabled && "opacity-60 cursor-not-allowed pointer-events-none",
    className
  );

  const motionAttrs: HTMLMotionProps<"button"> = {
    whileHover: disabled ? undefined : { scale: 1.01 },
    whileTap: disabled ? undefined : { scale: 0.98 },
  };

  if (href) {
    const isExternal = external || /^https?:|^mailto:|^tel:/.test(href);
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cls}
          data-cursor="hover"
          aria-label={ariaLabel}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={cls} data-cursor="hover" aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cls}
      data-cursor="hover"
      {...motionAttrs}
    >
      {children}
    </motion.button>
  );
}
