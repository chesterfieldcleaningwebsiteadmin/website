export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 8vw, 80px) clamp(18px, 5vw, 40px)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: "clamp(22px, 4vw, 36px)",
          color: "var(--text-soft)",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        A little sparkle is coming soon.
      </p>
    </main>
  );
}
