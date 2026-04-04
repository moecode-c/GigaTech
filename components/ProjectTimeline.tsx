import type { LucideIcon } from "lucide-react";
import {
  Factory,
  Flag,
  LineChart,
  Radar,
  Store,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type TimelineItem = {
  year: string;
  title: string;
  project: string;
  summary: string;
  icon: LucideIcon;
};

const timelineItems: TimelineItem[] = [
  {
    year: "2008",
    title: "Start of Giga Technology",
    project: "Founding and first integration delivery",
    summary:
      "The company launched and completed its first electromechanical control-panel integration project for a local operations site.",
    icon: Flag,
  },
  {
    year: "2012",
    title: "Retail Automation Program",
    project: "Multi-site retailer rollout",
    summary:
      "Delivered connected monitoring and maintenance workflows across multiple retail branches with centralized visibility.",
    icon: Store,
  },
  {
    year: "2017",
    title: "Industrial Expansion",
    project: "Factory controls modernization",
    summary:
      "Upgraded factory-floor systems with safer control architecture, better uptime, and faster response cycles.",
    icon: Factory,
  },
  {
    year: "2021",
    title: "Remote Intelligence Phase",
    project: "Real-time operations dashboard",
    summary:
      "Introduced remote monitoring dashboards and alerting to support faster decisions and improved field coordination.",
    icon: Radar,
  },
  {
    year: "2025",
    title: "Performance Optimization",
    project: "Cross-sector optimization initiative",
    summary:
      "Delivered optimization projects across CP and retail environments to improve efficiency, resilience, and service quality.",
    icon: LineChart,
  },
];

export default function ProjectTimeline() {
  return (
    <section id="timeline" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="section-shell">
        <Reveal delay={60}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">Timeline</p>
          <h2 className="mt-2 font-technical text-3xl text-white sm:text-4xl">Journey of Projects and Growth</h2>
        </Reveal>

        <div className="relative mt-7">
          <div
            className="absolute bottom-0 left-5 top-0 w-px bg-white/25 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const alignsLeft = index % 2 === 0;

            return (
              <Reveal key={`${item.year}-${item.title}`} delay={100 + index * 70}>
                <article className="relative pb-4 pl-14 sm:pb-5 sm:pl-16 md:pl-0">
                  <span className="absolute left-5 top-8 -translate-x-1/2 md:left-1/2">
                    <span className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-accent bg-brand">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    </span>
                  </span>

                  <div
                    className={`surface-card rounded-2xl p-5 sm:p-6 md:w-[46%] ${
                      alignsLeft ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <div className={`flex flex-wrap items-center gap-3 ${alignsLeft ? "md:justify-end" : ""}`}>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-brand-accent">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <p className="font-technical text-2xl text-white">{item.year}</p>
                      <span className="rounded-full border border-white/25 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">
                        {item.project}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className={`mt-2 max-w-xl text-brand-muted ${alignsLeft ? "md:ml-auto" : ""}`}>{item.summary}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
