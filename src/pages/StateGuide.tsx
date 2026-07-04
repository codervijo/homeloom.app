import type { ReactNode } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Container, Typography, Box, Button, Stack, Divider, Alert } from "@mui/material";
import Seo from "../seo/Seo.tsx";
import Breadcrumbs from "../components/Breadcrumbs.tsx";
import { findState } from "../content/states.ts";
import { PUBLISHED, MODIFIED } from "../seo/site.ts";
import { articleNode, faqNode, breadcrumbNode, type Faq } from "../seo/schema.ts";
import NotFound from "./NotFound.tsx";

// Template for /homeschool-laws/:state. Prose is real and conceptual; every
// state-specific regulatory fact is a [VERIFY: ...] placeholder for the
// operator to fill with confirmed data. Nothing here asserts a legal rule.
export default function StateGuide() {
  const { state: slug } = useParams();
  const state = findState(slug);
  if (!state) return <NotFound />;

  const name = state.name;
  const path = `/homeschool-laws/${state.slug}`;
  const title = `Homeschool Laws in ${name} (2026 Guide) | Homeloom`;
  const description = `Homeschool laws in ${name}: notification and filing requirements, required subjects, testing, recordkeeping, how to withdraw from public school, and transcript rules — explained plainly.`;

  const faqs: Faq[] = [
    {
      q: `Do I have to notify ${name} before I start homeschooling?`,
      a: `[VERIFY: State whether ${name} requires a notice of intent / affidavit / letter, to whom it is submitted, and the deadline.]`,
    },
    {
      q: `Does ${name} require standardized testing or assessments for homeschoolers?`,
      a: `[VERIFY: State ${name}'s assessment/testing requirement, including grades affected, frequency, and who reviews results — or state that none is required.]`,
    },
    {
      q: `What records do I need to keep to homeschool legally in ${name}?`,
      a: `[VERIFY: List the recordkeeping ${name} requires (attendance, subjects, work samples, immunization, etc.) and how long records must be retained.]`,
    },
    {
      q: `How do I withdraw my child from public school in ${name}?`,
      a: `[VERIFY: State the exact ${name} withdrawal procedure — written notice, any form, and the timing that avoids a truancy issue.]`,
    },
    {
      q: `Can homeschoolers earn a diploma or transcript in ${name}?`,
      a: `[VERIFY: State how ${name} treats parent-issued diplomas/transcripts and any credit or graduation expectations.]`,
    },
  ];

  const graph = [
    articleNode({ title: `Homeschool Laws in ${name}`, description, path, datePublished: PUBLISHED, dateModified: MODIFIED }),
    faqNode(faqs),
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Homeschool Laws", path: "/homeschool-laws" },
      { name, path },
    ]),
  ];

  return (
    <>
      <Seo title={title} description={description} path={path} graph={graph} />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Homeschool Laws", path: "/homeschool-laws" },
          { name, path },
        ]}
      />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h3" component="h1" sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 2 }}>
          {`Homeschool Laws in ${name}`}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3, fontSize: "1.1rem" }}>
          A plain-English overview of what it takes to homeschool legally in {name} —
          how to get started, what to file, what to teach, and what to keep on record.
          Use it to understand the moving parts; confirm the current specifics with
          your local district before you rely on them.
        </Typography>

        <Alert severity="info" sx={{ mb: 4 }}>
          Homeschool statutes change and are enforced locally. The {name}-specific
          details below marked <strong>[VERIFY]</strong> are placeholders pending
          confirmation against the official {name} source and are not legal advice.
        </Alert>

        <Section title={`Notification & filing requirements in ${name}`}>
          <P>
            Most states ask homeschooling families to put the state or their local
            district on notice — often through a one-time or annual notice of intent,
            affidavit, or letter of enrollment in a home education program. Getting
            this step right is what moves a child from “enrolled and absent” (a
            truancy risk) to “legally homeschooling.”
          </P>
          <P>
            In {name}, the specific requirement is:{" "}
            <Mark>[VERIFY: notification/filing requirement for {name} — form or affidavit name, where it is filed, the deadline, and whether it renews annually.]</Mark>
          </P>
        </Section>

        <Section title={`Required subjects, testing & assessment in ${name}`}>
          <P>
            States commonly expect core instruction (reading, language arts, math,
            science, and social studies), and some require periodic assessment —
            either standardized testing or an evaluation by a qualified reviewer —
            while others require nothing at all. Knowing which camp your state falls
            into tells you how much documentation you need to plan for.
          </P>
          <P>
            For {name}:{" "}
            <Mark>[VERIFY: required subjects, instructional-hours/days rule, and any assessment or testing requirement for {name}, including grades and frequency.]</Mark>
          </P>
        </Section>

        <Section title={`Recordkeeping in ${name}`}>
          <P>
            Good records protect your family: they demonstrate compliance if you’re
            ever asked, and they become the raw material for transcripts later.
            Attendance logs, a list of subjects and materials, samples of work, and
            assessment results are the usual building blocks — kept consistently,
            they turn into a defensible portfolio with almost no extra effort.
          </P>
          <P>
            {name} specifically requires:{" "}
            <Mark>[VERIFY: the records {name} requires you to keep and any retention period.]</Mark>{" "}
            For a repeatable system, see our{" "}
            <RouterLink to="/guides/homeschool-recordkeeping">homeschool recordkeeping guide</RouterLink>.
          </P>
        </Section>

        <Section title={`How to withdraw your child from public school in ${name}`}>
          <P>
            The general pattern is the same across most states: send the school a
            written withdrawal notice, complete whatever homeschool paperwork your
            state requires <em>before or at the same time</em> so there’s no gap that
            reads as truancy, and request a copy of your child’s records (grades,
            immunizations, IEP if any) for your own files.
          </P>
          <P>
            The {name}-specific procedure is:{" "}
            <Mark>[VERIFY: exact withdrawal steps for {name} — required written notice, any state/district form, and correct timing relative to filing the notice of intent.]</Mark>
          </P>
        </Section>

        <Section title={`Transcripts & graduation in ${name}`}>
          <P>
            In most states, homeschool parents are the school of record, which means
            you can issue your own transcript and diploma. Colleges and employers
            routinely accept parent-issued transcripts when they’re clear and
            consistent — listing courses, credits, hours, and grades. Homeloom’s{" "}
            <RouterLink to="/guides/create-homeschool-transcript">transcript generator</RouterLink>{" "}
            builds one automatically from the work you track.
          </P>
          <P>
            How {name} treats homeschool graduation and credits:{" "}
            <Mark>[VERIFY: {name}'s stance on parent-issued diplomas/transcripts and any credit or graduation requirements.]</Mark>
          </P>
        </Section>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          {name} homeschool FAQ
        </Typography>
        <Box sx={{ mb: 4 }}>
          {faqs.map((f) => (
            <Box key={f.q} sx={{ mb: 2.5 }}>
              <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                {f.q}
              </Typography>
              <Typography color="text.secondary">{f.a}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ bgcolor: "secondary.main", borderRadius: 3, p: { xs: 3, md: 4 }, textAlign: "center" }}>
          <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
            Stay compliant in {name} without the paperwork stress
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Homeloom tracks attendance and subjects, drafts your compliance paperwork,
            and builds transcripts from the work you’ve already logged.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
            <Button component={RouterLink} to="/dashboard" variant="contained" size="large">
              Start Free
            </Button>
            <Button component={RouterLink} to="/homeschool-laws" variant="outlined" size="large">
              All state laws
            </Button>
          </Stack>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Related guides
          </Typography>
          <Stack spacing={0.5}>
            <RouterLink to="/guides/create-homeschool-transcript">How to create a homeschool transcript</RouterLink>
            <RouterLink to="/guides/plan-homeschool-year">How to plan a homeschool year</RouterLink>
            <RouterLink to="/guides/homeschool-recordkeeping">How to keep homeschool records for compliance</RouterLink>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 1.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <Typography component="p" sx={{ mb: 1.5, lineHeight: 1.7 }}>
      {children}
    </Typography>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return (
    <Box component="mark" sx={{ bgcolor: "#FFF3CD", px: 0.5, borderRadius: 0.5 }}>
      {children}
    </Box>
  );
}
