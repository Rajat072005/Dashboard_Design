"use client";

import { motion } from "framer-motion";
import { Flame, Snowflake } from "lucide-react";

const RING_R = 44;
const CIRC = 2 * Math.PI * RING_R;

export default function DailyGoalCard() {
  const xpToday = 0;
  const xpGoal = 30;
  const streakCurrent = 0;
  const streakLongest = 0;
  const goalPct = Math.min(100, Math.round((xpToday / xpGoal) * 100));
  const dashOffset = CIRC * (1 - goalPct / 100);

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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>
          Daily Goal
        </h2>
        <span style={{ fontSize: 12.5, color: "var(--muted)", fontWeight: 500 }}>
          {xpToday}/{xpGoal} XP
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* Ring */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <svg
            width={100} height={100}
            viewBox="0 0 100 100"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx={50} cy={50} r={RING_R}
              fill="none"
              stroke="var(--border)"
              strokeWidth={8}
            />
            <motion.circle
              cx={50} cy={50} r={RING_R}
              fill="none"
              stroke="url(#goalGradient)"
              strokeWidth={8}
              strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={{ strokeDashoffset: CIRC }}
              animate={{ strokeDashoffset: dashOffset }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
            <defs>
              <linearGradient id="goalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: "var(--text)" }}>
              {goalPct}%
            </span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <Flame
              size={20}
              color={streakCurrent > 0 ? "var(--amber)" : "var(--dim)"}
              style={{ filter: streakCurrent > 0 ? "drop-shadow(0 0 4px var(--amber))" : "none" }}
            />
            <span style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.5px" }}>
              {streakCurrent}
            </span>
            <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>day streak</span>
          </div>
          <p style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 4 }}>
            {xpToday === 0 ? `${xpGoal} XP left today` : "Goal reached! 🎉"}
          </p>
          <p style={{ fontSize: 12.5, color: "var(--muted)" }}>
            Longest: <strong style={{ color: "var(--text)" }}>{streakLongest}</strong> days
          </p>
        </div>
      </div>
    </motion.section>
  );
}

