// Minimal inline icon set (no external icon library dependency).
const PATHS = {
  grid: "M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z",
  battery: "M3 8h14v8H3V8zm14 2h2v4h-2v-4zM5 10h2v4H5v-4z",
  ship: "M3 17l1.5-6h15L21 17M6 11V6h4v5M12 6h3l2 5M2 20c1.5 1 3.5 1 5 0s3.5-1 5 0 3.5 1 5 0 3.5-1 5 0",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  handshake: "M2 12l5-4 4 3 4-3 5 4-4 5-2-1-3 3-3-3-2 1-4-5z",
  briefcase: "M4 8h16v11H4V8zm4 0V5h8v3M4 13h16",
  chess: "M12 2l3 3-3 3-3-3 3-3zM9 8h6l1 6H8l1-6zM6 22l2-6h8l2 6H6z",
  chart: "M4 20V10m6 10V4m6 16v-7m6 7V8",
  shield: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z",
  network: "M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 8v6m0 0L5 18m7-4l7 4",
  calculator: "M5 3h14v18H5V3zm2 4h10M7 11h2m3 0h2m3 0h2M7 15h2m3 0h2m3 0h2M7 19h10",
  bell: "M12 2a5 5 0 0 0-5 5v4l-2 4h14l-2-4V7a5 5 0 0 0-5-5zM9 19a3 3 0 0 0 6 0",
  compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm3-14l-5 2-2 5 5-2 2-5z",
  book: "M4 4h9a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4zm16 0h-4v14a2 2 0 0 1 2-2h2V4z",
  arrowRight: "M5 12h14m-6-6l6 6-6 6",
  external: "M14 3h7v7m0-7L10 14M5 5h6M5 5v14h14v-6",
};

export default function Icon({ name, className = "h-4 w-4" }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={d} />
    </svg>
  );
}
