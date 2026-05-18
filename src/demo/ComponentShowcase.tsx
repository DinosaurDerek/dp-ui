// src/demo/ComponentShowcase.tsx
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input";

export function ComponentShowcase() {
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
    </div>
  );
}
