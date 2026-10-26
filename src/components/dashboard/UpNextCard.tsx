"use client";

import Link from "next/link";
import { Video, ClipboardCheck, ArrowUpRight } from "lucide-react";

const ITEMS = [
  {
    id: "e1",
    Icon: Video,
    title: "Live Doubt Session",
    meta: "Fri 4:30 PM · Dr. Sharma",
    href: "/cuet-prep",
  },
  {
    id: "e2",
    Icon: ClipboardCheck,
    title: "CUET Full Mock #04",
    meta: "Tomorrow 10 AM · 78% ready",
    href: "/cuet-prep",
  },
];

export default function UpNextCard() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-card)",
        padding: "28px 28px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
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
          Up next
        </p>
        <Link
          href="/cuet-prep"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            fontSize: "var(--text-meta)",
            color: "var(--color-accent)",
            textDecoration: "none",
            transition: "opacity 150ms ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          Full timetable
          <ArrowUpRight size={13} strokeWidth={1.5} />
        </Link>
      </div>

      {/* Plain rows separated by 1px divider — background shifts slightly on hover (150ms) */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {ITEMS.map(({ id, Icon, title, meta, href }, i) => (
          <Link
            key={id}
            href={href}
            className="interactive-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 10px",
              margin: "0 -10px",
              borderTop: i > 0 ? "1px solid var(--color-border)" : "none",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <Icon
              size={18}
              strokeWidth={1.5}
              color="var(--color-muted)"
              style={{ flexShrink: 0 }}
            />
            <div style={{ minWidth: 0, flex: 1 }}>
              <div
                style={{
                  fontSize: "var(--text-meta)",
                  fontWeight: "var(--font-title)",
                  color: "var(--color-text)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: "var(--text-meta)",
                  color: "var(--color-muted)",
                  marginTop: 2,
                }}
              >
                {meta}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
