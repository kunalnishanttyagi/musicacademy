import Image from "next/image";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Courses from "@/components/Courses";
export default function Home() {
  return ( <div className=" w-full h-full " >
    {/* <div className=" text-center text-[40px]">Hii</div> */}
    <Herosection></Herosection>
    <Courses></Courses>
  </div>
  );
}
