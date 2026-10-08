import { useEffect, useState, type CSSProperties } from "react";

/**
 * 3-second TDF shatter intro. Pure CSS transforms/opacity (GPU friendly),
 * plays once per browser session, reduced-motion gets a simple fade.
 */
const boxes = [
  { letter: "T", className: "bg-violet-gradient text-foreground" },
  { letter: "D", className: "bg-primary-gradient text-primary-foreground" },
  { letter: "F", className: "bg-surface-gradient text-primary" },
];

// Shard polygons that tile the square, with fall direction + spin.
const shards = [
  { clip: "polygon(0 0,45% 0,38% 40%,0 30%)", dx: -40, rot: -160 },
  { clip: "polygon(45% 0,100% 0,100% 25%,60% 45%,38% 40%)", dx: 30, rot: 120 },
  { clip: "polygon(0 30%,38% 40%,30% 75%,0 70%)", dx: -60, rot: -90 },
  { clip: "polygon(38% 40%,60% 45%,100% 25%,100% 65%,55% 80%,30% 75%)", dx: 10, rot: 200 },
  { clip: "polygon(0 70%,30% 75%,40% 100%,0 100%)", dx: -25, rot: 70 },
  { clip: "polygon(30% 75%,55% 80%,100% 65%,100% 100%,40% 100%)", dx: 45, rot: -140 },
];

const particles = Array.from({ length: 14 }, (_, i) => ({
  x: ((i * 37) % 100) - 50,
  d: 0.55 + ((i * 13) % 30) / 100,
  s: 3 + (i % 4) * 2,
  tone: i % 3,
}));

const KEY = "tdf-intro-played";

function Box({ letter, className, style }: { letter: string; className: string; style?: CSSProperties }) {
  return (
    <div
      style={style}
      className={`intro-box grid aspect-square place-items-center overflow-hidden rounded-2xl border border-border sm:rounded-[1.75rem] ${className}`}
    >
      <span className="text-display select-none" style={{ fontSize: "clamp(2.5rem, 9vw, 6rem)", fontWeight: 700, lineHeight: 1 }}>
        {letter}
      </span>
    </div>
  );
}

export function IntroShatter() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let played = false;
    try { played = sessionStorage.getItem(KEY) === "1"; sessionStorage.setItem(KEY, "1"); } catch {}
    if (played) { setShow(false); return; }
    document.documentElement.style.overflow = "hidden";
    const t = window.setTimeout(() => setShow(false), 3000);
    return () => { window.clearTimeout(t); document.documentElement.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = "";
  }, [show]);

  if (!show) return null;

  return (
    <div className="intro-root fixed inset-0 z-[100] grid place-items-center overflow-hidden" aria-hidden="true">
      {/* Shatter stage */}
      <div className="intro-stage grid w-[min(80vw,520px)] grid-cols-3 gap-3 sm:gap-5">
        {boxes.map((b, bi) => (
          <div key={b.letter} className="relative aspect-square">
            <div className="intro-crack absolute inset-0 z-10">
              <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
                <polyline points="45,0 38,40 0,30" />
                <polyline points="100,25 60,45 38,40 30,75 0,70" />
                <polyline points="60,45 55,80 100,65" />
                <polyline points="30,75 40,100" />
                <polyline points="55,80 40,100" />
              </svg>
            </div>
            {shards.map((s, si) => (
              <div
                key={si}
                className="intro-shard absolute inset-0"
                style={{
                  clipPath: s.clip,
                  ["--dx" as string]: `${s.dx + (bi - 1) * 20}px`,
                  ["--rot" as string]: `${s.rot}deg`,
                  animationDelay: `${0.3 + si * 0.03 + bi * 0.05}s`,
                }}
              >
                <Box letter={b.letter} className={b.className} style={{ width: "100%", height: "100%" }} />
              </div>
            ))}
          </div>
        ))}
        {particles.map((p, i) => (
          <span
            key={i}
            className={`intro-particle absolute left-1/2 top-1/2 rounded-sm ${p.tone === 0 ? "bg-violet" : p.tone === 1 ? "bg-primary" : "bg-muted-foreground"}`}
            style={{ width: p.s, height: p.s, ["--px" as string]: `${p.x * 5}px`, animationDelay: `${p.d}s` }}
          />
        ))}
      </div>

      {/* Final clean reveal */}
      <div className="intro-final absolute grid w-[min(80vw,520px)] grid-cols-3 gap-3 sm:gap-5">
        {boxes.map((b) => (
          <div key={b.letter} className="relative">
            <Box letter={b.letter} className={`${b.className} intro-final-box`} />
            <div className="intro-reflection pointer-events-none absolute inset-x-0 top-full mt-2">
              <Box letter={b.letter} className={b.className} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
