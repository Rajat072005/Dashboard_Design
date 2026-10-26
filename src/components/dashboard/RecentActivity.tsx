"use client";

import { motion, type Variants } from "framer-motion";
import { BookOpen, CheckCircle, Clock } from "lucide-react";

const ACTIVITIES = [
  {
    kind: "ncert",
    label: "Triangles · Class 10 Maths",
    xp: 5,
    time: "2 hours ago",
    color: "var(--accent)",
    icon: BookOpen,
  },
  {
    kind: "test",
    label: "CUET Mock · Chemistry 2023",
    xp: 20,
    time: "Yesterday",
    color: "var(--purple)",
    icon: CheckCircle,
  },
  {
    kind: "ncert",
    label: "Light & Reflection · Class 10",
    xp: 5,
    time: "2 days ago",
    color: "var(--sky)",
    icon: BookOpen,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function RecentActivity() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5 }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "22px 24px",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>
          Recent Activity
        </h2>
      </div>

      {ACTIVITIES.length === 0 ? (
        <div style={{ textAlign: "center", padding: "24px 0" }}>
          <Clock size={32} color="var(--dim)" style={{ margin: "0 auto 10px" }} />
          <p style={{ fontSize: 13, color: "var(--muted)" }}>No activity yet — start studying!</p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {ACTIVITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={i}
                variants={rowVariants}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "13px 0",
                  borderBottom: i < ACTIVITIES.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{
                  width: 8, height: 8,
                  borderRadius: "50%",
                  background: item.color,
                  flexShrink: 0,
                  boxShadow: `0 0 6px ${item.color}88`,
                }} />
                <div style={{
                  width: 34, height: 34,
                  borderRadius: 9,
                  background: `${item.color}18`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={16} color={item.color} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 11.5, color: "var(--dim)", marginTop: 2 }}>
                    {item.time}
                  </p>
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{
                    padding: "3px 9px",
                    borderRadius: 999,
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                    fontSize: 11.5,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  +{item.xp} XP
                </motion.span>
              </motion.article>
            );
          })}
        </motion.div>
      )}
    </motion.section>
  );
}

