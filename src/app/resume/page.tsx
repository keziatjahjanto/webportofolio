import Link from "next/link";
import ResumeTabs from "@/components/ResumeTabs";

export default function ResumePage() {
  return (
    <main className="marble-surface min-h-screen px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#top"
          className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          ← Back
        </Link>

        <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          Resume
        </h1>

        <div className="mt-8">
          <ResumeTabs />
        </div>
      </div>
    </main>
  );
}
