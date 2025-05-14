import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export function TimelineDemo() {
  const data = [
    {
      title: "Oct 2024 - Persent",
      content: (
        <div className="flex items-start justify-start flex-col ">
          <p className="text-black dark:text-white text-2xl font-normal mb-8">
            <span className="text-shade capitalize">Traning at</span>{" "}
            Tech-Mahindra Smart Academy
          </p>{" "}
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
            {" "}
            I am honing my skills as a Full Stack Java Developer through
            rigorous training at Tech Mahindra Smart Academy, building expertise
            in end-to-end web development to create robust, scalable
            applications.{" "}
          </p>
        </div>
      ),
    },
    {
      title: "03-06     /2022",
      content: (
        <div className="flex items-start justify-start flex-col ">
          <p className="text-black dark:text-white text-2xl font-normal mb-8">
            <span className="text-shade capitalize">Internship at</span>{" "}
            Fratello InnoTech Pvt Ltd
          </p>{" "}
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
            {" "}
            Performance Analysis on Student Feedback Intern.{" "}
          </p>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <FaStar className="text-shade" />
            Analyzed a large dataset of student feedback to identify student
            details and password.
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <FaStar className="text-shade" />
            Implemented a reliable coding scheme to ensure consistency and
            accuracy in data analysis.
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <FaStar className="text-shade" />
            In this we have three modules Service Provider and View and
            Authorize Users and Remote Users.
          </div>
          <div className="h-[280px] md:h-[350px] aspect-square flex items-start justify-start">
            <Image
              src="/code-img.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg h-full object-contain  w-full items-start "
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <p className="text-black dark:text-white text-2xl font-normal mb-8">
            <span className="text-shade capitalize">
              Sardar Patel Mahavidyalaya,
            </span>{" "}
            Maharashtra
          </p>
          <p className="text-black dark:text-white text-base font-normal mb-8">
            I bring a solid foundation in cutting-edge technology and analytical
            skills. This engineering background equips me with a unique
            perspective to tackle challenges, bridging the technical and
            creative worlds seamlessly in Computer Applications.
          </p>
        </div>
      ),
    },
    {
      title: "2017 - 2020",
      content: (
        <div>
          <p className="text-black dark:text-white text-2xl font-normal mb-8">
            <span className="text-shade capitalize">A.C.S. College,</span>{" "}
            Maharashtra
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <FaStar className="text-shade" />
              Bachelor of Science in Computer Science
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
