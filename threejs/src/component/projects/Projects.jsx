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
        duration: 0.5,
      },
    );
  });

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "RAG",
  ];

  return (
    <div
      className="w-screen min-h-screen z-40 text-white relative overflow-hidden bg-[#050505]"
      id="sec3"
      ref={mainsec3ref}
    >
      {/* Background Logo */}
      <div
        className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none"
        id="bglogo"
        ref={bglogoref}
      >
        <svg
          width="528"
          height="601"
          viewBox="0 0 528 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[420px] md:w-[520px] opacity-30"
        >
          <path
            opacity="0.1"
            d="M273.246 117.01L414.582 465.632L201.112 297.603L273.246 117.01ZM524.308 545.926L306.901 23.0543C300.707 7.98965 288.594 0 273.215 0C257.836 0 244.838 7.98965 238.613 23.0543L0 596.578H81.6228L176.061 360.118L457.942 587.704C469.293 596.853 477.47 601 488.089 601C509.387 601 528 585.051 528 562.027C528 558.276 526.688 552.33 524.308 545.926Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Main Section */}
      <div className="relative z-30 h-screen w-screen">

        {/* Small Project Number */}
        <div className="absolute top-[12%] left-[10%]">
          <div className="absolute  scale-[120%]  w-[300px] md:w-[30vw] p-7 rounded-xl border border-white/10 bg-white/[0.025] backdrop-blur-md">
          <p className="text-sm md:text-base leading-7 text-white/55 text-center">
            A modern full-stack application built with scalable architecture,
            powerful technologies and a clean, immersive user experience.
          </p>
        </div>
        </div>

       
       

        {/* Project Content */}
        <div className="absolute left-[9%] bottom-[16%] z-30">

          {/* Skills */}
          <div className="flex gap-3 mb-6">
            {skills.slice(3, 6).map((skill) => (
              <span
                key={skill}
                className="w-fit min-w-[100px] px-5 py-2 rounded-full border border-white/10 bg-white/[0.035] backdrop-blur-md text-[9px] font-medium tracking-[0.15em] text-white/60 text-center uppercase"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.8] font-medium tracking-[-0.05em] uppercase">
            MERN
            <br />
            <span className="text-white/90">PROJECT</span>
          </h1>

          {/* Buttons */}
          <div className="flex gap-3 scale-125 mt-8">
            <button className="px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] text-[10px] tracking-[0.15em] uppercase text-white/70 hover:bg-white hover:text-black transition-all duration-300">
              View Github
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] text-[10px] tracking-[0.15em] uppercase text-white/70 hover:bg-white hover:text-black transition-all duration-300">
              Live Website
            </button>
          </div>
        </div>

        {/* Project Image - Bottom Right */}
        <div
          className="absolute right-[3%] bottom-[9%] w-[55vw] md:w-[52vw] lg:w-[50vw] max-w-[800px]"
        >
          {/* Image Glow */}
          <div className="absolute -inset-10 rounded-full bg-white/[0.04] blur-[80px]" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-tl-2xl border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1785655140461-00cedfd2e4b4?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Project"
              className="w-full h-[52vh] object-cover grayscale opacity-80 transition-all duration-700 hover:grayscale-0 hover:opacity-100 hover:scale-[1.02]"
            />

            {/* Image Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;