import Reveal from "@/components/ui/Reveal";

const entries = [
  {
    year: "2022 — Present",
    title: "Software Development",
    org: "Academic Projects · Accra Institute of Technology",
    detail:
      "Built foundational web projects with Python, HTML, CSS, and JavaScript, and developed a practical understanding of modern software environments.",
  },
  {
    year: "2022 — Present",
    title: "Visual Communication & Brand Design",
    org: "Independent · Academic · Church Communications, Accra",
    detail:
      "Designed flyers, banners, and social graphics in Photoshop, Illustrator, InDesign, and Canva, and laid out print publications for academic and community use.",
  },
  {
    year: "2023 — 2025",
    title: "Fellowship Leader & Group Coordinator",
    org: "First Love Church, Accra, Ghana",
    detail:
      "Coordinated a group inside a 900-plus-member leadership network — organising meetings, presentations, and outreach initiatives with cross-functional teams.",
  },
  {
    year: "Dec 2025",
    title: "Certificate of Appreciation",
    org: "First Love Church",
    detail:
      "Commended for outstanding leadership and measurable impact among 900-plus leaders.",
  },
  {
    year: "Expected 2027",
    title: "BSc Information Technology",
    org: "Accra Institute of Technology",
    detail: "Currently in year 3 of 4.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          03 — Journey
        </p>
        <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
          2022 to 2027, in order
        </h2>
      </Reveal>

      <div className="relative mt-14 pl-8 md:pl-10">
        <div className="timeline-rail absolute top-2 bottom-2 left-0 w-px" />

        <ol className="list-none space-y-12 pl-0">
          {entries.map((entry, i) => (
            <Reveal key={entry.title + entry.year} delay={i * 90}>
              <li className="relative">
                <span className="absolute -left-8 top-1.5 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-brass md:-left-10" />
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brass">
                  {entry.year}
                </p>
                <h3 className="mt-2 font-display text-xl text-bone">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-fog-dim">{entry.org}</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog">
                  {entry.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
