import type { StateGuide } from "./types";

// Verified California homeschool-law content. Sourced from the California Dept.
// of Education (cde.ca.gov/sp/ps/homeschool.asp, /affidavit.asp) and current
// 2026 legal guides (HSLDA, HSC, California Homeschool Network). Reference
// implementation for the per-state data files — copy the shape, NOT the facts:
// every other state gets its own verified content and its own lastVerified date.
export const california: StateGuide = {
  slug: "california",
  name: "California",
  lastVerified: "2026-07-06",

  legalFramework: {
    summary:
      'California has no standalone "homeschool law." Families homeschool under ' +
      "the state's private school exemption in the Education Code — the same " +
      "statutes that govern private schools apply to a home you establish as one.",
    citations: [
      "EC §33190 — private school affidavit (PSA)",
      "EC §48222 — exemption from compulsory public school attendance",
      "EC §51210 — required subjects, grades 1–6",
      "EC §51220 — required subjects, grades 7–12",
    ],
  },

  pathways: [
    {
      name: "Private School Affidavit (PSA)",
      detail:
        "Establish your home as a private school by filing the affidavit annually " +
        "with the CDE. The most common independent option.",
    },
    {
      name: "Private School Satellite Program (PSP)",
      detail:
        "Enroll under an existing private school that handles the affidavit; the " +
        "majority of instruction still happens at home.",
    },
    {
      name: "Public charter school / independent study",
      detail:
        "State-funded, with curriculum and teacher support provided — but more " +
        "oversight and attendance requirements.",
    },
    {
      name: "Private tutor",
      detail:
        "Instruction by a person holding a valid California teaching credential for " +
        "the grade level, at least 3 hours a day between 8 a.m. and 4 p.m. for 175 " +
        "days a year. This is the only pathway that requires a credential.",
    },
  ],

  filingWindow: {
    statutory: "October 1–15 each year (EC §33190)",
    onlineSystem: "August 1 – June 30 (CDE online filing system)",
    filedWith:
      "the California Department of Education — not your local school district",
    fee: "No filing fee.",
  },

  requirements: {
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social studies",
      "Visual and performing arts",
      "Health",
      "Physical education",
    ],
    notRequired: [
      "Teaching credential",
      "State-mandated standardized testing",
      "Curriculum approval or state review",
      "Home inspections or portfolio/quarterly evaluations",
    ],
    note:
      "Instruction must be offered in English. Required subjects are set by " +
      "EC §51210 (grades 1–6) and §51220 (grades 7–12).",
  },

  records: {
    mustKeep: [
      "Attendance records",
      "Courses of study offered",
      "Names and qualifications of instructors",
    ],
    retention:
      "Retain pupil records per California Code of Regulations, Title 5, §§430–437.",
    reportingNote:
      "A public school district may verify your child's exemption by confirming the " +
      "PSA filing (EC §48222); you are not otherwise required to report to the district.",
  },

  compulsoryAge:
    "A child is subject to compulsory education starting the school year they turn " +
    "6 by September 1. Kindergarten is not mandatory. Children under compulsory age " +
    "who are taught at home should not be counted as enrolled students on the affidavit.",

  withdrawal:
    "When you file a Private School Affidavit, your home becomes a private school of " +
    "record and your child is exempt from compulsory public school attendance under " +
    "Education Code §48222. That exemption is the legal mechanism that lets your child " +
    "leave the public system.",

  transcripts:
    "California private schools — including home-based private schools operating " +
    "under a Private School Affidavit — issue their own transcripts and diplomas. " +
    "The state does not grant them.",

  disclaimer:
    "This is general information, not legal advice. Verify current requirements with " +
    "the California Department of Education (cde.ca.gov) before filing.",

  faqs: [
    {
      q: "Is homeschooling legal in California?",
      a:
        "Yes. California families homeschool legally under the state's private school " +
        "exemption, most commonly by filing a Private School Affidavit that establishes " +
        "the home as a private school.",
    },
    {
      q: "Do I need a teaching credential to homeschool in California?",
      a:
        "No — not under the Private School Affidavit, Private School Satellite Program, " +
        "or charter pathways. A credential is required only if you use the private tutor " +
        "exemption.",
    },
    {
      q: "When do I file the Private School Affidavit?",
      a:
        "Between October 1 and October 15 each year, filed online directly with the " +
        "California Department of Education. New home schools starting mid-year can file " +
        "when the system is open (August 1–June 30).",
    },
    {
      q: "Does California require standardized testing for homeschoolers?",
      a:
        "No. Under the PSA pathway there is no mandated standardized testing, no " +
        "curriculum approval, and no home inspections.",
    },
    {
      q: "What subjects must I teach?",
      a:
        "English, mathematics, science, social studies, visual and performing arts, " +
        "health, and physical education, taught in English (EC §51210 / §51220).",
    },
    {
      q: "What records do I need to keep?",
      a:
        "Attendance records, the courses of study offered, and instructor names and " +
        "qualifications. These support your child's exemption if the district requests " +
        "verification.",
    },
  ],
};
