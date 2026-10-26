"use client";

import { motion } from "framer-motion";

const WEEKS = 14;
const DAYS = 7;

function generateCells() {
  const seed = [0, 42, 10, 0, 28, 0, 65, 0, 0, 18, 50, 0, 0, 35, 0, 22, 0, 8, 0, 0, 55, 0, 0, 40, 0, 30, 0, 15, 0, 60, 0, 0, 25, 0, 45, 0, 12, 0, 0, 70, 0, 20, 0, 38, 0, 0, 52, 0, 16, 0, 0, 42, 0, 30, 0, 0, 0, 58, 0, 22, 0, 0, 48, 0, 5, 0, 0, 32, 0, 62, 0, 10, 0, 0, 28, 0, 0, 44, 0, 18, 0, 0, 38, 0, 100, 20, 0, 15, 50, 80, 0, 10, 0, 45, 0];
  const total = WEEKS * DAYS;
  return Array.from({ length: total }, (_, i) => seed[i % seed.length]);
}

const cells = generateCells();

function getIntensity(xp: number) {
  if (xp === 0) return "var(--border)";
  if (xp < 25) return "rgba(16, 185, 129, 0.2)";
  if (xp < 50) return "rgba(16, 185, 129, 0.4)";
  if (xp < 75) return "rgba(16, 185, 129, 0.7)";
  return "rgba(16, 185, 129, 1)";
}

export default function PremiumHeatmap() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="glass-card"
      style={{ padding: 32, gridColumn: "span 2", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Consistency</h3>
          <p style={{ color: "var(--text-muted)", fontSize: 14 }}>Last 14 weeks of focused learning.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-muted)" }}>
          <span>Less</span>
          {[0, 20, 40, 60, 80].map(v => (
            <div key={v} style={{ width: 12, height: 12, borderRadius: 4, background: getIntensity(v) }} />
          ))}
          <span>More</span>
        </div>
      </div>
      
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${WEEKS}, 1fr)`,
          gridTemplateRows: `repeat(${DAYS}, 1fr)`,
          gap: 6,
          width: "100%",
        }}>
          {cells.map((xp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.005, duration: 0.4 }}
              whileHover={{ scale: 1.5, zIndex: 10, boxShadow: "0 0 12px rgba(16, 185, 129, 0.5)" }}
              style={{
                aspectRatio: "1",
                borderRadius: 4,
                background: getIntensity(xp),
                border: "1px solid var(--surface)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

