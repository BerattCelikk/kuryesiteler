"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "dark-ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}
type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };
type LinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-lime-500 text-gray-900 border border-lime-600 hover:bg-lime-600 hover:text-gray-900 shadow-[0_4px_12px_rgba(108,192,36,0.35)] hover:shadow-[0_4px_20px_rgba(108,192,36,0.45)] font-display font-semibold tracking-wide",
  secondary:
    "bg-transparent text-gray-900 border-[1.5px] border-gray-200 hover:bg-gray-100 hover:border-gray-300 font-semibold",
  ghost:
    "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50 border border-transparent font-semibold",
  dark:
    "bg-gray-700 text-gray-50 border border-gray-700 hover:bg-gray-800 hover:border-lime-600 font-semibold",
  "dark-ghost":
    "bg-transparent text-gray-50 border border-gray-700 hover:bg-gray-800 hover:border-lime-500 font-semibold",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md transition-all duration-150 select-none whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:scale-[1.01]";

export const Button = forwardRef<HTMLButtonElement, ButtonProps | LinkProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      className,
      children,
      fullWidth,
    } = props;
    const cls = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    if ("href" in props && props.href) {
      const { href, target, rel } = props;
      return (
        <Link href={href} target={target} rel={rel} className={cls}>
          {children}
        </Link>
      );
    }
    const btnProps = props as ButtonProps;
    const {
      variant: _v,
      size: _s,
      className: _c,
      children: _ch,
      fullWidth: _fw,
      ...rest
    } = btnProps;
    void _v; void _s; void _c; void _ch; void _fw;
    return (
      <button ref={ref} className={cls} {...rest}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
