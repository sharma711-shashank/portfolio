"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, ArrowUpRight, Phone, Check } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  function copyPhone() {
    navigator.clipboard.writeText("+918105151994");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--muted)]/30">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading subtitle="Let's connect">Get In Touch</SectionHeading>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-10">
            I&apos;m always interested in hearing about new opportunities,
            interesting projects, or just having a conversation about
            technology. Feel free to reach out!
          </p>

          <a
            href={`https://mail.google.com/mail/?view=cm&to=${siteConfig.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-medium text-lg hover:opacity-90 transition-opacity group"
          >
            <Mail className="w-5 h-5" />
            Say Hello
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${siteConfig.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
            <button
              onClick={copyPhone}
              aria-label="Copy phone number"
              className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Phone className="w-5 h-5" />}
              <span className="text-sm">{copied ? "Mobile Number has been copied" : "Phone"}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
