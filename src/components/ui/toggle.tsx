import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full p-3 text-input text-sm font-medium hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground outline-none transition-[color,box-shadow]",
  {
    variants: {
      variant: {
        default: " bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  asChild?: boolean;
}

const Toggle = ({ className, variant, ...props }: ToggleProps) => {
  return (
    <TogglePrimitive.Root
      data-slot="Toggle"
      className={cn(toggleVariants({ variant }), className)}
      {...props}
    />
  );
};

export { Toggle };