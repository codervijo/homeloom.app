import type { ComponentType } from "react";
import CreateTranscript from "../pages/guides/CreateTranscript.tsx";
import PlanYear from "../pages/guides/PlanYear.tsx";
import KeepRecords from "../pages/guides/KeepRecords.tsx";

// Maps a guide slug to its article body. Kept separate from guides-meta.ts so
// the metadata stays React-free for vite.config.ts.
export const GUIDE_BODIES: Record<string, ComponentType> = {
  "create-homeschool-transcript": CreateTranscript,
  "plan-homeschool-year": PlanYear,
  "homeschool-recordkeeping": KeepRecords,
};
