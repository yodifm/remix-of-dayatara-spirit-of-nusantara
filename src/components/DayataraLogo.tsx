type Props = { className?: string; mono?: boolean };

export function DayataraLogo({ className, mono = false }: Props) {
  const gold = mono ? "currentColor" : "#c6a75e";
  const bird = mono ? "currentColor" : "#ffffff";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Dayatara">
      <circle cx="32" cy="32" r="30" fill="none" stroke={gold} strokeWidth="1.5" />
      <circle cx="32" cy="32" r="26" fill={mono ? "transparent" : "#1f2a44"} />
      {/* peacock silhouette */}
      <g fill={bird}>
        <path d="M32 18c-2 0-3.4 1.5-3.4 3.3 0 1 .4 1.7 1 2.3-.2.3-.3.7-.3 1.1 0 1.3 1.2 2.4 2.7 2.4s2.7-1.1 2.7-2.4c0-.4-.1-.8-.3-1.1.6-.6 1-1.3 1-2.3 0-1.8-1.4-3.3-3.4-3.3zm-.6 4.6c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" />
        <path d="M31 29c-3 1-6 3-8 6-1.5 2.2-2.5 5-2.8 8.4 2 .3 4.2.4 6.4.3.4-2.4 1.3-4.5 2.5-6.2 1.1-1.6 2.5-2.7 3.8-3.3 1.3.6 2.7 1.7 3.8 3.3 1.2 1.7 2.1 3.8 2.5 6.2 2.2.1 4.4 0 6.4-.3-.3-3.4-1.3-6.2-2.8-8.4-2-3-5-5-8-6-.7-.2-1.5-.3-2.4-.3-.9 0-1.7.1-2.4.3z" />
        <g>
          <circle cx="24" cy="41" r="1.6" />
          <circle cx="40" cy="41" r="1.6" />
          <circle cx="20" cy="45" r="1.2" />
          <circle cx="44" cy="45" r="1.2" />
          <circle cx="28" cy="46" r="1" />
          <circle cx="36" cy="46" r="1" />
        </g>
      </g>
    </svg>
  );
}