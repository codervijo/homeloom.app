import type { StateGuide } from "./types";
import { california } from "./california";

export type { StateGuide } from "./types";

// Registry of states with verified law content, keyed by slug. States absent
// from this map fall back to the [VERIFY] placeholder template in StateGuide.tsx.
// Add a state by dropping a new file in this directory and registering it here.
const STATE_GUIDES: Record<string, StateGuide> = {
  california,
};

export function getStateGuide(slug: string | undefined): StateGuide | undefined {
  return slug ? STATE_GUIDES[slug] : undefined;
}
