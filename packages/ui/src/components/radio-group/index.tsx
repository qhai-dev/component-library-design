import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "cn";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid gap-2 w-full", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "flex size-4 rounded-full border-foreground/35 bg-transparent group-has-disabled/field:cursor-not-allowed group-has-disabled/field:border-border group-has-disabled/field:bg-disabled-fill group-has-[:focus-visible]/field-label:outline-2 group-has-[:focus-visible]/field-label:outline-ring hover:not-data-checked:border-primary hover:not-data-checked:bg-muted focus-visible:outline-2 focus-visible:outline-ring aria-invalid:border-destructive data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-disabled/field:data-checked:border-primary-disabled group-has-disabled/field:data-checked:bg-primary-disabled group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-4 items-center justify-center"
      >
        <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
