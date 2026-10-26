"use client";

import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";

export default function AttendanceCard() {
  const percentage = 70;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="edu-card"
      style={{
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Avatar circle */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "var(--brand-purple-light)",
            border: "2px solid var(--brand-purple)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 20,
            flexShrink: 0,
          }}
        >
          🧑‍🎓
        </div>

        <div>
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
            Rajat
          </h4>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginTop: 2,
            }}
          >
            <UserCheck size={14} color="var(--brand-purple)" />
            Attendance
          </span>
        </div>
      </div>

      {/* Percentage pill/badge */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 2,
        }}
      >
        <span
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {percentage}%
        </span>
      </div>
    </motion.div>
  );
}

