/// <reference types="vite/client" />
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import "../src/index.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider
        key={context.globals.theme}
        defaultMode={context.globals.theme}
      >
        <div
          style={{
            padding: "2rem",
            background: "var(--dp-color-surface-default)",
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
