import Image from "next/image";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, BehanceIcon } from "@/components/ui/Icons";
import { buttonVariants } from "@/components/ui/button";

const socials = [
  { label: "GitHub", href: "https://github.com/kingshaddy", Icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/king-shadrach-chukwuemeka-4453972a7",
    Icon: LinkedInIcon,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/oguejiochukwue",
    Icon: BehanceIcon,
  },
  { label: "Email", href: "mailto:kingshad5355@gmail.com", Icon: Mail },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-5xl flex-col-reverse items-center gap-14 px-6 pt-32 pb-24 md:flex-row md:items-center md:pt-40"
    >
      {/* Ambient brass glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brass/10 blur-[110px]"
      />

      <div className="relative flex-1">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          IT &amp; Visual Communication Specialist
        </p>

        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-bone md:text-6xl">
          Shadrach
          <br />
          Chukwuemeka
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-fog">
          I build software with the same care I bring to a brand system — BSc IT
          student in Accra, Ghana, working across code, layout, and
          communication.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-fog-dim">
          <span>Accra, Ghana</span>
          <span className="text-hairline">/</span>
          <span>BSc IT — Year 3 of 4</span>
          <span className="text-hairline">/</span>
          <span>Open to opportunities</span>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#journey" className={buttonVariants({ variant: "default" })}>
            See my journey
          </a>
          <a href="#contact" className={buttonVariants({ variant: "outline" })}>
            Get in touch
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-fog transition-colors hover:text-brass"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </div>

      {/* Photo plate, captioned like an editorial print credit */}
      <div className="relative shrink-0">
        <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-hairline bg-panel md:h-72 md:w-72">
          <Image
            src="/profile.jpg"
            alt="Portrait of Shadrach Chukwuemeka"
            fill
            sizes="(min-width: 768px) 288px, 224px"
            className="object-cover grayscale-[15%]"
            priority
          />
        </div>
        <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-fog-dim">
          Fig. 01 — Accra, Ghana
        </p>
      </div>
    </section>
  );
}
