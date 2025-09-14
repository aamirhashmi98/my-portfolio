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
