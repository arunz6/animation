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
          developer focused on building real-world applications with the MERN
          stack and exploring practical GenAI systems.
        </p>

        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mt-5">
          I learn by building — working across frontend, backend, APIs,
          authentication, databases, and AI integrations rather than just
          following tutorials. Currently pursuing my MCA at SGSITS, Indore,
          I'm strengthening my software engineering and problem-solving skills
          while working toward opportunities in Full-Stack Development, SDE,
          and GenAI.
        </p>
      </div>

      {/* Education + Status Row */}
      <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-10">
        {/* Education */}
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-6">
            Education
          </p>

          {/* MCA */}
          <div className="mb-8">
            <p className="text-white font-medium">
              Master of Computer Applications
            </p>

            <p className="text-gray-400 text-sm mt-1">
              SGSITS, Indore
            </p>

            <p className="text-gray-500 text-sm mt-1">
              2026 – 2028 · Semester 1
            </p>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Currently building a stronger foundation in software engineering,
              problem-solving and full-stack development while pursuing my
              goal of becoming a Full-Stack and GenAI developer.
            </p>
          </div>

          {/* BCA */}
          <div>
            <p className="text-white font-medium">
              Bachelor of Computer Applications
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Information Technology · Vikrant University, Gwalior
            </p>

            <p className="text-gray-500 text-sm mt-1">
              2023 – 2026 · CGPA: 7.79
            </p>
          </div>
        </div>

        {/* Currently */}
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-6">
            Currently
          </p>

          <p className="text-white font-medium">
            Open to Full-Stack / SDE / GenAI Opportunities
          </p>

          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Looking for opportunities where I can work on real-world software,
            contribute as a Full-Stack Developer, and grow toward building
            practical GenAI-powered applications.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "Full-Stack Developer",
              "SDE",
              "GenAI Developer",
              "Internships",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-wider text-white/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hackathon */}
      <div className="reveal border-t border-white/10 pt-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-4">
              Hackathon
            </p>

            <h3 className="text-2xl sm:text-3xl uppercase font-medium tracking-wide text-white">
              AI Customer Support
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Sheryians Cohort Hackathon 2026
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-white/60">
              Team Lead
            </span>

            <span className="px-3 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-white/60">
              Full-Stack Developer
            </span>

            <span className="px-3 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-white/60">
              Team of 3
            </span>
          </div>
        </div>

        {/* Hackathon Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Description */}
          <div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Built an AI-assisted customer support platform that allows
              businesses to onboard their teams and provide customers with
              support through a centralized ticketing system.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mt-5">
              The platform was designed to handle common customer questions
              with AI-assisted responses while giving businesses a structured
              way to manage support requests.
            </p>
          </div>

          {/* Contribution */}
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-5">
              My Contribution
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Landing Page",
                "Authentication",
                "AI Integration",
                "Project Architecture",
                "Frontend Integration",
                "Team Coordination",
                "Task Delegation",
                "Presentation",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-400"
                >
                  <span className="text-[10px] text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-10 pt-7 border-t border-white/10 flex flex-wrap gap-2">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Gemini API",
            "LangChain",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-white/50"
            >
              {tech}
            </span>
          ))}
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