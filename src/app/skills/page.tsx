import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaReact } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBulma } from "react-icons/si";
import { SiReactbootstrap } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiAtlassian } from "react-icons/si";

import { FaHtml5 } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Next.js",
    icon: <IoTriangleSharp className="text-4xl" />,
    description:
      "Next.js is a React framework for building fast, SEO-friendly, and scalable web applications with features like server-side rendering and static site generation.",
    ratings: "⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "React",
    icon: <FaReact className="text-4xl" />,
    description:
      "React is a powerful JavaScript library for building fast, interactive, and scalable user interfaces for web and mobile applications.",
    ratings: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Redux",
    icon: <SiRedux className="text-4xl" />,
    description:
      "A powerful state management library that helps manage and centralize app state, ensuring predictable behavior across complex JavaScript or React projects.",
    ratings: "⭐⭐⭐⭐",
  },
  {
    id: 4,
    title: "TypeScript",
    icon: <SiTypescript className="text-4xl" />,
    description:
      "TypeScript is a strongly typed superset of JavaScript that adds static typing, enhancing code quality, maintainability, and developer productivity.",

    ratings: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    title: "JavaScript",
    icon: <SiJavascript className="text-4xl" />,
    description:
      "A dynamic scripting language that enables interactive, user-friendly websites and applications, widely used for both frontend and backend development.",
    ratings: "⭐⭐⭐⭐",
  },
  {
    id: 6,
    title: "Node.js",
    icon: <FaNodeJs className="text-4xl" />,
    description:
      "Node.js is a JavaScript runtime that allows server-side programming, enabling fast, scalable network applications with non-blocking, event-driven architecture.",
    ratings: "⭐⭐",
  },
  {
    id: 7,
    title: "Express.js",
    icon: <SiExpress className="text-4xl" />,
    description:
      "Express.js is a fast, minimalist Node.js framework that simplifies building scalable, robust web applications and APIs with flexible routing and middleware support.",
    ratings: "⭐⭐",
  },
  {
    id: 8,
    title: "MongoDB",
    icon: <SiMongodb className="text-4xl" />,
    description:
      "MongoDB is a flexible, document-oriented NoSQL database designed for scalability and high performance, making it ideal for modern, data-driven applications.",
    ratings: "⭐⭐",
  },
  {
    id: 15,
    title: "GitHub",
    icon: <SiGithub className="text-4xl" />,
    description:
      "GitHub is a leading platform for version control and collaboration, enabling developers to host, review, and manage code projects efficiently using Git.",
    ratings: "⭐⭐⭐⭐",
  },
  {
    id: 16,
    title: "Jira Tool",
    icon: <SiAtlassian className="text-4xl" />,
    description:
      "A popular tool used by teams to organize tasks, track progress, and collaborate seamlessly during software development and project management.",
    ratings: "⭐⭐⭐",
  },
  {
    id: 9,
    title: "Tailwind css",
    icon: <SiTailwindcss className="text-4xl" />,
    description:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with highly customizable, low-level styling classes for building modern responsive designs.",
    ratings: "⭐⭐⭐⭐",
  },
  {
    id: 10,
    title: "Bulma css",
    icon: <SiBulma className="text-4xl" />,
    description:
      "A lightweight CSS framework leveraging Flexbox to create responsive, mobile-first websites with easy-to-use classes and a clean, minimal design.",
    ratings: "⭐⭐⭐",
  },
  {
    id: 11,
    title: "React Bootstrap",
    icon: <SiReactbootstrap className="text-4xl" />,
    description: `React Bootstrap is a popular UI library that rebuilds Bootstrap components as React components, enabling seamless, responsive design with React’s declarative style.`,
    ratings: "⭐⭐⭐⭐",
  },

  {
    id: 13,
    title: "HTML",
    icon: <FaHtml5 className="text-4xl" />,
    description:
      "HTML5 is the latest version of the web’s core markup language, providing new semantic elements, multimedia support, and enhanced capabilities for modern web development.",
    ratings: "⭐⭐⭐⭐",
  },
  {
    id: 12,
    title: "CSS 3",
    icon: <SiCss3 className="text-4xl" />,
    description:
      "CSS3 is the latest evolution of Cascading Style Sheets, introducing advanced styling features like animations, transitions, flexbox, grid, and responsive design capabilities.",
    ratings: "⭐⭐⭐⭐",
  },
];

const SkillsPage = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-8 mx-16 my-24">
        {cards.map((card) => (
          <Card key={card.id} className="w-full bg-gray-100">
            <CardHeader className="text-center">
              <span className="flex justify-center">{card.icon}</span>
              <CardTitle className="text-lg text-shadow-md">
                {card.title}
              </CardTitle>
              <CardContent className=" text-gray-500 text-sm m-2 p-2">
                {card.description}
              </CardContent>
              <CardFooter className="flex justify-center">
                {card.ratings}
              </CardFooter>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};

export default SkillsPage;
