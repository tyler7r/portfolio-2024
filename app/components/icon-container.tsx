"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

type IconContainerProps = {
  link: string;
  ghLink: string;
};

const IconContainer = ({ link, ghLink }: IconContainerProps) => {
  return (
    <div className="flex items-center gap-2">
      <Link href={ghLink} target="_blank">
        <GitHubIcon htmlColor="black" />
      </Link>
      <Link href={link} target="_blank">
        <OpenInNewIcon htmlColor="black" />
      </Link>
    </div>
  );
};

export default IconContainer;
