"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  PenTool,
  Zap,
  TrendingUp,
  Sparkles,
  FileCheck2,
  ArrowUpRight,
} from "lucide-react";

interface PortalTile {
  id: string;
  title: string;
  desc: string;
  href: string;
  icon: typeof BookOpen;
  color: string;
  bgLight: string;
  badge?: string;
}

const PORTAL_TILES: PortalTile[] = [
  {
    id: "ncert",
    title: "NCERT Solutions",
    desc: "Class 10 & 12 chapter-wise exercises",
    href: "/ncert-solutions",
    icon: BookOpen,
    color: "var(--brand-indigo)",
    bgLight: "var(--brand-indigo-light)",
    badge: "Updated",
  },
  {
    id: "cuet",
    title: "CUET 2025 Mocks",
    desc: "Full-length timed exam drills",
    href: "/cuet-prep",
    icon: PenTool,
    color: "var(--brand-emerald)",
    bgLight: "var(--brand-emerald-light)",
    badge: "Active",
  },
  {
    id: "revision",
    title: "Formula Flashcards",
    desc: "Rapid equation & concept sheets",
    href: "/revision",
    icon: Zap,
    color: "var(--brand-amber)",
    bgLight: "var(--brand-amber-light)",
    badge: "New",
  },
  {
    id: "progress",
    title: "Grade & Test Analytics",
    desc: "Detailed rank & accuracy trajectory",
    href: "/progress",
    icon: TrendingUp,
    color: "var(--brand-sky)",
    bgLight: "var(--brand-sky-light)",
  },
  {
    id: "doubt",
    title: "AI Doubt Assistant",
    desc: "Instant step-by-step problem guidance",
    href: "/pricing",
    icon: Sparkles,
    color: "var(--brand-purple)",
    bgLight: "var(--brand-purple-light)",
  },
  {
    id: "pyq",
    title: "Previous Year Qs",
    desc: "2020-2024 solved board & entrance sets",
    href: "/cuet-prep",
    icon: FileCheck2,
    color: "#059669",
    bgLight: "rgba(5, 150, 105, 0.12)",
  },
];

export default function QuickShortcutsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.12 }}
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
            Learning Portals & Shortcuts
          </h3>
          <p style={{ margin: "3px 0 0", fontSize: 13, color: "var(--text-secondary)", fontWeight: 500 }}>
            Instant 1-click access to core study materials
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
          6 Portals
        </span>
      </div>

      {/* 2-Column Tactile App Launchpad Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 14,
        }}
      >
        {PORTAL_TILES.map((tile) => {
          const Icon = tile.icon;
          return (
            <Link
              key={tile.id}
              href={tile.href}
              style={{ textDecoration: "none" }}
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "16px 18px",
                  borderRadius: 16,
                  backgroundColor: "var(--surface-tactile-subtle)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  cursor: "pointer",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
                  height: "100%",
                }}
              >
                {/* Tile Icon Square */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: tile.bgLight,
                    color: tile.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <Icon size={20} strokeWidth={2.3} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: 14,
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {tile.title}
                      </h4>
                      {tile.badge && (
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 800,
                            padding: "1px 6px",
                            borderRadius: 999,
                            backgroundColor: tile.bgLight,
                            color: tile.color,
                            flexShrink: 0,
                          }}
                        >
                          {tile.badge}
                        </span>
                      )}
                    </div>
                    <ArrowUpRight size={14} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                  </div>

                  <p
                    style={{
                      margin: "3px 0 0",
                      fontSize: 11.5,
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                      lineHeight: 1.35,
                    }}
                  >
                    {tile.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
