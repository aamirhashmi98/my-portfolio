"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import myImage from "../../../assets/profile-image-croped.png";

const profile = {
  about: {
    title: "About me",
    name: "Aamir Hashmi",
    designation: "Frontend Developer",
    description: `Hi, I am a web developer passionate about creating modern, responsive, and interactive user interfaces. With hands-on experience in React, Next.js, TypeScript, Tailwind CSS, and modern animation libraries like Framer Motion and Typewriter, I build clean, scalable, and visually appealing web projects. I am constantly learning new techniques, exploring design systems, and working on personal and collaborative projects. Currently, I am building my own portfolio and open to exciting opportunities and collaborations!`,
  },
  experience: {
    title: "Experience",
    list: [
      {
        company: "Magic EdTech",
        designation: "Frontend Developer",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nisi non quis, minus velit in? Aut at dolorem voluptatum excepturi quas nulla architecto mollitia aperiam obcaecati possimus.`,
        duration: "Jun, 2022 - Dec, 2024",
      },
      {
        company: "Elymer",
        designation: "Junior Software Engineer",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nisi non quis, minus velit in? Aut at dolorem voluptatum excepturi quas nulla architecto mollitia aperiam obcaecati possimus.`,
        duration: "Apr, 2021 - Jun, 2022",
      },
    ],
  },
  education: {
    title: "Education",
    college: "GJUS&T",
    discipline: "B.Tech",
    course: "Electronics & Communication Engineering",
    duration: "Aug, 2016 - Aug, 2020",
  },
};

const About = () => {
  const { about, education, experience } = profile;

  return (
    <section
      id="about-section"
      className="max-w-5xl mx-auto px-4 py-6 sm:px-8 md:px-12 lg:px-20 overflow-x-hidden"
    >
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 items-center sm:items-start md:mt-8 lg:mt-12">
        {/* Profile Image */}
        <div className="flex justify-center sm:w-1/3">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.04}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <Image
              src={myImage}
              alt="Aamir Hashmi profile image"
              className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-66 lg:h-66 rounded-full object-cover mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
              priority
            />
          </Tilt>
        </div>

        {/* About Text */}
        <div className="sm:w-2/3 w-full space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
            {about.title}
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-center sm:text-left font-semibold">
            {about.name} - {about.designation}
          </h3>
          <p className="text-center sm:text-left text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
            {about.description}
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-10 sm:mt-14">
        <h4 className="text-2xl sm:text-3xl font-semibold mb-6">
          {experience.title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.list.map((item, idx) => (
            <Card key={idx} className="shadow-2xl md:transition-transform md:duration-300 md:hover:scale-105 w-full">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl  text-shadow-md">{item.company}</CardTitle>
                <CardDescription className="text-base text-gray-500  text-shadow-md">
                  {item.designation}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-[1rem] text-gray-600">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 text-shadow-s">{item.duration}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-10 sm:mt-14">
        <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
          {education.title}
        </h4>
        <div className="md:flex md:gap-16 space-y-1 text-gray-700 text-sm sm:text-base md:text-lg">
          <p className="font-medium">{education.college}</p>
          <p>{education.discipline}</p>
          <p>{education.course}</p>
          <p className="text-gray-500">{education.duration}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
