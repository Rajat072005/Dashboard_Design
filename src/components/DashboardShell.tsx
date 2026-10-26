"use client";

import { useState, useEffect } from "react";
import TactileDock from "./dashboard/TactileDock";
import DashboardHeader from "./DashboardHeader";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Automatically collapse sidebar when viewport is below 900px
  useEffect(() => {
    const media = window.matchMedia("(max-width: 899.98px)");
    const handleMedia = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsExpanded(false);
      }
    };
    if (media.matches) {
      setIsExpanded(false);
    }
    media.addEventListener("change", handleMedia);
    return () => media.removeEventListener("change", handleMedia);
  }, []);

  const handleToggle = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 900) {
      setIsExpanded((prev) => !prev);
    }
  };

  const sidebarWidth = isExpanded ? 240 : 72;
  const sidebarWidthPx = `${sidebarWidth}px`;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "var(--color-bg)",
      }}
    >
      {/* Fixed sidebar */}
      <TactileDock isExpanded={isExpanded} onToggle={handleToggle} />

      {/* Main content — offset by sidebar width with subtle page fade-in */}
      <main
        className="dashboard-main fade-in"
        style={{
          marginLeft: sidebarWidthPx,
          flex: 1,
          minWidth: 0,
          transition: "margin-left 150ms ease",
          padding: "var(--space-unit)",
        }}
      >
        {/* Inner container: max 1200px, centered */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-unit)",
          }}
        >
          <DashboardHeader />
          {children}
        </div>
      </main>
    </div>
  );
}
