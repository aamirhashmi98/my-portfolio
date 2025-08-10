import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className=" grid grid-cols-3 gap-20 m-24 p-12">
        <Card className="relative w-full animate-slideLeft transition-transform duration-300 hover:scale-110 cursor-pointer">
          <CardHeader className="flex justify-center">
            <span className="bg-gray-200 m-6 p-6 absolute -top-20 rounded-full text-shadow-md">
              <FaPhoneAlt className="text-6xl" />
            </span>
          </CardHeader>
          <CardContent className="flex justify-center mt-8">
            <span className="text-gray-500 text-lg text-shadow-md">
              +91-8587893201
            </span>
          </CardContent>
          <CardFooter className="flex justify-center"></CardFooter>
        </Card>
        <Card className="relative w-full animate-slideDown transition-transform duration-300 hover:scale-110 cursor-pointer">
          <CardHeader className="flex justify-center">
            <span className="bg-gray-200 m-6 p-6 absolute -top-20 rounded-full text-shadow-md">
              <SiGmail className="text-6xl" />
            </span>
          </CardHeader>
          <CardContent className="flex justify-center mt-8">
            <span className="text-gray-500 text-lg text-shadow-md">
              aamirhashmi113@gmail.com
            </span>
          </CardContent>
          <CardFooter className="flex justify-center"></CardFooter>
        </Card>
        <Card className="relative w-full animate-slideRight transition-transform duration-300 hover:scale-110 cursor-pointer">
          <CardHeader className="flex justify-center">
            <span className="bg-gray-200 m-6 p-6 absolute -top-20 rounded-full text-shadow-md">
              <FaLocationDot className="text-6xl" />
            </span>
          </CardHeader>
          <CardContent className="flex justify-center mt-8">
            <span className="text-gray-500 text-lg text-shadow-md">
              Faridabad, Haryana
            </span>
          </CardContent>
          <CardFooter className="flex justify-center"></CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Contact;
