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
      <Card className="m-12 flex-1 border-indigo-100 bg-white/85 text-slate-900 shadow-lg shadow-indigo-950/5 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-100">
        <CardHeader>
          <span className="flex justify-center text-4xl text-indigo-600 dark:text-cyan-300">
            {card.icon}
          </span>
          <span className="flex justify-center text-lg font-semibold text-slate-900 dark:text-slate-100">
            {card.name}
          </span>
        </CardHeader>
        <CardContent className="flex justify-center text-center text-sm text-gray-600 dark:text-slate-300 md:text-lg">
          {card.description}
        </CardContent>
        <CardFooter className="flex justify-center text-slate-600 dark:text-slate-300">
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
