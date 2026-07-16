import Reveal from "@/components/ui/Reveal";
import { BehanceIcon } from "@/components/ui/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DesignWork() {
  return (
    <section id="design" className="border-y border-hairline bg-panel/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            04 — Design
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 rounded-2xl border border-brass/25 bg-ink/60 p-8 md:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-2xl text-bone md:text-3xl">
                  My visual work already has a home
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-fog">
                  Brand design, event graphics, and layout work for my academic
                  and church communities live on Behance — built in Photoshop,
                  Illustrator, and InDesign. It is the closest thing I have to a
                  finished portfolio right now, while my software projects are
                  still taking shape.
                </p>
              </div>
              <a
                href="https://www.behance.net/oguejiochukwue"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "shrink-0"
                )}
              >
                <BehanceIcon size={17} />
                View on Behance
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
