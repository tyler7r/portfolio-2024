"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Divider, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMobileContext } from "../contexts/mobile";

const Header = () => {
  const { isMobile } = useMobileContext();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div
      className={`w-full justify-between p-2 items-center flex-col sm:flex-row`}
    >
      {isMobile ? (
        <div className="flex flex-col">
          <div className="flex w-full justify-between">
            <div
              onClick={() => void router.push("/")}
              className="text-2xl font-bold cursor-pointer"
            >
              TYLER RANDALL
            </div>
            <IconButton size="small" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon />
            </IconButton>
          </div>
          {isMenuOpen && (
            <div className="flex gap-2 w-full justify-end items-center font-bold text-slate-700">
              <Link href="/">
                <div className="hover:text-black transition ease-in delay-100">
                  home
                </div>
              </Link>
              <Divider flexItem orientation="vertical" />
              <Link href="/projects">
                <div className="hover:text-red-600 transition ease-in delay-100">
                  projects
                </div>
              </Link>
              <Divider flexItem orientation="vertical" />
              <Link href="/resume">
                <div className="hover:text-orange-600 transition ease-in delay-100">
                  resume
                </div>
              </Link>
              <Divider flexItem orientation="vertical" />
              <Link href="/contact">
                <div className="hover:text-purple-600 transition ease-in delay-100">
                  contact
                </div>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div
            onClick={() => void router.push("/")}
            className="text-2xl sm:text-4xl font-bold flex-1 cursor-pointer"
          >
            TYLER RANDALL
          </div>
          <div className="flex gap-2 sm:text-lg flex-wrap font-bold text-slate-700">
            <Link href="/">
              <div className="hover:text-black transition ease-in delay-100">
                home
              </div>
            </Link>
            <Divider flexItem orientation="vertical" />
            <Link href="/projects">
              <div className="hover:text-red-600 transition ease-in delay-100">
                projects
              </div>
            </Link>
            <Divider flexItem orientation="vertical" />
            <Link href="/resume">
              <div className="hover:text-orange-600 transition ease-in delay-100">
                resume
              </div>
            </Link>
            <Divider flexItem orientation="vertical" />
            <Link href="/contact">
              <div className="hover:text-purple-600 transition ease-in delay-100">
                contact
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
