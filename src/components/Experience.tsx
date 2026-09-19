"use client";

import { useState } from "react";
import { certifications, education, experience, leadership } from "@/data/site";

type TimelineItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <div className="space-y-8 border-l-2 border-baby-purple-deep/40 pl-6">
      {items.map((item) => (
        <div key={`${item.role}-${item.org}`} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-baby-purple-deep" />
          {item.period && (
            <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
              {item.period}
            </p>
          )}
          <h3 className="mt-1 font-display text-lg text-ink">
            {item.role} · {item.org}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-ink-soft">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function EducationAndCertifications() {
  return (
    <div className="grid gap-12 sm:grid-cols-2">
      <div>
        <h3 className="font-display text-xl text-ink">Education</h3>
        <div className="mt-4 space-y-6">
          {education.map((item) => (
            <div key={item.degree}>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                {item.period}
              </p>
              <p className="mt-1 font-display text-lg text-ink">
                {item.degree}
              </p>
              <p className="text-sm text-ink-soft">{item.school}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl text-ink">Certifications</h3>
        <div className="mt-4 space-y-6">
          {certifications.map((item) => (
            <div key={item.name}>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                {item.year}
              </p>
              <p className="mt-1 font-display text-lg text-ink">
                {item.name}
              </p>
              <p className="text-sm text-ink-soft">{item.org}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { key: "experience", label: "Experience" },
  { key: "leadership", label: "Leadership & Scholarly" },
  { key: "education", label: "Education & Certifications" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");

  return (
    <section id="experience" className="marble-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Resume
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-ink text-cream"
                  : "bg-white/70 text-ink-soft hover:bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {activeTab === "experience" && <Timeline items={experience} />}
          {activeTab === "leadership" && <Timeline items={leadership} />}
          {activeTab === "education" && <EducationAndCertifications />}
        </div>
      </div>
    </section>
  );
}
