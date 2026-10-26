"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Bell, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface TopBarProps {
  collapsed: boolean;
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function TopBar({ collapsed, onMenuToggle, menuOpen }: TopBarProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`topbar ${collapsed ? "topbar-collapsed" : ""}`}
      role="banner"
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Mobile menu toggle */}
        <button
          onClick={onMenuToggle}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          style={{
            width: 38, height: 38,
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: 10,
            color: "var(--muted)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--hover)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "none";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
          }}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: searchFocused ? "var(--card)" : "var(--card2)",
            border: `1px solid ${searchFocused ? "var(--accent)" : "var(--border)"}`,
            borderRadius: 12,
            padding: "0 16px",
            height: 40,
            minWidth: 240,
            transition: "all 0.2s",
            boxShadow: searchFocused ? "0 0 0 3px var(--accent-light)" : "none",
          }}
        >
          <Search size={14} color="var(--muted)" />
          <input
            type="search"
            placeholder="Search chapters, questions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            style={{
              background: "none",
              border: "none",
              outline: "none",
              color: "var(--text)",
              fontSize: 13.5,
              width: "100%",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            width: 38, height: 38,
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: 10,
            color: "var(--muted)",
            border: "1px solid var(--border)",
            background: "var(--card)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--hover)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-hover)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--card)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
          }}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Notifications */}
        <button
          title="Notifications"
          style={{
            width: 38, height: 38,
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: 10,
            color: "var(--muted)",
            border: "1px solid var(--border)",
            background: "var(--card)",
            position: "relative",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--hover)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--card)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
          }}
        >
          <Bell size={16} />
          <span style={{
            position: "absolute",
            top: 8, right: 8,
            width: 7, height: 7,
            borderRadius: "50%",
            background: "var(--rose)",
            border: "1.5px solid var(--surface)",
          }} />
        </button>

        {/* Avatar */}
        <Link
          href="/profile"
          style={{
            width: 38, height: 38,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--purple))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "#0b0f1a",
            transition: "all 0.2s",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
        >
          TR
        </Link>
      </div>
    </header>
  );
}

