import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleAlert, Eye, EyeOff, TriangleAlert, X } from "lucide-react";
import {
  useRef,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { cn } from "../../lib/cn";

/**
 * shadcn Input API with the Semi Design input spec:
 * - the visual box is Semi's `.semi-input-wrapper`: fill-0 background that
 *   deepens on hover (fill-1), 1px focus-border on focus, 3px radius
 * - validateStatus error/warning switch to the danger/warning light palettes
 * - Semi extras: size (24/32/40), prefix, suffix, clearable, password toggle
 */

/** The visual control box (Semi `.semi-input-wrapper`) state styles. */
const inputBoxVariants = cva(
  "inline-flex w-full min-w-0 items-center rounded-sm border border-transparent px-3 text-sm leading-5 outline-none transition-colors duration-100 cursor-text disabled:cursor-not-allowed disabled:bg-disabled-fill disabled:text-disabled-foreground",
  {
    variants: {
      size: {
        default: "h-8",
        sm: "h-6",
        lg: "h-10 text-base",
      },
      validateStatus: {
        default: "",
        error:
          "border-destructive-light bg-destructive-light hover:bg-destructive-light-hover focus-within:border-destructive focus-within:bg-destructive-light active:bg-destructive-light-active",
        warning:
          "border-warning-light bg-warning-light hover:bg-warning-light-hover focus-within:border-warning focus-within:bg-warning-light active:bg-warning-light-active",
      },
    },
    compoundVariants: [
      // default fill box: deepen on hover, solid focus border while focused
      {
        validateStatus: "default",
        className:
          "bg-muted hover:bg-muted-hover focus-within:border-focus-border focus-within:bg-muted focus-within:active:bg-muted-active",
      },
    ],
    defaultVariants: {
      size: "default",
      validateStatus: "default",
    },
  },
);

/** The bare text field inside the box. */
const inputInnerVariants = cva(
  "w-full min-w-0 bg-transparent text-sm leading-5 text-foreground outline-none placeholder:text-text-2 disabled:cursor-not-allowed disabled:text-disabled-foreground read-only:cursor-default",
  {
    variants: {
      size: {
        default: "text-sm",
        sm: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: { size: "default" },
  },
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">,
    VariantProps<typeof inputBoxVariants> {
  /** Inset content rendered before the text field. */
  prefix?: ReactNode;
  /** Inset content rendered after the text field. */
  suffix?: ReactNode;
  /** Shows a clear button when the field has a value (Semi `showClear`). */
  clearable?: boolean;
  /** Adds an eye toggle for type="password" (Semi modebtn). */
  passwordToggle?: boolean;
  ref?: Ref<HTMLInputElement>;
}

function ClearButton({ onClear, disabled }: { onClear: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      data-slot="input-clear"
      aria-label="Clear"
      tabIndex={-1}
      disabled={disabled}
      onClick={onClear}
      className="flex h-full min-w-6 shrink-0 cursor-pointer items-center justify-center text-text-2 outline-none transition-colors hover:text-primary-hover focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-primary-light-active"
    >
      <X aria-hidden className="size-4" />
    </button>
  );
}

function PasswordToggle({
  revealed,
  onToggle,
  disabled,
}: {
  revealed: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      data-slot="input-modebtn"
      aria-label={revealed ? "Hide password" : "Show password"}
      tabIndex={-1}
      disabled={disabled}
      onClick={onToggle}
      className="flex h-full min-w-6 shrink-0 cursor-pointer items-center justify-center text-text-2 outline-none transition-colors hover:text-primary-hover focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-primary-light-active"
    >
      {revealed ? (
        <EyeOff aria-hidden className="size-4" />
      ) : (
        <Eye aria-hidden className="size-4" />
      )}
    </button>
  );
}

export function Input({
  className,
  size = "default",
  validateStatus = "default",
  prefix,
  suffix,
  clearable = false,
  passwordToggle = false,
  disabled,
  type,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  ref,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [inner, setInner] = useState(
    value !== undefined ? String(value) : String(defaultValue ?? ""),
  );
  const innerRef = useRef<HTMLInputElement | null>(null);
  const isPassword = type === "password" && passwordToggle;
  const filled =
    value !== undefined ? String(value).length > 0 : inner.length > 0;
  const wrapped = Boolean(prefix || suffix || clearable || isPassword);

  const setRef = (node: HTMLInputElement | null) => {
    innerRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as { current: HTMLInputElement | null }).current = node;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInner(event.target.value);
    onChange?.(event);
  };

  const handleClear = () => {
    if (value === undefined) setInner("");
    const input = innerRef.current;
    if (input) {
      const setter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        "value",
      )?.set;
      setter?.call(input, "");
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
    onChange?.({
      target: input ?? ({ value: "" } as unknown as HTMLInputElement),
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const fieldType = isPassword ? (revealed ? "text" : "password") : type;

  const focusHandlers = {
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    },
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    },
  };

  if (!wrapped) {
    return (
      <InputPrimitive
        ref={setRef}
        type={fieldType}
        data-slot="input"
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        {...focusHandlers}
        className={cn(
          inputBoxVariants({ size, validateStatus }),
          "cursor-text",
          validateStatus === "default" && "focus:border-focus-border focus:bg-muted",
          validateStatus === "error" &&
            "aria-invalid:border-transparent aria-invalid:hover:bg-destructive-light-hover focus:border-destructive focus:bg-destructive-light",
          validateStatus === "warning" &&
            "focus:border-warning focus:bg-warning-light",
          disabled && "cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  }

  return (
    <div
      data-slot="input-wrapper"
      data-focused={focused ? "" : undefined}
      data-validate-status={validateStatus}
      className={cn(
        inputBoxVariants({ size, validateStatus }),
        disabled && "cursor-not-allowed",
        className,
      )}
    >
      {prefix && (
        <span
          data-slot="input-prefix"
          className="mr-2 flex shrink-0 items-center text-text-2"
        >
          {prefix}
        </span>
      )}
      <InputPrimitive
        ref={setRef}
        type={fieldType}
        data-slot="input"
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        {...focusHandlers}
        className={cn(inputInnerVariants({ size }))}
        {...props}
      />
      {validateStatus === "error" && !suffix && (
        <CircleAlert aria-hidden className="ml-2 size-4 shrink-0 text-destructive" />
      )}
      {validateStatus === "warning" && !suffix && (
        <TriangleAlert aria-hidden className="ml-2 size-4 shrink-0 text-warning" />
      )}
      {clearable && filled && !disabled && (
        <ClearButton onClear={handleClear} disabled={disabled} />
      )}
      {isPassword && (
        <PasswordToggle
          revealed={revealed}
          onToggle={() => setRevealed((r) => !r)}
          disabled={disabled}
        />
      )}
      {suffix && (
        <span
          data-slot="input-suffix"
          className="ml-2 flex shrink-0 items-center font-semibold text-text-2"
        >
          {suffix}
        </span>
      )}
    </div>
  );
}

Input.displayName = "Input";
