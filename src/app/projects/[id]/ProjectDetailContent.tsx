"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export function ProjectDetailContent({ id }: { id: string }) {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Project not found
          </h1>
          <Link
            href="/#projects"
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
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-8 md:p-12"
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">
              {project.title}
            </h1>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[var(--primary)] hover:underline shrink-0"
              >
                Live demo
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line mb-8">
            {project.description}
          </p>

          <div className="border-t border-[var(--card-border)] pt-6">
            <h2 className="text-sm font-semibold text-[var(--foreground)] mb-3">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
