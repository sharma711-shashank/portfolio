"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const ratioMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.set(entry.target.id, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let maxSection = "";
        ratioMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxSection = id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(maxSection);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-64px 0px 0px 0px",
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Position the sliding indicator behind the active link
  useEffect(() => {
    if (!activeSection || !navContainerRef.current || !indicatorRef.current) return;
    const activeLink = navContainerRef.current.querySelector(
      `a[href="#${activeSection}"]`
    ) as HTMLElement | null;
    if (!activeLink) return;

    const containerRect = navContainerRef.current.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    indicatorRef.current.style.left = `${linkRect.left - containerRect.left}px`;
    indicatorRef.current.style.width = `${linkRect.width}px`;
    indicatorRef.current.style.opacity = "1";
  }, [activeSection]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--card-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        >
          SS<span className="text-[var(--primary)]">.</span>
        </a>

        {/* Desktop nav */}
        <div ref={navContainerRef} className="hidden md:flex items-center gap-8 relative">
          {/* Sliding active indicator */}
          <div
            ref={indicatorRef}
            className="absolute -bottom-1 h-0.5 bg-[var(--primary)] rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0"
          />
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-200 relative ${
                  isActive
                    ? "text-[var(--primary)] font-medium"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="text-[var(--foreground)]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[var(--background)]/95 backdrop-blur-lg border-b border-[var(--card-border)] px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--primary)] font-medium"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
