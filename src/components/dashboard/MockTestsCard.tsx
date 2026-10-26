"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Timer, ClipboardList } from "lucide-react";

const TESTS = [
  { id: "t1", subject: "General Test", year: 2023, exam: "CUET", duration: 60, questions: 50 },
  { id: "t2", subject: "Mathematics", year: 2023, exam: "CUET", duration: 45, questions: 40 },
  { id: "t3", subject: "English", year: 2022, exam: "CUET", duration: 45, questions: 40 },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function MockTestsCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "22px 24px",
        boxShadow: "var(--shadow-sm)",
        marginBottom: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", display: "flex", alignItems: "center", gap: 7 }}>
          <ClipboardList size={16} color="var(--purple)" />
          Mock Tests
        </h2>
        <Link
          href="/cuet-prep/tests"
          style={{
            display: "flex", alignItems: "center", gap: 4,
            fontSize: 12.5, color: "var(--accent)", fontWeight: 600,
            textDecoration: "none",
          }}
        >
          View all <ArrowRight size={13} />
        </Link>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        {TESTS.map((test) => (
          <motion.div key={test.id} variants={rowVariants}>
            <Link
              href={`/cuet-prep/tests/${test.id}/instructions`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 14px",
                background: "var(--card2)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--accent)";
                el.style.background = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--border)";
                el.style.background = "var(--card2)";
              }}
            >
              <div style={{
                width: 40, height: 40,
                borderRadius: 10,
                background: "var(--purple-light)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 14, fontWeight: 900, color: "var(--purple)", lineHeight: 1 }}>
                  {String(test.year).slice(2)}
                </span>
                <span style={{ fontSize: 9, fontWeight: 600, color: "var(--purple)", textTransform: "uppercase" }}>
                  {test.exam}
                </span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                  {test.subject} · {test.year}
                </p>
                <p style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 2, display: "flex", alignItems: "center", gap: 4 }}>
                  <Timer size={11} />
                  {test.questions} questions · {test.duration} min
                </p>
              </div>
              <ArrowRight size={14} color="var(--dim)" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

