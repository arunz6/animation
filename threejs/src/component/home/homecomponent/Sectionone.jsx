import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Sectionone = () => {
  const fullstackref = useRef(null);
  const devloperref = useRef(null);
  const peraref = useRef(null);
  useGSAP(() => {
    // ✅ SplitText ab useGSAP ke andar hai — refs guaranteed attached hain
    const splitFull = new SplitText(fullstackref.current, { type: "chars" });
    const splitDev = new SplitText(devloperref.current, { type: "chars" });
    const splitpera = new SplitText(peraref.current, { type: "words" });

    const tl = gsap.timeline();
    tl.from(splitFull.chars, {
      y: 40,
      opacity: 0,
      duration: 0.4 ,
      ease: "power3.out",
      stagger: 0.05,
    });

    tl.from(splitDev.chars, {
      y: 40,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
      stagger: 0.05,
     
    });
    gsap.from(splitpera.words, {
      opacity: 0,
      duration: 4,
      ease: "power3.out",
      stagger: 0.05,
    });

    // ✅ Cleanup — component unmount pe splits revert honge
    return () => {
      splitFull.revert();
      splitDev.revert();
    };
  }, []); // empty dependency array — sirf ek baar chale mount pe

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="fullstack relative left-4 sm:left-6 md:left-10 top-[32%] sm:top-[36%] md:top-[40%]">
        <h1
          className="fullstacktitle text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-wider text-white"
          ref={fullstackref}
        >
          fullstack
        </h1>
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-gray-600"
          ref={devloperref}
        >
          developer
        </h1>
      </div>

      <div className="LINKTAGS z-10 bg-gray-950 fixed right-0 top-[18%] sm:top-[20%] p-1 sm:p-1.5 flex flex-col border-2 border-r-0 rounded-l-xl text-white text-xs sm:text-sm md:text-base scale-100 sm:scale-115 md:scale-125 lg:scale-140 origin-right">
        <a href="" className="px-2 py-1 hover:text-gray-400 transition-colors">
          linkdin
        </a>
        <a href="" className="px-2 py-1 hover:text-gray-400 transition-colors">
          github
        </a>
        <a href="" className="px-2 py-1 hover:text-gray-400 transition-colors">
          mail
        </a>
        <a href="" className="px-2 py-1 hover:text-gray-400 transition-colors">
          leetcode
        </a>
      </div>

      <div className="detailsec absolute right-[5%] sm:right-[8%] md:right-[10%] bottom-[10%] sm:bottom-[9%] md:bottom-[12%] w-[85%] sm:w-[55%] md:w-[35%] lg:w-[25%] xl:w-[20%] text-right">
        <p
          ref={peraref}
          className="text-gray-400 text-xs sm:text-sm leading-relaxed"
        >
          I build resilient, high-performance web applications using the MERN
          ecosystem. Crafting seamless user experiences from database
          architecture to frontend polish.
        </p>
      </div>
    </div>
  );
};

export default Sectionone;
