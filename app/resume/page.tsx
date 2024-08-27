import Link from "next/link";

const Resume = () => {
  const titleContainer =
    "w-full flex flex-col md:justify-between md:items-center md:flex-row";
  const descriptionContainer = "w-full text-sm font-light";
  const sectionContainer = "flex flex-col";
  const container =
    "p-2 rounded-md flex flex-col items-center justify-center odd:bg-white";
  const heading1 = "font-bold text-xl underline";
  const heading2 = "font-bold flex-wrap";
  const heading3 =
    "italic text-sm hover:text-orange-600 ease-in-out transition delay-100";
  const body = "text-sm";
  const date = "font-bold text-orange-600 text-sm";

  return (
    <div className="px-4 flex flex-col gap-4">
      <div className="font-bold text-orange-600 text-5xl">resume</div>
      <div className="flex flex-col gap-4 px-2">
        <div className={sectionContainer}>
          <div className={heading1}>Education</div>
          <div className={container}>
            <div className={titleContainer}>
              <div className={heading2}>University of Georgia</div>
              <div className={body}>Athens, GA</div>
            </div>
            <div className={titleContainer}>
              <div className={heading3}>B.S Ed. / Pre-Med </div>
              <div className={date}>Graduated May 2021</div>
            </div>
            <div className={descriptionContainer}>
              <div>Overall GPA: 3.89</div>
              <div>
                Zell Miller Scholarship Recipient, Presidential Scholar, Dean's
                List (6 Semesters)
              </div>
            </div>
          </div>
        </div>
        <div className={sectionContainer}>
          <div className={heading1}>Professional Experience</div>
          <div className={container}>
            <div className={titleContainer}>
              <div className={heading2}>Barista</div>
              <div className={body}>Atlanta, GA</div>
            </div>
            <div className={titleContainer}>
              <Link href="https://perccoffee.com/">
                <div className={heading3}>PERC Coffee</div>
              </Link>
              <div className={date}>November 2023 - Present</div>
            </div>
            <ul className={descriptionContainer}>
              <li>
                - Balanced a number of responsibilities, in order to efficiently
                prepare speciality coffee drinks while simultaneously cooking
                breakfast items in the kitchen
              </li>
              <li>
                - Displayed strong collaboration and teamwork with my colleagues
                to minimize customer wait times even during busy weekend rushes,
                while maintaining a positive work environment
              </li>
            </ul>
          </div>
          <div className={container}>
            <div className={titleContainer}>
              <div className={heading2}>
                Head Coach - Ultimate Frisbee, Flag Football and Basketball
              </div>
              <div className={body}>Atlanta, GA</div>
            </div>
            <div className={titleContainer}>
              <Link href="https://arbormontessori.org/">
                <div className={heading3}>Arbor Montessori School</div>
              </Link>
              <div className={date}>September 2021 - Present</div>
            </div>
            <ul className={descriptionContainer}>
              <li>
                - Organized two 90 minute practices a week that maintained a
                healthy balance between player engagement and improvement across
                different sports
              </li>
              <li>
                - Continued development of the Ultimate team in particular over
                the three years, demonstrated by winning the championship in my
                second + third year and an increased number of participants each
                year I have coached
              </li>
              <li>
                - After my successes coaching Ultimate, the Athletic Director
                asked me to coach more sports to stay involved{" "}
              </li>
              <li>
                - Focused on relaying my passion for sports to inspire the next
                generation of student-athletes
              </li>
            </ul>
          </div>
          <div className={container}>
            <div className={titleContainer}>
              <div className={heading2}>Medical Assistant</div>
              <div className={body}>Atlanta, GA</div>
            </div>
            <div className={titleContainer}>
              <Link href="https://www.performanceatl.com/">
                <div className={heading3}>
                  Performance Orthopedics and Sports Medicine
                </div>
              </Link>
              <div className={date}>September 2021 - March 2023</div>
            </div>
            <ul className={descriptionContainer}>
              <li>
                - Recorded patient histories, took required x-rays, and
                presented each case to residing physician
              </li>
              <li>
                - Facilitated next steps in patient care (ordering tests/labs,
                sending out prescriptions, etc.)
              </li>
              <li>
                - Scheduled appointments and answered pertinent clinical
                questions over the phone
              </li>
              <li>- Trained new employees on clinical and front-desk tasks</li>
            </ul>
          </div>
          <div className={container}>
            <div className={titleContainer}>
              <div className={heading2}>
                Technology Services Student Consultant
              </div>
              <div className={body}>Athens, GA</div>
            </div>
            <div className={titleContainer}>
              <Link href="https://eits.uga.edu/">
                <div className={heading3}>
                  University of Georgia - EITS Department
                </div>
              </Link>
              <div className={date}>June 2019 - May 2021</div>
            </div>
            <ul className={descriptionContainer}>
              <li>
                - Performed first response troubleshooting, and technical
                support for 30+ patrons daily
              </li>
              <li>
                - Managed, installed and tested updates on technology lending
                inventory and assisted in training new hires
              </li>
            </ul>
          </div>
        </div>
        <div className={sectionContainer}>
          <div className={heading1}>Project Experience</div>
          <div className={container}>
            <div className={`${heading2} w-full`}>Web Development Bootcamp</div>
            <div className={titleContainer}>
              <Link href="https://www.theodinproject.com/">
                <div className={heading3}>The Odin Project</div>
              </Link>
              <div className={date}>September 2022 - August 2023</div>
            </div>
            <ul className={descriptionContainer}>
              <li>
                - Acted on my interest in web development via The Odin Project’s
                self-paced curriculum, completed the course
              </li>
              <li>
                - Composed a portfolio of projects to demonstrate the skills
                that I obtained and refined throughout the course which is now
                hosted on my personal domain
              </li>
            </ul>
          </div>
          <div className={container}>
            <div className={titleContainer}>
              <div className={heading2}>
                Professional Ultimate Frisbee Player
              </div>
              <div className={body}>Atlanta, GA</div>
            </div>
            <div className={titleContainer}>
              <Link href="https://www.watchufa.com/hustle">
                <div className={heading3}>The Atlanta Hustle</div>
              </Link>
              <div className={date}>March 2022 - Present</div>
            </div>
            <ul className={descriptionContainer}>
              <li>
                - Offered one of 15 roster spots for new players in 2022, have
                signed early contracts since due to good performance
              </li>
              <li>
                - Earned the Mark Poole Hustle Award at the end of the 2022
                season, an award given to the player who most embodied the
                spirit of the team through on and off-field contributions
              </li>
            </ul>
          </div>
        </div>
        <div className={sectionContainer}>
          <div className={heading1}>Campus and Community Involvement</div>
          <div className={container}>
            <div className={titleContainer}>
              <div className={heading2}>
                Atlanta Hustle - Youth Academy Coach
              </div>
              <div className={date}>November 2022 - Present</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
