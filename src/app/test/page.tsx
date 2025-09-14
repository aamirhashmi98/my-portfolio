import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { IoTriangleSharp } from "react-icons/io5";
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBulma,
  SiReactbootstrap,
  SiCss3,
  SiGithub,
  SiAtlassian,
  SiMui,
  SiC,
  SiPython,
  SiPostman,
  SiNetlify,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import Link from "next/link";

const skills = [
  {
    title: "Frontend",
    id: "sdog",
    items: [
      {
        id: "ioegjr",
        name: "HTML",
        icon: <FaHtml5 className="text-2xl" />,
        href: "",
        description:
          "HTML5 is the latest version of the web’s core markup language, providing new semantic elements, multimedia support, and enhanced capabilities for modern web development.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "eoijg",
        name: "CSS 3",
        href: "",
        icon: <SiCss3 className="text-2xl" />,
        description:
          "CSS3 is the latest evolution of Cascading Style Sheets, introducing advanced styling features like animations, transitions, flexbox, grid, and responsive design capabilities.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "sinvkx",
        name: "JavaScript",
        icon: <SiJavascript className="text-2xl" />,
        href: "",
        description:
          "A dynamic scripting language that enables interactive, user-friendly websites and applications, widely used for both frontend and backend development.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "asinnv",
        name: "React",
        icon: <FaReact className="text-2xl" />,
        href: "",
        description:
          "React is a powerful JavaScript library for building fast, interactive, and scalable user interfaces for web and mobile applications.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "ognoeig",
        name: "Redux",
        icon: <SiRedux className="text-2xl" />,
        href: "",
        description:
          "A powerful state management library that helps manage and centralize app state, ensuring predictable behavior across complex JavaScript or React projects.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "osdojog",
        name: "Next.js",
        icon: <IoTriangleSharp className="text-2xl" />,
        href: "",
        description:
          "Next.js is a React framework for building fast, SEO-friendly, and scalable web applications with features like server-side rendering and static site generation.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "dopgj",
        name: "Tailwindcss",
        icon: <SiTailwindcss className="text-2xl" />,
        href: "",
        description:
          "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with highly customizable, low-level styling classes for building modern responsive designs.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "diggn",
        name: "Bootstrap",
        icon: <SiReactbootstrap className="text-2xl" />,
        href: "",
        description: `React Bootstrap is a popular UI library that rebuilds Bootstrap components as React components, enabling seamless, responsive design with React’s declarative style.`,
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "eoroijh",
        name: "Bulmacss",
        icon: <SiBulma className="text-2xl" />,
        href: "",
        description:
          "A lightweight CSS framework leveraging Flexbox to create responsive, mobile-first websites with easy-to-use classes and a clean, minimal design.",
        ratings: "⭐⭐⭐",
      },
      {
        id: "apojf",
        name: "Materialui",
        icon: <SiMui className="text-2xl" />,
        href: "",
        description: "",
        ratings: "⭐⭐⭐⭐",
      },
    ],
  },
  {
    title: "Backend",
    id: "eojgpo",
    items: [
      {
        id: "spogj",
        name: "Node.js",
        icon: <FaNodeJs className="text-2xl" />,
        href: "",
        description:
          "Node.js is a JavaScript runtime that allows server-side programming, enabling fast, scalable network applications with non-blocking, event-driven architecture.",
        ratings: "⭐⭐",
      },
      {
        id: "ingsf",
        name: "Express.js",
        icon: <SiExpress className="text-2xl" />,
        href: "",
        description:
          "Express.js is a fast, minimalist Node.js framework that simplifies building scalable, robust web applications and APIs with flexible routing and middleware support.",
        ratings: "⭐⭐",
      },
      {
        id: "weoiga",
        name: "MongoDB",
        icon: <SiMongodb className="text-2xl" />,
        href: "",
        description:
          "MongoDB is a flexible, document-oriented NoSQL database designed for scalability and high performance, making it ideal for modern, data-driven applications.",
        ratings: "⭐⭐",
      },
    ],
  },
  {
    title: "Languages",
    id: "woeoja",
    items: [
      {
        id: "spozlmv",
        name: "C",
        icon: <SiC className="text-2xl" />,
        href: "",
        description: "",

        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "sinvkx",
        name: "JavaScript",
        icon: <SiJavascript className="text-2xl" />,
        href: "",
        description:
          "A dynamic scripting language that enables interactive, user-friendly websites and applications, widely used for both frontend and backend development.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "spopong",
        name: "TypeScript",
        icon: <SiTypescript className="text-2xl" />,
        href: "",
        description:
          "TypeScript is a strongly typed superset of JavaScript that adds static typing, enhancing code quality, maintainability, and developer productivity.",

        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "sxlknvk",
        name: "Python",
        icon: <SiPython className="text-2xl" />,
        href: "",
        description: "",

        ratings: "⭐⭐⭐⭐",
      },
    ],
  },
  {
    title: "Tools",
    id: "soijg",
    items: [
      {
        id: "mxvjkds",
        name: "Git",
        icon: <FaGitAlt className="text-2xl" />,
        href: "",
        description: "",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "mxvjk",
        name: "GitHub",
        icon: <SiGithub className="text-2xl" />,
        href: "",
        description:
          "GitHub is a leading platform for version control and collaboration, enabling developers to host, review, and manage code projects efficiently using Git.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "mzlkhf",
        name: "Postman",
        icon: <SiPostman className="text-2xl" />,
        href: "",
        description: "",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "zxxcsd",
        name: "VsCode",
        icon: <VscVscode className="text-2xl" />,
        href: "",
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "asgxclkn",
        name: "Netlify",
        icon: <SiNetlify className="text-2xl" />,
        href: "",
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "azkngsdg",
        name: "Figma",
        icon: <SiFigma className="text-2xl" />,
        href: "",
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "assdkngio",
        name: "Vercel",
        icon: <SiVercel className="text-2xl" />,
        href: "",
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "asgazc",
        name: "Jira",
        icon: <SiAtlassian className="text-2xl" />,
        href: "",
        description:
          "A popular tool used by teams to organize tasks, track progress, and collaborate seamlessly during software development and project management.",
        ratings: "⭐⭐⭐",
      },
    ],
  },
];

const skillsPage = () => {
  return (
    <>
      <section id="skills" className="grid grid-cols-2 gap-5 px-42 py-18">
        {skills.map((category) => (
          <Card key={category.id} className="w-full h-full border-2 px-6 py-4">
            {/* Category Title */}
            <CardHeader className="text-2xl font-semibold text-center">
              {category.title}
            </CardHeader>

            {/* Category Items */}
            <CardContent className="grid grid-cols-3 gap-5 px-4 py-2">
              {category.items.map((item) => (
                <Link
                  key={item.id}
                  href="/skills"
                  className="flex border-2 rounded-2xl justify-center items-center text-center gap-2 px-3 py-3 hover:bg-gray-100 transition"
                >
                  {item.icon} <span>{item.name}</span>
                </Link>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
};

export default skillsPage;
