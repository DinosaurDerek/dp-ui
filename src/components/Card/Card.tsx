import type { CardProps } from "./Card.types";

export function Card({ children, className = "", ...rest }: CardProps) {
  const baseClasses = [
    "bg-[var(--dp-color-surface-raised)]",
    "border border-[var(--dp-color-border-default)]",
    "rounded-[var(--dp-border-radius-lg)]",
    "shadow-[var(--dp-shadow-sm)]",
    "p-6",
    className,
  ].join(" ");

  return (
    <div className={baseClasses} {...rest}>
      {children}
    </div>
  );
}
