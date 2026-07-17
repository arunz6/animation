import React from "react";
import { Canvas } from "@react-three/fiber";
import Exper from "../threedmodel/Exper";
import Sectionone from "./homecomponent/Sectionone";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Secondcomponent from "./homecomponent/Secondcomponent";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 1.5,
  //     effects: true, // data-speed, data-lag attributes ke liye
  //   });
  // });

  return (
    <div className="parent  w-screen  relative   bg-black">
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Exper />
      </Canvas>
      <div
        id="section1"
        className="relative z-10 min-h-[100vh] w-screen flex flex-col items-center justify-center text-white bg-black/40 transition-colors duration-300"
      >
        <Sectionone />
      </div>
      <div
        id="section2"
        style={{
          "--blur-bg": "0px",
          backdropFilter: "blur(var(--blur-bg))",
          WebkitBackdropFilter: "blur(var(--blur-bg))", // Safari Browser Compatibility
        }}
        className="relative z-10 min-h-[100vh] w-screen flex flex-col items-center justify-center text-white bg-black/40 transition-colors duration-300"
      >
      <Secondcomponent/>
      </div>
    </div>
  );
};

export default Home;
