import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

const projects = [
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
    title: "projectTitle",
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
    title: "projectTitle",
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
    title: "projectTitle",
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
    title: "projectTitle",
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
    title: "projectTitle",
    image: "projectImage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at itaque expedita ex quidem neque molestiae! Architecto eum eligendi iure debitis id quod iusto fugit officia laboriosam ipsa nam totam provident magni sint deleniti esse quisquam tenetur dicta culpa possimus corporis doloremque repellat, suscipit nisi. Repellat ex nesciunt porro quia excepturi accusantium impedit, labore unde optio illum autem perspiciatis quos. Quasi perferendis temporibus, mollitia excepturi eum vero iusto obcaecati earum explicabo eos porro? Dolores similique expedita ipsam quidem neque corrupti?`,
    stack: {
      title: "Tech Stack",
      list: ["Next.js", "React", "TpyeScript", "Tailwind-css", "MUI"],
    },
    href: "projectLink",
  },
];

const renderedProjectCard = projects.map((project) => {
  const { id, title, description, href } = project;
  const renderedStackTitle = (
    <span className="font-semibold">{project.stack.title}</span>
  );
  const renderedList = project.stack.list.map((item) => (
    <span key={item} className="mr-2 text-sm">
      {item}
    </span>
  ));
  return (
    <Card key={id} className="w-full bg-gray-100">
      <CardHeader className="flex">
        <CardTitle className="text-xl font-semibold text-shadow-md">
          {title}
        </CardTitle>
      </CardHeader>
      <CardDescription className="text-shadow-md text-md mx-2 px-6">
        {description}
      </CardDescription>
      <CardContent className="text-shadow-md text-md">
        {renderedStackTitle}: {renderedList}
      </CardContent>
      <CardFooter className="text-center">
        <Link href={href} className="flex gap-1">
          {href}
          {<TbExternalLink className="flex self-center" />}
        </Link>
      </CardFooter>
    </Card>
  );
});

const WorkPage = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mx-24 my-16">
        {renderedProjectCard}
      </div>
    </>
  );
};

export default WorkPage;
