"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, AlertCircle, Target, ChevronRight } from "lucide-react";
import Link from "next/link";

interface TopicGlance {
  id: string;
  subject: string;
  topic: string;
  accuracy: number;
  pendingQs: number;
  urgency: "High" | "Medium";
}

const WEAK_TOPICS: TopicGlance[] = [
  {
    id: "wt1",
    subject: "Physics",
    topic: "Ray Optics: Spherical Refraction",
    accuracy: 44,
    pendingQs: 8,
    urgency: "High",
  },
  {
    id: "wt2",
    subject: "Chemistry",
    topic: "Chemical Kinetics: Rate Laws",
    accuracy: 51,
    pendingQs: 5,
    urgency: "Medium",
  },
];

export default function FocusTopicsGlanceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.12 }}
      className="tactile-card"
      style={{
        padding: "20px 22px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Header with Arrow Link to Dedicated Page */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                backgroundColor: "var(--brand-coral-light)",
                color: "var(--brand-coral)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Target size={15} strokeWidth={2.4} />
            </div>
            <div>
              <h4
                style={{
                  margin: 0,
                  fontSize: 15,
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Focus & Weak Areas
              </h4>
            </div>
          </div>

          <Link
            href="/progress"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              fontWeight: 700,
              color: "var(--brand-indigo)",
              textDecoration: "none",
            }}
          >
            All 6 Topics
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </Link>
        </div>

        <p style={{ margin: "0 0 14px", fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>
          Top priority concepts flagged from your mock errors:
        </p>

        {/* Compact List of 2 Topics */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {WEAK_TOPICS.map((item) => (
            <Link
              key={item.id}
              href="/cuet-prep"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 12px",
                borderRadius: 12,
                backgroundColor: "var(--surface-tactile-subtle)",
                border: "1px solid var(--border-subtle)",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 800,
                      padding: "1px 6px",
                      borderRadius: 4,
                      backgroundColor: item.urgency === "High" ? "var(--brand-coral-light)" : "var(--brand-amber-light)",
                      color: item.urgency === "High" ? "var(--brand-coral)" : "var(--brand-amber)",
                    }}
                  >
                    {item.accuracy}% Acc
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)" }}>
                    {item.subject}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.topic}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: "var(--brand-indigo)",
                  marginLeft: 8,
                  flexShrink: 0,
                }}
              >
                Review
                <ChevronRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

