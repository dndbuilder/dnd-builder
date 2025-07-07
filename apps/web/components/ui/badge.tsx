import type * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { classNames } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-black text-white hover:bg-gray-800',
        secondary: 'border-transparent bg-gray-200 text-gray-900 hover:bg-gray-200/80',
        destructive: 'border-transparent bg-red-500 text-white hover:bg-red-500/80',
        outline: 'text-gray-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={classNames(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
