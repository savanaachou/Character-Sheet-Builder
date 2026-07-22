import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import type { CharacterSheet } from "./types";
import { DEFAULT_SHEET } from "./types";
import IdentityEditor from "./components/IdentityEditor";
import StatEditor from "./components/StatEditor";
import AbilityEditor from "./components/AbilityEditor";
import ThemeEditor from "./components/ThemeEditor";
import CharacterCardPreview from "./components/CharacterCardPreview";

export default function App() {
  const [sheet, setSheet] = useState<CharacterSheet>(DEFAULT_SHEET);
  const [exporting, setExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  function patch(p: Partial<CharacterSheet>) {
    setSheet((prev) => ({ ...prev, ...p }));
  }

  async function handleExport() {
    if (!cardRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2, cacheBust: true });
      const link = document.createElement("a");
      link.download = `${sheet.name.replace(/\s+/g, "_") || "character-sheet"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed", err);
    } finally {
      setExporting(false);
    }
  }

  return (
    <div className="app-shell">
      <div className="editor-pane">
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, margin: "0 0 4px" }}>
          Build your own character sheet
        </h2>
        <p style={{ fontSize: 13, color: "#6b6759", marginTop: 0, marginBottom: 24 }}>
          Fill in your stats, abilities, and style. The card on the right updates live.
        </p>

        <IdentityEditor sheet={sheet} onChange={patch} />
        <StatEditor stats={sheet.stats} onChange={(stats) => patch({ stats })} />
        <AbilityEditor abilities={sheet.abilities} onChange={(abilities) => patch({ abilities })} />
        <ThemeEditor theme={sheet.theme} onChange={(themePatch) => patch({ theme: { ...sheet.theme, ...themePatch } })} />

        <button className="reset-link" onClick={() => setSheet(DEFAULT_SHEET)}>
          Reset to defaults
        </button>
      </div>

      <div className="preview-pane">
        <CharacterCardPreview ref={cardRef} sheet={sheet} />
        <button className="export-btn" onClick={handleExport} disabled={exporting}>
          {exporting ? "Exporting..." : "Download as PNG"}
        </button>
      </div>
    </div>
  );
}
