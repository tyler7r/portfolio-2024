"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider, IconButton } from "@mui/material";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col">
      <Divider style={{ width: "100%" }} />
      <div className="flex gap-2 items-center justify-center p-4 w-full border-solid border-2">
        <IconButton
          color="inherit"
          size="small"
          onClick={() =>
            void router.push("https://github.com/tyler7r?tab=repositories")
          }
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          size="small"
          color="inherit"
          onClick={() =>
            void router.push("www.linkedin.com/in/tyler-randall-496828289")
          }
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          size="small"
          color="inherit"
          onClick={() =>
            void router.push("https://www.instagram.com/tyler7randall/")
          }
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
