"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About me",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "My Work",
    href: "/work",
  },
  {
    label: "Contact me",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const renderedNavLinks = navLinks.map((link) => {
    const isActive = pathname === link.href;
    return (
      <div key={link.label} className="hover:underline">
        <Link
          href={link.href}
          className={`${isActive ? "font-bold" : "bg-background"}`}
        >
          {link.label}
        </Link>
      </div>
    );
  });

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
            {renderedNavLinks}
          </li>
        </ul>
      </div>
      <div className="">
        <motion.a
          href="https://drive.google.com/file/d/1CHkP1PPpFTktdsGl4CtD9u4MGiZ87-xQ/view?usp=drive_link"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="text-primary text-lg font-normal border-1 hover:text-secondary border-black bg-background cursor-pointer px-8">
            Resume
            <LiaLongArrowAltDownSolid className="text-lg font-light hover:bg-foreground" />
          </Button>
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
