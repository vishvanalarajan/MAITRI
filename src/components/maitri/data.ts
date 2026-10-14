export type Crew = {
  id: string;
  name: string;
  role: string;
  wellnessScore: number;
  stress: number;
  sleepHours: number;
  hrv: number;
  mood: "Stable" | "Elevated stress" | "Fatigued" | "Positive";
};

export const crew: Crew[] = [
  {
    id: "cdr-01",
    name: "Cmdr. A. Varma",
    role: "Mission Commander",
    wellnessScore: 82,
    stress: 34,
    sleepHours: 6.4,
    hrv: 61,
    mood: "Stable",
  },
  {
    id: "fe-02",
    name: "Dr. L. Okafor",
    role: "Flight Engineer",
    wellnessScore: 64,
    stress: 58,
    sleepHours: 4.9,
    hrv: 44,
    mood: "Elevated stress",
  },
  {
    id: "ms-03",
    name: "Dr. M. Tanaka",
    role: "Mission Scientist",
    wellnessScore: 71,
    stress: 47,
    sleepHours: 5.6,
    hrv: 52,
    mood: "Fatigued",
  },
  {
    id: "ms-04",
    name: "S. Delacroix",
    role: "Payload Specialist",
    wellnessScore: 90,
    stress: 21,
    sleepHours: 7.2,
    hrv: 70,
    mood: "Positive",
  },
];

export type Alert = {
  id: string;
  severity: "critical" | "warning" | "info";
  title: string;
  detail: string;
  crew: string;
  time: string;
};

export const alerts: Alert[] = [
  {
    id: "a1",
    severity: "critical",
    title: "Sustained stress signature detected",
    detail:
      "Voice-tone and HRV analysis show 6h of elevated arousal. Recommend guided decompression session and reduced EVA prep load.",
    crew: "Dr. L. Okafor",
    time: "MET 214d 04:12",
  },
  {
    id: "a2",
    severity: "warning",
    title: "Sleep debt accumulating",
    detail:
      "Average sleep 4.9h over 5 sols against a 7h baseline. Circadian lighting adjustment queued.",
    crew: "Dr. L. Okafor",
    time: "MET 213d 22:40",
  },
  {
    id: "a3",
    severity: "warning",
    title: "Reduced social interaction",
    detail:
      "Crew-common-area presence down 38% week-over-week. Suggest scheduled group activity.",
    crew: "Dr. M. Tanaka",
    time: "MET 213d 18:05",
  },
  {
    id: "a4",
    severity: "info",
    title: "Earth-link psychological session completed",
    detail: "Delayed-comms counselling packet acknowledged and archived.",
    crew: "Cmdr. A. Varma",
    time: "MET 212d 09:30",
  },
];

export const wellnessTrend = [
  { sol: "Sol 208", score: 78, stress: 32 },
  { sol: "Sol 209", score: 80, stress: 30 },
  { sol: "Sol 210", score: 75, stress: 38 },
  { sol: "Sol 211", score: 71, stress: 44 },
  { sol: "Sol 212", score: 69, stress: 49 },
  { sol: "Sol 213", score: 74, stress: 43 },
  { sol: "Sol 214", score: 77, stress: 40 },
];
