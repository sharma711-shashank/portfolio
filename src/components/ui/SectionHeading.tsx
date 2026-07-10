import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
}

export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[var(--foreground)]">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[var(--muted-foreground)] text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
