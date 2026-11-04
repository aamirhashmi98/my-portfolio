"use client";
import { Button } from "@/components/ui/button";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const footerItems_1 = [
  { label: "Home", path: "/" },
  { label: "About me", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "My work", path: "/work" },
  { label: "Resume", path: "https://drive.google.com/file/d/1CHkP1PPpFTktdsGl4CtD9u4MGiZ87-xQ/view?usp=drive_link" },
];

const footerItems_2 = [
  { label: "Github", to: "https://github.com/aamirhashmi98" },
  { label: "Linkedin", to: "https://www.linkedin.com/in/aamirhashmi98" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const renderedFooterItems_1 = footerItems_1.map((item) => (
    <Link key={item.label} href={item.path}>
      <Button
        variant="link"
        className="text-indigo-100 cursor-pointer text-sm sm:text-base hover:text-cyan-300"
      >
        {item.label}
      </Button>
    </Link>
  ));

  const renderedFooterItems_2 = footerItems_2.map((item) => (
    <a
      key={item.label}
      href={item.to}
      target={item.to !== "/contact" ? "_blank" : "_self"}
      rel={item.to !== "/contact" ? "noopener noreferrer" : undefined}
    >
      <Button
        variant="link"
        className="text-indigo-100 cursor-pointer text-sm sm:text-base hover:text-cyan-300"
      >
        {item.label}
      </Button>
    </a>
  ));

  return (
    <footer className="w-full bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-indigo-100 px-4 sm:px-8 md:px-16 py-8 overflow-x-hidden">
      {/* Nav Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
        {renderedFooterItems_1}
      </div>

      {/* Social Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 mt-4">
        {renderedFooterItems_2}
      </div>

      {/* Email */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <FiMail />
        <span className="text-sm hover:underline">
          aamirhashmi113@gmail.com
        </span>
      </div>

      {/* Copyright */}
      <span className="flex justify-center text-xs sm:text-sm mt-4">
        © 2025 Aamir Hashmi, All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
