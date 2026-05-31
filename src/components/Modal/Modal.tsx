import { useRef, useId, useMemo } from "react";
import { createPortal } from "react-dom";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useKeyboard } from "../../hooks/useKeyboard";
import type { ModalProps, ModalSize } from "./Modal.types";

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  size = "md",
  closeOnBackdropClick = true,
  children,
}: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  const keymap = useMemo(() => ({ Escape: onClose }), [onClose]);

  useFocusTrap(containerRef, isOpen);
  useKeyboard(keymap, isOpen);

  if (!isOpen) return null;

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--dp-color-surface-overlay)]"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        className={[
          "relative z-10 w-full rounded-[var(--dp-border-radius-lg)]",
          "bg-[var(--dp-color-surface-default)]",
          "border border-[var(--dp-color-border-default)]",
          "shadow-[var(--dp-shadow-lg)]",
          "p-6",
          sizeClasses[size],
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2
              id={titleId}
              className="text-[length:var(--dp-font-size-lg)] font-[var(--dp-font-weight-semibold)] text-[var(--dp-color-text-default)]"
            >
              {title}
            </h2>
            {description && (
              <p
                id={descriptionId}
                className="mt-1 text-[length:var(--dp-font-size-sm)] text-[var(--dp-color-text-subtle)]"
              >
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className={[
              "flex-shrink-0 flex items-center justify-center",
              "w-8 h-8 rounded-[var(--dp-border-radius-sm)]",
              "text-[var(--dp-color-text-subtle)]",
              "hover:text-[var(--dp-color-text-default)]",
              "hover:bg-[var(--dp-color-surface-subtle)]",
              "transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-[var(--dp-color-interactive-focus)]",
            ].join(" ")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="text-[length:var(--dp-font-size-md)] text-[var(--dp-color-text-default)]">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
