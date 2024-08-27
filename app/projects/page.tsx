const Projects = () => {
  return (
    <div className="w-full flex flex-col px-4 py-2 gap-4">
      <div className="font-bold text-5xl text-red-600">projects</div>
      <div>
        <div className="tracking-tight font-bold text-xl">Inside Break</div>
      </div>
      <div>
        <div className="font-bold tracking-tight text-xl">The Odinbook</div>
        <div>
          The Odinbook is a social media app modeled after Facebook. This
          project is my first fully built out MERN-stack application. Post your
          thoughts and photos, edit your profile and send out friend requests to
          other users. The site uses two front-end clients (one for users and
          one for guests) in order to give those who don't want to signup a
          chance to interact with the site as well.
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight text-xl">Where's Waldo</div>
        <div>
          My take on a the classic Where's Waldo game. Compete against others in
          a race to find Waldo, Odlaw and the Wizard on a couple of the famous
          maps. This project was my first full-stack application. The
          leaderboards update after each round and they withstand due to their
          link with the firebase database.
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight text-xl">Shopping Cart</div>
        <div>
          As a member of the professional Ultimate Frisbee team, the Atlanta
          Hustle. I thought it would be fun to combine my passions and recreate
          our team's store. You can scroll through popular tickets and gear to
          see what might be of interest and add them to your cart. This project
          expanded my knowledge on React by introducing me to its router system.
          (Let me know if you can find the easter eggs that I added.)
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight text-xl">
          Survivor Memory Game
        </div>
        <div>
          The Survivor Memory game puts your knowledge of Survivor 44 Cast
          members to the test. In my first major project using React and
          focusing on object-oriented-programming the user must click on each
          cast member without repeating. The trick is that the cast members move
          after each click. Choose your level and test your knowledge!
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight text-xl">Knight Travails</div>
        <div>
          The Knight Travails forges a knight's path from any chess square to
          any other square in as few moves as possible. This project was a test
          of my abilities to use recursive functions.
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight text-xl">Calculator</div>
        <div>
          This is the first project that I was proud enough to host to GitHub
          Pages. Modeled after the calculator that you see on iOS, this project
          laid the foundation for my knowledge of Javascript.
        </div>
      </div>
    </div>
  );
};

export default Projects;
