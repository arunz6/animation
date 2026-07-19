import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Exper from "../threedmodel/Exper";
import Sectionone from "./homecomponent/Sectionone";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Secondcomponent from "./homecomponent/Secondcomponent";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const canvasWrapperRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#section2",
      start: "bottom bottom", // jab section2 ka bottom, viewport ke bottom tak pahunche
      onEnter: () => {
        gsap.to(canvasWrapperRef.current, { autoAlpha: 0, duration: 0.4 });
      },
      onLeaveBack: () => {
        gsap.to(canvasWrapperRef.current, { autoAlpha: 1, duration: 0.4 });
      },
    });
  }, []);

  return (
    <div className="parent relative w-screen bg-black">
      <div
        ref={canvasWrapperRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Canvas>
          <Exper />
        </Canvas>
      </div>

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
          WebkitBackdropFilter: "blur(var(--blur-bg))",
        }}
        className="relative z-10 min-h-[120vh] w-screen flex flex-col items-center justify-center text-white bg-black/40 transition-colors duration-300"
      >
        <Secondcomponent />
      </div>
    </div>
  );
};

export default Home;