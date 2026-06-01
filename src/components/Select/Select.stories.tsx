import type { Meta, StoryObj } from "@storybook/react-vite";
import { useId } from "react";
import { Select } from "./Select";
import { FormField } from "../FormField/FormField";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "eng", label: "Engineer" },
  { value: "design", label: "Designer" },
  { value: "pm", label: "Product Manager" },
];

export const Default: Story = {
  args: { options, placeholder: "Select an option" },
};

export const Large: Story = {
  args: { options, size: "lg", placeholder: "Large select" },
};

export const Invalid: Story = {
  args: { options, isInvalid: true, placeholder: "Invalid state" },
};

export const Disabled: Story = {
  args: { options, disabled: true, placeholder: "Disabled" },
};

export const InFormField: Story = {
  render: () => {
    const id = useId();
    return (
      <FormField label="Role" htmlFor={id} hint="Select your role" required>
        <Select id={id} options={options} placeholder="Select a role" />
      </FormField>
    );
  },
};
