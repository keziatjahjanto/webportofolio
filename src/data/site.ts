export const profile = {
  name: "Kezia Tjahjanto",
  title: "Product Designer & Developer",
  tagline:
    "I design and build soft, considered digital experiences — from idea to interface to code.",
  location: "Based in your city",
  email: "you@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
    { label: "Instagram", href: "https://instagram.com/your-username" },
  ],
};

export const projects = [
  {
    title: "Project One",
    description:
      "A short description of this project — what it does, who it's for, and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
    accent: "baby-blue",
  },
  {
    title: "Project Two",
    description:
      "A short description of this project — what it does, who it's for, and the problem it solves.",
    tags: ["Figma", "Design System"],
    href: "#",
    accent: "baby-purple",
  },
  {
    title: "Project Three",
    description:
      "A short description of this project — what it does, who it's for, and the problem it solves.",
    tags: ["React", "Node.js"],
    href: "#",
    accent: "baby-pink",
  },
] as const;

export const experience = [
  {
    role: "Job Title",
    org: "Company Name",
    period: "2024 — Present",
    description:
      "One or two lines about your responsibilities and impact in this role.",
  },
  {
    role: "Job Title",
    org: "Company Name",
    period: "2022 — 2024",
    description:
      "One or two lines about your responsibilities and impact in this role.",
  },
  {
    role: "Degree / Program",
    org: "School Name",
    period: "2018 — 2022",
    description: "Field of study and any honors worth mentioning.",
  },
] as const;

export const skills = [
  "UI/UX Design",
  "React",
  "Next.js",
  "TypeScript",
  "Figma",
  "Tailwind CSS",
];
