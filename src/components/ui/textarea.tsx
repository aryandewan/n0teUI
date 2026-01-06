import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "border border-input text-input bg-transparent rounded-xl w-full text-base outline-none overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
  {
    variants: {
      size: {
        default: "min-h-16 px-4 py-2 resize-none",
        sm: "min-h-24 px-4 py-2 resize-none",
        md: "min-h-32 px-4 py-2 resize-none",
        resize: "min-h-16 px-4 py-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface TextareaProps
  extends React.ComponentProps<"textarea">,
    VariantProps<typeof textareaVariants> {
  asChild?: boolean;
}

const Textarea = ({ className, size, ...props }: TextareaProps) => {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({size}),className)}
      {...props}
    />
  );
}

export { Textarea };
