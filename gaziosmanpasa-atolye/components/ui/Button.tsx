"use client";
import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-coral-500 text-white hover:bg-coral-400 shadow-[0_4px_20px_rgba(232,67,90,0.4)] hover:shadow-[0_0_40px_rgba(232,67,90,0.4),0_0_80px_rgba(232,67,90,0.15)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/8 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
  ghost:
    "bg-transparent border border-white/15 text-text-secondary hover:border-coral-500/40 hover:text-coral-300",
  white:
    "bg-white text-coral-600 hover:bg-text-bright hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
};
const sizeClass: Record<Size, string> = {
  sm: "px-3 py-2 text-[13px]",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 font-display font-semibold rounded-lg transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

export const Button = forwardRef<HTMLElement, Props>(function Button(props, ref) {
  const { variant = "primary", size = "md", className, fullWidth, children, href, target, rel, onClick, type = "button", disabled, ...rest } = props;
  const cls = cn(baseClass, variantClass[variant], sizeClass[size], fullWidth && "w-full", className);

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={cn("inline-block", fullWidth && "w-full")}>
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={cls}
          {...rest}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cls}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </motion.button>
  );
});

export default Button;
