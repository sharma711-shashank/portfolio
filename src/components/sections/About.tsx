"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Get to know me">About Me</SectionHeading>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-[1fr_2fr] items-start"
        >
          {/* Profile image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-48 h-48 rounded-2xl border border-[var(--card-border)] overflow-hidden">
              <Image
                src="/profile.png"
                alt="Shashank Sharma"
                width={192}
                height={192}
                className="w-full h-full object-cover object-[50%_15%]"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
            <p>
              I&apos;m a <strong className="text-[var(--foreground)]">Module Lead</strong> with
              extensive expertise in full-stack development, microservices architecture,
              and cloud platforms. I have a proven track record of delivering scalable
              applications while guiding high-performing teams to exceed project goals.
            </p>
            <p>
              With experience spanning <strong className="text-[var(--foreground)]">React JS, .NET Core, Node JS, and Azure</strong>,
              I lead cross-functional teams in delivering end-to-end solutions.
              I&apos;m proficient in leveraging AI-assisted development tools, including
              GitHub Copilot, and implementing AI workflows to boost productivity
              and accelerate software delivery.
            </p>
            <p>
              I hold a <strong className="text-[var(--foreground)]">B.Tech in Information Technology</strong>{" "}from
              VIT University, Vellore. Beyond code, I&apos;m committed to fostering
              innovation and efficiency in software engineering through strategic
              leadership and the integration of cutting-edge technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
