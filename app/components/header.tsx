"use client";

import { Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between p-2 items-center">
      <div onClick={() => void router.push("/")} className="text-4xl font-bold">
        TYLER RANDALL
      </div>
      <div className="flex gap-2 text-lg">
        <Link href="/">home</Link>
        <Divider flexItem orientation="vertical" />
        <Link href="/projects">projects</Link>
        <Divider flexItem orientation="vertical" />
        <Link href="/resume">resume</Link>
        <Divider flexItem orientation="vertical" />
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Header;
