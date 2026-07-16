import { SiGithub, SiBehance } from "@icons-pack/react-simple-icons";

export const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <SiGithub size={size} color="currentColor" title="GitHub" />
);

export const BehanceIcon = ({ size = 20 }: { size?: number }) => (
  <SiBehance size={size} color="currentColor" title="Behance" />
);

/**
 * LinkedIn removed its logo from open icon packs after enforcing its
 * trademark. LinkedIn's own brand guidelines explicitly permit members to
 * use the "in" mark for exactly one purpose: linking to their own profile.
 * This is a plain geometric + typographic mark built for that single use,
 * styled to match this site rather than a traced brand asset.
 */
export const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="1.5"
      y="1.5"
      width="21"
      height="21"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <text
      x="12"
      y="16.5"
      textAnchor="middle"
      fontSize="10.5"
      fontWeight="600"
      fill="currentColor"
      fontFamily="ui-sans-serif, system-ui, sans-serif"
    >
      in
    </text>
  </svg>
);
