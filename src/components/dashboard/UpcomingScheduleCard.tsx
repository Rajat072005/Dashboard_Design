"use client";

import { motion } from "framer-motion";
import { Calendar, Video, Clock, Lightbulb } from "lucide-react";

interface ScheduleItem {
  id: string;
  title: string;
  time: string;
  countdown: string;
  type: "Test" | "Live Session" | "Quiz";
  icon: typeof Calendar;
  color: string;
  bgLight: string;
}

const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: "s1",
    title: "CUET Full Mock Test #04",
    time: "Tomorrow, 10:00 AM · 200 Marks",
    countdown: "In 18h",
    type: "Test",
    icon: Calendar,
    color: "var(--brand-indigo)",
    bgLight: "var(--brand-indigo-light)",
  },
  {
    id: "s2",
    title: "Live Doubt Session: Calculus",
    time: "Friday, 04:30 PM · By Dr. Sharma",
    countdown: "Oct 17",
    type: "Live Session",
    icon: Video,
    color: "var(--brand-emerald)",
    bgLight: "var(--brand-emerald-light)",
  },
  {
    id: "s3",
    title: "Weekly Sprint: Modern Physics",
    time: "Saturday, 11:00 AM · 45 Mins",
    countdown: "Oct 18",
    type: "Quiz",
    icon: Clock,
    color: "var(--brand-amber)",
    bgLight: "var(--brand-amber-light)",
  },
  {
    id: "s4",
    title: "Formula Marathon: Calculus & Algebra",
    time: "Sunday, 02:00 PM · Live Masterclass",
    countdown: "Oct 19",
    type: "Live Session",
    icon: Video,
    color: "var(--brand-purple)",
    bgLight: "var(--brand-purple-light)",
  },
];

export default function UpcomingScheduleCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.16 }}
      className="tactile-card"
      style={{
        padding: "26px 28px",
        background: "var(--surface-tactile)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Upcoming Tests & Schedule
            </h3>
            <p style={{ margin: "3px 0 0", fontSize: 13, color: "var(--text-secondary)", fontWeight: 500 }}>
              Live test milestones & scheduled doubt classes
            </p>
          </div>

          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 999,
              backgroundColor: "var(--surface-tactile-subtle)",
              color: "var(--text-muted)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            4 Scheduled
          </span>
        </div>

        {/* Schedule Items List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {SCHEDULE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  padding: "12px 14px",
                  borderRadius: 14,
                  backgroundColor: "var(--surface-tactile-subtle)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  transition: "background-color 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: item.bgLight,
                      color: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} strokeWidth={2.3} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: 13.5,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        margin: "2px 0 0",
                        fontSize: 11.5,
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Countdown Badge */}
                <div
                  style={{
                    fontSize: 11.5,
                    fontWeight: 700,
                    color: item.color,
                    backgroundColor: item.bgLight,
                    padding: "4px 8px",
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {item.countdown}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grounded Motivational Insight Strip */}
      <div
        style={{
          marginTop: 18,
          padding: "12px 14px",
          borderRadius: 14,
          backgroundColor: "var(--surface-tactile-subtle)",
          border: "1px dashed var(--border-subtle)",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            backgroundColor: "var(--brand-amber-light)",
            color: "var(--brand-amber)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Lightbulb size={15} />
        </div>
        <p style={{ margin: 0, fontSize: 11.5, color: "var(--text-secondary)", fontWeight: 500, lineHeight: 1.4 }}>
          <strong>Exam Insight:</strong> 45 mins of spaced active practice today yields 3.4x higher retention than weekend cramming.
        </p>
      </div>
    </motion.div>
  );
}
