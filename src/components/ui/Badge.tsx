import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)] ring-1 ring-inset ring-[var(--primary)]/20">
      {children}
    </span>
  );
}
