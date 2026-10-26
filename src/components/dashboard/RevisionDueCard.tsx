"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Repeat, RotateCcw } from "lucide-react";

export default function RevisionDueCard() {
  const dueCount = 0;
  const masteredCount = 0;
  const trackedCount = 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
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
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>
          Spaced Revision
        </h2>
        <Repeat size={15} color="var(--muted)" />
      </div>

      {trackedCount === 0 ? (
        <div style={{ textAlign: "center", padding: "12px 0" }}>
          <RotateCcw size={32} color="var(--dim)" style={{ margin: "0 auto 10px" }} />
          <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 12, lineHeight: 1.5 }}>
            Take a mock test to start tracking topics for spaced revision.
          </p>
          <Link
            href="/cuet-prep"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 18px",
              borderRadius: 10,
              background: "var(--card2)",
              border: "1px solid var(--border)",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Take a test
          </Link>
        </div>
      ) : dueCount > 0 ? (
        <>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 36, fontWeight: 900, color: "var(--accent)", letterSpacing: "-1px" }}>
              {dueCount}
            </span>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>topics due today</span>
          </div>
          <p style={{ fontSize: 12, color: "var(--dim)", marginBottom: 14 }}>
            {masteredCount} mastered
          </p>
          <Link
            href="/revision"
            style={{
              display: "block",
              padding: "10px",
              borderRadius: 10,
              background: "var(--accent)",
              color: "#0b0f1a",
              fontSize: 13.5,
              fontWeight: 700,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Start Revision
          </Link>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 22, fontWeight: 800, color: "var(--accent)", marginBottom: 4 }}>
            All caught up! 🎉
          </p>
          <p style={{ fontSize: 12.5, color: "var(--muted)" }}>
            {masteredCount} topics mastered
          </p>
        </div>
      )}
    </motion.section>
  );
}

