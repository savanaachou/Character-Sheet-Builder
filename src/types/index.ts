export interface Stat {
  id: string;
  label: string;
  value: number; // 0-100
  color: string; // hex
}

export interface Ability {
  id: string;
  label: string;
  color: string; // hex
}

export interface Theme {
  bgFrom: string;
  bgTo: string;
  cardTint: string;
  headingFont: string;
  bodyFont: string;
}

export interface CharacterSheet {
  entryNumber: string;
  name: string;
  className: string;
  portraitUrl: string | null;
  bio: string;
  strongAgainst: string;
  vulnerableTo: string;
  origin: string;
  guild: string;
  stats: Stat[];
  abilities: Ability[];
  theme: Theme;
}

export const FONT_OPTIONS = [
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
  { label: "Nunito", value: "'Nunito', sans-serif" },
  { label: "Bebas Neue", value: "'Bebas Neue', sans-serif" },
  { label: "IBM Plex Mono", value: "'IBM Plex Mono', monospace" },
];

export const ABILITY_COLOR_OPTIONS = [
  "#7F77DD", // purple
  "#1D9E75", // teal
  "#D85A30", // coral
  "#D4537E", // pink
  "#378ADD", // blue
  "#63991F".slice(0, 7),
];

export const STAT_COLOR_OPTIONS = [
  "#7F77DD",
  "#1D9E75",
  "#D85A30",
  "#378ADD",
  "#D4537E",
];

export function makeId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export const DEFAULT_SHEET: CharacterSheet = {
  entryNumber: "001",
  name: "Your name",
  className: "Class: Full-Stack Generalist",
  portraitUrl: null,
  bio: "Write a short, playful bio here. What do you do, and what makes you, you?",
  strongAgainst: "fill in a feature",
  vulnerableTo: "fill in another feature",
  origin: "Your school or background",
  guild: "Your discipline",
  stats: [
    { id: makeId(), label: "Systems architecture", value: 90, color: "#378ADD" },
    { id: makeId(), label: "Visual design", value: 85, color: "#7F77DD" },
    { id: makeId(), label: "Shipping speed", value: 80, color: "#D85A30" },
    { id: makeId(), label: "Debugging persistence", value: 95, color: "#1D9E75" },
  ],
  abilities: [
    { id: makeId(), label: "Game programming", color: "#378ADD" },
    { id: makeId(), label: "Graphic design", color: "#7F77DD" },
    { id: makeId(), label: "3D modeling", color: "#D85A30" },
    { id: makeId(), label: "Home baking", color: "#1D9E75" },
  ],
  theme: {
    bgFrom: "#cfe0f7",
    bgTo: "#e3d7f5",
    cardTint: "#ffffff",
    headingFont: "'Playfair Display', serif",
    bodyFont: "'Nunito', sans-serif",
  },
};
