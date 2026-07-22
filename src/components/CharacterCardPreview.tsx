import { forwardRef } from "react";
import type { CharacterSheet } from "../types";

interface Props {
  sheet: CharacterSheet;
}

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const CharacterCardPreview = forwardRef<HTMLDivElement, Props>(({ sheet }, ref) => {
  const { theme } = sheet;

  return (
    <div
      ref={ref}
      style={{
        width: 520,
        padding: 24,
        borderRadius: 24,
        background: `linear-gradient(155deg, ${theme.bgFrom}, ${theme.bgTo})`,
      }}
    >
      <div
        style={{
          background: hexToRgba(theme.cardTint, 0.55),
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderRadius: 20,
          padding: "24px 28px",
          border: `1px solid ${hexToRgba(theme.cardTint, 0.8)}`,
          fontFamily: theme.bodyFont,
        }}
      >
        {/* header */}
        <div style={{ textAlign: "center", borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: 12, marginBottom: 16 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              letterSpacing: "1.5px",
              padding: "4px 12px",
              borderRadius: 20,
              background: hexToRgba(theme.bgFrom, 0.6),
              color: "#4a4560",
            }}
          >
            VOIDDEX ENTRY NO. {sheet.entryNumber}
          </span>
          <h1
            style={{
              fontFamily: theme.headingFont,
              fontSize: 34,
              margin: "8px 0 2px",
              color: "#2b2740",
            }}
          >
            {sheet.name || "Your name"}
          </h1>
          <p style={{ fontSize: 14, color: "#5c577a", margin: 0 }}>{sheet.className}</p>
        </div>

        {/* portrait + bio */}
        <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
          <div
            style={{
              width: 130,
              height: 150,
              flexShrink: 0,
              borderRadius: 14,
              background: sheet.portraitUrl ? `url(${sheet.portraitUrl}) center/cover` : hexToRgba(theme.bgTo, 0.5),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              color: "#7a7594",
              textAlign: "center",
              padding: 6,
            }}
          >
            {!sheet.portraitUrl && "upload a portrait"}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, letterSpacing: "1px", color: "#7a7594", margin: "0 0 6px", textTransform: "uppercase" }}>
              Entry log
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "#3d3854", margin: "0 0 8px" }}>{sheet.bio}</p>
            <p style={{ fontSize: 12, lineHeight: 1.5, color: "#3d3854", margin: 0 }}>
              <strong style={{ color: "#c0577a" }}>Vulnerable to:</strong> {sheet.vulnerableTo}.{" "}
              <strong style={{ color: "#3a9e77" }}>Strong against:</strong> {sheet.strongAgainst}.
            </p>
          </div>
        </div>

        {/* stats */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 11, letterSpacing: "1px", color: "#7a7594", margin: "0 0 10px", textTransform: "uppercase" }}>
            Stats
          </p>
          {sheet.stats.map((stat) => (
            <div key={stat.id} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 3, color: "#2b2740" }}>
                <span>{stat.label}</span>
                <span style={{ fontWeight: 700, color: stat.color }}>{stat.value}%</span>
              </div>
              <div style={{ height: 7, borderRadius: 4, background: hexToRgba(theme.bgFrom, 0.5), overflow: "hidden" }}>
                <div style={{ width: `${stat.value}%`, height: "100%", background: stat.color, borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>

        {/* abilities */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 11, letterSpacing: "1px", color: "#7a7594", margin: "0 0 10px", textTransform: "uppercase" }}>
            Abilities
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {sheet.abilities.map((ab) => (
              <span
                key={ab.id}
                style={{
                  fontSize: 12,
                  padding: "6px 10px",
                  borderRadius: 8,
                  background: hexToRgba(ab.color, 0.16),
                  color: ab.color,
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {ab.label}
              </span>
            ))}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.08)",
            paddingTop: 12,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: "#5c577a",
          }}
        >
          <span>Origin: {sheet.origin}</span>
          <span>Guild: {sheet.guild}</span>
        </div>
      </div>
    </div>
  );
});

CharacterCardPreview.displayName = "CharacterCardPreview";

export default CharacterCardPreview;
