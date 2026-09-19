import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">About</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {about.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-baby-blue/60 px-4 py-2 text-sm font-medium text-ink"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-5 text-ink-soft">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
