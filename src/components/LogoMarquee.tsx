"use client";

import { useState } from "react";
import Image from "next/image";
import { logos } from "@/data/site";

export default function LogoMarquee() {
  const track = [...logos, ...logos];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="overflow-hidden bg-cream py-14">
      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
        Organizations I&apos;ve worked with
      </p>
      <div className="relative mt-8 overflow-hidden pb-28 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className={`flex w-max items-center gap-6 animate-marquee ${
            activeIndex !== null ? "[animation-play-state:paused]" : ""
          }`}
        >
          {track.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="group relative shrink-0">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((current) => (current === index ? null : index))
                }
                className="flex h-24 w-44 items-center justify-center overflow-hidden rounded-2xl bg-white p-5 shadow-sm"
              >
                <div
                  className="relative h-full w-full"
                  style={{ transform: `scale(${logo.scale ?? 1})` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
              </button>
              <div
                className={`pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-56 -translate-x-1/2 rounded-xl bg-ink px-4 py-3 text-center opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 ${
                  activeIndex === index ? "opacity-100" : ""
                }`}
              >
                <p className="font-display text-sm text-cream">{logo.alt}</p>
                <p className="mt-1 text-xs text-cream/70">{logo.location}</p>
                <p className="mt-1 text-xs text-cream/90">
                  {logo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
