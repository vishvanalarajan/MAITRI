import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { MissionShell } from "@/components/maitri/mission-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/companion")({
  head: () => ({
    meta: [
      { title: "MAITRI Companion — On-board Emotional Support" },
      {
        name: "description",
        content:
          "Conversational AI companion offering grounding exercises, mood check-ins and psychological support during comms blackouts.",
      },
      { property: "og:title", content: "MAITRI Companion — On-board Emotional Support" },
      {
        property: "og:description",
        content:
          "Conversational AI companion offering grounding exercises, mood check-ins and psychological support during comms blackouts.",
      },
    ],
  }),
  component: CompanionPage,
});

type Message = { id: number; from: "maitri" | "crew"; text: string };

const seed: Message[] = [
  {
    id: 1,
    from: "maitri",
    text: "Good morning, Commander. Your HRV dipped overnight and you logged 5.1 hours of sleep. How are you feeling as this sol starts?",
  },
  {
    id: 2,
    from: "crew",
    text: "A bit wired. The docking rehearsal is on my mind.",
  },
  {
    id: 3,
    from: "maitri",
    text: "That makes sense — anticipation before a high-stakes procedure is normal. Want a 4-minute paced breathing set before the briefing, or would you rather talk it through first?",
  },
];

const prompts = [
  "I'm feeling isolated today",
  "Help me wind down before sleep",
  "Run a mood check-in",
  "Record a message for my family",
];

function CompanionPage() {
  const [messages, setMessages] = useState<Message[]>(seed);
  const [draft, setDraft] = useState("");

  function send(text: string) {
    const value = text.trim();
    if (!value) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, from: "crew", text: value },
      {
        id: prev.length + 2,
        from: "maitri",
        text: "Logged. I'll fold that into today's wellness picture — would you like a short grounding exercise now, or a check-in reminder in two hours?",
      },
    ]);
    setDraft("");
  }

  return (
    <MissionShell>
      <div className="mb-8">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
          Private session · Encrypted on habitat
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Companion</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A judgement-free space that works even with a 22-minute signal delay to Earth.
        </p>
      </div>

      <Card className="border-border/70 bg-card/70">
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.from === "crew" ? "flex justify-end" : "flex gap-3"}
              >
                {message.from === "maitri" && (
                  <Sparkles className="mt-1 size-4 shrink-0 text-primary" />
                )}
                <p
                  className={
                    message.from === "crew"
                      ? "max-w-lg rounded-2xl rounded-br-sm bg-primary/15 px-4 py-3 text-sm"
                      : "max-w-lg rounded-2xl rounded-bl-sm bg-secondary px-4 py-3 text-sm"
                  }
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {prompts.map((prompt) => (
              <Button
                key={prompt}
                variant="outline"
                size="sm"
                onClick={() => send(prompt)}
                className="rounded-full"
              >
                {prompt}
              </Button>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(draft);
            }}
            className="flex gap-2 pt-2"
          >
            <Input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Say what's on your mind…"
              aria-label="Message MAITRI"
            />
            <Button type="submit" aria-label="Send message">
              <Send className="size-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </MissionShell>
  );
}
