import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "h-12 w-full rounded-full border border-input bg-transparent px-4 py-2 text-base outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        outline: "border border-input bg-transparent text-input",
        filled: "bg-primary border-none text-input",
        ghost: "bg-transparent border-none",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = ({ className, variant, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
};

export { Input };
