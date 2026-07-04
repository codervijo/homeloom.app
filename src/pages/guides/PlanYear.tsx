import { Link as RouterLink } from "react-router-dom";
import { H2, H3, P, Ul, Li } from "../../components/prose.tsx";

export default function PlanYear() {
  return (
    <>
      <P>
        A homeschool year rarely falls apart because a family lacks curriculum. It
        falls apart because the plan was either too vague to follow or too rigid to
        survive a bad week. A good plan sits between those extremes: concrete enough
        to give each day a shape, flexible enough to absorb sick days, field trips,
        and the occasional deep dive that runs long. This guide shows how to build
        one you can actually keep.
      </P>

      <H2>Start with the calendar, not the curriculum</H2>
      <P>
        Before choosing a single book, decide how many weeks you will school. Many
        families run 36 weeks, mirroring a traditional school year, but you are free
        to spread the same work across 40 lighter weeks or compress it into a
        year-round rhythm with more frequent breaks. Mark your intended start and end
        dates, planned breaks, and any hard commitments (co-ops, testing windows,
        travel). This skeleton tells you how much time you truly have — usually less
        than it feels like.
      </P>
      <P>
        If your state sets an instructional-days or hours target, anchor your
        calendar to it from the start; it is far easier than counting backward in
        April. You can confirm your state’s expectation on our{" "}
        <RouterLink to="/homeschool-laws">homeschool laws by state</RouterLink> pages.
      </P>

      <H2>Set hour targets per subject</H2>
      <P>
        Translate the year into rough hour goals so nothing gets quietly dropped. A
        common high-school benchmark is about 120–180 hours for a full-year credit,
        but even in the elementary years, naming a weekly time budget per subject
        keeps the day balanced.
      </P>
      <Ul>
        <Li>Core subjects (math, language arts) — daily, shorter focused blocks.</Li>
        <Li>Content subjects (science, history) — a few times a week, often project-based.</Li>
        <Li>Enrichment (art, music, PE, electives) — weekly, lower stakes, high engagement.</Li>
      </Ul>

      <H2>Choose subjects and materials</H2>
      <P>
        Now bring in curriculum — and resist the urge to over-buy. Pick one spine
        per subject and a small number of supplements. For each subject, sketch how
        far you expect to get by the end of the year, then divide by your number of
        weeks to get a weekly pace. A math program with 150 lessons over 36 weeks is
        a little over four lessons a week; seeing that number now prevents the
        February panic of being “three units behind.”
      </P>

      <H2>Build a weekly rhythm</H2>
      <P>
        Days work best as repeatable patterns rather than minute-by-minute
        schedules. Decide what a normal week looks like — which subjects happen on
        which days, and in what order — then let the daily plan flow from it. Many
        families put the hardest or most-resisted subject first, batch content
        subjects into afternoon blocks, and keep one lighter day for catch-up, labs,
        or outings.
      </P>
      <H3>Loop scheduling for the extras</H3>
      <P>
        For subjects that do not need to happen every single day (art, logic,
        geography), a loop works well: keep a list and simply do the next item
        whenever that slot comes up. Miss a day and nothing is “behind” — you just
        pick up where the loop left off. It is the single best trick for protecting
        the enrichment that makes homeschooling special.
      </P>

      <H2>Plan for the plan to change</H2>
      <P>
        Assume disruption and you will not be derailed by it. Build in margin: a few
        empty weeks across the year, a lighter day each week, and permission to move
        a lesson rather than skip it. Review your pace monthly — are you roughly on
        track for your hour targets and your end date? A small mid-course correction
        beats a spring scramble every time.
      </P>

      <H2>Track as you go</H2>
      <P>
        A plan is only useful if you can see whether you are following it. Logging
        what actually happened each day — subjects covered, time spent, work
        completed — turns your plan into a live record. That record does double duty:
        it keeps you honest during the year, and it becomes the raw material for
        compliance and transcripts later. Homeloom’s{" "}
        <RouterLink to="/dashboard">daily dashboard</RouterLink> makes this a
        two-minute habit, and the same data feeds your{" "}
        <RouterLink to="/guides/create-homeschool-transcript">transcript</RouterLink>{" "}
        and{" "}
        <RouterLink to="/guides/homeschool-recordkeeping">compliance records</RouterLink>.
      </P>
      <P>
        Plan the calendar first, aim for realistic hours, build a rhythm you can
        repeat, and leave yourself room to adapt. Do that, and the year stops being
        something you survive and becomes something you can steer.
      </P>
    </>
  );
}
