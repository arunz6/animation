import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Projects = () => {
  const bglogoref = useRef(null);
  const mainsec3ref = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec3",

        start: "top top",
        end: "bottom center",

        markers: true,
      },
    });

    tl.fromTo(
      bglogoref.current,
      {
        opacity: 0,
        scale: 0.7,
       
      },
      {
        opacity: 1,
        scale: 1,
         duration:0.5
      },
    );
  });
  return (
    <div
      className="w-screen min-h-[100vh]  z-40 text-black relative    "
      id="sec3"
      ref={mainsec3ref}
    >
      {/* background logo  */}
      <div
        className="bg flex absolute h-full w-full flex justify-center  items-center bg-transparent  "
        id="bglogo"
        ref={bglogoref}
      >
        <svg
          width="528"
          height="601"
          viewBox="0 0 528 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M273.246 117.01L414.582 465.632L201.112 297.603L273.246 117.01ZM524.308 545.926L306.901 23.0543C300.707 7.98965 288.594 0 273.215 0C257.836 0 244.838 7.98965 238.613 23.0543L0 596.578H81.6228L176.061 360.118L457.942 587.704C469.293 596.853 477.47 601 488.089 601C509.387 601 528 585.051 528 562.027C528 558.276 526.688 552.33 524.308 545.926Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Projects;
