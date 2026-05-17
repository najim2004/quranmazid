"use client";

import { cn } from "@/lib/utils";

type SwitchProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
  disabled?: boolean;
};

export function Switch({
  checked = false,
  onCheckedChange,
  id,
  className,
  disabled,
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={checked}
      aria-label="Toggle switch"
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "border-border-color bg-secondary-bg relative flex h-6 w-[44px] shrink-0 cursor-pointer items-center rounded-full border px-[3px]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <span
        className={cn(
          "absolute size-[18px] rounded-full transition-all duration-200 ease-in-out",
          checked ? "translate-x-5 bg-primary" : "translate-x-0 bg-primary-20",
        )}
      />
    </button>
  );
}
