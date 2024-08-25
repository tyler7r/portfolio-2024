"use client";

import { Avatar, colors } from "@mui/material";
import { orange, purple, red } from "@mui/material/colors";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Headshot from "../public/portfolio-main.png";

export default function Home() {
  const router = useRouter();
  const [greeting, setGreeting] = useState("Hello");
  const [greetingColor, setGreetingColor] = useState("text-slate-600");

  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const possibleGreetings = [
      "Hello",
      "Hola",
      "Bonjour",
      "Ciao",
      "Olá",
      "G'day",
      "Geia",
      "Zdravo",
      "Privet",
      "Nǐ hǎo",
    ];

    const possibleColors = [
      "text-cyan-500",
      "text-red-600",
      "text-orange-600",
      "text-blue-600",
      "text-yellow-400",
      "text-purple-600",
      "text-green-500",
      "text-pink-600",
      "text-indigo-600",
      "text-slate-600",
    ];

    const randomGreeting = () => {
      const randomNum = Math.floor(Math.random() * 10);
      const random2 = Math.floor(Math.random() * 10);
      setGreeting(possibleGreetings[randomNum]);
      setGreetingColor(possibleColors[random2]);
    };

    interval.current = setInterval(randomGreeting, 5000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, []);

  return (
    <div className="flex gap-4 p-4 px-8 items-center lg:flex-row flex-col justify-center flex-1">
      <Image
        src={Headshot}
        style={{ borderRadius: "50%" }}
        height={300}
        alt="Headshot"
      />
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex items-center justify-center text-center flex-col gap-2">
          <div className={`font-bold text-6xl mb-2 ${greetingColor}`}>
            {greeting}
          </div>
          <div className="font-bold text-xl">About Me</div>
          <div className="text-base">
            I am a developer from Atlanta, Georgia who is passionate about
            building sites with simple solutions and in-depth, user-friendly UI.
            This is the place where I wanted to share some of my favorite
            projects. Many done through the Odin Project curriculum but some
            engineered completely by myself! My favorite tools right now
            include: NextJS, Supabase, Vercel, React, Typescript, Material UI
            and Tailwind. I also work with HTML, CSS, Javascript, Node, Express
            and MongoDB. My work demonstrates my proficiency with these skills
            and highlights some of my passions outside of development as well.
            Thanks for checking it out!
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <div
            onClick={() => void router.push("/projects")}
            className="xs:w-52 xs:h-52 h-44 w-44 xl:h-52 xl:w-52"
          >
            <Avatar
              sx={{
                bgcolor: red[500],
                height: "100%",
                width: "100%",
                borderColor: red[600],
                borderWidth: 5,
                fontWeight: "bold",
                fontSize: "24px",
                cursor: "pointer",
                transitionProperty: "background-color",
                transitionDuration: "300ms",
                "&:hover": {
                  backgroundColor: colors.grey[50],
                  color: colors.red[600],
                },
              }}
            >
              PROJECTS
            </Avatar>
          </div>
          <div
            onClick={() => void router.push("/resume")}
            className="xs:w-52 xs:h-52 h-44 w-44 xl:h-52 xl:w-52"
          >
            <Avatar
              sx={{
                bgcolor: orange[500],
                height: "100%",
                width: "100%",
                borderColor: orange[600],
                borderWidth: 5,
                fontWeight: "bold",
                fontSize: "24px",
                cursor: "pointer",
                transitionProperty: "background-color",
                transitionDuration: "300ms",
                "&:hover": {
                  backgroundColor: colors.grey[50],
                  color: colors.orange[600],
                },
              }}
            >
              RESUME
            </Avatar>
          </div>
          <div
            onClick={() => void router.push("/contact")}
            className="xs:w-52 xs:h-52 h-44 w-44 xl:h-52 xl:w-52"
          >
            <Avatar
              sx={{
                bgcolor: purple[500],
                height: "100%",
                width: "100%",
                borderColor: purple[600],
                borderWidth: 5,
                fontWeight: "bold",
                fontSize: "24px",
                cursor: "pointer",
                transitionProperty: "background-color",
                transitionDuration: "300ms",
                "&:hover": {
                  backgroundColor: colors.grey[50],
                  color: colors.purple[600],
                },
              }}
            >
              CONTACT
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
