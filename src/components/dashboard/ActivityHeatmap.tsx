"use client";

import { motion } from "framer-motion";

const WEEKS = 12;
const DAYS = 7;
const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", "Sun"];

function randomXp() {
  return Math.random() < 0.35 ? 0 : Math.floor(Math.random() * 80);
}

function intensityColor(xp: number) {
  if (xp === 0) return "var(--border)";
  if (xp < 15) return "rgba(16,185,129,0.2)";
  if (xp < 35) return "rgba(16,185,129,0.45)";
  if (xp < 55) return "rgba(16,185,129,0.7)";
  return "var(--accent)";
}

// Generate stable mock data (based on position, not random per render)
function generateCells() {
  const seed = [0, 42, 10, 0, 28, 0, 65, 0, 0, 18, 50, 0, 0, 35, 0, 22, 0, 8, 0, 0, 55, 0, 0, 40, 0, 30, 0, 15, 0, 60, 0, 0, 25, 0, 45, 0, 12, 0, 0, 70, 0, 20, 0, 38, 0, 0, 52, 0, 16, 0, 0, 42, 0, 30, 0, 0, 0, 58, 0, 22, 0, 0, 48, 0, 5, 0, 0, 32, 0, 62, 0, 10, 0, 0, 28, 0, 0, 44, 0, 18, 0, 0, 38, 0];
  const total = WEEKS * DAYS;
  return Array.from({ length: total }, (_, i) => seed[i % seed.length]);
}

const cells = generateCells();
const activeDays = cells.filter((v) => v > 0).length;

export default function ActivityHeatmap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "22px 24px",
        boxShadow: "var(--shadow-sm)",
        marginBottom: 16,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
        <div>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 3 }}>
            Study Consistency
          </h2>
          <p style={{ fontSize: 12.5, color: "var(--muted)" }}>
            Last 12 weeks · {activeDays} active days
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: "var(--dim)" }}>Less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <div
              key={lvl}
              style={{
                width: 10, height: 10,
                borderRadius: 3,
                background: intensityColor(lvl === 0 ? 0 : lvl * 18),
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            />
          ))}
          <span style={{ fontSize: 11, color: "var(--dim)" }}>More</span>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: "flex", gap: 10 }}>
        {/* Day labels */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3, paddingTop: 18 }}>
          {DAY_LABELS.map((label, i) => (
            <div key={i} style={{
              height: 12, width: 24,
              fontSize: 10, color: "var(--dim)",
              display: "flex", alignItems: "center",
            }}>
              {label}
            </div>
          ))}
        </div>

        {/* Cells grid */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${WEEKS}, 1fr)`,
            gridTemplateRows: `repeat(${DAYS}, 1fr)`,
            gap: 3,
          }}>
            {cells.map((xp, i) => {
              const week = Math.floor(i / DAYS);
              const day = i % DAYS;
              return (
                <motion.div
                  key={i}
                  title={`${xp} XP`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.01 * i, duration: 0.3 }}
                  whileHover={{ scale: 1.4, zIndex: 10 }}
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: 3,
                    background: intensityColor(xp),
                    border: "1px solid rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    gridColumn: week + 1,
                    gridRow: day + 1,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

