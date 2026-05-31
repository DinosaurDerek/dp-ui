import type { FormFieldProps } from "./FormField.types";

export function FormField({
  label,
  htmlFor,
  hint,
  error,
  children,
  required = false,
}: FormFieldProps) {
  const hasError = Boolean(error);
  const errorId = `${htmlFor}-error`;
  const hintId = `${htmlFor}-hint`;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={htmlFor}
        className="text-[length:var(--dp-font-size-sm)] font-[var(--dp-font-weight-medium)] text-[var(--dp-color-text-default)]"
      >
        {label}
        {required && (
          <span
            className="ml-1 text-[var(--dp-color-feedback-error-border)]"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      {children}

      <div className="text-[length:var(--dp-font-size-xs)]">
        {hasError ? (
          <span
            id={errorId}
            role="alert"
            className="text-[var(--dp-color-feedback-error-text)]"
          >
            {error}
          </span>
        ) : hint ? (
          <span id={hintId} className="text-[var(--dp-color-text-muted)]">
            {hint}
          </span>
        ) : (
          // Empty span preserves space so layout doesn't shift when hint/error appear
          <span aria-hidden="true">&nbsp;</span>
        )}
      </div>
    </div>
  );
}
