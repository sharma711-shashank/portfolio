"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const DESCRIPTION_LIMIT = 120;
const TRUNCATED_INDEXES = new Set([0, 1]);

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="Things I've built">Projects</SectionHeading>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => {
            const canTruncate = TRUNCATED_INDEXES.has(index);

            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`group rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/5 hover:-translate-y-1 hover:border-[var(--primary)]/30 ${
                  project.featured ? "md:col-span-1 lg:row-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                    <span className="text-[var(--primary)] font-bold text-sm">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--muted-foreground)] mb-4 leading-relaxed">
                  {canTruncate ? (
                    <>
                      {project.description.slice(0, DESCRIPTION_LIMIT).trimEnd()}…
                      <Link
                        href={`/projects/${project.id}`}
                        className="text-xs text-[var(--primary)] hover:underline ml-1 focus:outline-none"
                      >
                        Show more
                      </Link>
                    </>
                  ) : (
                    project.description
                  )}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
