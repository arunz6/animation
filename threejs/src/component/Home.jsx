import React from "react";
import { Canvas } from "@react-three/fiber";
import Exper from "./Exper";
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
        }}
      >
        <Exper />
      </Canvas>
      <div
        id="section1"
        className=" border-2 border-amber-50 min-h-[100vh] z-20  w-screen"
      ></div>
      <div
        id="section2"
        className=" border-2 border-amber-50 min-h-[100vh] z-20  w-screen"
      ></div>
    </div>
  );
};

export default Home;
