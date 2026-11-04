"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
 import { navLinks, socialLinks } from "@/data/static";




const Navbar = () => {
  const pathname = usePathname();
  const renderedNavLinks = navLinks.map((link) => {
    const isActive = pathname === link.href;
    return (
      <div key={link.label} className="hover:underline">
        <Link
          href={link.href}              
          className={`${isActive ? "font-bold" : ""}`}
        >
          {link.label}
        </Link>
      </div>
    );
  });

  const renderedSocialLink = socialLinks.map((link) => (
    <a key={link.href} href={link.href} target="_blank">
      <div className="text-3xl lg:text-4xl">{link.icon}</div>
    </a>
  ));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between w-full h-20 px-4 sm:px-12 border-2 drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] bg-white overflow-x-hidden">
        {/* Left - Mobile Menu Icon */}
        <div className="flex items-center sm:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-3xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </Button>
        </div>

        {/* Center - Logo */}
        <div className="flex items-center justify-center">
          <span className="flex items-center gap-1 text-2xl sm:text-3xl font-bold">
           <span className="">Aamir</span>  <span>😎</span>
          </span>
        </div>

        {/* Right - Desktop Nav Links */}
        <div className="hidden sm:flex items-center">
          <ul>
            <li>
              <span className="flex gap-5 sm:gap-3 md:gap-5 sm:text-sm md:text-lg lg:text-xl">
                {renderedNavLinks}
              </span>
            </li>
          </ul>
        </div>

        {/* Social Links - Always visible */}
        <div className="flex items-center gap-5 text-2xl sm:text-3xl">
          {renderedSocialLink}
        </div>
          {/* <div className="px-2">Theme</div> */}
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-4 top-20 z-50 w-max bg-white px-4 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-lg">{renderedNavLinks}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
