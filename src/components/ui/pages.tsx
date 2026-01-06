import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Pages = ({ ...props }: React.ComponentProps<"nav">) => {
  return <nav aria-lable="pages" data-slot="pages" {...props} />;
};

const PagesListWrapper = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      aria-label="wrapper"
      data-slot="wrapper"
      className="inline-flex items-center gap-1.5"
      {...props}
    />
  );
};

const PagesList = ({ className, ...props }: React.ComponentProps<"ol">) => {
  return (
    <ol
      data-slot="pages-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
};

const PagesItem = ({ className, ...props }: React.ComponentProps<"li">) => {
  return (
    <li
      data-slot="pages-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
};

const PagesLink = ({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) => {
  const Unit = asChild ? Slot : "a";

  return (
    <Unit
      data-slot="pages-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
};

const PagesSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => {
  return (
    <li
      data-slot="pages-separator"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
};

export {
  Pages,
  PagesItem,
  PagesLink,
  PagesList,
  PagesSeparator,
  PagesListWrapper,
};
