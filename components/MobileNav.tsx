"use client";

import { useState } from "react";

type Item = { href: string; label: string };

export default function MobileNav({ items, resumeUrl }: { items: Item[]; resumeUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:border-fg-faint hover:text-fg"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      <div
        className={`absolute inset-x-0 top-full border-b border-border bg-bg shadow-lg transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
        }`}
      >
        <nav className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 py-4 font-mono text-sm text-fg-muted">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 transition-colors hover:bg-bg-subtle hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded px-2 py-2 text-accent transition-colors hover:bg-bg-subtle"
            >
              résumé ↓
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
