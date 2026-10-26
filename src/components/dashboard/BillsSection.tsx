"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, BookOpen, RotateCcw, AlertCircle, FileCheck2 } from "lucide-react";

interface StudyCardData {
  id: string;
  icon: typeof BookOpen;
  label: string;
  value: string;
  subtext: string;
  badge: string;
  badgePositive: boolean;
  color: string;
  percent: number;
}

const STUDY_GOALS_DATA: StudyCardData[] = [
  {
    id: "questions",
    icon: BookOpen,
    label: "Daily Question Target",
    value: "200 - 42",
    subtext: "Questions solved this week: 242",
    badge: "+42%",
    badgePositive: true,
    color: "#06B6D4",
    percent: 75,
  },
  {
    id: "revisions",
    icon: RotateCcw,
    label: "Pending Revisions",
    value: "63 - 17",
    subtext: "Concepts mastered this week: 46",
    badge: "+22%",
    badgePositive: true,
    color: "#2DD4BF",
    percent: 60,
  },
  {
    id: "weakspots",
    icon: AlertCircle,
    label: "Weak Chapters Detected",
    value: "5 Topics",
    subtext: "Thermodynamics, Wave Optics",
    badge: "-5%",
    badgePositive: false,
    color: "#F43F5E",
    percent: 25,
  },
  {
    id: "mocks",
    icon: FileCheck2,
    label: "Full Mock Tests Solved",
    value: "13 - 17",
    subtext: "Average Mock Score: 88%",
    badge: "+5%",
    badgePositive: true,
    color: "#84CC16",
    percent: 45,
  },
];

export default function BillsSection() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section style={{ marginBottom: 28 }}>
      {/* Section Header */}
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
          Daily Study Goals & Practice
        </h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand Study Goals" : "Collapse Study Goals"}
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

      {/* Cards Grid */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              overflow: "hidden",
            }}
          >
            {STUDY_GOALS_DATA.map((card, idx) => {
              const Icon = card.icon;
              const radius = 16;
              const circumference = 2 * Math.PI * radius;
              const strokeOffset = circumference * (1 - card.percent / 100);

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="tactile-card"
                  style={{
                    padding: "22px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 140,
                  }}
                >
                  {/* Top Row: Square Icon + Circular Gauge Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 12,
                        backgroundColor: "var(--surface-tactile-subtle)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Icon size={18} strokeWidth={2.2} />
                    </div>

                    {/* Circular Micro Radial Gauge */}
                    <div style={{ position: "relative", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="40" height="40" style={{ transform: "rotate(-90deg)" }}>
                        <circle
                          cx="20"
                          cy="20"
                          r={radius}
                          fill="none"
                          stroke="var(--border-subtle)"
                          strokeWidth="3"
                        />
                        <motion.circle
                          cx="20"
                          cy="20"
                          r={radius}
                          fill="none"
                          stroke={card.color}
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={{ strokeDashoffset: strokeOffset }}
                          transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                        />
                      </svg>
                      <span
                        style={{
                          position: "absolute",
                          fontSize: 9,
                          fontWeight: 800,
                          color: card.badgePositive ? "var(--text-primary)" : "var(--brand-coral)",
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: 4,
                      }}
                    >
                      {card.label}
                    </span>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 22,
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                      }}
                    >
                      {card.value}
                    </h3>
                    <p
                      style={{
                        margin: "6px 0 0",
                        fontSize: 11,
                        fontWeight: 500,
                        color: "var(--text-muted)",
                      }}
                    >
                      {card.subtext}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
