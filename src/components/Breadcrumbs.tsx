import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink, Typography, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { Crumb } from "../seo/schema";

// Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted
// separately via <Seo graph={[breadcrumbNode(crumbs)]} /> on each page.
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <Container maxWidth="lg" sx={{ pt: 3 }}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        {crumbs.map((c, i) =>
          i < crumbs.length - 1 ? (
            <MuiLink
              key={c.path}
              component={RouterLink}
              to={c.path}
              underline="hover"
              color="inherit"
            >
              {c.name}
            </MuiLink>
          ) : (
            <Typography key={c.path} color="text.primary">
              {c.name}
            </Typography>
          ),
        )}
      </MuiBreadcrumbs>
    </Container>
  );
}
