import type { CardProps } from "@/types/ui.types";

import { cn } from "@/lib/utils/cn";

export default function Card({
  hoverable = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-neutral-100 bg-white p-10 shadow-sm transition-all duration-500",
        hoverable &&
          "hover:-translate-y-2 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}