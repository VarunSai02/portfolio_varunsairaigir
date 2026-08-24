import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-16">
      <Reveal>
        <SectionShell index="05" title="Skills">
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {skills.map((group, i) => (
              <Reveal key={group.category} delay={(i % 2) * 60 + Math.floor(i / 2) * 40}>
                <p className="font-mono text-xs uppercase tracking-wide text-fg-faint">{group.category}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{group.items.join(" · ")}</p>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      </Reveal>
    </section>
  );
}
