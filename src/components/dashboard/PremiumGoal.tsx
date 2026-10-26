"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function PremiumGoal() {
  const goalPct = 75;
  const radius = 60;
  const circ = 2 * Math.PI * radius;
  const offset = circ * (1 - goalPct / 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="glass-card"
      style={{ padding: 32, gridColumn: "span 1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 24, alignSelf: "flex-start" }}>
        Daily Goal
      </h3>

      <div style={{ position: "relative", width: 140, height: 140 }}>
        <svg width="140" height="140" style={{ transform: "rotate(-90deg)", filter: "drop-shadow(0 0 12px rgba(139,92,246,0.3))" }}>
          <circle cx="70" cy="70" r={radius} fill="none" stroke="var(--border)" strokeWidth="12" />
          <motion.circle 
            cx="70" cy="70" r={radius} 
            fill="none" 
            stroke="url(#purpleGradient)" 
            strokeWidth="12" 
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: offset }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}>
          <Zap size={24} color="#8b5cf6" style={{ marginBottom: 4 }} />
          <span style={{ fontSize: 24, fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>{goalPct}%</span>
        </div>
      </div>
      <p style={{ marginTop: 24, fontSize: 14, color: "var(--text-muted)", textAlign: "center" }}>
        Almost there! Earn 15 more XP to complete today&apos;s goal.
      </p>
    </motion.div>
  );
}

