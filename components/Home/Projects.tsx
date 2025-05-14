import React from "react";
import { Sora } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Link from "next/link";
import js from "@/public/javascript-programming-language-icon.svg";
import { Heading } from "./Heading";
import react from "@/public/react-js-icon.svg";
import css from "@/public/css-icon.svg";
import html from "@/public/html-icon.svg";
import { MdArrowOutward } from "react-icons/md";
import SocialLinks from "./SocialLinks";
// Define types for project data
interface Tech {
  id: number;
  name: string;
  image: string;
}

interface Project {
  id: number;
  bgColor: string;
  title: string;
  subTitle: string;
  tech: Tech[];
  link: string;
}

const sora_font = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const projectData: Project[] = [
  {
    id: 1,
    bgColor: "bg-[#5ECBA1]",
    title: "Student management API",
    subTitle: "Student management API project",
    tech: [
      {
        id: 1,
        name: "JavaScript",
        image: js,
      },
      {
        id: 2,
        name: "React.js",
        image:
          "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*x-HyaNxF4CJW0gSc.png",
      },
    ],
    link: "https://github.com/Khusaratkhan/React-Projects",
  },
  {
    id: 2,
    bgColor: "bg-[#CA9BF9] ",
    title: "Weather API",
    subTitle: "Weather App created using react",
    tech: [
      {
        id: 1,
        name: "React js",
        image: react,
      },
      {
        id: 2,
        name: "CSS",
        image:
          "https://i.pinimg.com/564x/08/a3/2f/08a32fc73758025add069aefdde61b80.jpg",
      },
    ],
    link: "https://github.com/Khusaratkhan/weatherApp",
  },
  {
    id: 3,
    bgColor: "bg-[#38bdf8]",
    title: "Bouquet of Flowers",
    subTitle: "Bouquet of community website",
    tech: [
      {
        id: 1,
        name: "JavaScript",
        image: js,
      },
      {
        id: 2,
        name: "CSS",
        image: css,
      },
      {
        id: 3,
        name: "HTML",
        image: html,
      },
    ],
    link: "https://github.com/Khusaratkhan/Bouque-flower",
  },
  {
    id: 4,
    bgColor: "bg-[#F7FD91]",
    title: "Shopping-cart",
    subTitle: "ShoppingCart using Json",
    tech: [
      {
        id: 1,
        name: "JavaScript",
        image: js,
      },
      {
        id: 2,
        name: "CSS",
        image: css,
      },
      {
        id: 3,
        name: "HTML",
        image: html,
      },
      {
        id: 4,
        name: "React js",
        image: react,
      },
    ],
    link: "https://github.com/Khusaratkhan/Shopping-cart",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Heading heading={"My projects"} />
      </div>
      <div className={` flex items-center justify-between w-full px-[9%] pb-2`}>
        <p className={`capitalize md:text-2xl text-lg ${sora_font.className}`} >Explore</p>
        <Link href={'/https://github.com/Khusaratkhan'}>
          <p className={`capitalize md:text-2xl text-lg  flex items-center gap-1 ${sora_font.className}`}>
            <MdArrowOutward className="text-shade" />
            View all
          </p>
        </Link>
      </div>
      <div
        className={`${sora_font.className} grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-6 px-[8%] pb-10`}
      >
        {projectData.map((project) => (
          <div
            key={project.id}
            className={`p-8 aspect-square rounded-3xl ${project.bgColor}`}
          >
            <div className="flex flex-col gap-4">
              <p className="uppercase text-sm text-gray-700 font-semibold">
                Project {project.id}
              </p>
              <h2 className="text-3xl font-semibold text-black">
                {project.title}
              </h2>
              <p className="capitalize text-sm text-black">
                {project.subTitle}
              </p>
            </div>
            <div className="h-[2px] my-6 bg-black/10 w-full"></div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="uppercase text-xs font-semibold text-gray-800">
                  Tech stack
                </p>
                <div className="flex flex-row items-center justify-center w-full">
                  <AnimatedTooltip items={project.tech} />
                </div>
              </div>
              <Link href={project.link} target="_blank">
                <div className="p-3 bg-black rounded-lg">
                  <FaArrowRight className="text-white" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pb-8">
        <SocialLinks />
      </div>
    </>
  );
};

export default Projects;
