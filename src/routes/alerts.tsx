import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { MissionShell } from "@/components/maitri/mission-shell";
import { alerts } from "@/components/maitri/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/alerts")({
  head: () => ({
    meta: [
      { title: "MAITRI Alerts — Early Psychological Risk Detection" },
      {
        name: "description",
        content:
          "Prioritised wellness alerts from voice, sleep and biometric analysis with recommended crew interventions.",
      },
      { property: "og:title", content: "MAITRI Alerts — Early Psychological Risk Detection" },
      {
        property: "og:description",
        content:
          "Prioritised wellness alerts from voice, sleep and biometric analysis with recommended crew interventions.",
      },
    ],
  }),
  component: AlertsPage,
});

const icons = {
  critical: ShieldAlert,
  warning: AlertTriangle,
  info: Info,
} as const;

function AlertsPage() {
  return (
    <MissionShell>
      <div className="mb-8">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
          Flight surgeon queue
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Alerts</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Signals raised by the wellness model, ordered by severity with recommended actions.
        </p>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert) => {
          const Icon = icons[alert.severity];
          return (
            <Card key={alert.id} className="border-border/70 bg-card/70">
              <CardContent className="flex flex-wrap items-start gap-4 pt-6">
                <Icon
                  className={
                    alert.severity === "critical"
                      ? "size-5 text-destructive"
                      : alert.severity === "warning"
                        ? "size-5 text-accent"
                        : "size-5 text-muted-foreground"
                  }
                />
                <div className="min-w-60 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-medium">{alert.title}</p>
                    <Badge
                      variant={alert.severity === "critical" ? "destructive" : "secondary"}
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{alert.detail}</p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">
                    {alert.crew} · {alert.time}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Acknowledge
                  </Button>
                  <Button size="sm">Start intervention</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </MissionShell>
  );
}
