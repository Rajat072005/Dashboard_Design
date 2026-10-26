"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, HelpCircle, Bell, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeProvider";

export default function TactileHeader() {
  const { theme, toggleTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedView, setSelectedView] = useState("Your weekly Academic & Test update");

  const views = [
    "Your weekly Academic & Test update",
    "Monthly CUET & Board Progress",
    "Topic Mastery & Accuracy Report",
  ];

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 32,
        paddingTop: 8,
      }}
    >
      {/* Left Greeting & Dropdown */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: 28,
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Good Morning Rajat
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{selectedView}</span>
              <ChevronDown
                size={14}
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  marginTop: 8,
                  backgroundColor: "var(--surface-tactile)",
                  border: "1px solid var(--border-tactile)",
                  borderRadius: 16,
                  boxShadow: "var(--shadow-card)",
                  padding: "6px",
                  zIndex: 30,
                  minWidth: 260,
                }}
              >
                {views.map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setSelectedView(v);
                      setDropdownOpen(false);
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "8px 12px",
                      borderRadius: 10,
                      border: "none",
                      backgroundColor: selectedView === v ? "var(--surface-tactile-active)" : "transparent",
                      color: selectedView === v ? "var(--brand-indigo)" : "var(--text-primary)",
                      fontSize: 13,
                      fontWeight: selectedView === v ? 700 : 500,
                      cursor: "pointer",
                    }}
                  >
                    {v}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          </div>

          {/* Exam Countdown Badge Chip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
              backgroundColor: "var(--brand-indigo-light)",
              color: "var(--brand-indigo)",
              padding: "3px 10px",
              borderRadius: 999,
              letterSpacing: "0.01em",
            }}
          >
            <span>🎯 Target: CUET 2025</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>48 Days Left</span>
          </div>
        </div>
      </div>

      {/* Right Action Bar (Search + Help + Bell + Theme + Avatar) */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Pill Search Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "var(--surface-tactile)",
            border: "1px solid var(--border-tactile)",
            borderRadius: 999,
            padding: "8px 18px",
            width: 260,
            boxShadow: "var(--shadow-card)",
          }}
        >
          <Search size={15} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Search chapters, questions..."
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              fontSize: 13,
              fontWeight: 500,
              width: "100%",
            }}
          />
        </div>

        {/* Help Circle Button */}
        <button
          aria-label="Doubt Support"
          title="Doubt Support"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            backgroundColor: "var(--surface-tactile)",
            border: "1px solid var(--border-tactile)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            cursor: "pointer",
            boxShadow: "var(--shadow-card)",
            transition: "all 0.2s ease",
          }}
        >
          <HelpCircle size={18} />
        </button>

        {/* Notification Bell */}
        <button
          aria-label="Notifications"
          title="Notifications"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            backgroundColor: "var(--surface-tactile)",
            border: "1px solid var(--border-tactile)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            cursor: "pointer",
            boxShadow: "var(--shadow-card)",
            position: "relative",
            transition: "all 0.2s ease",
          }}
        >
          <Bell size={18} />
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 9,
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "var(--brand-coral)",
            }}
          />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          title="Toggle Theme"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            backgroundColor: "var(--surface-tactile)",
            border: "1px solid var(--border-tactile)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            cursor: "pointer",
            boxShadow: "var(--shadow-card)",
            transition: "all 0.2s ease",
          }}
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Avatar Portrait with Level Badge */}
        <div
          title="Rajat · 12th Class Aspirant"
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            backgroundColor: "var(--surface-tactile-active)",
            border: "2px solid #FFFFFF",
            boxShadow: "var(--shadow-card)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
          }}
        >
          🧑‍🎓
        </div>
      </div>
    </header>
  );
}
