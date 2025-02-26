import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#0076A6] text-white relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] focus:border-[#00f3ff] focus:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] focus:outline-none active:scale-[0.98]",
        secondary: "bg-white/20 backdrop-blur-sm text-white relative border-[3px] border-white/40 transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] hover:bg-white/10 focus:border-[#00f3ff] focus:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] focus:outline-none active:scale-[0.98]",
        ghost: "text-white relative border-[3px] border-transparent transition-all duration-300 ease-in-out transform-gpu will-change-[border,box-shadow] hover:bg-white/5 hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] focus:border-[#00f3ff] focus:shadow-[-4px_0_8px_rgba(0,243,255,0.6)] focus:outline-none active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface MotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>;
}

const MotionButton = motion(React.forwardRef<HTMLButtonElement, MotionButtonProps>((props, ref) => (
  <button ref={ref} {...props} />
)));

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : MotionButton;
    return (
      <Comp<HTMLButtonElement>
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };