import type { ContainerProps } from "@/types/ui.types";

import { cn } from "@/lib/utils/cn";

export default function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12 xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}