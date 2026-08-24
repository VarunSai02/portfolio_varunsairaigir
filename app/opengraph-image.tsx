import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          color: "#ededee",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#4ade80", fontSize: 28, marginBottom: 24 }}>
          $ whoami
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#a1a1aa", marginTop: 20 }}>
          {site.title} · {site.location}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#6b6b70",
            marginTop: 48,
            maxWidth: 980,
            lineHeight: 1.4,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
