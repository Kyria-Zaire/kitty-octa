import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/* ── Props Interface ── */

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Label text displayed above the input */
  label?: string;
  /** Error message shown below the input */
  error?: string;
  /** Helper text shown below the input when no error */
  hint?: string;
  /** Size preset */
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-4 py-3.5 text-base",
} as const;

/**
 * Lumière Design System — Input
 *
 * Text input with optional label, error, and hint states.
 * Uses ivory background with gold focus ring for the luxury aesthetic.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, size = "md", className, id, ...rest }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-charcoal"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            /* Base */
            "w-full rounded-md border bg-white font-sans",
            "transition-colors duration-200",
            "placeholder:text-taupe-light",
            /* Focus */
            "focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
            /* Size */
            sizeStyles[size],
            /* State */
            error
              ? "border-error text-charcoal focus:border-error focus:ring-error/20"
              : "border-beige text-charcoal",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error
              ? `${inputId}-error`
              : hint
                ? `${inputId}-hint`
                : undefined
          }
          {...rest}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-xs text-error"
            role="alert"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-taupe-light">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
