import { useId } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input";
import { FormField } from "../components/FormField/FormField";
import { Card } from "../components/Card";

export function ComponentShowcase() {
  const emailId = useId();
  const nameId = useId();

  return (
    <div className="p-8 flex flex-col gap-8">
      <section className="flex flex-col gap-3 items-start">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Button
        </h2>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
        <Button variant="primary" isLoading>
          Loading
        </Button>
        <Button variant="primary" isFullWidth>
          Full Width
        </Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </section>
      <section className="flex flex-col gap-3 items-start">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Input
        </h2>
        <Input id="default" placeholder="Default" />
        <Input id="large" placeholder="Large" size="lg" />
        <Input id="invalid" placeholder="Invalid" isInvalid />
        <Input id="disabled" placeholder="Disabled" disabled />
        <Input
          id="readonly"
          placeholder="Read Only"
          readOnly
          value="Read only value"
        />
      </section>
      <section className="flex flex-col gap-3 w-80">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          FormField
        </h2>
        <FormField
          label="Email"
          htmlFor={emailId}
          hint="We'll never share this"
        >
          <Input id={emailId} type="email" placeholder="you@example.com" />
        </FormField>
        <FormField
          label="Name"
          htmlFor={nameId}
          error="Name is required"
          required
        >
          <Input id={nameId} isInvalid placeholder="Your name" />
        </FormField>
      </section>
      <section className="flex flex-col gap-3 w-80">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Card
        </h2>
        <Card>
          <p className="text-[var(--dp-color-text-default)]">
            Basic card with default padding and surface styling.
          </p>
        </Card>
        <Card>
          <div className="flex flex-col gap-3">
            <h3 className="text-[length:var(--dp-font-size-lg)] font-[var(--dp-font-weight-semibold)] text-[var(--dp-color-text-default)]">
              Card with content
            </h3>
            <p className="text-[var(--dp-color-text-muted)]">
              Cards are composable surfaces. Structure lives in the consumer.
            </p>
            <Button variant="primary" size="sm">
              Action
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
