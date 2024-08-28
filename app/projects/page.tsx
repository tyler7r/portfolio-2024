import Calculator from "../../public/calculator.jpg";
import KnightTravails from "../../public/knight-travails.jpg";
import InsideBreakLogo from "../../public/Large Light Icon.png";
import SurvivorMemory from "../../public/memory-card.jpg";
import OdinbookLogo from "../../public/odinbook-screenshot.jpg";
import ShoppingCart from "../../public/shopping-cart.jpg";
import Waldo from "../../public/waldo.jpg";
import IconContainer from "../components/icon-container";
import ImageContainer from "../components/image-container";

const Projects = () => {
  const skillsStyle = "font-bold text-sm text-red-600";
  const container = "flex flex-col gap-4 rounded-md lg:grid lg:grid-cols-3";
  const detailContainer = "flex flex-col gap-2 lg:col-span-2";
  const projectTitle = "tracking-tight font-bold text-2xl";
  const titleContainer = "flex w-full items-center gap-2";

  return (
    <div className="w-full flex flex-col px-4 py-2 gap-4">
      <div className="font-bold text-5xl text-red-600">projects</div>
      <div className="grid grid-cols-1 gap-8 w-full">
        <div className={container}>
          <div className={detailContainer}>
            <div className={titleContainer}>
              <div className={projectTitle}>Inside Break</div>
              <IconContainer
                ghLink="https://github.com/tyler7r/film-room"
                link="https://www.inside-break.com"
              />
            </div>
            <div>
              Easily the biggest project that I have built so far. I made Inside
              Break so that my Ultimate Frisbee team could more collaboratively
              and efficiently analyze game footage. However, once I started
              building it I got carried away and wanted to make it into
              something that any Ultimate/sport team could use to bring their
              performance up. The idea is that it embeds YouTube videos into the
              site and then allows users to create clips that associate a note
              with a certain timestamp. These clips can tag other users and then
              they are posted to a social media-esque feed to share with
              everyone on the app. This project was a tremendous challenge for
              me as a developer and it pushed me to create and solve a lot of
              new problems. I have recently released it to the Ultimate Frisbee
              community via Reddit to be my beta testers!
            </div>
            <div className={skillsStyle}>
              Skills used: NextJS, Typescript, Tailwind, Supabase, Vercel,
              Material UI
            </div>
          </div>
          <ImageContainer
            image={InsideBreakLogo}
            altTitle="Inside Break Image"
            ghLink="https://github.com/tyler7r/film-room"
            link="https://www.inside-break.com"
          />
        </div>
        <div className={container}>
          <div className={detailContainer}>
            <div className={titleContainer}>
              <div className={projectTitle}>The Odinbook</div>
              <IconContainer
                ghLink="https://github.com/tyler7r/TOP-odin-book"
                link="https://top-odinbook.netlify.app/odinbook/login"
              />
            </div>
            <div>
              The Odinbook is a social media app modeled after Facebook. This
              project is my first fully built out MERN-stack application. Post
              your thoughts and photos, edit your profile and send out friend
              requests to other users. The site uses two front-end clients (one
              for users and one for guests) in order to give those who do not
              want to signup a chance to interact with the site as well.
            </div>
            <div className={skillsStyle}>
              Skills used: React, React Router, Javascript, MongoDB, Node,
              Express, Heroku, Netlify
            </div>
          </div>
          <ImageContainer
            altTitle="Odinbook Image"
            image={OdinbookLogo}
            ghLink="https://github.com/tyler7r/TOP-odin-book"
            link="https://top-odinbook.netlify.app/odinbook/login"
          />
        </div>
        <div className={container}>
          <div className={detailContainer}>
            <div className={titleContainer}>
              <div className={projectTitle}>Where is Waldo</div>
              <IconContainer
                link="https://top-photo-tagging.netlify.app/"
                ghLink="https://github.com/tyler7r/TOP-photo-tagging"
              />
            </div>
            <div>
              My take on a the classic Where is Waldo game. Compete against
              others in a race to find Waldo, Odlaw and the Wizard on a couple
              of the famous maps. This project was my first full-stack
              application. The leaderboards update after each round and they
              withstand due to their link with the firebase database.
            </div>
            <div className={skillsStyle}>
              Skills used: React, React Router, Javascript, Firebase, Netlify
            </div>
          </div>
          <ImageContainer
            image={Waldo}
            altTitle="Waldo Picture"
            link="https://top-photo-tagging.netlify.app/"
            ghLink="https://github.com/tyler7r/TOP-photo-tagging"
          />
        </div>
        <div className={container}>
          <div className={detailContainer}>
            <div className={titleContainer}>
              <div className={projectTitle}>Shopping Cart</div>
              <IconContainer
                ghLink="https://github.com/tyler7r/TOP-shopping-cart/tree/tyler7r-patch-1"
                link="https://tyler7r.github.io/TOP-shopping-cart/"
              />
            </div>
            <div>
              As a member of the professional Ultimate Frisbee team, the Atlanta
              Hustle. I thought it would be fun to combine my passions and
              recreate our team store. You can scroll through popular tickets
              and gear to see what might be of interest and add them to your
              cart. This project expanded my knowledge on React by introducing
              me to its router system. (Let me know if you can find the easter
              eggs that I added.)
            </div>
            <div className={skillsStyle}>
              Skills used: React, React Router, Javascript
            </div>
          </div>
          <ImageContainer
            image={ShoppingCart}
            altTitle="Shopping Cart Image"
            ghLink="https://github.com/tyler7r/TOP-shopping-cart/tree/tyler7r-patch-1"
            link="https://tyler7r.github.io/TOP-shopping-cart/"
          />
        </div>
        <div className={container}>
          <div className={detailContainer}>
            <div className={titleContainer}>
              <div className={projectTitle}>Survivor Memory Game</div>
              <IconContainer
                ghLink="https://github.com/tyler7r/TOP-memory-card"
                link="https://top-memory-card.netlify.app/"
              />
            </div>
            <div>
              The Survivor Memory game puts your knowledge of Survivor 44 Cast
              members to the test. In my first major project using React and
              focusing on object-oriented-programming the user must click on
              each cast member without repeating. The trick is that the cast
              members move after each click. Choose your level and test your
              knowledge!
            </div>
            <div className={skillsStyle}>
              Skills used: React, React Router, Javascript, Netlify
            </div>
          </div>
          <ImageContainer
            image={SurvivorMemory}
            altTitle="Survivor Memory Image"
            ghLink="https://github.com/tyler7r/TOP-memory-card"
            link="https://top-memory-card.netlify.app/"
          />
        </div>
        <div className={container}>
          <div className={detailContainer}>
            <div className={titleContainer}>
              <div className={projectTitle}>Knight Travails</div>
              <IconContainer
                ghLink="https://github.com/tyler7r/TOP-knight-travails"
                link="https://tyler7r.github.io/TOP-knight-travails/"
              />
            </div>
            <div>
              The Knight Travails forges the path for a knight from any chess
              square to any other square in as few moves as possible. This
              project was a test of my abilities to use recursive functions. It
              also continued to expand my abilities styling with CSS.
            </div>
            <div className={skillsStyle}>
              Skills used: Javascript, CSS, HTML
            </div>
          </div>
          <ImageContainer
            image={KnightTravails}
            altTitle="Knight Travails Image"
            ghLink="https://github.com/tyler7r/TOP-knight-travails"
            link="https://tyler7r.github.io/TOP-knight-travails/"
          />
        </div>
        <div className={container}>
          <div className={detailContainer}>
            <div className={titleContainer}>
              <div className={projectTitle}>Calculator</div>
              <IconContainer
                ghLink="https://github.com/tyler7r/TOP-calculator"
                link="https://tyler7r.github.io/TOP-calculator/"
              />
            </div>
            <div>
              This is the first project that I was proud enough to host to
              GitHub Pages. Modeled after the calculator that you see on iOS,
              this project laid the foundation for my knowledge of Javascript.
            </div>
            <div className={skillsStyle}>
              Skills used: Javascript, CSS, HTML
            </div>
          </div>
          <ImageContainer
            image={Calculator}
            altTitle="Calculator Image"
            ghLink="https://github.com/tyler7r/TOP-calculator"
            link="https://tyler7r.github.io/TOP-calculator/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
