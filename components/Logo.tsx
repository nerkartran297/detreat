import Link from "next/link";

const VARIANTS = {
  nav: { bars: [12, 22, 28, 18, 25], boxH: 28, word: 21, sub: true, gap: 14 },
  footerHome: {
    bars: [13, 24, 30, 19, 27],
    boxH: 30,
    word: 24,
    sub: true,
    gap: 14,
  },
  compact: {
    bars: [10, 17, 22, 14, 20],
    boxH: 22,
    word: 18,
    sub: false,
    gap: 12,
  },
} as const;

const DELAYS = ["-.1s", "-.35s", "-.6s", "-.2s", "-.5s"];

export default function Logo({
  variant = "nav",
  href = "/",
}: {
  variant?: keyof typeof VARIANTS;
  href?: string;
}) {
  const v = VARIANTS[variant];
  return (
    <Link
      href={href}
      className="dt-logo"
      style={{ display: "flex", alignItems: "center", gap: v.gap }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 3,
          height: v.boxH,
        }}
      >
        {v.bars.map((h, i) => (
          <span
            key={i}
            className="dt-bar"
            style={{
              width: 3,
              height: h,
              background: "var(--gold)",
              transformOrigin: "bottom",
              animationDelay: DELAYS[i],
              borderRadius: 1.5,
            }}
          />
        ))}
      </span>
      {v.sub ? (
        <span
          style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}
        >
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize: v.word,
              fontWeight: 400,
              letterSpacing: ".1em",
            }}
          >
            DE-TREAT
          </span>
          <span
            style={{
              fontSize: 8.5,
              letterSpacing: ".4em",
              color: "var(--gold)",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Your sound solution
          </span>
        </span>
      ) : (
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: v.word,
            letterSpacing: ".1em",
          }}
        >
          DE-TREAT
        </span>
      )}
    </Link>
  );
}
