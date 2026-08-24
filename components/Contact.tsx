import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { site, social } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-16">
      <Reveal>
        <SectionShell index="06" title="Contact">
          <p className="max-w-prose text-base leading-relaxed text-fg-muted sm:text-lg">
            Open to conversations about software engineering, AI/ML, or anything in between.
            I&rsquo;m open to relocating anywhere in the US, or working remote. The fastest way to
            reach me is email.
          </p>

          <div className="mt-8 flex flex-col gap-3 font-mono text-sm">
            <a href={social.email} className="link-underline w-fit text-fg">
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="link-underline w-fit text-fg-muted">
              {site.phone}
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline w-fit text-fg-muted"
            >
              {social.linkedin.replace(/^https?:\/\//, "")}
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline w-fit text-fg-muted"
            >
              {social.github.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </SectionShell>
      </Reveal>
    </section>
  );
}
