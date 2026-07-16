import { Canvas } from "@react-three/fiber";
import Exper from "./component/Exper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Home from "./component/Home";
gsap.registerPlugin(ScrollTrigger);

function App() {
  
  return (
    <>
   <div className="main h-screen w-screen ">
     <Home/>
   </div>
    </>
  );
}

export default App;
