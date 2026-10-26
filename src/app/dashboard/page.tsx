import type { Metadata } from "next";
import DashboardShell from "@/components/DashboardShell";
import DailyDrillHeroCard from "@/components/dashboard/DailyDrillHeroCard";
import UpNextCard from "@/components/dashboard/UpNextCard";
import StatStripCard from "@/components/dashboard/StatStripCard";
import FocusAreasCard from "@/components/dashboard/FocusAreasCard";

export const metadata: Metadata = {
  title: "Dashboard - LearnPrep Student Hub",
  description: "Curated, high-prestige learning prep dashboard",
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      {/*
        12-column grid, 24px gaps desktop.
        Stacks to 1 column below 900px.
        Row 1: Hero (8 cols) | Up Next (4 cols)
        Row 2: Stat strip (12 cols)
        Row 3: Focus areas (12 cols)
      */}
      <div className="dashboard-grid">
        {/* Row 1 — Hero */}
        <div className="grid-hero">
          <DailyDrillHeroCard />
        </div>

        {/* Row 1 — Up Next */}
        <div className="grid-upnext">
          <UpNextCard />
        </div>

        {/* Row 2 — Stat strip */}
        <div className="grid-full">
          <StatStripCard />
        </div>

        {/* Row 3 — Focus areas */}
        <div className="grid-full">
          <FocusAreasCard />
        </div>
      </div>
    </DashboardShell>
  );
}
