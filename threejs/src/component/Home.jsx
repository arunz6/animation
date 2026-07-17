import React from "react";
import { Canvas } from "@react-three/fiber";
import Exper from "./Exper";
import Sectionone from "./homecomponent/Sectionone";

const Home = () => {
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
        {/* Yeh content bilkul sharp aur clear rahega! */}
        <h1 className="text-5xl font-bold select-none text-amber-50 drop-shadow-md">
          Scroll down to blur the 3D model background!
        </h1>
      </div>
    </div>
  );
};

export default Home;
