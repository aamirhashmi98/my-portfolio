"use client";

import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "motion/react";

const profile = {
  about: {
    title: "About me",
    name: "Aamir Hashmi",
    designation: "Frontend Developer",
    description: `Hi, I am a web developer passionate about
            creating modern, responsive, and interactive user interfaces. With
            hands-on experience in React, Next.js, TypeScript, Tailwind CSS, and
            modern animation libraries like Framer Motion and Typewriter, I
            build clean, scalable, and visually appealing web projects. I am
            constantly learning new techniques, exploring design systems, and
            working on personal and collaborative projects. Currently, I am
            building my own portfolio and open to exciting opportunities and
            collaborations!`,
  },
  socialLinks: [
    { icon: <IoLogoGithub />, href: "https://github.com/aamirhashmi98" },
    {
      icon: <IoLogoLinkedin />,
      href: "https://www.linkedin.com/in/aamirhashmi98",
    },
    {
      icon: <IoLogoYoutube />,
      href: "https://www.youtube.com/@aamirhashmi113",
    },
    { icon: <IoLogoInstagram />, href: "instagram" },
  ],
  experience: {
    title: "Experience",
    list: [
      {
        company: "Magic EdTech",
        designation: "Frontend Developer",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nisi non quis, minus velit in? Aut at dolorem voluptatum excepturi quas nulla architecto mollitia aperiam obcaecati possimus quod magnam itaque harum modi, voluptates, ipsa ex ducimus aspernatur. Incidunt dolorem voluptatum itaque. Consequatur, at perspiciatis a magnam cum incidunt officia dolores.`,
        duration: "Jun, 2022 - Dec,2024",
      },
      {
        company: "Elymer",
        designation: "Junior Software Engineer",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nisi non quis, minus velit in? Aut at dolorem voluptatum excepturi quas nulla architecto mollitia aperiam obcaecati possimus quod magnam itaque harum modi, voluptates, ipsa ex ducimus aspernatur. Incidunt dolorem voluptatum itaque. Consequatur, at perspiciatis a magnam cum incidunt officia dolores.`,
        duration: "Apr,2021 - Jun,2022",
      },
    ],
  },
  education: {
    title: "Education",
    college: "GJUS&T",
    discipline: "B.Tech",
    course: `Electronics & Communication Engineering`,
    duration: "Aug,2016 - Aug,2020",
  },
};

const About = () => {
  const { about, socialLinks, education, experience } = profile;
  return (
    <>
      <div className="flex p-2 m-4">
        <div className="flex w-100 h-100 bg-gray-200 p-2 m-2 items-center justify-center rounded-full">
          image
        </div>
        <div className="w-2/3 h-[400px] m-4 p-4">
          <h1 className="text-4xl font-bold p-4 animate-slideDown">
            <span className="highlight p-2">{about.title}</span>
          </h1>
          <h3 className="text-2xl font-semibold text-shadow-md p-4">
            {about.name} - {about.designation}
          </h3>
          <p className="flex justify-center text-lg text-gray-500 px-4">
            {about.description}
          </p>
          <div className="flex gap-5 justify-center mt-8 animate-slideDown">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-5xl">{link.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="text-2xl mx-48 mb-8 highlight">
          <span>{experience.title}</span>
        </h4>
        <div className="grid grid-cols-2 gap-4 justify-between mx-48">
          {Object.entries(experience.list).map(([key, value]) => (
            <Card
              key={key}
              className="w-full transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <CardHeader className="">
                <CardTitle className="text-2xl text-shadow-md">
                  {value.company}
                </CardTitle>
                <CardDescription className="text-xl text-shadow-md">
                  {value.designation}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-shadow-md">
                <p>{value.description}</p>
              </CardContent>
              <CardFooter className="text-shadow-md">
                <p>{value.duration}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="">
        <h4 className="text-2xl mx-48 mt-8 highlight">{education.title}</h4>
        <div className="flex justify-between text-lg mx-48 mt-4">
          {Object.entries(education)
            .filter(([key]) => key !== "title")
            .map(([key, value]) => (
              <h5 key={key} className="text-gray-500 mb-12">
                {value}
              </h5>
            ))}
        </div>
      </div>
    </>
  );
};

export default About;
