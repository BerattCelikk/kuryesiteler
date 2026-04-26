"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  error?: string;
  className?: string;
  id?: string;
};

type InputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "className">;

export const TextField = React.forwardRef<HTMLInputElement, InputProps>(
  function TextField({ label, error, className, id, ...rest }, ref) {
    const fid = id || `f-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return (
      <div className={cn("relative", className)}>
        <label
          htmlFor={fid}
          className="block font-body text-[12px] font-bold tracking-wider uppercase text-ink-mid mb-2"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={fid}
          className={cn(
            "w-full bg-sand-light border border-terra-200/60 rounded-xl px-4 py-3 font-body text-[15px] text-ink",
            "placeholder:text-ink-faint",
            "focus:outline-none focus:border-terra-500 focus:bg-cream focus:shadow-[0_0_0_4px_rgba(192,92,40,0.12)]",
            "transition-all duration-200",
            error && "border-terra-500 bg-terra-100/50",
          )}
          {...rest}
        />
        {error && (
          <p className="mt-1.5 text-xs font-body font-semibold text-terra-600">{error}</p>
        )}
      </div>
    );
  },
);

type SelectProps = BaseProps & {
  options: string[];
  value?: string;
  onValueChange?: (v: string) => void;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id" | "className" | "onChange" | "value">;

export const SelectField = React.forwardRef<HTMLSelectElement, SelectProps>(
  function SelectField(
    { label, error, options, className, id, value, onValueChange, ...rest },
    ref,
  ) {
    const fid = id || `f-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return (
      <div className={cn("relative", className)}>
        <label
          htmlFor={fid}
          className="block font-body text-[12px] font-bold tracking-wider uppercase text-ink-mid mb-2"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={fid}
          value={value}
          onChange={(e) => onValueChange?.(e.target.value)}
          className={cn(
            "w-full appearance-none bg-sand-light border border-terra-200/60 rounded-xl px-4 py-3 pr-10 font-body text-[15px] text-ink",
            "focus:outline-none focus:border-terra-500 focus:bg-cream focus:shadow-[0_0_0_4px_rgba(192,92,40,0.12)]",
            "transition-all duration-200",
            error && "border-terra-500 bg-terra-100/50",
          )}
          {...rest}
        >
          <option value="">Seçin…</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 bottom-3.5 text-terra-500"
        >
          ▾
        </span>
        {error && (
          <p className="mt-1.5 text-xs font-body font-semibold text-terra-600">{error}</p>
        )}
      </div>
    );
  },
);

type TextareaProps = BaseProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className">;

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextareaField({ label, error, className, id, ...rest }, ref) {
    const fid = id || `f-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return (
      <div className={cn("relative", className)}>
        <label
          htmlFor={fid}
          className="block font-body text-[12px] font-bold tracking-wider uppercase text-ink-mid mb-2"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={fid}
          rows={4}
          className={cn(
            "w-full bg-sand-light border border-terra-200/60 rounded-xl px-4 py-3 font-body text-[15px] text-ink resize-none",
            "placeholder:text-ink-faint",
            "focus:outline-none focus:border-terra-500 focus:bg-cream focus:shadow-[0_0_0_4px_rgba(192,92,40,0.12)]",
            "transition-all duration-200",
            error && "border-terra-500 bg-terra-100/50",
          )}
          {...rest}
        />
        {error && (
          <p className="mt-1.5 text-xs font-body font-semibold text-terra-600">{error}</p>
        )}
      </div>
    );
  },
);
