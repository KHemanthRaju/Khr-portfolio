import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 hover:scale-110",
  {
    variants: {
      variant: {
        default:
          "bg-lightNavy dark:bg-lightNavy light:bg-blue-50 text-cyan dark:text-cyan light:text-blue-600 border border-cyan/30 dark:border-cyan/30 light:border-blue-200 hover:bg-cyan/10 light:hover:bg-blue-100",
        primary:
          "bg-cyan/10 dark:bg-cyan/10 light:bg-blue-50 text-cyan dark:text-cyan light:text-blue-600 border border-cyan/30 dark:border-cyan/30 light:border-blue-200 hover:bg-cyan/20 light:hover:bg-blue-100",
        secondary:
          "bg-coral/10 text-coral border border-coral/30 hover:bg-coral/20",
        outline:
          "border border-cyan/50 dark:border-cyan/50 light:border-blue-300 text-cyan dark:text-cyan light:text-blue-600 hover:bg-cyan/5 light:hover:bg-blue-50",
        tech:
          "bg-lightNavy/50 dark:bg-lightNavy/50 light:bg-gray-100 text-lightSlate dark:text-lightSlate light:text-gray-700 border border-lightNavy dark:border-lightNavy light:border-gray-200 hover:border-cyan dark:hover:border-cyan light:hover:border-blue-400 hover:text-cyan dark:hover:text-cyan light:hover:text-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
