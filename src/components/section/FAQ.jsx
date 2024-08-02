import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FAQSheet } from "@/data/FAQ";
const FAQ = () => {
  return (
    <div className="redd flex min-h-96 w-screen flex-col items-center justify-center gap-10 p-5">
      <div className="redd flex h-fit w-full  justify-center">
        <h1 className="text-xl desktop:text-5xl py-5  font-bold bg-gradient-text uppercase">Frequently Asked Questions</h1>
      </div>
      <div className="flex min-h-[50%] w-full flex-col items-center justify-center rounded-lg border px-5 text-2xl tablet:w-[35rem] laptop:w-[40rem] desktop:w-[75rem]">
        {FAQSheet.map((data, idx) => {
          return (
            <Accordion key={idx} type="single" collapsible className="redd w-full">
              <AccordionItem value={data.id}>
                <AccordionTrigger className="text-lg">{data.Q}</AccordionTrigger>
                <AccordionContent className="text-base">{data.ANS}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
