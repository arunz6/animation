import { Canvas } from "@react-three/fiber";
import Exper from "./component/Exper";

function App() {
  return (
    <>
      <div className="parent h-screen w-screen  bg-black">
      <div className="3dbg z-0 h-screen w-screen flex  items-center justify-center absolute">
          <Canvas>  
          <Exper />
        </Canvas>
      </div>
       <div className="z-50   absolute top-10 left-10">
        <h1 className="text-5xl mb-4 text-white ">hello</h1>
        <h1 className="text-5xl font-bold text-white ">fullstack </h1>
        </div>
      </div>
    </>
  );
}

export default App;
