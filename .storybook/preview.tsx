/// <reference types="vite/client" />
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
