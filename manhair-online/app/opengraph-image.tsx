import { ImageResponse } from "next/og";

export const alt = "ManHair Online — Men's Non-Surgical Hair Replacement in Orange County, CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0c0c0c 0%, #2a0707 55%, #7a0d0d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(180deg,#DB2020,#7a0d0d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            MH
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>
            ManHair Online
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            Get your hair back. Get your confidence back.
          </div>
          <div style={{ fontSize: 30, fontWeight: 400, opacity: 0.85, maxWidth: 920 }}>
            Premium non-surgical men&apos;s hair replacement — by appointment in Orange County, CA.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            opacity: 0.9,
          }}
        >
          <div style={{ display: "flex" }}>manhaironline.com</div>
          <div style={{ display: "flex" }}>(904) 673-7587</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
