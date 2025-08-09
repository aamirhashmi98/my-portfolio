"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
// import { motion } from "motion/react";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About me",
    path: "/about",
  },
  {
    label: "Skills",
    path: "/skills",
  },
  {
    label: "My Work",
    path: "/work",
  },
  {
    label: "Contact me",
    path: "/contact",
  },
];

const Navbar = () => {
  const renderedNavItems = navItems.map((item) => (
    <div key={item.label} className="hover:underline">
      <Link href={item.path}>{item.label}</Link>
    </div>
  ));

  return (
    <nav className="w-full h-21 bg-background border-2 flex justify-between items-center px-10 py-4">
      <div className="flex">
        <span className="text-3xl font-normal bg-background border-none shadow-none hover:bg-background cursor-pointer text-primary px-6 py-2">
          Aamir✨
        </span>
      </div>
      <div className="">
        <ul className="">
          <li className="text-lg text-primary flex gap-10 cursor-pointer ">
            {renderedNavItems}
          </li>
        </ul>
      </div>
      <div className="">
        <a
          href="https://drive.google.com/file/d/1CHkP1PPpFTktdsGl4CtD9u4MGiZ87-xQ/view?usp=drive_link"
          target="_blank"
        >
          <Button className="text-primary text-lg font-normal border-1 hover:bg-gray-100 border-black bg-background cursor-pointer px-8">
            Resume
            <LiaLongArrowAltDownSolid className="text-lg font-light hover:bg-foreground" />
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
