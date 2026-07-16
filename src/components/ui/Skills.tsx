import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";

const competencyGroups = [
  {
    title: "Build",
    items: [
      { name: "Software Development", detail: "Python, HTML, CSS, JavaScript" },
      {
        name: "Research & Information Organisation",
        detail: "Structured findings into clear reports",
      },
      {
        name: "Attention to Detail & Rapid Learning",
        detail: "Comfortable picking up new tools fast",
      },
    ],
  },
  {
    title: "Communicate",
    items: [
      {
        name: "Visual Communication & Brand Design",
        detail: "Flyers, banners, social graphics",
      },
      {
        name: "Digital Content Creation & Social Media",
        detail: "Publication layouts, visual storytelling",
      },
      {
        name: "Event Branding & Promotional Design",
        detail: "End-to-end design for live events",
      },
    ],
  },
  {
    title: "Lead",
    items: [
      {
        name: "Team Leadership & Coordination",
        detail: "Ran a 900+ member fellowship network",
      },
      {
        name: "Public Speaking & Presentation",
        detail: "Comfortable in front of large groups",
      },
    ],
  },
];

const toolGroups = [
  { label: "Languages", tools: ["Python", "HTML", "CSS", "JavaScript"] },
  { label: "Design", tools: ["Photoshop", "Illustrator", "InDesign", "Canva"] },
  {
    label: "Productivity",
    tools: ["MS Office", "Google Workspace", "VS Code"],
  },
  { label: "Platforms", tools: ["Windows OS", "Android"] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-hairline bg-panel/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            02 — Skills
          </p>
          <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
            What I bring to a team
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {competencyGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 90}>
              <h3 className="font-display text-xl text-brass">{group.title}</h3>
              <ul className="mt-5 space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm font-medium text-bone">{item.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-fog">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280} className="mt-16">
          <div className="rounded-2xl border border-hairline bg-panel/60 p-6 md:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-fog-dim">
              Tools &amp; Platforms
            </p>
            <div className="mt-5 space-y-4">
              {toolGroups.map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <span className="w-28 shrink-0 text-xs font-medium text-fog-dim">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <Badge key={tool}>{tool}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
