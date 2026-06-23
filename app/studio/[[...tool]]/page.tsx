"use client";

import dynamic from "next/dynamic";
import type { WorkspaceOptions } from "sanity";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

let config: WorkspaceOptions | null = null;

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
          fontFamily: "system-ui, sans-serif",
          color: "#555",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "22px", color: "#2C2336" }}>
          Sanity Studio not configured yet
        </h1>
        <p style={{ maxWidth: "36em", lineHeight: 1.6 }}>
          Add <code style={{ background: "#f2ead6", padding: "2px 6px", borderRadius: "4px" }}>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code style={{ background: "#f2ead6", padding: "2px 6px", borderRadius: "4px" }}>NEXT_PUBLIC_SANITY_DATASET</code>{" "}
          to your Vercel environment variables to unlock the CMS.
        </p>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  if (!config) config = require("../../../sanity.config").default;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <NextStudio config={config as any} />;
}
