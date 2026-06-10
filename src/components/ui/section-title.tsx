import type { SectionTitleProps } from "@/types/ui.types";

import Badge from "./badge";

import { cn } from "@/lib/utils/cn";

export default function SectionTitle({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" &&
          "mx-auto items-center text-center",
        className
      )}
    >
      {badge && (
        <Badge className="w-fit">
          {badge}
        </Badge>
      )}

      <div className="flex flex-col gap-5">
        <h2 className="max-w-4xl">
          {title}
        </h2>

        {description && (
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}