"use client";

import { motion } from "framer-motion";
import { BookOpen, Zap, Sparkles, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface QuickLinkItem {
  id: string;
  title: string;
  href: string;
  icon: typeof BookOpen;
  color: string;
  bgLight: string;
}

const QUICK_LINKS: QuickLinkItem[] = [
  {
    id: "ncert",
    title: "NCERT Solutions",
    href: "/ncert-solutions",
    icon: BookOpen,
    color: "var(--brand-indigo)",
    bgLight: "var(--brand-indigo-light)",
  },
  {
    id: "formulas",
    title: "Formula Cards",
    href: "/revision",
    icon: Zap,
    color: "var(--brand-amber)",
    bgLight: "var(--brand-amber-light)",
  },
  {
    id: "doubt",
    title: "AI Doubt Solver",
    href: "/pricing",
    icon: Sparkles,
    color: "var(--brand-purple)",
    bgLight: "var(--brand-purple-light)",
  },
  {
    id: "pyq",
    title: "Previous Year Qs",
    href: "/cuet-prep",
    icon: FileText,
    color: "var(--brand-emerald)",
    bgLight: "var(--brand-emerald-light)",
  },
];

export default function QuickLinksCompactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.18 }}
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
        {/* Header */}
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
                backgroundColor: "var(--brand-sky-light)",
                color: "var(--brand-sky)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zap size={15} strokeWidth={2.4} />
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
              Quick Shortcuts
            </h4>
          </div>

          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 999,
              backgroundColor: "var(--surface-tactile-subtle)",
              color: "var(--text-muted)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            4 Portals
          </span>
        </div>

        {/* 2x2 Compact Tile Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
          }}
        >
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 12,
                    backgroundColor: "var(--surface-tactile-subtle)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      backgroundColor: item.bgLight,
                      color: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} strokeWidth={2.3} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </div>
                  </div>

                  <ArrowUpRight size={12} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

