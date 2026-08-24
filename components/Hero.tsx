import Image from "next/image";
import { site, social } from "@/lib/data";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-content px-6 pb-20 pt-20 sm:pt-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div>
          <p className="animate-fadeUp font-mono text-sm text-accent">
            <Typewriter text="$ whoami" />
          </p>

          <h1 className="mt-4 animate-fadeUp text-4xl font-semibold tracking-tight text-fg sm:text-6xl [animation-delay:80ms]">
            {site.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 animate-fadeUp [animation-delay:140ms]">
            <p className="font-mono text-base text-fg-muted">
              {site.title} · {site.location}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-fg-faint">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {site.availability}
            </span>
          </div>

          <p className="mt-6 max-w-prose animate-fadeUp text-lg leading-relaxed text-fg-muted [animation-delay:200ms]">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fadeUp [animation-delay:260ms]">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-2 font-mono text-sm text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-fg-faint"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-2 font-mono text-sm text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-fg-faint"
            >
              LinkedIn
            </a>
            <a
              href={social.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-2 font-mono text-sm text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-fg-faint"
            >
              Google Scholar
            </a>
            <a
              href={site.resumeUrl}
              download
              className="rounded-md bg-fg px-4 py-2 font-mono text-sm text-bg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85"
            >
              Download résumé ↓
            </a>
          </div>
        </div>

        <div className="animate-fadeUp justify-self-center [animation-delay:120ms] lg:justify-self-end">
          <div className="group relative w-56 sm:w-64 lg:w-72">
            <span className="absolute -left-2.5 -top-2.5 h-5 w-5 border-l border-t border-accent/60" aria-hidden="true" />
            <span className="absolute -right-2.5 -bottom-2.5 h-5 w-5 border-b border-r border-accent/60" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-border bg-bg-subtle">
              <Image
                src="/varun.jpg"
                alt={`${site.name}, ${site.title}`}
                fill
                priority
                sizes="(min-width: 1024px) 288px, (min-width: 640px) 256px, 224px"
                className="object-cover grayscale-[35%] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-3 text-center font-mono text-xs text-fg-faint">
              {`// ${site.name.toLowerCase().replace(/\s+/g, "_")}.jpg`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
