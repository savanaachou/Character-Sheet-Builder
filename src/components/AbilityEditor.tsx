import type { Ability } from "../types";
import { ABILITY_COLOR_OPTIONS, makeId } from "../types";

interface Props {
  abilities: Ability[];
  onChange: (abilities: Ability[]) => void;
}

export default function AbilityEditor({ abilities, onChange }: Props) {
  function updateAbility(id: string, patch: Partial<Ability>) {
    onChange(abilities.map((a) => (a.id === id ? { ...a, ...patch } : a)));
  }

  function removeAbility(id: string) {
    onChange(abilities.filter((a) => a.id !== id));
  }

  function addAbility() {
    if (abilities.length >= 6) return;
    const color = ABILITY_COLOR_OPTIONS[abilities.length % ABILITY_COLOR_OPTIONS.length];
    onChange([...abilities, { id: makeId(), label: "New ability", color }]);
  }

  return (
    <div className="section">
      <h3>Abilities</h3>
      {abilities.map((ab) => (
        <div key={ab.id} className="ability-row">
          <input
            type="text"
            value={ab.label}
            onChange={(e) => updateAbility(ab.id, { label: e.target.value })}
            placeholder="Ability name"
          />
          <span
            className="swatch"
            style={{ background: ab.color }}
            onClick={() => {
              const idx = ABILITY_COLOR_OPTIONS.indexOf(ab.color);
              const next = ABILITY_COLOR_OPTIONS[(idx + 1) % ABILITY_COLOR_OPTIONS.length];
              updateAbility(ab.id, { color: next });
            }}
            title="Click to change color"
          />
          <button className="icon-btn" onClick={() => removeAbility(ab.id)} aria-label="Remove ability">
            ✕
          </button>
        </div>
      ))}
      {abilities.length < 6 && (
        <button className="add-btn" onClick={addAbility}>
          + Add ability
        </button>
      )}
    </div>
  );
}
