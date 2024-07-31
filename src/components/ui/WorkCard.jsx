import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkCard = ({ data }) => {
  // const
  return (
    <div className="redd flex flex-col h-fit w-[40rem] items-center justify-center p-1 rounded-md bg-blue-300 shadow-md">
      <div className="overflow-hidden">
        <Link href={`/project/${data.slug}`}>
          <Image
            src={data.img}
            width={1000}
            height={1000}
              // placeholder="blur"
            alt="Anubit Projects"
            className="redd shadow-xl  transition-transform duration-500 hover:scale-105 h-fit w-full"
          />
        </Link>
      </div>
      {/* <h1>{data.type}</h1> */}
      
    </div>
  );
};

export default WorkCard;
