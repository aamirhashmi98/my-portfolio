import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { skills } from "@/data/static";
import Link from "next/link";

export default async function skillDetail({
  params,
}: {
  params: Promise<{ skillName: string }>;
}) {
  const { skillName } = await params;
  const matchingItem = skills.flatMap((skill) =>
    skill.items.filter((item) => item.id === skillName),
  );
  const renderedSkillDetail = matchingItem.map((card) => (
    <article key={card.id} className="">
      <Card className="flex-1 bg-gray-200 m-12">
        <CardHeader className="">
          <span className="flex justify-center text-4xl">{card.icon}</span>
          <span className=" flex justify-center text-lg font-semibold">
            {card.name}
          </span>
        </CardHeader>
        <CardContent className="flex justify-center text-center text-sm text-gray-500 md:text-lg">
          {card.description}
        </CardContent>
        <CardFooter className=" flex justify-center">
          ratings my self - {card.ratings}
        </CardFooter>
      </Card>
    </article>
  ));

  return (
    <>
      <section className="min-h-screen flex flex-col">
        {renderedSkillDetail}
        <div className="flex justify-center">
          <Link
            href={"/skills"}
            className="mx-4 my-4 inline-flex cursor-pointer items-center rounded-md bg-gradient-to-r from-indigo-600 to-cyan-600 px-5 py-2 text-sm text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-cyan-700 md:my-4 md:text-lg"
          >
            Back
          </Link>
        </div>
      </section>
    </>
  );
}
