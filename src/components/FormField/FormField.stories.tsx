import type { Meta, StoryObj } from "@storybook/react-vite";
import { useId } from "react";
import { FormField } from "./FormField";
import { Input } from "../Input";

const meta: Meta<typeof FormField> = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHint: Story = {
  render: () => {
    const id = useId();
    return (
      <FormField label="Email" htmlFor={id} hint="We'll never share this">
        <Input id={id} type="email" placeholder="you@example.com" />
      </FormField>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const id = useId();
    return (
      <FormField label="Name" htmlFor={id} error="Name is required" required>
        <Input id={id} isInvalid placeholder="Your name" />
      </FormField>
    );
  },
};

export const Required: Story = {
  render: () => {
    const id = useId();
    return (
      <FormField label="Username" htmlFor={id} required>
        <Input id={id} placeholder="Choose a username" />
      </FormField>
    );
  },
};
