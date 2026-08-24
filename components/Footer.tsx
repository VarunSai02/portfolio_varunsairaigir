import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 font-mono text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Built with Next.js, deployed on Vercel.</p>
      </div>
    </footer>
  );
}
