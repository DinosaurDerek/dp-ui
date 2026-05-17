// Primitive palette — raw values, no semantic meaning
// These should never be used directly in components
export const palette = {
  green: {
    50: "#f3f5f0",
    100: "#e4ead9",
    200: "#c9d4b4",
    300: "#abbe8e",
    400: "#8ea86a",
    500: "#73924a", // primary brand
    600: "#5c7a38",
    700: "#456029",
    800: "#2f471b",
    900: "#1a2e0e",
  },
  stone: {
    0: "#ffffff",
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
  },
  amber: {
    100: "#fef3c7",
    400: "#fbbf24",
    600: "#d97706",
  },
  red: {
    100: "#fee2e2",
    500: "#ef4444",
    700: "#b91c1c",
  },
} as const;

// Semantic tokens — map intent to palette values
// These are what components and the theme layer consume
export const colors = {
  interactive: {
    primary: palette.green[500],
    primaryHover: palette.green[600],
    primaryActive: palette.green[700],
    secondary: palette.stone[200],
    secondaryHover: palette.stone[300],
  },
  surface: {
    default: palette.stone[0],
    subtle: palette.stone[50],
    raised: palette.stone[100],
    overlay: palette.stone[200],
  },
  border: {
    default: palette.stone[200],
    strong: palette.stone[300],
    focus: palette.green[500],
  },
  text: {
    default: palette.stone[900],
    muted: palette.stone[500],
    subtle: palette.stone[400],
    onPrimary: palette.stone[0], // text on green backgrounds
    onDark: palette.stone[0],
  },
  feedback: {
    errorSurface: palette.red[100],
    errorText: palette.red[700],
    errorBorder: palette.red[500],
    warningSurface: palette.amber[100],
    warningText: palette.amber[600],
  },
} as const;
