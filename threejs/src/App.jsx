import { Canvas } from "@react-three/fiber";
import Exper from "./component/threedmodel/Exper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <div className="main z-0 min-h-screen w-full bg-black overflow-x-hidden text-white ">
        <div className="navbar fixed top-0 left-3 z-30 text-center w-screen text-white">
          <Navbar />
          
        </div>
        <Home />
      </div>
    </>
  );
}

export default App;
