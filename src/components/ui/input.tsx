import type { InputProps } from "@/types/ui.types";

import FormError from "./form-error";

import { cn } from "@/lib/utils/cn";

export default function Input({
  error,

  className,

  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className={cn(
          "h-14 w-full rounded-[var(--radius-md)] border border-gray-200 bg-white px-4 text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-light)]/20",

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