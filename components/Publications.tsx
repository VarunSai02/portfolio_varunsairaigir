import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-content px-6 py-16">
      <Reveal>
        <SectionShell index="04" title="Publications">
          <ul className="space-y-6">
            {publications.map((pub, i) => (
              <Reveal key={pub.citation} delay={i * 80} as="li" className="border-l-2 border-border pl-4">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm leading-relaxed text-fg sm:text-base"
                >
                  {pub.citation}
                </a>
                <p className="mt-1 font-mono text-xs text-fg-faint sm:text-sm">
                  {pub.venue}, {pub.year}
                </p>
              </Reveal>
            ))}
          </ul>
        </SectionShell>
      </Reveal>
    </section>
  );
}
