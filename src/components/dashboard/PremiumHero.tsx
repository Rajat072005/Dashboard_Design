"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PremiumHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
      className="glass-card"
      style={{
        padding: "48px 56px",
        marginBottom: 32,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="mesh-bg" />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 600 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 999,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            marginBottom: 20,
          }}
        >
          <Sparkles size={14} color="var(--accent)" />
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent)" }}>
            LEVEL 1 ASPIRANT
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: 48, fontWeight: 800, lineHeight: 1.1,
            color: "var(--text)", marginBottom: 16,
          }}
        >
          Welcome back, <br />
          <span style={{
            background: "linear-gradient(to right, #10b981, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Trehan.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6 }}
        >
          Your baseline test is waiting. Unlock topic mastery, detect weak spots early, and see where you stand on the leaderboard.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <button style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "16px 32px", borderRadius: 999,
          background: "var(--text)", color: "var(--bg-app)",
          fontSize: 15, fontWeight: 700,
          border: "none", cursor: "pointer",
          boxShadow: "0 8px 32px var(--border-glow)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 12px 40px var(--border-glow)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 32px var(--border-glow)";
        }}
        >
          Take your first test
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}

