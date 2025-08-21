import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
  SiVercel
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
        description:
          "HTML5 is the latest version of the web’s core markup language, providing new semantic elements, multimedia support, and enhanced capabilities for modern web development.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "eoijg",
        name: "CSS 3",
        icon: <SiCss3 className="text-2xl" />,
        description:
          "CSS3 is the latest evolution of Cascading Style Sheets, introducing advanced styling features like animations, transitions, flexbox, grid, and responsive design capabilities.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "sinvkx",
        name: "JavaScript",
        icon: <SiJavascript className="text-2xl" />,
        description:
          "A dynamic scripting language that enables interactive, user-friendly websites and applications, widely used for both frontend and backend development.",
        ratings: "⭐⭐⭐⭐",
      },
       {
        id: "asinnv",
        name: "React",
        icon: <FaReact className="text-2xl" />,
        description:
          "React is a powerful JavaScript library for building fast, interactive, and scalable user interfaces for web and mobile applications.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "ognoeig",
        name: "Redux",
        icon: <SiRedux className="text-2xl" />,
        description:
          "A powerful state management library that helps manage and centralize app state, ensuring predictable behavior across complex JavaScript or React projects.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "osdojog",
        name: "Next.js",
        icon: <IoTriangleSharp className="text-2xl" />,
        description:
          "Next.js is a React framework for building fast, SEO-friendly, and scalable web applications with features like server-side rendering and static site generation.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "dopgj",
        name: "Tailwindcss",
        icon: <SiTailwindcss className="text-2xl" />,
        description:
          "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with highly customizable, low-level styling classes for building modern responsive designs.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "diggn",
        name: "Bootstrap",
        icon: <SiReactbootstrap className="text-2xl" />,
        description: `React Bootstrap is a popular UI library that rebuilds Bootstrap components as React components, enabling seamless, responsive design with React’s declarative style.`,
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "eoroijh",
        name: "Bulmacss",
        icon: <SiBulma className="text-2xl" />,
        description:
          "A lightweight CSS framework leveraging Flexbox to create responsive, mobile-first websites with easy-to-use classes and a clean, minimal design.",
        ratings: "⭐⭐⭐",
      },{
        id:'apojf',
        name: 'Materialui',
        icon: <SiMui className='text-2xl' />,
        description: "",
        ratings:  "⭐⭐⭐⭐",
      }
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
        description:
          "Node.js is a JavaScript runtime that allows server-side programming, enabling fast, scalable network applications with non-blocking, event-driven architecture.",
        ratings: "⭐⭐",
      },
      {
        id: "ingsf",
        name: "Express.js",
        icon: <SiExpress className="text-2xl" />,
        description:
          "Express.js is a fast, minimalist Node.js framework that simplifies building scalable, robust web applications and APIs with flexible routing and middleware support.",
        ratings: "⭐⭐",
      },
      {
        id: "weoiga",
        name: "MongoDB",
        icon: <SiMongodb className="text-2xl" />,
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
        description:
          "",

        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "sinvkx",
        name: "JavaScript",
        icon: <SiJavascript className="text-2xl" />,
        description:
          "A dynamic scripting language that enables interactive, user-friendly websites and applications, widely used for both frontend and backend development.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "spopong",
        name: "TypeScript",
        icon: <SiTypescript className="text-2xl" />,
        description:
          "TypeScript is a strongly typed superset of JavaScript that adds static typing, enhancing code quality, maintainability, and developer productivity.",

        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "sxlknvk",
        name: "Python",
        icon: <SiPython className="text-2xl" />,
        description:
          "",

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
        description:
          "",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "mxvjk",
        name: "GitHub",
        icon: <SiGithub className="text-2xl" />,
        description:
          "GitHub is a leading platform for version control and collaboration, enabling developers to host, review, and manage code projects efficiently using Git.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "mzlkhf",
        name: "Postman",
        icon: <SiPostman className="text-2xl" />,
        description:
          "",
        ratings: "⭐⭐⭐⭐",
      },
      {id: 'zxxcsd',
        name: 'VsCode',
        icon: <VscVscode className="text-2xl"/>,
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "asgxclkn",
        name: "Netlify",
        icon: <SiNetlify className="text-2xl" />,
        description:
          "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "azkngsdg",
        name: "Figma",
        icon: <SiFigma className="text-2xl" />,
        description:
          "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "assdkngio",
        name: "Vercel",
        icon: <SiVercel className="text-2xl" />,
        description:
          "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "asgazc",
        name: "Jira",
        icon: <SiAtlassian className="text-2xl" />,
        description:
          "A popular tool used by teams to organize tasks, track progress, and collaborate seamlessly during software development and project management.",
        ratings: "⭐⭐⭐",
      },
    ],
  },
];

const page = () => {
  return (
    <>
      <section
        id="skills"
        className="grid grid-cols-2 gap-5 px-36 py-24"
        // grid grid-cols-2 gap-5 py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw]
      >
        {skills.map((card) => (
          <div key={card.id} className="">
            {
              <Card className="w-full h-full border-2 px-6 py-4">
                <CardHeader className="text-2xl font-semibold text-center">
                  {card.title}
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-5 px-4 py-2">
                  {card.items.map((item) => (
                    <div key={item.id} className="">
                      { <Link href={'/skills'}><div className="flex border-3 rounded-2xl text-center justify-center gap-2">
                          <span className="flex px-3 py-3 gap-2">
                            {item.icon} {item.name}
                          </span>
                        </div></Link>
                      }
                    </div>
                  ))}
                </CardContent>
              </Card>
            }
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
