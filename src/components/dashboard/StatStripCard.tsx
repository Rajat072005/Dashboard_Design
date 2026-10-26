"use client";

const STATS = [
  { id: "streak",   number: "14",    unit: "days", label: "Streak"   },
  { id: "xp",       number: "2,450", unit: "XP",   label: "Total XP" },
  { id: "accuracy", number: "84.5",  unit: "%",    label: "Accuracy" },
];

export default function StatStripCard() {
  return (
    <div className="stat-strip-container">
      {STATS.map(({ id, number, unit, label }, i) => (
        <div
          key={id}
          className={`stat-strip-col ${i > 0 ? "stat-strip-divider" : ""}`}
        >
          {/* Number — neutral text color */}
          <div className="stat-strip-num">
            {number}
            <span className="stat-strip-unit">
              {unit}
            </span>
          </div>
          {/* Label */}
          <div className="stat-strip-label">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
