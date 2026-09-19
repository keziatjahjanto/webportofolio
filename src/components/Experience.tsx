import {
  certifications,
  education,
  experience,
  leadership,
  skills,
} from "@/data/site";

type TimelineItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

function Timeline({ items }: { items: readonly TimelineItem[] }) {
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

export default function Experience() {
  return (
    <section id="experience" className="marble-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Experience
        </h2>
        <div className="mt-12">
          <Timeline items={experience} />
        </div>

        <h2 className="mt-20 font-display text-3xl text-ink sm:text-4xl">
          Leadership & Scholarly Engagement
        </h2>
        <div className="mt-12">
          <Timeline items={leadership} />
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2">
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

        <div className="mt-16">
          <h3 className="font-display text-xl text-ink">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white/70 px-4 py-2 text-sm text-ink-soft shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
