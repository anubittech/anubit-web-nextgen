"use client";
import React, { useState } from "react";
import { Projects } from "@/data/projects";
import WorkCard from "@/components/ui/WorkCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// export const metadata = {
//   title: "Our Works",
//   description: "...",
// };

const Categories = [...new Set(Projects.map((project) => project.catagory))];
const page = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL"); //init state
  const [filerProjects, setFilterProjects] = useState(Projects); // State for filtered items

  const CategoryClick = (category) => {
    setSelectedCategory(category);
    const filtered =
      category === "ALL"
        ? Projects
        : Projects.filter((project) => project.catagory === category);
    setFilterProjects(filtered);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col flex-wrap items-center justify-center gap-10 bg-slate-100 p-10 pt-10">
      <div className="redd mt-12 flex h-24 w-full items-center justify-center">
        <h1 className="bg-gradient-text tablet:text-4xl desktop:text-6xl p-5 text-3xl font-bold">
          Selected Projects
        </h1>
      </div>
      <div className="redd flex h-20 w-full items-center justify-center">
        <div className="flex gap-5">
          {Categories.map((catagory) => (
            <Button
              variant={"outline"}
              className={cn("text-xl rounded-3xl", {
                "text-blue-600": selectedCategory === catagory,
              })}
              key={catagory}
              onClick={() => CategoryClick(catagory)}
            >
              {catagory}
            </Button>
          ))}
        </div>
      </div>
      <div className="redd flex h-full w-full flex-wrap justify-center gap-10">
        {/* {Projects.map((data) => (
          <WorkCard key={data.id} data={data} />
        ))} */}
        {/* {Projects.map((data) => (
          <WorkCard key={data.id} data={data} />
        ))} */}
        {filerProjects.map((data) => {
          return <WorkCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default page;
