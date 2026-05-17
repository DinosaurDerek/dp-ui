// src/demo/ComponentShowcase.tsx
import { Button } from "../components/Button/Button";

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
    </div>
  );
}
