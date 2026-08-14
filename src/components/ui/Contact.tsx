import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { GitHubIcon, LinkedInIcon, BehanceIcon } from "@/components/ui/Icons";

const channels = [
  {
    label: "kingshad5355@gmail.com",
    href: "mailto:kingshad5355@gmail.com",
    Icon: Mail,
  },
  { label: "+233 54 533 4191", href: "tel:+233545334191", Icon: Phone },
  { label: "Accra, Ghana", href: undefined, Icon: MapPin },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kingshadtheace",
    Icon: GitHubIcon,
  },
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
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            05 — Contact
          </p>
          <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
            Open to full-time roles and freelance work
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-fog">
            If something here fits what you are building, I would like to hear
            about it.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-col items-center gap-3">
          {channels.map((channel) =>
            channel.href ? (
              <a
                key={channel.label}
                href={channel.href}
                className="inline-flex items-center gap-2.5 text-sm text-bone transition-colors hover:text-brass"
              >
                <channel.Icon size={16} />
                {channel.label}
              </a>
            ) : (
              <span
                key={channel.label}
                className="inline-flex items-center gap-2.5 text-sm text-fog"
              >
                <channel.Icon size={16} />
                {channel.label}
              </span>
            )
          )}
        </Reveal>

        <Reveal
          delay={180}
          className="mt-10 flex items-center justify-center gap-6"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-fog transition-colors hover:text-brass"
            >
              <Icon size={20} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
