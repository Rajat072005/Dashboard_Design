"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, MoreVertical, CheckCircle2, Flame, Trophy } from "lucide-react";

interface MonthlyBar {
  month: string;
  score: number;
}

const MONTHS_DATA: MonthlyBar[] = [
  { month: "Feb", score: 58 },
  { month: "Mar", score: 88 },
  { month: "Apr", score: 62 },
  { month: "May", score: 94 },
  { month: "Jun", score: 72 },
  { month: "Jul", score: 65 },
  { month: "Aug", score: 52 },
  { month: "Sep", score: 78 },
];

export default function InvoicesSection() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string>("Mar");

  return (
    <section style={{ marginBottom: 28 }}>
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
          Performance & Syllabus Analytics
        </h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand Performance" : "Collapse Performance"}
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
            style={{
              display: "grid",
              gridTemplateColumns: "310px 250px 1fr",
              gap: 20,
              alignItems: "stretch",
            }}
          >
            {/* ================= 1. HERO GRADIENT GAUGE CARD ================= */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                borderRadius: 24,
                background: "var(--hero-gradient)",
                padding: "24px 26px",
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 18px 40px -4px rgba(79, 70, 229, 0.4)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card Header */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  aria-label="Options"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "rgba(255, 255, 255, 0.7)",
                    cursor: "pointer",
                    padding: 4,
                  }}
                >
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* Speedometer Half-Donut Gauge */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "8px 0 16px",
                  position: "relative",
                }}
              >
                <svg width="180" height="110" viewBox="0 0 180 110">
                  <defs>
                    <linearGradient id="neonArc" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#84CC16" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  {/* Track arc */}
                  <path
                    d="M 20 100 A 70 70 0 0 1 160 100"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Active 68% arc */}
                  <motion.path
                    d="M 20 100 A 70 70 0 0 1 135 48"
                    fill="none"
                    stroke="url(#neonArc)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </svg>

                {/* Center 68% text */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    68%
                  </span>
                </div>
              </div>

              {/* Card Footer Metric */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 8,
                  }}
                >
                  <Trophy size={16} color="#FFFFFF" />
                </div>
                <span style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)", fontWeight: 500 }}>
                  Total XP & Batch Standing
                </span>
                <h3
                  style={{
                    margin: "4px 0 2px",
                    fontSize: 26,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  24,850 XP
                </h3>
                <span style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
                  Top 5% · Class 12 Batch
                </span>
              </div>
            </motion.div>

            {/* ================= 2. TWO STACKED TACTILE CARDS ================= */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Card A: Accuracy */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="tactile-card"
                style={{
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
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
                      color: "var(--brand-emerald)",
                    }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  {/* +12% badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 11,
                      fontWeight: 800,
                      color: "var(--brand-emerald)",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      padding: "4px 8px",
                      borderRadius: 999,
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--brand-emerald)" }} />
                    +12%
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", display: "block" }}>
                    Overall Accuracy
                  </span>
                  <h4
                    style={{
                      margin: "4px 0 2px",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    84.5%
                  </h4>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    1,280 Questions Evaluated
                  </span>
                </div>
              </motion.div>

              {/* Card B: Study Streak */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.14 }}
                className="tactile-card"
                style={{
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
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
                      color: "var(--brand-coral)",
                    }}
                  >
                    <Flame size={18} />
                  </div>
                  {/* 85% circular badge */}
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "2px solid var(--brand-purple)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 800,
                      color: "var(--brand-purple)",
                    }}
                  >
                    85%
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", display: "block" }}>
                    Active Study Streak
                  </span>
                  <h4
                    style={{
                      margin: "4px 0 2px",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    14 Days
                  </h4>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    Target: 30-Day Milestone
                  </span>
                </div>
              </motion.div>
            </div>

            {/* ================= 3. BAR CHART CARD WITH 3D FLOATING TOOLTIP ================= */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="tactile-card"
              style={{
                padding: "24px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              {/* Card Options Header */}
              <div style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Options"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--brand-indigo)",
                    cursor: "pointer",
                    padding: 4,
                  }}
                >
                  <MoreVertical size={18} />
                </button>

                {/* Floating Popover matching reference */}
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      style={{
                        position: "absolute",
                        top: 24,
                        right: 0,
                        backgroundColor: "var(--surface-tactile)",
                        border: "1px solid var(--border-tactile)",
                        borderRadius: 14,
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                        padding: "6px",
                        zIndex: 20,
                        minWidth: 170,
                      }}
                    >
                      <button
                        onClick={() => setMenuOpen(false)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "8px 12px",
                          borderRadius: 8,
                          border: "none",
                          background: "transparent",
                          color: "var(--text-secondary)",
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        Performance Report
                      </button>
                      <button
                        onClick={() => setMenuOpen(false)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "8px 12px",
                          borderRadius: 8,
                          border: "none",
                          background: "transparent",
                          color: "var(--brand-indigo)",
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Solution History
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bars Graphic Area with 3D Tooltip */}
              <div style={{ position: "relative", height: 210, display: "flex", alignItems: "flex-end", paddingBottom: 10 }}>
                {/* 3D Floating Tooltip Badge above selected month */}
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: "22%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--surface-tactile)",
                      border: "1px solid var(--border-tactile)",
                      borderRadius: 10,
                      padding: "6px 14px",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                      fontSize: 12,
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {selectedMonth} 2024
                  </div>
                  {/* Pointing notch */}
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "6px solid var(--surface-tactile)",
                    }}
                  />
                </div>

                {/* Bars Strip */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 12,
                    height: 160,
                  }}
                >
                  {MONTHS_DATA.map((item, idx) => {
                    const isSelected = item.month === selectedMonth;
                    return (
                      <div
                        key={item.month}
                        onClick={() => setSelectedMonth(item.month)}
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          height: "100%",
                          justifyContent: "flex-end",
                          cursor: "pointer",
                        }}
                      >
                        {/* Rounded Bar */}
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${item.score}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.06, ease: "easeOut" }}
                          whileHover={{ scaleY: 1.05 }}
                          style={{
                            width: "70%",
                            maxWidth: 22,
                            borderRadius: 999,
                            backgroundColor: isSelected ? "#4F46E5" : "rgba(129, 140, 248, 0.45)",
                            boxShadow: isSelected ? "0 4px 14px rgba(79, 70, 229, 0.35)" : "none",
                            transition: "background-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                        />

                        {/* Month Label */}
                        <span
                          style={{
                            marginTop: 12,
                            fontSize: 11,
                            fontWeight: isSelected ? 800 : 600,
                            color: isSelected ? "var(--text-primary)" : "var(--text-muted)",
                          }}
                        >
                          {item.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
