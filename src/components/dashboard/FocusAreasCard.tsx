"use client";

import Link from "next/link";

const WEAK_TOPICS = [
  { id: "wt1", topic: "Ray Optics: Spherical Refraction", subject: "Physics",     accuracy: 44, href: "/cuet-prep" },
  { id: "wt2", topic: "Chemical Kinetics: Rate Laws",     subject: "Chemistry",   accuracy: 51, href: "/cuet-prep" },
  { id: "wt3", topic: "Integration by Parts",             subject: "Mathematics", accuracy: 58, href: "/cuet-prep" },
];

export default function FocusAreasCard() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-card)",
        padding: "28px 28px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "var(--text-meta)",
            fontWeight: "var(--font-title)",
            color: "var(--color-text)",
          }}
        >
          Focus areas
        </p>
        <Link
          href="/progress"
          style={{
            fontSize: "var(--text-meta)",
            color: "var(--color-accent)",
            textDecoration: "none",
            transition: "opacity 150ms ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          View all
        </Link>
      </div>

      {/* Rows — background shifts slightly on hover (150ms) */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {WEAK_TOPICS.map(({ id, topic, subject, accuracy, href }, i) => (
          <Link
            key={id}
            href={href}
            className="interactive-row"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 10px",
              margin: "0 -10px",
              borderTop: i > 0 ? "1px solid var(--color-border)" : "none",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            {/* Topic + subject */}
            <div style={{ flex: 1, minWidth: 0, paddingRight: 20 }}>
              <div
                style={{
                  fontSize: "var(--text-meta)",
                  color: "var(--color-text)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {topic}
              </div>
              <div
                style={{
                  fontSize: "var(--text-meta)",
                  color: "var(--color-muted)",
                  marginTop: 2,
                }}
              >
                {subject}
              </div>
            </div>

            {/* Accuracy + Review — tight right group */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                flexShrink: 0,
              }}
            >
              {/* Danger only for < 50%, otherwise muted */}
              <span
                style={{
                  fontSize: "var(--text-meta)",
                  fontVariantNumeric: "tabular-nums",
                  color: accuracy < 50 ? "var(--color-danger)" : "var(--color-muted)",
                  minWidth: 38,
                  textAlign: "right",
                  fontWeight: "var(--font-meta)",
                }}
              >
                {accuracy}%
              </span>

              <span
                style={{
                  fontSize: "var(--text-meta)",
                  color: "var(--color-accent)",
                  transition: "opacity 150ms ease",
                }}
              >
                Review
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
