import Reveal from "@/components/ui/Reveal";
import { Separator } from "@/components/ui/separator";

const facts = [
  { label: "Based in", value: "Accra, Ghana" },
  { label: "Studying", value: "BSc Information Technology" },
  { label: "Institution", value: "Accra Institute of Technology" },
  { label: "Status", value: "Year 3 of 4 · Graduating 2027" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          01 — About
        </p>
        <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
          Two disciplines, one way of thinking
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <Reveal
          delay={80}
          className="space-y-5 text-base leading-relaxed text-fog"
        >
          <p>
            I am a third-year IT student who never quite chose between building
            software and designing it. Most of my coursework lives in Python,
            HTML, CSS, and JavaScript, where I am learning to turn a working
            idea into a working application.
          </p>
          <p>
            Alongside that, I design — flyers, banners, social graphics, and
            printed materials for academic work and my church community, using
            Photoshop, Illustrator, InDesign, and Canva. Laying out a page and
            structuring a codebase turn out to draw on the same instinct:
            hierarchy, clarity, and knowing what to leave out.
          </p>
          <p>
            I also lead. For two years I coordinated a fellowship group inside a
            900-plus-member leadership network, which is where I picked up the
            research, presentation, and public-speaking habits that now shape
            how I explain my own work.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="rounded-2xl border border-hairline bg-panel/60 p-6">
            {facts.map((fact, i) => (
              <div key={fact.label}>
                <div className="flex flex-col gap-1 py-3">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-fog-dim">
                    {fact.label}
                  </span>
                  <span className="text-sm font-medium text-bone">
                    {fact.value}
                  </span>
                </div>
                {i < facts.length - 1 && <Separator className="bg-hairline" />}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
