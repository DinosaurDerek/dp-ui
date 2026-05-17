// Theme-dependent — values change between light and dark mode
export const themeVars = {
  interactive: {
    primary: "--dp-color-interactive-primary",
    primaryHover: "--dp-color-interactive-primary-hover",
    primaryActive: "--dp-color-interactive-primary-active",
    secondary: "--dp-color-interactive-secondary",
    secondaryHover: "--dp-color-interactive-secondary-hover",
  },
  surface: {
    default: "--dp-color-surface-default",
    subtle: "--dp-color-surface-subtle",
    raised: "--dp-color-surface-raised",
    overlay: "--dp-color-surface-overlay",
  },
  border: {
    default: "--dp-color-border-default",
    strong: "--dp-color-border-strong",
    focus: "--dp-color-border-focus",
  },
  text: {
    default: "--dp-color-text-default",
    muted: "--dp-color-text-muted",
    subtle: "--dp-color-text-subtle",
    onPrimary: "--dp-color-text-on-primary",
    onDark: "--dp-color-text-on-dark",
  },
  feedback: {
    errorSurface: "--dp-color-feedback-error-surface",
    errorText: "--dp-color-feedback-error-text",
    errorBorder: "--dp-color-feedback-error-border",
    warningSurface: "--dp-color-feedback-warning-surface",
    warningText: "--dp-color-feedback-warning-text",
  },
} as const;

// Static — written once on mount, never change between modes
export const staticVars = {
  borderRadius: {
    none: "--dp-border-radius-none",
    sm: "--dp-border-radius-sm",
    md: "--dp-border-radius-md",
    lg: "--dp-border-radius-lg",
    xl: "--dp-border-radius-xl",
    full: "--dp-border-radius-full",
  },
  shadow: {
    none: "--dp-shadow-none",
    sm: "--dp-shadow-sm",
    md: "--dp-shadow-md",
    lg: "--dp-shadow-lg",
    xl: "--dp-shadow-xl",
  },
  fontSize: {
    xs: "--dp-font-size-xs",
    sm: "--dp-font-size-sm",
    md: "--dp-font-size-md",
    lg: "--dp-font-size-lg",
    xl: "--dp-font-size-xl",
    "2xl": "--dp-font-size-2xl",
    "3xl": "--dp-font-size-3xl",
    "4xl": "--dp-font-size-4xl",
  },
  fontWeight: {
    regular: "--dp-font-weight-regular",
    medium: "--dp-font-weight-medium",
    semibold: "--dp-font-weight-semibold",
    bold: "--dp-font-weight-bold",
  },
  lineHeight: {
    none: "--dp-line-height-none",
    tight: "--dp-line-height-tight",
    normal: "--dp-line-height-normal",
    relaxed: "--dp-line-height-relaxed",
  },
} as const;
