import React from "react";
import { motion } from "framer-motion";

const PathVarient = {
  init: {
    pathLength: 0,
    // opacity:0
  },
  anim: {
    pathLength: 1,
    // opacity:1,
    transition:{duration:1.5,ease:"easeInOut"}
  },
};

const SVG = () => {
  return (
    <div>
      <svg
        width="549"
        // height="482"
        viewBox="0 0 549 482"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-40 laptop:w-96 desktop:w-full "}
      >
        <motion.path
          d="M413.457 33.0585C300.277 -73.7522 226.092 162.407 14 475H138.592L332.614 165.347L386.826 360.35H235.603L168.076 475H539L413.457 33.0585Z"
          stroke="white"
          strokeWidth="14"
          variants={PathVarient}
          
          initial='init'
          animate='anim'
        />
      </svg>
    </div>
  );
};

export default SVG;
