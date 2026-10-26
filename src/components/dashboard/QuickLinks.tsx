"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, PenTool, RotateCcw, TrendingUp, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "NCERT Solutions", href: "/ncert-solutions", icon: BookOpen, color: "var(--accent)", bg: "var(--accent-light)" },
  { label: "CUET Prep", href: "/cuet-prep", icon: PenTool, color: "var(--purple)", bg: "var(--purple-light)" },
  { label: "Revision", href: "/revision", icon: RotateCcw, color: "var(--amber)", bg: "var(--amber-light)" },
  { label: "Progress", href: "/progress", icon: TrendingUp, color: "var(--sky)", bg: "var(--sky-light)" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function QuickLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "22px 24px",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 14 }}>
        Quick Links
      </h3>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ display: "flex", flexDirection: "column", gap: 6 }}
      >
        {LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <motion.div key={link.label} variants={itemVariants}>
              <Link
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  padding: "10px 12px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "all 0.2s",
                  color: "var(--text)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "var(--hover)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "transparent";
                }}
              >
                <div style={{
                  width: 32, height: 32,
                  borderRadius: 9,
                  background: link.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={16} color={link.color} />
                </div>
                <span style={{ flex: 1, fontSize: 13.5, fontWeight: 500 }}>
                  {link.label}
                </span>
                <ArrowRight size={14} color="var(--dim)" />
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>
    </motion.div>
  );
}

