"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--muted)]/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Where I've worked">
          Experience
        </SectionHeading>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-[var(--card-border)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-[var(--primary)] border-4 border-[var(--background)] shadow-sm" />

                <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all duration-300 hover:shadow-md hover:border-[var(--primary)]/30">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--primary)] font-medium flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--muted-foreground)] font-mono">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                        <span className="text-[var(--primary)] font-bold mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
