import type { TextareaProps } from "@/types/ui.types";

import FormError from "./form-error";

import { cn } from "@/lib/utils/cn";

export default function Textarea({
  error,

  className,

  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <textarea
        className={cn(
          "min-h-[160px] w-full rounded-[var(--radius-md)] border border-gray-300 bg-white px-4 py-4 text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-light)]/20",

          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-100",

          className
        )}
        {...props}
      />

      <FormError message={error} />
    </div>
  );
}