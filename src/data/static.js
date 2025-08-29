// ------------------------------------ ALL STATIC DATA HERE! ----------------------------------------------

//-------------PROFILE-DATA----------------------------
export const profile = {
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

//---------------------CONTACT-DATA-------------------------------------------
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export const contactInfo = [
  {
    medium: "phone",
    icon: <FaPhoneAlt className="text-6xl" />,
    data: "+91-8587893201",
  },
  {
    medium: "mail",
    icon: <SiGmail className="text-6xl" />,
    data: "aamirhashmi113@gmail.com",
  },
  {
    medium: "location",
    icon: <FaLocationDot className="text-6xl" />,
    data: "Faridabad, Haryana",
  },
];

// -----------------------SKILLS-DATA--------------------------------------
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
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
export const skills = [
  {
    title: "Frontend",
    id: "frontend",
    items: [
      {
        id: "html",
        name: "HTML",
        icon: <FaHtml5 className="" />,
        href: "/skills/html",
        description:
          "HTML5 is the latest version of the web’s core markup language, providing new semantic elements, multimedia support, and enhanced capabilities for modern web development.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "css",
        name: "CSS3",
        href: "/skills/css",
        icon: <SiCss3 className="" />,
        description:
          "CSS3 is the latest evolution of Cascading Style Sheets, introducing advanced styling features like animations, transitions, flexbox, grid, and responsive design capabilities.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: <SiJavascript className="" />,
        href: "/skills/javascript",
        description:
          "A dynamic scripting language that enables interactive, user-friendly websites and applications, widely used for both frontend and backend development.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "react",
        name: "React",
        icon: <FaReact className="" />,
        href: "/skills/react",
        description:
          "React is a powerful JavaScript library for building fast, interactive, and scalable user interfaces for web and mobile applications.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "redux",
        name: "Redux",
        icon: <SiRedux className="" />,
        href: "/skills/redux",
        description:
          "A powerful state management library that helps manage and centralize app state, ensuring predictable behavior across complex JavaScript or React projects.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "next.js",
        name: "Next.js",
        icon: <IoTriangleSharp className="" />,
        href: "/skills/next.js",
        description:
          "Next.js is a React framework for building fast, SEO-friendly, and scalable web applications with features like server-side rendering and static site generation.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "tailwindcss",
        name: "Tailwindcss",
        icon: <SiTailwindcss className="" />,
        href: "/skills/tailwindcss",
        description:
          "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with highly customizable, low-level styling classes for building modern responsive designs.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        icon: <SiReactbootstrap className="" />,
        href: "/skills/bootstrap",
        description: `React Bootstrap is a popular UI library that rebuilds Bootstrap components as React components, enabling seamless, responsive design with React’s declarative style.`,
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "bulmacss",
        name: "Bulmacss",
        icon: <SiBulma className="" />,
        href: "/skills/bulmacss",
        description:
          "A lightweight CSS framework leveraging Flexbox to create responsive, mobile-first websites with easy-to-use classes and a clean, minimal design.",
        ratings: "⭐⭐⭐",
      },
      {
        id: "materialui",
        name: "Materialui",
        icon: <SiMui className="" />,
        href: "/skills/materialui",
        description: "",
        ratings: "⭐⭐⭐⭐",
      },
    ],
  },
  {
    title: "Tools",
    id: "tools",
    items: [
      {
        id: "git",
        name: "Git",
        icon: <FaGitAlt className="" />,
        href: "/skills/git",
        description: "",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "github",
        name: "GitHub",
        icon: <SiGithub className="" />,
        href: "/skills/github",
        description:
          "GitHub is a leading platform for version control and collaboration, enabling developers to host, review, and manage code projects efficiently using Git.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "postman",
        name: "Postman",
        icon: <SiPostman className="" />,
        href: "/skills/postman",
        description: "",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "vscode",
        name: "VsCode",
        icon: <VscVscode className="" />,
        href: "/skills/vscode",
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "netlify",
        name: "Netlify",
        icon: <SiNetlify className="" />,
        href: "/skills/netlify",
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "figma",
        name: "Figma",
        icon: <SiFigma className="" />,
        href: "/skills/figma",
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "vercel",
        name: "Vercel",
        icon: <SiVercel className="" />,
        href: "/skills/vercel",
        description: "",
        ratings: "⭐⭐⭐",
      },
      {
        id: "jira",
        name: "Jira",
        icon: <SiAtlassian className="" />,
        href: "/skills/jira",
        description:
          "A popular tool used by teams to organize tasks, track progress, and collaborate seamlessly during software development and project management.",
        ratings: "⭐⭐⭐",
      },
    ],
  },
  {
    title: "Backend",
    id: "backend",
    items: [
      {
        id: "node.js",
        name: "Node.js",
        icon: <FaNodeJs className="" />,
        href: "/skills/node.js",
        description:
          "Node.js is a JavaScript runtime that allows server-side programming, enabling fast, scalable network applications with non-blocking, event-driven architecture.",
        ratings: "⭐⭐",
      },
      {
        id: "express.js",
        name: "Express.js",
        icon: <SiExpress className="" />,
        href: "/skills/express.js",
        description:
          "Express.js is a fast, minimalist Node.js framework that simplifies building scalable, robust web applications and APIs with flexible routing and middleware support.",
        ratings: "⭐⭐",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: <SiMongodb className="" />,
        href: "/skills/mongodb",
        description:
          "MongoDB is a flexible, document-oriented NoSQL database designed for scalability and high performance, making it ideal for modern, data-driven applications.",
        ratings: "⭐⭐",
      },
    ],
  },
  {
    title: "Languages",
    id: "languages",
    items: [
      {
        id: "c",
        name: "C",
        icon: <SiC className="" />,
        href: "/skills/c",
        description: "",

        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "js",
        name: "JavaScript",
        icon: <SiJavascript className="" />,
        href: "/skills/js",
        description:
          "A dynamic scripting language that enables interactive, user-friendly websites and applications, widely used for both frontend and backend development.",
        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: <SiTypescript className="" />,
        href: "/skills/typescript",
        description:
          "TypeScript is a strongly typed superset of JavaScript that adds static typing, enhancing code quality, maintainability, and developer productivity.",

        ratings: "⭐⭐⭐⭐",
      },
      {
        id: "python",
        name: "Python",
        icon: <SiPython className="" />,
        href: "/skills/python",
        description: "",

        ratings: "⭐⭐⭐⭐",
      },
    ],
  },
  
];

//-----------------PROJECTS-DATA-----------------------------
export const projects = [
  {
    id: "sdknk",
    title: "Map",
    image: "",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at itaque expedita ex quidem neque molestiae! Architecto eum eligendi iure debitis id quod iusto fugit officia laboriosam ipsa nam totam provident magni sint deleniti esse quisquam tenetur dicta culpa possimus corporis doloremque repellat, suscipit nisi. Repellat ex nesciunt porro quia excepturi accusantium impedit, labore unde optio illum autem perspiciatis quos. Quasi perferendis temporibus, mollitia excepturi eum vero iusto obcaecati earum explicabo eos porro? Dolores similique expedita ipsam quidem neque corrupti?`,
    stack: {
      title: "Tech Stack",
      list: ["Next.js", "React", "TpyeScript", "Tailwind-css", "MUI"],
    },
    href: "project-link",
  },
  {
    id: "dgjs",
    title: "Guess Number",
    image: "projectImage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at itaque expedita ex quidem neque molestiae! Architecto eum eligendi iure debitis id quod iusto fugit officia laboriosam ipsa nam totam provident magni sint deleniti esse quisquam tenetur dicta culpa possimus corporis doloremque repellat, suscipit nisi. Repellat ex nesciunt porro quia excepturi accusantium impedit, labore unde optio illum autem perspiciatis quos. Quasi perferendis temporibus, mollitia excepturi eum vero iusto obcaecati earum explicabo eos porro? Dolores similique expedita ipsam quidem neque corrupti?`,
    stack: {
      title: "Tech Stack",
      list: ["Next.js", "React", "TpyeScript", "Tailwind-css", "MUI"],
    },
    href: "projectLink",
  },
  {
    id: "sdjg",
    title: "Century Dice",
    image: "projectImage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at itaque expedita ex quidem neque molestiae! Architecto eum eligendi iure debitis id quod iusto fugit officia laboriosam ipsa nam totam provident magni sint deleniti esse quisquam tenetur dicta culpa possimus corporis doloremque repellat, suscipit nisi. Repellat ex nesciunt porro quia excepturi accusantium impedit, labore unde optio illum autem perspiciatis quos. Quasi perferendis temporibus, mollitia excepturi eum vero iusto obcaecati earum explicabo eos porro? Dolores similique expedita ipsam quidem neque corrupti?`,
    stack: {
      title: "Tech Stack",
      list: ["Next.js", "React", "TpyeScript", "Tailwind-css", "MUI"],
    },
    href: "projectLink",
  },
  {
    id: "wpoejg",
    title: "Bankist Application",
    image: "projectImage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at itaque expedita ex quidem neque molestiae! Architecto eum eligendi iure debitis id quod iusto fugit officia laboriosam ipsa nam totam provident magni sint deleniti esse quisquam tenetur dicta culpa possimus corporis doloremque repellat, suscipit nisi. Repellat ex nesciunt porro quia excepturi accusantium impedit, labore unde optio illum autem perspiciatis quos. Quasi perferendis temporibus, mollitia excepturi eum vero iusto obcaecati earum explicabo eos porro? Dolores similique expedita ipsam quidem neque corrupti?`,
    stack: {
      title: "Tech Stack",
      list: ["Next.js", "React", "TpyeScript", "Tailwind-css", "MUI"],
    },
    href: "projectLink",
  },
  {
    id: "lskdn",
    title: "Forkify",
    image: "projectImage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at itaque expedita ex quidem neque molestiae! Architecto eum eligendi iure debitis id quod iusto fugit officia laboriosam ipsa nam totam provident magni sint deleniti esse quisquam tenetur dicta culpa possimus corporis doloremque repellat, suscipit nisi. Repellat ex nesciunt porro quia excepturi accusantium impedit, labore unde optio illum autem perspiciatis quos. Quasi perferendis temporibus, mollitia excepturi eum vero iusto obcaecati earum explicabo eos porro? Dolores similique expedita ipsam quidem neque corrupti?`,
    stack: {
      title: "Tech Stack",
      list: ["Next.js", "React", "TpyeScript", "Tailwind-css", "MUI"],
    },
    href: "projectLink",
  },
  {
    id: "psojg",
    title: "Node Farm",
    image: "projectImage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at itaque expedita ex quidem neque molestiae! Architecto eum eligendi iure debitis id quod iusto fugit officia laboriosam ipsa nam totam provident magni sint deleniti esse quisquam tenetur dicta culpa possimus corporis doloremque repellat, suscipit nisi. Repellat ex nesciunt porro quia excepturi accusantium impedit, labore unde optio illum autem perspiciatis quos. Quasi perferendis temporibus, mollitia excepturi eum vero iusto obcaecati earum explicabo eos porro? Dolores similique expedita ipsam quidem neque corrupti?`,
    stack: {
      title: "Tech Stack",
      list: ["Node.js", "React", "TpyeScript", "Tailwind-css", "MUI"],
    },
    href: "projectLink",
  },
];


//------------------------------------ NAVLINKS ----------------------------------------------

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About me",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "My Work",
    href: "/work",
  },
  {
    label: "Contact me",
    href: "/contact",
  },
];

export const socialLinks = [
  { icon: <IoLogoGithub />, href: "https://github.com/aamirhashmi98" },
  {
    icon: <IoLogoLinkedin />,
    href: "https://www.linkedin.com/in/aamirhashmi98",
  },
];