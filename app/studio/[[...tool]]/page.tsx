import Link from "next/link";

export default function StudioPage() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
        padding: "40px clamp(18px, 5vw, 40px)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 5vw, 42px)",
          color: "var(--text)",
        }}
      >
        CMS coming soon
      </h1>
      <p style={{ fontSize: "17px", color: "var(--text-soft)", maxWidth: "34em", lineHeight: 1.6 }}>
        The Sanity content studio will be set up here once the Sanity account is
        configured. In the meantime, content is managed in{" "}
        <code
          style={{
            background: "var(--surface-alt)",
            padding: "2px 7px",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          lib/data.ts
        </code>
        .
      </p>
      <Link
        href="/"
        style={{
          marginTop: "8px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--primary)",
          color: "var(--on-primary)",
          fontWeight: 800,
          fontSize: "15px",
          padding: "12px 22px",
          borderRadius: "999px",
        }}
      >
        Back to site
      </Link>
    </main>
  );
}
