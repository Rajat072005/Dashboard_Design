"use client";

import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";

interface Subject {
  name: string;
  score: number;
  color: string;
}

const SUBJECTS: Subject[] = [
  { name: "Physics", score: 60, color: "var(--color-physics)" },
  { name: "Mathematics", score: 80, color: "var(--color-math)" },
  { name: "Chemistry", score: 70, color: "var(--color-chem)" },
  { name: "Biology", score: 77, color: "var(--color-bio)" },
  { name: "English", score: 50, color: "var(--color-eng)" },
];

export default function ResultsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="edu-card"
      style={{
        padding: "24px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* Card Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>
          Results
        </h3>
        <button
          aria-label="Options"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer",
            padding: 4,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
          }}
        >
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Subjects List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {SUBJECTS.map((subject, index) => (
          <div key={subject.name} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Subject dot + label */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, width: 130, flexShrink: 0 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: subject.color,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  whiteSpace: "nowrap",
                }}
              >
                {subject.name}
              </span>
            </div>

            {/* Progress Track */}
            <div
              style={{
                flex: 1,
                height: 8,
                backgroundColor: "var(--border-card)",
                borderRadius: 999,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${subject.score}%` }}
                transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: "100%",
                  backgroundColor: subject.color,
                  borderRadius: 999,
                }}
              />
            </div>

            {/* Percentage Label */}
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--text-secondary)",
                width: 38,
                textAlign: "right",
                flexShrink: 0,
              }}
            >
              {subject.score}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

