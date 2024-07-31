import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogIn = () => {
  return (
    <div className="z-[9999] flex h-screen w-screen items-center justify-center">
      <div className="redd flex h-[45rem] w-[30rem] flex-col items-center justify-around gap-5 rounded-xl bg-slate-100">
        <div>
          <Image
            src={"/assets/Anubit_SVG.svg"}
            width={200}
            height={100}
            alt="anubit logo"
          />
        </div>
        <div>
          <form
            action=""
            className="redd flex flex-col items-center justify-center gap-2"
          >
            <Label htmlFor="username" className="w-full pl-2">
              Username
            </Label>
            <Input type="text" id="username" placeholder="" required />
            {/* <Label htmlFor="email" className="pl-2 w-full">Email</Label>
            <Input type="email" id="email" placeholder="" /> */}
            <Label htmlFor="password" className="w-full pl-2">
              Password
            </Label>
            <Input type="password" id="password " placeholder="" required />
            <Button type="submit" className="w-full" variant={"anubit"}>
              Log In{" "}
            </Button>
          </form>
        </div>
        <div className="redd flex h-20 w-full items-center justify-center">
          <p>
            Don't have an account ?{" "}
            <Link href={"/signup"} className="text-blue-800 underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
