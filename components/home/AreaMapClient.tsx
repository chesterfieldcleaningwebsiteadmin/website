"use client";

import dynamic from "next/dynamic";

const AreaMap = dynamic(() => import("./AreaMap"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%", minHeight: 320, background: "var(--surface)" }} />,
});

export default function AreaMapClient({ areas }: { areas: string[] }) {
  return <AreaMap areas={areas} />;
}
