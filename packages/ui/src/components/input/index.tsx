import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 rounded-md border border-transparent bg-muted px-3 py-1 text-sm leading-5 file:h-6 file:text-sm file:font-medium hover:bg-muted-hover focus:border-primary focus:bg-muted focus:outline-none disabled:bg-disabled-fill disabled:text-disabled-foreground aria-invalid:border-destructive aria-invalid:bg-destructive-light aria-invalid:hover:bg-destructive-light-hover w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
