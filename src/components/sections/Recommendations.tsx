"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { recommendations } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const TEXT_LIMIT = 200;

export function Recommendations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = recommendations.length;

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  const getVisibleIndices = () => {
    const prevIdx = (activeIndex - 1 + total) % total;
    const nextIdx = (activeIndex + 1) % total;
    return [prevIdx, activeIndex, nextIdx];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="recommendations" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="What colleagues say">
          Recommendations
        </SectionHeading>

        <div className="relative flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous recommendation"
            className="shrink-0 w-10 h-10 rounded-full border border-[var(--card-border)] bg-[var(--card)] flex items-center justify-center hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--foreground)]" />
          </button>

          {/* Slider Cards */}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-stretch justify-center gap-4">
              <AnimatePresence mode="popLayout">
                {visibleIndices.map((idx) => {
                  const rec = recommendations[idx];
                  const isCenter = idx === activeIndex;
                  const isLong = rec.text.length > TEXT_LIMIT;
                  const displayText = isLong
                    ? rec.text.slice(0, TEXT_LIMIT) + "..."
                    : rec.text;

                  return (
                    <motion.div
                      key={rec.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: isCenter ? 1 : 0.5,
                        scale: isCenter ? 1 : 0.9,
                      }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className={`w-full max-w-sm shrink-0 rounded-2xl border p-6 transition-shadow duration-300 ${
                        isCenter
                          ? "border-[var(--primary)]/40 bg-[var(--card)] shadow-lg"
                          : "border-[var(--card-border)] bg-[var(--card)] hidden md:block"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                        <Quote className="w-5 h-5 text-[var(--primary)]" />
                      </div>

                      <p className="text-sm text-[var(--muted-foreground)] italic leading-relaxed mb-2">
                        &ldquo;{displayText}&rdquo;
                      </p>

                      {isLong && (
                        <Link
                          href={`/recommendations/${rec.id}`}
                          className="inline-block text-sm text-[var(--primary)] hover:underline mb-4"
                        >
                          Read more
                        </Link>
                      )}

                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <h3 className="text-base font-semibold text-[var(--foreground)]">
                            {rec.name}
                          </h3>
                          <p className="text-sm text-[var(--muted-foreground)]">
                            {rec.role}, {rec.company}
                          </p>
                        </div>

                        {rec.linkedinUrl && rec.linkedinUrl !== "#" && (
                          <a
                            href={rec.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next recommendation"
            className="shrink-0 w-10 h-10 rounded-full border border-[var(--card-border)] bg-[var(--card)] flex items-center justify-center hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[var(--foreground)]" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {recommendations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to recommendation ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-[var(--primary)] scale-110"
                  : "bg-[var(--muted-foreground)]/30 hover:bg-[var(--muted-foreground)]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
