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
const About = () => {
  const aboutMe = {
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
  };

  const profile = {
    experience: {
      title: "Experience",
      company: ["Magic EdTech", "Elymer"],
      designation: ["Frontend Developer", "Junior Software Engineer"],
      description: [
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nisi non quis, minus velit in? Aut at dolorem voluptatum excepturi quas nulla architecto mollitia aperiam obcaecati possimus quod magnam itaque harum modi, voluptates, ipsa ex ducimus aspernatur. Incidunt dolorem voluptatum itaque. Consequatur, at perspiciatis a magnam cum incidunt officia dolores.`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nisi non quis, minus velit in? Aut at dolorem voluptatum excepturi quas nulla architecto mollitia aperiam obcaecati possimus quod magnam itaque harum modi, voluptates, ipsa ex ducimus aspernatur. Incidunt dolorem voluptatum itaque. Consequatur, at perspiciatis a magnam cum incidunt officia dolores.`,
      ],
      duration: ["Jun, 2022 - Dec,2024", "Apr,2021 - Jun,2022"],
    },
    education: {
      title: "Education",
      college: "GJUS&T",
      discipline: "B.Tech",
      course: `Electronics & Communication Engineering`,
      duration: "Aug,2016 - Aug,2020",
    },
  };

  return (
    <>
      <div className="flex p-2 m-4">
        <div className="flex w-100 h-100 bg-gray-200 p-2 m-2 items-center justify-center rounded-full">
          image
        </div>
        <div className="w-2/3 h-[400px] m-4 p-4">
          <h1 className="text-4xl font-bold p-4 animate-slideDown">
            <span className="highlight p-2">{aboutMe.title}</span>{" "}
          </h1>
          <h3 className="text-2xl font-semibold text-shadow-md p-4">
            {aboutMe.name} - {aboutMe.designation}
          </h3>
          <p className="flex justify-center text-lg text-gray-500 px-4">
            {aboutMe.description}
          </p>
          <div className="flex gap-5 justify-center mt-8 animate-slideDown">
            <motion.a
              href="https://github.com/aamirhashmi98"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-5xl">
                <IoLogoGithub />
              </span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aamirhashmi98"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-5xl">
                <IoLogoLinkedin />
              </span>
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@aamirhashmi113"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-5xl">
                <IoLogoYoutube />
              </span>
            </motion.a>
            <motion.a
              href="#instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-5xl">
                <IoLogoInstagram />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="text-2xl mx-48 mb-8 highlight">
          <span>{profile.experience.title}</span>
        </h4>
        <div className="grid grid-cols-2 gap-4 justify-between mx-48">
          <Card className="w-full">
            <CardHeader className="">
              <CardTitle className="text-2xl text-shadow-md">
                {profile.experience.company[0]}
              </CardTitle>
              <CardDescription className="text-xl text-shadow-md">
                {profile.experience.designation[0]}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-shadow-md">
              <p>{profile.experience.description[0]}</p>
            </CardContent>
            <CardFooter className="text-shadow-md">
              <p>{profile.experience.duration[0]}</p>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader className="">
              <CardTitle className="text-2xl text-shadow-md">
                {profile.experience.company[1]}
              </CardTitle>
              <CardDescription className="text-xl text-shadow-md">
                {profile.experience.designation[1]}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-shadow-md">
              <p>{profile.experience.description[1]}</p>
            </CardContent>
            <CardFooter className="text-shadow-md">
              <p>{profile.experience.duration[1]}</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="">
        <h4 className="text-2xl mx-48 mt-8 highlight">
          {profile.education.title}
        </h4>
        <div className="flex justify-between text-lg mx-48 mt-4">
          <h5 className="text-gray-500">{profile.education.college}</h5>
          <h5 className="text-gray-500">{profile.education.discipline}</h5>
          <h5 className="text-gray-500">{profile.education.course}</h5>
          <h5 className="text-gray-500 mb-12">{profile.education.duration}</h5>
        </div>
      </div>
    </>
  );
};

export default About;
