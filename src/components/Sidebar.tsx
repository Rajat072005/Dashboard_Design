"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, BookOpen, PenTool, RotateCcw, FileText,
  TrendingUp, User, Gift, Crown, ExternalLink,
  PanelLeftClose, PanelLeftOpen, LogOut, Sparkles,
} from "lucide-react";

const NAV = [
  {
    title: null,
    items: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "Study",
    items: [
      { id: "ncert", label: "NCERT Solutions", href: "/ncert-solutions", icon: BookOpen },
      { id: "cuet", label: "CUET Prep", href: "/cuet-prep", icon: PenTool, badge: "Soon" },
      { id: "revision", label: "Revision", href: "/revision", icon: RotateCcw },
      { id: "pyqs", label: "PYQs", href: "/pyqs", icon: FileText, badge: "Soon" },
    ],
  },
  {
    title: "Account",
    items: [
      { id: "progress", label: "Progress", href: "/progress", icon: TrendingUp },
      { id: "profile", label: "Profile", href: "/profile", icon: User },
      { id: "referrals", label: "Refer & Earn", href: "/referrals", icon: Gift },
      { id: "pricing", label: "Upgrade to Pro", href: "/pricing", icon: Crown },
    ],
  },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Sidebar({ collapsed, onToggle, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "0",
    }}>
      {/* Brand */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "space-between",
        padding: collapsed ? "20px 0" : "20px 16px 20px 20px",
        borderBottom: "1px solid var(--border)",
        flexShrink: 0,
        minHeight: 64,
      }}>
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              key="brand-full"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <div style={{
                width: 36, height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, var(--accent), var(--purple))",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Sparkles size={18} color="#fff" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px", color: "var(--text)" }}>
                Learn<span style={{ color: "var(--accent)" }}>Prep</span>
              </span>
            </motion.div>
          )}
          {collapsed && (
            <motion.div
              key="brand-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                width: 36, height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, var(--accent), var(--purple))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Sparkles size={18} color="#fff" />
            </motion.div>
          )}
        </AnimatePresence>

        {!collapsed && (
          <button
            onClick={onToggle}
            title="Collapse sidebar"
            style={{
              width: 32, height: 32,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: 8,
              color: "var(--muted)",
              transition: "all 0.2s",
              flexShrink: 0,
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
            <PanelLeftClose size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" }}>
        {collapsed && (
          <button
            onClick={onToggle}
            title="Expand sidebar"
            style={{
              width: "100%", height: 40,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: 10,
              color: "var(--muted)",
              marginBottom: 8,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "none";
            }}
          >
            <PanelLeftOpen size={18} />
          </button>
        )}

        {NAV.map((section, si) => (
          <div key={si} style={{ marginBottom: 4 }}>
            {section.title && !collapsed && (
              <p style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: "1.2px", textTransform: "uppercase",
                color: "var(--dim)", padding: "10px 10px 4px",
              }}>
                {section.title}
              </p>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: collapsed ? 0 : 10,
                    justifyContent: collapsed ? "center" : "flex-start",
                    padding: collapsed ? "10px" : "10px 12px",
                    borderRadius: 10,
                    color: active ? "var(--accent)" : "var(--muted)",
                    fontSize: 13.5,
                    fontWeight: active ? 600 : 500,
                    background: active ? "var(--accent-light)" : "transparent",
                    transition: "all 0.18s ease",
                    position: "relative",
                    textDecoration: "none",
                    marginBottom: 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--hover)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
                    }
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="sidebar-active"
                      style={{
                        position: "absolute",
                        left: 0, top: "15%", bottom: "15%",
                        width: 3,
                        borderRadius: "0 3px 3px 0",
                        background: "var(--accent)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={17} style={{ flexShrink: 0 }} />
                  {!collapsed && (
                    <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.label}
                    </span>
                  )}
                  {!collapsed && "badge" in item && item.badge && (
                    <span style={{
                      fontSize: 10, fontWeight: 600,
                      padding: "2px 7px", borderRadius: 999,
                      background: "var(--purple-light)", color: "var(--purple)",
                      letterSpacing: 0.3, flexShrink: 0,
                    }}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}

        {/* External */}
        <div style={{ marginTop: "auto", paddingTop: 8 }}>
          <a
            href="https://learnprep.in"
            target="_blank"
            rel="noopener noreferrer"
            title={collapsed ? "LearnPrep Site" : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: collapsed ? 0 : 10,
              justifyContent: collapsed ? "center" : "flex-start",
              padding: collapsed ? "10px" : "10px 12px",
              borderRadius: 10,
              color: "var(--muted)",
              fontSize: 13.5,
              fontWeight: 500,
              transition: "all 0.18s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--hover)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
            }}
          >
            <ExternalLink size={17} style={{ flexShrink: 0 }} />
            {!collapsed && <span>LearnPrep Site</span>}
          </a>
        </div>
      </nav>

      {/* User footer */}
      <div style={{ padding: "12px 10px", borderTop: "1px solid var(--border)", flexShrink: 0 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: collapsed ? 0 : 10,
          justifyContent: collapsed ? "center" : "flex-start",
          padding: "8px 10px",
          borderRadius: 10,
          cursor: "pointer",
        }}>
          <div style={{
            width: 34, height: 34,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--purple))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "#0b0f1a",
            flexShrink: 0,
          }}>
            TR
          </div>
          {!collapsed && (
            <>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  trehanrajat10
                </p>
                <p style={{ fontSize: 11, color: "var(--muted)", marginTop: 1 }}>Aspirant</p>
              </div>
              <button
                title="Log out"
                style={{
                  width: 30, height: 30,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: 8, color: "var(--muted)",
                  transition: "all 0.2s", flexShrink: 0,
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
                <LogOut size={14} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

