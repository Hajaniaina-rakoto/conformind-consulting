import type { SectionProps } from "@/types/ui.types";

import { cn } from "@/lib/utils/cn";

export default function Section({
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden py-24 lg:py-32",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}