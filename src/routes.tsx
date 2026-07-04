import type { RouteRecord } from "vite-react-ssg";
import App from "./App.tsx";
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Compliance from "./pages/Compliance.jsx";
import ChildView from "./pages/ChildView.jsx";
import Transcript from "./pages/Transcript.jsx";
import NotFound from "./pages/NotFound.tsx";
import HomeschoolLawsIndex from "./pages/HomeschoolLawsIndex.tsx";
import StateGuide from "./pages/StateGuide.tsx";
import GuidesIndex from "./pages/GuidesIndex.tsx";
import GuidePage from "./pages/GuidePage.tsx";

// Route table consumed by both the client entry and the SSG prerender pass.
// Only "/" (Landing) is prerendered to static HTML — see ssgOptions in
// vite.config.ts. The other routes are localStorage-backed app views and stay
// client-only SPA (they're per-user and mostly robots-Disallowed).
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "homeschool-laws", element: <HomeschoolLawsIndex /> },
      { path: "homeschool-laws/:state", element: <StateGuide /> },
      { path: "guides", element: <GuidesIndex /> },
      { path: "guides/:slug", element: <GuidePage /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "compliance", element: <Compliance /> },
      { path: "child/:id", element: <ChildView /> },
      { path: "transcript", element: <Transcript /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
