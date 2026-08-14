import Reveal from "@/components/ui/Reveal";
import { GitHubIcon } from "@/components/ui/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Building() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Currently
        </p>
        <h2 className="mt-4 font-display text-2xl text-bone md:text-3xl">
          Shipped projects are next
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-fog">
          I am early in turning coursework into projects worth showing. Rather
          than fill this space with placeholders, I would rather point you to
          where the real work will land as it ships.
        </p>
        <a
          href="https://github.com/kingshadtheace"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "mt-7")}
        >
          <GitHubIcon size={16} />
          Follow along on GitHub
        </a>
      </Reveal>
    </section>
  );
}
