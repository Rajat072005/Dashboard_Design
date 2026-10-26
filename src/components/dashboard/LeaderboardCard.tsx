"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Crown } from "lucide-react";

const WEEKLY_BOARD = [
  { rank: 1, name: "Priya S.", xp: 340, isYou: false },
  { rank: 2, name: "trehanrajat10", xp: 0, isYou: true },
  { rank: 3, name: "Rohan K.", xp: 0, isYou: false },
  { rank: 4, name: "Anjali M.", xp: 0, isYou: false },
  { rank: 5, name: "Vikram P.", xp: 0, isYou: false },
];

const ALL_BOARD = [
  { rank: 1, name: "Priya S.", xp: 2840, isYou: false },
  { rank: 2, name: "Rohan K.", xp: 1920, isYou: false },
  { rank: 3, name: "trehanrajat10", xp: 0, isYou: true },
  { rank: 4, name: "Anjali M.", xp: 0, isYou: false },
  { rank: 5, name: "Vikram P.", xp: 0, isYou: false },
];

const RANK_STYLES: Record<number, { color: string; icon?: React.ReactNode }> = {
  1: { color: "#f59e0b", icon: <Crown size={12} color="#f59e0b" /> },
  2: { color: "#94a3b8", icon: null },
  3: { color: "#fb923c", icon: null },
};

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.2 } },
};

export default function LeaderboardCard() {
  const [scope, setScope] = useState<"weekly" | "all">("weekly");
  const board = scope === "weekly" ? WEEKLY_BOARD : ALL_BOARD;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
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
          <Trophy size={16} color="var(--amber)" />
          Leaderboard
        </h2>
        {/* Toggle */}
        <div style={{
          display: "flex",
          background: "var(--card2)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          padding: 3,
          gap: 2,
        }}>
          {(["weekly", "all"] as const).map((opt) => (
            <motion.button
              key={opt}
              onClick={() => setScope(opt)}
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                color: scope === opt ? "var(--card)" : "var(--muted)",
                background: scope === opt ? "var(--accent)" : "transparent",
                transition: "all 0.2s",
                position: "relative",
              }}
            >
              {opt === "weekly" ? "Weekly" : "All Time"}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.ol
          key={scope}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}
        >
          {board.map((entry) => {
            const rankStyle = RANK_STYLES[entry.rank] || { color: "var(--muted)" };
            return (
              <motion.li
                key={`${entry.rank}-${entry.name}`}
                variants={rowVariants}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 12px",
                  borderRadius: 10,
                  background: entry.isYou ? "var(--accent-light)" : "var(--card2)",
                  border: `1px solid ${entry.isYou ? "rgba(16,185,129,0.25)" : "var(--border)"}`,
                }}
              >
                <span style={{
                  width: 22, textAlign: "center",
                  fontSize: 13, fontWeight: 700,
                  color: rankStyle.color,
                  flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {rankStyle.icon || entry.rank}
                </span>
                <div style={{
                  width: 28, height: 28,
                  borderRadius: "50%",
                  background: entry.isYou
                    ? "linear-gradient(135deg, var(--accent), var(--purple))"
                    : "var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, color: entry.isYou ? "#0b0f1a" : "var(--muted)",
                  flexShrink: 0,
                }}>
                  {getInitials(entry.name)}
                </div>
                <span style={{
                  flex: 1, fontSize: 13, fontWeight: entry.isYou ? 700 : 500,
                  color: entry.isYou ? "var(--accent)" : "var(--text)",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                  {entry.isYou ? "You" : entry.name}
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", flexShrink: 0 }}>
                  {entry.xp.toLocaleString()} XP
                </span>
              </motion.li>
            );
          })}
        </motion.ol>
      </AnimatePresence>
    </motion.section>
  );
}

