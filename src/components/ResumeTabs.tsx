"use client";

import { useState } from "react";
import { experience, leadership } from "@/data/site";
import { EducationAndCertifications, Timeline } from "@/components/ResumeSections";

const TABS = [
  { key: "experience", label: "Experience" },
  { key: "leadership", label: "Leadership & Scholarly" },
  { key: "education", label: "Education & Certifications" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function ResumeTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");

  return (
    <div>
      <div className="flex flex-wrap gap-2">
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
  );
}
