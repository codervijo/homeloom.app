/**
 * GA4 loader. Reads the measurement ID from VITE_GA_ID (inlined at build time)
 * and only initializes when a real ID is present. If the var is missing, blank,
 * still the raw Vite placeholder, or the .env.example sample value, this no-ops:
 * no gtag script is loaded and nothing is pushed to the DOM. Failing
 * silent-and-clean beats shipping a broken "%VITE_GA_ID%" or firing GA with a
 * garbage ID.
 */

export function initAnalytics(): void {
  const gaId = import.meta.env.VITE_GA_ID?.trim();

  // No usable ID: undefined/blank, an unsubstituted "%VITE_GA_ID%" placeholder,
  // or the documentation sample from .env.example.
  if (!gaId || gaId.startsWith("%") || gaId === "G-XXXXXXXXXX") {
    return;
  }

  // Don't run GA in local dev (mirrors the event helper in ./ga.ts).
  if (import.meta.env.DEV) {
    return;
  }

  const win = window as unknown as { dataLayer?: unknown[] };
  win.dataLayer = win.dataLayer ?? [];
  function gtag(...args: unknown[]): void {
    win.dataLayer!.push(args);
  }
  gtag("js", new Date());
  gtag("config", gaId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(script);
}
