import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactInfo = [
  {
    medium: "phone",
    icon: <FaPhoneAlt className="text-6xl" />,
    data: "+91-8587893201",
  },
  {
    medium: "mail",
    icon: <SiGmail className="text-6xl" />,
    data: "aamirhashmi113@gmail.com",
  },
  {
    medium: "location",
    icon: <FaLocationDot className="text-6xl" />,
    data: "Faridabad, Haryana",
  },
];

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
