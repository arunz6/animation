import { Canvas } from "@react-three/fiber";
import Exper from "./component/Exper";

function App() {
  return (
    <>
      <div className="parent h-screen w-screen bg-black">
        <Canvas>  
          <Exper />
        </Canvas>
      </div>
    </>
  );
}

export default App;
