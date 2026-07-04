// Pure metadata for the guide articles. Imported by vite.config.ts (prerender
// list) and the guides index, so it must stay React-free.
export type GuideMeta = {
  slug: string;
  title: string; // <title> tag
  h1: string; // on-page H1 / Article headline
  description: string;
  excerpt: string;
};

export const GUIDES: GuideMeta[] = [
  {
    slug: "create-homeschool-transcript",
    title: "How to Create a Homeschool Transcript (Step-by-Step) | Homeloom",
    h1: "How to create a homeschool transcript",
    description:
      "A step-by-step guide to building a college-ready homeschool transcript: what to include, how to assign credits and GPA, formatting, and how to keep it defensible.",
    excerpt:
      "What to include, how to assign credits and calculate GPA, and how to format a transcript colleges accept.",
  },
  {
    slug: "plan-homeschool-year",
    title: "How to Plan a Homeschool Year: A Practical Guide | Homeloom",
    h1: "How to plan a homeschool year",
    description:
      "Plan a homeschool year that actually holds up: set a calendar and hour targets, choose subjects, build a weekly rhythm, and leave room to adjust without falling behind.",
    excerpt:
      "Set a calendar and hour targets, choose subjects, and build a weekly rhythm you can sustain.",
  },
  {
    slug: "homeschool-recordkeeping",
    title: "How to Keep Homeschool Records for Compliance | Homeloom",
    h1: "How to keep homeschool records for compliance",
    description:
      "A simple, sustainable homeschool recordkeeping system: what to track (attendance, subjects, work samples, assessments), how long to keep it, and how records become transcripts.",
    excerpt:
      "What to track, how long to keep it, and how a light daily habit becomes an audit-proof portfolio.",
  },
];

export function findGuide(slug: string | undefined): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
