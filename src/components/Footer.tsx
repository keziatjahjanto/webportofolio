import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-ink-soft sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
