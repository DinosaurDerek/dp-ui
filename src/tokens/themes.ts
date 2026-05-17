import { palette } from "./colors";

export const lightTheme: Theme = {
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
    onPrimary: palette.stone[0],
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

export const darkTheme: Theme = {
  interactive: {
    primary: palette.green[400],
    primaryHover: palette.green[300],
    primaryActive: palette.green[500],
    secondary: palette.stone[700],
    secondaryHover: palette.stone[600],
  },
  surface: {
    default: palette.stone[900],
    subtle: palette.stone[800],
    raised: palette.stone[700],
    overlay: palette.stone[600],
  },
  border: {
    default: palette.stone[700],
    strong: palette.stone[600],
    focus: palette.green[400],
  },
  text: {
    default: palette.stone[50],
    muted: palette.stone[400],
    subtle: palette.stone[500],
    onPrimary: palette.stone[900],
    onDark: palette.stone[0],
  },
  feedback: {
    errorSurface: palette.red[700],
    errorText: palette.red[100],
    errorBorder: palette.red[500],
    warningSurface: palette.amber[600],
    warningText: palette.amber[100],
  },
};

export type ThemeTokenGroup = Record<string, string>;
export type Theme = {
  interactive: ThemeTokenGroup;
  surface: ThemeTokenGroup;
  border: ThemeTokenGroup;
  text: ThemeTokenGroup;
  feedback: ThemeTokenGroup;
};
export type ThemeMode = "light" | "dark";
