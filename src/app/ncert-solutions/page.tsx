import DashboardShell from "@/components/DashboardShell";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function NCERTPage() {
  return (
    <ThemeProvider>
      <DashboardShell>
        <div style={{ padding: "40px 0", textAlign: "center" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>NCERT Solutions</h1>
          <p style={{ fontSize: 14, color: "var(--muted)" }}>Coming from the original app — frontend redesign focused on Dashboard.</p>
        </div>
      </DashboardShell>
    </ThemeProvider>
  );
}

