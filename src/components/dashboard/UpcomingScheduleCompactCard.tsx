"use client";

import { motion } from "framer-motion";
import { Calendar, Video, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CompactEvent {
  id: string;
  title: string;
  time: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  icon: typeof Video;
}

const EVENTS: CompactEvent[] = [
  {
    id: "e1",
    title: "Live Doubt Session: Calculus",
    time: "Friday, 04:30 PM · Dr. Sharma",
    tag: "Live Class",
    tagColor: "var(--brand-emerald)",
    tagBg: "var(--brand-emerald-light)",
    icon: Video,
  },
  {
    id: "e2",
    title: "Weekly Sprint: Modern Physics",
    time: "Saturday, 11:00 AM · 45 Mins",
    tag: "Sprint Test",
    tagColor: "var(--brand-amber)",
    tagBg: "var(--brand-amber-light)",
    icon: Clock,
  },
];

export default function UpcomingScheduleCompactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.16 }}
      className="tactile-card"
      style={{
        padding: "20px 22px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Header with Arrow Link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                backgroundColor: "var(--brand-indigo-light)",
                color: "var(--brand-indigo)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Calendar size={15} strokeWidth={2.4} />
            </div>
            <h4
              style={{
                margin: 0,
                fontSize: 15,
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Upcoming Schedule
            </h4>
          </div>

          <Link
            href="/cuet-prep"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              fontWeight: 700,
              color: "var(--brand-indigo)",
              textDecoration: "none",
            }}
          >
            Full Timetable
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </Link>
        </div>

        {/* 2 Compact Events */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {EVENTS.map((event) => {
            const Icon = event.icon;
            return (
              <div
                key={event.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: 12,
                  backgroundColor: "var(--surface-tactile-subtle)",
                  border: "1px solid var(--border-subtle)",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 9,
                      backgroundColor: event.tagBg,
                      color: event.tagColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} strokeWidth={2.3} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.title}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                        marginTop: 2,
                      }}
                    >
                      {event.time}
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 6,
                    backgroundColor: event.tagBg,
                    color: event.tagColor,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {event.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

