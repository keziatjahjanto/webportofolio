export const profile = {
  name: "Kezia Tjahjanto",
  title: "Building Resilience Through Faith & Psychology",
  tagline:
    "Exploring the intersection of crisis management, resilience, psychology, faith, technology, and community — turning emerging ideas into human-centered solutions.",
  location: "Jakarta, Indonesia",
  email: "kezauralyaa@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/keziatjahjanto777",
    },
  ],
};

export const about = {
  paragraphs: [
    "I'm Kezia Tjahjanto, from Indonesia, currently exploring the intersection of crisis management, resilience, psychology, faith, technology, and community.",
    "As part of the Frontier Commons Insight Lane Fellowship, I've worked on applied research and project development, exploring how emerging ideas and technologies connect to real-world challenges. This experience has allowed me to think beyond traditional academic research and focus on turning ideas into practical, human-centered solutions. I'm particularly interested in crisis communication, AI, faith, resilience, and how people and communities navigate uncertainty and change.",
    "My academic background is in psychology and emergency management, with an MSc in Emergency Management & Resilience from Coventry University. Alongside Frontier Commons, I have experience in mental health support, lifestyle coaching, education, community leadership, ministry, research, logistics, and operations.",
    "My faith is an important part of how I understand service, community, and the way I approach the work I do. I'm continuing to learn, experiment, and build at the intersection of these fields, especially where faith and practical approaches to resilience can work together.",
    "I enjoy working on projects that bring together different perspectives and turn complex problems into something people can actually use. I'm always open to learning from others, collaborating on new ideas, and connecting with people working on meaningful problems.",
  ],
};

export type ProjectGalleryItem = {
  src: string;
  title: string;
  company: string;
  date?: string;
  readTime?: string;
  href?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  href?: string;
  slug?: string;
  gallery?: ProjectGalleryItem[];
};

export const projects: Project[] = [
  {
    title: "Faith First-Aid Kit",
    description:
      "Prototyped a mobile app using a dual-axis framework (6 re-entry scenarios × 8 core emotions) to deliver instant, situational, psycho-spiritual support cards for returnees navigating reverse culture shock.",
    tags: ["Research", "Product Design", "Faith & Resilience"],
    href: "#",
    accent: "baby-blue",
  },
  {
    title: "Publications",
    description:
      "Essays, campaign content, and event materials on faith, mental health, and justice.",
    tags: ["Publication", "Writing"],
    slug: "publications",
    accent: "baby-purple",
    gallery: [
      {
        src: "/images/publications/abortion-where-should-i-stand.png",
        title: "Abortion: Where Should I Stand?",
        company: "Buletin Pillar",
        date: "28 July 2023",
        readTime: "14 min read",
        href: "https://www.buletinpillar.org/3p/abortion-where-should-i-stand",
      },
      {
        src: "/images/publications/if-i-am-an-addict.png",
        title: "If I Am an Addict, Am I Still a Child of God?",
        company: "Buletin Pillar",
        date: "28 February 2025",
        readTime: "10 min read",
        href: "https://www.buletinpillar.org/kehidupan-kristen/if-i-am-an-addict-am-i-still-a-child-of-god",
      },
      {
        src: "/images/publications/international-students-speak.png",
        title: "International Students Speak",
        company: "CRCNA — Do Justice Series",
        href: "https://www.crcna.org/DoJustice/article/kezia-tjahjanto",
      },
      {
        src: "/images/publications/soul-filled-vessels-or-mindful-bodies.png",
        title: "Soul-filled Vessels or Mindful Bodies?",
        company: "Psychology Club & ScARF, Calvin University",
        date: "11 April 2022",
      },
      {
        src: "/images/publications/koinonia-living-out-your-calling.png",
        title: "Koinonia: Living Out Your Calling",
        company: "FICA Campus Ministry",
        date: "18–19 December 2021",
      },
      {
        src: "/images/publications/koinonia-logo.png",
        title: "Koinonia",
        company: "FICA Campus Ministry",
      },
      {
        src: "/images/publications/gangguan-kecemasan-part-2.png",
        title: "Gangguan Kecemasan (Part 2): Panik & Fobia",
        company: "Hope Special Needs Center",
      },
    ],
  },
  {
    title: "Community Mental Health Advocacy",
    description:
      "Developed psychoeducational materials and mental health advocacy campaigns to increase digital accessibility of psychological resources, and evaluated community wellbeing program outcomes with peer support advocates.",
    tags: ["Mental Health", "Community"],
    slug: "community-mental-health-advocacy",
    accent: "baby-pink",
    gallery: [
      {
        src: "/images/mental-health-advocacy/course-5-0-mental-health-youth-academy.png",
        title:
          "Course 5.0, Mental Health Youth Academy — How to Achieve Work-Life Balance & Prioritize Mental Health in the Workplace",
        company: "Social Connect",
      },
      {
        src: "/images/mental-health-advocacy/real-talk-returning-home.png",
        title: "Real Talk: Returning Home Ep. 1 — Re-Experiencing Indonesia",
        company: "Fellowship of Indonesian Christians in America (FICA)",
      },
      {
        src: "/images/mental-health-advocacy/ig-live-3-0-accessibility.png",
        title:
          "IG Live 3.0 — Aksesibilitas Layanan Kesehatan Mental dalam Primary Healthcare di Indonesia",
        company: "Social Connect",
      },
      {
        src: "/images/mental-health-advocacy/love-and-heal-your-innerchild.png",
        title: "Instagram Live — Love and Heal Your Innerchild",
        company: "Social Connect",
      },
      {
        src: "/images/mental-health-advocacy/bincang-soco-ok-google.jpg",
        title: '#BincangSoco Instagram Live — "OK Google, Apakah Aku Baik-Baik Saja?"',
        company: "Social Connect",
      },
    ],
  },
];

export const experience = [
  {
    role: "Research Insight Intern",
    org: "Frontier Commons",
    period: "July 2026 — Present · Ohio, United States",
    description:
      "Investigate psycho-social re-entry dynamics, reverse culture shock, and identity reintegration among Christian international student returnees, analyzing 40 distinct feeling-scenario matrices. Designed and prototyped the \"Faith First-Aid Kit\" mobile app.",
  },
  {
    role: "Founder and Tutor",
    org: "Voice Beyond",
    period: "July 2026 — Present · Jakarta, Indonesia",
    description:
      "Founded and manage an independent online English and IELTS tutoring business, overseeing curriculum development, pricing strategy, and student learning pathways. Lead branding, marketing, and client relationship management to support business growth.",
  },
  {
    role: "Business Consultant",
    org: "PT Anekarasa Sukses Abadi",
    period: "January 2026 — Present · Jakarta, Indonesia",
    description:
      "Investigated local F&B market dynamics to establish the first mobile \"Cimol Bledos\" franchise model in Jakarta. Structured vendor agreements and cost-control protocols that maintained ~75% of projected revenue during macroeconomic instability.",
  },
  {
    role: "Lifestyle Coach",
    org: "YMCA Muskegon",
    period: "July 2023 — Present · Michigan, United States",
    description:
      "Facilitate group health and wellness coaching programs and guide individual participants in establishing personalized lifestyle goals, using routine follow-ups and data tracking for long-term behavioral maintenance.",
  },
  {
    role: "Nurse Technician",
    org: "Helen DeVos Children's Hospital",
    period: "December 2021 — April 2022 · Michigan, United States",
    description:
      "Delivered clinical nursing support under RN supervision across the Pediatric Emergency Department, NICU, Oncology, and COVID-19 wards, managing vital sign assessments and patient charting in high-acuity environments.",
  },
  {
    role: "Pastoral Intern",
    org: "Pine Rest Christian Mental Health Services",
    period: "June 2021 — August 2021",
    description:
      "Provided emotional and spiritual support to patients and hospital staff. Shadowed chaplains across hospital units, led prayers and wellness groups for the Child and Adolescent unit, developed lesson plans, and provided one-on-one patient support.",
  },
] as const;

export const leadership = [
  {
    role: "Head of Logistics",
    org: "Indonesian Scholars International Convention (ISIC) UK",
    period: "2025 · United Kingdom",
    description:
      "Coordinated international conference logistics, managing multi-stakeholder liaison and venue operations for scholarly networking and academic research dissemination.",
  },
  {
    role: "Head of Operations",
    org: "Indonesian Society UK Olympic Event",
    period: "2025 · United Kingdom",
    description:
      "Directed event operations for a large-scale Indonesian student community across athletic and cultural events.",
  },
  {
    role: "Mental Health Specialist",
    org: "Social Connect Indonesia",
    period: "2023 — 2024 · Jakarta, Indonesia",
    description:
      "Developed community-focused psychoeducational materials and mental health advocacy campaigns, and evaluated community wellbeing program outcomes with cross-functional mental health advocates.",
  },
  {
    role: "Director of Campus Ministry",
    org: "Fellowship of Indonesian Christians in America",
    period: "2021 — 2022 · United States",
    description:
      "Directed campus outreach and community integration programs for Indonesian international student cohorts across North America, mentoring student leaders on pastoral care and cross-cultural transition counseling.",
  },
] as const;

export const education = [
  {
    degree: "MSc, Emergency Management & Resilience",
    school: "Coventry University",
    period: "2025 — 2026 · United Kingdom",
  },
  {
    degree: "BSc, Psychology",
    school: "Calvin University",
    period: "2019 — 2022 · United States",
  },
] as const;

export const certifications = [
  {
    name: "Level 7 Certificate in Strategic Management and Leadership",
    org: "Chartered Management Institute (UK)",
    year: "2026",
  },
  {
    name: "McKinsey Forward Certificate",
    org: "McKinsey & Company",
    year: "2026",
  },
] as const;
