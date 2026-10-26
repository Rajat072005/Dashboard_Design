"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DayItem {
  name: string;
  date: number;
}

const DAYS: DayItem[] = [
  { name: "SUN", date: 18 },
  { name: "MON", date: 19 },
  { name: "TUE", date: 20 },
  { name: "WED", date: 21 },
  { name: "THU", date: 22 },
  { name: "FRI", date: 23 },
  { name: "SAT", date: 24 },
];

export default function WeekCalendarCard() {
  const [selectedDate, setSelectedDate] = useState<number>(21);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="edu-card"
      style={{
        padding: "20px 24px",
      }}
    >
      {/* Month Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <button
          aria-label="Previous week"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-secondary)",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChevronLeft size={18} />
        </button>

        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "0.02em",
          }}
        >
          January 2024
        </span>

        <button
          aria-label="Next week"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-secondary)",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Week Day Pills */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 6,
        }}
      >
        {DAYS.map((day) => {
          const isActive = day.date === selectedDate;
          return (
            <button
              key={day.name}
              onClick={() => setSelectedDate(day.date)}
              style={{
                position: "relative",
                border: "1px solid",
                borderColor: isActive ? "var(--brand-purple)" : "var(--border-card)",
                borderRadius: 24,
                padding: "8px 4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                background: isActive ? "var(--brand-purple-light)" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDayPill"
                  style={{
                    position: "absolute",
                    inset: -1,
                    borderRadius: 24,
                    border: "2px solid var(--brand-purple)",
                    pointerEvents: "none",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: isActive ? "var(--brand-purple)" : "var(--text-muted)",
                }}
              >
                {day.name}
              </span>
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  backgroundColor: isActive ? "var(--brand-purple)" : "transparent",
                  color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                }}
              >
                {day.date}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

