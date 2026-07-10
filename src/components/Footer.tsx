import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p className="text-xs text-[var(--muted-foreground)]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
