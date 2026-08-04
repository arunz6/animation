import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Secondcomponent = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const els = containerRef.current.querySelectorAll(".reveal");

    gsap.from(els, {
      y: 40,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl mx-auto px-6 sm:px-10 py-20 flex flex-col gap-16"
    >
      {/* Section Tag */}
      <div className="reveal">
        <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
          About Me
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-wider text-white">
          Who I Am
        </h2>
      </div>

      {/* Intro Paragraph */}
      <div className="reveal max-w-3xl">
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          I'm <span className="text-white">Arun Rajput</span>, a full-stack
          developer who believes the best way to learn is to build — not just
          follow tutorials, but ship real, working systems. I work primarily
          with the MERN stack, but what excites me most is pushing beyond
          typical CRUD apps into agentic AI systems — building LLM pipelines
          that reason, search the web in real time, and make decisions on their
          own using LangGraph and RAG.
        </p>
      </div>

      {/* Education + Status Row */}
      <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-10">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3">
            Education
          </p>
          <p className="text-white font-medium">
            Bachelor of Computer Applications
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Information Technology · Vikrant University, Gwalior
          </p>
          <p className="text-gray-500 text-sm mt-1">2023 – 2026 · CGPA: 7.79</p>
          <p className="text-gray-400 text-sm mt-3">
            Transitioning into an MCA at SGSITS, Indore.
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3">
            Currently
          </p>
          <p className="text-white font-medium">
            Open to Full-Stack / SDE Roles
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Sharpening problem-solving through DSA, and always looking for the
            next hard problem worth solving.
          </p>
        </div>
      </div>

      {/* Expertise Grid */}
      <div className="reveal border-t border-white/10 pt-10">
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-6">
          What I Work With
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-white font-medium mb-2">Frontend</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              React.js, Redux, Tailwind CSS, SASS, Three.js, GSAP
            </p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">Backend</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Node.js, Express.js, MongoDB, Socket.io, JWT Auth
            </p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">AI / GenAI</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              LangChain, LangGraph, RAG, Multi-LLM Orchestration
            </p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">Tools</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Git, GitHub, Postman, TypeScript
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondcomponent;
