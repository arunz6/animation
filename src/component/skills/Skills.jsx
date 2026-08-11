import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const skillGroups = [
  {
    label: "Tools & Technologies",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Redux.js",
      "Tailwind CSS",
      "HTML5",
      "CSS",
      "SASS",
      "Three.js",
      "GSAP",
      "LangChain",
      "LangGraph",
      "Socket.io",
      "JWT",
      "Mongoose",
      "Zod",
      "Axios",
      "Nodemon",
      "Postman",
      "GitHub",
      "Render",
    ],
  },
  {
    label: "Industry Knowledge",
    skills: [
      "Chrome Extension Development",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "REST APIs",
      "Document Object Model (DOM)",
    ],
  },
  {
    label: "Interpersonal Skills",
    skills: ["Leadership", "Teamwork", "Hackathons"],
  },
  {
    label: "Other Skills",
    skills: ["Digital Authentication", "Web Servers"],
  },
];

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const els = containerRef.current.querySelectorAll(".reveal");

      gsap.from(els, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,

        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      id="skills"
      className="relative z-10 w-screen bg-black/40 text-white"
    >
      <div
        ref={containerRef}
        className="w-full max-w-5xl mx-auto px-6 sm:px-10 py-20 flex flex-col gap-16"
      >
        {/* Section Header */}
        <div className="reveal">
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
            Skills
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-wider text-white">
            What I Bring
          </h2>
        </div>

        {/* Skill Groups */}
        <div className="flex flex-col gap-12">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="reveal border-t border-white/10 pt-10"
            >
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-6">
                {group.label}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 md:px-5
                      py-2
                      rounded-full
                      border border-white/15
                      bg-white/[0.03]
                      backdrop-blur-md
                      text-[10px] md:text-[11px]
                      tracking-[0.1em]
                      uppercase
                      text-white/60
                      hover:bg-white
                      hover:text-black
                      hover:border-white
                      transition-all
                      duration-300
                      cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;