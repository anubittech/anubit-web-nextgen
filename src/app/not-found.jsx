'use client'
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

import React from "react";
import { Button } from "../components/ui/button";
import { redirect } from "next/navigation";
const NotFound = () => {
  return (
    <div className="flex-sc redd flex-col">
      <div className="redd flex h-96 w-full flex-col items-center justify-center gap-5 pt-10">
        <h1 className="redd text-9xl font-bold">404</h1>
        <h1 className="text-xl tablet:text-2xl font-bold">I think you are lost in your imagination</h1>
        <h1 className="text-2xl">Find your root</h1>
      </div>
      <div className="redd flex h-36 w-full items-center justify-center">
        <Button
      // onClick={redirect}
          variant={"outline"}
          className="flex items-center justify-start gap-1 border border-blue-700"
        >
          <Link href={'/'} className="w-full flex">
            <IoMdArrowBack className="size-6" />
            <p>Home</p>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
