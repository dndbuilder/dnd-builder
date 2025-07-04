import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { classNames } from "@/lib/utils";

const textareaVariants = cva(
  "w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:border-gray-500 focus:ring-2 focus:ring-gray-500/50",
        error: "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, label, error, id, ...props }, ref) => {
    const innerId = React.useId();

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id || innerId} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <textarea
          id={id || innerId}
          className={classNames(
            textareaVariants({ variant: error ? "error" : variant, className })
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
