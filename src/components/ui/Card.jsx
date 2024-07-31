// import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Card = ({ data, Ref }) => {
  const card = useRef();
  const [arrow, setArrow] = useState(false);
  const cardUpAnim = {
    init: {
      opacity: 0,
      y: 300,
    },
    anim: (id) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * id, ease: "easeInOut" },
    }),
  };
  const { id } = data;
  // b450 aorus elit v2
  return (
    <motion.div
        variants={cardUpAnim}
        initial="init"
        whileInView="anim"
        custom={id}
        // viewport={{
        //   once: true,
        // }}
        ref={card}
        onMouseEnter={() => setArrow(!arrow)}
        onMouseLeave={() => setArrow(!arrow)}
        className="redd cards flex h-96 w-96 flex-col items-start justify-between rounded-lg border bg-[#2196F3] p-2 px-5 py-5 text-white shadow-lg transition-colors duration-500 hover:bg-white"
      >
    <Link className="w-full h-full redd flex flex-col items-start justify-between" href={`/service/${data.slug}`}>
        <div className="redd size-8">
         {data.icon}
        </div>
        <div className="border-b border-black text-left text-lg">
          <p className="font-medium">{data.Desq}</p>
        </div>
        <div className="flex w-full items-center justify-between text-2xl font-semibold">
          <h1 className={cn("", { "text-blue-700": arrow })}>{data.Title}</h1>
          <FaArrowRight
            // className="-translate-x-10 hover:-rotate-45 transition-all duration-500 hover:translate-x-0 hover:opacity-100"
            className={cn("-translate-x-10 transition-all duration-500", {
              "translate-x-0": arrow,
              "-rotate-45": arrow,
              "opacity-100": arrow,
              "text-blue-700": arrow,
            })}
          />
        </div>
    </Link>
      </motion.div>
  );
};

export default Card;
