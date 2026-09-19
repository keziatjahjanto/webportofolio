import { projects } from "@/data/site";

const ACCENT_CLASSES: Record<string, string> = {
  "baby-blue": "bg-baby-blue text-ink",
  "baby-purple": "bg-baby-purple text-ink",
  "baby-pink": "bg-baby-pink text-ink",
};

export default function Projects() {
  return (
    <section id="projects" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Selected Projects
        </h2>
        <p className="mt-2 max-w-xl text-ink-soft">
          A few things I&apos;ve designed and built recently.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="marble-card group flex flex-col justify-between rounded-3xl p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h3 className="font-display text-xl text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      ACCENT_CLASSES[project.accent] ?? ACCENT_CLASSES["baby-blue"]
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
