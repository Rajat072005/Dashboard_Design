"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const DATA = [
  { value: 10 }, { value: 15 }, { value: 25 }, { value: 22 }, { value: 40 }, { value: 65 }, { value: 85 }
];

const STATS = [
  { label: "Total XP", value: "2,480", trend: "+12%", color: "var(--accent)" },
  { label: "Accuracy", value: "84%", trend: "+2%", color: "var(--blue)" },
  { label: "Study Streak", value: "14", suffix: "days", trend: "Active", color: "var(--rose)" },
  { label: "Leaderboard", value: "#4", trend: "Top 5%", color: "var(--purple)" },
];

export default function PremiumStats() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 32
    }}>
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + (i * 0.1), duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="glass-card"
          style={{ padding: 24, display: "flex", flexDirection: "column" }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
            {stat.label}
          </span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 36, fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>{stat.value}</span>
            {stat.suffix && <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{stat.suffix}</span>}
          </div>
          
          <div style={{ flex: 1, minHeight: 60, margin: "0 -8px -12px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA} margin={{ top: 10, bottom: 0, left: 0, right: 0 }}>
                <defs>
                  <linearGradient id={`gradient-${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={stat.color} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={stat.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip 
                  cursor={{ stroke: "var(--border)", strokeWidth: 1, strokeDasharray: "4 4" }}
                  contentStyle={{ 
                    background: "var(--surface)", 
                    border: "1px solid var(--border)", 
                    borderRadius: 12, 
                    boxShadow: "var(--shadow-card)",
                    color: "var(--text)"
                  }}
                  itemStyle={{ color: stat.color, fontWeight: 700 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={stat.color} 
                  strokeWidth={3}
                  fill={`url(#gradient-${i})`} 
                  isAnimationActive={true}
                  animationDuration={1500}
                  activeDot={{ r: 6, fill: stat.color, stroke: "var(--surface-solid)", strokeWidth: 3 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

