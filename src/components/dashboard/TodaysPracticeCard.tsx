"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Award, Sparkles } from "lucide-react";

type SubjectTab = "All" | "Physics" | "Mathematics" | "Chemistry";

export default function TodaysPracticeCard() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectTab>("All");

  const topicsMap: Record<SubjectTab, { subject: string; topic: string; count: string; color: string }[]> = {
    All: [
      { subject: "Physics", topic: "Kinematics & Vectors", count: "5 Qs", color: "var(--brand-indigo)" },
      { subject: "Mathematics", topic: "Trigonometric Functions", count: "5 Qs", color: "var(--brand-purple)" },
      { subject: "Chemistry", topic: "Chemical Bonding", count: "5 Qs", color: "var(--brand-emerald)" },
    ],
    Physics: [
      { subject: "Physics", topic: "Kinematics & 2D Motion", count: "5 Qs", color: "var(--brand-indigo)" },
      { subject: "Physics", topic: "Newton's Laws & Friction", count: "5 Qs", color: "var(--brand-indigo)" },
      { subject: "Physics", topic: "Work, Energy & Power", count: "5 Qs", color: "var(--brand-indigo)" },
    ],
    Mathematics: [
      { subject: "Mathematics", topic: "Trigonometric Identities", count: "5 Qs", color: "var(--brand-purple)" },
      { subject: "Mathematics", topic: "Matrices & Determinants", count: "5 Qs", color: "var(--brand-purple)" },
      { subject: "Mathematics", topic: "Continuity & Differentiability", count: "5 Qs", color: "var(--brand-purple)" },
    ],
    Chemistry: [
      { subject: "Chemistry", topic: "Chemical Bonding & Hybridization", count: "5 Qs", color: "var(--brand-emerald)" },
      { subject: "Chemistry", topic: "Solutions & Colligative Properties", count: "5 Qs", color: "var(--brand-emerald)" },
      { subject: "Chemistry", topic: "Electrochemistry & Nernst Equation", count: "5 Qs", color: "var(--brand-emerald)" },
    ],
  };

  const tabs: SubjectTab[] = ["All", "Physics", "Mathematics", "Chemistry"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="tactile-card"
      style={{
        padding: "26px 28px",
        marginBottom: 24,
        background: "var(--surface-tactile)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Banner Accent */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              backgroundColor: "var(--brand-indigo-light)",
              color: "var(--brand-indigo)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <Sparkles size={14} />
            DAILY PRACTICE DRILL
          </div>
          <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>
            Curated from your weak areas & syllabus
          </span>
        </div>

        {/* XP Bonus Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            color: "var(--brand-amber)",
            backgroundColor: "var(--brand-amber-light)",
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          <Award size={14} />
          +50 Bonus XP on Completion
        </div>
      </div>

      {/* Main Title & Time */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
            }}
          >
            Today&apos;s High-Yield Practice Set
          </h2>
          <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--text-secondary)" }}>
            15 mixed multiple-choice questions designed to test conceptual clarity and exam speed.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "var(--text-secondary)",
            fontSize: 13,
            fontWeight: 600,
            backgroundColor: "var(--surface-tactile-subtle)",
            padding: "8px 14px",
            borderRadius: 12,
            border: "1px solid var(--border-subtle)",
            flexShrink: 0,
          }}
        >
          <Clock size={15} color="var(--brand-indigo)" />
          <span>~20 Mins</span>
        </div>
      </div>

      {/* Subject Filter Switcher Pills */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
        {tabs.map((tab) => {
          const isActive = selectedSubject === tab;
          return (
            <button
              key={tab}
              onClick={() => setSelectedSubject(tab)}
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: isActive ? 700 : 600,
                backgroundColor: isActive ? "var(--brand-indigo)" : "var(--surface-tactile-subtle)",
                color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                border: "1px solid",
                borderColor: isActive ? "var(--brand-indigo)" : "var(--border-subtle)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab === "All" ? "All Subjects (Mixed)" : tab}
            </button>
          );
        })}
      </div>

      {/* Topics Breakdown Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
          marginBottom: 20,
        }}
      >
        {topicsMap[selectedSubject].map((item, idx) => (
          <div
            key={`${item.subject}-${idx}`}
            style={{
              padding: "12px 16px",
              borderRadius: 14,
              backgroundColor: "var(--surface-tactile-subtle)",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11.5, fontWeight: 700, color: item.color, textTransform: "uppercase" }}>
                {item.subject}
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }}>
                {item.count}
              </span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>
              {item.topic}
            </span>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 16,
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        {/* Difficulty Distribution Pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, color: "var(--text-muted)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--brand-emerald)" }} />
            <span>5 Easy</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--brand-amber)" }} />
            <span>7 Medium</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--brand-coral)" }} />
            <span>3 Hard</span>
          </div>
        </div>

        {/* Big Tactile CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 26px",
            borderRadius: 14,
            backgroundColor: "var(--brand-indigo)",
            color: "#FFFFFF",
            fontSize: 14,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(79, 70, 229, 0.28)",
            transition: "background-color 0.2s ease",
          }}
        >
          <span>Start {selectedSubject === "All" ? "Mixed" : selectedSubject} Practice</span>
          <ArrowRight size={17} />
        </motion.button>
      </div>
    </motion.div>
  );
}
