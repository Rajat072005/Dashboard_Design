"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ClipboardList } from "lucide-react";

function getTodayLabel() {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

export default function WelcomeBanner() {
  const xpTotal = 0;
  const xpToNext = 100;
  const level = 1;
  const levelTitle = "Aspirant";
  const progressPct = 0;
  const firstName = "trehanrajat10";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 20,
        marginBottom: 24,
        alignItems: "stretch",
      }}
    >
      {/* Hero card */}
      <div style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        padding: "28px 32px",
        boxShadow: "var(--shadow)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background glow orb */}
        <div style={{
          position: "absolute",
          top: -40, left: -40,
          width: 200, height: 200,
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Level pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 12px",
            borderRadius: 999,
            background: "var(--accent-light)",
            border: "1px solid rgba(16,185,129,0.2)",
            marginBottom: 14,
          }}
        >
          <Sparkles size={13} color="var(--accent)" />
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: 0.3 }}>
            LEVEL {level} · {levelTitle.toUpperCase()}
          </span>
        </motion.div>

        <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
          {getGreeting()} · {getTodayLabel()}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          style={{
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: "-0.7px",
            color: "var(--text)",
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          Welcome back,{" "}
          <span style={{
            background: "linear-gradient(135deg, var(--accent), var(--purple))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            {firstName}
          </span>
        </motion.h1>
        <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 20, maxWidth: 460 }}>
          Here&apos;s where you stand today — keep the streak alive and close one weak spot at a time.
        </p>

        {/* XP progress bar */}
        <div style={{ marginTop: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>
              {xpTotal.toLocaleString()} XP
            </span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>
              {xpToNext} XP to next level
            </span>
          </div>
          <div style={{
            width: "100%", height: 7,
            background: "var(--border)",
            borderRadius: 999,
            overflow: "hidden",
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ delay: 0.5, duration: 1, ease: [0.4, 0, 0.2, 1] }}
              style={{
                height: "100%",
                borderRadius: 999,
                background: "linear-gradient(90deg, var(--accent), var(--purple))",
                boxShadow: "0 0 10px var(--accent-glow)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Next action card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          background: "linear-gradient(145deg, #0f172a, #1a2035)",
          border: "1.5px solid var(--accent)",
          borderRadius: 20,
          padding: "24px 28px",
          minWidth: 280,
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          boxShadow: "var(--glow-accent)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div style={{
          position: "absolute",
          top: -30, right: -30,
          width: 140, height: 140,
          background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <span style={{
          display: "inline-block",
          padding: "3px 10px",
          borderRadius: 999,
          background: "var(--accent)",
          color: "#0b0f1a",
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: "uppercase",
          width: "fit-content",
        }}>
          Next Up
        </span>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{
            width: 42, height: 42,
            borderRadius: 12,
            background: "rgba(16,185,129,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            border: "1px solid rgba(16,185,129,0.2)",
          }}>
            <ClipboardList size={20} color="var(--accent)" />
          </div>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3 }}>
              Take your first mock test
            </p>
            <p style={{ fontSize: 12, color: "#64748b", marginTop: 4, lineHeight: 1.5 }}>
              A baseline test unlocks topic mastery, weak-spot detection and your leaderboard rank.
            </p>
          </div>
        </div>

        <motion.a
          href="/cuet-prep/tests"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "11px 20px",
            borderRadius: 12,
            background: "var(--accent)",
            color: "#0b0f1a",
            fontSize: 13.5,
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.2s",
            marginTop: 4,
          }}
        >
          Browse mock tests
          <ArrowRight size={15} />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

