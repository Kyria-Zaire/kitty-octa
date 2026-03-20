import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/* ── Props Interface ── */

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text displayed above the textarea */
  label?: string;
  /** Error message shown below the textarea */
  error?: string;
  /** Helper text shown below the textarea when no error */
  hint?: string;
}

/**
 * Lumière Design System — Textarea
 *
 * Multi-line text input with the same visual language as Input.
 * Uses ivory background with gold focus ring.
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, rows = 5, ...rest }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1.5 block text-sm font-medium text-charcoal"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            /* Base */
            "w-full rounded-md border bg-white font-sans px-4 py-2.5 text-sm",
            "transition-colors duration-200",
            "placeholder:text-taupe-light",
            "resize-y min-h-[100px]",
            /* Focus */
            "focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
            /* State */
            error
              ? "border-error text-charcoal focus:border-error focus:ring-error/20"
              : "border-beige text-charcoal",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : hint
                ? `${textareaId}-hint`
                : undefined
          }
          {...rest}
        />
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-1.5 text-xs text-error"
            role="alert"
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p
            id={`${textareaId}-hint`}
            className="mt-1.5 text-xs text-taupe-light"
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
