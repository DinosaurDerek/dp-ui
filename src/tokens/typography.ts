export const fontFamily = {
  sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"].join(", "),
  mono: ["JetBrains Mono", "ui-monospace", "monospace"].join(", "),
} as const;

export const fontSize = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px — base
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const lineHeight = {
  none: "1", // headings, single-line UI elements
  tight: "1.25",
  snug: "1.375",
  normal: "1.5", // body text default
  relaxed: "1.625",
  loose: "2",
} as const;

export const letterSpacing = {
  tight: "-0.05em",
  normal: "0em",
  wide: "0.05em",
  wider: "0.1em",
} as const;
