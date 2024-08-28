"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

type ImageContainerProps = {
  image: StaticImageData;
  altTitle: string;
  link: string;
  ghLink: string;
};

const ImageContainer = ({
  image,
  altTitle,
  link,
  ghLink,
}: ImageContainerProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="w-full flex items-center justify-center relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Image alt={altTitle} src={image} />
      {open && (
        <div className="bg-neutral-100 border-4 w-full h-full top-0 left-0 absolute opacity-90 flex items-center justify-center gap-8">
          <Link href={ghLink} target="_blank">
            <GitHubIcon
              fontSize="large"
              htmlColor="black"
              style={{ height: 100, width: 100 }}
            />
          </Link>
          <Link href={link} target="_blank">
            <OpenInNewIcon
              fontSize="large"
              htmlColor="black"
              style={{ height: 100, width: 100 }}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
