"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect } from "react";
import SplitType from "split-type";
import SVG from "@/lib/SVG";
const SlideUp = {
  init: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
};
const preloader = () => {
  // useLayoutEffect(() => {
  //   const anubit = new SplitType(".split-text", { types: "chars" });
  //   const ctx = gsap.context(() => {
  //     let tl = gsap.timeline();
  //     tl.from(anubit.chars, { x: "200%", opacity: 0, stagger: { amount: 1 } });
  //   });
  //   return () => ctx.revert();
  // }, []);
  return (
    <motion.div
      variants={SlideUp}
      initial="init"
      exit="exit"
      // whileInView={'exit'}
      viewport={{
        once:true
      }}
      className="fixed left-0 z-[99999] flex h-screen w-screen flex-col-reverse items-center justify-center gap-5 bg-[#1773fa]"
    >
      <h1 className="split-text overflow-hidden text-8xl font-bold text-white laptop:text-9xl">
        ANUBIT
      </h1>
      <SVG />
    </motion.div>
  );
};

export default preloader;
