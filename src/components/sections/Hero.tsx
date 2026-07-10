"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Phone, Check } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  const [copied, setCopied] = useState(false);

  function copyPhone() {
    navigator.clipboard.writeText("+918105151994");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={staggerItem}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 mb-6">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="text-[var(--foreground)]">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-6 text-xl sm:text-2xl text-[var(--muted-foreground)] font-medium"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="mt-4 text-base sm:text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download="SHASHANK_SHARMA_Lead_Full_Stack"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--card-border)] text-[var(--foreground)] font-medium hover:bg-[var(--muted)] transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="mt-8 flex items-center justify-center gap-5"
        >
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${siteConfig.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <button
            onClick={copyPhone}
            aria-label="Copy phone number"
            title={copied ? "Mobile Number has been copied" : "Copy phone number"}
            className="relative text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
          >
            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Phone className="w-5 h-5" />}
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-[var(--card)] border border-[var(--card-border)] px-2 py-1 rounded shadow">
                Mobile Number has been copied
              </span>
            )}
          </button>
        </motion.div>
      </motion.div>

    </section>
  );
}
