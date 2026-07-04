import type { ReactNode } from "react";
import { Typography, Box } from "@mui/material";

// Small prose primitives so the guide articles read consistently.
export function H2({ children }: { children: ReactNode }) {
  return (
    <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
      {children}
    </Typography>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <Typography component="p" sx={{ mb: 1.5, lineHeight: 1.7 }}>
      {children}
    </Typography>
  );
}

export function Ul({ children }: { children: ReactNode }) {
  return (
    <Box component="ul" sx={{ mb: 2, pl: 3, "& li": { mb: 0.75, lineHeight: 1.7 } }}>
      {children}
    </Box>
  );
}

export function Li({ children }: { children: ReactNode }) {
  return <Box component="li">{children}</Box>;
}
