import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { classNames } from "@/lib/utils";

const inputVariants = cva(
  "w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:border-gray-500 focus:ring-2 focus:ring-gray-500/50",
        error: "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50",
      },
      size: {
        default: "h-10",
        sm: "h-9",
        lg: "h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, label, error, id, ...props }, ref) => {
    const innerId = React.useId();

    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={id || innerId} className="text-sum block font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          id={id || innerId}
          className={classNames(
            inputVariants({
              variant: error ? "error" : variant,
              size,
              className,
            })
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
