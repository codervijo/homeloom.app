import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes.tsx";
import "./index.css";
import { initAnalytics } from "./analytics/init.ts";

// vite-react-ssg uses this single entry for both sides: it prerenders the
// routes to static HTML at build time and hydrates them in the browser.
export const createRoot = ViteReactSSG({ routes }, ({ isClient }) => {
  // Analytics only ever runs in the browser, never during prerender.
  if (isClient) initAnalytics();
});
