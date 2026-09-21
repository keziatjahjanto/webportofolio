import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type ProjectGalleryItem } from "@/data/site";

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug as string }));
}

function GalleryCard({
  item,
  showCaption,
}: {
  item: ProjectGalleryItem;
  showCaption: boolean;
}) {
  const content = (
    <>
      <div className="relative aspect-square w-full bg-white">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-contain"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
      {showCaption && (
        <div className="p-5">
          <p className="font-display text-lg text-ink">{item.title}</p>
          <p className="mt-1 text-sm text-ink-soft">{item.company}</p>
          {(item.date || item.readTime) && (
            <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft/70">
              {[item.date, item.readTime].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
      )}
    </>
  );

  const className =
    "block overflow-hidden rounded-3xl bg-white/70 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md";

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="marble-surface min-h-screen px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          ← Back to projects
        </Link>

        <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-ink-soft">{project.description}</p>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {project.gallery.map((item) => (
              <GalleryCard
                key={item.src}
                item={item}
                showCaption={!project.hideGalleryCaptions}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
