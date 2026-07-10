"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--muted)]/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="Technologies & tools I work with">
          Skills & Tech Stack
        </SectionHeading>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <BentoCard key={category.name} delay={index * 0.1}>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={staggerItem}
                    className="inline-flex items-center rounded-lg bg-[var(--muted)] px-3 py-1.5 text-sm text-[var(--foreground)] font-medium hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </BentoCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
