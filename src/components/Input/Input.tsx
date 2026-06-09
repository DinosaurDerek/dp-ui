import { forwardRef } from "react";
import type { InputProps } from "./Input.types";

const sizeClasses: Record<string, string> = {
  md: "h-10 px-3 text-[length:var(--dp-font-size-md)]",
  lg: "h-12 px-4 text-[length:var(--dp-font-size-lg)]",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      type = "text",
      isInvalid = false,
      disabled = false,
      readOnly = false,
      className = "",
      ...rest
    },
    ref,
  ) => {
    const baseClasses = [
      "w-full",
      "rounded-[var(--dp-border-radius-md)]",
      "border",
      "bg-[var(--dp-color-surface-default)]",
      "text-[var(--dp-color-text-default)]",
      "transition-colors duration-150",
      "outline-none",
      "placeholder:text-[var(--dp-color-text-subtle)]",

      // Border states — order matters, more specific last
      isInvalid
        ? "border-[var(--dp-color-feedback-error-border)]"
        : "border-[var(--dp-color-border-strong)]",

      // Focus ring
      readOnly
        ? "focus:ring-2 focus:ring-[var(--dp-color-border-strong)] focus:ring-offset-1"
        : isInvalid
          ? "focus:ring-2 focus:ring-[var(--dp-color-feedback-error-border)] focus:ring-offset-1"
          : "focus:ring-2 focus:ring-[var(--dp-color-border-focus)] focus:ring-offset-1",

      // Disabled
      disabled
        ? "opacity-50 cursor-not-allowed bg-[var(--dp-color-surface-subtle)]"
        : "",

      // Readonly
      readOnly
        ? "cursor-default bg-[var(--dp-color-surface-subtle)] text-[var(--dp-color-text-muted)]"
        : "",

      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={isInvalid}
        className={baseClasses}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";
