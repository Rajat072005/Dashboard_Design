"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const PERFORMANCE_DATA = [
  { day: "SUN", score: 45, avg: 35 },
  { day: "MON", score: 72, avg: 50 },
  { day: "TUE", score: 58, avg: 65 },
  { day: "WED", score: 32, avg: 45 },
  { day: "THU", score: 55, avg: 50 },
  { day: "FRI", score: 88, avg: 60 },
  { day: "SAT", score: 76, avg: 55 },
];

export default function PerformanceWaveChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.25 }}
      className="edu-card"
      style={{
        padding: "24px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>
            Performance
          </h3>
          <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>
            Accuracy & test score trajectory
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, color: "var(--text-muted)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--brand-purple)" }} />
            <span>Score</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--border-card)" }} />
            <span>Batch Avg</span>
          </div>
        </div>
      </div>

      {/* Recharts Wave Container */}
      <div style={{ width: "100%", height: 180, marginTop: 8 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="purpleWave" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--brand-purple)" stopOpacity={0.25} />
                <stop offset="95%" stopColor="var(--brand-purple)" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--text-muted)", fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--text-muted)", fontSize: 10 }}
              domain={[0, 100]}
              ticks={[20, 50, 80]}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div
                      style={{
                        backgroundColor: "var(--surface-card)",
                        border: "1px solid var(--border-card)",
                        borderRadius: 12,
                        padding: "8px 12px",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }}>
                        {payload[0].payload.day}
                      </p>
                      <p style={{ margin: "2px 0 0", fontSize: 13, fontWeight: 600, color: "var(--brand-purple)" }}>
                        Score: {payload[0].value}%
                      </p>
                      <p style={{ margin: "2px 0 0", fontSize: 11, color: "var(--text-muted)" }}>
                        Average: {payload[1]?.value}%
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            {/* Secondary Comparison Line */}
            <Area
              type="natural"
              dataKey="avg"
              stroke="var(--border-card)"
              strokeWidth={2}
              fill="none"
              strokeDasharray="4 4"
            />
            {/* Primary Spline Line */}
            <Area
              type="natural"
              dataKey="score"
              stroke="var(--brand-purple)"
              strokeWidth={3}
              fill="url(#purpleWave)"
              activeDot={{
                r: 6,
                fill: "var(--brand-purple)",
                stroke: "var(--surface-card)",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

