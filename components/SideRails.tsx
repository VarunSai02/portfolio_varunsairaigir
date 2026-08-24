import { site, social } from "@/lib/data";

const links = [
  {
    href: social.github,
    label: "GitHub",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.89-.01-1.75-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.28 9.28 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  },
  {
    href: social.linkedin,
    label: "LinkedIn",
    path: "M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.35V21h3.96v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z",
  },
  {
    href: social.scholar,
    label: "Google Scholar",
    path: "M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09v5.41h1V9L12 3Zm0 2.24 7.76 4.24L12 13.72 4.24 9.48 12 5.24ZM6 12.36l5.5 3v4.83L6 17.18v-4.82Zm7 7.83v-4.83l5.5-3v4.82L13 20.19Z",
  },
];

// Fixed vertical rails at the far screen edges, putting the empty margin space
// on wide viewports to use instead of leaving it dead. Hidden below xl so
// they never compete with the main content column.
export function SocialRail() {
  return (
    <div
      aria-hidden="false"
      className="pointer-events-none fixed inset-y-0 left-0 z-30 hidden w-16 xl:flex 2xl:w-24"
    >
      <div className="pointer-events-auto m-auto flex flex-col items-center gap-6">
        <ul className="flex flex-col items-center gap-5">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="block text-fg-faint transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={link.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <span className="h-24 w-px bg-border" />
      </div>
    </div>
  );
}

export function EmailRail() {
  return (
    <div
      className="pointer-events-none fixed inset-y-0 right-0 z-30 hidden w-16 xl:flex 2xl:w-24"
    >
      <div className="pointer-events-auto m-auto flex flex-col items-center gap-6">
        <a
          href={social.email}
          className="font-mono text-xs tracking-widest text-fg-faint transition-colors hover:text-accent"
          style={{ writingMode: "vertical-rl" }}
        >
          {site.email}
        </a>
        <span className="h-24 w-px bg-border" />
      </div>
    </div>
  );
}
