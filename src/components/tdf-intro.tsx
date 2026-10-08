import { useEffect, useRef, useState } from "react";

const DURATION = 3000;
const SESSION_KEY = "thedevflo-intro-seen";
const logos = [
  { letter: "T", className: "bg-violet-gradient text-foreground" },
  { letter: "D", className: "bg-primary-gradient text-primary-foreground" },
  { letter: "F", className: "bg-surface-gradient text-primary" },
];

type Shard = {
  texture: HTMLCanvasElement;
  points: number[][];
  cx: number; cy: number; x: number; y: number;
  vx: number; vy: number; spin: number; delay: number; size: number;
};

/** A finite, client-only canvas sequence; the homepage stays mounted underneath. */
export function TdfIntro() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const canvas = canvasRef.current;
    const boxes = boxesRef.current;
    if (!overlay || !canvas || !boxes) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) { setVisible(false); return; }
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch { /* Private browsing still gets a finite intro. */ }

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    overlay.dataset.motion = reduced ? "reduced" : "full";
    const homepage = overlay.nextElementSibling;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    if (homepage instanceof HTMLElement) homepage.inert = true;
    let frame = 0;
    let stopped = false;
    const start = performance.now();
    const finish = () => {
      if (stopped) return;
      stopped = true;
      cancelAnimationFrame(frame);
      document.documentElement.style.overflow = previousOverflow;
      if (homepage instanceof HTMLElement) homepage.inert = false;
      setVisible(false);
    };
    // Deadline also handles background tabs and interrupted animation frames.
    const deadline = window.setTimeout(finish, DURATION);
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) { finish(); return () => clearTimeout(deadline); }

    const mobile = innerWidth < 640;
    const ratio = Math.min(devicePixelRatio || 1, mobile ? 1.25 : 1.5);
    const width = innerWidth;
    const height = innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.scale(ratio, ratio);
    const root = getComputedStyle(document.documentElement);
    const color = (name: string) => root.getPropertyValue(name).trim();
    const shards: Shard[] = [];
    let seed = 41;
    const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

    if (!reduced) {
      Array.from(boxes.children).forEach((box, index) => {
        if (!(box instanceof HTMLElement)) return;
        const rect = box.getBoundingClientRect();
        const size = rect.width;
        const texture = document.createElement("canvas");
        texture.width = texture.height = Math.ceil(size * ratio);
        const paint = texture.getContext("2d");
        if (!paint) return;
        paint.scale(ratio, ratio);
        const style = getComputedStyle(box);
        const text = box.firstElementChild;
        if (!text) return;
        const textStyle = getComputedStyle(text);
        const gradient = paint.createLinearGradient(0, 0, size, size);
        // Same semantic palette and gradient endpoints as the existing logo boxes.
        if (index === 0) {
          gradient.addColorStop(0, color("--accent-end"));
          gradient.addColorStop(1, `color-mix(in oklab, ${color("--accent-end")} 55%, ${color("--background")})`);
        } else if (index === 1) {
          gradient.addColorStop(0, `color-mix(in oklab, ${color("--primary")} 95%, ${color("--foreground")} 5%)`);
          gradient.addColorStop(1, `color-mix(in oklab, ${color("--primary")} 55%, ${color("--background")})`);
        } else {
          gradient.addColorStop(0, color("--surface-elevated"));
          gradient.addColorStop(1, color("--surface"));
        }
        paint.beginPath();
        paint.roundRect(0.5, 0.5, size - 1, size - 1, parseFloat(style.borderRadius));
        paint.fillStyle = gradient;
        paint.fill();
        paint.strokeStyle = style.borderColor;
        paint.stroke();
        paint.fillStyle = textStyle.color;
        paint.font = `${textStyle.fontWeight} ${textStyle.fontSize} ${textStyle.fontFamily}`;
        paint.textAlign = "center";
        paint.textBaseline = "middle";
        paint.fillText(logos[index].letter, size / 2, size / 2 + parseFloat(textStyle.fontSize) * 0.035);

        const columns = mobile ? 4 : 5;
        const grid: number[][][] = [];
        for (let row = 0; row <= columns; row++) {
          grid[row] = [];
          for (let col = 0; col <= columns; col++) {
            grid[row][col] = [
              (col + (col > 0 && col < columns ? (random() - 0.5) * 0.6 : 0)) * size / columns,
              (row + (row > 0 && row < columns ? (random() - 0.5) * 0.6 : 0)) * size / columns,
            ];
          }
        }
        for (let row = 0; row < columns; row++) {
          for (let col = 0; col < columns; col++) {
            const a = grid[row][col], b = grid[row][col + 1];
            const c = grid[row + 1][col], d = grid[row + 1][col + 1];
            for (const points of [[a, b, c], [b, d, c]]) {
              const cx = points.reduce((sum, p) => sum + p[0], 0) / 3;
              const cy = points.reduce((sum, p) => sum + p[1], 0) / 3;
              shards.push({ texture, points, cx, cy, x: rect.x, y: rect.y,
                vx: (cx / size - 0.5) * (mobile ? 210 : 330) + (random() - 0.5) * 100,
                vy: -70 - random() * 180, spin: (random() - 0.5) * 10,
                delay: random() * 0.08, size });
            }
          }
        }
      });
    }

    const render = (now: number) => {
      if (stopped) return;
      const elapsed = now - start;
      overlay.style.setProperty("--intro-light", String(reduced ? 0 : Math.max(0, Math.min(1, (elapsed - 1800) / 700))));
      overlay.style.opacity = String(Math.max(0, Math.min(1, (DURATION - elapsed) / (reduced ? 450 : 140))));
      boxes.style.opacity = reduced || elapsed < 600 ? "1" : String(Math.max(0, Math.min(1, (elapsed - 2400) / 100)));
      overlay.dataset.phase = elapsed >= 2400 ? "clean" : "break";
      context.clearRect(0, 0, width, height);
      if (!reduced && elapsed >= 300 && elapsed < 2500) {
        const seconds = (elapsed - 600) / 1000;
        for (const shard of shards) {
          context.save();
          if (elapsed < 600) {
            context.translate(shard.x, shard.y);
            context.beginPath();
            shard.points.forEach((p, i) => i ? context.lineTo(p[0], p[1]) : context.moveTo(p[0], p[1]));
            context.closePath();
            context.globalAlpha = (elapsed - 300) / 300 * 0.65;
            context.strokeStyle = color("--primary-glow");
            context.lineWidth = mobile ? 0.65 : 0.9;
            context.stroke();
          } else {
            const t = Math.max(0, seconds - shard.delay);
            const gravity = Math.max(1000, height * 2.5);
            const floor = height - 26;
            const initialY = shard.y + shard.cy;
            const impact = (-shard.vy + Math.sqrt(shard.vy ** 2 + 2 * gravity * (floor - initialY))) / gravity;
            const after = Math.max(0, t - impact);
            const y = t < impact ? initialY + shard.vy * t + 0.5 * gravity * t * t
              : Math.min(floor, floor - (shard.vy + gravity * impact) * 0.14 * after + 0.5 * gravity * after * after);
            const alpha = Math.max(0, Math.min(1, (2.35 - elapsed / 1000) / 0.4));
            context.globalAlpha = alpha;
            context.translate(shard.x + shard.cx + shard.vx * Math.min(t, impact + after * 0.25), y);
            context.rotate(shard.spin * Math.min(t, impact + after * 0.15));
            context.scale(Math.max(0.35, Math.abs(Math.cos(shard.spin * t * 0.3))), 1);
            context.translate(-shard.cx, -shard.cy);
            context.beginPath();
            shard.points.forEach((p, i) => i ? context.lineTo(p[0], p[1]) : context.moveTo(p[0], p[1]));
            context.closePath();
            context.clip();
            context.drawImage(shard.texture, 0, 0, shard.size, shard.size);
            // A short translucent trail suggests motion blur without expensive filters.
            if (!mobile && t < impact) {
              context.globalAlpha = alpha * 0.14;
              context.drawImage(shard.texture, -2, -5, shard.size, shard.size);
            }
          }
          context.restore();
        }
      }
      if (elapsed >= DURATION) { finish(); return; }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => { clearTimeout(deadline); finish(); };
  }, []);

  if (!visible) return null;
  return (
    <div ref={overlayRef} className="tdf-intro" aria-hidden="true" data-testid="tdf-intro">
      <canvas ref={canvasRef} className="tdf-intro-canvas" />
      <div ref={boxesRef} className="tdf-intro-boxes">
        {logos.map(({ letter, className }) => (
          <div key={letter} className={`tdf-intro-box ${className}`}>
            <span className="text-display text-shadow-soft select-none">{letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}