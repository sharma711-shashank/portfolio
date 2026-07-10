"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Professional credentials">
          Certifications
        </SectionHeading>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all duration-300 hover:shadow-md hover:border-[var(--primary)]/30 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-[var(--primary)]" />
              </div>

              <h3 className="text-base font-semibold text-[var(--foreground)] mb-1 leading-tight">
                {cert.name}
              </h3>

              <p className="text-sm text-[var(--muted-foreground)] mb-1">
                {cert.issuer}
              </p>

              <p className="text-xs text-[var(--muted-foreground)] font-mono mb-3">
                {cert.date}
              </p>

              {cert.credentialUrl && cert.credentialUrl !== "#" && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
                >
                  View Credential
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
