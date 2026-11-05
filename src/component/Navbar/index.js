"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
 import { navLinks, socialLinks } from "@/data/static";




const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const nextTheme = savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : preferredTheme;

    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };
  const renderedNavLinks = navLinks.map((link) => {
    const isActive =
      pathname === link.href ||
      (link.href !== "/" && pathname.startsWith(`${link.href}/`));
    return (
      <div key={link.label} className="transition-colors hover:text-indigo-600">
        <Link
          href={link.href}              
          onClick={() => setIsOpen(false)}
          className={`${isActive ? "font-bold text-indigo-600" : ""}`}
        >
          {link.label}
        </Link>
      </div>
    );
  });

  const renderedSocialLink = socialLinks.map((link) => (
    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
      <div className="text-3xl lg:text-4xl">{link.icon}</div>
    </a>
  ));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between w-full h-18 px-4 sm:px-12 border-b border-indigo-100 bg-white/80 shadow-sm backdrop-blur-md overflow-x-hidden dark:border-slate-700 dark:bg-slate-950/85">
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
          <span className="flex items-center gap-1 text-2xl sm:text-3xl font-bold text-indigo-950 dark:text-indigo-100">
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
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Enable light mode" : "Enable dark mode"}
            aria-pressed={theme === "dark"}
            className="rounded-full text-indigo-950 hover:bg-indigo-100 hover:cursor-pointer hover:text-indigo-700 dark:text-indigo-100 dark:hover:bg-slate-800 dark:hover:text-cyan-300"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </Button>
          {renderedSocialLink}
        </div>
          {/* <div className="px-2">Theme</div> */}
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-4 top-20 z-50 w-max rounded-b-xl border border-indigo-100 bg-white/95 px-4 py-4 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-950/95 sm:hidden">
          <ul className="flex flex-col gap-4 text-lg">{renderedNavLinks}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
