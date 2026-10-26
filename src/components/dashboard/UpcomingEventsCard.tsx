"use client";

import { motion } from "framer-motion";
import { Palette, Sparkles, Video, ChevronRight, MoreVertical } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  time: string;
  icon: typeof Palette;
  iconBg: string;
  iconColor: string;
}

const EVENTS: EventItem[] = [
  {
    id: "art",
    title: "Art & Craft",
    time: "Thursday 12:30 PM",
    icon: Palette,
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
  },
  {
    id: "fest",
    title: "Kids Fun Fest",
    time: "Thursday 01:00 PM",
    icon: Sparkles,
    iconBg: "#F3E8FF",
    iconColor: "#8B5CF6",
  },
  {
    id: "live",
    title: "Live Doubt Clearing",
    time: "Friday 04:30 PM",
    icon: Video,
    iconBg: "#E0F2FE",
    iconColor: "#0284C7",
  },
];

export default function UpcomingEventsCard() {
  return (
    <div style={{ marginBottom: 20 }}>
      {/* Section Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
          Upcoming Events
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

      {/* Events List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {EVENTS.map((event) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={event.id}
              whileHover={{ x: 4 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 14px",
                backgroundColor: "var(--surface-card)",
                border: "1px solid var(--border-card)",
                borderRadius: 16,
                cursor: "pointer",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 12,
                    backgroundColor: event.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color={event.iconColor} />
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>
                    {event.title}
                  </h5>
                  <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>
                    {event.time}
                  </p>
                </div>
              </div>

              <ChevronRight size={16} color="var(--text-muted)" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

