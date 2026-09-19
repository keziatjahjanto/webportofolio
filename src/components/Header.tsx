import { profile } from "@/data/site";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg text-ink tracking-tight"
        >
          {profile.name}
        </a>
        <nav className="hidden gap-8 text-sm text-ink-soft sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-baby-purple px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-baby-purple-deep sm:inline-block"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
