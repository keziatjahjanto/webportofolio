import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="marble-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 max-w-xl text-ink-soft">
          Work history, leadership roles, education, and certifications.
        </p>
        <Link
          href="/resume"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
        >
          View Full Resume →
        </Link>
      </div>
    </section>
  );
}
