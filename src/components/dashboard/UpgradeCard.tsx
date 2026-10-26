"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Crown } from "lucide-react";

const FEATURES = [
  "Unlimited mock tests",
  "AI-powered weak spot analysis",
  "Priority revision scheduling",
  "Ad-free experience",
];

export default function UpgradeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1a1040 100%)",
        border: "1px solid rgba(139, 92, 246, 0.3)",
        borderRadius: 16,
        padding: "22px 24px",
        boxShadow: "var(--glow-purple)",
        marginBottom: 16,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        bottom: -40, right: -40,
        width: 160, height: 160,
        background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 10px",
        borderRadius: 999,
        background: "rgba(245, 158, 11, 0.15)",
        border: "1px solid rgba(245, 158, 11, 0.3)",
        marginBottom: 12,
      }}>
        <Crown size={12} color="var(--amber)" />
        <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--amber)", letterSpacing: 0.5 }}>
          UPGRADE TO PRO
        </span>
      </div>

      <h3 style={{ fontSize: 16, fontWeight: 800, color: "#f1f5f9", marginBottom: 12, letterSpacing: "-0.3px" }}>
        Unlock your full potential
      </h3>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
        {FEATURES.map((feat) => (
          <li key={feat} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 18, height: 18,
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Check size={11} color="var(--accent)" />
            </div>
            <span style={{ fontSize: 13, color: "#94a3b8" }}>{feat}</span>
          </li>
        ))}
      </ul>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/pricing"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "11px 20px",
            borderRadius: 12,
            background: "linear-gradient(135deg, var(--purple), var(--purple-hover))",
            color: "#fff",
            fontSize: 13.5,
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(139, 92, 246, 0.35)",
          }}
        >
          <Sparkles size={15} />
          Upgrade Now
          <ArrowRight size={15} />
        </Link>
      </motion.div>
    </motion.div>
  );
}

