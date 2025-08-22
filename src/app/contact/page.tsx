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
      <span className="bg-gray-200 m-6 p-6 absolute -top-20 rounded-full text-shadow-md">
        {contact.icon}
      </span>
    </CardHeader>
    <CardContent className="flex justify-center mt-8">
      <span className="text-gray-500 text-lg text-shadow-md">
        {contact.data}
      </span>
    </CardContent>
    <CardFooter className="flex justify-center"></CardFooter>
  </Card>
));

const Contact = () => {
  return (
    <>
      <div className=" grid grid-cols-3 gap-20 m-24 p-12">
        {renderedContactInfo}
      </div>
    </>
  );
};

export default Contact;
