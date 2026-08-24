import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { site, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-16">
      <Reveal>
        <SectionShell index="01" title="About">
          <p className="max-w-prose text-base leading-relaxed text-fg-muted sm:text-lg">
            {site.about}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {education.map((entry, i) => (
              <Reveal key={entry.degree} delay={i * 80}>
                <div className="rounded-md border border-border p-4 transition-colors duration-200 hover:border-fg-faint">
                  <p className="font-mono text-xs uppercase tracking-wide text-fg-faint">Education</p>
                  <p className="mt-2 text-sm font-medium text-fg">{entry.degree}</p>
                  <p className="text-sm text-fg-muted">{entry.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </Reveal>
    </section>
  );
}
