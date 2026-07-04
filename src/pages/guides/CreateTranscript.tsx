import { Link as RouterLink } from "react-router-dom";
import { H2, H3, P, Ul, Li } from "../../components/prose.tsx";

export default function CreateTranscript() {
  return (
    <>
      <P>
        A homeschool transcript is simply a one- or two-page summary of the high
        school work your student has completed: the courses, the credits, the
        grades, and the resulting GPA. It is the single document colleges,
        scholarship committees, employers, and the military ask for most often, and
        as a homeschooling parent you are the school of record who issues it. That
        can feel intimidating the first time, but a transcript is far more about
        clear organization than about credentials — a tidy, consistent document
        carries real weight.
      </P>
      <P>
        This guide walks through exactly what goes on a transcript, how to turn
        everyday schoolwork into credits and a GPA, and how to format the finished
        product so it reads like the transcripts admissions officers already know.
      </P>

      <H2>What belongs on a homeschool transcript</H2>
      <P>
        Every credible transcript shares the same core anatomy. Include each of
        these and you will have a document that stands up to scrutiny:
      </P>
      <Ul>
        <Li><strong>Student and school identity</strong> — your student’s legal name, your homeschool’s name, and your address.</Li>
        <Li><strong>Courses by year or by subject</strong> — grouped either into 9th–12th grade years or into subject areas (English, Math, Science, Social Studies, Foreign Language, Electives).</Li>
        <Li><strong>Credits per course</strong> — typically 1.0 credit for a full-year course and 0.5 for a semester.</Li>
        <Li><strong>Grades</strong> — a letter or percentage for each course.</Li>
        <Li><strong>GPA</strong> — cumulative, and sometimes weighted for honors or AP work.</Li>
        <Li><strong>Graduation date</strong> and a parent/administrator signature.</Li>
      </Ul>

      <H2>How to assign credits</H2>
      <P>
        Credits translate learning into a unit colleges recognize. The most common
        method is the <strong>Carnegie unit</strong>: roughly 120–180 hours of work
        in a subject equals one credit. A typical full-year high school course lands
        around 150 hours. If your student finishes a rigorous algebra program over
        the year, that is one math credit; a semester elective that ran for about 75
        hours is half a credit.
      </P>
      <P>
        You can also award credit by <strong>mastery</strong> (the course is
        complete when the material is genuinely learned) or by
        <strong> completion</strong> of a recognized textbook or curriculum. Pick one
        approach and apply it consistently across subjects — consistency is what
        makes a transcript believable. Tracking hours as you go, rather than
        reconstructing them at the end, makes this painless; see our{" "}
        <RouterLink to="/guides/homeschool-recordkeeping">recordkeeping guide</RouterLink>{" "}
        for a light daily habit that feeds straight into credits.
      </P>

      <H2>How to calculate GPA</H2>
      <P>
        A standard unweighted 4.0 scale maps grades to grade points: A = 4, B = 3,
        C = 2, D = 1, F = 0. To find the GPA, multiply each course’s grade points by
        its credits, add those up, and divide by the total credits.
      </P>
      <Ul>
        <Li>English (1.0 credit), grade A → 4 × 1.0 = 4.0</Li>
        <Li>Algebra II (1.0 credit), grade B → 3 × 1.0 = 3.0</Li>
        <Li>Biology (1.0 credit), grade A → 4 × 1.0 = 4.0</Li>
        <Li>Total: 11.0 grade points ÷ 3.0 credits = <strong>3.67 GPA</strong></Li>
      </Ul>
      <P>
        If you offer honors or AP-level courses, you may weight them (for example,
        adding 0.5 or 1.0 to those grade points). Note on the transcript whether the
        GPA is weighted or unweighted so there is no ambiguity.
      </P>

      <H2>Formatting the document</H2>
      <P>
        Keep it clean and skimmable. A single page is ideal; two is fine for a
        student with many courses. Group courses logically, right-align credits and
        grades into columns, and put the GPA and graduation date where the eye lands.
        Export to PDF so the layout never shifts. Avoid decorative fonts and clip
        art — you want it to look like an official record, not a scrapbook page.
      </P>

      <H3>A shortcut</H3>
      <P>
        If you have been logging subjects, hours, and grades throughout the year,
        the transcript almost writes itself. Homeloom’s{" "}
        <RouterLink to="/dashboard">transcript generator</RouterLink> assembles a
        clean PDF with credits and GPA directly from the coursework you have already
        tracked, so you are editing a draft rather than starting from a blank page.
      </P>

      <H2>Keep it defensible</H2>
      <P>
        A transcript is a summary; the records behind it are the proof. Hold on to
        course descriptions, reading lists, major assignments, and any test scores.
        If an admissions office or your state ever asks for support, you will have
        it. Requirements for issuing diplomas and transcripts also vary by state —
        check the specifics for your state on our{" "}
        <RouterLink to="/homeschool-laws">homeschool laws by state</RouterLink>{" "}
        pages before your student graduates.
      </P>
      <P>
        Do this consistently and the transcript stops being a source of stress. It
        becomes what it should be: an honest, well-organized record of years of real
        work — exactly what your student needs to open the next door.
      </P>
    </>
  );
}
