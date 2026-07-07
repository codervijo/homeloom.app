import type { Faq } from "../../seo/schema";

// Shared shape every per-state homeschool-law data file must satisfy. Every
// field is REQUIRED: TypeScript rejects a state file that ships without a legal
// framework, pathways, filing window, requirements, records, compulsory age,
// FAQ, disclaimer, or a lastVerified date. Facts are per-state and never
// templated — each state's file carries its own verified content.

export interface LegalFramework {
  /** One-to-two sentences on the legal basis for homeschooling in the state. */
  summary: string;
  /** Statute citations, each formatted "CODE §NUM — plain-English description". */
  citations: string[];
}

export interface Pathway {
  name: string;
  detail: string;
}

export interface FilingWindow {
  /** Statutory filing period, e.g. "October 1–15". */
  statutory: string;
  /** Online/administrative filing availability, e.g. "August 1 – June 30". */
  onlineSystem: string;
  /** Who the filing goes to, e.g. "the California Department of Education …". */
  filedWith: string;
  /** Fee statement, e.g. "No filing fee." */
  fee: string;
}

export interface Requirements {
  /** Required subjects of instruction. */
  subjects: string[];
  /** Things explicitly NOT required (credential, testing, approval, inspection). */
  notRequired: string[];
  /** Extra note — language of instruction, governing citations, etc. */
  note: string;
}

export interface Records {
  /** Records the state requires families to keep. */
  mustKeep: string[];
  /** Retention rule / citation. */
  retention: string;
  /** Reporting / district-verification note. */
  reportingNote: string;
}

export interface StateGuide {
  slug: string;
  name: string;
  /** ISO date (YYYY-MM-DD) the facts below were last verified against sources. */
  lastVerified: string;

  legalFramework: LegalFramework;
  pathways: Pathway[];
  filingWindow: FilingWindow;
  requirements: Requirements;
  records: Records;
  compulsoryAge: string;

  /** The exemption mechanism ONLY — no step-by-step withdrawal procedure. */
  withdrawal: string;
  /** Verified transcript/diploma statement, stated as fact (not inference). */
  transcripts: string;

  /** "General information, not legal advice" disclaimer — required on every page. */
  disclaimer: string;
  faqs: Faq[];
}
