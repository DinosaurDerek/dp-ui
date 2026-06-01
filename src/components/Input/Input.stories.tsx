import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Placeholder text" },
};

export const Large: Story = {
  args: { size: "lg", placeholder: "Large input" },
};

export const Invalid: Story = {
  args: { isInvalid: true, placeholder: "Invalid state" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
};

export const ReadOnly: Story = {
  args: { readOnly: true, value: "Read only value" },
};
