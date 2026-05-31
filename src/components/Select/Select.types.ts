import type { SelectHTMLAttributes } from "react";

export type SelectSize = "md" | "lg";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  options: SelectOption[];
  size?: SelectSize;
  isInvalid?: boolean;
  placeholder?: string;
}
