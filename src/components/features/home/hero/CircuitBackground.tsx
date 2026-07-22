export default function CircuitBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 opacity-10"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M80 0 L0 0 0 80"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#grid)"
      />
    </svg>
  );
}