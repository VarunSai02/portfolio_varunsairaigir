import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#4ade80",
          fontSize: 20,
          fontFamily: "monospace",
          fontWeight: 700,
        }}
      >
        {`>_`}
      </div>
    ),
    { ...size }
  );
}
