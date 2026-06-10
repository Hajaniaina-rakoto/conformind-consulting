import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type SpinnerProps = {
  className?: string;
};

export default function Spinner({
  className,
}: SpinnerProps) {
  return (
    <LoaderCircle
      className={cn(
        "animate-spin",
        className
      )}
    />
  );
}