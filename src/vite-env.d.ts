/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** GA4 measurement ID (e.g. G-XXXXXXXXXX). Unset in dev / when analytics is off. */
  readonly VITE_GA_ID?: string;
}
