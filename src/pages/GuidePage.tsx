import { useParams, Link as RouterLink } from "react-router-dom";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import Seo from "../seo/Seo.tsx";
import Breadcrumbs from "../components/Breadcrumbs.tsx";
import { findGuide } from "../content/guides-meta.ts";
import { GUIDE_BODIES } from "../content/guides.tsx";
import { PUBLISHED, MODIFIED } from "../seo/site.ts";
import { articleNode, breadcrumbNode } from "../seo/schema.ts";
import NotFound from "./NotFound.tsx";

// Template for /guides/:slug — Article + BreadcrumbList schema wrapping the
// matched article body from the registry.
export default function GuidePage() {
  const { slug } = useParams();
  const guide = findGuide(slug);
  const Body = slug ? GUIDE_BODIES[slug] : undefined;
  if (!guide || !Body) return <NotFound />;

  const path = `/guides/${guide.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.h1, path },
  ];
  const graph = [
    articleNode({
      title: guide.h1,
      description: guide.description,
      path,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
    }),
    breadcrumbNode(crumbs),
  ];

  return (
    <>
      <Seo title={guide.title} description={guide.description} path={path} graph={graph} />
      <Breadcrumbs crumbs={crumbs} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h3" component="h1" sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 3 }}>
          {guide.h1}
        </Typography>

        <Body />

        <Box sx={{ mt: 5, bgcolor: "secondary.main", borderRadius: 3, p: { xs: 3, md: 4 }, textAlign: "center" }}>
          <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
            Put it on autopilot
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Homeloom tracks your school days, drafts compliance paperwork, and builds
            transcripts automatically from the work you log.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
            <Button component={RouterLink} to="/dashboard" variant="contained" size="large">
              Start Free
            </Button>
            <Button component={RouterLink} to="/homeschool-laws" variant="outlined" size="large">
              Find your state’s laws
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
