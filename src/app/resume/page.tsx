import Link from "next/link";
import { experience, leadership } from "@/data/site";
import { EducationAndCertifications, Timeline } from "@/components/ResumeSections";

export default function ResumePage() {
  return (
    <main className="marble-surface min-h-screen px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#experience"
          className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          ← Back
        </Link>

        <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          Resume
        </h1>

        <h2 className="mt-16 font-display text-2xl text-ink sm:text-3xl">
          Experience
        </h2>
        <div className="mt-8">
          <Timeline items={experience} />
        </div>

        <h2 className="mt-16 font-display text-2xl text-ink sm:text-3xl">
          Leadership & Scholarly Engagement
        </h2>
        <div className="mt-8">
          <Timeline items={leadership} />
        </div>

        <h2 className="mt-16 font-display text-2xl text-ink sm:text-3xl">
          Education & Certifications
        </h2>
        <div className="mt-8">
          <EducationAndCertifications />
        </div>
      </div>
    </main>
  );
}
