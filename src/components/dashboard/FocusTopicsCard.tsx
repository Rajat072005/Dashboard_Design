"use client";

import { motion } from "framer-motion";
import { Target, ArrowRight, AlertCircle } from "lucide-react";

interface FocusTopic {
  id: string;
  subject: string;
  topic: string;
  mastery: number;
  priority: "Critical" | "Needs Review" | "Moderate";
  questionsCount: number;
  color: string;
}

const FOCUS_TOPICS: FocusTopic[] = [
  {
    id: "ft1",
    subject: "Mathematics",
    topic: "Trigonometric Identities & Inverse Functions",
    mastery: 32,
    priority: "Critical",
    questionsCount: 10,
    color: "var(--brand-coral)",
  },
  {
    id: "ft2",
    subject: "Physics",
    topic: "Ray Optics & Refraction at Curved Surfaces",
    mastery: 48,
    priority: "Needs Review",
    questionsCount: 8,
    color: "var(--brand-amber)",
  },
  {
    id: "ft3",
    subject: "Chemistry",
    topic: "Organic Reaction Mechanisms & Electrophiles",
    mastery: 56,
    priority: "Moderate",
    questionsCount: 12,
    color: "var(--brand-indigo)",
  },
];

export default function FocusTopicsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="tactile-card"
      style={{
        padding: "26px 28px",
        background: "var(--surface-tactile)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
            <Target size={18} color="var(--brand-coral)" />
            <h3
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Focus Topics & Weak Spots
            </h3>
          </div>
          <span style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 500 }}>
            Automated AI diagnostic based on your last 5 test attempts
          </span>
        </div>

        <button
          style={{
            background: "transparent",
            border: "none",
            color: "var(--brand-indigo)",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          View All Topics
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Topics List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {FOCUS_TOPICS.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "16px 20px",
              borderRadius: 16,
              backgroundColor: "var(--surface-tactile-subtle)",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
          >
            {/* Subject Tag + Topic Name */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: item.color,
                  }}
                >
                  {item.subject}
                </span>

                {/* Priority Pill */}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 999,
                    backgroundColor:
                      item.priority === "Critical"
                        ? "var(--brand-coral-light)"
                        : item.priority === "Needs Review"
                        ? "var(--brand-amber-light)"
                        : "var(--brand-indigo-light)",
                    color:
                      item.priority === "Critical"
                        ? "var(--brand-coral)"
                        : item.priority === "Needs Review"
                        ? "var(--brand-amber)"
                        : "var(--brand-indigo)",
                  }}
                >
                  {item.priority}
                </span>
              </div>

              <h4
                style={{
                  margin: 0,
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {item.topic}
              </h4>
            </div>

            {/* Progress Bar & Mastery Score */}
            <div style={{ width: 150 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12 }}>
                <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>Mastery</span>
                <span style={{ color: "var(--text-primary)", fontWeight: 800 }}>{item.mastery}%</span>
              </div>
              <div
                style={{
                  height: 6,
                  width: "100%",
                  backgroundColor: "var(--border-tactile)",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${item.mastery}%`,
                    backgroundColor: item.color,
                    borderRadius: 999,
                  }}
                />
              </div>
            </div>

            {/* 1-Click Practice CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "9px 16px",
                borderRadius: 12,
                backgroundColor: "var(--surface-tactile)",
                border: "1px solid var(--border-tactile)",
                color: "var(--text-primary)",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "var(--shadow-card)",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>Practice ({item.questionsCount} Qs)</span>
              <ArrowRight size={13} color="var(--brand-indigo)" />
            </motion.button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
