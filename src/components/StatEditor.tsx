import type { Stat } from "../types";
import { STAT_COLOR_OPTIONS, makeId } from "../types";

interface Props {
  stats: Stat[];
  onChange: (stats: Stat[]) => void;
}

export default function StatEditor({ stats, onChange }: Props) {
  function updateStat(id: string, patch: Partial<Stat>) {
    onChange(stats.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  }

  function removeStat(id: string) {
    onChange(stats.filter((s) => s.id !== id));
  }

  function addStat() {
    if (stats.length >= 6) return;
    const color = STAT_COLOR_OPTIONS[stats.length % STAT_COLOR_OPTIONS.length];
    onChange([...stats, { id: makeId(), label: "New stat", value: 70, color }]);
  }

  return (
    <div className="section">
      <h3>Stats</h3>
      {stats.map((stat) => (
        <div key={stat.id} className="stat-row">
          <input
            type="text"
            value={stat.label}
            onChange={(e) => updateStat(stat.id, { label: e.target.value })}
            placeholder="Stat name"
          />
          <input
            type="range"
            min={0}
            max={100}
            value={stat.value}
            onChange={(e) => updateStat(stat.id, { value: Number(e.target.value) })}
          />
          <span className="small-num">{stat.value}%</span>
          <span
            className="swatch"
            style={{ background: stat.color }}
            onClick={() => {
              const idx = STAT_COLOR_OPTIONS.indexOf(stat.color);
              const next = STAT_COLOR_OPTIONS[(idx + 1) % STAT_COLOR_OPTIONS.length];
              updateStat(stat.id, { color: next });
            }}
            title="Click to change color"
          />
          <button className="icon-btn" onClick={() => removeStat(stat.id)} aria-label="Remove stat">
            ✕
          </button>
        </div>
      ))}
      {stats.length < 6 && (
        <button className="add-btn" onClick={addStat}>
          + Add stat
        </button>
      )}
    </div>
  );
}
