"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";


const text =
  "I am an experienced Front-End Developer with over 2 years of expertise, specializing in JavaScript and its ecosystem, including React and frameworks like Next.js. I am passionate about building modern, user-friendly, and efficient web applications, while staying up to date with the latest technologies and industry trends. Recently, I have been exploring and leveraging AI tools like OpenAI to enhance productivity and bring innovative solutions to my development process.";

const TypewriterWithBold = ({
  text,
  boldWords,
  speed = 50,
  storageKey = "hasVisited",
}) => {
  const [index, setIndex] = useState(0);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem(storageKey);

    if (visited) {
      setSkipAnimation(true);
      setIndex(text.length);
    } else {
      setSkipAnimation(false);
      sessionStorage.setItem(storageKey, "true");
    }
  }, [text, storageKey]);

  useEffect(() => {
    if (!skipAnimation && index < text.length) {
      const timeout = setTimeout(() => setIndex(index + 1), speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, skipAnimation]);

  const renderWithBold = (displayed) => {
    const parts = displayed.split(new RegExp(`(${boldWords.join("|")})`, "gi"));
    return parts.map((part, i) =>
      boldWords.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
        <strong key={i}>{part}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div className="px-4 sm:px-8 md:px-12">
      {renderWithBold(text.slice(0, index))}
      <span className="cursor">|</span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
      {/* Headings */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-slideDown font-light">
          Welcome to my{" "}
          <span className="highlight font-semibold">Portfolio</span>
        </h1>

        <h2 className="font-light text-2xl sm:text-3xl md:text-4xl mt-4 sm:mt-6">
          Hi, I am <span className="font-semibold">Aamir Hashmi</span>
        </h2>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 sm:mt-6">
          Frontend Developer
        </h3>
      </div>

      {/* Typewriter Text */}
      <div className="flex justify-center max-w-4xl w-full mt-6 sm:mt-8 text-base sm:text-lg md:text-xl min-h-[150px]">
        <TypewriterWithBold
          text={text}
          boldWords={[
            "experienced",
            "2",
            "years",
            "JavaScript",
            "React",
            "Next.js",
            "OpenAI",
          ]}
          speed={40}
        />
      </div>
       <div className="mt-16">
      <Link
        href="https://drive.google.com/file/d/1CHkP1PPpFTktdsGl4CtD9u4MGiZ87-xQ/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer" // SECURITY best practice
      >
        <span className="inline-flex items-center text-sm text-white bg-black md:text-lg px-5 py-3 rounded-sm cursor-pointer transition-transform duration-300 hover:scale-105">
          Download Resume <FiDownload className="md:text-xl ml-2" />
        </span>
      </Link>
    </div>
    </section>
  );
};

export default HeroSection;
