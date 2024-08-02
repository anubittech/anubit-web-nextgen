"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
const Scroll = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
};

export default Scroll;