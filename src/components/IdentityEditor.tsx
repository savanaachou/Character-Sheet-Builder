import type { ChangeEvent } from "react";
import type { CharacterSheet } from "../types";

interface Props {
  sheet: CharacterSheet;
  onChange: (patch: Partial<CharacterSheet>) => void;
}

export default function IdentityEditor({ sheet, onChange }: Props) {
  function handlePortrait(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange({ portraitUrl: reader.result as string });
    reader.readAsDataURL(file);
  }

  return (
    <div className="section">
      <h3>Identity</h3>
      <div className="field">
        <label>Name</label>
        <input type="text" value={sheet.name} onChange={(e) => onChange({ name: e.target.value })} />
      </div>
      <div className="field">
        <label>Class / title</label>
        <input type="text" value={sheet.className} onChange={(e) => onChange({ className: e.target.value })} />
      </div>
      <div className="field">
        <label>Portrait</label>
        <input type="file" accept="image/*" onChange={handlePortrait} />
      </div>
      <div className="field">
        <label>Entry log (bio)</label>
        <textarea value={sheet.bio} onChange={(e) => onChange({ bio: e.target.value })} />
      </div>
      <div className="row">
        <div className="field" style={{ flex: 1 }}>
          <label>Vulnerable to</label>
          <input type="text" value={sheet.vulnerableTo} onChange={(e) => onChange({ vulnerableTo: e.target.value })} />
        </div>
      </div>
      <div className="row">
        <div className="field" style={{ flex: 1 }}>
          <label>Strong against</label>
          <input type="text" value={sheet.strongAgainst} onChange={(e) => onChange({ strongAgainst: e.target.value })} />
        </div>
      </div>
      <div className="row">
        <div className="field" style={{ flex: 1 }}>
          <label>Origin</label>
          <input type="text" value={sheet.origin} onChange={(e) => onChange({ origin: e.target.value })} />
        </div>
        <div className="field" style={{ flex: 1 }}>
          <label>Guild</label>
          <input type="text" value={sheet.guild} onChange={(e) => onChange({ guild: e.target.value })} />
        </div>
      </div>
    </div>
  );
}
