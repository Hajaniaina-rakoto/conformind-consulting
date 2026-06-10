"use client";

import type { ButtonProps } from "@/types/ui.types";

import Spinner from "./spinner";

import { cn } from "@/lib/utils/cn";

const variants = {
  primary:
    "bg-[var(--primary)] text-white hover:bg-[#248A7B]",

  secondary:
    "bg-[var(--dark)] text-white hover:bg-[#1F2225]",

  outline:
    "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",

  ghost:
    "text-[var(--dark)] hover:bg-gray-100",
};

const sizes = {
  sm: "h-10 px-4 text-sm",

  md: "h-12 px-6 text-sm",

  lg: "h-14 px-8 text-base",
};

export default function Button({
  variant = "primary",

  size = "md",

  isLoading = false,

  fullWidth = false,

  leftIcon,

  rightIcon,

  disabled,

  className,

  children,

  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-60",

        variants[variant],

        sizes[size],

        fullWidth && "w-full",

        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner className="size-5" />
      ) : (
        <>
          {leftIcon}

          {children}

          {rightIcon}
        </>
      )}
    </button>
  );
}