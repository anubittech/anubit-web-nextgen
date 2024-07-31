"use client";
import Link from "next/link";
import AnubitLogo from "../../public/assets/Anubit_SVG.svg";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { route, About, Service } from "@/data/navigation";
import { AnimatePresence, motion } from "framer-motion";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // useEffect(() => {
  //   const Content = document.querySelector(".MainContent");
  //   if (isActive) {
  //     // console.log(typeof isActive)
  //     Content.style.opacity = ".2";
  //     // document.body.opacity = ".3";
  //     // console.log("hit hidden");
  //   } else {
  //     Content.style.opacity = "1";
  //     // document.body.opacity = "1";
  //     // console.log("hit auto");
  //   }
  // });

  return (
    <div className="fixed z-[9999] h-20 w-full">
      <div className="hidden h-full w-full items-center justify-around bg-white/65 text-black shadow-md backdrop-blur-md transition-all tablet:flex tablet:flex-row">
        <div className="redd">
          <h1 className="logo text-3xl font-bold text-blue-600 tablet:text-5xl">
            <Link href={"/"}>
              <Image
                src={AnubitLogo}
                alt="Anubit Logo"
                width={150}
                height={100}
              />
            </Link>
          </h1>
        </div>

        <div className="redd hidden items-center justify-around gap-10 text-xl tablet:flex">
          {route.map((data, idx) => {
            return (
              <div key={idx} className="transition-colors hover:text-blue-700">
                <Link href={data.route}>{data.lable}</Link>
              </div>
            );
          })}
        </div>
        <div className="redd hidden rounded-lg bg-gradient-to-r from-blue-800 to-blue-500 tablet:block">
          <button className="p-2 px-2 text-2xl text-white">
            <Link href={"/signup"}>Get a Quate</Link>
          </button>
        </div>
      </div>
      <div className="redd flex h-full w-full items-center justify-around bg-white/65 text-black shadow-md backdrop-blur-md tablet:hidden">
        <div
          onClick={() => setIsActive(!isActive)}
          className="redd z-[100] block size-10 tablet:hidden"
        >
          {isActive ? (
            <MdClose className="size-10 text-white" />
          ) : (
            <MdMenu className="size-10" />
          )}
        </div>

        {/* <div className="hidden"></div> */}
        {/* {isActive && <Navbar active={isActive} setActive={setIsActive} />} */}
        <div className="redd">
          <h1 className="logo text-3xl font-bold text-blue-600 tablet:text-5xl">
            <Link href={"/"}>
              <Image
                src={AnubitLogo}
                alt="Anubit Logo"
                width={150}
                height={100}
              />
            </Link>
          </h1>
        </div>
        <div className="redd size-10">
          <Link href={"/signup"}>
            <FaRegUser className="h-full w-full p-2" />
          </Link>
        </div>
        <Navbar active={isActive} setActive={setIsActive} />
      </div>
    </div>
  );
};

const menu = {
  init: {
    width: "0rem",
    transition: { duration: 1.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  anim: {
    width: "24rem",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideitem = {
  init: {
    translateX: "-20rem",
  },
  anim: (i) => ({
    translateX: "10rem",
    transition: {
      duration: 0.75,
      delay: 0.1 * i,
      ease:"easeInOut"
    },
  }),
  exit: (i) => ({
    translateX: "-15rem",
    transition: {
      duration: 0.3,
      delay: 0.1 * -i,
       ease:"easeInOut"
    },
  }),
};
const Navbar = ({ active, setActive }) => {
  return (
    <motion.div
      variants={menu}
      initial="init"
      animate={active ? "anim" : "init"}
      className="fixed left-0 top-0 z-[99] flex h-screen origin-left items-center justify-center bg-black"
    >
      <div className="flex h-full w-full items-start justify-center bg-blue-600 pt-20">
        <div className="redd flex h-96 w-full flex-col items-start justify-around">
          <AnimatePresence mode="wait">
          {/* <motion.h1  className="uppercase  text-white text-2xl red w-full text-center">navigations</motion.h1> */}
            {route.map((data, i) => {
              return (
                <motion.div
                  variants={slideitem}
                  initial="init"
                  animate={active ? "anim" : "exit"}
                  exit={'exit'}
                  custom={i}
                  onClick={() => setActive(!active)}
                  className={cn(
                    "red w-fit text-5xl text-white transition-transform delay-200 duration-500",
                    {
                      // "translate-x-24":active
                    },
                  )}
                  // style={{
                  //   display: active ? "" :"none"
                  // }}
                  key={i}
                >
                  <Link className="redd w-full " href={data.route}>
                    {data.lable}
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
