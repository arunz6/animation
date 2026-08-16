import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// =====================================================
// ABOUT DATA
// =====================================================

const aboutData = {
  intro: {
    label: "About Me",
    title: "Who I Am",

    description:
      "I'm Arun Rajput, a Full-Stack Developer focused on building real-world applications with the MERN stack and exploring practical GenAI systems.",

    secondary:
      "I learn by building — working across frontend, backend, APIs, authentication, databases and AI integrations. My current focus is Full-Stack Development, GenAI and improving my problem-solving skills.",
  },

  education: {
    degree: "Master of Computer Applications",
    institute: "SGSITS, Indore",
    duration: "2026 – 2028",
  },

  current: {
    title: "Full-Stack + GenAI Developer",
    description:
      "Currently focused on MERN development, GenAI applications, DSA and building real-world projects.",
  },

  hackathon: {
    title: "AI Customer Support",
    event: "Sheryians Cohort Hackathon 2026",
    role: "Team Lead · Full-Stack Developer",

    description:
      "Built a multi-tenant customer support platform with authentication, ticket management and AI-assisted customer support.",
  },

  expertise: [
    {
      title: "Frontend",
      skills: "React.js, Redux, Tailwind CSS, SASS, Three.js, GSAP",
    },
    {
      title: "Backend",
      skills: "Node.js, Express.js, MongoDB, Socket.io, JWT",
    },
    {
      title: "AI / GenAI",
      skills: "LangChain, LangGraph, RAG, Multi-LLM Systems",
    },
    {
      title: "Tools",
      skills: "Git, GitHub, Postman, TypeScript",
    },
  ],
};

// =====================================================
// COMPONENT
// =====================================================

const Secondcomponent = () => {
  const containerRef = useRef(null);

  // ===================================================
  // GSAP — UNCHANGED
  // ===================================================

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
      className="w-full max-w-5xl mx-auto px-6 sm:px-10 py-20 flex flex-col gap-14"
    >
      {/* =================================================
          INTRO
      ================================================= */}

      <div className="reveal">
        <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
          {aboutData.intro.label}
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-wider text-white">
          {aboutData.intro.title}
        </h2>
      </div>

      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <div className="reveal max-w-4xl">
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-7 md:leading-8">
          {aboutData.intro.description}
        </p>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6 md:leading-7 mt-5">
          {aboutData.intro.secondary}
        </p>
      </div>

      {/* =================================================
          EDUCATION + CURRENT
      ================================================= */}

      <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-9">
        {/* EDUCATION */}

        <div>
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-5">
            Education
          </p>

          <p className="text-white text-base md:text-lg font-medium">
            {aboutData.education.degree}
          </p>

          <p className="text-gray-400 text-sm md:text-base mt-2">
            {aboutData.education.institute}
          </p>

          <p className="text-gray-500 text-sm md:text-base mt-1">
            {aboutData.education.duration}
          </p>
        </div>

        {/* CURRENT */}

        <div>
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-5">
            Currently
          </p>

          <p className="text-white text-base md:text-lg font-medium">
            {aboutData.current.title}
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-6 md:leading-7 mt-3">
            {aboutData.current.description}
          </p>
        </div>
      </div>

      {/* =================================================
          HACKATHON
      ================================================= */}

      <div className="reveal border-t border-white/10 pt-9">
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-4">
          Hackathon
        </p>

        <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase font-medium tracking-wide text-white">
          {aboutData.hackathon.title}
        </h3>

        <p className="text-gray-500 text-sm md:text-base mt-2">
          {aboutData.hackathon.event}
        </p>

        <p className="text-gray-400 text-sm md:text-base mt-1">
          {aboutData.hackathon.role}
        </p>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-6 md:leading-7 max-w-3xl mt-6">
          {aboutData.hackathon.description}
        </p>
      </div>

      {/* =================================================
          EXPERTISE
      ================================================= */}

      <div className="reveal border-t border-white/10 pt-9">
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-7">
          What I Work With
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.expertise.map((item) => (
            <div key={item.title}>
              <p className="text-white text-base md:text-lg font-medium mb-2">
                {item.title}
              </p>

              <p className="text-gray-400 text-sm md:text-base leading-6 md:leading-7">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secondcomponent;