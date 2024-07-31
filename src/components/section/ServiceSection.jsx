"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { serviecCard } from "@/data/service";
import Card from "@/components/ui/Card";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const ServiceSection = () => {
  const container = useRef();
  useLayoutEffect(()=>{
    let title = new SplitType('.title',{types:"chars"})
    // let ctx = gsap.context(()=>{
    //     let tl = gsap.timeline({
    //       scrollTrigger:{
    //         trigger:container.current,
    //         start:"top 10%",
    //         end:"bottom 30%",
    //         // markers:true,
    //         scrub:true
    //       }
    //     })

    //     tl.from(title.chars,{
    //       y:"100%",
    //       stagger:{amount:.5}
    //     })
    // })
    // return ()=> ctx.revert()
  })
  return (
    <div ref={container} className="redd flex min-h-screen w-screen flex-col items-center justify-center gap-10 p-5">
      <div className="font-extrabold">
        <h1 className="redd title bg-gradient-text text-2xl desktop:text-5xl">
          MEET OUR SERVICE
        </h1>
      </div>
      <div>
        <h1 className="text-center text-3xl font-semibold">
          We offer you all services
          <br />
          about professional IT Services
        </h1>
      </div>
      <div
        ref={container}
        className="redd flex flex-col flex-wrap items-center justify-center gap-5 overflow-hidden tablet:flex-row"
      >
        {serviecCard.map((data, idx) => {
          return <Card key={idx} data={data} Ref={container} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
