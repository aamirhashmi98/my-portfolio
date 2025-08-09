import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const About = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center -mt-16">
      <Card className="w-[700px] h-[300px] shadow-lg text-2xl">
        <CardHeader>
          <CardTitle className="mt-6">About me</CardTitle>
          <CardDescription className="text-primary text-lg mt-1">
            Hi, I am Aamir Hashmi - a frontend web developer passionate about
            creating modern, responsive, and interactive user interfaces. With
            hands-on experience in React, Next.js, TypeScript, Tailwind CSS, and
            modern animation libraries like Framer Motion and Typewriter, I
            build clean, scalable, and visually appealing web projects. I am
            constantly learning new techniques, exploring design systems, and
            working on personal and collaborative projects. Currently, I am
            building my own portfolio and open to exciting opportunities and
            collaborations!
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default About;
