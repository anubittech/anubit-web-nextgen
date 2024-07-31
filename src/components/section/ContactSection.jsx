"use client";
import React, { use, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  // const  [subject,setSubject] = useState("")
  const [message, setMessage] = useState("");

  return (
    <div className="redd flex min-h-[35rem] w-screen flex-col items-center justify-center gap-10 bg-gradient-to-t from-blue-950 from-50% to-blue-500 tablet:flex-row tablet:bg-gradient-to-r">
      <div className="desq redd relative z-[99] m-5 flex h-96 w-96 flex-col items-start justify-center gap-5 text-white tablet:w-[50%]">
        <div className="pl-10 text-3xl font-black">
          <h1>NEED A PROJECT?</h1>
        </div>
        <div className="blue-ball"></div>
        <div className="text-2xl font-semibold">
          <h1>
            To make requests for further information, <br /> contact us via our
            social channels.
          </h1>
        </div>
        <div>
          <h1>We just need a couple of hours!</h1>
        </div>
        <div>
          <h1>
            No more than 2 working days since receiving your issue ticket.
          </h1>
        </div>
      </div>
      <div className="c_form redd my-5 flex h-full w-[25rem] items-center justify-center">
        <form action="" className="flex w-full flex-col gap-3">
          <Label htmlFor="name" className="px-1 text-white">
            Your Name
          </Label>
          <Input
            type="text"
            id="name"
            required
            className="border bg-transparent text-white placeholder:text-gray-300"
            placeholder="Your Name"
          />
          <Label htmlFor="email" className="px-1 text-white">
            Your Email
          </Label>
          <Input
            type="email"
            id="email"
            required
            className="border bg-transparent text-white placeholder:text-gray-300"
            placeholder="Your Email"
          />
          <Label htmlFor="number" className="px-1 text-white">
            Your Number
          </Label>
          <Input
            type="text"
            id="number"
            required
            className="border bg-transparent text-white placeholder:text-gray-300"
            // inputMode="text"
            color="white"
            placeholder="Your Number"
          />
          <Label htmlFor="text" className="px-1 text-white">
            Your Name
          </Label>
          <Textarea
            id="text"
            className="border bg-transparent text-white placeholder:text-gray-300"
            placeholder="Your message here"
          />
          <Button className="text-2xl" variant={"anubit"} size={"lg"} type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
