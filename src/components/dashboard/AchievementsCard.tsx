"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

export default function AchievementsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        borderRadius: 20,
        padding: "20px",
        background: "linear-gradient(145deg, #DBEAFE 0%, #E0E7FF 100%)",
        border: "1px solid rgba(59, 130, 246, 0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <h4
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 800,
              color: "#1E3A8A",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Trophy size={18} color="#D97706" />
            Achievements
          </h4>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: "4px 8px",
              borderRadius: 999,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "#1E3A8A",
            }}
          >
            Level 4
          </span>
        </div>

        <p style={{ margin: "0 0 14px", fontSize: 13, color: "#3B82F6", fontWeight: 600 }}>
          You&apos;re in the <strong>Top 5%</strong> of students this week! 14-day study streak intact.
        </p>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            width: "100%",
            padding: "10px 16px",
            borderRadius: 12,
            backgroundColor: "#2563EB",
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <Award size={15} />
          Claim 250 XP Reward
        </motion.button>
      </div>
    </motion.div>
  );
}
