"use client";

import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const DAILY_DONE = 42;
const DAILY_TOTAL = 100;
const RADIUS = 32;
const STROKE = 6;
const CX = RADIUS + STROKE / 2 + 1;
const SIZE = CX * 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DASH = (DAILY_DONE / DAILY_TOTAL) * CIRCUMFERENCE;

export default function DailyDrillHeroCard() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-hero)",
        border: "none",
        borderRadius: "var(--radius-card)",
        padding: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        flexWrap: "wrap",
      }}
    >
      {/* ── Left column ────────────────────────────── */}
      <div style={{ flex: 1, minWidth: 220 }}>

        {/* "TODAY'S DRILL" — small uppercase muted label (WCAG AAA compliant) */}
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "var(--text-meta)",
            fontWeight: "var(--font-meta)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-hero-muted)",
          }}
        >
          Today&apos;s Drill
        </p>

        {/* Topic — largest text in the card */}
        <h2
          style={{
            margin: "0 0 10px",
            fontSize: "var(--text-number)",
            fontWeight: "var(--font-number)",
            lineHeight: 1.1,
            color: "var(--color-hero-text)",
          }}
        >
          Electrostatics &amp; Calculus
        </h2>

        {/* Meta line */}
        <p
          style={{
            margin: "0 0 28px",
            fontSize: "var(--text-meta)",
            color: "var(--color-hero-muted)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Clock size={13} strokeWidth={1.5} color="var(--color-hero-muted)" />
          15 Qs · ~18 mins
        </p>

        {/* CTA — accent fill, WCAG-compliant text, 8px radius, 150ms background hover */}
        <Link
          href="/cuet-prep"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            borderRadius: "var(--radius-button)",
            backgroundColor: "var(--color-accent)",
            color: "var(--color-btn-text)",
            fontSize: "var(--text-meta)",
            fontWeight: "var(--font-title)",
            textDecoration: "none",
            transition: "background-color 150ms ease, opacity 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-accent)";
          }}
        >
          Start Practice Drill
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </div>

      {/* ── Right column — progress ring ───────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
        }}
      >
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ display: "block" }}
          aria-label={`${DAILY_DONE} of ${DAILY_TOTAL} daily questions done`}
        >
          {/* Track — 20% white */}
          <circle
            cx={CX} cy={CX} r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.20)"
            strokeWidth={STROKE}
          />
          {/* Arc — lighter emerald green for high contrast on hero dark green */}
          <circle
            cx={CX} cy={CX} r={RADIUS}
            fill="none"
            stroke="#3DBE8B"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${DASH} ${CIRCUMFERENCE}`}
            transform={`rotate(-90 ${CX} ${CX})`}
          />
          {/* Centre label */}
          <text
            x="50%" y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="var(--color-hero-text)"
            fontSize={13}
            fontWeight={600}
            fontFamily="Inter, sans-serif"
          >
            {DAILY_DONE}/{DAILY_TOTAL}
          </text>
        </svg>

        {/* "daily questions" — small muted label under ring */}
        <span
          style={{
            fontSize: "var(--text-meta)",
            color: "var(--color-hero-muted)",
            textAlign: "center",
          }}
        >
          daily questions
        </span>
      </div>
    </div>
  );
}
