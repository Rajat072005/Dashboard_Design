"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  PenTool,
  RotateCcw,
  TrendingUp,
  Settings,
  GraduationCap,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
  FileText,
} from "lucide-react";

interface DockItem {
  id: string;
  icon: typeof LayoutDashboard;
  href: string;
  label: string;
  badge?: string;
}

const DOCK_ITEMS: DockItem[] = [
  { id: "dashboard",  icon: LayoutDashboard, href: "/dashboard",       label: "Dashboard" },
  { id: "ncert",      icon: BookOpen,        href: "/ncert-solutions",  label: "NCERT Solutions" },
  { id: "cuet",       icon: PenTool,         href: "/cuet-prep",        label: "CUET Prep", badge: "2025" },
  { id: "revision",   icon: RotateCcw,       href: "/revision",         label: "Formula Cards" },
  { id: "doubt",      icon: Sparkles,        href: "/pricing",          label: "AI Doubt Solver" },
  { id: "pyqs",       icon: FileText,        href: "/cuet-prep",        label: "Previous Year Qs" },
  { id: "progress",   icon: TrendingUp,      href: "/progress",         label: "Progress" },
];

interface TactileDockProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const W_EXPANDED = 240;
const W_COLLAPSED = 72;

export default function TactileDock({ isExpanded, onToggle }: TactileDockProps) {
  const pathname = usePathname();
  const width = isExpanded ? W_EXPANDED : W_COLLAPSED;

  return (
    <aside
      className="sidebar-dock"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width,
        transition: "width 150ms ease",
        backgroundColor: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
        display: "flex",
        flexDirection: "column",
        alignItems: isExpanded ? "stretch" : "center",
        zIndex: 60,
        overflow: "hidden",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isExpanded ? "flex-start" : "center",
          padding: isExpanded ? "20px 16px" : "20px 0",
          borderBottom: "1px solid var(--color-border)",
          flexShrink: 0,
        }}
      >
        <Link
          href="/dashboard"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "var(--radius-button)",
              backgroundColor: "var(--color-accent-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <GraduationCap size={16} strokeWidth={1.5} color="var(--color-accent)" />
          </div>
          {isExpanded && (
            <span
              className="sidebar-expanded-content"
              style={{
                fontSize: "var(--text-title)",
                fontWeight: "var(--font-title)",
                color: "var(--color-text)",
                whiteSpace: "nowrap",
              }}
            >
              Learn<span style={{ color: "var(--color-accent)" }}>Prep</span>
            </span>
          )}
        </Link>
      </div>

      {/* Nav */}
      <nav
        style={{
          flex: 1,
          padding: "12px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflowY: "auto",
          width: "100%",
        }}
      >
        {DOCK_ITEMS.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href) && item.href !== "/dashboard";
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              title={!isExpanded ? item.label : undefined}
              className="interactive-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: isExpanded ? 10 : 0,
                justifyContent: isExpanded ? "flex-start" : "center",
                padding: isExpanded ? "9px 12px" : "9px 0",
                width: "100%",
                borderRadius: "var(--radius-button)",
                textDecoration: "none",
                color: isActive ? "var(--color-accent)" : "var(--color-muted)",
                backgroundColor: isActive ? "var(--color-accent-soft)" : "transparent",
                fontSize: "var(--text-meta)",
                fontWeight: isActive ? "var(--font-title)" : "var(--font-meta)",
                transition: "var(--transition-color)",
              }}
            >
              <Icon
                size={18}
                strokeWidth={1.5}
                style={{ flexShrink: 0 }}
              />
              {isExpanded && (
                <span
                  className="sidebar-expanded-content"
                  style={{
                    flex: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.label}
                </span>
              )}
              {isExpanded && item.badge && (
                <span
                  className="sidebar-expanded-content"
                  style={{
                    fontSize: 10,
                    fontWeight: "var(--font-title)",
                    padding: "1px 6px",
                    borderRadius: 999,
                    backgroundColor: "var(--color-accent-soft)",
                    color: "var(--color-accent)",
                    flexShrink: 0,
                  }}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: settings + collapse toggle */}
      <div
        style={{
          padding: "10px 10px",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          alignItems: isExpanded ? "stretch" : "center",
        }}
      >
        <Link
          href="/profile"
          title={!isExpanded ? "Settings & Profile" : undefined}
          className="interactive-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: isExpanded ? 10 : 0,
            justifyContent: isExpanded ? "flex-start" : "center",
            padding: isExpanded ? "9px 12px" : "9px 0",
            width: "100%",
            borderRadius: "var(--radius-button)",
            textDecoration: "none",
            color: "var(--color-muted)",
            fontSize: "var(--text-meta)",
            transition: "var(--transition-color)",
          }}
        >
          <Settings size={18} strokeWidth={1.5} style={{ flexShrink: 0 }} />
          {isExpanded && <span className="sidebar-expanded-content">Settings</span>}
        </Link>

        <button
          onClick={onToggle}
          title={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          className="sidebar-toggle-btn interactive-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: isExpanded ? 10 : 0,
            justifyContent: isExpanded ? "flex-start" : "center",
            padding: isExpanded ? "9px 12px" : "9px 0",
            width: "100%",
            borderRadius: "var(--radius-button)",
            border: "none",
            background: "transparent",
            color: "var(--color-muted)",
            fontSize: "var(--text-meta)",
            cursor: "pointer",
            transition: "var(--transition-color)",
          }}
        >
          {isExpanded
            ? <PanelLeftClose size={18} strokeWidth={1.5} style={{ flexShrink: 0 }} />
            : <PanelLeftOpen  size={18} strokeWidth={1.5} style={{ flexShrink: 0 }} />
          }
          {isExpanded && <span className="sidebar-expanded-content">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
