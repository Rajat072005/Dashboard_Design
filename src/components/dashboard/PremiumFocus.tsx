"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

const TOPICS = [
  { name: "Organic Chem", mastery: 45, color: "#f43f5e" },
  { name: "Calculus", mastery: 62, color: "#3b82f6" },
  { name: "Kinematics", mastery: 78, color: "#10b981" },
];

export default function PremiumFocus() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="glass-card"
      style={{ padding: 32, gridColumn: "span 1", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>Focus Topics</h3>
        <Target size={18} color="var(--text-muted)" />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
        {TOPICS.map((topic, i) => (
          <div key={topic.name}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)" }}>{topic.name}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: topic.color }}>{topic.mastery}%</span>
            </div>
            <div style={{
              height: 6, width: "100%",
              background: "var(--border)",
              borderRadius: 999, overflow: "hidden"
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${topic.mastery}%` }}
                transition={{ delay: 1 + i * 0.2, duration: 1, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: topic.color,
                  borderRadius: 999,
                  boxShadow: `0 0 10px ${topic.color}88`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

