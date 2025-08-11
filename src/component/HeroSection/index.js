"use client";

import { useState, useEffect } from "react";

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
      setIndex(text.length); // Show full text immediately
    } else {
      setSkipAnimation(false);
      sessionStorage.setItem(storageKey, "true");
    }
  }, [text, storageKey]);

  useEffect(() => {
    if (!skipAnimation && index < text.length) {
      // console.log(text.length);
      const timeout = setTimeout(() => setIndex(index + 1), speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, skipAnimation]);

  const renderWithBold = (displayed) => {
    const parts = displayed.split(new RegExp(`(${boldWords.join("|")})`, "gi"));
    console.log(parts);
    return parts.map((part, i) =>
      boldWords.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
        <strong key={i}>{part}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div>
      {renderWithBold(text.slice(0, index))}
      <span className="cursor">_</span>
    </div>
  );
};

const HeroSection = () => {
  const text =
    "I am an experienced Front-End Developer with over 2 years of expertise, specializing in JavaScript and its ecosystem, including React and frameworks like Next.js. I am passionate about building modern, user-friendly, and efficient web applications, while staying up to date with the latest technologies and industry trends. Recently, I have been exploring and leveraging AI tools like OpenAI to enhance productivity and bring innovative solutions to my development process.";

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center ">
        <div className="text-center">
          <h1 className="font-light text-6xl animate-slideDown">
            Welcome to my <span className="highlight">Portfolio</span>
          </h1>
          <h2 className="font-light text-5xl mt-8">
            Hi, I am <span className="font-semibold"> Aamir Hashmi</span>
          </h2>
          <h3 className="text-3xl font-semibold mt-8">Frontend Developer</h3>
        </div>
        <div className="flex justify-center max-w-4xl mb-4 mt-4 text-lg text-center min-h-[200px]">
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
            speed={60}
            className="mt-3 px-24"
          ></TypewriterWithBold>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
