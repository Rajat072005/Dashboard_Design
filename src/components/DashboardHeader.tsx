"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function DashboardHeader() {
  const { theme, toggleTheme } = useTheme();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="dashboard-header">
      {/* Left: greeting */}
      <h1
        style={{
          margin: 0,
          fontSize: "var(--text-title)",
          fontWeight: "var(--font-title)",
          color: "var(--color-text)",
          whiteSpace: "nowrap",
        }}
      >
        Good morning, Rajat
      </h1>

      {/* Right controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>

        {/* Exam countdown — plain muted text, no badge */}
        <span
          className="header-countdown"
          style={{
            fontSize: "var(--text-meta)",
            color: "var(--color-muted)",
            whiteSpace: "nowrap",
          }}
        >
          CUET 2025 · 48 days left
        </span>

        {/* Search — border only, no background fill */}
        <div
          className="header-search"
          style={{
            backgroundColor: "transparent",
            border: `1px solid ${searchFocused ? "var(--color-accent)" : "var(--color-border)"}`,
          }}
        >
          <Search size={14} strokeWidth={1.5} color="var(--color-muted)" style={{ flexShrink: 0 }} />
          <input
            type="search"
            placeholder="Search chapters, questions…"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "var(--color-text)",
              fontSize: "var(--text-meta)",
              width: "100%",
            }}
          />
        </div>

        {/* Theme toggle — subtle hover background shift in 150ms */}
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="interactive-row"
          style={{
            width: 34,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "var(--radius-button)",
            border: "none",
            background: "transparent",
            color: "var(--color-muted)",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {theme === "dark"
            ? <Sun  size={18} strokeWidth={1.5} />
            : <Moon size={18} strokeWidth={1.5} />
          }
        </button>

        {/* Avatar — accent-soft bg, accent initials, no border */}
        <Link
          href="/profile"
          title="Rajat · CUET Aspirant"
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            backgroundColor: "var(--color-accent-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--color-accent)",
            textDecoration: "none",
            flexShrink: 0,
            transition: "var(--transition-opacity)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          TR
        </Link>
      </div>
    </header>
  );
}
