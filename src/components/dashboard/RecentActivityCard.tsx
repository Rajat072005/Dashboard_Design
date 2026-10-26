"use client";

import { motion } from "framer-motion";
import { FileText, Trophy, Bike, Users, Gamepad2, ChevronRight, MoreVertical } from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  time: string;
  icon: typeof FileText;
}

const ACTIVITIES: ActivityItem[] = [
  { id: "quiz", title: "Quiz Contest", time: "21 January, 08:00 AM", icon: FileText },
  { id: "sports", title: "Sports Day", time: "21 January, 09:00 AM", icon: Trophy },
  { id: "cycling", title: "Cycling", time: "21 January, 10:00 AM", icon: Bike },
  { id: "fun", title: "Fun Activity", time: "21 January, 11:00 AM", icon: Users },
  { id: "esports", title: "E sports", time: "21 January, 01:00 PM", icon: Gamepad2 },
];

export default function RecentActivityCard() {
  return (
    <div style={{ marginBottom: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
          Recent Activity
        </h4>
        <button
          aria-label="Options"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Activity List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {ACTIVITIES.map((act) => {
          const Icon = act.icon;
          return (
            <motion.div
              key={act.id}
              whileHover={{ x: 4 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                backgroundColor: "var(--surface-card)",
                border: "1px solid var(--border-card)",
                borderRadius: 14,
                cursor: "pointer",
                transition: "border-color 0.2s ease, background-color 0.2s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    backgroundColor: "var(--surface-card-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} color="var(--text-secondary)" />
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>
                    {act.title}
                  </h5>
                  <p style={{ margin: "2px 0 0", fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>
                    {act.time}
                  </p>
                </div>
              </div>

              <ChevronRight size={15} color="var(--text-muted)" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

