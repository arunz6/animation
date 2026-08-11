import { Canvas } from "@react-three/fiber";
import Exper from "./component/sharedcomponents/threedmodel/Exper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Home from "./component/home/Home";
import Navbar from "./component/sharedcomponents/navbar/Navbar";
import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <div className="main z-0 min-h-screen w-full bg-black overflow-x-hidden text-white ">
        <div className="navbar fixed top-0 left-3 z-30 text-center w-screen text-white">
          {/* static navbar  */}
          <Navbar />
        </div>
        <Home />
        <Projects />


        <Footer/>
      </div>
    </>
  );
}

export default App;
