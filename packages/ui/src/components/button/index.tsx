import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "rounded-md border-none border-transparent bg-clip-padding text-sm leading-5 font-semibold focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-not-allowed aria-invalid:border-destructive [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap outline-none select-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active disabled:bg-disabled disabled:text-disabled-foreground disabled:hover:bg-disabled",
        outline:
          "border-border bg-transparent text-foreground/80 hover:bg-muted hover:text-foreground/80 active:bg-muted-hover disabled:border-disabled disabled:bg-transparent disabled:text-disabled-foreground aria-expanded:bg-muted aria-expanded:text-foreground/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active disabled:bg-disabled disabled:text-disabled-foreground disabled:hover:bg-disabled aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "bg-transparent text-foreground/80 hover:bg-muted hover:text-foreground/80 active:bg-muted-hover disabled:bg-transparent disabled:text-disabled-foreground aria-expanded:bg-muted aria-expanded:text-foreground/80",
        destructive:
          "bg-destructive text-white hover:bg-destructive-hover focus-visible:outline-destructive-light-active active:bg-destructive-active disabled:bg-disabled disabled:text-disabled-foreground",
        link: "text-primary underline-offset-4 hover:underline disabled:text-disabled-foreground",
      },
      size: {
        default: "h-8 gap-2 px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        sm: "h-6 gap-1 rounded-md px-3 text-sm in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-4",
        lg: "h-10 gap-2 px-4",
        icon: "size-8 rounded-md",
        "icon-xs":
          "size-6 rounded-md in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-6 rounded-md in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
