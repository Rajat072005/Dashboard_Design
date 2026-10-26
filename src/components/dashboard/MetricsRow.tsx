"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Flame, TrendingUp } from "lucide-react";

interface MetricCard {
  id: string;
  icon: typeof CheckCircle2;
  label: string;
  value: string;
  subtext: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  iconColor: string;
}

const METRICS_DATA: MetricCard[] = [
  {
    id: "questions",
    icon: CheckCircle2,
    label: "Daily Question Target",
    value: "42 / 100",
    subtext: "+18 solved vs yesterday",
    badge: "42% Today",
    badgeBg: "var(--brand-emerald-light)",
    badgeColor: "var(--brand-emerald)",
    iconColor: "var(--brand-emerald)",
  },
  {
    id: "xp",
    icon: Zap,
    label: "Total XP & Standing",
    value: "2,450 XP",
    subtext: "Top 5% · Level 4 Aspirant",
    badge: "Level 4",
    badgeBg: "var(--brand-indigo-light)",
    badgeColor: "var(--brand-indigo)",
    iconColor: "var(--brand-indigo)",
  },
  {
    id: "streak",
    icon: Flame,
    label: "Active Study Streak",
    value: "14 Days",
    subtext: "Longest: 21 days (1.5x bonus)",
    badge: "🔥 Active",
    badgeBg: "var(--brand-amber-light)",
    badgeColor: "var(--brand-amber)",
    iconColor: "var(--brand-amber)",
  },
  {
    id: "accuracy",
    icon: TrendingUp,
    label: "Overall Accuracy",
    value: "84.5%",
    subtext: "+3.2% this week · 1,280 Qs",
    badge: "↑ +3.2%",
    badgeBg: "var(--brand-sky-light)",
    badgeColor: "var(--brand-sky)",
    iconColor: "var(--brand-sky)",
  },
];

export default function MetricsRow() {
  return (
    <section style={{ marginBottom: 28 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
      >
        {METRICS_DATA.map((card, idx) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="tactile-card"
              style={{
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 130,
              }}
            >
              {/* Top Row: Square Icon + Clean Minimalist Pill Badge (No circular gauges) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    backgroundColor: "var(--surface-tactile-subtle)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: card.iconColor,
                  }}
                >
                  <Icon size={19} strokeWidth={2.4} />
                </div>

                {/* Sleek Minimalist Badge Pill */}
                <span
                  style={{
                    fontSize: 11.5,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 999,
                    backgroundColor: card.badgeBg,
                    color: card.badgeColor,
                    letterSpacing: "0.01em",
                  }}
                >
                  {card.badge}
                </span>
              </div>

              {/* Body Content */}
              <div>
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {card.label}
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                  }}
                >
                  {card.value}
                </h3>
                <p
                  style={{
                    margin: "5px 0 8px",
                    fontSize: 11.5,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  {card.subtext}
                </p>

                {/* Sleek Micro-Progress Track */}
                <div
                  style={{
                    width: "100%",
                    height: 4,
                    borderRadius: 999,
                    backgroundColor: "var(--surface-tactile-subtle)",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        card.id === "questions"
                          ? "42%"
                          : card.id === "xp"
                          ? "81%"
                          : card.id === "streak"
                          ? "66%"
                          : "84.5%",
                    }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.08, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      borderRadius: 999,
                      backgroundColor: card.badgeColor,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
