import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { STATES } from "./src/content/states";
import { GUIDES } from "./src/content/guides-meta";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  // vite-react-ssg: prerender the public content routes to static HTML — the
  // marketing homepage, the guides, and the per-state homeschool-law pages.
  // App/dashboard routes are localStorage-backed and stay client-only SPA.
  ssgOptions: {
    includedRoutes: () => [
      "/",
      "/homeschool-laws",
      ...STATES.map((s) => `/homeschool-laws/${s.slug}`),
      "/guides",
      ...GUIDES.map((g) => `/guides/${g.slug}`),
    ],
  },
});
