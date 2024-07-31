import React from "react";
import AnubitSample from "../../../public/img/anubit-sample.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
const ImageSlideV = {
  init: {
    opacity: 0,
    translateX: -500,
  },
  anim: {
    opacity: 1,
    translateX: 0,
    transition:{
      duration:.5,
      delay:0.95
    }
  },
};

const AboutSection = () => {
  return (
    <div className="flex min-h-[40rem] w-screen flex-col items-center justify-evenly bg-[#e7edf7] laptop:flex-row">
      <div className="redd flex h-96 w-full items-center justify-center">
        <motion.div
          className="redd"
          variants={ImageSlideV}
          initial="init"
          whileInView={"anim"}
          // viewport={{
          //   once:true
          // }}
        >
          <Image
            src={AnubitSample}
            alt="anubit"
            width={1000}
            height={500}
            className="w-96 pl-32"
          />
        </motion.div>
      </div>
      <div className="redd m-1 flex h-full w-fit flex-col items-center justify-around gap-5">
        <div className="w-[80%]">
          <h1 className="redd bg-gradient-text text-2xl font-bold desktop:text-3xl">
            WE HELP BUSINESSES REACH NEW HEIGHTS
          </h1>
        </div>
        <div className="redd w-full tablet:w-[80%] laptop:w-[90%]">
          <p className="text-start text-base font-medium tablet:text-xl">
            We at Anubit are your pass to achievement. Being the Best Web
            Development Company, we create beautiful websites. Your website
            moves up the search results with our excellent SEO services. As
            theTop Social Media Company, we also engage users and provide
            outcomes. All set to soar to new heights? Select Anubit.
          </p>
        </div>
        <div className="flex w-[80%] flex-col items-start justify-center gap-5 py-2">
          <h3 className="text-base font-bold tablet:text-2xl">
            Web Development
          </h3>
          <h3 className="text-base font-bold tablet:text-2xl">
            Digital Marketing
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
