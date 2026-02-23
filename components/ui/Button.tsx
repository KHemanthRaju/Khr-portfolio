import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-cyan text-navy hover:bg-cyan/90 hover:scale-105 shadow-lg hover:shadow-cyan/50 dark:bg-cyan dark:text-navy light:bg-blue-600 light:text-white light:hover:bg-blue-700",
        secondary:
          "bg-lightNavy text-cyan border border-cyan hover:bg-cyan/10 hover:scale-105 dark:bg-lightNavy dark:text-cyan light:bg-gray-100 light:text-blue-600 light:border-blue-600 light:hover:bg-gray-200",
        outline:
          "border border-cyan text-cyan hover:bg-cyan/10 hover:scale-105 dark:border-cyan dark:text-cyan light:border-blue-600 light:text-blue-600 light:hover:bg-blue-50",
        ghost: "text-cyan hover:bg-cyan/10 dark:text-cyan light:text-blue-600 light:hover:bg-blue-50",
        link: "text-cyan underline-offset-4 hover:underline dark:text-cyan light:text-blue-600",
        coral:
          "bg-coral text-white hover:bg-coral/90 hover:scale-105 shadow-lg hover:shadow-coral/50",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
