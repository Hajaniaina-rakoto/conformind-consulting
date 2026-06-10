import type { BadgeProps } from "@/types/ui.types";

import { cn } from "@/lib/utils/cn";

const variants = {
  primary:
    "bg-[#E8F7F4] text-[#1D9B8A]",

  dark:
    "bg-[#111827] text-white",

  outline:
    "border border-[#1D9B8A] text-[#1D9B8A]",
};

export default function Badge({
  variant = "primary",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}