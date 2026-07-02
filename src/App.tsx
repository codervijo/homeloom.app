import { Outlet } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme.js";
import { StoreProvider } from "./store.jsx";
import Layout from "./components/Layout.jsx";

// Router-less shell: vite-react-ssg supplies the router (memory router at
// build/prerender time, browser router in the client). App just provides the
// global providers + chrome and renders the matched route via <Outlet />.
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StoreProvider>
      <Layout>
        <Outlet />
      </Layout>
    </StoreProvider>
  </ThemeProvider>
);

export default App;
