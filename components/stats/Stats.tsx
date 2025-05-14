import React from "react";
import { Heading } from "../Home/Heading";
import { useTheme } from "next-themes";

const Stats = () => {
  const { theme } = useTheme(); // Get current theme from useTheme()

  // Set the theme string for the images based on the Next.js theme value
  const imageTheme = theme === "dark" ? "dark" : "graywhite";

  return (
    <div className="flex items-center flex-col justify-center pb-16">
      <Heading heading={"My Stats"} />
      <div className="flex justify-center items-center p-4 w-full gap-4  md:flex-row flex-col-reverse">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=Khusaratkhan&theme=${imageTheme}&hide_border=false&include_all_commits=false&count_private=false`}
          width={500}
          height={500}
          alt="GitHub Stats"
          className="max-w-full h-auto"
        />
        <img
          src={`https://nirzak-streak-stats.vercel.app/?user=Khusaratkhan&theme=${imageTheme}&hide_border=false`}
          width={500}
          height={500}
          alt="GitHub Streak Stats"
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex items-center justify-center w-full px-2">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Khusaratkhan&theme=${imageTheme}&hide_border=false&include_all_commits=false&count_private=false&layout=compact`}
          width={500}
          height={220}
          alt="GitHub Top Languages"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Stats;
