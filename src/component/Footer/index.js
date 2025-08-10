"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  // FiYoutube,
  // FiGithub,
  // FiLinkedin,
  // FiInstagram,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";

const footerItems_1 = [
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
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Resume",
    path: "/resume",
  },
];

const footerItems_2 = [
  { label: "GitHub", to: "https://github.com/aamirhashmi98" },
  { label: "Linkedin", to: "https://www.linkedin.com/in/aamirhashmi98" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const renderedFooterItems_1 = footerItems_1.map((item) => (
    <div key={item.label}>
      <Link href={item.path}>
        <Button variant="link" className="text-secondary cursor-pointer">
          {item.label}
        </Button>
      </Link>
    </div>
  ));

  const renderedFooterItems_2 = footerItems_2.map((item) => (
    <div key={item.label} className="text-sm">
      <a href={item.to} target={item.to !== "/contact" ? "_blank" : "_self"}>
        <Button variant="link" className="text-secondary cursor-pointer">
          {item.label}
        </Button>
      </a>
    </div>
  ));
  return (
    <div className="w-full relative h-55 bg-gray-900 text-secondary px-48">
      <div className="pt-12">
        <div className="flex justify-center gap-5">{renderedFooterItems_1}</div>
      </div>
      {/* <div className="flex justify-center gap-6 mt-4">
        <motion.a
          href="https://github.com/aamirhashmi98"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant={"link"} className="bg-background cursor-pointer">
            GitHub
          </Button>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/aamirhashmi98"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={"link"}
            className="bg-background text-blue-600 cursor-pointer"
          >
            Linkedin
          </Button>
        </motion.a>
        <motion.a
          href="https://www.youtube.com/@aamirhashmi113"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={"link"}
            className="bg-red-500 text-secondary cursor-pointer"
          >
            YouTube
          </Button>
        </motion.a>
      </div> */}
      <div className="flex justify-center mt-4">{renderedFooterItems_2}</div>
      <div className="mt-4">
        <a
          href="#email:aamirhashmi113@gmail.com"
          className="flex items-center justify-center gap-2"
        >
          <FiMail className="" />
          <span className="font-light text-sm hover:underline">
            aamirhashmi113@gmail.com
          </span>
        </a>
      </div>
      <span className="flex justify-center mt-4">
        © 2025 Aamir Hashmi, All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
