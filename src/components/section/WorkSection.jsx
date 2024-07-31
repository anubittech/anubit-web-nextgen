import React, { useState } from "react";
import { Projects } from "../../data/projects";
import WorkCard from "../ui/WorkCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

const WorkSection = () => {
  const [arrow, setArrow] = useState(false);
  let FilterProject = Projects.slice(0, 4); // Filter Out the Projects here 0 => [id:6]
  return (
    <div className="flex min-h-screen w-screen flex-col flex-wrap items-center justify-around gap-10 px-5 tablet:p-20 tablet:px-36">
      <div className="redd flex h-24 w-full items-center justify-center">
        <h1 className="bg-gradient-text p-5 uppercase text-5xl font-extrabold">
          Selected Projects
        </h1>
      </div>
      <div className="flex h-full w-full flex-wrap justify-center gap-5">
        {/* {Projects.map((data) => (
          <WorkCard key={data.id} data={data} />
        ))} */}
        {FilterProject.map((data) => (
          <WorkCard key={data.id} data={data} />
        ))}
      </div>
      <Link href={"/project"}>
        <div
          onMouseEnter={() => setArrow(!arrow)}
          onMouseLeave={() => setArrow(!arrow)}
          className="rounded-3xl border border-blue-600 p-2 px-5"
        >
          <h1 className="flex items-center justify-center font-semibold">
            All Projects{" "}
            <FaArrowRight
              // className="-translate-x-10 hover:-rotate-45 transition-all duration-500 hover:translate-x-0 hover:opacity-100"
              className={cn("opacity-0 transition-all duration-500", {
                "translate-x-1": arrow,
                "-rotate-45": arrow,
                "opacity-100": arrow,
                "text-blue-700": arrow,
              })}
            />
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default WorkSection;
