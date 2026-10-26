"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Target, Flame, Trophy } from "lucide-react";

const STATS = [
  {
    id: "xp",
    label: "Total XP",
    value: "0",
    hint: "Level 1 · Aspirant",
    icon: Zap,
    color: "var(--accent)",
    bg: "var(--accent-light)",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "accuracy",
    label: "Accuracy",
    value: "—",
    hint: "0 questions answered",
    icon: Target,
    color: "var(--green)",
    bg: "var(--green-light)",
    glow: "rgba(34, 197, 94, 0.15)",
  },
  {
    id: "streak",
    label: "Day Streak",
    value: "0",
    suffix: " days",
    hint: "Longest: 0 days",
    icon: Flame,
    color: "var(--amber)",
    bg: "var(--amber-light)",
    glow: "rgba(245, 158, 11, 0.15)",
  },
  {
    id: "rank",
    label: "Weekly Rank",
    value: "—",
    hint: "0 XP this week",
    icon: Trophy,
    color: "var(--purple)",
    bg: "var(--purple-light)",
    glow: "rgba(139, 92, 246, 0.15)",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function StatsRow() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        marginBottom: 24,
      }}
    >
      {STATS.map((stat) => {
        const Icon = stat.icon;
        return (
          <motion.article
            key={stat.id}
            variants={item}
            whileHover={{ y: -3, boxShadow: `var(--shadow-lg), 0 0 20px ${stat.glow}` }}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "20px 22px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              cursor: "default",
              boxShadow: "var(--shadow-sm)",
              transition: "border-color 0.2s",
            }}
          >
            <div style={{
              width: 48, height: 48,
              borderRadius: 14,
              background: stat.bg,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              border: `1px solid ${stat.color}22`,
            }}>
              <Icon size={22} color={stat.color} />
            </div>
            <div>
              <p style={{ fontSize: 11.5, color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>
                {stat.label}
              </p>
              <p style={{ fontSize: 28, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.8px", lineHeight: 1 }}>
                {stat.value}
                {"suffix" in stat && stat.suffix && (
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--muted)", letterSpacing: 0 }}>
                    {stat.suffix}
                  </span>
                )}
              </p>
              <p style={{ fontSize: 12, color: "var(--dim)", marginTop: 4 }}>
                {stat.hint}
              </p>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

