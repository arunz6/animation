import gsap from "gsap";

const Home = () => {
  async function unlockanimation() {
    const tl = gsap.timeline();

    tl.to(".textlock", {
      y: -5000,
      duration: 0.3,
      stagger: {
        each: 0.1,
        from: "start",
      },
    })
      .to(".blackpart", {
        y: -5000,
        duration: 1.8,
      })
      .fromTo(
        ".card",
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1.1,
          duration: 0.6,
        },"-=0.1"
      )
      .from(
        ".letter",
        {
          y: 200,
          stagger: {
            each: 0.01,
            from: "start",
          },
        },
        "-=1",
      );
  }

  return (
    <>
      <div
        onClick={unlockanimation}
        className="blackpart absolute h-screen w-screen bg-black flex justify-center items-center text-white text-6xl  "
      >
        <span className=" textlock overflow-hidden line-clamp-1  text-gray-600">
          {" "}
          devlpoer...
        </span>
      </div>
      <div className="mainhomepage h-screen w-screen bg-gray-900 flex justify-center items-center text-white ">
        <div className="card h-1/2 w-1/2 bg-gray-600 rounded-4xl flex-col  uppercase text-center flex items-center justify-center ">
          <h1 className="text-7xl line-clamp-1 overflow-hidden">
            <span className="letter inline-block ">h</span>
            <span className="letter inline-block ">e</span>
            <span className="letter inline-block ">l</span>
            <span className="letter inline-block ">l</span>
            <span className="letter inline-block ">o</span>
            <span className="letter inline-block ">&nbsp;</span>
            <span className="letter inline-block ">d</span>
            <span className="letter inline-block ">e</span>
            <span className="letter inline-block ">v</span>
            <span className="letter inline-block ">e</span>
            <span className="letter inline-block ">l</span>
            <span className="letter inline-block ">o</span>
            <span className="letter inline-block ">p</span>
            <span className="letter inline-block ">e</span>
            <span className="letter inline-block ">r</span>
          </h1>

          <h4 className="line-clamp-1 overflow-hidden">
            <span className="letter inline-block ">h</span>
            <span className="letter inline-block ">o</span>
            <span className="letter inline-block ">w</span>
            <span className="letter inline-block ">&nbsp;</span>
            <span className="letter inline-block ">y</span>
            <span className="letter inline-block ">o</span>
            <span className="letter inline-block ">u</span>
            <span className="letter inline-block ">r</span>
            <span className="letter inline-block ">&nbsp;</span>
            <span className="letter inline-block ">d</span>
            <span className="letter inline-block ">e</span>
            <span className="letter inline-block ">v</span>
            <span className="letter inline-block ">e</span>
            <span className="letter inline-block ">l</span>
            <span className="letter inline-block ">o</span>
            <span className="letter inline-block ">p</span>
            <span className="letter inline-block ">m</span>
            <span className="letter inline-block ">e</span>
            <span className="letter inline-block ">n</span>
            <span className="letter inline-block ">t</span>
            <span className="letter inline-block ">&nbsp;</span>
            <span className="letter inline-block ">j</span>
            <span className="letter inline-block ">o</span>
            <span className="letter inline-block ">u</span>
            <span className="letter inline-block ">r</span>
            <span className="letter inline-block ">n</span>
            <span className="letter inline-block ">e</span>
            <span className="letter inline-block ">y</span>
            <span className="letter inline-block ">&nbsp;</span>
            <span className="letter inline-block ">g</span>
            <span className="letter inline-block ">o</span>
            <span className="letter inline-block ">i</span>
            <span className="letter inline-block ">n</span>
            <span className="letter inline-block ">g</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;
