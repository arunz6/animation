import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectdata from "../../assets/projectdata";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
  const mainsec3ref = useRef(null);
  const bglogoref = useRef(null);

  // Dynamic refs for every project
  const projectRefs = useRef([]);

  useGSAP(
    () => {
      const projects = projectRefs.current;

      // -----------------------------
      // MAIN PROJECT TIMELINE
      // -----------------------------

      const tl = gsap.timeline({
        // Shared defaults so every tween eases consistently
        // unless a step explicitly overrides it below.
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: mainsec3ref.current,

          // Pin entire project section
          start: "top top",

          // More projects = more scrolling
          end: () => `+=${projects.length * window.innerHeight * 3}`,

          pin: true,
          scrub: 1.2, // slightly higher scrub = less jitter on fast scroll

          anticipatePin: 1,

          // Uncomment while developing
          // markers: true,
        },
      });

      // -----------------------------
      // EACH PROJECT
      // -----------------------------

      projects.forEach((project, index) => {
        const projectNumber = project.querySelector(".project-number");
        const description = project.querySelector(".project-description");
        const features = project.querySelectorAll(".project-feature");
        const techs = project.querySelectorAll(".project-tech");
        const titleLetters = project.querySelectorAll(".title-letter");
        const image = project.querySelector(".project-image");
        const buttons = project.querySelector(".project-buttons");

        // --------------------------------
        // INITIAL STATE
        // --------------------------------

        gsap.set(project, { opacity: 0 });
        gsap.set(description, { opacity: 0, x: 200 });
        gsap.set(features, { opacity: 0, y: 15 });
        gsap.set(techs, { opacity: 0, y: 20 });
        gsap.set(titleLetters, { opacity: 0, y: 60 });
        gsap.set(image, { opacity: 0, scale: 0.75 });
        gsap.set(buttons, { opacity: 0, y: 30 });

        // --------------------------------
        // PROJECT ENTER
        // --------------------------------

        tl.to(project, { opacity: 1, duration: 0.8, ease: "power1.out" });

        // Description comes from right
        tl.to(
          description,
          { opacity: 1, x: 0, duration: 1.3, ease: "power3.out" },
          "<",
        );

        // Image appears + scales
        tl.to(
          image,
          { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
          "<",
        );

        // Project number
        tl.to(projectNumber, { opacity: 1, duration: 0.3 }, "<");

        // Features one by one
        tl.to(
          features,
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.35",
        );

        // Tech stack one by one
        tl.to(
          techs,
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.25",
        );

        // Title letter by letter
        tl.to(
          titleLetters,
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            duration: 0.3,
            ease: "power2.out",
          },
          "<",
        );

        // Buttons appear last
        tl.to(
          buttons,
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.1",
        );

        // --------------------------------
        // HOLD PROJECT
        // --------------------------------
        // This is VERY important.
        // User gets time to see the whole project.

        tl.to({}, { duration: 0.4 });

        // --------------------------------
        // PROJECT EXIT
        // --------------------------------

        if (index !== projects.length - 1) {
          tl.to(project, { opacity: 0, duration: 0.7, ease: "power2.in" });

          tl.to(
            image,
            { scale: 1.08, opacity: 0, duration: 0.7, ease: "power2.in" },
            "<",
          );

          tl.to(
            description,
            { x: 80, opacity: 0, duration: 0.8, ease: "power2.in" },
            "<",
          );
        }
      });
    },
    { scope: mainsec3ref },
  );

  return (
    <section
      ref={mainsec3ref}
      id="sec3"
      className="relative w-full h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =====================================
          PROJECTS
      ===================================== */}

      <div className="absolute inset-0 z-20">
        {projectdata.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className="absolute inset-0 w-full h-full opacity-0"
          >
            {/* =================================
                DESCRIPTION
            ================================= */}

            <div className="project-description absolute top-[15%] overflow-y-auto right-[7%] w-[85%] sm:w-[70%] md:left-[10%] md:h-[20rem] h-[30vh] max-h-[20rem] max-h-[42vh] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent]  [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/15 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/30  md:w-[40rem] p-5 md:p-7 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl z-30">
              {/* Description */}
              {/* text size bumped: md:text-base -> md:text-lg */}
              <p className="text-sm md:text-lg leading-6 md:leading-8 text-white/60 mb-5">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {project.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    // text size bumped: md:text-xs -> md:text-sm
                    className="project-feature flex gap-3 text-[10px] md:text-sm text-white/45"
                  >
                    <span className="text-white/20">
                      {String(featureIndex + 1).padStart(2, "0")}
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================
                PROJECT IMAGE
            ================================= */}

            <div className="absolute right-[3%] md:right-[5%] bottom-[10%] md:bottom-[8%] w-[92%] sm:w-[75%] md:w-[55%] max-w-[800px] z-10">
              {/* Glow */}
              <div className="absolute -inset-10 rounded-full bg-white/[0.035] blur-[80px]" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-tl-2xl rounded-br-2xl border border-white/10 shadow-2xl">
                <img
                  className="project-image w-full h-[42vh] md:h-[50vh] object-cover grayscale opacity-0 brightness-[0.65] md:brightness-[0.75]"
                  src={project.image}
                  alt={project.title}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* =================================
                PROJECT CONTENT
            ================================= */}

            <div className="absolute left-[6%] md:left-[9%] bottom-[10%] md:bottom-[13%] z-40 max-w-[85%] md:max-w-[55%]">
              {/* =================================
                  TECH STACK
              ================================= */}

              <div className="flex flex-wrap gap-2 md:gap-3 mb-5">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    // text size bumped: md:text-[9px] -> md:text-xs
                    className="project-tech px-4 md:px-5 py-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-[8px] md:text-xs tracking-[0.15em] uppercase text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* =================================
                  TITLE
              ================================= */}

              <h1 className="flex flex-wrap text-[clamp(3rem,7vw,8rem)] leading-[0.85] font-medium tracking-[-0.05em] uppercase max-w-full">
                {project.title.split("").map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    className="title-letter inline-block opacity-0"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>

              {/* =================================
                  BUTTONS
              ================================= */}

              <div className="project-buttons flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  // text size bumped: md:text-[10px] -> md:text-xs
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 bg-white/[0.04] text-[8px] md:text-xs tracking-[0.15em] uppercase text-white/70 hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Github
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  // text size bumped: md:text-[10px] -> md:text-xs
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 bg-white/[0.04] text-[8px] md:text-xs tracking-[0.15em] uppercase text-white/70 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Live Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;