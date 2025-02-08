"use client";
import coursedata from "../data/music_courses.json"
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
 import Link from "next/link";
 import { Button } from "./ui/moving-border";
const Courses = () => {
  
  const featuredcourses=coursedata.courses.filter(course=>course.isFeatured)
  return (
    <div className=" w-full py-12 bg-gray-900 flex flex-col ">
      {/* here i will have three section   */}
      <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>




      {/* then i will have some cards here */}



      <div className="mt-10 w-full text-center " >

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
        {/* first i am starting with designing first card then all same */}
        


      {/* now i have to use a map like funciton to iterate over all data and then show all the couses in cards one by one */}


      { featuredcourses.map((course)=>(
        
        // course.title
        <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
      ))  }
    
      </div>


      </div>





      <div className="mt-20 text-center">
            <Link href={"/courses"}>
            <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >Explore Courses
          </Button>
            </Link>
        </div>
    </div>
  )
}

export default Courses
