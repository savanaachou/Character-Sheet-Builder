import type { Theme } from "../types";
import { FONT_OPTIONS } from "../types";

interface Props {
  theme: Theme;
  onChange: (patch: Partial<Theme>) => void;
}

export default function ThemeEditor({ theme, onChange }: Props) {
  return (
    <div className="section">
      <h3>Look and feel</h3>
      <div className="row">
        <div className="field" style={{ flex: 1 }}>
          <label>Background start</label>
          <input type="color" value={theme.bgFrom} onChange={(e) => onChange({ bgFrom: e.target.value })} style={{ width: "100%", height: 34 }} />
        </div>
        <div className="field" style={{ flex: 1 }}>
          <label>Background end</label>
          <input type="color" value={theme.bgTo} onChange={(e) => onChange({ bgTo: e.target.value })} style={{ width: "100%", height: 34 }} />
        </div>
      </div>
      <div className="field">
        <label>Card tint</label>
        <input type="color" value={theme.cardTint} onChange={(e) => onChange({ cardTint: e.target.value })} style={{ width: "100%", height: 34 }} />
      </div>
      <div className="field">
        <label>Heading font</label>
        <select value={theme.headingFont} onChange={(e) => onChange({ headingFont: e.target.value })}>
          {FONT_OPTIONS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Body font</label>
        <select value={theme.bodyFont} onChange={(e) => onChange({ bodyFont: e.target.value })}>
          {FONT_OPTIONS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
