import { ImageResponse } from "next/og";

import { profile } from "@/content";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "#ffffff",
          color: "#141414",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            background: "#FF4B1F",
            border: "2px solid #141414",
            marginBottom: 36,
          }}
        />
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -5 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 40, color: "#4a4a4a", marginTop: 12 }}>
          {profile.role}
        </div>
        <div style={{ fontSize: 28, color: "#4a4a4a", marginTop: 40 }}>
          blakeswaidner.com
        </div>
      </div>
    ),
    size,
  );
}
