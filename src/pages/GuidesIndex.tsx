import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Box, Card, CardContent, Stack } from "@mui/material";
import Seo from "../seo/Seo.tsx";
import Breadcrumbs from "../components/Breadcrumbs.tsx";
import { GUIDES } from "../content/guides-meta.ts";
import { breadcrumbNode, itemListNode } from "../seo/schema.ts";

const PATH = "/guides";

export default function GuidesIndex() {
  const title = "Homeschool Guides: Transcripts, Planning & Records | Homeloom";
  const description =
    "Practical homeschool how-to guides: create a college-ready transcript, plan a homeschool year you can sustain, and keep records that satisfy state compliance.";

  const graph = [
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Guides", path: PATH },
    ]),
    itemListNode(GUIDES.map((g) => ({ name: g.h1, path: `${PATH}/${g.slug}` }))),
  ];

  return (
    <>
      <Seo title={title} description={description} path={PATH} graph={graph} />
      <Breadcrumbs crumbs={[{ name: "Home", path: "/" }, { name: "Guides", path: PATH }]} />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h3" component="h1" sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 2 }}>
          Homeschool guides
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 760, fontSize: "1.1rem" }}>
          Straightforward, experience-based guidance for the parts of homeschooling
          that trip families up — transcripts, planning, and recordkeeping. Pair them
          with the{" "}
          <RouterLink to="/homeschool-laws">laws for your state</RouterLink>.
        </Typography>

        <Stack spacing={2}>
          {GUIDES.map((g) => (
            <Card key={g.slug}>
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ mb: 0.5 }}>
                  <RouterLink to={`${PATH}/${g.slug}`}>{g.h1}</RouterLink>
                </Typography>
                <Typography color="text.secondary">{g.excerpt}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Box sx={{ mt: 4 }}>
          <RouterLink to="/homeschool-laws">Browse homeschool laws by state →</RouterLink>
        </Box>
      </Container>
    </>
  );
}
