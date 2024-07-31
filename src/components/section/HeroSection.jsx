"use client";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import { Button } from "../ui/button";

const HeroSection = () => {
  const Container = useRef();
  useEffect(() => {
    const anubitTitle = new SplitType(".split-text-title", { types: "chars" });
    const anubitSubTitle = new SplitType(".split-text-subtitle", {
      types: "chars",
    });
    const anubitDesq = new SplitType(".split-text-desq", { types: "words" });
    const anubitSumm = new SplitType(".split-text-sum", { types: "lines" });
    const ctx = gsap.context(() => {
      // gsap.from(anubit.chars, {
      //   y: "200%",
      //   stagger: { amount: 0.5 },
      // });

      let tl = gsap.timeline({
        delay: 2.5,
      });
      tl.from(anubitTitle.chars, { y: "-200%", stagger: { amount: 0.5 } });
      tl.from(anubitSubTitle.chars, { y: "200%" });

      tl.from(anubitSumm.lines, {
        y: "200%",
        opacity: 0,
        stagger: { amount: 0.5 },
      });
      tl.from(anubitDesq.words, { y: "200%", stagger: { amount: 0.5 } });
      tl.from(".Btn1", {
        opacity: 0,
      });
      tl.from(".Btn2", {
        opacity: 0,
      });
    }, Container);
    // console.log("gsap effect");
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={Container}
        className="flex min-h-screen w-screen flex-col items-center justify-center gap-5"
      >
        <div className="redd mt-20 flex w-full flex-col items-center justify-center gap-1">
          <h1 className="redd split-text-title w-full overflow-hidden pl-10 text-3xl font-bold uppercase text-blue-600 tablet:mt-10 tablet:text-6xl desktop:text-7xl">
            anubit technologies
          </h1>
          <h1 className="redd split-text-subtitle w-full overflow-hidden tablet:pl-10  text-center text-lg capitalize tablet:text-left tablet:text-3xl desktop:text-5xl">
            crafting digital product, digital solutions
          </h1>
        </div>
        <div className="redd h-80 w-full p-1 px-10">
          <div className="border border-black h-full w-full rounded-2xl"></div>
        </div>
        <div className="redd flex min-h-64 w-full items-center justify-between p-2 px-10 tablet:min-h-60">
          <div className="flex h-full w-[60rem] flex-col items-center justify-center gap-10 tablet:flex-row">
            <div className="redd flex h-full w-full flex-col items-center justify-center">
              <h1 className="redd text-5xl font-bold">100</h1>
              <p className="redd font-medium">Project Completed</p>
            </div>
            <div className="redd flex h-full w-full flex-col items-center justify-center">
              <h1 className="text-5xl font-bold">10+</h1>
              <p className="font-medium">Years of experience</p>
            </div>
          </div>
          <div className="redd flex h-full w-full flex-col items-center justify-start gap-10 px-10 tablet:p-0">
            <div className="w-full">
              <p className=" split-text-sum  overflow-hidden text-sm capitalize desktop:text-2xl">
                {/* <p className="overflow-hidden"> */}
                  excels in providing exceptional web services. With our
                  expertise in hosting, server management, and web design
                  solutions, we ensure reliable performance and seamless online
                  experiences. Experience our industry-leading services for
                  yourself and witness the difference
                {/* </p> */}
              </p>
            </div>
            <div className="redd flex h-10 w-full items-center justify-start gap-5 py-2">
              <Button variant={"anubit"} className="Btn1">
                Get a Quate
              </Button>
              <Button variant={"outline"} className="Btn2 border-blue-500">
                Let's Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
