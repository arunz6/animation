import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".box", {
  width: 200,
  duration: 1,
  ease: "Power4.out",
  scrollTrigger: {
    trigger: ".box",
    start: "top 40%",
    end: "top 20%",
    scrub: 1,
  },
  scrollTrigger: {
    trigger: ".page1",
    start: "top top%",
    end: "top -20%",
    scrub: 1,
    pin: true,
  },
}).from(
  ".text",

  {
    opacity: 1,
    scale: 1,
    x: 200,

    scrollTrigger: {
      trigger: ".text",
      start: "top 40%",
      end: "top 20%",
      scrub: 1,
    },
  },
  "<",
  
);

const Home = () => {
  return (
    <>
      <div className="page  h-screen flex justify-center items-center border-2 border-white w-full  bg-black">
        <div className="box h-30 w-30 flex justify-center items-center uppercase bg-pink-300">
          <h1 className="text font-extrabold overflow-hidden   ">hello</h1>
        </div>
      </div>
      <div className="page1 h-screen flex justify-center items-center border-2 border-white w-full  bg-black">
        <div className="box h-30 w-30 flex justify-center items-center uppercase bg-pink-300">
          <h1 className="text font-extrabold overflow-hidden   ">hello</h1>
        </div>
      </div>
      <div className="page h-screen flex justify-center items-center border-2 border-white w-full  bg-black">
        <div className="box h-30 w-30 flex justify-center items-center uppercase bg-pink-300">
          <h1 className="text font-extrabold overflow-hidden   ">hello</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
