"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const baseClass =
  "w-full bg-surface border border-white/10 rounded-md px-4 py-3 text-text-bright placeholder:text-text-muted font-body text-sm focus:outline-none focus:border-coral-500/60 focus:ring-2 focus:ring-coral-500/20 transition-colors duration-200";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, className, id, ...props },
  ref
) {
  const _id = id ?? props.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={_id} className="font-mono text-mono-label text-text-secondary">
          {label}
        </label>
      )}
      <input ref={ref} id={_id} className={cn(baseClass, error && "border-coral-500/60", className)} {...props} />
      {error && <span className="text-[12px] text-coral-300 font-body">{error}</span>}
    </div>
  );
});

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, className, id, ...props },
  ref
) {
  const _id = id ?? props.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={_id} className="font-mono text-mono-label text-text-secondary">
          {label}
        </label>
      )}
      <textarea ref={ref} id={_id} className={cn(baseClass, "min-h-[100px] resize-y", error && "border-coral-500/60", className)} {...props} />
      {error && <span className="text-[12px] text-coral-300 font-body">{error}</span>}
    </div>
  );
});

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: string[];
  placeholder?: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, options, placeholder, className, id, ...props },
  ref
) {
  const _id = id ?? props.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={_id} className="font-mono text-mono-label text-text-secondary">
          {label}
        </label>
      )}
      <select ref={ref} id={_id} className={cn(baseClass, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23E8435A%22 stroke-width=%221.6%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_14px_center] bg-[length:14px] pr-10", error && "border-coral-500/60", className)} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <span className="text-[12px] text-coral-300 font-body">{error}</span>}
    </div>
  );
});
