"use client";
import { Button } from "@/components/ui/button";
import {
  FiYoutube,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";

const footerItems = [
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Resume",
    path: "/resume",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Footer = () => {
  const renderedFooterItems = footerItems.map((item) => (
    <div key={item.label}>
      <Link href={item.path}>
        <Button variant="link" className="text-secondary cursor-pointer">
          {item.label}
        </Button>
      </Link>
    </div>
  ));
  return (
    <div className="w-full h-55 bg-gray-900 text-secondary px-48">
      <div className="pt-12">
        <div className="flex justify-center gap-5">{renderedFooterItems}</div>
      </div>
      <div className="flex justify-center text-2xl gap-5 cursor-pointer mt-6">
        <a href="https://github.com/aamirhashmi98" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/aamirhashmi98" target="_blank">
          <FiLinkedin />
        </a>
        <a href="https://www.youtube.com/@aamirhashmi113" target="_blank">
          <FiYoutube />
        </a>
        <a href="#instagram">
          <FiInstagram />
        </a>
      </div>

      <a
        href="#email:aamirhashmi113@gmail.com"
        className="flex gap-2 justify-center items-center text-sm mt-6"
      >
        <FiMail />
        aamirhashmi113@gmail.com
      </a>
      <div className="flex justify-center font-normal text-sm mt-4">
        © 2025 Aamir Hashmi, All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
