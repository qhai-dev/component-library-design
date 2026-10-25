import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";

import { IconPlaceholder } from "../../internal/icon-placeholder";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "flex size-4 items-center justify-center rounded-md border border-foreground/35 bg-transparent group-has-disabled/field:cursor-not-allowed group-has-disabled/field:border-border group-has-disabled/field:bg-disabled-fill group-has-[:focus-visible]/field-label:outline-2 group-has-[:focus-visible]/field-label:outline-ring hover:not-data-checked:border-primary hover:not-data-checked:bg-muted focus-visible:outline-2 focus-visible:outline-ring aria-invalid:border-destructive aria-invalid:bg-destructive-light data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-disabled/field:data-checked:border-primary-disabled group-has-disabled/field:data-checked:bg-primary-disabled peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="[&>svg]:size-4 grid place-content-center text-current transition-none"
      >
        <IconPlaceholder
          lucide="CheckIcon"
          tabler="IconCheck"
          hugeicons="Tick02Icon"
          phosphor="CheckIcon"
          remixicon="RiCheckLine"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
