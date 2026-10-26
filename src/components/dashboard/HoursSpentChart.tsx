"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical } from "lucide-react";

interface DayHours {
  day: string;
  hours: number;
  max: number;
  color: string;
}

const HOURS_DATA: DayHours[] = [
  { day: "SUN", hours: 2.5, max: 8, color: "#F472B6" },
  { day: "MON", hours: 6.8, max: 8, color: "#38BDF8" },
  { day: "TUE", hours: 4.2, max: 8, color: "#2DD4BF" },
  { day: "WED", hours: 7.0, max: 8, color: "#FACC15" },
  { day: "THU", hours: 5.5, max: 8, color: "#86EFAC" },
  { day: "FRI", hours: 6.0, max: 8, color: "#FB7185" },
  { day: "SAT", hours: 3.5, max: 8, color: "#FBBF24" },
];

export default function HoursSpentChart() {
  const [hoveredDay, setHoveredDay] = useState<DayHours | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="edu-card"
      style={{
        padding: "24px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>
            Hours Spent
          </h3>
          <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>
            Weekly study distribution
          </span>
        </div>
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
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Floating Hover Badge */}
      <div style={{ height: 24, marginBottom: 8, display: "flex", alignItems: "center" }}>
        <AnimatePresence>
          {hoveredDay ? (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: hoveredDay.color,
                }}
              />
              <span>{hoveredDay.day}: <strong>{hoveredDay.hours} hrs</strong></span>
            </motion.div>
          ) : (
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
              Avg. 5.1 hrs/day • Target: 6 hrs
            </span>
          )}
        </AnimatePresence>
      </div>

      {/* Bars Container */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          height: 160,
          gap: 12,
          paddingBottom: 8,
        }}
      >
        {HOURS_DATA.map((item, idx) => {
          const heightPercent = Math.round((item.hours / item.max) * 100);
          return (
            <div
              key={item.day}
              onMouseEnter={() => setHoveredDay(item)}
              onMouseLeave={() => setHoveredDay(null)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
            >
              {/* Vertical pill track */}
              <div
                style={{
                  width: 14,
                  height: 120,
                  backgroundColor: "var(--border-card)",
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "flex-end",
                  overflow: "hidden",
                  position: "relative",
                  transition: "transform 0.2s ease",
                  transform: hoveredDay?.day === item.day ? "scaleY(1.05)" : "scaleY(1)",
                }}
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPercent}%` }}
                  transition={{ duration: 0.8, delay: 0.08 * idx, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: "100%",
                    backgroundColor: item.color,
                    borderRadius: 999,
                  }}
                />
              </div>

              {/* Day Label */}
              <span
                style={{
                  marginTop: 12,
                  fontSize: 11,
                  fontWeight: hoveredDay?.day === item.day ? 700 : 600,
                  color: hoveredDay?.day === item.day ? "var(--text-primary)" : "var(--text-muted)",
                  transition: "color 0.2s ease",
                }}
              >
                {item.day}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

