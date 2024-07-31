
import { Projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
// import { useState } from "react";
export async function generateStaticParams() {
  // Generate static parameters from local data
  return Projects.map((project) => ({ projectID: project.slug }));
}
export default function Page({ params }) {
  // const [projectIndex,setProjectIndex] = useState()

  
    
  
  const ProjectItem = Projects.find(
    (project) => project.slug === params.projectID,
  );
  if (!ProjectItem) {
    return <div>Item not found</div>;
  }
let currentIndex = Projects.findIndex(project => project.slug )
console.log(currentIndex);
  // let NextItem = Projects.filter((project)=> project.id + 1  )
  // const [nextSlug,setNextSlug] = useState([Projects[NextItem].slug])
  
  return (
    <div className="redd flex min-h-screen w-screen flex-col items-center justify-center pt-64 text-black">
      <div className="redd flex h-96 w-full flex-col items-center justify-center">
        <div className="redd flex h-48 w-full items-center justify-between px-10">
          <h1 className="text-5xl font-bold">{ProjectItem.id}</h1>
          <h1 className="text-5xl font-bold">{ProjectItem.title}</h1>
          <h1 className="text-3xl font-normal">{ProjectItem.date}</h1>
        </div>
        <div className="redd flex h-48 w-full items-center justify-between px-10">
          <h1 className="text-2xl font-medium">
            Client: <br /> {ProjectItem.client}
          </h1>
          <h1 className="text-2xl font-medium">
            Service: <br /> {ProjectItem.service}
          </h1>
          <h1 className="text-xl font-medium">
            Brief: <br /> {ProjectItem.desc}
          </h1>
        </div>
      </div>
      <div className="redd h-screen w-full p-10">
        <Image
          src={ProjectItem.img}
          className="h-full w-full rounded-md"
          alt="Anubit "
          width={1000}
          height={1000}
        />
      </div>
      <div className="redd m-10 cursor-pointer rounded-2xl bg-blue-600 p-2 text-white">
        <h1>
          
          <Link href={`/project/${''}`}>
          Next Project
          </Link>
        </h1>
      </div>
    </div>
  );
}
