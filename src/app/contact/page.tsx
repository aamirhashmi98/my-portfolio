import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { contactInfo } from "../../data/static";

const renderedContactInfo = contactInfo.map((contact) => (
  <Card
    key={contact.medium}
    className={`relative w-full transition-transform duration-300 hover:scale-110 cursor-pointer ${
      contact.medium === "phone" ? "animate-slideLeft" : ""
    }
    ${contact.medium === "mail" ? "animate-slideDown" : ""}
    ${contact.medium === "location" ? "animate-slideRight" : ""} `}
  >
    <CardHeader className="flex justify-center">
      <span className="bg-gray-200 text-3xl md:text-4xl lg:text-5xl xl:text-6xl m-3 p-3 md:m-4 md:p-4 xl:m-6 xl:p-6 absolute -top-10 md:-top-12 lg:-top-14 xl:-top-20 rounded-full xl:text-shadow-md">
        {contact.icon}
      </span>
    </CardHeader>
    <CardContent className="flex justify-center xl:mt-8">
      <span className="text-gray-500 text-sm lg:text-lg text-shadow-md">
        {contact.data}
      </span>
    </CardContent>
    <CardFooter className="flex justify-center"></CardFooter>
  </Card>
));

const Contact = () => {
  return (
    <>
      <div className=" grid xl:grid-cols-3 gap-12 md:gap-24 xl:gap-20 m-8 p-3 sm:mx-24 md:mx-42 md:my-24 lg:mx-64 xl:m-24 xl:p-12">
        {renderedContactInfo}
      </div>
    </>
  );
};

export default Contact;
