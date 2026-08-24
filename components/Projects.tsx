import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/lib/data";

const statusStyles: Record<Project["status"], string> = {
  Live: "text-accent border-accent/40",
  Active: "text-fg border-fg-faint/60",
  Research: "text-fg-faint border-border",
};

function ProjectCard({ project }: { project: Project }) {
  const href = project.url ?? project.githubUrl;

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex h-full flex-col rounded-md border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-28px_var(--accent)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-fg">{project.name}</h3>
        <span
          className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded border border-border px-2 py-0.5 font-mono text-xs text-fg-muted">
            {tech}
          </li>
        ))}
      </ul>

      {(project.url || project.githubUrl) && (
        <div className="mt-4 flex items-center gap-4 font-mono text-xs text-fg-faint">
          {project.url && (
            <span className="link-underline transition-colors group-hover:text-fg">
              {project.url.replace(/^https?:\/\//, "")} ↗
            </span>
          )}
          {project.githubUrl && !project.url && (
            <span className="link-underline transition-colors group-hover:text-fg">
              {project.githubUrl.replace(/^https?:\/\//, "")} ↗
            </span>
          )}
        </div>
      )}
    </Wrapper>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-16">
      <Reveal>
        <SectionShell index="03" title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 60} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {rest.length > 0 && (
            <>
              <p className="mb-4 mt-12 font-mono text-xs uppercase tracking-wide text-fg-faint">
                Other work
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((project, i) => (
                  <Reveal key={project.slug} delay={i * 50} className="h-full">
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </SectionShell>
      </Reveal>
    </section>
  );
}
