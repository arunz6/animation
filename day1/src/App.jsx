import gsap from "gsap";

function App() {
  async function handleEnter() {
    gsap.fromTo(
      ".title",
      {
        delay: 0.5,
        y: 0,
        duration: 7,
      },
      {
        y: 200,
        delay: 0.5,
        duration: 0.7,
        z: 10,
      },
    );
  }
  async function setfunct() {
    gsap.fromTo(
      ".title",
      { opacity: 0.1 },
      {
        x: 200,
        scale: 1,
        scale: 0.9,
        duration: 1.3,
        ease: "power4.inOut",
        yoyo: true,
        opacity: 1,
        stagger: {
          each: 0.2,
          from: "random",
        },
        onUpdate: () => {
          console.log("frames");
        },
      },
    );
  }

  return (
    <>
      <div className="h-screen flex flex-col  bg-black">
        <h1
          // onMouseEnter={handleEnter}
          onClick={setfunct}
          className=" title text-5xl text-blue-500 font-bold"
        >
          Tailwind Working 🚀
        </h1>
        <h1
          // onMouseEnter={handleEnter}
          onClick={setfunct}
          className=" title text-5xl text-blue-500 font-bold"
        >
          Tailwind Working 🚀
        </h1>
        <h1
          // onMouseEnter={handleEnter}
          onClick={setfunct}
          className=" title text-5xl text-blue-500 font-bold"
        >
          Tailwind Working 🚀
        </h1>
        <h1
          // onMouseEnter={handleEnter}
          onClick={setfunct}
          className=" title text-5xl text-blue-500 font-bold"
        >
          Tailwind Working 🚀
        </h1>
        <h1
          // onMouseEnter={handleEnter}
          onClick={setfunct}
          className=" title text-5xl text-blue-500 font-bold"
        >
          Tailwind Working 🚀
        </h1>
        <h1
          // onMouseEnter={handleEnter}
          onClick={setfunct}
          className=" title text-5xl text-blue-500 font-bold"
        >
          Tailwind Working 🚀
        </h1>
        <h1
          // onMouseEnter={handleEnter}
          onClick={setfunct}
          className=" title text-5xl text-blue-500 font-bold"
        >
          Tailwind Working 🚀
        </h1>
      </div>
    </>
  );
}

export default App;
