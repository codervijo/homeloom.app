import { Link as RouterLink } from "react-router-dom";
import { H2, H3, P, Ul, Li } from "../../components/prose.tsx";

export default function KeepRecords() {
  return (
    <>
      <P>
        Recordkeeping is the least glamorous part of homeschooling and quietly one of
        the most important. Good records prove you are meeting your state’s
        requirements, protect your family if anyone ever questions your program, and
        become the foundation for report cards, portfolios, and transcripts. The good
        news: a defensible record does not require hours of admin. It requires a
        small, consistent habit and a sensible place to keep things.
      </P>

      <H2>What to track</H2>
      <P>
        Most states care about some combination of a short list. Even where the law
        asks for little, keeping these makes your life easier at transcript time:
      </P>
      <Ul>
        <Li><strong>Attendance</strong> — the days (or hours) of instruction. A simple daily check is enough.</Li>
        <Li><strong>Subjects and materials</strong> — what you studied and the books or programs you used.</Li>
        <Li><strong>Work samples</strong> — a few representative pieces per subject per term, not everything.</Li>
        <Li><strong>Assessments</strong> — quizzes, tests, evaluations, or standardized scores where they apply.</Li>
        <Li><strong>Grades or progress notes</strong> — however you measure it, written down rather than remembered.</Li>
        <Li><strong>Official documents</strong> — your notice of intent, immunization records, and any correspondence with the district.</Li>
      </Ul>
      <P>
        Your exact obligations depend on where you live — some states require almost
        nothing, others expect an annual portfolio review or test. Confirm yours on
        our{" "}
        <RouterLink to="/homeschool-laws">homeschool laws by state</RouterLink> pages
        so you track what actually matters and skip what does not.
      </P>

      <H2>Build a system you will actually use</H2>
      <P>
        The best system is the one that survives a busy week. Two principles keep it
        alive: capture things <em>as they happen</em>, and keep <em>one</em> home for
        each type of record.
      </P>
      <H3>Log daily, in minutes</H3>
      <P>
        At the end of each school day, jot what each child covered and roughly how
        long. Done consistently, this one habit produces attendance, subject logs,
        and hour totals all at once — the three things you would otherwise scramble to
        reconstruct. Homeloom’s{" "}
        <RouterLink to="/dashboard">daily dashboard</RouterLink> is built for exactly
        this: a couple of taps a day that quietly assemble your records for you.
      </P>
      <H3>Keep a light portfolio</H3>
      <P>
        Once a term, pull a handful of work samples per subject into a folder —
        digital or physical. You are not archiving every worksheet; you are keeping
        enough to show real progress. Photograph physical work so a single backup
        holds everything.
      </P>

      <H2>How long to keep records</H2>
      <P>
        As a rule of thumb, keep the current year’s records readily accessible and
        retain prior years at least through graduation — high school records deserve
        to be kept permanently, since transcripts and college or job applications can
        reference them years later. Some states specify a retention period; where
        yours does, follow it. When in doubt, keep the high-school years forever and
        the earlier years until your student finishes.
      </P>

      <H2>From records to transcript</H2>
      <P>
        The payoff of steady recordkeeping arrives at the end of high school. Because
        you tracked subjects, hours, and grades all along, building a{" "}
        <RouterLink to="/guides/create-homeschool-transcript">transcript</RouterLink>{" "}
        becomes a matter of formatting rather than reconstruction. The same logs also
        make it simple to answer a district’s questions or complete an annual
        assessment without a paperwork emergency.
      </P>

      <H2>Stay ahead of compliance</H2>
      <P>
        Finally, put your compliance dates on the calendar the moment you know them —
        the deadline to file your notice of intent, any testing window, any portfolio
        review. Missing a date is the most common avoidable problem in homeschooling,
        and it is entirely preventable. Pair a few reminders with your daily log and
        a light termly portfolio, and you will have a record that is both effortless
        to maintain and ready for anything your state asks. If you want the tracking,
        reminders, and paperwork in one place, that is exactly what{" "}
        <RouterLink to="/dashboard">Homeloom</RouterLink> is for.
      </P>
    </>
  );
}
