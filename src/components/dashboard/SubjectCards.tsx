"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CLASSES = [
  { id: "c9", slug: "class-9", label: "Class 9", num: "9", desc: "Science & Maths" },
  { id: "c10", slug: "class-10", label: "Class 10", num: "10", desc: "Board Foundation" },
  { id: "c11", slug: "class-11", label: "Class 11", num: "11", desc: "Advanced Concepts" },
  { id: "c12", slug: "class-12", label: "Class 12", num: "12", desc: "Board + Entrance" },
];

const GRADIENTS = [
  "linear-gradient(135deg, #10b981, #0ea5e9)",
  "linear-gradient(135deg, #8b5cf6, #f43f5e)",
  "linear-gradient(135deg, #f59e0b, #fb923c)",
  "linear-gradient(135deg, #06b6d4, #6366f1)",
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SubjectCards() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      style={{ marginBottom: 16 }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>
          NCERT Solutions
        </h2>
        <Link
          href="/ncert-solutions"
          style={{
            display: "flex", alignItems: "center", gap: 4,
            fontSize: 12.5, color: "var(--accent)", fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Browse all <ArrowRight size={13} />
        </Link>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        {CLASSES.map((cls, i) => (
          <motion.div key={cls.id} variants={cardVariants}>
            <Link
              href={`/ncert-solutions/${cls.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 18px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                textDecoration: "none",
                transition: "all 0.2s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--border-hover)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "var(--shadow)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Number badge */}
              <div style={{
                width: 46, height: 46,
                borderRadius: 12,
                background: GRADIENTS[i],
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: "#fff" }}>{cls.num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{cls.label}</p>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{cls.desc}</p>
              </div>
              <ArrowRight size={15} color="var(--dim)" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

