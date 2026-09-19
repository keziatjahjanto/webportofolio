import Image from "next/image";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="marble-surface relative overflow-hidden px-6 py-28 sm:py-36"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6">
        <Image
          src="/images/profile.jpg"
          alt={profile.name}
          width={128}
          height={128}
          priority
          className="h-32 w-32 rounded-full border-4 border-white/80 object-cover shadow-md"
        />
        <span className="rounded-full bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
          {profile.location}
        </span>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-6xl">
          Hi, I&apos;m {profile.name.split(" ")[0]}.
          <br />
          {profile.title}.
        </h1>
        <p className="max-w-xl text-lg text-ink-soft">{profile.tagline}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
