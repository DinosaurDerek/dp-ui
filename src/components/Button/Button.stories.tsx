import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary", children: "Primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Destructive" },
};

export const Small: Story = {
  args: { variant: "primary", size: "sm", children: "Small" },
};

export const Large: Story = {
  args: { variant: "primary", size: "lg", children: "Large" },
};

export const Loading: Story = {
  args: { variant: "primary", isLoading: true, children: "Loading" },
};

export const Disabled: Story = {
  args: { variant: "primary", disabled: true, children: "Disabled" },
};

export const FullWidth: Story = {
  args: { variant: "primary", isFullWidth: true, children: "Full Width" },
};
