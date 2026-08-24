type Props = {
  index: string;
  title: string;
  children: React.ReactNode;
};

// Section layout: an index + title that sticks in a left rail on wide
// screens (using the width a plain centered column would waste) and
// collapses to a normal stacked heading below lg.
export default function SectionShell({ index, title, children }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-[13rem_1fr] lg:gap-12">
      <div className="lg:sticky lg:top-24 lg:h-fit">
        <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3">
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{title}</h2>
          <span className="h-px flex-1 bg-border lg:hidden" aria-hidden="true" />
        </div>
        <span className="mt-4 hidden h-px w-10 bg-border lg:block" aria-hidden="true" />
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
