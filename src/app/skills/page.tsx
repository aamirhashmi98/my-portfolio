"use client";
import Link from "next/link";
import { skills } from "../../data/static";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const skillsPage = () => {
  return (
    <>
      <section
        id="skills"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8 sm:px-24 sm:py-12 md:px-18 md:py-16 lg:px-24 xl:px-42 lg:py-18"
      >
        {skills.map((category) => (
          <Card
            key={category.id}
            className="w-full h-full border-indigo-100 bg-white/85 shadow-lg shadow-indigo-950/5 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/85 md:px-3 md:py-2 lg:px-6 lg:py-4"
          >
            {/* Category Title */}
            <CardHeader className="text-xl lg:text-2xl font-semibold text-center pt-3">
              {category.title}
            </CardHeader>

            {/* Category Items */}
            <CardContent className="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 md:px-4 md:py-2">
              {category.items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex border border-indigo-100 rounded-3xl justify-center items-center text-center gap-1 md:gap-2 px-2 py-3 md:px-3 md:py-3 lg:px-0 lg:py-3 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:hover:border-cyan-500 dark:hover:bg-slate-800 dark:hover:text-cyan-300 transition-all"
                >
                  <span className="text-xl xl:text-2xl">{item.icon}</span>
                  <span className="text-sm xl:text-lg">{item.name}</span>
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
