import { useId, useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input";
import { FormField } from "../components/FormField/FormField";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { Select } from "../components/Select";

export function ComponentShowcase() {
  const emailId = useId();
  const nameId = useId();
  const roleId = useId();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-8 flex flex-col gap-8 items-center">
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
        <FormField
          label="Role"
          htmlFor={roleId}
          hint="Select your role"
          required
        >
          <Select
            id={roleId}
            placeholder="Select a role"
            options={[
              { value: "eng", label: "Engineer" },
              { value: "design", label: "Designer" },
              { value: "pm", label: "Product Manager" },
            ]}
          />
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
      <section className="flex flex-col gap-3 items-start">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Modal
        </h2>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Example Modal"
          description="This demonstrates focus trapping, Escape to close, and portal rendering."
        >
          <p className="text-[var(--dp-color-text-default)]">
            Tab through the interactive elements below. Focus is trapped inside.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <Input id="modal-input" placeholder="Focusable input" />
            <div className="flex gap-2 justify-end">
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </section>
      <section className="flex flex-col gap-3 items-start">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Select
        </h2>
        <div className="w-64">
          <Select
            placeholder="Choose a size"
            options={[
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
            ]}
          />
        </div>
        <div className="w-64">
          <Select
            size="lg"
            placeholder="Large select"
            options={[
              { value: "a", label: "Option A" },
              { value: "b", label: "Option B" },
              { value: "c", label: "Option C", disabled: true },
            ]}
          />
        </div>
        <div className="w-64">
          <Select
            placeholder="Invalid state"
            isInvalid
            options={[{ value: "x", label: "Option X" }]}
          />
        </div>
        <div className="w-64">
          <Select
            placeholder="Disabled"
            disabled
            options={[{ value: "x", label: "Option X" }]}
          />
        </div>
      </section>
    </div>
  );
}
