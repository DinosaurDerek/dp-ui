import { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";

const variantClasses: Record<string, string> = {
  primary: [
    "bg-[var(--dp-color-interactive-primary)]",
    "text-[var(--dp-color-text-on-primary)]",
    "hover:bg-[var(--dp-color-interactive-primary-hover)]",
    "active:bg-[var(--dp-color-interactive-primary-active)]",
    "border border-transparent",
  ].join(" "),

  secondary: [
    "bg-[var(--dp-color-interactive-secondary)]",
    "text-[var(--dp-color-text-default)]",
    "hover:bg-[var(--dp-color-interactive-secondary-hover)]",
    "border border-[var(--dp-color-border-default)]",
  ].join(" "),

  ghost: [
    "bg-transparent",
    "text-[var(--dp-color-text-default)]",
    "hover:bg-[var(--dp-color-surface-subtle)]",
    "border border-[var(--dp-color-border-strong)]",
  ].join(" "),

  destructive: [
    "bg-[var(--dp-color-feedback-error-border)]",
    "text-[var(--dp-color-text-on-primary)]",
    "hover:bg-[var(--dp-color-feedback-error-text)]",
    "border border-transparent",
  ].join(" "),
};

const sizeClasses: Record<string, string> = {
  sm: "h-8 px-3 text-[length:var(--dp-font-size-sm)] gap-1.5",
  md: "h-10 px-4 text-[length:var(--dp-font-size-md)] gap-2",
  lg: "h-12 px-5 text-[length:var(--dp-font-size-lg)] gap-2.5",
};

const iconOnlySizeClasses: Record<string, string> = {
  sm: "h-8 w-8 p-0",
  md: "h-10 w-10 p-0",
  lg: "h-12 w-12 p-0",
};

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-40"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      isFullWidth = false,
      iconOnly = false,
      disabled,
      className = "",
      children,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    const baseClasses = [
      "relative inline-flex items-center justify-center",
      "rounded-[var(--dp-border-radius-md)]",
      "font-medium transition-colors duration-150",
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-[var(--dp-color-border-focus)]",
      "focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:pointer-events-none",
      isLoading ? "disabled:opacity-75" : "disabled:opacity-50",
      isFullWidth ? "w-full" : "w-auto",
      iconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
      variantClasses[variant],
      className,
    ].join(" ");

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        {...rest}
      >
        {/* Label — always in DOM to hold width, invisible when loading */}
        <span className={isLoading ? "invisible" : "contents"}>{children}</span>

        {/* Spinner — absolutely positioned over the invisible label */}
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
