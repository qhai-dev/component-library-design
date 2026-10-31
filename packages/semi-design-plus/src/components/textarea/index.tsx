import { cva, type VariantProps } from "class-variance-authority";
import type { Ref } from "react";
import { cn } from "../../lib/cn";

/**
 * shadcn Textarea API (bare <textarea>) with the Semi Design textarea spec
 * (semi-foundation/input/textarea.scss + variables.scss):
 * - the element itself is Semi's `.semi-input-textarea-wrapper`: fill-0
 *   background deepening on hover (fill-1), 1px solid focus-border on focus,
 *   3px radius (var(--semi-border-radius-small))
 * - padding 8px 12px, min-height 60px, placeholder uses text-2
 * - validateStatus error/warning switch to the danger/warning light palettes
 * - disabled keeps the not-allowed cursor on disabled-fill (no pointer-events)
 * - Semi extras: size (default/sm 14px, lg 16px); autosize is not implemented
 */

export const textareaVariants = cva(
  "block w-full min-h-15 resize-y rounded-sm border border-transparent bg-muted px-3 py-2 text-sm leading-5 text-foreground outline-none cursor-text transition-colors duration-100 placeholder:text-text-2 hover:bg-muted-hover focus:border-focus-border focus:bg-muted disabled:cursor-not-allowed disabled:bg-disabled-fill disabled:text-disabled-foreground disabled:placeholder:text-disabled-foreground",
  {
    variants: {
      size: {
        default: "text-sm",
        sm: "text-sm",
        lg: "text-base",
      },
      validateStatus: {
        default: "",
        // Semi `.semi-input-textarea-wrapper-error`: danger-light bg/border,
        // solid danger border while focused
        error:
          "border-destructive-light bg-destructive-light hover:bg-destructive-light-hover focus:border-destructive focus:bg-destructive-light active:bg-destructive-light-active",
        // Semi `.semi-input-textarea-wrapper-warning`
        warning:
          "border-warning-light bg-warning-light hover:bg-warning-light-hover focus:border-warning focus:bg-warning-light active:bg-warning-light-active",
      },
    },
    defaultVariants: {
      size: "default",
      validateStatus: "default",
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  ref?: Ref<HTMLTextAreaElement>;
}

export function Textarea({
  className,
  size = "default",
  validateStatus = "default",
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size, validateStatus }), className)}
      {...props}
    />
  );
}

Textarea.displayName = "Textarea";
