"use client";

import { motion } from "framer-motion";
import { Edit3 } from "lucide-react";

export default function UserProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 0 16px 0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Avatar */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: "var(--brand-purple-light)",
            border: "2px solid var(--brand-purple)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            boxShadow: "var(--shadow-sm)",
          }}
        >
          🧑‍🎓
        </div>

        <div>
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
            Rajat
          </h4>
          <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>
            12th Class (2024-2025)
          </p>
        </div>
      </div>

      <button
        aria-label="Edit Profile"
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          backgroundColor: "var(--surface-card)",
          border: "1px solid var(--border-card)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-secondary)",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--brand-purple)";
          e.currentTarget.style.color = "var(--brand-purple)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-card)";
          e.currentTarget.style.color = "var(--text-secondary)";
        }}
      >
        <Edit3 size={15} />
      </button>
    </motion.div>
  );
}

