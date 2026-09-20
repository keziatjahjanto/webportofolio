import Image from "next/image";
import { logos } from "@/data/site";

export default function LogoMarquee() {
  const track = [...logos, ...logos];

  return (
    <section className="overflow-hidden bg-cream py-14">
      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
        Organizations I&apos;ve worked with
      </p>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-6">
          {track.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="relative h-full w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
