"use client";
import React, { useEffect } from "react";
import { Button } from "./button";
const ScrollTop = () => {
//   useEffect(() => {
//     const GoToTop = () => {
//       window.scrollTo({
//         top: 10,
//         behavior: "smooth",
//       });
//     };
//   });
  return (
    <div className="redd fixed bottom-5 right-10">
      <Button onClick={() => GoToTop()} variant={"anubit"} size={"icon"}>
        Top
      </Button>
    </div>
  );
};

export default ScrollTop;
