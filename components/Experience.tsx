import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-6 py-16">
      <Reveal>
        <SectionShell index="02" title="Experience">
          <ol className="space-y-10 border-l border-border pl-6 sm:pl-8">
            {experience.map((job, i) => (
              <Reveal key={`${job.org}-${job.start}`} delay={i * 70} as="li" className="relative">
                <span
                  className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent sm:-left-[35px]"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-fg sm:text-lg">
                    {job.role} <span className="font-normal text-fg-muted">· {job.org}</span>
                  </h3>
                  <p className="font-mono text-xs text-fg-faint sm:text-sm">
                    {job.start} to {job.end}
                  </p>
                </div>

                <p className="mt-3 max-w-prose text-sm leading-relaxed text-fg-muted sm:text-base">
                  {job.summary}
                </p>

                {job.stack && job.stack.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-border px-2 py-0.5 font-mono text-xs text-fg-muted transition-colors duration-200 hover:border-accent/50 hover:text-fg"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </ol>
        </SectionShell>
      </Reveal>
    </section>
  );
}
