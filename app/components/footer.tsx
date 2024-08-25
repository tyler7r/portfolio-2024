"use client";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col">
      <Divider style={{ width: "100%" }} />
      <div className="flex gap-2 items-center justify-center p-2 w-full">
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
            void router.push(
              "https://www.linkedin.com/in/tyler-randall-496828289"
            )
          }
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          size="small"
          color="inherit"
          href="mailto:tyler7r@gmail.com"
        >
          <EmailIcon fontSize="large" />
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
