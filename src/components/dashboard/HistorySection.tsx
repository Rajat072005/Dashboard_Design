"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface TestHistoryRecord {
  id: string;
  testName: string;
  subjectIcon: string;
  time: string;
  score: string;
  subject: string;
  duration: string;
  status: "Completed" | "In Progress" | "Needs Review";
}

const TEST_HISTORY_DATA: TestHistoryRecord[] = [
  {
    id: "th1",
    testName: "Rotational Mechanics - Mock 03",
    subjectIcon: "⚛️",
    time: "Today, 12:42 PM",
    score: "160 / 180",
    subject: "Physics · CUET Drill",
    duration: "45 mins",
    status: "Completed",
  },
  {
    id: "th2",
    testName: "Calculus & Integrals - Speed Test",
    subjectIcon: "📐",
    time: "Yesterday, 10:15 AM",
    score: "192 / 200",
    subject: "Mathematics · Board Prep",
    duration: "60 mins",
    status: "Completed",
  },
  {
    id: "th3",
    testName: "Organic Chemistry - Hydrocarbons",
    subjectIcon: "🧪",
    time: "2 days ago, 08:30 AM",
    score: "In Progress",
    subject: "Chemistry · Chapter Drill",
    duration: "15 mins left",
    status: "In Progress",
  },
  {
    id: "th4",
    testName: "Genetics & Evolution - Chapter Quiz",
    subjectIcon: "🧬",
    time: "3 days ago, 04:20 PM",
    score: "95 / 100",
    subject: "Biology · Revision Test",
    duration: "30 mins",
    status: "Completed",
  },
];

export default function HistorySection() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 800,
            color: "var(--text-primary)",
          }}
        >
          Recent Tests & Practice Log
        </h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand History" : "Collapse History"}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChevronUp
            size={18}
            style={{
              transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            {TEST_HISTORY_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="tactile-card"
                style={{
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 20,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {/* Subject Icon + Test Name */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, width: 280 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      backgroundColor: "var(--surface-tactile-active)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {item.subjectIcon}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>
                      {item.testName}
                    </h4>
                    <p style={{ margin: "2px 0 0", fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>
                      {item.subject}
                    </p>
                  </div>
                </div>

                {/* Timestamp */}
                <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500, width: 130 }}>
                  {item.time}
                </span>

                {/* Score */}
                <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text-primary)", width: 100 }}>
                  {item.score}
                </span>

                {/* Duration */}
                <span style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 500, width: 90 }}>
                  {item.duration}
                </span>

                {/* Action Link */}
                <span
                  style={{
                    fontSize: 13,
                    color: "var(--brand-indigo)",
                    fontWeight: 600,
                    cursor: "pointer",
                    width: 120,
                  }}
                >
                  Review Solutions
                </span>

                {/* Status Pill Badge */}
                <div
                  style={{
                    padding: "6px 16px",
                    borderRadius: 999,
                    backgroundColor:
                      item.status === "Completed"
                        ? "rgba(16, 185, 129, 0.12)"
                        : "rgba(245, 158, 11, 0.12)",
                    color:
                      item.status === "Completed"
                        ? "#15803D"
                        : "#B45309",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.status}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
