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
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 600 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: "#a3a3a3", marginTop: 12 }}>
          {profile.role}
        </div>
        <div style={{ fontSize: 28, color: "#737373", marginTop: 40 }}>
          blakeswaidner.com
        </div>
      </div>
    ),
    size,
  );
}
