import { forwardRef } from "react";
import type { SelectProps, SelectSize } from "./Select.types";

const sizeClasses: Record<SelectSize, string> = {
  md: "h-10 text-[length:var(--dp-font-size-md)] px-3",
  lg: "h-12 text-[length:var(--dp-font-size-lg)] px-4",
};

const chevronSizeClasses: Record<SelectSize, string> = {
  md: "w-4 h-4 right-3",
  lg: "w-5 h-5 right-4",
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      size = "md",
      isInvalid = false,
      placeholder,
      disabled,
      className,
      ...rest
    },
    ref,
  ) => {
    const borderColor = isInvalid
      ? "border-[var(--dp-color-feedback-error)]"
      : "border-[var(--dp-color-border-default)]";

    const focusRing = isInvalid
      ? "focus:ring-[var(--dp-color-feedback-error)]"
      : "focus:ring-[var(--dp-color-interactive-primary)]";

    return (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={disabled}
          aria-invalid={isInvalid}
          className={[
            "w-full appearance-none rounded-[var(--dp-border-radius-md)]",
            "bg-[var(--dp-color-surface-default)]",
            "text-[var(--dp-color-text-default)]",
            "border",
            borderColor,
            "pr-10 outline-none",
            "focus:ring-2",
            focusRing,
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "cursor-pointer",
            sizeClasses[size],
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron icon is purely decorative, pointer-events-none so clicks pass through to select */}
        <div
          aria-hidden="true"
          className={[
            "absolute top-1/2 -translate-y-1/2 pointer-events-none",
            "text-[var(--dp-color-text-subtle)]",
            chevronSizeClasses[size],
          ].join(" ")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";
