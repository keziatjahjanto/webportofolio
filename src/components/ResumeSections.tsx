import { certifications, education } from "@/data/site";

type TimelineItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <div className="space-y-8 border-l-2 border-baby-purple-deep/40 pl-6">
      {items.map((item) => (
        <div key={`${item.role}-${item.org}`} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-baby-purple-deep" />
          {item.period && (
            <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
              {item.period}
            </p>
          )}
          <h3 className="mt-1 font-display text-lg text-ink">
            {item.role} · {item.org}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-ink-soft">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function EducationAndCertifications() {
  return (
    <div className="grid gap-12 sm:grid-cols-2">
      <div>
        <h3 className="font-display text-xl text-ink">Education</h3>
        <div className="mt-4 space-y-6">
          {education.map((item) => (
            <div key={item.degree}>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                {item.period}
              </p>
              <p className="mt-1 font-display text-lg text-ink">
                {item.degree}
              </p>
              <p className="text-sm text-ink-soft">{item.school}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl text-ink">Certifications</h3>
        <div className="mt-4 space-y-6">
          {certifications.map((item) => (
            <div key={item.name}>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                {item.year}
              </p>
              <p className="mt-1 font-display text-lg text-ink">
                {item.name}
              </p>
              <p className="text-sm text-ink-soft">{item.org}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
