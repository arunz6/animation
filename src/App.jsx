import { Canvas } from "@react-three/fiber";
import Exper from "./component/sharedcomponents/threedmodel/Exper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./component/home/Home";
import Navbar from "./component/sharedcomponents/navbar/Navbar";
import Projects from "./component/projects/Projects";
import Skills from "./component/skills/Skills";
import Footer from "./component/footer/Footer";


gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="main min-h-screen w-full overflow-x-hidden bg-black text-white">
      
      <div className="navbar fixed top-0 left-3 z-30 w-screen text-center text-white">
        <Navbar />
      </div>

      <Home />

      <Projects />

      <Skills />

      <Footer />

    </div>
  );
}

export default App;