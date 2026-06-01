import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Button } from "../Button/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <p className="text-[var(--dp-color-text-default)]">
        Basic card with default padding and surface styling.
      </p>
    </Card>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Card>
      <div className="flex flex-col gap-3">
        <h3 className="text-[length:var(--dp-font-size-lg)] font-[var(--dp-font-weight-semibold)] text-[var(--dp-color-text-default)]">
          Card title
        </h3>
        <p className="text-[var(--dp-color-text-subtle)]">
          Cards are composable surfaces. Structure lives in the consumer.
        </p>
        <Button variant="primary" size="sm">
          Action
        </Button>
      </div>
    </Card>
  ),
};
