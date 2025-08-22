import Link from "next/link";
import { skills } from "../../data/static";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
                  href={item.href}
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
