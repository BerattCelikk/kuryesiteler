"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

interface LinkVariantProps extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
}

interface ButtonVariantProps extends BaseProps {
  href?: never;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type GlowButtonProps = LinkVariantProps | ButtonVariantProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#FF6B00] text-black hover:bg-[#FF8C00] shadow-[0_0_0_rgba(255,107,0,0)] hover:shadow-[0_0_28px_rgba(255,107,0,0.55)]",
  secondary:
    "bg-transparent text-white border border-[#FF6B00] hover:bg-[#FF6B00]/10",
  ghost:
    "bg-transparent text-white hover:text-[#FF6B00]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px] font-semibold tracking-wide",
  md: "px-5 py-2.5 text-sm font-semibold tracking-wide",
  lg: "px-7 py-3.5 text-[15px] font-bold tracking-wider",
};

export function GlowButton(props: GlowButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon: Icon,
    iconPosition = "right",
    children,
    className,
    fullWidth,
  } = props;

  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg uppercase transition-all duration-200 select-none",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  const inner = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} strokeWidth={2.5} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={16} strokeWidth={2.5} />}
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={base}
          {...motionProps}
        >
          {inner}
        </motion.a>
      );
    }
    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link href={href} className={base}>
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={base}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}
