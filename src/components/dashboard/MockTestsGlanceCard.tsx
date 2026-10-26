"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MockTestsGlanceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.14 }}
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
        {/* Header with Arrow Link */}
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
                backgroundColor: "var(--brand-emerald-light)",
                color: "var(--brand-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Award size={15} strokeWidth={2.4} />
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
              Mock Test Series
            </h4>
          </div>

          <Link
            href="/cuet-prep"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              fontWeight: 700,
              color: "var(--brand-indigo)",
              textDecoration: "none",
            }}
          >
            All 8 Mocks
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </Link>
        </div>

        <p style={{ margin: "0 0 14px", fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>
          Next high-stakes simulated examination:
        </p>

        {/* Featured Mock Card Teaser */}
        <Link
          href="/cuet-prep"
          style={{
            textDecoration: "none",
            display: "block",
            padding: "12px 14px",
            borderRadius: 14,
            backgroundColor: "var(--surface-tactile-subtle)",
            border: "1px solid var(--border-subtle)",
            transition: "all 0.2s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <span
              style={{
                fontSize: 10.5,
                fontWeight: 800,
                padding: "2px 7px",
                borderRadius: 999,
                backgroundColor: "var(--brand-indigo-light)",
                color: "var(--brand-indigo)",
              }}
            >
              CUET Full Mock #04
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--brand-emerald)",
              }}
            >
              78% Syllabus Ready
            </span>
          </div>

          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 4,
            }}
          >
            All-India CUET General & Science Mock
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 11.5,
              color: "var(--text-secondary)",
              fontWeight: 500,
              marginTop: 6,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <Calendar size={13} color="var(--text-muted)" />
              Tomorrow, 10:00 AM · 200 M
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
                color: "var(--brand-indigo)",
                fontWeight: 700,
              }}
            >
              Enter Test <ChevronRight size={13} />
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

