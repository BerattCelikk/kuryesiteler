"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "teal" | "danger";
type Size = "sm" | "md" | "lg" | "xl";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  magnetic?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_4px_20px_rgba(59,130,246,.30)] border border-transparent",
  secondary:
    "bg-white text-blue-700 border border-blue-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50",
  ghost:
    "bg-transparent text-text-secondary border border-border-light hover:border-border-medium hover:text-text-primary hover:bg-bg-soft",
  teal:
    "bg-teal-500 text-white border border-transparent hover:bg-teal-600 hover:shadow-[0_4px_20px_rgba(20,184,166,.30)]",
  danger:
    "bg-danger text-white border border-transparent hover:brightness-110",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm rounded-[10px] gap-1.5",
  md: "h-11 px-5 text-[15px] rounded-[12px] gap-2",
  lg: "h-13 px-7 text-base rounded-[14px] gap-2.5",
  xl: "h-16 px-10 text-lg rounded-[16px] gap-3",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  loading,
  icon,
  iconPosition = "right",
  magnetic,
  fullWidth,
  className,
  children,
  disabled,
  ...rest
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center font-display font-semibold tracking-tight",
    "transition-all duration-200 select-none whitespace-nowrap",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        icon && iconPosition === "left" && <span className="inline-flex">{icon}</span>
      )}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === "right" && <span className="inline-flex">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.span {...motionProps} className={cn("inline-block", fullWidth && "w-full")}>
        <Link href={href} className={classes} aria-disabled={disabled}>
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={classes}
      disabled={disabled || loading}
      {...(rest as object)}
    >
      {content}
    </motion.button>
  );
}

export default Button;
