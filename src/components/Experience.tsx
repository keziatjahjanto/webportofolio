import { experience, skills } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="marble-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Experience
        </h2>

        <div className="mt-12 space-y-8 border-l-2 border-baby-purple-deep/40 pl-6">
          {experience.map((item) => (
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
