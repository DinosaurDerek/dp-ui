import type { InputHTMLAttributes } from "react";

export type InputSize = "md" | "lg";
export type InputType = "text" | "email" | "password" | "number";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: InputSize;
  type?: InputType;
  isInvalid?: boolean;
  className?: string;
}
