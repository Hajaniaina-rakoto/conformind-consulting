import type { LabelProps } from "@/types/ui.types";

import { cn } from "@/lib/utils/cn";

export default function Label({
  className,

  children,

  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-medium text-[var(--dark)]",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}