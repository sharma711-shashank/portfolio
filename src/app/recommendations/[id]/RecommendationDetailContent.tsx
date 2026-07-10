"use client";

import { recommendations } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Quote, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export function RecommendationDetailContent({ id }: { id: string }) {
  const recommendation = recommendations.find((r) => r.id === id);

  if (!recommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Recommendation not found
          </h1>
          <Link
            href="/#recommendations"
            className="text-[var(--primary)] hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#recommendations"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recommendations
        </Link>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-8 md:p-12"
        >
          <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-6">
            <Quote className="w-6 h-6 text-[var(--primary)]" />
          </div>

          <p className="text-base md:text-lg text-[var(--muted-foreground)] italic leading-relaxed mb-8">
            &ldquo;{recommendation.text}&rdquo;
          </p>

          <div className="flex items-center justify-between border-t border-[var(--card-border)] pt-6">
            <div>
              <h2 className="text-lg font-semibold text-[var(--foreground)]">
                {recommendation.name}
              </h2>
              <p className="text-sm text-[var(--muted-foreground)]">
                {recommendation.role}, {recommendation.company}
              </p>
            </div>

            {recommendation.linkedinUrl &&
              recommendation.linkedinUrl !== "#" && (
                <a
                  href={recommendation.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
                >
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
