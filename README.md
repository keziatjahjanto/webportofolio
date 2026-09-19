# webportofolio

My personal portfolio site — built with Next.js, TypeScript, and Tailwind CSS,
styled with a soft pastel palette (baby blue, baby purple, baby pink) and a
subtle marble texture, deployed on Vercel.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All of the copy (name, tagline, projects, experience, skills, contact email,
social links) lives in one place: [`src/data/site.ts`](src/data/site.ts).
Edit that file to make the site your own — no need to touch the components.

## Fonts

Headings use **Freight Display Pro**, a licensed font not included in this
repo. See [`public/fonts/README.md`](public/fonts/README.md) for how to add
it. Until then, headings fall back to Playfair Display automatically.

## Deploying

This project deploys to [Vercel](https://vercel.com) out of the box:

```bash
npx vercel
```

or connect the GitHub repo in the Vercel dashboard for automatic deploys on
push.
