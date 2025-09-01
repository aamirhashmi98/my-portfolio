import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { skills } from "@/data/static";
import Link from "next/link";

export default async function skillDetail({
  params,
}: {
  params: Promise<{ skillName: string }>;
}) {
  const { skillName } = await params;
  const matchingItem = skills.flatMap((skill) =>
    skill.items.filter((item) => item.id === skillName)
  );
  const renderedSkillDetail = matchingItem.map((card) => (
    <article key={card.id} className="w-full flex justify-center my-8">
      <Card className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg shadow-md mx-2  sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="flex flex-row">
          <span className="text-2xl p-2 flex items-center text-center">
            {card.icon}
          </span>
          <span className="text-2xl font-bold p-2 text-center items-center">
            {card.name}
          </span>
        </div>
        <CardContent className="text-base text-center text-gray-600">
          {card.description}
        </CardContent>
        <CardFooter className="text-sm text-gray-500 mt-2">
          ratings my self - {card.ratings}
        </CardFooter>
      </Card>
    </article>
  ));

  return (
    <>
      <section>
        {" "}
        {renderedSkillDetail}
        <div className="flex justify-center">
          <Link
            href={"/skills"}
            className="mx-4 my-4 px-8 py-2 text-shadow-sm inline-block bg-black text-2xl text-white shadow-lg hover:bg-gray-900 transition-all md:my-4"
          >
            Back
          </Link>
        </div>
      </section>
    </>
  );
}
