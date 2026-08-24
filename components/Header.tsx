import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import MobileNav from "@/components/MobileNav";
import { site } from "@/lib/data";

const navItems = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#publications", label: "publications" },
  { href: "#contact", label: "contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-mono text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <span className="text-accent">~/</span>varun-sai-raigir
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-sm text-fg-muted md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="link-underline transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.resumeUrl}
            download
            className="hidden rounded-md border border-border px-3 py-1.5 font-mono text-xs text-fg-muted transition-colors hover:border-fg-faint hover:text-fg md:inline-block"
          >
            résumé ↓
          </a>
          <ThemeToggle />
          <MobileNav items={navItems} resumeUrl={site.resumeUrl} />
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
