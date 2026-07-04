import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Box, Grid } from "@mui/material";
import Seo from "../seo/Seo.tsx";
import Breadcrumbs from "../components/Breadcrumbs.tsx";
import { STATES } from "../content/states.ts";
import { breadcrumbNode, itemListNode } from "../seo/schema.ts";

const PATH = "/homeschool-laws";

export default function HomeschoolLawsIndex() {
  const title = "Homeschool Laws by State (All 50 States + DC) | Homeloom";
  const description =
    "Homeschool laws for every US state and Washington, DC — notification and filing requirements, testing, recordkeeping, withdrawal, and transcripts. Pick your state to get started.";

  const graph = [
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Homeschool Laws", path: PATH },
    ]),
    itemListNode(STATES.map((s) => ({ name: s.name, path: `${PATH}/${s.slug}` }))),
  ];

  return (
    <>
      <Seo title={title} description={description} path={PATH} graph={graph} />
      <Breadcrumbs crumbs={[{ name: "Home", path: "/" }, { name: "Homeschool Laws", path: PATH }]} />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h3" component="h1" sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 2 }}>
          Homeschool laws by state
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 760, fontSize: "1.1rem" }}>
          Every state sets its own homeschool rules — how you notify officials, what
          you have to teach, whether testing is required, and what records to keep.
          Choose your state below for a plain-English breakdown, then let Homeloom
          handle the tracking, compliance paperwork, and transcripts.
        </Typography>

        <Grid container spacing={1.5}>
          {STATES.map((s) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={s.slug}>
              <Box
                component={RouterLink}
                to={`${PATH}/${s.slug}`}
                sx={{
                  display: "block",
                  p: 1.5,
                  borderRadius: 2,
                  border: "1px solid #eef1f6",
                  textDecoration: "none",
                  color: "text.primary",
                  "&:hover": { borderColor: "primary.main", bgcolor: "secondary.main" },
                }}
              >
                Homeschool laws in {s.name}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Guides
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <RouterLink to="/guides/create-homeschool-transcript">Create a homeschool transcript</RouterLink>
            <RouterLink to="/guides/plan-homeschool-year">Plan a homeschool year</RouterLink>
            <RouterLink to="/guides/homeschool-recordkeeping">Keep homeschool records</RouterLink>
          </Box>
        </Box>
      </Container>
    </>
  );
}
