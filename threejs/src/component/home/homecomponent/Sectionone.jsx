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
      duration: 0.4,
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

      <div className="LINKTAGS z-10 fixed right-0 top-[18%] sm:top-[20%] bg-gray-950 flex flex-col gap-[0.7rem] border-2 border-r-0 rounded-l-xl text-white origin-right p-1 scale-[0.56] sm:scale-[0.92] md:scale-100 lg:scale-110">
        {/* LinkedIn */}
        <a href="" className="px-2 py-1 hover:text-gray-400 transition-colors">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.4149 0C1.35686 0 0 1.40549 0 3.26275C0 5.0698 1.30588 6.52392 3.31373 6.52392C5.47216 6.52392 6.82745 5.0698 6.77725 3.26275C6.77725 1.40549 5.47294 0 3.4149 0ZM22.6886 8.63373C19.2251 8.63373 17.1176 10.6408 16.2643 12.0463H16.1647L15.8627 9.08549H10.2918C10.342 10.9929 10.4416 13.2016 10.4416 15.8118V30.1161H16.8659V18.0188C16.8659 17.4165 16.9161 16.8149 17.0667 16.3631C17.5686 15.1584 18.6235 13.9027 20.3804 13.9027C22.7396 13.9027 23.6431 15.7608 23.6431 18.4714V30.1161H30.1184V17.7192C30.1184 11.4949 26.9051 8.63373 22.6886 8.63373ZM0.152156 9.08549V30.1161H6.57647V9.08549H0.152156Z"
              fill="#FEFEFE"
            />
          </svg>
        </a>

        {/* Mail */}
        <a href="" className="px-2 py-1 hover:text-gray-400 transition-colors">
          <svg
            width="34"
            height="27"
            viewBox="0 0 34 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 0H3.33333C1.49167 0 0 1.49167 0 3.33333V23.3333C0 25.175 1.49167 26.6667 3.33333 26.6667H30C31.8417 26.6667 33.3333 25.175 33.3333 23.3333V3.33333C33.3333 1.49167 31.8417 0 30 0ZM30 7.06L16.6667 15.1967L3.33333 7.06V3.33333H30V7.06Z"
              fill="white"
            />
          </svg>
        </a>

        {/* GitHub */}
        <a
          id="github"
          href=""
          className="px-2 py-1 hover:text-gray-400 transition-colors"
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4704 0C7.37496 0 0 7.38065 0 16.4855C0 23.769 4.71954 29.9485 11.2632 32.1283C12.0866 32.2812 12.3891 31.7708 12.3891 31.3355C12.3891 30.9424 12.3738 29.6436 12.3664 28.266C7.78429 29.2634 6.81769 26.3212 6.81769 26.3212C6.0682 24.4159 4.98879 23.909 4.98879 23.909C3.49416 22.8858 5.10138 22.9066 5.10138 22.9066C6.75529 23.0232 7.62588 24.6057 7.62588 24.6057C9.0952 27.1259 11.4792 26.3974 12.4192 25.9761C12.5671 24.9108 12.9937 24.1831 13.4648 23.7716C9.80651 23.3554 5.96106 21.9415 5.96106 15.6246C5.96106 13.825 6.6043 12.3542 7.65774 11.1999C7.48689 10.7846 6.92308 9.10772 7.81768 6.83707C7.81768 6.83707 9.20059 6.39373 12.3474 8.52679C13.6616 8.16163 15.0704 7.97862 16.4702 7.97206C17.8699 7.97862 19.2801 8.16163 20.5962 8.52679C23.74 6.39394 25.1211 6.83685 25.1211 6.83685C26.0175 9.10728 25.4539 10.7841 25.2826 11.1993C26.3386 12.3537 26.9775 13.8244 26.9775 15.624C26.9775 21.9563 23.1246 23.3501 19.4572 23.7583C20.0479 24.2702 20.5744 25.2733 20.5744 26.8115C20.5744 29.0172 20.5556 30.7928 20.5556 31.3355C20.5556 31.7745 20.8517 32.2881 21.6865 32.1265C28.228 29.9443 32.941 23.767 32.941 16.4858C32.941 7.38065 25.5658 0 16.4704 0Z"
              fill="#FEFEFE"
            />
          </svg>
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
