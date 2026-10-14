import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Radio } from "lucide-react";

const nav = [
  { to: "/", label: "Mission Deck" },
  { to: "/companion", label: "Companion" },
  { to: "/alerts", label: "Alerts" },
] as const;

export function MissionShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 45%), radial-gradient(circle at 85% 0%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 40%)",
        }}
      />
      <header className="relative z-10 border-b border-border/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Radio className="size-5 text-primary" />
            <span className="text-lg font-semibold tracking-[0.2em] uppercase">MAITRI</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="ml-auto font-mono text-xs text-muted-foreground">
            MET 214d 05:18 · LINK NOMINAL
          </span>
        </div>
      </header>
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-10">{children}</main>
      <footer className="relative z-10 border-t border-border/70 px-6 py-6 text-center text-xs text-muted-foreground">
        MAITRI — AI wellness companion for long-duration crewed missions
      </footer>
    </div>
  );
}
