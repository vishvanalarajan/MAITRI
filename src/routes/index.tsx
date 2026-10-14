import { createFileRoute } from "@tanstack/react-router";
import { Activity, HeartPulse, Moon, ShieldAlert } from "lucide-react";
import { MissionShell } from "@/components/maitri/mission-shell";
import { crew, alerts, wellnessTrend } from "@/components/maitri/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAITRI Mission Deck — Astronaut Wellness Monitoring" },
      {
        name: "description",
        content:
          "Live crew wellness telemetry, stress detection and psychological support status for long-duration space missions.",
      },
      { property: "og:title", content: "MAITRI Mission Deck — Astronaut Wellness Monitoring" },
      {
        property: "og:description",
        content:
          "Live crew wellness telemetry, stress detection and psychological support status for long-duration space missions.",
      },
    ],
  }),
  component: MissionDeck,
});

const stats = [
  { label: "Crew wellness index", value: "77", unit: "/100", icon: HeartPulse },
  { label: "Mean sleep (5 sols)", value: "6.0", unit: "h", icon: Moon },
  { label: "Open alerts", value: "3", unit: "", icon: ShieldAlert },
  { label: "Sessions this sol", value: "12", unit: "", icon: Activity },
];

function MissionDeck() {
  const maxStress = Math.max(...wellnessTrend.map((d) => d.stress));

  return (
    <MissionShell>
      <section className="mb-10">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
          Deep space habitat · Crew of 4
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Mission Deck
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          MAITRI continuously reads physiological and behavioural signals, flags early
          psychological risk, and offers on-board conversational support when Earth-link is
          delayed.
        </p>
      </section>

      <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/70 bg-card/70">
            <CardContent className="pt-6">
              <stat.icon className="size-5 text-primary" />
              <p className="mt-4 font-mono text-3xl font-semibold">
                {stat.value}
                <span className="text-base text-muted-foreground">{stat.unit}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-10 grid gap-6 lg:grid-cols-3">
        <Card className="border-border/70 bg-card/70 lg:col-span-2">
          <CardHeader>
            <CardTitle>Crew status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {crew.map((member) => (
              <div key={member.id} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  <Badge
                    variant={
                      member.wellnessScore < 70
                        ? "destructive"
                        : member.wellnessScore < 80
                          ? "secondary"
                          : "default"
                    }
                  >
                    {member.mood}
                  </Badge>
                </div>
                <Progress value={member.wellnessScore} />
                <div className="flex gap-6 font-mono text-xs text-muted-foreground">
                  <span>WELL {member.wellnessScore}</span>
                  <span>STRESS {member.stress}</span>
                  <span>SLEEP {member.sleepHours}h</span>
                  <span>HRV {member.hrv}ms</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/70">
          <CardHeader>
            <CardTitle>Stress trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-end gap-2">
              {wellnessTrend.map((point) => (
                <div key={point.sol} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t bg-primary/70"
                    style={{ height: `${(point.stress / maxStress) * 100}%` }}
                    title={`${point.sol}: stress ${point.stress}`}
                  />
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {point.sol.replace("Sol ", "")}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Latest alerts</h2>
        <div className="grid gap-3">
          {alerts.slice(0, 3).map((alert) => (
            <Card key={alert.id} className="border-border/70 bg-card/70">
              <CardContent className="flex flex-wrap items-start justify-between gap-3 pt-6">
                <div>
                  <p className="font-medium">{alert.title}</p>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">{alert.detail}</p>
                </div>
                <div className="text-right">
                  <Badge variant={alert.severity === "critical" ? "destructive" : "secondary"}>
                    {alert.severity}
                  </Badge>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </MissionShell>
  );
}
