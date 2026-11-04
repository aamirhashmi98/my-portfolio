import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { projects } from "../../data/static";
import { TbExternalLink } from "react-icons/tb";

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
    <Card key={id} className="w-full border-indigo-100 bg-white/85 shadow-lg shadow-indigo-950/5 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/85 transition-transform hover:-translate-y-1">
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
      <div className="grid grid-cols-1 gap-6 mx-4 my-8 md:grid-cols-2 md:gap-8 md:mx-16 md:my-12 xl:grid-cols-3 xl:gap-10 xl:mx-24 xl:my-16">
        {renderedProjectCard}
      </div>
    </>
  );
};

export default WorkPage;
